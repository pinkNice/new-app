/**
 * 监控相关接口
 */
import request from '../utils/request';


/**
 * 缺考表
 * @param params
 * @return {Promise.<Object>}
 */
export async function AbsentRecords(params) {
    return request({
        url: '/Exam/AbsentRecords',
        method: "POST",
        params
    });
}

/**
 * 获取监考记录
 * @param params
 * @return {Promise.<Object>}
 */
export async function SuperviseRecords(params) {
    return request({
        url: '/Exam/SuperviseRecords',
        method: "POST",
        params
    });
}
/**
 * 新增监考记录
 * @param params
 * @return {Promise.<Object>}
 */
export async function AddSuperviseRecord(params) {
    return request({
        url: '/Exam/AddSuperviseRecord',
        method: "POST",
        params
    });
}

/**
 * 获取答卷数据
 * @param params
 * @return {Promise.<Object>}
 */
export async function PaperData(params) {
    return request({
        url: '/Exam/PaperData',
        method: "POST",
        params
    });
}

/**
 * 导出监管数据
 * @param params
 * @return {Promise.<Object>}
 */
export async function ExportSuperviseRecords(params) {
    return request({
        url: '/Exam/ExportSuperviseRecords',
        method: "POST",
        params,
        responseType: "blob"
    });
}
/**
 * 导出缺考表
 * @param params
 * @return {Promise.<Object>}
 */
export async function ExportAbsentRecords(params) {
    return request({
        url: '/Exam/ExportAbsentRecords',
        method: "POST",
        params,
        responseType: "blob"
    });
}