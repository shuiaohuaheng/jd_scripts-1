/*
远程获取，自行运行
cron:1 1 1 1 *
============Quantumultx===============
[task_local]
#会场红包雨
1 1 1 1 * jd_hcredrain.js, tag=会场红包雨, enabled=true
 */

const $ = new Env('会场红包雨');
var version_='jsjiami.com.v7';const M=b;(function(c,d,e,f,g,h,i){return c=c>>0x1,h='hs',i='hs',function(j,k,l,m,n){const L=b;m='tfi',h=m+h,n='up',i+=n,h=l(h),i=l(i),l=0x0;const o=j();while(!![]&&--f+k){try{m=parseInt(L(0x13b,'(5H0'))/0x1*(-parseInt(L(0x22c,'V[v('))/0x2)+parseInt(L(0x158,'MwJA'))/0x3*(parseInt(L(0x21a,'!%$Z'))/0x4)+parseInt(L(0x1c3,'owe^'))/0x5+parseInt(L(0x2a5,'Bgpc'))/0x6+parseInt(L(0x201,'ojjO'))/0x7+-parseInt(L(0x1e4,'Pa1H'))/0x8*(-parseInt(L(0x19d,'S1aB'))/0x9)+parseInt(L(0x27b,'8%hb'))/0xa*(-parseInt(L(0x16b,'8)@o'))/0xb);}catch(p){m=l;}finally{n=o[h]();if(c<=f)l?g?m=n:g=n:l=n;else{if(l==g['replace'](/[eXxhNkGLAqDlPEtUKubwOQ=]/g,'')){if(m===k){o['un'+h](n);break;}o[i](n);}}}}}(e,d,function(j,k,l,m,n,o,p){return k='\x73\x70\x6c\x69\x74',j=arguments[0x0],j=j[k](''),l=`\x72\x65\x76\x65\x72\x73\x65`,j=j[l]('\x76'),m=`\x6a\x6f\x69\x6e`,(0x123417,j[m](''));});}(0x17c,0x22545,a,0xc0),a)&&(version_=a);const notify=$[M(0x180,'7hbS')]()?require(M(0x15b,'owe^')):'',jdCookieNode=$[M(0x12b,'8)@o')]()?require(M(0x247,'hAaw')):'',getToken=require(M(0x11a,'tyRd'));let jdNotify=!![],cookiesArr=[],cookie='',message='';function a(){const aj=(function(){return[...[version_,'AjubOsNjPkeiEaXlmxGiqhD.LxtcOobAmUQK.wv7==','WPtcVG/cG8of','maxdH1xcN1Kv','jCk3qxiz','WQfZxmoJWQ8','W6HHW6FdR3a','lmkaWQ4IzSkJWP7dUGeNhCkOFSkvWO7cLCofv8keWRr0vSk2W5tcRCkjWRtcKudcPLqmWQZdKmovy2SMj8oAg8ocW71oWQFcUHG','WQeaW4dcTG','WONcISoxtg3dUa','WRtcIW0','W5TcfxtcTG','W6FcVc/cNq','WPNdT8ofWQi6','WOvcW5a','mvDnWONcTa','WQFcI3DCWOa','DCk6WRi','W6npeW','W6/cKSk5W6yT','j8kKW6hdJmk/','amkyWOOvAa','WPbdWRhcQX9xoG','nSkKW7VdICkYtEw1IEwKJ+AwOmkuruO','W4yCzq','nx53W6BcOIzlCd3cImk1','WQddUmk5W7xcPZRcRW','W6nmg2xcOW','W6hcQLtcTmk/WPNcPG','WRtcQL3cS8k/WR7cTGbfW5bXsaaoxrWTkSk5WRNcGZ5QWOHTaSokECosW51J','WRjMWOBcOda','whDEW4xcL3VdIq','WPhdHCklW5lcRG','nW7dTCoUmSoE','WPC+WRnAWRO','W6Tbafe','WPBdOSoGW5hORB7MSy/LPBVOT6lVVzZORAxMOlNMNAlNV5ROTl3PHyZORyS','auPwWPNcRq','dmkTW6ZdKCkt','WQ/dGSknxmkwzCoRs0WMW6xcLh5Mgmk0F8oxvCoFCd8u','W7JdN0TmW6a','WRpdT0NdImkk','5lUi5lUi6lsW5y+r','WPdcNmkPW6GPx8oP','W7NNU5VLJyS','WR3cMr7cJq','oZFdV33cNa','AvDDW5RdJa','zgtdL8kvWP8','W6xcVXpcTb0','WO9pWRpcGaHS','WRaHW7e','5lMf5lQk6lAr5yYM','FefEW53dQW','xmkKEq','5yU15lQX5OUz5yIo77+F5ysD5B215lU55Q+z','W40gBfHVWQRdKW','W77cVW/cStm','wmk5ESkdzq','DfTYW7RdUG','d8kTW5hcULi','mw9sWPxcKCknWPxdGG','WQe3qSofcq','WQhdIxJdPSkpW5ldRG','W5Waz1PV','WRWoWO5zWQJdIs8','W45RzCkSW6KcWPS','qSkJBmkpC2K3q8kt','oCkaWQiYzSk4WPJdUI8','W6ZdONPMW5JcVxtdU0VdSXv1WQDoW4v5zSo7yZqfAZpcSCkiW6tcSmktW7dcN37cMCo/','abldRmkHWQ3cSfBdP8o9W69uWO7dPG','WQ4SW43cNdS','WOWkk0G6B3bb','dmkGyLyIW5GWDXxdHSoLW6mLm39CW4KGadNdOY4zW7ddI3jEWQvcW7ddSCkBcHJcUh3dPSkFdWuQjCktwSoGaGX+p8oaiKBcQrNcGWddUWZcSaVcMdRcO8kNz8kIW5ZdMCkKWOxdMSkzWPJcTfK','W6JcVcW','WPDFWRJdPmoH','WRysWQ8yWQxdIs/dQGb/W47cNmkTW6GYjGGbWOiiWPy','WQxdN8kdyCkwoa','WRSdW5RcTKG','WQ9XWPFdGSo7','WQNdL8kusq','WOFcULXWWRJcQ8o8sW','WPldJ8oJWQ9no8kNW6SCBSoHW7uprSo1ySoQzSoZW7nqEsFcTCkAs8kkvaTspG4vDSkYdZO2iY3dP8kKWQ3cIcega8kjbmo8W5RcKCojW4dcImk0y1HSWR/cLYi','WPfZWRpdNmkGW7C','W7SurfdcQq','tvldOSkGW4dcTfddOSoZW7GBWORcU2NcGSkE','lmkCWQW1D8k4','W4LfW53dQem','BCkmWOmntW','W45kD8krW6O','6k6G5yIe6zI15OEf5zYpWRuqWOldRSkz6l6L5yES5Qg45l+x5PEH5yEG5A+kq+w4KoISUUMcNUI9G+IfR+AERUwmOoIoLowoNSomWQuzlJFdLq','WQeoW5FcQMBcQG','W7JdKgfLW7O','WOXdW4e','W6XAWOa','lmkdFLa0','WQpdH37dGG','WR0mymoTdW','nSo0WO4gWPC','adiyWOBcMwhdKmkKW4X2f8kzW5nsbsNcILfSqYC7wCoxf1hdHsqcofbVWO9Af8o/zKb9wmomWR/dQ8kCfsdcJ34AFdPLW7udk1NcPuP4nuZcKq','WPVdS8oeWQqZha','W6OKz1Hj','WQWHW6xcTW','FCk0WQeK','W6JcUSkoW5G8tmoeWPS','smolW7RdKmoF','5REE5yMh5AAt54ga54IF5zE277+c6kYv56Qw5zcy5Bo66k2Rna','W4q7CeT3','WOCSuSop','W5xcN8k4W6G','amk1yKC','WQZdK8kaxW','lCkpW5FdRSkS','WP7cRKldVCoVW6u','w3ldNmkCWPq','WQFcV8oxC0O','W6lcU1RcImk2','BCk6WOyXu8oVW5y+','W6T0W6FdTxTGy8ooiG','W4rVWOv1W5G','WOdcOeS','ySoUWRO','FWVdQMq7E8kPpCoi','W5jWW5pdSga','W5TVW7RdT3XIqmoSAq','44cx5O6C56w744ooW7m5ALarWP/LTldLPlZML5C','WOJcRLJdUa','W77dPNHJW5/cUxZdQvS','oCkaWQmID8k5WOi','W7xNU5/LJ4C','oZZdQCojkq','WPnvWQFcRq','jmkoW5JcUvpcHrBcLmod','WO0WEmofjWO','W6tcICksW6uR','xSolW6tdKmoF','dr/dUSo5h8olDx0','amkrCNa2','nmkKWRS','W4tdJmofW7BdRq','WPSuW6/cILe','W6dcQf/cVSk1WR0','h8oCWQuMWQ0F','WQRdUCoyWRO2dw/dUCks','WPRcNLZdTSoL','W4xdGmovW7BdReqU','sMjEW6FdVW','u2jEW5BdHq'],...(function(){return[...['W7umx0/cQdP6WRFcTqhcHSoBWPxcKaH7m8oyWPNdL8odW78Xo18mhfxdKSkeWRldPYeEFM7dQ8ovDtRdOCkcW5O','W6HeW4BdKLm','eSkNWOWxWQK','aCk6ya','W78xt0y','WRWrtqxdK8kQfSoLWO3dTWddTW','jXxdGfK','u8kEwSk/Ba','6k+p5RoO5AA56lAg776255Iq5B6C5AE+6lw8','yNxdQSkYWP4','WQpdPWpdTmoQ','ACkVWOiaAW','WRtdHw/dJCklW7JdOG','irJdPLlcMW','WObKqG','W7XubLNcJ8o1kCoZWPe','wXZcPeVdQSo4W6L4WO4VdHq','WQhcOfBdSmoSW6tdKSkoWQRdV8kIzZ4dddXLW6xcSSoYW7pcHcKqW6KbaCkcoZ7cLvRcTmkvbSo6W5FdHSkRWP1TlgykANhcOK1IW4xdTqCdW44aW6VdTCo/iJ/cVcBdLcRdSSkcjmk/W7ZdQIJdLMOru8o+W4eywIrrW7VdTmoGvSk6WOWjW6DcpMfxWO4EW712W6uVWPvHW5pcISkNWPqYDJJdR8oech9bWRNdMCkvjSkzW7pcUCoDW7NcJmkVWQhcSSopW4OVqmoJCmoEuaKTWOzGduGYsxtdRSkcDmoFWRBdVComiCk6fWuXba','WO5Ix8ozWRyu','BmoYWRjBoCou','iLxcVxiNzq','uCoeW6ZdHSoc','vCozmCkTWQy','WOJcTLzG','W4fYgfNcIW','WR5TFmoYWPe','WRddL8kqwa','WQhdH2BdKmkl','44k75O6/56s444cO6k+05yAo6iYD5y6O5lUU5lQN6lsd5y295lIGrcRcRhbUWPhcNEEBV+AoKEs+TUEvVmo2WRfAW4SBWOpNMOtKURlKUjRNRk7LI4pOJzRLJPu','aKVdSW','WOJcP1TcWQ4','AI01WRZdUa','lsxdO8o8iW','W7bIW5ZdSNnO','WOVcP1TJWQtdPmk9emokWPOyrMxdO01UmXlcQCkVqCkajrSOgmocWOeIEIW0WPVcQa','mmkPWPu7WOdcSG','WRKyWQXrWRVdIa','F8oSlSkFWPW','uUobVos4S+s6L+I1T+wnNq','fmkHzu4','m8kyWPOJWQC','W67cTYRcIadcUsNcIsBcJgC8WOb9W6VcVWFdTvldTWv/ySkHW5frxX/dGSkGW5RcM3ibs8kwCbFdHmoAWPuyW7ZcMNDE','pmkoWRGdWOe','WQRcVNv2WQC','WQ7dVSkK','WQWaESohla','WORdSmkCq8ke','WQpdL8kntq','WPW8WO1pWQG','W6JcU3VcRCkr','h3nA','W6WhWQldPmofi203','krtdUmoJaq','W4vdWRJcRb9WkSkIxtRcSCosWPxcGMlcKw3dJCoYvSkcW5CrzNmnWOHJAGdcVq','qvBdLmkvWPq','WOaIqSol','yY01WR4','WOXbW4DhEG','F17dS8k8WRO','W6JdMKjhW7G','W4CcW5fdq8kVW5WeW6BcNYxdILZcH23dQ8oPsmk1vmkP','xLldTCkX','hM9A','hSkmyMuY','cmkLtNut','W6pcTJ/cNbhdTIK','W7VcNmkaW6OW','WRtdG8kAt8kalmk3','W4ZcL8kYW7C3B8o8WRK','sSkDWQeaBW','WP5XWR7dHCo7','WOlcISont3JdPmkV','WR/dShj+W6hcJ20','kxFcMu4D','WOf7WQFdTCk8W70','Amo4WQLumCofWRm','ptJdNftcVa','W4iCtfzNWQm','W74Cz0TnWQFdHXS','W61uWPC','hCkFWQK3WOu','W5SwChH2','agftWPRcL8kf','W5C1eNNdQNKIW43cHXpcGCozW43cSg9HdSkMWPxdK8kEWQqNA1vBwhhcJ8kIWQ7dPaOVkhRcO8o4FJBdISkCW4pcSG','WPzGWP3dICoP','xColkCkCWQZcMCoGW4G','sCksxCkwAq','o09CWRxcJa','W4XReutcRG','eCoAWRG','wLTfW5ddRW','WOmoDCotcW','WOVcQLJdVCoHW7ZdKG','WOpcM8kaWQJcSgCMWRyPW6BcTW','A8kxWR49uW','DCoMdmkBWOBcV8oq','WOqgW4xcPx0','W69AWP1Y','WQ/dGSkmW6hcQG','de3dRJxcRmkP','W7JcRCk+W7GJ','kLpcQvq6ySkoba','kW/dUSoLnmoJFa','W7X9Dmk6W4yxWPDn','zhNdMCkbWQVcNwZdIW','fMfjWP8','WONcTxzHWOu','mmk/WQGLWPxdP8okW5qNnSkvgSknW7FdMxJdVmowW4ddRmoqamkJW63cPg88wLXHzHzgW6BdOSosr8oDitXjhCkMWOhcH8kUWRuny8oYq8kjhmkJW4WBfSoZDZSjaLVcRs8oC8kWhIhcVCopmSkXkW','WR0jWRzgWRZcMM7cOGvGW4NdLCoUWQCOmGGpWOWjW5xdH8kaW79dWPDGyhTOWRbvCSkP','WOFORAxPH4FMLRRNM4RLVOVOJQlLJzLbW7mumCk2bG','WPXGW7zWFa','WORdUCoyWRO2dq','W4HYhLlcJW','d8oqWQWEWRim','CmkMWPSQrCoJ','zConhCkGWPS','W7exta','WRDfWRxdS8oV','rq4iWPpdIq','qmohW5hdL8ok','xLZdTmk2WOS','WRpcQYdcH8o2','W7hcN1ZdPSkTW4tdLMG','W5ZcGh7cI8kJ','WPpdO8kyASkl','iCkYWQ5vpSovWPZcQSorWP08ha','W4TNA8klW6CsWP8','W5DwmflcLG','jCkQW6BdKCk+','AGitWRxdQq','hLr4WP/cOG','aCk4W4pdICkb','W4XGzW','f1/cLeaL','DCkWWRSIvCoU','zmo6g8kaWPW','fs7dS8oUja','l8kvr0Sy','nCkuW57cSW','CrOMWPddGq','roAAUoAuUUA0JowlVwNdQG','WPHEoWWXW77dVa4NW7zvW64','WORdIMldMCk6','f8kbW5xdMmkp','WO3cJmomwxxcVSkKWPhdThG','etldNLBcRG','ce3dUaZcUSk8','5lMf5lIX5P665yQx5zMf6k2Z6zwg5PsD5O+N5lUl56MW776T6k+z5QcG5P+T6iw16lIw6k6z5AEz572G57IB5Ok85ys0'],...(function(){return['WPOnpWC','W5ldObSIW6hdQSkQCSo4WQyDl1i','W7ZcQfZcVW','xEABOUAvK+A0IUwjLLn+','CCo9gCk1','p8k2WRKkza','luVdUXpcTSkRW4zZ','W7xcReu','W77cPLBcN8kOWQi','rmkvrM/ORQBMSQdLPk7OTB3VVANORypMOyRMNAlNVjhOTQRPHPZOR6q','W75OpvVcOG','WRu9W5RcRf7cLmoY','WPhdH8kuW7FcGW','WOBdICkfW5lcKq','W7fZW5VdS3fI','WOqQW47cHdu','WP/cH8kuy3JdVSk9W4/dMfJdNmopD8koWQyscmoyBrFcNghdRKybWPddP8ovwx1dW7qQyN7dGSoOwMeAWOddPGOcvq','hrNdMmo8oG','lmoTW6v2fmkWW50wWQpcHCkGW44','kSkUWQ8GWORcQq','e8ouWRio','W6ldKmoNW7pdKW','te7dNmkjWOC','WQhcG1zkWRO','ae3dTXpcKCkVW6fs','iIddV8owhGlcVG','mmk/WQGLWPxdP8okW5q1iCkBemogW6ZdMx/cTSksW4FcRCoEqmkSWQFcQgb/rrPNAYTbW7tdOSkfw8opcq1qs8k9','W6jnx8kzW4O','zCoJp8kxWPO','g2BdVXFcLa','nmkUWRiYWPlcTq','W6JcP8kaW4Wi','WRBcMGdcICohW5S','W68DweRcT3q','WQeec8kx','gSoqWQSQWQSmW4hcK11HmCk1gmkgFmk5gJCYtq','W7rpWPyV','o8kuW53cJ1xcHq','W5f7bSkAEGvCdCkcb8kQ','W4hdQ8ojW5ZdJa','WQNcMrJcN8ob','W4nREmkNW6S','W77dPNHJW5/cUq','WQBdVglcNSkCWOxcRfC','WOBcVvK','lupdJsNcUW','W7DelMNcSG','WOGSuq','W6hcKCk+W7CqA8oBWPGw','EmkXASkrua','WP/cRKRdSSo5','W7tcLCkhW5Ct','WRSjdgiK','WRFcMqFcIq','6k6I6isH6koy6l2Y6kkx77YK6AcQ6ygT5l+Y5lQ55A+Y5P215PMn5PEc','nqNdIxlcKuKr','WRiWWO5dWR4','WPLTWPlcGb8','WQZcUtRcPSoh','WONcP8oJu3m','WO3cQSoHEvq','qSocWQxdQ8oBbCk6W6iAtt/cUSogdYOSCuVdNKvbW7dcOYnxs39QW5P5xCopW71qWOOmW6bxW6KEWOVcIuxcSwG','W5WSzfT7','WPZcRL7dQSoL','W4KgEhPSWQldJW','jmkuWQ0K','awvtWPRcTSkhWQVdR8orWOS','AYKVWRJdPd4','W4BcS8kFW7OG','kMhdLJhcTG','AJ8M','W49dWP5uW5C','WQSwo1qq','WQNdMCko','WQRdMCkHrmkv','mXJdQ8oAka','W7DuW6FdRMe','BmoYWRLv','W7BcQexcUW','WQJdS+wLUUI3NvhcOUwpL+wyH3JdNG','h8khWPeeWQS','pCkTW6WizCkeWPZcNmoMWReXiW','W6VdVxHpW5dcVx0','WQrmgqRdRwisW6lcGJ3cOa','WO1mW4nx','lCkjW7dcVwW','roIVJEMeL+AwH+EyRUw9GUInL+woPSkAWObMo8oDhSkvWRnNfSkGFSoQjg/cVIrfmhCoW71hW4KZDf5TWQldH0KyW7xdSMSQW5ywkSkBsSkyW43dMG','WQO2yCoeeW','aJeCWOZcNYtcQmoyWRe9aq','WRKsWQu','W5WoA00','WRSuWQfDWOhdGsZdQa','lbVdICotkW','WQbpWRVcRHn7lCovBG','ECkNDSkjvW','W7NdNmkSW4ZcOtlcPSkpu8kMWOOVWPf2CWFdVmoZW5ldU8kZW7iaB8o4W7WYWRePW73dKSkElmkIWQOxwmokdLGNW6X/DJHaW5DNDSkjWONcQCojW5NcNHhdGCk2rSosW4VdNSk0W6JcS8kzW5hdLmk+vmoGWQRcUG4XW54ZW4iBlqlcR8ktWPRdJmkjW5b5W6FdKSkYnmoSyML7fe/dPCkDW5bkW6PXW77cMCo1eLZcUtZdNCoXW5OQch/dPgRcPmoQW5/dTCoMW6rJW6WWWRTrW6ddQdiAWPb5d8kzECkvW5/dISkdWO3dIsuyiSkWtSoNc3NcSCkjzmoWFfjTmcBcM20wW5BcOCkvW5HLWOX+cSkIyeJcNmoBW73dHGTaWRVdTaG','jbtdGvJcKeODWP7cUq','gSkMW53dPSk5','mqldU8oUkq','W6HiFMKAyLrPva','o8kuW50','W5VcPSkgW6LQxvldQSkvnCo2qa','ogHXW4ZcJSorWQ/dRCoAWRtcUGmbW7NcU8kCWO3cVZNcU1W','W54+w092','nq/dL0G','W60kqg3cTW','fCobWQSBWQ1cWOBdK19qmCk1gmk8o8kNqdGKeCkWW4NdUW','WRhdPCkXW5/cPJNcO8kibq','WQVdMCkE','hvRdQmkkyq','WPztuCoxWQy','W7PPW6/dN3PJBW','WQ0DaLWY','gmo/WRCIWRS','W513bmkFDq13bSkUkSkJ','hCkdW4hdQSkJ','sLZdSSkK','6i2V5B6L77+R','y8oYW4ldP8kyxCoRtW','oCkKW7m','W6LpWOrNW4HonCkzrhi7W5xcUCkTWOmAySkfDmoMdmkoWOVcJw7dN8kCesa0W7RdRJBcUa','W6u7t0nh','papdSCoU','W6pdKmovW6RdH2WNWQi','lCkhFKKe','WO7cSL8','WPzzF8oxWO4','WQHtWOpdK8oM','sSo8WQ1wna','ycK1WP7dPsjTvaRcUCkTACo6EmoQWQZcOrilAq','f8keWQKyWR4','dgRcO244','ytKVWRZdPd9QvthcNSo/zCo9tCoCWQZcVrylFJuTvgtcHCkzWP7cKN5TWPpdIY0WabRcUCksDdldTmkzW5ZcLXW','WRiVW7VcPG','WOhcJSonsG','dNZdLSkm6kYz5RkD5Asi6lAP776y6k295Qk65PYb57+e6lEH6ysU6k2K','W4xcM8kLW50mESo5WRnwfmoVW7mjBSo5D8o5A8oOW6S','WQnPW6HYAmkoW70Q','WPVcNenJWQe','iLxcVq','W4hcUgpcVCk1','WQ11WQpdHCoG','WRJcIbRcGmonW4ZcVmk9DSoFW5JcLgJdTSo4WOnOkazIW7FcGCkLWR5piGXjm8oyWQv+WP0','zLpcHWddIbLmWRxcK8k8o8k3nW','WODbWQdcPa'];}())];}())];}());a=function(){return aj;};return a();};if($[M(0x150,'0!T$')]()){Object[M(0x2ac,'yLul')](jdCookieNode)[M(0x240,'MwJA')](c=>{const N=M;cookiesArr[N(0x2bc,'1eEc')](jdCookieNode[c]);});if(process[M(0x25e,'tyRd')][M(0x1fb,'tyRd')]&&process[M(0x162,'R&pZ')][M(0x269,'V[v(')]===M(0x2b0,'MwJA'))console[M(0x1d6,'FnGu')]=()=>{};}else cookiesArr=[$[M(0x129,'owe^')](M(0x23e,'XPWm')),$[M(0x13a,'2MeY')](M(0x27d,'7hbS')),...jsonParse($[M(0x204,'ojjO')](M(0x290,'ft(V'))||'[]')[M(0x25f,'!Zxu')](c=>c[M(0x2a8,'owe^')])][M(0x257,'3^[t')](c=>!!c);const JD_API_HOST=M(0x1ea,'!Zxu');function b(c,d){const e=a();return b=function(f,g){f=f-0x10f;let h=e[f];if(b['RjlkFI']===undefined){var i=function(n){const o='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let p='',q='';for(let r=0x0,s,t,u=0x0;t=n['charAt'](u++);~t&&(s=r%0x4?s*0x40+t:t,r++%0x4)?p+=String['fromCharCode'](0xff&s>>(-0x2*r&0x6)):0x0){t=o['indexOf'](t);}for(let v=0x0,w=p['length'];v<w;v++){q+='%'+('00'+p['charCodeAt'](v)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(q);};const m=function(n,o){let p=[],q=0x0,r,t='';n=i(n);let u;for(u=0x0;u<0x100;u++){p[u]=u;}for(u=0x0;u<0x100;u++){q=(q+p[u]+o['charCodeAt'](u%o['length']))%0x100,r=p[u],p[u]=p[q],p[q]=r;}u=0x0,q=0x0;for(let v=0x0;v<n['length'];v++){u=(u+0x1)%0x100,q=(q+p[u])%0x100,r=p[u],p[u]=p[q],p[q]=r,t+=String['fromCharCode'](n['charCodeAt'](v)^p[(p[u]+p[q])%0x100]);}return t;};b['GZVxfC']=m,c=arguments,b['RjlkFI']=!![];}const j=e[0x0],k=f+j,l=c[k];return!l?(b['kleaXa']===undefined&&(b['kleaXa']=!![]),h=b['GZVxfC'](h,g),c[k]=h):h=l,h;},b(c,d);}!(async()=>{const O=M,c={'lqXSB':function(e,f){return e<f;},'alXLm':function(e,f){return e*f;},'jfYrR':function(e,f){return e-f;},'uBkoK':function(e,f){return e+f;},'gMCyH':O(0x18c,'zTue'),'kttQy':function(e,f){return e+f;},'YOVGL':O(0x220,'7Nn['),'pyrAu':O(0x256,'hAaw'),'SHtEN':O(0x16e,'F$mk'),'TbaDW':function(e,f){return e(f);},'vxUce':function(e,f){return e<=f;},'HHUHx':function(e,f){return e!==f;},'zMFEe':O(0x21f,'cPO('),'uGRec':O(0x1a8,'xV)t'),'JlPBO':function(e,f){return e<f;},'rlIOs':function(e,f){return e(f);},'YeNwp':function(e,f){return e+f;},'xDCLw':function(e,f){return e+f;},'IShoU':O(0x13c,'0!T$'),'vVgOQ':function(e){return e();},'GLMQM':function(e){return e();}};if(!cookiesArr[0x0]){$[O(0x237,'kD8!')]($[O(0x174,'S1aB')],O(0x2b1,'8)@o'),c[O(0x127,'8%hb')],{'open-url':O(0x295,'#dx[')});return;}let d=c[O(0x1bd,'cNcS')](c[O(0x2b3,'yLul')](c[O(0x262,'Pa1H')],c[O(0x12f,'8)@o')]),c[O(0x123,'0!T$')]);authorCodeList=await c[O(0x20c,'(hfL')](getAuthorCodeList,d);if(c[O(0x2a2,'ojjO')](authorCodeList[O(0x164,'0!T$')],0x0)){if(c[O(0x1e5,'xV)t')](c[O(0x1ab,'cPO(')],O(0x14e,'(hfL'))){console[O(0x2a3,'3@[x')](O(0x175,'ojjO'));return;}else{let f='',g=O(0x264,'7Nn[');for(let h=0x0;c[O(0x11e,'1eEc')](h,h);h++){let j=l[O(0x1ba,'[0fq')](c[O(0x232,'*R3T')](m[O(0x128,'yP5A')](),c[O(0x148,'yLul')](g[O(0x190,'zTue')],0x1)));f+=g[O(0x285,'FnGu')](j,c[O(0x18f,'Bgpc')](j,0x1));}return f;}}console[O(0x2c1,'O&q4')](c[O(0x1ff,'#J%y')]);for(let f=0x0;c[O(0x297,'zTue')](f,cookiesArr[O(0x2b9,'N5CV')]);f++){if(cookiesArr[f]){cookie=cookiesArr[f],$[O(0x12c,'8)@o')]=c[O(0x18e,'y0%Y')](decodeURIComponent,cookie[O(0x2b4,'!%$Z')](/pt_pin=([^; ]+)(?=;?)/)&&cookie[O(0x2b4,'!%$Z')](/pt_pin=([^; ]+)(?=;?)/)[0x1]),$[O(0x2aa,'4#rF')]=f+0x1,$[O(0x242,'N5CV')]=!![],$[O(0x122,'V[v(')]='',UA=getUA(),console[O(0x1a1,'Pa1H')](c[O(0x163,'8%hb')](c[O(0x25d,']0*%')](c[O(0x271,'xV)t')](O(0x2bb,'cNcS'),$[O(0x23b,'kD8!')])+'】',$[O(0x18a,'Bgpc')]||$[O(0x289,'cNcS')]),'\x0a'));if(!$[O(0x17d,'PREd')]){$[O(0x1b8,'!%$Z')]($[O(0x1b3,'3^[t')],O(0x27e,'!%$Z'),O(0x235,'ft(V')+$[O(0x23b,'kD8!')]+'\x20'+($[O(0x1cd,'N5CV')]||$[O(0x145,'R&pZ')])+O(0x1c8,'8%hb'),{'open-url':c[O(0x139,'Pa1H')]});$[O(0x286,'Pa1H')]()&&(c[O(0x1ee,'1eEc')]===O(0x151,'y0%Y')?await notify[O(0x1b4,'XPWm')]($[O(0x186,'LA^c')]+O(0x218,'xV)t')+$[O(0x249,'[0fq')],O(0x22b,'1eEc')+$[O(0x1d4,'cNcS')]+'\x20'+$[O(0x1ed,'(5H0')]+O(0x14b,']0*%')):(h[O(0x1de,'(drF')](''+f[O(0x280,']0*%')](j)),k[O(0x24b,'*R3T')](l[O(0x251,'(drF')]+O(0x225,'(5H0'))));continue;}hot=![],await c[O(0x169,'!%$Z')](hby_lottery),await $[O(0x26e,'V[v(')](0xbb8),!hot&&(await c[O(0x1c2,'zTue')](hby_share),await $[O(0x1cc,'8)@o')](0x7d0));}}})()[M(0x294,'7Nn[')](c=>{const P=M;$[P(0x1fd,'8%hb')]('','❌\x20'+$[P(0x13f,'!Zxu')]+P(0x1c1,'*R3T')+c+'!','');})[M(0x239,'8)@o')](()=>{const Q=M;$[Q(0x1ec,'cNcS')]();});async function hby_lottery(){const R=M,c={'NxnCl':R(0x16a,'8%hb'),'bsZLi':function(d,e){return d(e);},'CgYQd':R(0x1e7,'#J%y'),'STHdf':R(0x282,'N5CV'),'DXXOW':function(d,e){return d!==e;},'XHSfD':R(0x2a0,'0!T$'),'mNRjy':R(0x140,'O&q4'),'sJkgU':R(0x259,'0!T$'),'zXtCc':function(d,e){return d==e;},'JYQPq':function(d,e){return d===e;},'bIDYq':R(0x1c7,'FnGu'),'MlhzT':function(d,e){return d+e;},'RfYfT':function(d,e){return d!==e;},'FCOex':R(0x23f,'Pa1H'),'xOlpv':R(0x29d,'4#rF'),'xdZYS':R(0x216,'3^[t'),'KCNQB':R(0x1e2,'[0fq'),'QcuyT':R(0x228,'(drF'),'EuGwk':R(0x149,'zTue'),'TUaFn':R(0x182,'F$mk')};return new Promise(async d=>{const S=R,e={'SVWAK':c[S(0x1b9,'!Zxu')],'zlDIC':function(f,g){return f*g;},'lRLFZ':function(f,g){const T=S;return c[T(0x188,'hAaw')](f,g);},'jXoeB':c[S(0x19f,'Bgpc')],'FRmgP':c[S(0x221,'O&q4')],'QiLHq':function(f,g){return f+g;},'TsWkZ':S(0x26b,'F$mk'),'uMAFQ':function(f,g){const U=S;return c[U(0x23c,'7Nn[')](f,g);},'VkVKj':c[S(0x13e,'PREd')],'KAQmI':c[S(0x15f,'!%$Z')],'oTrrt':function(f,g){const V=S;return c[V(0x211,'yLul')](f,g);},'mCiSk':c[S(0x226,'XPWm')],'BBILY':S(0x1ad,'F$mk'),'OmIDb':function(f,g){const W=S;return c[W(0x11d,'1eEc')](f,g);},'hEXRM':function(f,g){return f==g;},'Mxywj':function(f,g){const X=S;return c[X(0x191,'V[v(')](f,g);},'sumXu':c[S(0x29c,'kD8!')],'FwCyR':function(f,g){const Y=S;return c[Y(0x214,'V[v(')](f,g);},'bpBXP':function(f,g){const Z=S;return c[Z(0x2ae,'3@[x')](f,g);},'dEdVg':S(0x15d,'(hfL'),'YTwoa':function(f,g){const a0=S;return c[a0(0x16c,'MwJA')](f,g);},'SqRgo':S(0x278,'!Zxu'),'IAOyg':c[S(0x124,'#J%y')],'JpFlu':function(f,g){const a1=S;return c[a1(0x1e0,'3@[x')](f,g);},'lloUB':c[S(0x1fc,'yLul')],'XVkpu':c[S(0x1a0,'(hfL')],'zRZCK':S(0x210,'XPWm')};if(c[S(0x231,'hAaw')](c[S(0x18d,'R&pZ')],S(0x28d,'PREd'))){if(h)i=j[S(0x1f1,'#J%y')](k);l[S(0x1f3,'!%$Z')]=!![];}else{$[S(0x209,'YPWC')]=authorCodeList;const g={'url':S(0x2b7,'yLul'),'body':S(0x208,'3^[t')+JSON[S(0x277,'7hbS')]($[S(0x1da,'ojjO')])+S(0x21e,'S1aB'),'headers':{'Cookie':cookie+'','origin':c[S(0x118,'hAaw')],'Content-Type':S(0x246,']0*%'),'referer':c[S(0x183,'cNcS')],'User-Agent':UA,'Accept-Language':c[S(0x15a,'(drF')]}};$[S(0x267,'PREd')](g,async(h,i,j)=>{const a4=S,k={'ZSodZ':function(l,m){return l===m;},'BCqlu':function(l,m){const a2=b;return e[a2(0x23a,'*R3T')](l,m);},'jeioc':function(l,m){return l-m;},'GEjKe':function(l,m){const a3=b;return e[a3(0x1ce,'0qDX')](l,m);},'qHIkC':function(l,m){return l==m;},'zatRR':function(l,m){return l+m;},'DXFdY':e[a4(0x12a,'ojjO')],'uOZYz':e[a4(0x16f,'ojjO')],'hcXGu':function(l,m){const a5=a4;return e[a5(0x1df,'!qoo')](l,m);},'BJAzT':e[a4(0x161,'xV)t')]};if(e[a4(0x229,']0*%')](e[a4(0x1a5,'V[v(')],a4(0x155,'4#rF')))try{if(e[a4(0x14c,'tyRd')](e[a4(0x263,'LA^c')],e[a4(0x167,'1eEc')])){j[a4(0x270,'(drF')](k)[a4(0x1c4,']0*%')](t=>{const a6=a4;q[a6(0x29b,'ojjO')](r[t]);});if(n[a4(0x298,'1eEc')][a4(0x146,'hAaw')]&&k[a4(0x142,'V[v(')](o[a4(0x19e,'yLul')][a4(0x133,'y0%Y')],a4(0x288,'4#rF')))p[a4(0x1cb,'N5CV')]=()=>{};}else{if(h)e[a4(0x26c,'8)@o')](e[a4(0x248,'YPWC')],e[a4(0x154,'!%$Z')])?(console[a4(0x1fd,'8%hb')](''+JSON[a4(0x244,'kD8!')](h)),console[a4(0x212,'0!T$')]($[a4(0x1a7,'PQn7')]+a4(0x1f9,'hAaw'))):f[a4(0x284,'cPO(')](g[h]);else{j=JSON[a4(0x207,'7hbS')](j);if(e[a4(0x24c,'#J%y')](j[a4(0x281,'3^[t')],!![])){if(e[a4(0x1d3,'xV)t')](j[a4(0x26d,'Pa1H')],0x0)&&e[a4(0x1ae,'F$mk')](j[a4(0x22e,'PQn7')][a4(0x18b,'0qDX')],0x0)){if(e[a4(0x206,'3@[x')](a4(0x10f,'S1aB'),e[a4(0x165,'y0%Y')]))console[a4(0x2c1,'O&q4')](e[a4(0x287,'V[v(')](e[a4(0x138,'7Nn[')]+j[a4(0x26f,'1eEc')][a4(0x185,'zTue')][a4(0x2b8,'zTue')][a4(0x143,'8%hb')],a4(0x22d,'[0fq'))),$[a4(0x21d,'S1aB')]=j[a4(0x2c4,'(drF')][a4(0x193,'#dx[')][a4(0x292,'(5H0')]||'';else{let o=h[a4(0x215,'xV)t')](k[a4(0x223,'N5CV')](i[a4(0x272,'2MeY')](),k[a4(0x19b,'R&pZ')](j[a4(0x1b5,'!%$Z')],0x1)));k+=l[a4(0x245,'3^[t')](o,o+0x1);}}else{if(e[a4(0x1a6,'[0fq')](e[a4(0x28a,'1eEc')],e[a4(0x2bf,'zTue')]))f[a4(0x17a,'S1aB')](g,h);else{console[a4(0x234,'PREd')](e[a4(0x230,'7Nn[')](j[a4(0x2c4,'(drF')][a4(0x24e,'(drF')]+'\x20',j[a4(0x147,'XPWm')][a4(0x21b,'O&q4')]));if(j[a4(0x1c6,'tyRd')][a4(0x13d,'y0%Y')]==-0x3f1||j[a4(0x261,'MwJA')][a4(0x2a7,'3@[x')]==e[a4(0x187,'(5H0')]){if(a4(0x12e,'zTue')===e[a4(0x1fe,'S1aB')])hot=!![];else{d[a4(0x152,'#dx[')](e[a4(0x17e,'O&q4')]);return;}}}}}else e[a4(0x2c5,'N5CV')]===a4(0x117,'tyRd')?k[a4(0x181,'YPWC')](e,f):(console[a4(0x28b,'zTue')](j[a4(0x20b,'PQn7')]),e[a4(0x27c,'7hbS')](j[a4(0x219,'8)@o')],e[a4(0x21c,'(hfL')])&&(hot=!![]));}}}catch(r){$[a4(0x197,'FnGu')](r,i);}finally{e[a4(0x1be,'7hbS')](e[a4(0x23d,'FnGu')],e[a4(0x1f0,'3@[x')])?d(j):d=!![];}else o[a4(0x20d,'*R3T')]==0x0&&k[a4(0x17c,'(hfL')](p[a4(0x224,'(hfL')][a4(0x1b2,'8)@o')],0x0)?(A[a4(0x11c,'XPWm')](k[a4(0x293,'7Nn[')](k[a4(0x17f,'O&q4')]+B[a4(0x1f8,'F$mk')][a4(0x14f,'LA^c')][a4(0x2b6,'7hbS')][a4(0x252,'yLul')],k[a4(0x273,'hAaw')])),C[a4(0x144,'cNcS')]=D[a4(0x1e6,'hAaw')][a4(0x265,'ft(V')][a4(0x2a1,'MwJA')]||''):(E[a4(0x20f,'tyRd')](k[a4(0x2ba,'y0%Y')](F[a4(0x116,'!%$Z')][a4(0x141,'Bgpc')]+'\x20',G[a4(0x27f,'2MeY')][a4(0x15c,'R&pZ')])),(H[a4(0x115,'Pa1H')][a4(0x13d,'y0%Y')]==-0x3f1||I[a4(0x202,'cPO(')][a4(0x254,'yP5A')]==k[a4(0x16d,'xV)t')])&&(K=!![]));});}});}async function hby_share(){const a7=M,c={'AKeaJ':a7(0x178,'Bgpc'),'HphoJ':a7(0x1a2,'V[v('),'dMNfY':function(d,e){return d!==e;},'MBleu':a7(0x29e,'hAaw'),'uQYvu':a7(0x1bc,'(drF'),'woecl':function(d,e){return d==e;},'wCfbx':function(d,e){return d===e;},'lTEaZ':a7(0x132,'#J%y'),'HWhve':function(d){return d();},'gDfYb':function(d,e){return d+e;},'gMLuq':a7(0x2c0,'yLul'),'LBthF':function(d,e){return d(e);},'okRPz':function(d,e){return d(e);},'IftwM':a7(0x1d8,'XPWm'),'mlfiR':a7(0x1af,'4#rF')};return new Promise(async d=>{const a9=a7,e={'xECpt':function(g,h){const a8=b;return c[a8(0x114,'hAaw')](g,h);}};$[a9(0x299,'#dx[')]={'sceneId':$[a9(0x217,'cPO(')],'activityNo':c[a9(0x1a3,'kD8!')]};const f={'url':a9(0x14a,'N5CV'),'body':a9(0x1f6,'!%$Z')+JSON[a9(0x1dd,'O&q4')]($[a9(0x168,'FnGu')])+a9(0x113,'cPO('),'headers':{'Cookie':cookie,'origin':a9(0x1dc,'LA^c'),'Content-Type':a9(0x200,'PQn7'),'referer':a9(0x24a,'1eEc'),'User-Agent':UA,'Accept-Language':c[a9(0x2b5,'0qDX')]}};$[a9(0x11b,'hAaw')](f,async(g,h,i)=>{const aa=a9,j={'DEBIi':c[aa(0x266,'8)@o')],'YbQvI':c[aa(0x1d0,'kD8!')]};try{g?(console[aa(0x1e9,'xV)t')](''+JSON[aa(0x2a4,'(hfL')](g)),console[aa(0x279,'2MeY')]($[aa(0x1f7,'PREd')]+aa(0x17b,'1eEc'))):c[aa(0x1b6,'V[v(')](c[aa(0x166,'cNcS')],c[aa(0x1d9,'8)@o')])?(i=JSON[aa(0x26a,'4#rF')](i),c[aa(0x241,'8)@o')](i[aa(0x121,'(drF')],!![])?i[aa(0x1bf,'owe^')]==0x0&&i[aa(0x268,'0!T$')][aa(0x1a9,'ojjO')]==0x0?c[aa(0x1b0,'8)@o')](aa(0x2ad,'(hfL'),c[aa(0x160,'XPWm')])?(console[aa(0x2b2,'Bgpc')](aa(0x238,'yP5A')),await $[aa(0x2af,'(drF')](0xbb8),await c[aa(0x260,'1eEc')](hby_lottery)):e[aa(0x134,'kD8!')](e,f):console[aa(0x152,'#dx[')](c[aa(0x25a,'R&pZ')](i[aa(0x224,'(hfL')][aa(0x28f,'LA^c')],'\x20')+i[aa(0x1c0,'S1aB')][aa(0x1e1,'7hbS')]):console[aa(0x2c1,'O&q4')](i[aa(0x27a,'owe^')])):h=[i[aa(0x243,'R&pZ')](j[aa(0x1b7,'Bgpc')]),j[aa(0x125,'F$mk')](j[aa(0x120,'V[v(')]),...k(l[aa(0x11f,'*R3T')](aa(0x1cf,'cPO('))||'[]')[aa(0x1ef,'yLul')](n=>n[aa(0x14d,'ft(V')])][aa(0x170,'Bgpc')](n=>!!n);}catch(m){$[aa(0x233,'cPO(')](m,h);}finally{if(c[aa(0x250,'#J%y')](c[aa(0x24f,'PREd')],c[aa(0x1aa,'N5CV')]))c[aa(0x236,'7Nn[')](d,i);else return!![];}});});}function getUA(){const ab=M,c={'QEHtV':function(f,g){return f==g;},'BPnXS':ab(0x222,'cNcS'),'HCLmo':function(f,g){return f!==g;},'pDSNF':ab(0x2ab,'y0%Y'),'lWLLb':ab(0x253,'V[v('),'vQpoe':function(f,g){return f<g;},'wHyDE':function(f,g){return f*g;},'eJhIe':function(f,g){return f-g;},'uAPJc':function(f,g){return f+g;},'MFeoa':function(f,g){return f(g);},'safky':ab(0x25c,'YPWC'),'uCyKv':ab(0x131,'#dx['),'NTMzD':ab(0x194,'Pa1H'),'AcWTH':ab(0x172,'[0fq'),'Eapfd':ab(0x29f,'S1aB')};getstr=function(f){const ad=ab,g={'kSFvA':function(h,j){const ac=b;return c[ac(0x258,'7hbS')](h,j);},'NIOQy':c[ad(0x274,'F$mk')]};if(c[ad(0x2c2,'Pa1H')](c[ad(0x296,'7hbS')],ad(0x1c9,'Pa1H'))){let h='',j=c[ad(0x22f,'ojjO')];for(let k=0x0;c[ad(0x291,'2MeY')](k,f);k++){let l=Math[ad(0x28c,'(5H0')](c[ad(0x199,'(5H0')](Math[ad(0x130,'XPWm')](),c[ad(0x1e3,'LA^c')](j[ad(0x20a,'F$mk')],0x1)));h+=j[ad(0x245,'3^[t')](l,c[ad(0x1ac,'PQn7')](l,0x1));}return h;}else{if(g[ad(0x2bd,'zTue')](typeof e[ad(0x20e,'ft(V')](f),g[ad(0x159,'S1aB')]))return!![];}};let d=Buffer[ab(0x176,'y0%Y')](c[ab(0x2c3,'(drF')](getstr,0x10),ab(0x196,'!Zxu'))[ab(0x276,'0!T$')](c[ab(0x1a4,'2MeY')]),e=c[ab(0x203,'PQn7')](getstr,0x30);return ep=encodeURIComponent(JSON[ab(0x1d2,'ojjO')]({'hdid':c[ab(0x177,'3^[t')],'ts':Date[ab(0x1bb,'(drF')](),'ridx':-0x1,'cipher':{'sv':c[ab(0x1eb,'8)@o')],'ad':d,'od':e,'ov':c[ab(0x205,'1eEc')],'ud':d},'ciphertype':0x5,'version':c[ab(0x1f2,'owe^')],'appname':ab(0x24d,'N5CV')})),ab(0x2be,'*R3T')+ep+ab(0x1d1,'O&q4');}function getAuthorCodeList(c){return new Promise(d=>{const ae=b,e={'tQCkd':function(g,h){return g(h);}},f={'url':c+'?'+new Date(),'timeout':0x2710,'headers':{'User-Agent':ae(0x2a6,'2MeY')}};$[ae(0x179,'S1aB')](f,async(g,h,i)=>{const af=ae;try{if(g)$[af(0x195,'LA^c')]=![];else{if(i)i=JSON[af(0x19a,'PQn7')](i);$[af(0x1fa,'V[v(')]=!![];}}catch(j){$[af(0x2a9,'8%hb')](j,h),i=null;}finally{e[af(0x22a,'MwJA')](d,i);}});});}function random(c,d){const ag=M,e={'OOuMX':function(f,g){return f+g;},'jSJkR':function(f,g){return f-g;}};return e[ag(0x1f4,'zTue')](Math[ag(0x255,'#dx[')](Math[ag(0x28e,'S1aB')]()*e[ag(0x157,'PQn7')](d,c)),c);}function safeGet(c){const ah=M,d={'owDSl':function(f,g){return f(g);},'BPyYm':function(f,g){return f!==g;},'CKetO':ah(0x283,'cNcS'),'IOaKt':function(f,g){return f==g;},'prkRl':ah(0x112,'cNcS')};try{if(d[ah(0x189,'yLul')](d[ah(0x136,'(hfL')],ah(0x119,']0*%'))){if(d[ah(0x135,'XPWm')](typeof JSON[ah(0x15e,'xV)t')](c),ah(0x192,'PQn7')))return!![];}else return e[ah(0x1b1,'2MeY')](f);}catch(g){if(d[ah(0x1f5,'8%hb')](d[ah(0x1db,'#dx[')],d[ah(0x275,'S1aB')]))d[ah(0x153,'#J%y')](g,f);else return console[ah(0x213,'(hfL')](g),console[ah(0x137,'LA^c')](ah(0x171,'tyRd')),![];}}function jsonParse(c){const ai=M,d={'YfxsH':function(f,g){return f==g;}};if(d[ai(0x227,'xV)t')](typeof c,ai(0x19c,']0*%')))try{return JSON[ai(0x156,'hAaw')](c);}catch(f){return console[ai(0x12d,'!Zxu')](f),$[ai(0x110,'XPWm')]($[ai(0x1a7,'PQn7')],'',ai(0x25b,'FnGu')),[];}}var version_ = 'jsjiami.com.v7';
// prettier-ignore
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
