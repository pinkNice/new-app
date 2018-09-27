/**
 * 获取学科列表
 */
import Mock from "mockjs";

const data = [];

data.push(Mock.mock({
    SystemName: "江西省普通高中学业水平考试", //系统名称
    SystemLogo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAolBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8ELnaCAAAANXRSTlMA0qTwHgTmwVza1ZlZy6KggxMHzzAiyLqOGhHqq1MpFt7EioBIsJN7c2U/+vZsOrNhNAxkZzRlUFcAAAISSURBVEjH7dbZjpswFAbgQ8AOJFBI2IZ9X7Mn9fu/Wo2blMxAmWgiVdUo/wXWOfg7trgCXnnlH8eR9ELLXehjBqUtqWha7cNuEUgXvbm1V6nXNeYMG4Y7atF8iw85wywqsIQLwmJTvLN4/m0cY7plkyGHXJN23bNyreZw9ru1+OiE0KVYIp0W1uSWFgA08geLbJ11E0Onx7anVwgY5u+wTcfyQ7yuLM/ucUyb2hCTE2TkI1bZZeIec7T0R7AG1gAvoaBP7j1WR3AReSN49hi2KvJ1zPkP48VvvLrDswfxD+CewYv/FCsgv/BXcDmJ3Wn8NomjZ7DwDDbHcTyNOYZNN1HwAMfKEsS/4xnoDIeAXDOv9Tt8OO6FM8Dlc+wAi3vhr9hqEbAEn+JtJYotG9DyDCtRV4T5MVCn8S2xGrCTpBnx6KD1ruC79hSO6bl4kSh4Q8t5C2DjGWkALnF3I8myJG9LyHIcp1obsVJofExIDSfuIAGie6Vl4AINEoL0OI7Z68g0uwnrWiEpVPoRLHKQgSYyhYh9uTGsIjn1EwnzPF7YZQ4owJlR7P3kBJCXNod5D0uJn8pIHWKCPWypWiOLPzV/ziW1adRBXjeOWSXc3Nd2otxoqkV3kfdYJ4S3MwP1nbWxK+XQXJmhWO5O6/4FMjKbJ0TvO3ijGWO/GS64ewcGMbQN7qtsSKdjZPDKK985vwAxm+iuMKlJZQAAAABJRU5ErkJggg==", //系统logo,base64格式
    TerminalName: "教师端", //系统终端名称
    Copyright: "江西省考试院" //版权信息
}));

export default {
    getSystemInfo: () => {
        return {
            data: data
        }
    }
}