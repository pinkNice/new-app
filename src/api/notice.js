/**
 * 公告相关接口
 */
import request from "../utils/request";


/**
 * 公告列表
 * @param params
 * @return {Promise.<Object>}
 */
export async function GetAnnouncementList(params) {
    return request({
        url: '/Exam/GetAnnouncementList',
        method: "POST",
        params,
    });
}
/**
 * 公告详情
 * @param params
 * @return {Promise.<Object>}
 */
export async function GetAnnouncementInfo(params) {
    return request({
        url: '/Exam/GetAnnouncementInfo',
        method: "POST",
        params,
    });
}
/**
 * 详情首页
 * @param params
 * @return {Promise.<Object>}
 */
export async function GetExamIndexInfo(params) {
    return request({
        url: '/Exam/GetExamIndexInfo',
        method: "POST",
        params,
    });
}
/**
 * 详情首页
 * @param params
 * @return {Promise.<Object>}
 */
export async function StudentResetExam(params) {
    return request({
        url: '/Student/StudentResetExam',
        method: "POST",
        params,
    });
}
