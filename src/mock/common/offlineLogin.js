/**
 * 脱机码登录
 */
import Mock from "mockjs";

const data = [];

data.push(Mock.mock({
    "LoginStatus": 1, //登录状态：1：成功，2：其他
    "UserTrueName": "张三", //老师姓名
    "SchoolName": "南昌大学", //考点
    "RoomName": "A栋101", //考场
    "LoGo": "", //LOGO
    "ClientName": "无纸化考试系统", //客户端名称
    "Token": "", //用户TOKEN
    "AnnouncementNotReadNumber": "2" //未读公告数
}));

export default {
    getSystemInfo: () => {
        return {
            data: data
        }
    }
}