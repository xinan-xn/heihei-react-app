import { fetchPost } from './chenHttp'


/**
 * 获取首页列表
 * @export
 * @param {Object} params - 需要上传的数据，参考backData
 * order=desc 
    sort=id
    category_id=1
    recommend=1
 * @returns
 * page：页码
rows：条数
 * 
 */
// 讲师列表(返回全部) 他和 1) 接口使用同一个 
// /lecturer/lists?page=1&rows=100


// POST：
// 	order:desc(降序)/asc(升序) 默认：desc
// 	sort:sort(后台可以指定排序)/id(加入的ID)/update_time(修改时间) 默认：按照发布文章的修改时间update_time  desc 降序
// 	category_id=2  固定值
// 	recommend： 0或者不传
// 	返回值和 1） 一样
export async function getList(params) {
    return await fetchPost("/lecturer/lists?page=1&rows=20", params)
}



/**
 * 判断是否登录
 * @export
 * 返回值：
    code:0 已经登陆
    code:1 未登陆
 *
 * @returns
 * 
 * 
 */

export async function isLogin(params) {
    return await fetchPost("/user/islogin")
}



/**
* 注册
* @export
* @param {Object} params - 需要上传的数据，参考backData
*verify:验证码
username:用户名
password:密码
repassword:确认密码
返回值：
code:0 msg:注册成功
code:1 msg:验证码错误
code:2 msg:密码和重复密码不一致！
code:3(注册失败) msg:会提示你不同的注册失败原因
code:4 msg:注册已关闭(后台可控制)
* @returns
* 
* 
*/
export async function getRegister(params) {
    return await fetchPost("/user/register", params)
}


/* /user/login
POST：
    verify:验证码
    username:用户名
    password:密码
返回值：
    code:0 msg:登陆成功
    code:1 msg:验证码错误
    code:2(登陆失败) msg:会提示你不同的注册失败原因 */

export async function login(params) {
    return await fetchPost("/user/login", params)
}


// 登出

export async function logout(params) {
    return await fetchPost("/user/logout", params)
}

//详情
// article_id : 文章的id 就是列表里的id
export async function lecturer(params) {
    return await fetchPost("/lecturer/info", params)
}
//详情留言列表
//article_id : 文章的id 就是列表里的id

export async function getcomment(params) {
    return await fetchPost("/lecturer/getcomment?page=1&rows=20", params)
}

//评论接口
/* 参数:
    article_id:文章id
    content:评论内容 */
export async function addcomment(params) {
    return await fetchPost("/lecturer/addcomment", params)
}

//是否点赞
/*
参数:
    article_id:文章id
返回值:
    {"code":0,"gooid":1}
    code:0 msg:
    code:1 msg:未登录
    code:2 msg:收藏文章id不能为空
    code:3 msg:未点赞
*/
export async function getGood(params) {
    return await fetchPost("/lecturer/getgood?", params)
}
//点赞
/*
参数:
    article_id:文章id
返回值:
    {"code":0,"msg":"\u8bc4\u8bba\u6210\u529f"}
    code:0 msg:点赞成功
    code:1 msg:未登录
    code:2 msg:收藏文章id不能为空
    code:3 msg:点赞失败
*/
export async function good(params) {
    return await fetchPost("/lecturer/good", params)
}
//取消点赞
/* 
参数:
    goodid:在获取是否点赞接口中获取到的id
    article_id:文章id
返回值 
	{"code":0,"msg":"\u8bc4\u8bba\u6210\u529f"}
	code:0 msg:取消点赞成功
	code:1 msg:未登录
	code:2 msg:文章id不能为空
	code:3 msg:收藏id不能为空
*/

export async function cancelGood(params) {
    return await fetchPost("/lecturer/cancelgood?", params)
}

//验证码
export async function verify() {
    return await fetchPost("/user/verify")
}