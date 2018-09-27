/**
 * 获取秘钥
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