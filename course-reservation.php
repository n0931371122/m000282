<!doctype html>
<html lang="zh">

<head>
    <?php include "header-title.php"; ?>
</head>

<body>
    <div class="wp reservation" id="course-reservation" data-leaf="about">
        <?php include "header.php"; ?>
        <!-- main ======================================================================================= -->
        <main class="main">
            <div class="inner">
                <div class="dec-section">
                    <div class="leafs">
                        <div class="left leafGroup">
                            <div data-aos="fade-right" data-aos-delay="200">
                                <img class="lazyload" src="styles/images/common/preload.png" data-src="styles/images/reservation/leaf-left.png" alt="雄獅鉛筆廠股份有限公司">
                            </div>
                            <div class="dec productLeaf">
                            </div>
                        </div>
                        <div class="right leafGroup">
                            <div data-aos="fade-left" data-aos-delay="500">
                                <img class="lazyload" src="styles/images/common/preload.png" data-src="styles/images/index/section-2/leaf-right-1.svg" alt="雄獅鉛筆廠股份有限公司">
                                <img class="lazyload" src="styles/images/common/preload.png" data-src="styles/images/index/section-2/leaf-right-2.svg" alt="雄獅鉛筆廠股份有限公司">
                                <img class="lazyload" src="styles/images/common/preload.png" data-src="styles/images/index/section-2/leaf-right-3.svg" alt="雄獅鉛筆廠股份有限公司">
                            </div>
                            <div class="dec productLeaf">
                            </div>
                        </div>
                    </div>
                    <div class="clouds">
                        <div data-aos="fade-in" data-aos-delay="250">
                            <img class="cloud cloud-1 lazyload" src="styles/images/common/preload.png" data-src="styles/images/reservation/cloud-3.svg" alt="雄獅鉛筆廠股份有限公司">
                        </div>
                        <div data-aos="fade-in" data-aos-delay="250">
                            <img class="cloud cloud-2 lazyload" src="styles/images/common/preload.png" data-src="styles/images/reservation/cloud-3.svg" alt="雄獅鉛筆廠股份有限公司">
                        </div>
                        <div data-aos="fade-in" data-aos-delay="200">
                            <img class="cloud cloud-3 lazyload" src="styles/images/common/preload.png" data-src="styles/images/reservation/cloud-2.svg" alt="雄獅鉛筆廠股份有限公司">
                        </div>

                    </div>
                    <img class="fishs lazyload" src="styles/images/common/preload.png" data-src="styles/images/reservation/fish.png" alt="雄獅鉛筆廠股份有限公司">
                </div>
                <div class="section">
                    <ol class="breadcrumb pt-sm-5 mt-4 mt-sm-3 pb-1 mb-0" data-aos="fade-up">
                        <li><a href="./">首頁</a></li>
                        <li>線上預約</li>
                        <li aria-current="page">課程預約</li>
                    </ol>
                    <h1 class="d-table notoSansTC font-40 les2 mx-auto mb-sm-4 pb-3" data-aos="fade-up" data-aos-delay="100">線上預約</h1>
                    <h2 class="hidden">課程預約</h2>
                    <ul class="noneList links notoSansTC font-18 clearfix mb-1 mb-md-5" data-aos="fade-up" data-aos-delay="300">
                        <li>
                            <a href="ticket-reservation">入園票券</a>
                        </li>
                        <li class="active">
                            <a href="course-reservation">課程預約</a>
                        </li>
                        <li>
                            <a href="activity-reservation">活動預約</a>
                        </li>
                    </ul>
                    <div class="block pt-4">
                        <div class="max1500">
                            <div class="box" data-aos="fade-up">
                                <span class="d-block font-22 notoSansTC font-weight-500 text-center les1 mb-2 mb-sm-3 pb-sm-1">預約事項</span>
                                <div class="info mb-sm-4 pb-5 row pb-sm-0 m-0">
                                    <div class="text-center col-5 mt-2">
                                        <span class="d-block font-30 font-weight-bold mx-auto mb-2 les1">怪獸蓋蓋樂怪獸蓋蓋樂怪獸蓋蓋樂怪獸蓋蓋樂</span>
                                        <div class="difficulty">
                                            <img src="styles/images/common/difficulty-1.svg" alt="">
                                            <img src="styles/images/common/difficulty.svg" alt="">
                                            <img src="styles/images/common/difficulty.svg" alt="">
                                            <img src="styles/images/common/difficulty.svg" alt="">
                                            <img src="styles/images/common/difficulty.svg" alt="">
                                        </div>
                                    </div>
                                    <ul class="blue-dot-style col-7 noneStyle d-table">
                                        <li class="mb-2 mb-sm-4">
                                            開始進行線上預約前，請詳閱相關
                                            <a class="ml-sm-2" href="rule">預約規則</a>
                                        </li>
                                        <li class="mb-2 mb-sm-4">點選預定參訪日期，即可開始進行線上預約。</li>
                                    </ul>
                                    <form action="course-reservation" class="notoSansTC font-16 col-12 mt-2 mt-sm-0">
                                        <select class="selectpicker font-18 px-sm-3" name="course" id="course">
                                            <option value="">請選擇</option>
                                            <option value="1">手染鞋</option>
                                            <option value="2">軟木杯墊軟木杯墊軟木杯墊軟木杯</option>
                                            <option value="3">樹葉書籤</option>
                                        </select>
                                    </form>
                                </div>

                                <div class="calendar">
                                    <div class="title flex-center position-relative">
                                        <a class="notoSansTC font-16 mr-lg-5 pr-2 pr-md-4" href="#" id="prev"><span>上一個月</span><i class="icon-left-open ml-2 ml-lg-4"></i></a>
                                        <span class="lato font-24 font-weight-500">
                                            <span class="mr-1" id="calendar-year"></span>年
                                            <span class="ml-2 mr-1" id="calendar-title"></span>月
                                        </span>
                                        <a class="notoSansTC font-16 ml-lg-5 pl-2 pl-md-4" href="#" id="next"><i class="icon-right-open mr-2 mr-lg-4"></i><span>下一個月</span></a>
                                        <a class="today position-absolute text-center notoSansTC font-16" href="course-time-1">今天</a>
                                    </div>
                                    <div class="body">
                                        <div class="body-list notoSansTC">
                                            <ul class="clearfix m-0 p-0">
                                                <li>週日</li>
                                                <li>週一</li>
                                                <li>週二</li>
                                                <li>週三</li>
                                                <li>週四</li>
                                                <li>週五</li>
                                                <li>週六</li>
                                            </ul>
                                        </div>
                                        <div class="darkgrey body-list">
                                            <ul id="days" class="clearfix m-0 p-0">
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <img class="dec position-absolute lazyload" src="styles/images/common/preload.png" data-src="styles/images/reservation/bg.jpg" alt="雄獅鉛筆廠股份有限公司">
                </div>
            </div>
        </main>
        <!-- main ======================================================================================= -->

        <?php include "footer.php"; ?>
    </div>
    <?php include "footer-js.php"; ?>
    <script>
        $("form select").change(function() {
            $(this).parents("form").submit();
        });






        var month_olympic = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        var month_normal = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        var month_name = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
        var holder = document.getElementById("days");
        var prev = document.getElementById("prev");
        var next = document.getElementById("next");
        var ctitle = document.getElementById("calendar-title");
        var cyear = document.getElementById("calendar-year");
        var my_date = new Date();
        var my_year = my_date.getFullYear();
        var my_month = my_date.getMonth();
        var my_day = my_date.getDate();
        var full = ['2020-04-22', '2020-04-18'];

        function dayStart(month, year) {
            var tmpDate = new Date(year, month, 1);
            return (tmpDate.getDay());
        }

        function daysMonth(month, year) {
            var tmp = year % 4;
            if (tmp == 0) {
                return (month_olympic[month]);
            } else {
                return (month_normal[month]);
            }
        }

        function refreshDate() {
            var str = "";
            var totalDay = daysMonth(my_month, my_year);
            var firstDay = dayStart(my_month, my_year);
            var count = 0;

            if (my_month == my_date.getMonth()) {
                $("#prev").addClass("hidden");
            } else {
                $("#prev").removeClass("hidden");
            }
            for (var i = 0; i < firstDay; i++) {
                str += "<li class='lightgrey'></li>";
                count++;
            }
            for (var i = 1; i <= totalDay; i++) {
                if ((i < my_day && my_year == my_date.getFullYear() && my_month == my_date.getMonth()) || my_year < my_date.getFullYear() || (my_year == my_date.getFullYear() && my_month < my_date.getMonth())) {
                    str += "<li class='lightgrey'><span class='day lato font-20 font-weight-bold'>" + i + "</span>" + "</li>";
                } else if (i == my_day && my_year == my_date.getFullYear() && my_month == my_date.getMonth()) {
                    var hasAdd = false;
                    for (var j = 0; j < full.length; j++) {
                        var temp_month = parseInt(my_month) + 1;
                        var temp_month = temp_month.toString().length == 1 ? "0" + temp_month : temp_month;
                        if (i == full[j].substr(8, 2) && my_year == full[j].substr(0, 4) && temp_month == full[j].substr(5, 2)) {
                            str += "<li class='full today'><span class='day lato font-20 font-weight-bold'>" + i + "</span><span class='d-block notoSansTC'>額滿</span>" + "</li>";
                            hasAdd = true;
                            break;
                        }
                    }
                    if (!hasAdd) {
                        str += "<li class='today'><a href='course-time-1'><span class='day lato font-20 font-weight-bold'>" + i + "</span><span class='d-block notoSansTC'>立即預約</span>" + "</a></li>";
                    }
                } else {
                    var hasAdd = false;
                    for (var k = 0; k < full.length; k++) {
                        var temp_month = parseInt(my_month) + 1;
                        var temp_month = temp_month.toString().length == 1 ? "0" + temp_month : temp_month;
                        if (i == full[k].substr(8, 2) && my_year == full[k].substr(0, 4) && temp_month == full[k].substr(5, 2)) {
                            str += "<li class='full'><span class='day lato font-20 font-weight-bold'>" + i + "</span><span class='d-block notoSansTC'>額滿</span>" + "</li>";
                            hasAdd = true;
                            break;
                        }
                    }
                    if (!hasAdd) {
                        str += "<li><a href='course-time-1'><span class='day lato font-20 font-weight-bold'>" + i + "</span><span class='d-block notoSansTC'>立即預約</span>" + "</a></li>";
                    }
                }
                count++;
            }

            var hasSupplement = Math.ceil(count / 7) * 7 - count;
            for (var i = 0; i < hasSupplement; i++) {
                str += "<li class='lightgrey'></li>";
            }
            holder.innerHTML = str;
            ctitle.innerHTML = month_name[my_month];
            cyear.innerHTML = my_year;
        }
        refreshDate();

        prev.onclick = function(e) {
            e.preventDefault();
            my_month--;
            if (my_month < 0) {
                my_year--;
                my_month = 11;
            }
            refreshDate();
        }
        next.onclick = function(e) {
            e.preventDefault();
            my_month++;
            if (my_month > 11) {
                my_year++;
                my_month = 0;
            }
            refreshDate();
        }
    </script>
</body>

</html>