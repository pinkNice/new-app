/**
 * 更换加密狗
 */
import Mock from "mockjs";

const data = [];

data.push(Mock.mock({
    "Status": 2, //状态：1：第一次登录或未更换狗登录，2:更换狗登录
    "LastDogId": "02121545", //上次登录狗id
    "NewDogId": "21345465", //本次登录狗id
}));

export default {
    getSystemInfo: () => {
        return {
            data: data
        }
    }
}