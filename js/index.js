window.onload = function () {
    var box = getclass("wheel-box", document)[0]//获取
    var as = box.getElementsByTagName('a')
    var lis = getclass("index", document)[0]
    var but = lis.getElementsByTagName('li')
    var btn = getclass('btn', document)[0]
    var left = getclass('leftbtn', btn)[0]
    var right = getclass('rightbtn', btn)[0]
    but[0].style.background = '#e5004f'
    var index = 0;
    as[0].style.zIndex = 10;
    var t = setInterval(move, 2000)

    function move() {
        index++;
        if (index == as.length) {
            index = 0;
        }
        for (var i = 0; i < as.length; i++) {
            as[i].style.zIndex = 0;
            but[i].style.background = ''
        }
        ;
        as[index].style.zIndex = 10;
        but[index].style.background = '#e5004f'
    }

    box.onmouseover = function () {
        animate(left, {left: 210, display: 'block'}, 200)
        animate(right, {right: 200, display: 'block'}, 200)
        clearInterval(t);
    }
    box.onmouseout = function () {
        animate(left, {display: 'none'}, 200)
        animate(right, {display: 'none'}, 200)
        t = setInterval(move, 2000)
    }
    for (var i = 0; i < but.length; i++) {
        but[i].index = i
        but[i].onmouseover = function () {
            for (var j = 0; j < but.length; j++) {
                as[j].style.zIndex = 0;
                but[j].style.background = ""
            }
            as[this.index].style.zIndex = 10;
            but[this.index].style.background = '#e5004f'
        }
    }
    right.onclick = function () {
        move()
    }
    left.onclick = function () {
        index--;
        if (index < 0) {
            index = as.length - 1
        }
        for (var i = 0; i < as.length; i++) {
            as[i].style.zIndex = 0;
            but[i].style.background = ''
        }
        ;
        as[index].style.zIndex = 10;
        but[index].style.background = '#e5004f'
    }
    var link = getclass('bcontent-ltop', document)[0];
    var links = link.getElementsByClassName('b-title')
    var sanjiao = link.getElementsByTagName('span');
    sanjiao[0].style.display = 'block';
    links[0].style.borderBottom = "5px solid #e5004f"
    var lists = getclass('bcontent-lbottom', document)
    for (var i = 0; i < links.length; i++) {
        links[i].index = i;
        sanjiao[i].index = i;
        links[i].onmouseover = function () {
            for (var j = 0; j < lists.length; j++) {
                lists[j].style.display = 'none';
                links[j].style.borderBottom = "5px solid black"
                sanjiao[j].style.display = 'none';
            }
            lists[this.index].style.display = 'block';
            this.style.borderBottom = "5px solid #e5004f";
            sanjiao[this.index].style.display = 'block';
        }
    }


    var remenbox = document.getElementsByClassName('f1title-box')[0]
    var gang = remenbox.getElementsByClassName('f1-1')
    gang[0].style.borderBottom = '3px solid #e70050';
    var remen = remenbox.getElementsByTagName('a')
    var san = remenbox.getElementsByClassName('title-point')
    var imgs = getclass('f1right-imgbox', document)
    san[0].style.display = 'block';
    for (var i = 0; i < remen.length; i++) {
        remen[i].index = i;
        san[i].index = i;
        gang[i].index = i;
        remen[i].onmouseover = function () {
            for (var j = 0; j < imgs.length; j++) {
                imgs[j].style.display = 'none';
                san[j].style.display = 'none';
                gang[j].style.borderBottom = '3px solid black'
            }
            imgs[this.index].style.display = 'block';
            san[this.index].style.display = 'block'
            gang[this.index].style.borderBottom = '3px solid #e70050';
        }
    }
    var wind = $(".qun-container");
    for (var i = 0; i < wind.length; i++) {
        nice(wind[i]);
    }
    function nice(wind) {
        var imgBox = $(".qun-box", wind)[0];
        var img = $("img", imgBox);
        var imgw = parseInt(getComputedStyle(wind, null).width);
        imgBox.style.width = imgw * img.length + "px";
        var Index = 0;
        var Lis = $(".btn1", $(".btn-box1", wind)[0]);
        Lis[0].style.background = "#DF0C51"
        // var s=setInterval(Move,2000);
        function Move() {
            Index++;
            if (Index == img.length) {
                Index = 0
            }
            animate(imgBox, {left: -Index * imgw});
            for (var i = 0; i < img.length; i++) {
                Lis[i].style.background = "";
            }
            ;
            Lis[Index].style.background = "#DF0C51";
        };
        // wind.onmouseover=function(){
        //     clearInterval(s)
        // }
        // wind.onmouseout=function(){
        //     s=setInterval(Move,3000)
        // }
        for (var i = 0; i < Lis.length; i++) {
            Lis[i].Index = i;
            Lis[i].onclick = function () {
                for (var i = 0; i < img.length; i++) {
                    Lis[i].style.background = "";
                }
                ;
                this.style.background = "#DF0C51";
                animate(imgBox, {left: -this.Index * imgw});
                Index = this.Index;
            }
        }
        var Btn = $(".Btn", wind)[0];
        var Left = $(".pre1", Btn)[0];
        var Right = $(".next1", Btn)[0];
        Left.onclick = function () {
            Index--;
            if (Index < 0) {
                Index = 0
            }
            ;
            animate(imgBox, {left: -Index * imgw});
            for (var i = 0; i < img.length; i++) {
                Lis[i].style.background = "";
            }
            ;
            Lis[Index].style.background = "#DF0C51";
        }
        Right.onclick = function () {
            Move();
        }
        //主体部分轮播按钮
        wind.onmouseover = function () {
            animate(Left, {left: 0, opacity: 0.7}, 200)
            animate(Right, {right: 0, opacity: 0.7}, 200)
        }
        wind.onmouseout = function () {
            animate(Left, {left: -30, opacity: 0}, 200)
            animate(Right, {right: -30, opacity: 0}, 200)
        }
    }


//边框
    var Box = $('.floor2-rightbox');
    bors(Box[0])
    bors(Box[1])
    bors(Box[2])
    bors(Box[3])
    bors(Box[4])
    bors(Box[5])
    bors(Box[6])
    bors(Box[7])
    bors(Box[8])
    function bors(Box) {
        var ones = $('.one', Box);
        var bor = $('.bor', ones[0]);
        for (var i = 0; i < ones.length; i++) {
            ones[i].onmouseover = function () {
                animate($('.bt', this)[0], {width: 270}, 500)
                animate($('.br', this)[0], {height: 180}, 500)
                animate($('.bl', this)[0], {height: 180}, 500)
                animate($('.bb', this)[0], {width: 270}, 500)
            }
            ones[i].onmouseout = function () {
                animate($('.bt', this)[0], {width: 0}, 500)
                animate($('.br', this)[0], {height: 0}, 500)
                animate($('.bl', this)[0], {height: 0}, 500)
                animate($('.bb', this)[0], {width: 0}, 500)
            }
        }
    }

    //banner下面边框
    var Box1 = $('.bcontent-lbottom');
    bors1(Box1[0])
    bors1(Box1[1])
    bors1(Box1[2])
    bors1(Box1[3])
    function bors1(Box1) {
        var ones = $('.b-imgbox', Box1);
        var bor = $('.bor1', ones[0]);
        for (var i = 0; i < ones.length; i++) {
            ones[i].onmouseover = function () {
                animate($('.t', this)[0], {width: 220}, 500)
                animate($('.r', this)[0], {height: 260}, 500)
                animate($('.l', this)[0], {height: 260}, 500)
                animate($('.b', this)[0], {width: 220}, 500)
            }
            ones[i].onmouseout = function () {
                animate($('.t', this)[0], {width: 0}, 500)
                animate($('.r', this)[0], {height: 0}, 500)
                animate($('.l', this)[0], {height: 0}, 500)
                animate($('.b', this)[0], {width: 0}, 500)
            }
        }
    }

    //本周推荐边框
    var Box2 = $('.f1-2')[0];
    var ones1 = $('a', Box2);
    var bor2 = $('.bor2', ones1[0]);
    for (var i = 0; i < ones1.length; i++) {
        ones1[i].onmouseover = function () {
            animate($('.t1', this)[0], {width: 200}, 500)
            animate($('.r1', this)[0], {height: 250}, 500)
            animate($('.l1', this)[0], {height: 250}, 500)
            animate($('.b1', this)[0], {width: 200}, 500)
        }
        ones1[i].onmouseout = function () {
            animate($('.t1', this)[0], {width: 0}, 500)
            animate($('.r1', this)[0], {height: 0}, 500)
            animate($('.l1', this)[0], {height: 0}, 500)
            animate($('.b1', this)[0], {width: 0}, 500)
        }
    }

    //无缝轮播
    var Boxs = $('.f2left-bottom');
    wf(Boxs[0])
    wf(Boxs[1])
    wf(Boxs[2])
    wf(Boxs[3])
    wf(Boxs[4])
    wf(Boxs[5])
    wf(Boxs[6])
    wf(Boxs[7])
    wf(Boxs[8])
    wf(Boxs[9])

    function wf(Boxs) {
        var all = $('.f2lbottom-imgbox', Boxs)[0];
        var As = $('img', all);
        var k = all.offsetWidth;
        var list = $(".index", Boxs)[0]
        var But = $('li', list)
        var btn1 = $('.btn', Boxs)[0]
        var left1 = $('.pre2', Boxs)[0]
        var right1 = $('.next2', Boxs)[0]
        As[0].style.left = 0;
        var index = 0;
        var next = 0;
        // t=setInterval(move,2000);
        function move() {
            next++;
            if (next == As.length) {
                next = 0;
            }
            As[next].style.left = k + 'px';
            animate(As[index], {left: -k})
            animate(As[next], {left: 0})
            index = next;
            for (var i = 0; i < As.length; i++) {
                But[i].className = ''
            }
            ;
            But[index].className = 'yuan'
        }

        // Boxs.onmouseover=function(){
        // 	clearInterval(t);
        // }
        // Boxs.onmouseout=function(){
        // 	t=setInterval(move,2000)
        // }
        for (var i = 0; i < But.length; i++) {
            But[i].index = i
            But[i].onclick = function () {
                next = this.index;
                if (index == next) {
                    return;
                }
                As[next].style.left = k + 'px';
                animate(As[index], {left: -k})
                animate(As[next], {left: 0})
                index = next;
                for (var i = 0; i < As.length; i++) {
                    But[i].className = ''
                }
                ;
                But[index].className = 'yuan'
            }
        }

        right1.onclick = function () {
            move()
        }
        left1.onclick = function () {
            next--;
            if (next < 0) {
                next = As.length - 1
            }
            As[next].style.left = k + 'px';
            animate(As[index], {left: -k})
            animate(As[next], {left: 0})
            index = next;
            for (var i = 0; i < As.length; i++) {
                But[i].className = ''
            }
            ;
            But[index].className = 'yuan'
        }
    }

    //楼层跳转
    var floor = document.getElementsByClassName('floor2-container');
    var btn1 = document.getElementsByClassName('guding1')[0];
    var span = btn1.getElementsByTagName('a');
    var top = [];
    for (var i = 0; i < floor.length; i++) {
        top.push(floor[i].offsetTop)
    }
    window.onscroll = function () {
        var h = document.documentElement.scrollTop || document.body.scrollTop;
        for (var i = 0; i < top.length; i++) {
            if (top[i] < h + 418) {
                for (var j = 0; j < span.length; j++) {
                    span[j].style.background = ''
                    span[j].style.fontSize = '0'
                }
                span[i].style.background = '#e5004f'
                span[i].style.fontSize = '14px';

            }
        }

        for (var i = 0; i < span.length; i++) {
            span[i].index = i;
            span[i].onclick = function () {
                animate(document.documentElement, {scrollTop: top[this.index] - 80}, 300)
                this.style.fontSize = '14px';
                this.style.background = '#e5004f';
                animate(document.body, {scrollTop: top[this.index] - 80}, 300)
                this.style.fontSize = '14px';
                this.style.background = '#e5004f';
            }
        }
        //返回顶部
        var back = $('.gu10')[0]
        back.onclick = function () {
            animate(document.documentElement, {scrollTop: 0}, 300)
            animate(document.body, {scrollTop: 0}, 300)
        }
        //隐藏楼层
        if (h > 600) {
            btn1.style.display = "block"
        }
        if (h < 600) {
            btn1.style.display = "none"
        }
    }
//鼠标移入透明度变化
    var imgbox = $('.f1right-imgbox')
    var imgs1 = $('img', imgbox[0])
    for (var i = 0; i < imgs1.length; i++) {
        imgs1[i].onmouseover = function () {
            animate(this, {opacity: 0.7}, 100)
        }
        imgs1[i].onmouseout = function () {
            animate(this, {opacity: 1}, 100)
        }
    }
//banner右边图片左移动
    var bright = $('.banner-right')[0]
    bright.onmouseover = function () {
        animate(bright, {right: 5}, 100)
    }
    bright.onmouseout = function () {
        animate(bright, {right: 0}, 100)
    }
//下拉菜单
    var one = $('.xl')
    var app = $('.appx')
    for (var i = 0; i < one.length; i++) {
        one[i].index = i;
        hover(one[i], function () {
            app[this.index].style.display = 'block'
            this.style.background = '#fff'
        }, function () {
            app[this.index].style.display = 'none'
            this.style.background = '';
        })
    }
    var sousuo = $('.sousuo1')[0]
    sousuo.value = "瞧一瞧看一看，走过路过不要错过"
    sousuo.onclick = function () {
        sousuo.focus();
        sousuo.value = "";
    }
    sousuo.onblur = function () {
        sousuo.value = "瞧一瞧看一看，走过路过不要错过"
    }
}

