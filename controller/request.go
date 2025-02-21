package controller

import (
	"errors"

	"github.com/gin-gonic/gin"
)

const CtxUserIDKey = "userID"

var ErrorUserLogin = errors.New("用户未登录")

// getCurrentUser 获取当前登录用户的ID
func getCurrentUser(c *gin.Context) (userID int64, err error) {
	uid, ok := c.Get(CtxUserIDKey)
	if !ok {
		err = ErrorUserLogin
		return
	}
	userID, ok = uid.(int64)
	if !ok {
		err = ErrorUserLogin
		return
	}
	return
}
