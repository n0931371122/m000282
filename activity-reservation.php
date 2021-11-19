<!doctype html>
<html lang="zh">

<head>
    <?php include "header-title.php"; ?>
</head>

<body>
    <div class="wp reservation" data-leaf="about">
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
                        <li aria-current="page">活動預約</li>
                    </ol>
                    <h1 class="d-table notoSansTC font-40 les2 mx-auto mb-sm-4 pb-3" data-aos="fade-up" data-aos-delay="100">線上預約</h1>
                    <h2 class="hidden">活動預約</h2>
                    <ul class="noneList links notoSansTC font-18 clearfix mb-1 mb-md-5" data-aos="fade-up" data-aos-delay="300">
                        <li>
                            <a href="ticket-reservation">入園票券</a>
                        </li>
                        <li>
                            <a href="course-reservation">課程預約</a>
                        </li>
                        <li class="active">
                            <a href="activity-reservation">活動預約</a>
                        </li>
                    </ul>
                    <div class="block pt-4">
                        <div class="max1500">
                            <div class="box" data-aos="fade-up">
                                <span class="d-block font-22 notoSansTC font-weight-500 text-center les1 mb-2 mb-sm-3 pb-sm-1">預約事項</span>
                                <ul class="blue-dot-style noneStyle d-table mx-auto mb-5 mb-sm-4 pb-sm-2">
                                    <li class="mb-2 mb-sm-4">
                                        開始進行線上預約前，請詳閱相關
                                        <a class="ml-sm-2" href="rule">預約規則</a>
                                    </li>
                                    <li class="mb-2 mb-sm-4">點選預定參訪日期，即可開始進行線上預約。</li>
                                </ul>
                                <div class="calendar">
                                    <div class="title flex-center position-relative">
                                        <a class="notoSansTC font-16 mr-lg-5 pr-2 pr-md-4" href="#" id="prev"><span>上一個月</span><i class="icon-left-open ml-2 ml-lg-4"></i></a>
                                        <span class="lato font-24 font-weight-500">
                                            <span class="mr-1" id="calendar-year"></span>年
                                            <span class="ml-2 mr-1" id="calendar-title"></span>月
                                        </span>
                                        <a class="notoSansTC font-16 ml-lg-5 pl-2 pl-md-4" href="#" id="next"><i class="icon-right-open mr-2 mr-lg-4"></i><span>下一個月</span></a>
                                        <a class="today position-absolute text-center notoSansTC font-16" href="activity-time">今天</a>
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
                        str += "<li class='today'><a href='activity-time'><span class='day lato font-20 font-weight-bold'>" + i + "</span><span class='d-block notoSansTC'>立即預約</span>" + "</a></li>";
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
                        str += "<li><a href='activity-time'><span class='day lato font-20 font-weight-bold'>" + i + "</span><span class='d-block notoSansTC'>立即預約</span>" + "</a></li>";
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