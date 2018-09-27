/**
 * 获取加密狗用户名
 */
import Mock from "mockjs";

const data = [];

data.push(Mock.mock({
    UserName: "sadsadasd"
}));

export default {
    getSystemInfo: () => {
        return {
            data: data
        }
    }
}