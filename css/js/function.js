
	function getclass(classname,range){
		if(document.getElementsByClassName){//判断浏览器是否支持classname引用		
			return range.getElementsByClassName(classname)//如果支持就返回引用的值
		}//否则执行下面代码
		else{			
		var all=range.getElementsByTagName('*')//首先找出所有的对象
		var arr=[];//创建一个新数组
		for(var i=0;i<all.length;i++){//把所有的对象都遍历出来
			if(checkclass(all[i].className,classname)){//判断如果要找的对象==classname
		    arr.push(all[i]);//就把找出的所有符合classname的值放入到arr这个数组里
			}
		 }
		 return arr;//返回这个数组
	}
}
		function checkclass(tagname,aclass){
			var arr=tagname.split(' ');//把字符串按照空格的形式分割成数组
			for(var i=0;i<arr.length;i++){//遍历这个数组
				if(arr[i]==aclass){//判断如果数组有aclass就返回一个true
					return true;
				}
			}
			return false;
		}
