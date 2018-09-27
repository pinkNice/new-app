/**
 * 全局公用加接口
 **/


import request from '../utils/request';


/**
 * 获取配置信息
 * @param params
 * @return {Promise.<Object>}
 */
export async function GetSystemInfo(params) {
    return request({
        url: '/Login/GetSystemInfo',
        method: "POST",
        params
    });
}
/**
 * 获取秘钥
 * @param params
 * @return {Promise.<Object>}
 */
export async function GetSecretKey(params) {
    return request({
        url:ApiHost+'/Login/GetSecretKey',
        method: "POST",
        params
    });
}

/**
 * 获取学科列表
 * @param params
 * @return {Promise.<Object>}
 */
export async function getMarkingTasksList(params) {
    return request({
        url:ApiHost+'/ExamSceneInfo/getMarkingTasksList',
        method: "POST",
        params
    });
}

/**
 * 获取加密狗用户名
 * @param params
 * @return {Promise.<Object>}
 */
export async function GetUserNameFormDog(params) {
    return request({
        url: '/Login/GetUserNameFormDog',
        method: "POST",
        params
    });
}
/**
 * 更换加密狗
 * @param params
 * @return {Promise.<Object>}
 */
export async function CheckDogChange(params) {
    return request({
        url: '/Login/CheckDogChange',
        method: "POST",
        params
    });
}
/**
 * 加密狗登录
 * @param params
 * @return {Promise.<Object>}
 */
export async function DogLogin(params) {
    return request({
        url: '/Login/DogLogin',
        method: "POST",
        params
    });
}
/**
 * 脱机码登录
 * @param params
 * @return {Promise.<Object>}
 */
export async function OfflineLogin(params) {
    return request({
        url: '/Login/OfflineLogin',
        method: "POST",
        params
    });
}
/**
 * 退出登录
 * @param params
 * @return {Promise.<Object>}
 */
export async function Logout(params) {
    return request({
        url: '/Login/Logout',
        method: "POST",
        params
    });
}
