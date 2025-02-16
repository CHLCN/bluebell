package main

import (
	"context"
	"fmt"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/CHLCN/bluebell/dao/mysql"
	"github.com/CHLCN/bluebell/dao/redis"
	"github.com/CHLCN/bluebell/logger"
	"github.com/CHLCN/bluebell/pkg/snowflake"
	"github.com/CHLCN/bluebell/routes"
	"github.com/CHLCN/bluebell/settings"
	"github.com/spf13/viper"
	"go.uber.org/zap"
)

func main() {
	// 1. 加载配置
	if err := settings.Init(); err != nil {
		fmt.Printf("init settings failed, err:%v\n", err)
		return
	}
	// 2. 初始化日志
	if err := logger.Init(settings.Conf.LogConfig); err != nil {
		fmt.Printf("init logger failed, err:%v\n", err)
		return
	}
	defer zap.L().Sync()
	zap.L().Debug("logger init success...")
	// 3. 初始化MySQL连接
	if err := mysql.Init(settings.Conf.MySQLConfig); err != nil {
		fmt.Printf("init mysql failed, err:%v\n", err)
		return
	}
	defer mysql.Close()
	// 4. 初始化Redis连接
	if err := redis.Init(settings.Conf.RedisConfig); err != nil {
		fmt.Printf("init redis failed, err:%v\n", err)
		return
	}
	defer redis.Close()
	if err := snowflake.Init(settings.Conf.StartTime, settings.Conf.MachineID); err != nil {
		fmt.Println("StartTime:", settings.Conf.StartTime)
		fmt.Println("MachineID:", settings.Conf.MachineID)
		fmt.Printf("init snowflake failed, err:%v\n", err)
		return
	}
	// 5. 注册路由
	r := routes.Setup()
	// 6. 启动服务（优雅关机）
	// srv := &http.Server{
	// 	Addr:    fmt.Sprintf("%d", viper.GetInt("app.port")),
	// 	Handler: r,
	// }
	addr := fmt.Sprintf("%s:%d", viper.GetString("app.host"), viper.GetInt("app.port"))
	srv := &http.Server{
		Addr:    addr,
		Handler: r,
	}

	go func() {
		if err := srv.ListenAndServe(); err != nil && err != http.ErrServerClosed {
			// log.Fatalf("listen: %s\n", err)
			zap.L().Fatal("listen:", zap.Error(err))
		}
	}()

	quit := make(chan os.Signal, 1)

	signal.Notify(quit, syscall.SIGINT, syscall.SIGTERM)
	<-quit
	zap.L().Info("Shutdown Server ...")
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	if err := srv.Shutdown(ctx); err != nil {
		zap.L().Fatal("Server Shutdown", zap.Error(err))
	}
	zap.L().Info("Server exiting")

}
