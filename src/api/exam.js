/**
 * 考试场次相关接口
 */

import request from "../utils/request";


/**
 * 获取考试场次列表
 * @param params
 * @return {Promise.<Object>}
 */
export async function GetExamSceneList(params) {
    return request({
        url: '/Exam/GetExamSceneList',
        method: "POST",
        params
    });
}

/**
 * 数据下载初始化页面
 * @param params
 * @return {Promise.<Object>}
 */
export async function GetExamInitData(params) {
    return request({
        url: '/Exam/GetExamInitData',
        method: "POST",
        params
    });
}


/**
 * 点击数据下载
 * @param params
 * @return {Promise.<Object>}
 */
export async function GetExamData(params) {
    return request({
        url: '/Exam/GetExamData',
        method: "POST",
        params
    });
}
