<!-- ticket-time-1.php 跟 ticket-time-2 是同一頁 只是流程不同 -->

<!doctype html>
<html lang="zh">

<head>
    <?php include "header-title.php"; ?>
</head>

<body>
    <div class="wp reservation time" data-leaf="about">
        <?php include "header.php"; ?>
        <!-- main ======================================================================================= -->
        <main class="main">
            <div class="inner">
                <div class="dec-section">
                    <div class="leafs">
                        <div class="left leafGroup">
                            <div data-aos="fade-right" data-aos-delay="200">
                                <img src="styles/images/reservation/leaf-left.png" alt="雄獅鉛筆廠股份有限公司">
                            </div>
                            <div class="dec productLeaf">
                            </div>
                        </div>
                        <div class="right leafGroup">
                            <div data-aos="fade-left" data-aos-delay="500">
                                <img src="styles/images/index/section-2/leaf-right-1.svg" alt="雄獅鉛筆廠股份有限公司">
                                <img src="styles/images/index/section-2/leaf-right-2.svg" alt="雄獅鉛筆廠股份有限公司">
                                <img src="styles/images/index/section-2/leaf-right-3.svg" alt="雄獅鉛筆廠股份有限公司">
                            </div>
                            <div class="dec productLeaf">
                            </div>
                        </div>
                    </div>
                    <div class="clouds">
                        <div data-aos="fade-in" data-aos-delay="250">
                            <img class="cloud cloud-1" src="styles/images/reservation/cloud-3.svg" alt="雄獅鉛筆廠股份有限公司">
                        </div>
                        <div data-aos="fade-in" data-aos-delay="250">
                            <img class="cloud cloud-2" src="styles/images/reservation/cloud-3.svg" alt="雄獅鉛筆廠股份有限公司">
                        </div>
                        <div data-aos="fade-in" data-aos-delay="200">
                            <img class="cloud cloud-3" src="styles/images/reservation/cloud-2.svg" alt="雄獅鉛筆廠股份有限公司">
                        </div>

                    </div>
                    <img class="fishs" src="styles/images/reservation/fish.png" alt="雄獅鉛筆廠股份有限公司">
                </div>
                <div class="section">
                    <ol class="breadcrumb pt-sm-5 mt-4 pb-1 mb-0" data-aos="fade-up">
                        <li><a href="./">首頁</a></li>
                        <li>線上預約</li>
                        <li aria-current="page">入園票券</li>
                    </ol>
                    <h1 class="d-table notoSansTC font-40 mx-auto mb-sm-4 pb-3" data-aos="fade-up" data-aos-delay="100">線上預約</h1>
                    <h2 class="hidden">入園票券</h2>
                    <ul class="noneList links notoSansTC font-18 clearfix mb-1 mb-md-5" data-aos="fade-up" data-aos-delay="300">
                        <li class="active">
                            <a href="ticket-reservation">入園票券</a>
                        </li>
                        <li>
                            <a href="course-reservation">課程預約</a>
                        </li>
                        <li>
                            <a href="activity-reservation">活動預約</a>
                        </li>
                    </ul>
                    <div class="block pt-4">
                        <div class="box max1500" data-aos="fade-up">
                            <div class="note pb-4 pl-xl-4 pr-xl-2">
                                <div>
                                    <span class="d-block notoSansTC font-weight-500 les1 mb-2 mb-sm-3 pb-sm-1">預約注意事項：</span>
                                    <ul class="blue-dot-style noneStyle">
                                        <li class="mb-1">購票前請詳閱票券適用範圍。</li>
                                        <li class="mb-1">每人單日預約，最多可訂購10張票券。</li>
                                        <li class="mb-1">部分DIY課程及活動預約數量受限，不可超過門票購買數量。如欲加購，請至現場購買。</li>
                                    </ul>
                                </div>
                                <a class="info d-table font-16 font-weight-500 text-center" href="visit">票券資訊</a>
                            </div>

                            <div>
                                <div class="d-md-flex align-center mb-3">
                                    <p class="notoSansTC les1 pl-xl-4 mr-md-4 mb-3 mb-md-0">目前選擇的日期：2019/08/08</p>
                                    <a href="ticket-reservation" class="selectDate">選擇日期</a>
                                </div>
                                <div class="form">
                                    <div class="notoSansTC">
                                        <div class="flex-center pt-sm-4 mb-2 mb-lg-4 pb-1">
                                            <span class="font-22 font-weight-500 les2 mr-4 pr-2 pl-xl-4">請選擇入場時段</span>
                                            <select class="selectpicker" name="course" id="course">
                                                <option value="">09:30-10:10 - 剩餘200位入場人數</option>
                                                <option value="1">10:30-11:10 - 剩餘100位入場人數</option>
                                                <option value="2">11:30-12:10 - 剩餘150位入場人數</option>
                                                <option value="3">12:30-13:10 - 剩餘50位入場人數</option>
                                            </select>
                                        </div>
                                        <p class="les2">已購買<span class="font-weight-500">入園票券</span>數量<span class="text-red mx-2">0</span>張，課程已購買<span class="text-red mx-2">4</span>張</p>
                                    </div>
                                    <div class="table-wrapper">
                                        <table class="w-100 notoSansTC cart-table">
                                            <thead>
                                                <tr>
                                                    <th></th>
                                                    <th class="main-cell">票券</th>
                                                    <th>數量</th>
                                                    <th>票價(元)</th>
                                                    <th class="subtotal-th">小計</th>
                                                </tr>
                                            </thead>
                                            <tbody class="product-body">
                                                <tr class="product">
                                                    <td></td>
                                                    <td class="main-cell">
                                                        <span class="d-flex">入園導覽票券_全票</span>
                                                    </td>
                                                    <td class="number-cell">
                                                        <span class="title"><span class="inquire"><span>數</span><span>量</span></span>：</span>
                                                        <div class="number-wrapper mx-lg-auto">
                                                            <span class="minus-btn mr-2 mr-sm-3">
                                                                <img src="styles/images/reservation/minus.svg" alt="雄獅鉛筆廠股份有限公司">
                                                            </span>
                                                            <input type="number" min="0" value="0">
                                                            <span class="add-btn ml-2 ml-sm-3">
                                                                <img src="styles/images/reservation/plus.svg" alt="雄獅鉛筆廠股份有限公司">
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <span class="title"><span class="inquire"><span>票</span><span>價</span><span>(元)</span></span>：</span>
                                                        NT $250
                                                    </td>
                                                    <td>
                                                        <span class="title"><span class="inquire"><span>小</span><span>計</span></span>：</span>
                                                        NT $1250
                                                    </td>
                                                </tr>
                                                <tr class="coupon">
                                                    <td></td>
                                                    <td colspan="4" class="main-cell">
                                                        <div>
                                                            <div class="ticket text-white d-inline-block font-14 text-center mr-2 mr-sm-3 ml-sm-2">優惠券</div>
                                                            <span class="font-15">會員優待券</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr class="coupon">
                                                    <td></td>
                                                    <td colspan="4" class="main-cell">
                                                        <div>
                                                            <div class="ticket text-white d-inline-block font-14 text-center mr-2 mr-sm-3 ml-sm-2">套票</div>
                                                            <span class="font-15">票券課程優惠</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                            <tbody class="product-body">
                                                <tr class="product">
                                                    <td></td>
                                                    <td class="main-cell">
                                                        <span class="d-flex">入園導覽票券_全票</span>
                                                    </td>
                                                    <td class="number-cell">
                                                        <span class="title"><span class="inquire"><span>數</span><span>量</span></span>：</span>
                                                        <div class="number-wrapper mx-lg-auto">
                                                            <span class="minus-btn mr-2 mr-sm-3">
                                                                <img src="styles/images/reservation/minus.svg" alt="雄獅鉛筆廠股份有限公司">
                                                            </span>
                                                            <input type="number" min="0" value="0">
                                                            <span class="add-btn ml-2 ml-sm-3">
                                                                <img src="styles/images/reservation/plus.svg" alt="雄獅鉛筆廠股份有限公司">
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <span class="title"><span class="inquire"><span>票</span><span>價</span><span>(元)</span></span>：</span>
                                                        NT $250
                                                    </td>
                                                    <td>
                                                        <span class="title"><span class="inquire"><span>小</span><span>計</span></span>：</span>
                                                        NT $1250
                                                    </td>
                                                </tr>
                                            </tbody>
                                            <tbody class="discounts-body">
                                                <tr>
                                                    <td></td>
                                                    <td class="main-discounts" colspan="4">
                                                        <div>
                                                            <span class="d-block font-weight-500 les1 mb-3 mb-lg-0">全館促銷活動</span>
                                                            <table>
                                                                <tbody>
                                                                    <tr class="discount-row mb-3 mb-md-0">
                                                                        <td class="discount-cell mb-3 mb-md-0">
                                                                            <div>
                                                                                <div class="ticket text-white d-inline-block font-14 text-center mr-3">已符合</div>
                                                                                <span class="font-16">驚喜特惠！全館買3送2活動開跑驚喜特惠！全館買3送2活動開跑</span>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr class="discount-row mb-3 mb-md-0">
                                                                        <td class="discount-cell mb-3 mb-md-0">
                                                                            <div>
                                                                                <div class="ticket text-white d-inline-block font-14 text-center mr-3">已符合</div>
                                                                                <span class="font-16">驚喜特惠！全館買3送2活動開跑驚喜特惠！全館買3送2活動開跑</span>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="btns flex-center">
                                        <a href="course-reservation" class="white-btn font-16 flex-center font-weight-bold h60 w180">前往預約課程</a>
                                        <!-- <button type="button" class="blue-btn font-16 h60 w180" data-toggle="modal" data-target="#ModalCenter">
                                            加入購物車
                                        </button> -->

                                        <button type="button" class="blue-btn font-16 h60 w180" data-toggle="modal" data-target="#discountModal">
                                            加入購物車
                                        </button>

                                        <a href="activity-reservation" class="white-btn font-16 flex-center font-weight-bold h60 w180">活動報名</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img class="dec position-absolute" src="styles/images/reservation/bg.jpg" alt="雄獅鉛筆廠股份有限公司">
                </div>
            </div>
            <!-- Modal -->
            <div class="modal fade" id="ModalCenter" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="body text-center">
                            <img src="styles/images/common/alert.png" alt="雄獅鉛筆廠股份有限公司">
                            <span class="d-block notoSansTC font-30 font-weight-500 mt-3 mb-2">尚未訂購課程</span>
                            <p class="notoSansTC" style="opacity:0.8;letter-spacing:2px">此票券需要購買課程，請前往訂購</p>
                            <div class="btns d-table mx-auto mt-sm-5">
                                <a href="course-time-1" class="white-btn font-16 flex-center font-weight-bold h60 w180">前往購票</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Modal -->
            <div class="modal fade" id="discountModal" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header mb-sm-2">
                            <span class="d-block font-30 font-weight-bold mx-auto mb-sm-2 les1">怪獸蓋蓋樂</span>
                            <button class="font-50 font-weight-bold close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div id="discountEdit" class="modal-body notoSansTC edit text-center" style="color:rgba(0,0,0,0.7)'">
                            <p class="mb-3 pb-sm-3 pt-1">
                                <span class="d-block">三款風格迥異的印花書衣，你喜歡哪一款？</span>
                                <span class="d-block">低調地看書或筆記，高調地秀出手作紙書衣～</span>
                                <span class="d-block">讓你更私密沉浸在閱讀時光裡！</span>
                            </p>
                        </div>
                        <div class="modal-footer d-table mx-auto">
                            <div class="d-sm-flex btns">
                                <a href="course-reservation" class="font-16 font-weight-bold blue-btn flex-center mx-2 mb-3 mb-sm-0">繼續購物</a>
                                <button class="font-16 font-weight-bold white-btn mx-2" data-dismiss="modal">加入購物車</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </main>
        <!-- main ======================================================================================= -->

        <?php include "footer.php"; ?>
    </div>
    <?php include "footer-js.php"; ?>
</body>

</html>