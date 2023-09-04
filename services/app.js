
// SD站点域名
let http_api_sd = 'http://43.139.23.56:8014'
let HTTP_URL_BACK = 'http://172.0.0.1:7593'
// let http_api_sd = 'http://43.139.23.56:7860'
// MJ站点域名
let http_api_mj = '参考README文档：2.3 配置midjourney'

module.exports = {
	HTTP_URL_SD: http_api_sd,
	HTTP_URL_BACK: HTTP_URL_BACK,
	HTTP_URL_MJ: http_api_mj,
	HEADER: {
		'content-type': 'application/json',
		//#ifdef H5
		'Form-type': navigator.userAgent.toLowerCase().indexOf("micromessenger") !== -1 ? 'wechat' : 'h5',
		//#endif
		//#ifdef MP
		'Form-type': 'routine',
		//#endif
		//#ifdef APP-PLUS
		'Form-type': 'app',
		//#endif
	},
	// 回话密钥名称 请勿修改此配置
	TOKENNAME: 'token',
	// MJ任务进度间隔
	TIMER_FETCH_INTERVAL: 10000,
	// 任务重试次数
	FETCH_REPEAT_COUNT: 30,
};
