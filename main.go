package main

import (
	"fmt"

	"github.com/CHLCN/bluebell/controller"
	"github.com/CHLCN/bluebell/dao/mysql"
	"github.com/CHLCN/bluebell/dao/redis"
	"github.com/CHLCN/bluebell/logger"
	"github.com/CHLCN/bluebell/pkg/snowflake"
	"github.com/CHLCN/bluebell/router"
	"github.com/CHLCN/bluebell/settings"
)

func main() {
	// 1. 加载配置
	if err := settings.Init(); err != nil {
		fmt.Printf("init settings failed, err:%v\n", err)
		return
	}
	// 2. 初始化日志
	if err := logger.Init(settings.Conf.LogConfig, settings.Conf.Mode); err != nil {
		fmt.Printf("init logger failed, err:%v\n", err)
		return
	}

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
		fmt.Printf("init snowflake failed, err:%v\n", err)
		return
	}
	// 初始化gin框架内置的校验器使用的翻译器
	if err := controller.InitTrans("zh"); err != nil {

	}
	// 5. 注册路由
	r := router.SetupRouter(settings.Conf.Mode)
	// 6. 启动服务（优雅关机）

	err := r.Run(fmt.Sprintf(":%d", settings.Conf.Port))
	if err != nil {
		fmt.Printf("run server failed, err%v\n", err)
	}

}
