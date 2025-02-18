package logic

import (
	"github.com/CHLCN/bluebell/dao/mysql"
	"github.com/CHLCN/bluebell/models"
	"github.com/CHLCN/bluebell/pkg/snowflake"
)

// 存放业务逻辑的代码

func SignUp(p *models.ParamSignUp) (err error) {
	// 1.判断用户存不存在
	if err := mysql.CheckUserExist(p.Username); err != nil {
		// 数据库查询出错
		return err
	}

	// 2.生成UID
	userID := snowflake.GenID()
	// 构造一个User实例
	user := &models.User{
		UserID:   userID,
		Username: p.Username,
		Password: p.Password,
	}
	// 3.存入数据库
	return mysql.InsertUser(user)
}
