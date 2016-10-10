function $(selector,range){
	var range=range||document;
	if(typeof selector=='string'){
		if(selector.charAt(0)=='#'){
			return document.getElementById(selector.substr(1))
		}
		if(selector.charAt(0)=="."){
			return getclass(selector.substr(1),range)
		}
		if(/^[a-zA-Z][a-zA-Z1-6]{0,9}$/.test(selector)){
			return range.getElementsByTagName(selector)	
		}
	}
	else if(typeof selector=='function'){
		 window.onload=selector;
		}
	}