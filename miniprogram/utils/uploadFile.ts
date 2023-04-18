
// HTTP请求配置
interface RequestConfig {
	/** API路径 */
	url: string
	/** 要上传文件资源的路径 (本地路径) */
	filePath: string
	/** 文件对应的 key，开发者在服务端可以通过这个 key 获取文件的二进制内容 */
	name?: string,
	/** HTTP 请求中其他额外的 form data */
	formData?: Object
	/** 无TOKEN触发异常捕获时，是否执行异常逻辑 */
	needToken?: boolean
	/** HTTP 请求 Header，Header 中不能设置 Referer */
	header?: object
	/** 请求报错时，是否弹出message提示（默认弹出）*/
	noShowMsg?: boolean
}
// 继承中间类型，data声明为any
interface AnyResult extends WechatMiniprogram.UploadFileSuccessCallbackResult {
	data: any
}
// 从中间类型继承一个泛型接口，data声明为泛型
interface SpecResult<T> extends AnyResult {
	data: T
}
// 声明业务数据类型
export interface MyAwesomeData<T> {
	code: number
	msg: string
	data: T
}


class HttpUploadFile {
	private static instance: HttpUploadFile
	private constructor() { }
	/** 请求函数(单例模式)
	*
	* **注意：**
	* `method`需使用`HttpMethod`枚举类，切勿自行定义
	*
	* **示例代码**
	* ```js
	 HttpUploadFile.getInstance().request({
		 url: '/Api',
		 method: HttpMethod.GET
	 })
	* ```
	*/
	public static getInstance(): HttpUploadFile {
		if (!this.instance) {
			this.instance = new HttpUploadFile()
		}
		return this.instance
	}

	// 处理请求异常状态码
	private handerErrorStatus(statusCode: number, requestConfig: RequestConfig) {
		let msg = '服务找不到'
		if (statusCode === 502 || statusCode === 503) {
			msg = '服务器开小差了~'
		} else if (statusCode === 401) {
			msg = '未登录'
		}
		!requestConfig.noShowMsg && wx.showToast({
			title: `${msg}，错误码：${statusCode}`,
			icon: 'none'
		})
		return msg
	}

	// 处理请求异常
	private handerError(err: { errMsg: string }, requestConfig: RequestConfig) {
		let msg = `请求异常`
		if (/timeout/.test(err.errMsg)) {
			msg = '请求超时'
		}
		!requestConfig.noShowMsg && wx.showToast({
			title: msg,
			icon: 'none'
		});
		return msg
	}

	public uploadFile<T>(requestConfig: RequestConfig): Promise<MyAwesomeData<T>> {
		let _this = this
		return new Promise((resolve, reject) => {
			// 默认header
			let header = {
				'content-type': 'multipart/form-data'
			}
			let formData = {}
			wx.uploadFile({
				url: `${requestConfig.url}`,
				filePath: `${requestConfig.filePath}`,
				name: `${requestConfig.name || 'file'}`,
				formData: Object.assign(formData, requestConfig?.formData),
				header: Object.assign(header, requestConfig?.header),
				success: function (res: SpecResult<any>) {
					// console.log('发送返回:', res) //res:{cookies, data, header, statusCode}
					const code = res.statusCode || -404
					const data = res.data
					if (code === 200) {
						resolve(res.data as any)
					} else {
						let errMsg = _this.handerErrorStatus(code, requestConfig)
						reject({ code, data, msg: errMsg })
					}
				},
				fail: err => {
					let msg = _this.handerError(err, requestConfig)
					reject({ msg })
				}
			})
		})
	}

	/**
	 * @description: post请求函数
	 * @param {string} url 请求地址
	 * @param {Object} data 请求参数
	 * @param {RequestConfig} OtherConfig request其他配置
	 * @return {*}
	 */
	public post<T>(url: string, filePath: string, OtherConfig?: RequestConfig) {
		return this.uploadFile<T>({ url, filePath, ...OtherConfig })
	}
}

export const httpUploadFile = HttpUploadFile.getInstance()

