package logic

import (
	"strconv"

	"github.com/CHLCN/bluebell/dao/redis"
	"github.com/CHLCN/bluebell/models"
	"go.uber.org/zap"
)

// 投票功能：
// 1. 用户投票的数据

// 简化版的投票分数算法：投一票加432分 86400/200 -> 需要200张赞成票可以使帖子相当于第二天的新帖

/* 投票的几种情况：
direction=1时，有两种情况：
	1. 之前没有投过票，现在投赞成票  --> 更新分数和投票记录
	2. 之前投反对票，现在改投赞成票  --> 更新分数和投票记录
direction=0时，有两种情况：
	1. 之前投过赞成票，现在要取消投票 --> 更新分数和投票记录
	2. 之前投过反对票，现在要取消投票 --> 更新分数和投票记录
direction=-1时，有两种情况：
	1. 之前没有投过票，现在投反对票   --> 更新分数和投票记录
	2. 之前投过赞成票，现在改投反对票 --> 更新分数和投票记录

投票的限制：
每个帖子自发表日起一个星期内允许用户投票，超过一周则不允许投票
	1. 到期之后将redis中保存的赞成票数及反对票数存储到mysql表中
	2. 到期之后删除 KeyPostVotedZSetPf
*/

// VoteForPost 为帖子投票的函数
func VoteForPost(userID int64, p *models.ParamVoteData) error {
	zap.L().Debug("VoteForPost",
		zap.Int64("userID", userID),
		zap.String("postID", p.PostID),
		zap.Int8("direction", p.Direction))
	return redis.VoteForPost(strconv.Itoa(int(userID)), p.PostID, float64(p.Direction))

}
