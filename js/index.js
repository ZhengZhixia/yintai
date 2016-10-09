$(function(){

  //顶部下拉列表
  var nb=$(".nb")[1];
  var ll=$(".ll",nb)[0];
  var ag=$(".ag",nb)[0];
  hover(nb,function(){
                 nb.style.backgroundColor="#fff"; 
                 ag.style.display="block";  
            },function(){
                 nb.style.backgroundColor="";
                 ag.style.display="none";
                
            })

var topmiddleleft=$(".top-middle-left")[0];
var abs=$(".ab",topmiddleleft);
var xls=$(".xl");
for (var i = 0; i < xls.length; i++) {
  xls[i].index=i;
  hover(xls[i],function(){
    abs[this.index].style.display="block";
  },function(){
    abs[this.index].style.display="none";
  })
};
//楼层跳转
       var floors=$(".floor");
        
        var arrb=[];
        var floorbar=$(".floor-bar")[0];

        var floorbars=$("span",floorbar);
        var as=$("a",floorbar);
        for (var i = 0; i < floors.length; i++) {
          arrb.push(floors[i].offsetTop);
        };
        // var indexa;
        window.onscroll=function(){
          var top=document.documentElement.scrollTop||document.body.scrollTop;
          for (var i = 0; i <arrb.length;i++) {
            if (arrb[i]<top+300) {
              for (var j = 0; j< floorbars.length; j++) {
                // floorbars[j].style.backgroundColor="";
                as[j].style.display="none";
              };
                    // floorbars[i].style.backgroundColor="red";
                as[i].style.display="block";
                // indexa=i;    
            };
            
          };
        }
      
      for (var i = 0; i < floorbars.length; i++) {
        floorbars[i].index=i;
        floorbars[i].onclick=function(){
         // document.documentElement.scrollTop=arrb[this.index];
         // document.body.scrollTop=arrb[this.index];
         animate(document.documentElement,{scrollTop:arrb[this.index]});
         animate(document.body,{scrollTop:arrb[this.index]});
        }
      };

      for (var i = 0; i < floorbars.length; i++) {
        floorbars[i].index=i
        floorbars[i].onmouseover=function(){
          as[this.index].style.display="block";
        } ;
        floorbars[i].onmouseout=function(){
          // if (this.index=indexa) {return} ;
          as[this.index].style.display="none";
        }   
      };
      
    
//banner部分轮播
     // alert("1");
    var box=$(".abox")[0];
    var imagebox=$(".image",box)[0];
    var imgs=$("img",imagebox);
    var lis=$(".linka",box);
    lis[0].style.backgroundColor='red'; 
    imgs[0].style.left="0px";
    // console.dir(image);
    var wid=parseInt(getStyle(imgs[0],"width"));//带像素不能做加减乘除；转化为整型；imgs[0]这个元素在css中要设置宽度否则不能获取宽度；
    
      
    var index=0; 
    var next=0;

    var t=setInterval(wheel,2000);

    function wheel(){
         next++;
        if (next==imgs.length) {next=0};
        imgs[next].style.left=wid+"px";            
        animate(imgs[index],{left:-1190},500);
        animate(imgs[next],{left:0},500);       
        
        for (var i = 0; i < imgs.length; i++) {
            lis[i].style.backgroundColor='';
        };
        lis[next].style.backgroundColor='red';
        index=next;
    }
    
     box.onmouseover=function(){
         clearInterval(t);
     }

     box.onmouseout=function(){
        t=setInterval(wheel,2000)
     }


     for (var i = 0; i < lis.length; i++) {
         lis[i].index=i;
         lis[i].onclick=function(){

            if (index==this.index) {return};

            for (var j = 0; j <lis.length;j++) {
            lis[j].style.backgroundColor='';
            };
            lis[this.index].style.backgroundColor="red";


           imgs[this.index].style.left=wid+"px";
           animate(imgs[this.index],{left:0},500);
           animate(imgs[index],{left:-1190},500);
     
          
           next=this.index;
           index=next;
         }
     };
    //右按钮
     var rbtn=$(".right",box)[0];
     rbtn.onclick=function(){
      wheel();
    }
     
    //左按钮
     var lbtn=$(".left",box)[0];
    lbtn.onclick=function(){
        next--;
        if (next==-1) {next=lis.length-1};
        imgs[next].style.left=-wid+"px";            
        animate(imgs[index],{left:1190},500);
        animate(imgs[next],{left:0},500);       
        
         for (var i = 0; i < imgs.length; i++) {
            lis[i].style.backgroundColor='';
         };
         lis[next].style.backgroundColor='red';
         index=next;
     }

     var bannermidddle=$(".banner-middle",box)[0];
     // bannermidddle.style.backgroundColor="yellow"

     bannermidddle.onmouseover=function(){
      // alert(1)
      lbtn.style.display="block";
      rbtn.style.display="block";
     }
     bannermidddle.onmouseout=function(){
      // alert(1)
      lbtn.style.display="none";
      rbtn.style.display="none";
     }

 //banner右拉选项卡部分开始  

    var bannerleft=$(".el",box);
    // var bannerlefts=$("a",bannerleft);//选项集合;
    var bannerleftas=$(".banner-lefta");//右拉列表集合
    for (var i = 0; i < bannerleft.length; i++) {
      bannerleft[i].index=i;
      bannerleft[i].onmouseover=function(){
        for (var j = 0; j< bannerleftas.length;j++) {
          bannerleftas[j].style.display="none";
        };
        bannerleftas[this.index].style.display="block";
      }
      bannerleft[i].onmouseout=function(){
        for (var j = 0; j< bannerleftas.length;j++) {
          bannerleftas[j].style.display="none";
        };

      }

    };
  // //banner右拉选项卡部分结束

//content1选项卡部分开始 
  var content1=getclass("content1—left",document)[0];
  var links= content1.getElementsByTagName("a");
  var lists= getclass("list",content1);
  
  for (var i =0; i<links.length; i++) {
       
       links[i].index=i;
       links[i].onmouseover=function(){
            for (var j = 0; j< lists.length; j++){
              lists[j].style.display="none";
            };
            lists[this.index].style.display="block";

       }
  };

          //线框
         var content1box=$(".content1-box")
         for (var i = 0; i < content1box.length; i++) {
             xiankuang(content1box[i]);
         };
         
         function xiankuang(content1box){

         var list=$(".list",content1box);
          for (var i = 0; i < list.length-1; i++) {
            xcv(list[i]);
          };

         function xcv(list){
          var oness=$(".one",list);
         for (var i = 0; i < oness.length; i++) {
          
          oness[i].onmouseover=function(){
          animate($('.bt',this)[0],{width:220},2000);
          animate($('.bl',this)[0],{height:260},2000)
          animate($('.br',this)[0],{height:260},2000)
          animate($('.bb',this)[0],{width:220},2000)
          }

          oness[i].onmouseout=function(){
          animate($('.bt',this)[0],{width:0},2000)
          animate($('.bl',this)[0],{height:0},2000)
          animate($('.br',this)[0],{height:0},2000)
          animate($('.bb',this)[0],{width:0},2000)
            }   
         };
         }
         

         }
         
//content1选项卡部分结束


//content4选项卡部分开始 
  var content4right=getclass("content4-right",document)[0];
  var linkb=getclass("content4-right1",content4right);
  var lista=getclass("content4-right2",content4right);
  
  for (var i =0; i<linkb.length; i++) {
       
       linkb[i].index=i;
      
       linkb[i].onmouseover=function(){
            for (var j = 0; j< lista.length; j++){
              lista[j].style.display="none";
            };

            lista[this.index].style.display="block";

       }
  };
//content4选项卡部分结束
//content6轮播部分开始
var content6box=$(".content-6-box");
for (var i = 0; i < content6box.length; i++) {
  con(content6box[i]);
};

function con(content6box){
var content6mid=$(".content-6-mid",content6box)[0];
var content6midimgbox=$(".content-6-mid-imgbox",content6mid)[0];//图片的盒子;
var list6=$(".content-6-mid-list",content6mid)[0];//左右按钮的盒子；
var listb=$("div",list6);//左右箭头
var btn6=$(".content-6-mid-btn",content6box)[0];//底部按钮的盒子；
var list6left=$("div",list6)[0];//左箭头
var list6right=$("div",list6)[1];//右箭头

   list6left.style.left="-30px";
   list6right.style.right="-30px";

  content6mid.onmouseover=function(){
     animate(list6left,{left:0},500);
     animate(list6right,{right:0},500);
  };
  content6mid.onmouseout=function(){
     animate(list6left,{left:-30},500);
     animate(list6right,{right:-30},500);
  };

var btnb=$("li",btn6);//底部两个按钮
 btnb[0].style.backgroundColor='red';
for (var i = 0; i < btnb.length; i++) {
   btnb[i].index=i;
   btnb[i].onclick=function(){
       for (var j = 0; j< btnb.length; j++) {
        btnb[j].style.backgroundColor="#6e6e6e";
       };
       btnb[this.index].style.backgroundColor="red";
      // var image6=$("div",content6midimgbox)[0];//第一张图片；
      // var widthh=image6.offsetWidth;
      // alert(widthh);

      animate(content6midimgbox,{left:this.index*-389},500);
      
   }
 }; 
   list6left.onclick=function(){
    for (var j = 0; j< btnb.length; j++) {
        btnb[j].style.backgroundColor="#6e6e6e";
       };
     btnb[0].style.backgroundColor="red";
     animate(content6midimgbox,{left:0},500);
   }
   list6right.onclick=function(){
    for (var j = 0; j< btnb.length; j++) {
        btnb[j].style.backgroundColor="#6e6e6e";
       };
     btnb[1].style.backgroundColor="red";
     animate(content6midimgbox,{left:-389},500);
   }

 }  
//content6轮播部分结束

//content6线框部分开始

var content6right=$(".content-6-right");
for (var i = 0; i < content6right.length; i++) {
  cpr(content6right[i]);
};
    function cpr(content6right){
        var oness=$(".one",content6right);
         for (var i = 0; i < oness.length; i++) {
          
          oness[i].onmouseover=function(){
          animate($('.bt',this)[0],{width:270},2000);
          animate($('.bl',this)[0],{height:180},2000)
          animate($('.br',this)[0],{height:180},2000)
          animate($('.bb',this)[0],{width:270},2000)
          }

          oness[i].onmouseout=function(){
          animate($('.bt',this)[0],{width:0},2000)
          animate($('.bl',this)[0],{height:0},2000)
          animate($('.br',this)[0],{height:0},2000)
          animate($('.bb',this)[0],{width:0},2000)
            }
          }
      }
//content6线框部分结束
//content6左轮播部分开始
var content6leftbbox=$(".content-6-leftb-box");
for (var i = 0; i < content6leftbbox.length; i++) {
  cpp(content6leftbbox[i]);
};
function cpp(content6leftbbox){
  var imgboxmid=$(".img-boxmid",content6leftbbox);
 imgboxmid[0].style.left="0";
  var index=0;
  var next=0;
  var btnleft=$(".btn-left",content6leftbbox)[0];
  var btnright=$(".btn-right",content6leftbbox)[0];
  btnright.onclick=function (){
     next++;
     if (next==imgboxmid.length) {next=0};
      imgboxmid[next].style.left="160px";
     animate(imgboxmid[index],{left:-160},500);
     animate(imgboxmid[next],{left:0},500);

     index=next;
  }
  btnleft.onclick=function (){
     next--;
     if (next<0) {next=imgboxmid.length-1};
     imgboxmid[next].style.left="-160px";
     animate(imgboxmid[index],{left:160},500);
     animate(imgboxmid[next],{left:0},500);
     index=next;
  }

}




//content6左轮播部分结束
})