/*-------------
smoothScroll.js
ecreative Joe
--------------*/
$(".wp").on('mousewheel', function (event, delta) {
    $('html,body').stop();

    //console.log(event.target);

    if (!$("html").hasClass("macintosh")) {

        var that = this,
            duration = 800,
            easing = 'easeOutCirc',
            step = 80,
            target = $('html, body'),
            scrollHeight = $(document).height(),
            scrollTop = that.last !== undefined ? that.last : $(window).scrollTop(),
            viewportHeight = $(window).height(),
            multiply = (event.deltaMode === 1) ? step : 1;

        scrollTop -= delta * multiply * step;
        scrollTop = Math.min((scrollHeight - viewportHeight), Math.max(0, scrollTop));
        that.last = scrollTop;

        target.stop().animate({
            scrollTop: scrollTop
        }, {
            easing: easing,
            duration: duration,
            complete: function () {
                delete that.last;
            }
        });

        event.preventDefault();
    }
});
