/**
 * 考试详情相关接口
 */

import request from "../utils/request";


/**
 * 1.1  获取考试详情信息
 * @param params
 * @return {Promise.<Object>}
 */
export async function GetExamInfo(params) {
    return request({
        url: '/ExamSceneInfo/GetExamInfo',
        method: "POST",
        params
    });
}

/**
 * 1.2  查询学科列表
 * @param params
 * @return {Promise.<Object>}
 */
export async function GetExamScaneCourses(params) {
    return request({
        url: '/ExamSceneInfo/GetExamScaneCourses',
        method: "POST",
        params
    });
}

/**
 * 1.3  开启考试
 * @param params
 * @return {Promise.<Object>}
 */
export async function OpenExam(params) {
    return request({
        url: '/ExamSceneInfo/OpenExam',
        method: "POST",
        params
    });
}

/**
 * 1.4  授权开启
 * @param params
 * @return {Promise.<Object>}
 */
export async function AuthorizeStartExam(params) {
    return request({
        url: '/ExamSceneInfo/AuthorizeStartExam',
        method: "POST",
        params
    });
}

/**
 * 1.5  延长考试时长
 * @param params
 * @return {Promise.<Object>}
 */
export async function ProlongExamSceneTime(params) {
    return request({
        url: '/ExamSceneInfo/ProlongExamSceneTime',
        method: "POST",
        params
    });
}

/**
 * 1.6  重考
 * @param params
 * @return {Promise.<Object>}
 */
export async function ResetExam(params) {
    return request({
        url: '/ExamSceneInfo/ResetExam',
        method: "POST",
        params
    });
}

/**
 * 1.7  关闭考试
 * @param params
 * @return {Promise.<Object>}
 */
export async function CloseExam(params) {
    return request({
        url: '/ExamSceneInfo/CloseExam',
        method: "POST",
        params
    });
}

/**
 * 1.8  答卷数据上传
 * @param params
 * @return {Promise.<Object>}
 */
export async function UploadExamData(params) {
    return request({
        url: '/ExamSceneInfo/UploadExamData',
        method: "POST",
        params
    });
}

/**
 * 1.9  选中考生延长时长
 * @param params
 * @return {Promise.<Object>}
 */
export async function ExtendStudentTime(params) {
    return request({
        url: '/Exam/ExtendStudentTime',
        method: "POST",
        params
    });
}

/**
 * 1.10  标记考生
 * @param params
 * @return {Promise.<Object>}
 */
export async function MarkStudent(params) {
    return request({
        url: '/Exam/MarkStudent',
        method: "POST",
        params
    });
}

/**
 * 1.11  强制交卷
 * @param params
 * @return {Promise.<Object>}
 */
export async function HandAllPapers(params) {
    return request({
        url: '/Exam/HandAllPapers',
        method: "POST",
        params
    });
}

/**
 * 1.12  查询在考试人数
 * @param params
 * @return {Promise.<Object>}
 */
export async function QueryExamingCount(params) {
    return request({
        url: '/Exam/QueryExamingCount',
        method: "POST",
        params
    });
}

/**
 * 1.13  查询数据上传数量
 * @param params
 * @return {Promise.<Object>}
 */
export async function QueryUploadCount(params) {
    return request({
        url: '/Exam/QueryUploadCount',
        method: "POST",
        params
    });
}

/**
 * 1.14  查询数据下载
 * @param params
 * @return {Promise.<Object>}
 */
export async function QueryDownloadData(params) {
    return request({
        url: '/BasicData/QueryDownloadData',
        method: "POST",
        params
    });
}

/**
 * 1.15  查询考生密码
 * @param params
 * @return {Promise.<Object>}
 */
export async function FindPassword(params) {
    return request({
        url: '/Student/FindPassword',
        method: "POST",
        params
    });
}

/**
 * 1.16  考生登录设置
 * @param params
 * @return {Promise.<Object>}
 */
export async function LoginSet(params) {
    return request({
        url: '/Student/LoginSet',
        method: "POST",
        params
    });

}

/**
 * 1.17  查询学科数据
 * @param params
 * @return {Promise.<Object>}
 */
export async function QueryCourses(params) {
    return request({
        url: '/BasicData/QueryCourses',
        method: "POST",
        params
    });
}
/**
 * （二期）自动开启考试
 * @param params
 * @return {Promise.<Object>}
 */
export async function AutoOpenExam(params) {
    return request({
        url: '/ExamSceneInfo/AutoOpenExam',
        method: "POST",
        params
    });
}
