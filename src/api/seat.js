/**
 * 座位表相关接口
 */

import request from "../utils/request";


/**
 * 获取座位表
 * @param params
 * @return {Promise.<Object>}
 */
export async function GetSeatList(params) {
    return request({
        url: '/Seat/GetSeatList',
        method: "POST",
        params
    });
}

/**
 * 座位表解锁
 * @param params
 * @return {Promise.<Object>}
 */
export async function SeatUnlock(params) {
    return request({
        url: '/Seat/SeatUnlock',
        method: "POST",
        params
    });
}

/**
 * 座位表下载模版
 * @param params
 * @return {Promise.<Object>}
 */
export async function DownloadTemplate(params) {
    return request({
        url: '/Seat/DownloadTemplate',
        method: "POST",
        params,
        responseType: "blob"
    });
}

/**
 * 座位表导出模版
 * @param params
 * @return {Promise.<Object>}
 */
export async function ExportTemplate(params) {
    return request({
        url: '/Seat/ExportTemplate',
        method: "POST",
        params,
        responseType: "blob"
    });
}
