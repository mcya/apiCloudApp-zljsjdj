(function(window){
	var https='http://192.168.20.106:8080/'; // 192.168.20.106  192.168.30.138  192.168.30.75
	var remote=https+'gzq_api/app2base/';  
	var proj = '';
	var u={};
	function getUrl (uri){
		return remote + uri;
	};
	u.getHttps = function(){
		return https;
	}
	u.imgUrl = function(){
		return remote+'vcode?v='+Math.random;
	}
	u.get = function(url, fnSuc){               	
		var time=new Date();
        var dateTime=time.getFullYear();
        dateTime+=(time.getMonth()+1>9?'':'0')+(time.getMonth()+1);
        dateTime+=(time.getDate()>9?'':'0')+time.getDate();
        dateTime+=(time.getHours()>9?'':'0')+time.getHours();
        dateTime+=(time.getMinutes()>9?'':'0')+time.getMinutes();
        dateTime+=(time.getSeconds()>9?'':'0')+time.getSeconds();
		var param = {
			url: getUrl(url),
			method: 'get',
			dataType: 'json',
			timeout: 30,
	        cache: false,
	        charset: 'utf-8',
	        headers: {
	        	'Content-Type': 'application/json',
	        	'X-Application-Id':'2001',
				'X-TimeStamp':dateTime,      
				'X-Authentication':hex_md5('a8f1d501c78c2b1f'+'/gzq_api/app2base/'+url+dateTime+'898106fcb04a4c7e')
	        }
		}
		api.ajax(param, function(ret,err){
        	if(ret){
	            fnSuc && fnSuc(ret);
				api.hideProgress();
				api.refreshHeaderLoadDone();
            }else{
				api.hideProgress();
				api.refreshHeaderLoadDone();
	            api.toast({
		        	msg:'网络故障，请稍后重试，' + err.msg
	        	});
	        }
        });
	};
	
	u.post = function(url,datas,fnSuc){
		api.showProgress({      //数据未加载之前，页面显示加载进度弹框
			style: 'default',
			animationType: 'fade',
			title: '努力加载中...',
			modal: true
		});
		var time=new Date();
        var dateTime=time.getFullYear();
        dateTime+=(time.getMonth()+1>9?'':'0')+(time.getMonth()+1);
        dateTime+=(time.getDate()>9?'':'0')+time.getDate();
        dateTime+=(time.getHours()>9?'':'0')+time.getHours();
        dateTime+=(time.getMinutes()>9?'':'0')+time.getMinutes();
        dateTime+=(time.getSeconds()>9?'':'0')+time.getSeconds();
		var param = {
			url: getUrl(url),
			method: 'post',
			dataType: 'json',
			timeout: 30,
	        cache: false,
	        charset: 'utf-8',
			data: datas,
	        headers: {
	        	'X-Application-Id':'2001',
				'X-TimeStamp':dateTime,
				'X-Authentication':hex_md5('a8f1d501c78c2b1f'+'/gzq_api/app2base/'+url+dateTime+'898106fcb04a4c7e')
	        }
		};	
		api.ajax(param, function(ret,err){
        	if(ret){
		        fnSuc && fnSuc(ret);
		        api.hideProgress();
			    api.refreshHeaderLoadDone();
            }else{
		        api.hideProgress();
			    api.refreshHeaderLoadDone();
                api.toast({msg:'网络故障,请稍后重试,'+err.msg});
            }
        });
	};
	u.postPull = function(url,datas,fnSuc){
		var time=new Date();
        var dateTime=time.getFullYear();
        dateTime+=(time.getMonth()+1>9?'':'0')+(time.getMonth()+1);
        dateTime+=(time.getDate()>9?'':'0')+time.getDate();
        dateTime+=(time.getHours()>9?'':'0')+time.getHours();
        dateTime+=(time.getMinutes()>9?'':'0')+time.getMinutes();
        dateTime+=(time.getSeconds()>9?'':'0')+time.getSeconds();
		var param = {
			url: getUrl(url),
			method: 'post',
			dataType: 'json',
			timeout: 30,
	        cache: false,
	        charset: 'utf-8',
			data: datas,
	        headers: {
	        	'X-Application-Id':'2001',
				'X-TimeStamp':dateTime,
				'X-Authentication':hex_md5('a8f1d501c78c2b1f'+'/gzq_api/app2base/'+url+dateTime+'898106fcb04a4c7e')
	        }
		};	
		api.ajax(param, function(ret,err){
        	if(ret){
		        fnSuc && fnSuc(ret);
		        api.hideProgress();
			    api.refreshHeaderLoadDone();
            }else{
		        api.hideProgress();
			    api.refreshHeaderLoadDone();
                api.toast({msg:'网络故障,请稍后重试,'+err.msg});
            }
        });
	};
	function redirectToLoginPage(){
		$api.rmStorage("_USER");
		api.openWin({
			name: 'index',
			url: '../index.html',
			slidBackEnabled:false,
			animation:{type:"none"}
		});
	};
	
	//拼接图片地址
	u.getImgUrl = function(){
		return getImgUrl = remote + proj;
		}
	u.get_md5 = function(raw){
		return hex_md5(raw);
	};
	
	function getSign(raw) {
		return "df1bd0d1e93a0a73a4a032fab7fd8c38";
		/*var raw = datas.method+datas.version+datas.timestemp+"bao";
		return hex_md5(raw); */
	};
	
	function getAccessToken(){
		var user = $api.getStorage('_USER');
		if (user !=null) {
			return user.accessToken;
		}
		return "";
	};
	
	function getRefreshToken(){
		var user = $api.getStorage('_USER');
		if (user !=null) {
			return user.refreshToken;
		}
		return "";
	};

    window.util = u;
})(window);
