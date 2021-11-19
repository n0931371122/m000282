/* ==========================================================================
	  variables
==========================================================================*/

var $window = $(window),
    $header = $("header"),
    $windowWidth = $window.outerWidth(),
    $menuVersion,
    $phoneVersion;

    if($windowWidth<1200){
        $menuVersion=true;
    }
    if ($windowWidth < 576) {
        $phoneVersion = true;
    }
$(function () {
    'use strict';


	/* ==========================================================================
		initialize
	==========================================================================*/

    // plugin

    //aos 
    $("document").ready(function () {
        AOS.init({
            duration: 800,
            // easing: 'ease-in-out-quad',
            // default easing for AOS animations
            offset: 100,
            mirror: true
            // whether animation should happen only once - while scrolling down

        });
    });
        $(".datepicker").datepicker({
            monthNames: ["一月", "二月", "三月", "四月", "五月", "六月",

                "七月", "八月", "九月", "十月", "十一月", "十二月"
            ],
            dayNamesShort: ["週日", "週一", "週二", "週三", "週四", "週五", "週六"],
            dayNamesMin: ["日", "一", "二", "三", "四", "五", "六"],
            dateFormat: "yy/mm/dd",
        });
    
    
    //mCustomScrollbar
    if (!/Android/i.test(window.navigator.userAgent)) {
        $(".scrollbarX").each(function () {
            $(this).mCustomScrollbar({
                axis: "x",
                mouseWheel: { enable: false }
            });
        });
        if($(window).outerWidth()>575){
            $('.scrollbarY').mCustomScrollbar({
                axis: "y"
            });
        }


    }
    // imgLiquid
    $('.jqimgFill').imgLiquid();
    $('.jqimgFill, .main').css("opacity", "1");
    
    $("img.lazyload").lazyload({
        effect: "fadeIn"
    });
    //select2
    $('.selectpicker').select2();




    //因架構變化，resize trigger reload
    var wW = $(window).width();
    var trigger_size = [576, 768, 992, 1200];
    $(window).resize(function () {
        trigger_size.forEach(function (ele) {
            if (wW > ele) {
                $(window).width() <= ele ? location.reload() : "";
            } else {
                $(window).width() > ele ? location.reload() : "";
            }
        });
    });




	/* ==========================================================================
		元件
    ==========================================================================*/
    //leafs
    if (!$menuVersion){   
        var $page = $(".wp").attr("data-leaf"),
            $leafGroup = $(".leafGroup"),
            times = 0;
        gsap.to($leafGroup, {
            skewY: 1,
            repeat: -1,
            yoyo: true,
            duration: 2,
            ease: "none"
        })
       requestAnimationFrame(productLeaf);

        function productLeaf() {
            $(".leafGroup").each(function (index) {
                var smallindex = Math.floor(Math.random() * 2) + 1;
                var leaf = "<div class='small-leaf time-" + times + "'>" +
                    "<img src = 'styles/images/leafs/" + $page + "-productLeaf-" + (index + 1) + "-" + smallindex + ".svg' alt = '' >" +
                    "</div>";
                $(this).find(".productLeaf").append(leaf);
                var $leaf = $(this).find(".time-" + times);
                gsap.fromTo($leaf, {
                    x: "random(0, 300)",
                    y: "random(5,50)",
                    autoAlpha: 1,
                }, {
                    y: 300,
                    autoAlpha: 0,
                    duration: "random(5,20)",
                    ease: "none",
                    onComplete: function () {
                        $leaf.remove();
                    }
                });
                gsap.fromTo($leaf.find("img"), {
                    rotationZ: 20,
                    x: -20
                }, {
                    rotationZ: -20,
                    x: 20,
                    repeat: -1,
                    yoyo: true,
                    duration: 2,
                    ease: CustomEase.create("custom", "M0,0,C0.6,0,0.4,1,1,1")
                })
                times++;
            });
            var random = (Math.random() * 4000) + 5000;
            setTimeout(function () {
                window.requestAnimationFrame(productLeaf);
            }, random);
        }
    }
    //clouds
    if (!$phoneVersion) { 
        var $cloud = $(".cloud");
        gsap.to($cloud, {
            x: 50,
            repeat: -1,
            yoyo: true,
            duration: 5,
            ease: "power1.inOut"
        })
    }

	/* ==========================================================================
		pages
	==========================================================================*/
    $("#about").each(function(){
        $(".product-slider").slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: true,
            arrows:false,
            speed: 800,
            responsive: [{
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
            ]

        });
    });
    $("#history").each(function () {
        $(window).scroll(function(){
            $(".lists li").each(function(){
                var $scrollTop = $(window).scrollTop();
                var $position=$(this).position();
                var $thisTop = $position.top;

                if ($scrollTop > $thisTop){
                    $(this).addClass("active");
                }
                else{
                    $(this).removeClass("active");
                }
            });

        });
    });
    $("#diys").each(function () {
        if ($window.outerWidth() < 576) {
            $(".lists li").attr({ "data-aos": "fade-up", "data-aos-delay": "" });
        }
    });
    $("#news").each(function () {
        if ($window.outerWidth() < 576) {
            $(".lists li").attr({ "data-aos": "fade-up", "data-aos-delay": "" });
        }
    });
    $("#qa").each(function () {
        var $monkey = $(".monkey");
        gsap
            .fromTo($monkey, {
                rotateZ: -10,
                skewX: 10
            }, {
                rotateZ: 10,
                skewX: -10,
                repeat: -1,
                yoyo: true,
                duration: 5,
                ease: "power1.inOut"
            }).play(2.5);
            $(".tabs>span").click(function(){
                $(this).next("ul").slideToggle();
            });
    });
    $("#visit,#rule").each(function () {
        var url = location.href;
        var modify;
        if (url.indexOf('?') != -1) {
            var page = url.split('?')[1].split('=')[1];
            if ($("#" + decodeURIComponent(page)).length > 0) {
                var $top = $("#" + page).offset().top;
                if ($(window).outerWidth() > 1199) {
                    modify = 200;
                }
                else if ($(window).outerWidth() > 575){
                    modify = 120;
                }
                else{
                    modify = 100;
                }
                $top -= modify;
               
                 $(window).scrollTop($top);
            }
        }
        $(".sublinks li").click(function () {
            var $target = $(this).data("target");
            var $top = $("#"+$target).offset().top
            if ($(window).outerWidth() > 1199) {
                $('html, body').animate({ scrollTop: $top - 140 }, 500);
            }
            else if ($(window).outerWidth() > 575){
                $('html, body').animate({ scrollTop: $top - 130 }, 500);
            }
            else{
                $('html, body').animate({ scrollTop: $top - 80 }, 500);
            }
            

        });
    });
    $("#register").each(function () {
        $(".radios input[type=radio]").change(function(){
           var $mode=$(this).parent(".radios").data("mode");
            if ($mode =="phone"){
                $(".register-phone").hide();
                $(".register-email").show();
                $(this).parent(".radios").data("mode","email");
            }
            else if ($mode == "email"){
                $(".register-phone").show();
                $(".register-email").hide();
                $(this).parent(".radios").data("mode", "phone");
            }
        });
    });  
    $("#Floor1,#Floor2,#Floor3").each(function () {
        $(".group").hover(function(){
            $(this).children(".box").show();
        },function(){
                $(this).children(".box").hide();
        });

        var $windowH = $(window).height();
        $(".groups .group").each(function () {
            gsap.set($(this).find(".item"), {
                scale: 0
            });
        });
        $(window).scroll(function () {
            $(".groups .group").each(function () {
                var $position = $(this).offset();
                var $positionTop = $position.top;
                if (!$(this).hasClass("active")) {
                    if ($(window).scrollTop() + $windowH > $positionTop) {
                        $(this).addClass("active");
                        gsap.fromTo($(this).find(".item"), {
                            scale: 0

                        }, {
                            scale: 1,
                            delay: 0.5,
                            duration: 1,
                            ease: "elastic.out(0.8, 0.5)"

                        });
                    }
                } else {
                    if ($(window).scrollTop() + $windowH < $positionTop) {
                        $(this).removeClass("active");
                        gsap.set($(this).find(".item"), {
                            scale: 0
                        });

                    }
                }
            });
        });

    }); 
    $("#periphery").each(function(){
        var $windowH = $(window).height();
        $(".people .person").each(function () {
            gsap.set($(this).find("img"), {
                scale: 0
            });
        });
        $(window).scroll(function () {
            $(".people .person").each(function () {
                var $position = $(this).offset();
                var $positionTop = $position.top;
                if (!$(this).hasClass("active")) {
                    if ($(window).scrollTop() + $windowH > $positionTop) {
                        $(this).addClass("active");
                        gsap.fromTo($(this).find("img"), {
                            scale: 0

                        }, {
                            scale: 1,
                            delay: 0.5,
                            duration: 1,
                            ease: "elastic.out(0.8, 0.5)"

                        });
                    }
                } else {
                    if ($(window).scrollTop() + $windowH < $positionTop) {
                        $(this).removeClass("active");
                        gsap.set($(this).find("img"), {
                            scale: 0
                        });

                    }
                }
            });
        });       
    });

    $("#environment").each(function () {
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade:true,
            asNavFor: '.slider-nav',
            prevArrow: "<div class='slick-arrow slick-prev'><i class='icon-left-open'></i></div>",
            nextArrow: "<div class='slick-arrow slick-next'><i class='icon-right-open'></i></div>",
            responsive: [{
                breakpoint: 576,
                settings: {
                    arrows: false,
                    dots: true,
                }
            }]
        });
        $('.slider-nav').slick({
            slidesToShow: 7,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            arrows:false, 
            focusOnSelect: true,
            responsive: [{
                breakpoint: 1400,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
            ]

        });
    }); 

    $("#cart-1").each(function (){
        $(".payType-body .btn-group button").click(function(){
            $(this).addClass("active").siblings().removeClass("active");
        });
    });

    $("#cart-2").each(function () {
        $("#invoice").children("div").children("div").eq(0).slideDown();
        $("#invoice").children("ul").children("li").click(function(){
            if(!$(this).hasClass("active")){
                $(this).addClass("active").siblings().removeClass("active");
                var $index = $(this).index();
                $("#invoice").children("div").children("div").slideUp().eq($index).slideDown();
            };

        });
    });

    $("#course-reservation").each(function(){
        console.log("X");
        var w=$(".select2").attr("style");
        console.log(w);

    });
    layout();
    svg();
    footer();
    accordion();
    numberWrapperEvent();
    cartFly();
});

gsap.registerPlugin(DrawSVGPlugin,MotionPathPlugin);
function footer(){
    var $trees=$("footer .trees");
    var $fishs=$("footer .fishs");
    var $treeLeft1 = $trees.find(".tree-left-1");
    var $treeLeft2 = $trees.find(".tree-left-2");
    var $treeLeft3 = $trees.find(".tree-left-3");
    var $treeLeft4 = $trees.find(".tree-left-4");
    var $treeRight1 = $trees.find(".tree-right-1");
    var $treeRight2 = $trees.find(".tree-right-2");   
    var $treeCenter = $trees.find(".tree-center"); 
    
    var $fish1 = $fishs.find(".fish-1");

    var $fish2 = $fishs.find(".fish-2");
    var $fish2FlyTop = $fish2.find(".fish-fly-top");
    var $fish2FlyBottom = $fish2.find(".fish-fly-bottom");
    var $fish2Tail = $fish2.find(".fish-tail");


    $("footer .slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        fade:true,
        speed: 800,
        autoplay:true,
        prevArrow: "<div class='slick-arrow slick-prev'><img class='svg' src='styles/images/footer/arrow-left.png' alt=''></div>",
        nextArrow: "<div class='slick-arrow slick-next'><img class='svg' src='styles/images/footer/arrow-right.png' alt=''></div>",

    });



    gsap.fromTo($treeLeft1, {
        skewX: 1
    }, {
        skewX: -1,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "power1.inOut"
    })
    gsap.fromTo($treeLeft2, {
        skewX:0.7
    }, {
            skewX: -0.7,
            repeat:-1,
            yoyo:true,
            duration:2,
            ease: "power1.inOut",
            delay:0.2
    })

    gsap.fromTo($treeLeft3, {
        skewX: 0.4
    }, {
        skewX: -0.4,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "power1.inOut",
        delay: 0.4
    })
    gsap.fromTo($treeLeft4, {
        skewX: 0.8
    }, {
        skewX: -0.8,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "power1.inOut",
        delay: 0.6
    })
    gsap.fromTo($treeRight1, {
        skewX: 1
    }, {
        delay:.3,
        skewX: -1,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "power1.inOut"
    })
    gsap.fromTo($treeRight2, {
        skewX: 0.7
    }, {
        delay: .5,
        skewX: -0.7,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "power1.inOut"
    }) 
    gsap.fromTo($treeCenter, {
        skewX: 1
    }, {
        skewX: -1,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "power1.inOut",
        delay: 0.5
    }) 


    const tl = gsap.timeline({});
    const t2 = gsap.timeline({});
    function restart(){
        tl.play(0);
    }
    function restart2() {
        t2.play(0);
    }  
    if ($(window).outerWidth()>576){

   
        tl
            .to($fish1,30, {
                repeat: 1,
                yoyo: true,
                ease: "power1.inOut",
                
                onRepeat:function(){
                    gsap.to($fish1, 1, {
                        rotationY: function () {
                            return this._targets[0]._gsap.rotationY == "0deg" ? 180 : 0;
                        }
                    });
                },
                motionPath: {
                    path: "#fish-1-path",
                    align:"#fish-1-path",
                    
                }
            })

        t2
            .to($fish2, 13, {
                repeat: 1,
                yoyo: true,
                ease: "power1.inOut",

                onRepeat: function () {
                    gsap.to($fish2, 1, {
                        rotationY: function () {
                            return this._targets[0]._gsap.rotationY == "0deg" ? 180 : 0;
                        }
                    });
                },
                motionPath: {
                    path: "#fish-2-path",
                    align: "#fish-2-path",

                }
            })
            .add(restart2)
            .to($fish2FlyTop, 0.5, {
                skewX:40,
            }, 4)
            .to($fish2FlyBottom, 0.5, {
                skewX: -25,
            }, 4)
            .to($fish2Tail, 0.5, {
                skewY: -18,
            }, 4)

            .to($fish2FlyTop, 0.5, {
                skewX: 0,
            }, 6)
            .to($fish2FlyBottom, 0.5, {
                skewX: 0,
            }, 6)
            .to($fish2Tail, 0.5, {
                skewY: 0,
            }, 6)
            
            .to($fish2FlyTop, 0.5, {
                skewX: 40,

            }, 19)
            .to($fish2FlyBottom, 0.5, {
                skewX: -25,
            }, 19)
            .to($fish2Tail, 0.5, {
                skewY: -18,
            }, 19)   
            
            .to($fish2FlyTop, 0.5, {
                skewX: 0,
            }, 21)
            .to($fish2FlyBottom, 0.5, {
                skewX: 0,
            }, 21)
            .to($fish2Tail, 0.5, {
                skewY: 0,
            }, 21);
    }   


}





function layout() {
    //漢堡條
    $(".menu-toggle").click(function () {
        if (!$("header .menu-toggle").hasClass('active')){
            menuOpen();
        }
        else{
            menuClose();
        }
        if($menuVersion){
            $("html").toggleClass("noscroll");
        }
    });


    $("header .fix li").eq(1).children("div").click(function(){
       $(this).toggleClass("show");
    });

    //goTop
    $("#goTop").on("click", function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
    });
    $("#header #fix ul li:nth-child(2) > div").click(function(){
      $(this).toggleClass("show");
    });
    if ($menuVersion){
        menuClose();
        $fix=$("header #fix").detach();
        $("header .scroll_wrapper").append($fix);
    }
    else{
        menuOpen();
    }

    if ($menuVersion){
        $("#fix ul").removeAttr("data-aos");
        $("#earth").click(function(){
            $(this).find("ul").stop().slideToggle();
        });
    }
    else{
        $("#earth").hover(function () {
            $(this).find("ul").stop().slideDown();
        },
        function () {
            $(this).find("ul").stop().slideUp();
        });
    }


}

function svg() {
    jQuery('img.svg').each(function () {
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function (data) {
            // Get the SVG tag, ignore the rest   
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG   
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG   
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org   
            $svg = $svg.removeAttr('xmlns:a');

            // Check if the viewport is set, if the viewport is not set the SVG wont't scale.   
            if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }

            // Replace image with new SVG   
            $img.replaceWith($svg);

        }, 'xml');

    });
}

function uniformHeight($el) {
    if ($el.length !== 0) {
        var $h_array = [];
        $el.each(function (index) {
            $(this).height("auto");
            $h_array[index] = $(this).height();
        });
        $max = Math.max.apply(null, $h_array);
        $el.each(function (index) {
            $(this).height($max);
        });
    }
}


function menuOpen() {
    $("header .menu-toggle").addClass('active');
    $("header .bg_phone").addClass('active');
}
function menuClose() {
    $("header .menu-toggle").removeClass('active');
    $("header .bg_phone").removeClass('active');
}
function accordion() {
    $('.accordion .card').on('show.bs.collapse', function () {

        $(this).find(".icon-down-open").addClass("open");
    })
    $('.accordion .card').on('hide.bs.collapse', function () {
        $(this).find(".icon-down-open").removeClass("open");
    })
}
function numberWrapperEvent() {
    $(".number-wrapper").find(".add-btn").click(function () {
        var $val = parseInt($(this).parents(".number-wrapper").find("input").val());
        $(this).parents(".number-wrapper").find("input[type=number]").val($val + 1);
        $(this).parents(".number-wrapper").find("input[type=number]").blur();
    });
    $(".number-wrapper").find(".minus-btn").click(function () {
        var $val = parseInt($(this).parents(".number-wrapper").find("input").val());
        if ($val > 0) {
            $(this).parents(".number-wrapper").find("input[type=number]").val($val - 1)
        }

    });
}

function cartFly() {
    $(".addcart").click(function (event) {
        if (!$(this).hasClass("selected")) {
            if($(window).outerWidth()>768){   
                var offset = $("#cart").offset();
                var flyer = $('<img class="flyer-img" src="styles/images/common/cart.jpg">'); //抛物体对象   
                
                flyer.fly({
                    start: {
                        left: event.pageX,//抛物体起点横坐标   
                        top: event.pageY - $(window).scrollTop(), //抛物体起点纵坐标   

                    },
                    end: {
                        left: offset.left - 30,//抛物体终点横坐标   
                        top: offset.top - $(window).scrollTop() + 10, //抛物体终点纵坐标   

                    },
                    onEnd: function () {
                        flyer.remove(); //销毁抛物体   
                    },

                });
            
            }
        }
        $(this).toggleClass("selected");
    });

}
$(window).ready(function(){
    $(".dec-section").height($(".wp").height());
});



