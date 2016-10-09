  //获取属性的函数
  function getStyle(obj,attr){
      if (obj.currentStyle) {
        return obj.currentStyle[attr];
      }else{
        return window.getComputedStyle(obj,null)[attr];
      }
    }



 //获取id选择器，类选择器，标签选择器，和页面加载事件
function $(selector,range){
	 
     if (typeof selector=="string") {
         var range=range||document;
     	// alert("获取")
     	if (selector.charAt(0)=="#") {
     		// alert("1");
     		return document.getElementById(selector.substr(1));

     	};
     	if (selector.charAt(0)==".") {
     		return getclass(selector.substr(1),range);
     	};
     	
     	if(/^[a-zA-Z][a-zA-Z1-6]{0,9}$/.test(selector)) {
     		// alert("1");
     		return range.getElementsByTagName(selector)
     		
     	};
     }else if (typeof selector=="function") {
     	// alert("页面加载")
     	  window.onload=selector;
     };
}


 /*
ie6-8不支持getElementsByClassName，处理兼容 传两个参数，
 */
 function getclass(classname,range){
 	if (document.getElementsByClassName){
 		//支持  用getElementsByClassName	
 		return range.getElementsByClassName(classname);
 	}else{//不支持；以数组的形式返回这些
 		 var arr=[];
         var all=range.getElementsByTagName('*');
         for (var i =0;i<all.length; i++) {
              //all[i].className==classname
         	 if (cheakclass(all[i].className,classname)) {
         		arr.push(all[i]);
         	};
         };
         return arr;
 	}	
 }

function cheakclass(aal,classname){//拆分
	var alla=aal.split(' ');
	for (var i =0; i<alla.length; i++) {
		if(alla[i]==classname){
			return true;
		}
	};
	return false;
}


/*
ie6-8不支持getElementsByClassName，处理兼容 传一个参数
 */
// function getclass(classname){
//  	if (document.getElementsByClassName) {
//  		//支持
//  		return document.getElementsByClassName(classname);
//  	}else{
//  		 var arr=[];
//          var all=document.getElementsByTagName('*');
//          for (var i =0;i<all.length; i++) {
//          	 if (all[i].className==classname;) {
//          		arr.push(all[i]);
//          	};
//          };
//          return arr;
//  	}	
//  }



	
