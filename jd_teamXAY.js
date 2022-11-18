/*
组队分豆-新安怡 [jd_teamXAY.js]

————————————————
IOS等用户直接用NobyDa的jd cookie
============Quantumultx===============
[task_local]
#组队分豆-新安怡
0 15 * * * https://raw.githubusercontent.com/KingRan/KR/main/jd_teamXAY.js, tag=组队分豆-新安怡, enabled=true
================Loon==============
[Script]
cron "0 15 * * *" script-path=https://raw.githubusercontent.com/KingRan/KR/main/jd_teamXAY.js,tag=组队分豆-新安怡
===============Surge=================
组队分豆-新安怡 = type=cron,cronexp="0 15 * * *",wake-system=1,timeout=3600,script-path=https://raw.githubusercontent.com/KingRan/KR/main/jd_teamXAY.js
============小火箭=========
组队分豆-新安怡 = type=cron,script-path=https://raw.githubusercontent.com/KingRan/KR/main/jd_teamXAY.js, cronexpr="0 15 * * *", timeout=3600, enable=true
*/
const Env=require('./utils/Env.js');
const $=new Env("新安怡组队分豆-加密");
const jdCookieNode=$.isNode()?require('./jdCookie.js'):'';
const notify=$.isNode()?require('./sendNotify'):'';
const getToken=require('./function/krgetToken');
let domains='https://lzkjdz-isv.isvjcloud.com';
let cookiesArr=[],cookie='',message='';
let ownCode=null;
let activityCookie='';
lz_cookie={};
if($.isNode()){
	Object.keys(jdCookieNode).forEach(_0x1b4c7d=>{
		cookiesArr.push(jdCookieNode[_0x1b4c7d]);
	});
	if(process.env.JD_DEBUG&&process.env.JD_DEBUG==='false')console.log=()=>{};
}else{
	let cookiesData=$.getdata('CookiesJD')||'[]';
	cookiesData=JSON.parse(cookiesData);
	cookiesArr=cookiesData.map(_0x24e50d=>_0x24e50d.cookie);
	cookiesArr.reverse();
	cookiesArr.push(...[$.getdata('CookieJD2'),$.getdata('CookieJD')]);
	cookiesArr.reverse();
	cookiesArr=cookiesArr.filter(_0xb573e4=>!!_0xb573e4);
}
!(async()=>{
	if(!cookiesArr[0]){
		$.msg($.name,'【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取','https://bean.m.jd.com/bean/signIndex.action',{'open-url':'https://bean.m.jd.com/bean/signIndex.action'});
		return;
	}
	authorCodeList=["90e8dff7749f4a31a9865c701b130a39"];//await getAuthorCodeList('http://code.kingran.ga/xay.json');
	console.log('\n此活动需要新加入会员店铺才能加入队伍，\n若已经入会过，则无法重复入队。');
	console.log('\n瓜分入口:\nhttps://lzkjdz-isv.isvjcloud.com/pool/captain/4330568?activityId=49aad82a1afb4bd7b84eb6e79f633a67');
	for(let _0x8a4b6e=0;_0x8a4b6e<cookiesArr.length;_0x8a4b6e++){
		if(cookiesArr[_0x8a4b6e]){
			cookie=cookiesArr[_0x8a4b6e];
			originCookie=cookiesArr[_0x8a4b6e];
			newCookie='';
			$.UserName=decodeURIComponent(cookie.match(/pt_pin=(.+?);/)&&cookie.match(/pt_pin=(.+?);/)[1]);
			$.index=_0x8a4b6e+1;
			$.isLogin=true;
			$.nickName='';
			await checkCookie();
			console.log('\n******开始【京东账号'+$.index+'】'+($.nickName||$.UserName)+'*********\n');
			if(!$.isLogin){
				$.msg($.name,'【提示】cookie已失效','京东账号'+$.index+' '+($.nickName||$.UserName)+'\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action',{'open-url':'https://bean.m.jd.com/bean/signIndex.action'});
				if($.isNode()){
					await notify.sendNotify($.name+'cookie已失效 - '+$.UserName,'京东账号'+$.index+' '+$.UserName+'\n请重新登录获取cookie');
				}
				continue;
			}
			$.ADID=getUUID('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',1);
			$.UUID=getUUID('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
			$.authorCode=ownCode?ownCode:authorCodeList[random(0,authorCodeList.length)];
			$.authorNum=''+random(1000000,9999999);
			$.activityId='49aad82a1afb4bd7b84eb6e79f633a67';
			$.activityShopId='1000002527';
			$.activityUrls='https://lzkjdz-isv.isvjcloud.com/';
			$.activityUrl='https://lzkjdz-isv.isvjcloud.com/pool/captain/'+$.authorNum+'?activityId='+$.activityId+'&signUuid='+encodeURIComponent($.authorCode)+'&adsource=null&shareuserid4minipg=null&shopid='+$.activityShopId+'&lng=00.000000&lat=00.000000&sid=&un_area=';
			await getUA();
			await xay();
			await $.wait(4000);
		}
	}
	if(message!==''){
		if($.isNode()){
			await notify.sendNotify($.name,message,'','\n');
		}else{
			$.msg($.name,'有点儿收获',message);
		}
	}
})().catch(_0x2c4b72=>{
	$.log('','❌ '+$.name+', 失败! 原因: '+_0x2c4b72+'!','');
}).finally(()=>{
	$.done();
});
async function xay(){
	$.token=null;
	$.secretPin=null;
	$.openCardActivityId=null;
	await getFirstLZCK();
	$.token=await getToken(cookie,domains);
	if($.token==''){
		console.log('获取[token]失败！');
		return;
	}
	await task('customer/getSimpleActInfoVo','activityId='+$.activityId);
	await $.wait(2000);
	if($.token){
		await getMyPing();
		if($.secretPin){
			console.log('加入队伍：'+$.authorCode);
			await task('common/accessLogWithAD','venderId='+$.activityShopId+'&code=46&pin='+encodeURIComponent($.secretPin)+'&activityId='+$.activityId+'&pageUrl='+$.activityUrl+'&subType=app&adSource=null');
			await $.wait(2000);
			await task('pool/activityContent','activityId='+$.activityId+'&pin='+encodeURIComponent($.secretPin)+'&signUuid='+encodeURIComponent($.authorCode));
			if($.activityContent){
				if($.activityContent.canJoin){
					$.log('加入队伍成功，请等待队长瓜分京豆');
					await $.wait(2000);
					await task('pool/saveCandidate','activityId='+$.activityId+'&pin='+encodeURIComponent($.secretPin)+'&signUuid='+encodeURIComponent($.authorCode)+'&pinImg='+encodeURIComponent('https://img10.360buyimg.com/imgzone/jfs/t1/21383/2/6633/3879/5c5138d8E0967ccf2/91da57c5e2166005.jpg'));
					$.log('加入会员');
					$.errorJoinShop='';
					await joinShop();
					if($.errorJoinShop.indexOf('活动太火爆，请稍后再试')>-1){
						console.log('尝试第一次 重新开卡');
						await $.wait(500);
						await joinShop();
					}
					if($.errorJoinShop.indexOf('活动太火爆，请稍后再试')>-1){
						console.log('尝试第二次 重新开卡');
						await $.wait(500);
						await joinShop();
					}
					if($.errorJoinShop.indexOf('活动太火爆，请稍后再试')>-1){
						console.log('尝试第三次 重新开卡');
						await $.wait(500);
						await joinShop();
					}
					if($.errorJoinShop.indexOf('活动太火爆，请稍后再试')>-1){
						console.log('抱歉，开卡不成功 ，请重新运行脚本');
					}
					await $.wait(2000);
					await task('pool/activityContent','activityId='+$.activityId+'&pin='+encodeURIComponent($.secretPin)+'&signUuid='+encodeURIComponent($.authorCode));
					await $.wait(2000);
					if($.index===1){
						if($.activityContent.canCreate){
							$.log('创建队伍');
							await $.wait(2000);
							await task('pool/saveCaptain','activityId='+$.activityId+'&pin='+encodeURIComponent($.secretPin)+'&pinImg='+encodeURIComponent('https://img10.360buyimg.com/imgzone/jfs/t1/21383/2/6633/3879/5c5138d8E0967ccf2/91da57c5e2166005.jpg'));
							console.log('队伍ID：'+ownCode);
						}
					}
				}else{
					if($.index===1){
						$.log('创建队伍');
						if($.activityContent.canCreate){
							await $.wait(2000);
							await task('pool/saveCaptain','activityId='+$.activityId+'&pin='+encodeURIComponent($.secretPin)+'&pinImg='+encodeURIComponent('https://img10.360buyimg.com/imgzone/jfs/t1/21383/2/6633/3879/5c5138d8E0967ccf2/91da57c5e2166005.jpg'));
							console.log('队伍ID：'+ownCode);
						}else{
							ownCode=$.activityContent.signUuid;
							console.log('队伍ID：'+ownCode);
						}
					}else{
						$.log('你已经是店铺会员了，无法加入队伍！');
					}
				}
			}
		}else{
			$.log('没有成功获取到用户信息');
		}
	}else{
		$.log('没有成功获取到用户鉴权信息');
	}
}
function task(_0x3c4a12,_0x1646af){
	return new Promise(_0x28c1ed=>{
		$.post(taskUrl(_0x3c4a12,_0x1646af),async(_0x477306,_0x3b09c2,_0x3231aa)=>{
			try{
				if(_0x477306){
					$.log(_0x477306);
				}else{
					setActivityCookie(_0x3b09c2);
					if(_0x3231aa){
						_0x3231aa=JSON.parse(_0x3231aa);
						if(_0x3231aa.result){
							switch(_0x3c4a12){
								case 'pool/saveCaptain':
									if(_0x3231aa.data.signUuid){
										$.log('创建队伍成功');
										if($.index===1){
											ownCode=_0x3231aa.data.signUuid;
										}
									}
									break;
								case 'common/getSimpleActInfoVo':
									$.jdActivityId=_0x3231aa.data.jdActivityId;
									$.venderId=_0x3231aa.data.venderId;
									break;
								case 'wxActionCommon/getUserInfo':
									$.nickname=_0x3231aa.data.nickname;
									$.pinImg='https://img10.360buyimg.com/imgzone/jfs/t1/7020/27/13511/6142/5c5138d8E4df2e764/5a1216a3a5043c5d.png';
									break;
								case 'pool/activityContent':
									$.activityContent=_0x3231aa.data;
									$.openCard=_0x3231aa.data.openCard;
									if($.index===1){
										ownCode=_0x3231aa.data.signUuid;
									}
									break;
								case 'pool/updateCaptain':
									console.log(_0x3231aa.data);
									break;
								default:
									break;
							}
						}else{
							$.log(JSON.stringify(_0x3231aa));
						}
					}else{}
				}
			}catch(_0x224fa3){
				$.log(_0x224fa3);
			}finally{
				_0x28c1ed();
			}
		});
	});
}
async function joinShop(){
	return new Promise(async _0x21cb51=>{
		$.errorJoinShop='活动太火爆，请稍后再试';
		let _0x4956fb='';
		if($.shopactivityId)_0x4956fb=',"activityId":'+$.shopactivityId;
		const _0x5bee62='{"venderId":"1000002527","shopId":"1000002527","bindByVerifyCodeFlag":1,"registerExtend":{},"writeChildFlag":0'+_0x4956fb+',"channel":406}';
		const _0xf3f52f={'appid':'jd_shop_member','functionId':'bindWithVender','clientVersion':'9.2.0','client':'H5','body':JSON.parse(_0x5bee62)};
		const _0x1e2c68=await getH5st('8adfb',_0xf3f52f);
		const _0x51d71d={'url':'https://api.m.jd.com/client.action?appid=jd_shop_member&functionId=bindWithVender&body='+_0x5bee62+'&clientVersion=9.2.0&client=H5&uuid=88888&h5st='+encodeURIComponent(_0x1e2c68),'headers':{'accept':'*/*','accept-encoding':'gzip, deflate, br','accept-language':'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7','cookie':cookie,'origin':'https://shopmember.m.jd.com/','user-agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36'}};
		$.get(_0x51d71d,async(_0x1adce2,_0xaf1917,_0x42264d)=>{
			try{
				_0x42264d=_0x42264d&&_0x42264d.match(/jsonp_.*?\((.*?)\);/)&&_0x42264d.match(/jsonp_.*?\((.*?)\);/)[1]||_0x42264d;
				let _0x405fd9=$.toObj(_0x42264d,_0x42264d);
				if(_0x405fd9&&typeof _0x405fd9=='object'){
					if(_0x405fd9&&_0x405fd9.success===true){
						console.log(_0x405fd9.message);
						$.errorJoinShop=_0x405fd9.message;
						if(_0x405fd9.result&&_0x405fd9.result.giftInfo){
							for(let _0xcbb8e1 of _0x405fd9.result.giftInfo.giftList){
								console.log('入会获得:'+_0xcbb8e1.discountString+_0xcbb8e1.prizeName+_0xcbb8e1.secondLineDesc);
							}
						}
					}else if(_0x405fd9&&typeof _0x405fd9=='object'&&_0x405fd9.message){
						$.errorJoinShop=_0x405fd9.message;
						console.log(''+(_0x405fd9.message||''));
					}else{
						console.log(_0x42264d);
					}
				}else{
					console.log(_0x42264d);
				}
			}catch(_0x4b33e9){
				$.logErr(_0x4b33e9,_0xaf1917);
			}finally{
				_0x21cb51();
			}
		});
	});
}
async function getshopactivityId(){
	return new Promise(async _0x49031d=>{
		let _0x2e3094='{"venderId":"1000002527","channel":406,"payUpShop":true}';
		const _0x5ade29={'appid':'jd_shop_member','functionId':'getShopOpenCardInfo','clientVersion':'9.2.0','client':'H5','body':JSON.parse(_0x2e3094)};
		const _0x36422f=await getH5st('ef79a',_0x5ade29);
		const _0x3a2103={'url':'https://api.m.jd.com/client.action?appid=jd_shop_member&functionId=getShopOpenCardInfo&body='+_0x2e3094+'&clientVersion=9.2.0&client=H5&uuid=88888&h5st='+encodeURIComponent(_0x36422f),'headers':{'accept':'*/*','accept-encoding':'gzip, deflate, br','accept-language':'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7','cookie':cookie,'origin':'https://shopmember.m.jd.com/','user-agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36'}};
		$.get(_0x3a2103,async(_0x46e4a0,_0x41bc35,_0x253bbf)=>{
			try{
				_0x253bbf=_0x253bbf&&_0x253bbf.match(/jsonp_.*?\((.*?)\);/)&&_0x253bbf.match(/jsonp_.*?\((.*?)\);/)[1]||_0x253bbf;
				let _0x1be387=$.toObj(_0x253bbf,_0x253bbf);
				if(_0x1be387&&typeof _0x1be387=='object'){
					if(_0x1be387&&_0x1be387.success==true){
						console.log('入会:'+(_0x1be387.result.shopMemberCardInfo.venderCardName||''));
						$.shopactivityId=_0x1be387.result.interestsRuleList&&_0x1be387.result.interestsRuleList[0]&&_0x1be387.result.interestsRuleList[0].interestsInfo&&_0x1be387.result.interestsRuleList[0].interestsInfo.activityId||'';
					}
				}else{
					console.log(_0x253bbf);
				}
			}catch(_0x23a667){
				$.logErr(_0x23a667,_0x41bc35);
			}finally{
				_0x49031d();
			}
		});
	});
}
function getH5st(_0x3952ef,_0x3aeb0b){
	return new Promise(async _0x5f1b0d=>{
		let _0x2b6ffd={'url':'http://api.kingran.cf/h5st','body':'businessId='+_0x3952ef+'&req='+encodeURIComponent(JSON.stringify(_0x3aeb0b)),'headers':{'User-Agent':'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/87.0.4280.88'},'timeout':30*1000};
		$.post(_0x2b6ffd,(_0x1b2654,_0x230f05,_0x2d0ad0)=>{
			try{
				if(_0x1b2654){
					console.log(JSON.stringify(_0x1b2654));
					console.log($.name+' getSign API请求失败，请检查网路重试');
				}else{}
			}catch(_0x224fe9){
				$.logErr(_0x224fe9,_0x230f05);
			}finally{
				_0x5f1b0d(_0x2d0ad0);
			}
		});
	});
}
function taskUrl(_0x3a7858,_0x3d4c8c){
	return{'url':''+$.activityUrls+_0x3a7858,'headers':{'Host':'lzkjdz-isv.isvjcloud.com','Accept':'application/json','X-Requested-With':'XMLHttpRequest','Accept-Language':'zh-cn','Accept-Encoding':'gzip, deflate, br','Content-Type':'application/x-www-form-urlencoded','Origin':'https://lzkjdz-isv.isvjcloud.comm','User-Agent':'jdapp;iPhone;9.5.4;13.6;'+$.UUID+';network/wifi;ADID/'+$.ADID+';model/iPhone10,3;addressid/0;appBuild/167668;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1','Connection':'keep-alive','Referer':$.activityUrl,'Cookie':cookie+activityCookie+';IsvToken='+$.Token+';AUTH_C_USER='+$.AUTH_C_USER},'body':_0x3d4c8c};
}
function getMyPing(){
	let _0x4e961c={'url':'https://lzkjdz-isv.isvjcloud.com/customer/getMyPing','headers':{'Host':'lzkjdz-isv.isvjcloud.com','Accept':'application/json','X-Requested-With':'XMLHttpRequest','Accept-Language':'zh-cn','Accept-Encoding':'gzip, deflate, br','Content-Type':'application/x-www-form-urlencoded','Origin':'https://lzkjdz-isv.isvjcloud.com','User-Agent':'jdapp;iPhone;9.5.4;13.6;'+$.UUID+';network/wifi;ADID/'+$.ADID+';model/iPhone10,3;addressid/0;appBuild/167668;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1','Connection':'keep-alive','Referer':$.activityUrl,'Cookie':cookie},'body':'userId='+$.activityShopId+'&token='+$.token+'&fromType=APP&riskType=1'};
	return new Promise(_0x38d3de=>{
		$.post(_0x4e961c,(_0x46f290,_0x207e49,_0x351b6c)=>{
			try{
				if(_0x46f290){
					$.log(_0x46f290);
				}else{
					setActivityCookie(_0x207e49);
					if(_0x351b6c){
						_0x351b6c=JSON.parse(_0x351b6c);
						if(_0x351b6c.result){
							$.log('用户名：'+_0x351b6c.data.nickname);
							$.pin=_0x351b6c.data.nickname;
							$.secretPin=_0x351b6c.data.secretPin;
							cookie=cookie+';AUTH_C_USER='+_0x351b6c.data.secretPin;
						}else{
							$.log(_0x351b6c.errorMessage);
						}
					}else{
						$.log('京东返回了空数据');
					}
				}
			}catch(_0xe8c36b){
				$.log(_0xe8c36b);
			}finally{
				_0x38d3de();
			}
		});
	});
}
function getFirstLZCK(){
	return new Promise(_0x243741=>{
		$.get({'url':$.activityUrl,'headers':{'user-agent':$.isNode()?process.env.JD_USER_AGENT?process.env.JD_USER_AGENT:require('./USER_AGENTS').USER_AGENT:$.getdata('JDUA')?$.getdata('JDUA'):'jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1'}},(_0xf8eed,_0x506e3a,_0x3d382a)=>{
			try{
				if(_0xf8eed){
					console.log(_0xf8eed);
				}else{
					setActivityCookie(_0x506e3a);
				}
			}catch(_0x570c3f){
				console.log(_0x570c3f);
			}finally{
				_0x243741();
			}
		});
	});
}
function random(_0x4738fe,_0x2dd7a5){
	return Math.floor(Math.random()*(_0x2dd7a5-_0x4738fe))+_0x4738fe;
}
function getUUID(_0x40eee8='xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',_0x2373a3=0){
	return _0x40eee8.replace(/[xy]/g,function(_0x288658){
		var _0x251dbb=Math.random()*0x10|0x0,_0x53d32e=_0x288658=='x'?_0x251dbb:_0x251dbb&0x3|0x8;
		if(_0x2373a3){
			uuid=_0x53d32e.toString(36).toUpperCase();
		}else{
			uuid=_0x53d32e.toString(36);
		}
		return uuid;
	});
}
function checkCookie(){
	const _0x1eadaa={'url':'https://me-api.jd.com/user_new/info/GetJDUserInfoUnion','headers':{'Host':'me-api.jd.com','Accept':'*/*','Connection':'keep-alive','Cookie':cookie,'User-Agent':'Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.2 Mobile/15E148 Safari/604.1','Accept-Language':'zh-cn','Referer':'https://home.m.jd.com/myJd/newhome.action?sceneval=2&ufc=&','Accept-Encoding':'gzip, deflate, br'}};
	return new Promise(_0x154c0a=>{
		$.get(_0x1eadaa,(_0x1f0837,_0x347ab1,_0x2565c1)=>{
			try{
				if(_0x1f0837){
					$.logErr(_0x1f0837);
				}else{
					if(_0x2565c1){
						_0x2565c1=JSON.parse(_0x2565c1);
						if(_0x2565c1.retcode==='1001'){
							$.isLogin=false;
							return;
						}
						if(_0x2565c1.retcode==='0'&&_0x2565c1.data.hasOwnProperty('userInfo')){
							$.nickName=_0x2565c1.data.userInfo.baseInfo.nickname;
						}
					}else{
						$.log('京东返回了空数据');
					}
				}
			}catch(_0x349640){
				$.logErr(_0x349640);
			}finally{
				_0x154c0a();
			}
		});
	});
}
function setActivityCookie(_0x492f13){
	if(_0x492f13){
		if(_0x492f13.headers['set-cookie']){
			cookie=originCookie+';';
			for(let _0x2eabbc of _0x492f13.headers['set-cookie']){
				lz_cookie[_0x2eabbc.split(';')[0].substr(0,_0x2eabbc.split(';')[0].indexOf('='))]=_0x2eabbc.split(';')[0].substr(_0x2eabbc.split(';')[0].indexOf('=')+1);
			}
			for(const _0x5b71f5 of Object.keys(lz_cookie)){
				cookie+=_0x5b71f5+'='+lz_cookie[_0x5b71f5]+';';
			}
			activityCookie=cookie;
		}
	}
}
function getAuthorCodeList(_0x25a239){
	return new Promise(_0x5046b7=>{
		const _0x11ecd1={'url':_0x25a239+'?'+new Date(),'timeout':10000,'headers':{'User-Agent':'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/87.0.4280.88'}};
		$.get(_0x11ecd1,async(_0x5f464d,_0x4a6f12,_0x1edf71)=>{
			try{
				if(_0x5f464d){
					$.getAuthorCodeListerr=false;
				}else{
					if(_0x1edf71)_0x1edf71=JSON.parse(_0x1edf71);
					$.getAuthorCodeListerr=true;
				}
			}catch(_0x33413a){
				$.logErr(_0x33413a,_0x4a6f12);
				_0x1edf71=null;
			}finally{
				_0x5046b7(_0x1edf71);
			}
		});
	});
}
async function getUA(){
	$.UA='jdapp;iPhone;10.1.4;13.1.2;'+randomString(40)+';network/wifi;model/iPhone8,1;addressid/2308460611;appBuild/167814;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1';
}
function randomString(_0x534df0){
	_0x534df0=_0x534df0||32;
	let _0x1636dc='abcdef0123456789',_0x6b7fcf=_0x1636dc.length,_0x314d3d='';
	for(i=0;i<_0x534df0;i++)_0x314d3d+=_0x1636dc.charAt(Math.floor(Math.random()*_0x6b7fcf));
	return _0x314d3d;
};
!function (n) { "use strict"; function t(n, t) { var r = (65535 & n) + (65535 & t); return (n >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r } function r(n, t) { return n << t | n >>> 32 - t } function e(n, e, o, u, c, f) { return t(r(t(t(e, n), t(u, f)), c), o) } function o(n, t, r, o, u, c, f) { return e(t & r | ~t & o, n, t, u, c, f) } function u(n, t, r, o, u, c, f) { return e(t & o | r & ~o, n, t, u, c, f) } function c(n, t, r, o, u, c, f) { return e(t ^ r ^ o, n, t, u, c, f) } function f(n, t, r, o, u, c, f) { return e(r ^ (t | ~o), n, t, u, c, f) } function i(n, r) { n[r >> 5] |= 128 << r % 32, n[14 + (r + 64 >>> 9 << 4)] = r; var e, i, a, d, h, l = 1732584193, g = -271733879, v = -1732584194, m = 271733878; for (e = 0; e < n.length; e += 16)i = l, a = g, d = v, h = m, g = f(g = f(g = f(g = f(g = c(g = c(g = c(g = c(g = u(g = u(g = u(g = u(g = o(g = o(g = o(g = o(g, v = o(v, m = o(m, l = o(l, g, v, m, n[e], 7, -680876936), g, v, n[e + 1], 12, -389564586), l, g, n[e + 2], 17, 606105819), m, l, n[e + 3], 22, -1044525330), v = o(v, m = o(m, l = o(l, g, v, m, n[e + 4], 7, -176418897), g, v, n[e + 5], 12, 1200080426), l, g, n[e + 6], 17, -1473231341), m, l, n[e + 7], 22, -45705983), v = o(v, m = o(m, l = o(l, g, v, m, n[e + 8], 7, 1770035416), g, v, n[e + 9], 12, -1958414417), l, g, n[e + 10], 17, -42063), m, l, n[e + 11], 22, -1990404162), v = o(v, m = o(m, l = o(l, g, v, m, n[e + 12], 7, 1804603682), g, v, n[e + 13], 12, -40341101), l, g, n[e + 14], 17, -1502002290), m, l, n[e + 15], 22, 1236535329), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 1], 5, -165796510), g, v, n[e + 6], 9, -1069501632), l, g, n[e + 11], 14, 643717713), m, l, n[e], 20, -373897302), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 5], 5, -701558691), g, v, n[e + 10], 9, 38016083), l, g, n[e + 15], 14, -660478335), m, l, n[e + 4], 20, -405537848), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 9], 5, 568446438), g, v, n[e + 14], 9, -1019803690), l, g, n[e + 3], 14, -187363961), m, l, n[e + 8], 20, 1163531501), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 13], 5, -1444681467), g, v, n[e + 2], 9, -51403784), l, g, n[e + 7], 14, 1735328473), m, l, n[e + 12], 20, -1926607734), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 5], 4, -378558), g, v, n[e + 8], 11, -2022574463), l, g, n[e + 11], 16, 1839030562), m, l, n[e + 14], 23, -35309556), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 1], 4, -1530992060), g, v, n[e + 4], 11, 1272893353), l, g, n[e + 7], 16, -155497632), m, l, n[e + 10], 23, -1094730640), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 13], 4, 681279174), g, v, n[e], 11, -358537222), l, g, n[e + 3], 16, -722521979), m, l, n[e + 6], 23, 76029189), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 9], 4, -640364487), g, v, n[e + 12], 11, -421815835), l, g, n[e + 15], 16, 530742520), m, l, n[e + 2], 23, -995338651), v = f(v, m = f(m, l = f(l, g, v, m, n[e], 6, -198630844), g, v, n[e + 7], 10, 1126891415), l, g, n[e + 14], 15, -1416354905), m, l, n[e + 5], 21, -57434055), v = f(v, m = f(m, l = f(l, g, v, m, n[e + 12], 6, 1700485571), g, v, n[e + 3], 10, -1894986606), l, g, n[e + 10], 15, -1051523), m, l, n[e + 1], 21, -2054922799), v = f(v, m = f(m, l = f(l, g, v, m, n[e + 8], 6, 1873313359), g, v, n[e + 15], 10, -30611744), l, g, n[e + 6], 15, -1560198380), m, l, n[e + 13], 21, 1309151649), v = f(v, m = f(m, l = f(l, g, v, m, n[e + 4], 6, -145523070), g, v, n[e + 11], 10, -1120210379), l, g, n[e + 2], 15, 718787259), m, l, n[e + 9], 21, -343485551), l = t(l, i), g = t(g, a), v = t(v, d), m = t(m, h); return [l, g, v, m] } function a(n) { var t, r = "", e = 32 * n.length; for (t = 0; t < e; t += 8)r += String.fromCharCode(n[t >> 5] >>> t % 32 & 255); return r } function d(n) { var t, r = []; for (r[(n.length >> 2) - 1] = void 0, t = 0; t < r.length; t += 1)r[t] = 0; var e = 8 * n.length; for (t = 0; t < e; t += 8)r[t >> 5] |= (255 & n.charCodeAt(t / 8)) << t % 32; return r } function h(n) { return a(i(d(n), 8 * n.length)) } function l(n, t) { var r, e, o = d(n), u = [], c = []; for (u[15] = c[15] = void 0, o.length > 16 && (o = i(o, 8 * n.length)), r = 0; r < 16; r += 1)u[r] = 909522486 ^ o[r], c[r] = 1549556828 ^ o[r]; return e = i(u.concat(d(t)), 512 + 8 * t.length), a(i(c.concat(e), 640)) } function g(n) { var t, r, e = ""; for (r = 0; r < n.length; r += 1)t = n.charCodeAt(r), e += "0123456789abcdef".charAt(t >>> 4 & 15) + "0123456789abcdef".charAt(15 & t); return e } function v(n) { return unescape(encodeURIComponent(n)) } function m(n) { return h(v(n)) } function p(n) { return g(m(n)) } function s(n, t) { return l(v(n), v(t)) } function C(n, t) { return g(s(n, t)) } function A(n, t, r) { return t ? r ? s(t, n) : C(t, n) : r ? m(n) : p(n) } $.md5 = A }(this);