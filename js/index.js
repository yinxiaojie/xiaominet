$(function () {
    $(".sort_right2").mouseenter(function () {
        $(".shopBox").css({"height":"98px","box-shadow":"0 2px 10px 2px rgba(0,0,0,0.3)"});
    });
    $(".sort_right2").mouseleave(function () {
        $(".shopBox").css({"height":"0","box-shadow":"none"});
    });

    //轮播图
    let lg=$(".picture").length;
    let t=setInterval(run,1000);
    let num=0;
    function run(type="next") {
        if(type=="next"){
            num++;
            if(num>=lg){
                num=0;
            }
        }else{
            num--;
            if(num<0){
                num=lg-1;
            }
        }
        $(".picture").css("z-index","5").eq(num).css("z-index","10");
        $(".banner .circle li").removeClass("hot1").eq(num).addClass("hot1");
    }
    //移入移出
    $(".banner").mouseenter(function () {
        clearInterval(t);
    });
    $(".banner").mouseleave(function () {
        t=setInterval(run,1000);
    });
    //左右箭头
    $(".sildes-l").click(function () {
        run("sildes-l");
    });

    $(".sildes-r").click(function () {
        run("sildes-r");
    });
    //小圆点点击
    $(".banner .circle li").click(function () {
        let index=$(this).index();
        $(".picture").css("z-index","5").eq(index).css("z-index","10");
        $(".banner .circle li").removeClass("hot1").eq(index).addClass("hot1");
    });

    //侧导航选项卡

    $(".botton li").mouseenter(function () {
        let index=$(this).index();
        $(".asideBox").css("display","none").eq(index).css("display","block");
    })
    $(".botton li").mouseleave(function () {
        $(".asideBox").css("display","none")
    });
    //搜索框
    $("input").click(function () {
        $(".pull").css("display","block");
        $(".search").css({"border":"1px solid #ff6700"});
        $(".search-right").css({"border-left":"1px solid #ff6700"});
    });
    $(".nav").click(function () {
        $(".pull").css("display","none");
        $(".search").css({"border":"1px solid #b0b0ac"});
        $(".search-right").css({"border-left":"1px solid #b0b0ac"});
    })

    //上导航
    $(".nav ul li").mouseenter(function () {
        let index=$(this).index();
        $(".down-box").css("height","0").eq(index).css("height","230px");
    })
    $(".nav ul li").mouseleave(function () {
        $(".down-box").css("height","0");
    })

});