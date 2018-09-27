/**
 * 错题相关接口
 */

import request from '../utils/request';

/**
 * 获取题型
 * @param params
 * @return {Promise.<Object>}
 */
export async function GetQuestionCategories(params) {
    return request({
        url: '/WrongQuestion/GetQuestionCategories',
        method: "POST",
        params,
    });
}
/**
 * 错题列表
 * @param params
 * @return {Promise.<Object>}
 */
export async function GetWrongQuestions(params) {
    return request({
        url: '/WrongQuestion/GetWrongQuestions',
        method: "POST",
        params,
    });
}
/**
 * 新增错题座位号
 * @param params
 * @return {Promise.<Object>}
 */
export async function GetSeatNumbers(params) {
    return request({
        url: '/WrongQuestion/GetSeatNumbers',
        method: "POST",
        params,
    });
}
/**
 * 新增错题考生信息
 * @param params
 * @return {Promise.<Object>}
 */
export async function GetStudentInfo(params) {
    return request({
        url: '/WrongQuestion/GetStudentInfo',
        method: "POST",
        params,
    });
}
/**
 * 新增错题题号信息
 * @param params
 * @return {Promise.<Object>}
 */
export async function GetQuestionOrderIndex(params) {
    return request({
        url: '/WrongQuestion/GetQuestionOrderIndex',
        method: "POST",
        params,
    });
}
/**
 * 新增错题图片
 * @param params
 * @return {Promise.<Object>}
 */
export async function GetPicture(params) {
    return request({
        url: '/WrongQuestion/GetPicture',
        method: "POST",
        params,
    });
}
/**
 * 错题类型
 * @param params
 * @return {Promise.<Object>}
 */
export async function GetWrongTypes(params) {
    return request({
        url: '/WrongQuestion/GetWrongTypes',
        method: "POST",
        params,
    });

}
/**
 * 错题上报
 * @param params
 * @return {Promise.<Object>}
 */
export async function Report(params) {
    return request({
        url: '/WrongQuestion/Report',
        method: "POST",
        params,
    });
}
/**
 * 错题上报
 * @param params
 * @return {Promise.<Object>}
 */
export async function SaveWrongQuestion(params) {
    return request({
        url: '/WrongQuestion/SaveWrongQuestion',
        method: "POST",
        params,
    });
}
/**
 * 导出错题
 * @param params
 * @return {Promise.<Object>}
 */
export async function ExportRecords(params) {
    return request({
        url: '/WrongQuestion/ExportRecords',
        method: "POST",
        params,
        responseType: "blob"
    });
}
/**
 * 查看错题详情
 * @param params
 * @return {Promise.<Object>}
 */
export async function GetWrongQuestionDetail(params) {
    return request({
        url: '/WrongQuestion/GetWrongQuestionDetail',
        method: "POST",
        params,
    });
}