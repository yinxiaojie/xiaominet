window.onload=function () {
    let sort_right2 = document.getElementsByClassName("sort_right2")[0];
    let shopBox = document.getElementsByClassName("shopBox")[0];
    sort_right2.onmouseenter = function () {
        shopBox.style.height = "98px";
        shopBox.style.boxShadow = "0 2px 3px 1px rgba(0,0,0,0.2)";
    };
    sort_right2.onmouseleave = function () {
        shopBox.style.height = "0";
        shopBox.style.boxShadow = "none";
    };

    let btn = document.querySelector(".botton");
    let btnLi = btn.querySelectorAll(".botton li");
    let asideBox = document.querySelectorAll(".asideBox");
    // console.log(btnLi, btn, asideBox);
    for (let i = 0; i < btnLi.length; i++) {
        btnLi[i].onmouseenter = function () {
            asideBox[i].style.display = "block";
        };
        btnLi[i].onmouseleave = function () {
            asideBox[i].style.display = "none";
        }
    }

    // 家电选项卡
    // let house=document.getElementsByClassName("house")[0];
    // let topRight=house.getElementsByClassName("top-right")[0];
    // let lists=topRight.getElementsByTagName("li");
    // let jiadianBox=document.getElementsByClassName("jiadianBox");
    // // console.log(jiadianBox, lists,);
    // for(let i=0;i<lists.length;i++){
    //     lists[i].onmouseenter=function () {
    //         for(let j=0;j<lists.length;j++){
    //             jiadianBox[j].style.zIndex="5";
    //         }
    //         jiadianBox[i].style.zIndex="10";
    //
    //     };
    // };
    //家电选项卡
    let topRight = document.querySelectorAll(".top-right");
    let lists = document.querySelectorAll(".top-right li");
    let content = document.querySelectorAll(".content");
    // let contentBox=document.querySelectorAll(".content-box");
    // console.log(content);
    for (let i = 0; i < lists.length; i++) {
        lists[i].onmouseenter = function () {
            for (let j = 0; j < lists.length; j++) {
                content[j].style.zIndex = "5";
            }
            content[i].style.zIndex = "10";
        }
    }


    ///////////轮播图////////////////////
    let banner = document.getElementsByClassName("banner")[0];
    let picture = document.getElementsByClassName("picture");
    let circle = document.getElementsByClassName("circle")[0];
    let circleLi = circle.getElementsByTagName("li");
    let sildes1 = document.getElementsByClassName("sildes-l")[0];
    let sildes2 = document.getElementsByClassName("sildes-r")[0];
    // console.log(circleLi, picture, sildes1, sildes2);
    let t = setInterval(move, 1500);
    let num = 0;
    function move() {
        for (let i = 0; i < picture.length; i++) {
            picture[num].style.zIndex = "5";
            circleLi[i].style.background = "";
        }
        num++;
        if (num > picture.length - 1) {
            num = 0;
        }
        picture[num].style.zIndex = "10";
        circleLi[num].style.background = "#ff6700";
    }

    //鼠标移入 移出
    banner.onmouseenter = function () {
        clearInterval(t);
    };
    banner.onmouseleave = function () {
        t = setInterval(move, 1000);
    };


    function move1() {
        for (let i = 0; i < picture.length; i++) {
            picture[num].style.zIndex = "5";
            circleLi[i].style.background = "";
        }
        num--;
        if (num < 0) {
            num = picture.length - 1;
        }
        picture[num].style.zIndex = "10";
        circleLi[num].style.background = "#ff6700";
    }

    sildes2.onclick = function () {

        move();
    };
    sildes1.onclick = function () {
        move1();
    };


    //点击小圆点
    for (let i = 0; i < circleLi.length; i++) {
        circleLi[i].onclick = function () {
            for (let j = 0; j < circleLi.length; j++) {
                picture[j].style.zIndex = "5";
                circleLi[j].className = "";
                circleLi[num].style.background = "";
            }
            picture[i].style.zIndex = "10";
            circleLi[i].className = "hot1";
            num = i;
            circleLi[num].style.background = "#ff6700";
        }
    }

    //内容轮播图
    let game=document.querySelector(".game");
    let current1=next1=0;
    Content(game,current1,next1);
    let game1=document.querySelector(".game1");
    let current2=next2=0;
    Content(game1,current2,next2);
    let game2=document.querySelector(".game2");
    let current3=next3=0;
    Content(game2,current3,next3);
    let game3=document.querySelector(".game3");
    let current4=next4=0;
    Content(game3,current4,next4);
    function Content(readBoxs,current,next){
        let read=readBoxs.querySelectorAll(".read");
        let read1=readBoxs.querySelector(".read");
        let width=parseInt(getComputedStyle(read1,null).width);
        let wayPoint=readBoxs.querySelector("ul");
        let wayPoint1=wayPoint.querySelectorAll("li");
        let moveLeft=readBoxs.querySelector(".move_left");
        let moveRight=readBoxs.querySelector(".move_right");
        current=next=0;
        let flag=true;
        moveRight.onclick=function(){
            if (!flag){
                return;
            }
            if(next==read.length-1){
                next==read.length-1;
                return;
            }
            flag=false;
            move1();
        };
        moveLeft.onclick=function(){
            if(!flag){
                return;
            }
            if (next==0){
                return;
            }
            flag=false;
            move1L();
        };
        function move1(){
            next++;
            if (next==read.length){
                next=0;
            }
            read[next].style.left=width+"px";
            animate(read[current],{left: -width});
            animate(read[next],{left: 0},function(){
                flag=true;
            });
            wayPoint1[current].classList.remove("onclick");
            wayPoint1[next].classList.add("onclick");
            current=next;
        }
        function move1L(){
            next--;
            if (next<0){
                next=read.length-1;
            }
            read[next].style.left=-width+"px";
            animate(read[current],{left: width});
            animate(read[next],{left: 0},function(){
                flag=true;
            });
            wayPoint1[current].classList.remove("onclick");
            wayPoint1[next].classList.add("onclick");
            current=next;
        }
        wayPoint1.forEach(function(v,i){
            v.onclick=function(){
                wayPoint1.forEach(function(v,i){
                    wayPoint1[current].classList.remove("onclick");
                });
                if (i==current){
                    return;
                } else if (i>current){
                    read[i].style.left=width+"px";
                    animate(read[current],{left: -width});
                    animate(read[i],{left: 0},function(){
                        flag=true;
                    });
                } else{
                    read[i].style.left=-width+"px";
                    animate(read[current],{left: width});
                    animate(read[i],{left: 0},function(){
                        flag=true;
                    });
                }
                wayPoint1[i].classList.add("onclick");
                next=current=i;
            };
        });
    }




    //上导航选项卡
    let nav=document.querySelector(".nav");
    let lis=document.querySelectorAll(".nav li");
    let downBox=document.querySelectorAll(".down-box");
    for(let i=0;i<lis.length;i++){
        lis[i].onmouseenter=function () {
            downBox[i].style.height="230px";
        };
        lis[i].onmouseleave=function () {
            downBox[i].style.height="0";

        }
    }




    //为你推荐选项卡
    let product=document.querySelector(".product");
    let recommend=document.querySelector(".recommend");
    let arrow1=document.querySelector(".recommend .arrows1");
    let arrow2=document.querySelector(".recommend .arrows2");
    let widths=parseInt(getComputedStyle(product,null).width)/3;
    let times=0;
    arrow1.onclick=function () {
        times--;
        if(times==-1){
            times=0;
        }
        product.style.transform="translateX("+(-widths*times)+"px)";
    };
    arrow2.onclick=function () {
        times++;
        if(times==3){
            times=2;
        }
        product.style.transform="translateX("+(-widths*times)+"px)";
    }

    //闪购选项卡
    let flash=document.querySelector(".flash");
    let rice=document.querySelector(".rice");
    let arrows1=document.querySelector(".rice .arrows1");
    let arrows2=document.querySelector(".rice .arrows2");
    let widths1=parseInt(getComputedStyle(flash,null).width)/2;
    let twice=0;
    arrows1.onclick=function () {
        twice--;
        console.log(twice);
        if(twice==1){
            twice=0;
        }
        flash.style.transform="translateX("+(-widths1*twice)+"px)";
    };
    arrows2.onclick=function () {
        twice++;
        if(twice==2){
            twice=1;
        }
        flash.style.transform="translateX("+(-widths1*twice)+"px)";
    }

    //固定定位选项卡
    let fixation=document.querySelector(".fixation");
    let last=document.querySelector(".fixation .icon-shangchuan");
    window.onscroll=function () {
        let bh=document.body.scrollTop||document.documentElement.scrollTop;
        console.log(bh);
        last.onclick=function () {
            animate(document.body,{scrollTop:0});
            animate(document.documentElement,{scrollTop:0});
        }
    }


};