mui.init({
	subpages:[{
	  	url:'page/picList.html',
	  	id:'picList.html',
	  	styles:{
	    	top:'30px',//mui标题栏默认高度为45px；
	    	bottom:'0px'//默认为0px，可不定义；
	   	}
    },{
    	url:'page/setting.html',
	  	id:'setting.html',
	  	styles:{
	    	top:'30px',//mui标题栏默认高度为45px；
	    	bottom:'0px'//默认为0px，可不定义；
	   	}
    }]
});

/**
 * 跳转到设置页面
 */
//tap为mui封装的单击事件，可参考手势事件章节
document.getElementById('settingId').addEventListener('tap', function() {
	mui.getWebviewById()
});
