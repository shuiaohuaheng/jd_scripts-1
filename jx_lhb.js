
/*
入口：京喜首页领红包
CK1助力作者
运行流程：助力--任务--抽奖
未设置助力码变量运行会输出助力码
也可通过分享口令使用口令转链接获得
目前需邀请50人 最高开 1元红包
cron "20 0,9 * * *" jx_lhb.js, tag:京喜领红包
变量格式(多个&分割):
export JX_LHB_CODE='shareId@itemId'
updatetime: 2023/2/28
 */
//https://st.jingxi.com/promote/2023/spring2023/index.html?activeId=63ef4e50c800b87f7a99e144&shareId=103_121_104_119_97_84_72_110_48_77_85_53_83_105_102_71_77_118_65_76_55_65_61_61&itemId=SZk7ilpW8IMpg&source=3&jxsid=16775889033267031262&appCode=msd1188198
const Env=require('./utils/Env.js');
const $ = new Env("京喜领红包");
const notify = $.isNode() ? require("./sendNotify") : "",
    jdCookieNode = $.isNode() ? require("./jdCookie.js") : "",
    dylany = require("./function/dylany.js"),
    activeId="63ef4e50c800b87f7a99e144",
    appCode="msd1188198",
    appId="99062";
let cookiesArr = [],
    cookie = "";
    
if ($.isNode()) {
    Object.keys(jdCookieNode).forEach(_0x13523e => {
        cookiesArr.push(jdCookieNode[_0x13523e]);
    });
    if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
        console.log = () => { };
    }
} else {
    cookiesArr = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...jsonParse($.getdata("CookiesJD") || "[]").map(_0x129d7a => _0x129d7a.cookie)].filter(_0x189ac2 => !!_0x189ac2);
}
let JX_LHB_CODE = "";
process.env.JX_LHB_CODE && (process.env.JX_LHB_CODE.indexOf("&") > -1 ? JX_LHB_CODE = process.env.JX_LHB_CODE.split("&") : JX_LHB_CODE = [process.env.JX_LHB_CODE]);
let _0x829415 = [];

!(async () => {
    if (!cookiesArr[0]) {
        $.msg($.name, "【提示】请先获取cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/", {
            "open-url": "https://bean.m.jd.com/"
        });
        return;
    }
    console.log("\n当前版本：V1.0.9");
    console.log("运行流程：助力--任务--抽奖");
    let authorCodeList = "103_121_104_119_97_84_72_110_48_77_85_53_83_105_102_71_77_118_65_76_55_65_61_61@SZk7ilpW8IMpg&53_84_55_83_54_79_71_49_57_75_77_72_47_113_65_80_65_83_113_81_75_65_61_61@S5KkcKmtOty-rfUG14oJM&70_43_75_120_52_66_54_56_72_98_77_76_107_110_53_98_116_47_51_71_55_81_61_61@S77k6Bk1H&66_78_43_43_121_118_80_51_51_100_50_51_71_43_71_107_110_98_100_90_74_103_61_61@S5KkcAkhNoweSeGGl87Bb&100_102_116_74_57_89_100_114_67_122_53_57_107_49_112_77_110_43_104_89_82_98_74_110_101_67_66_74_118_54_117_75_68_80_74_74_108_101_106_118_68_114_103_61@S5KkcRBtM8VfSIR_2lvEMIQ&110_47_48_115_71_84_116_104_112_116_98_103_101_119_70_97_97_84_81_49_84_103_61_61@S5KkcIGxutw-Dan6-0IlA&69_115_102_120_108_77_107_67_114_89_82_116_114_50_110_83_73_107_90_114_73_76_74_110_101_67_66_74_118_54_117_75_68_80_74_74_108_101_106_118_68_114_103_61@S5KkcRxce9lXQcx6lxvRedg".split("&");
    let authorCode = authorCodeList[Math.floor(Math.random() * authorCodeList.length)];
    if (JX_LHB_CODE) {
        JX_LHB_CODE = [...new Set([...JX_LHB_CODE, ...authorCodeList])];
        console.log("多余助力会助力TY");
        console.log("\n开始助力...");
        for (let i = 0; i < cookiesArr.length; i++) {
            if (cookiesArr[i]) {
                cookie = cookiesArr[i];
                $.UserName = decodeURIComponent(cookie.match(/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
                $.index = i + 1;
                $.isLogin = true;
                $.nickName = "";
                $.UA = require("./USER_AGENTS").UARAM();
                $.nohelp = false;
                await islogin();
                console.log(`\n******开始【京东账号${$.index}】${$.nickName || $.UserName}*********\n`);
                if (!$.isLogin) {
                    $.msg($.name, `【提示】cookie已失效`, `京东账号${$.index} ${$.nickName || $.UserName}\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action`, {"open-url": "https://bean.m.jd.com/bean/signIndex.action"});
                    if ($.isNode()) {
                        await notify.sendNotify(`${$.name}cookie已失效 - ${$.UserName}`, `京东账号${$.index} ${$.UserName}\n请重新登录获取cookie`);
                    }
                    continue
                }

                console.log("\n开始【账号" + $.index + "】" + ($.nickName || $.UserName));
                if ($.index == 1 && authorCode) {
                    console.log("当前CK1去助力作者");
                    await festivalhb_help(authorCode);
                    continue;
                } else {
                    for (let code of JX_LHB_CODE) {
                        if (!code) continue;
                        $.full = false;
                        console.log("去助力 " + code);
                        await festivalhb_help(code);
                        if ($.nohelp) {
                            break;
                        }
                        if ($.full) {
                            delete JX_LHB_CODE[JX_LHB_CODE.findIndex(e => e == code)];
                            continue;
                        }
                        await $.wait(1000);
                    }
                }
                if ($.full) {
                    console.log("\n没有需要助力的了，跳出！");
                    break;
                }
                await $.wait(2000);
            }
        }
    } else {
        console.log("未设置助力码,开始任务和抽奖");
    }
    console.log("\n开始任务和抽奖......");
    for (let _0x49bd4a = 0; _0x49bd4a < cookiesArr.length; _0x49bd4a++) {
        if (cookiesArr[_0x49bd4a]) {
            cookie = cookiesArr[_0x49bd4a];
            $.UserName = decodeURIComponent(cookie.match(/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
            $.index = _0x49bd4a + 1;
            $.isLogin = true;
            $.nickName = "";
            $.flag = 1;
            $.UA = require("./USER_AGENTS").UARAM();
            console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n");
            if (!$.isLogin) {
                const _0x53a42d = {
                    "open-url": "https://bean.m.jd.com/bean/signIndex.action"
                };
                $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", _0x53a42d);
                $.isNode() && (await notify.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie"));
                continue;
            }
            await festivalhb_home();
            $.flag = 0;
            await $.wait(500);
            console.log("\n开始做浏览任务。。。");
            for (let task of $.tasklist) {
                if (task.completionFlag) {
                    console.log(task.assignmentName + "---已完成");
                    continue;
                }
                console.log("去做 " + task.assignmentName);
                await festivalhb_browse(task.encryptAssignmentId, task.shoppingActivityList[0].itemId);
                await $.wait(1000);
            }
            console.log("\n开始抽奖...");
            for (let _0x3ce394 = 0; _0x3ce394 < $.lottery; _0x3ce394++) {
                await festivalhb_draw();
                await $.wait(1000);
            }
            await $.wait(2000);
        }
    }
})().catch(_0x45b5fa => {
    $.log("", "❌ " + $.name + ", 失败! 原因: " + _0x45b5fa + "!", "");
}).finally(() => {
    $.done();
});

async function festivalhb_home(_0x3c372c = true) {
    return new Promise(async _0x386228 => {
        $.get(await JDtaskUrl("festivalhb_home"), async (_0x1c93e3, _0x15a6a4, _0x1f3ae9) => {
            try {
                if (_0x1c93e3) {
                    console.log("" + JSON.stringify(_0x1c93e3));
                    console.log(" API请求失败，请检查网路重试");
                } else {
                    _0x1f3ae9 = JSON.parse(_0x1f3ae9);
                    if (_0x1f3ae9.code == 0) {
                        _0x1f3ae9 = _0x1f3ae9.data;
                        $.shareid = _0x1f3ae9.shareId;
                        _0x829415.push($.shareid);
                        $.lottery = _0x1f3ae9.drawChanceNum;
                        $.tasklist = _0x1f3ae9.browseTaskList;
                        $.helpid = _0x1f3ae9.helpTask.itemId;
                        $.cash = _0x1f3ae9.totalCoinAmount;
                        $.red = _0x1f3ae9.totalHbAmount;
                        _0x3c372c && console.log("助力码:\n" + $.shareid + "@" + $.helpid);
                    } else {
                        console.log(_0x1f3ae9.msg);
                    }
                }
            } catch (_0x1608ba) {
                $.logErr(_0x1608ba, _0x15a6a4);
            } finally {
                _0x386228(_0x1f3ae9);
            }
        });
    });
}

async function festivalhb_browse(taskId, itemId) {
    return new Promise(async _0x679b35 => {
        $.get(await JDtaskUrl("festivalhb_browse",{activeId,taskId, itemId}), async (_0x2b3627, _0xf23256, _0x20a0a0) => {
            try {
                if (_0x2b3627) {
                    console.log("" + JSON.stringify(_0x2b3627));
                    console.log(" API请求失败，请检查网路重试");
                } else {
                    _0x20a0a0 = JSON.parse(_0x20a0a0);
                    if (_0x20a0a0.code == 0) {
                        console.log("任务完成，" + _0x20a0a0.data.drawChanceNum + "抽奖次数");
                        $.lottery = _0x20a0a0.data.drawChanceNum;
                    } else {
                        console.log(_0x20a0a0.msg);
                    }
                }
            } catch (_0x809451) {
                $.logErr(_0x809451, _0xf23256);
            } finally {
                _0x679b35(_0x20a0a0);
            }
        });
    });
}

async function festivalhb_draw() {
    return new Promise(async _0x2a13dd => {
        $.get(await JDtaskUrl("festivalhb_draw"), async (_0x30d654, _0x84a865, _0x160e9d) => {
            try {
                if (_0x30d654) {
                    console.log("" + JSON.stringify(_0x30d654));
                    console.log(" API请求失败，请检查网路重试");
                } else {
                    _0x160e9d = JSON.parse(_0x160e9d);
                    if (_0x160e9d.code == 0) {
                        if (_0x160e9d.data.prize.length == 0) {
                            return;
                        }
                        switch (_0x160e9d.data.prize[0].prizeType) {
                            case 1:
                                console.log("获得优惠券");
                                break;
                            case 2:
                            case 3:
                                console.log("获得" + _0x160e9d.data.prize[0].desc);
                                break;
                            default:
                                break;
                        }
                    } else {
                        console.log(_0x160e9d.msg);
                    }
                }
            } catch (_0x5804b5) {
                $.logErr(_0x5804b5, _0x84a865);
            } finally {
                _0x2a13dd(_0x160e9d);
            }
        });
    });
}

async function festivalhb_help(code) {
    let shareId = code[0],itemId = code[1];
    return new Promise(async _0x28bd1f => {
        $.get(await JDtaskUrl("festivalhb_help",{activeId,shareId,itemId}), async (_0x188f90, _0x5e10bd, _0x1cf19f) => {
            try {
                if (_0x188f90) {
                    console.log("" + JSON.stringify(_0x188f90));
                    console.log(" API请求失败，请检查网路重试");
                } else {
                    _0x1cf19f = JSON.parse(_0x1cf19f);
                    if (_0x1cf19f.code == 0) {
                        console.log("助力成功！");
                    } else {
                        if (_0x1cf19f.code == 104) {
                            console.log("已助力过TA");
                        } else {
                            if (_0x1cf19f.code == 108) {
                                console.log("无助力次数");
                                $.nohelp = true;
                            } else {
                                if (_0x1cf19f.code == 103) {
                                    console.log("助力已满");
                                    if ($.index > 1) {
                                        $.full = true;
                                    }
                                } else {
                                    if (_0x1cf19f.code == -120) {
                                        console.log("不能助力自己");
                                    } else {
                                        console.log(_0x1cf19f.msg);
                                    }
                                }
                            }
                        }
                    }
                }
            } catch (_0x5530e4) {
                $.logErr(_0x5530e4, _0x5e10bd);
            } finally {
                _0x28bd1f(_0x1cf19f);
            }
        });
    });
}

async function JDtaskUrl(fn,body={activeId}) {
    let get = await dylany.getbody({
        appId,
        fn,
        "body": body,
        "apid": "jx_h5",
        "ver": "1.0",
        "cl": "jx_h5",
        "user": $.UserName,
        "code": 1,
        "flag": $.flag,
        "ua": $.UA
    });
    return {
        "url": `https://api.jingxi.com/api?g_ty=h5&g_tk=&appCode=${appCode}&${get}&loginType=2&sceneval=2`,
        "headers": {
            "Host": "api.jingxi.com",
            "Origin": "https://st.jingxi.com",
            "User-Agent": $.UA,
            "Cookie": cookie
        }
    };
}

function islogin() {
    return new Promise(resolve => {
        const opt = {
            "url": "https://plogin.m.jd.com/cgi-bin/ml/islogin",
            "headers": {
                referer:"https://h5.m.jd.com/",
                "User-Agent":$.UA,
                cookie,
            },
            "timeout": 10000
        };
        $.get(opt, (err, resp, data) => {
            try {
                if (data) {
                    data = JSON.parse(data);
                    if (!(data.islogin === "1")) {
                        if (data.islogin === "0") {
                            $.isLogin = false;
                        }
                    }
                }
            } catch (e) {
                console.log(e);
            } finally {
                resolve();
            }
        });
    });
}

function jsonParse(str) {
	if (typeof str == "string") {
		try {
			return JSON.parse(str);
		} catch (e) {
			console.log(e);
			$.msg($.name, '', '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie')
			return [];
		}
	}
}

Array.prototype.remove = function (val) {
    var i = this.indexOf(val);
    if (i > -1) {
        this.splice(i, 1);
    }
};