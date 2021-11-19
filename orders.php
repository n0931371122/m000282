<!doctype html>
<html lang="zh">

<head>
    <?php include "header-title.php"; ?>
</head>

<body>
    <div class="wp member noTab memberCenter order" id="orders">
        <?php include "header.php"; ?>
        <!-- main ======================================================================================= -->
        <main class="main">
            <div class="inner">
                <div class="dec-section">
                    <div class="clouds">
                        <div data-aos="fade-in" data-aos-delay="150">
                            <img class="cloud cloud-1 lazyload" src="styles/images/common/preload.png" data-src="styles/images/terms/cloud-1.svg" alt="雄獅鉛筆廠股份有限公司">
                        </div>
                        <div data-aos="fade-in" data-aos-delay="350">
                            <img class="cloud cloud-2 lazyload" src="styles/images/common/preload.png" data-src="styles/images/terms/cloud-2.svg" alt="雄獅鉛筆廠股份有限公司">
                        </div>
                        <div data-aos="fade-in" data-aos-delay="250">
                            <img class="cloud cloud-3 lazyload" src="styles/images/common/preload.png" data-src="styles/images/terms/cloud-3.svg" alt="雄獅鉛筆廠股份有限公司">
                        </div>
                        <div data-aos="fade-in" data-aos-delay="200">
                            <img class="cloud cloud-4 lazyload" src="styles/images/common/preload.png" data-src="styles/images/terms/cloud-2.svg" alt="雄獅鉛筆廠股份有限公司">
                        </div>
                    </div>
                    <div class="birds">
                        <img class="bird-1 lazyload" src="styles/images/common/preload.png" data-src="styles/images/terms/bird-1.svg" alt="雄獅鉛筆廠股份有限公司" data-aos="fade-up" data-aos-delay="500">
                    </div>
                </div>
                <div class="section">
                    <ol class="breadcrumb pt-sm-5 mt-3 pb-1 mb-0" data-aos="fade-up">
                        <li><a href="./">首頁</a></li>
                        <li>會員中心 </li>
                        <li aria-current="page">訂單查詢</li>
                    </ol>
                    <h1 class="d-table notoSansTC font-40 les2 mx-auto mb-md-4 pb-md-2" data-aos="fade-up" data-aos-delay="100">會員中心</h1>
                    <h2 class="hidden">訂單查詢</h2>
                    <div class="block max1500 pt-3">
                        <div class="d-table tabs mx-auto" data-aos="fade-up" data-aos-delay="200">
                            <ul class="noneStyle clearfix notoSansTC">
                                <li class="active font-weight-500"><a class="flex-center" href="orders">訂單查詢</a></li>
                                <li><a href="editor" class="flex-center">個人資料</a></li>
                                <li><a href="password" class="flex-center">密碼管理</a></li>
                            </ul>
                        </div>
                        <div class="box position-relative" data-aos="fade-up" data-aos-delay="200">
                            <span class="d-block font-22 notoSansTC mb-2 mb-sm-4 text-black">訂單查詢</span>
                            <form id="periodForm" action="orders">
                                <div class="select-group font-16 notoSansTC">
                                    <select class="selectpicker" name="period" id="period">
                                        <option>最近三個月</option>
                                        <option>最近三個月</option>
                                        <option>最近六個月</option>
                                        <option>最近一年</option>
                                    </select>
                                </div>
                            </form>
                            <div class="table-wrapper scrollbarX mb-4 mb-sm-5">
                                <table class="w-100 notoSansTC type-1">
                                    <thead>
                                        <tr>
                                            <th style="width:15%">預約日期</th>
                                            <th style="width:18.5%">訂單編號</th>
                                            <th style="width:16%">付款方式</th>
                                            <th style="width:14%">訂單狀況</th>
                                            <th>訂單金額</th>
                                            <th>兌換序號</th>
                                            <th>詢問</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="lato font-weight-bold">
                                                <span class="title">預約日期：</span>
                                                2019-08-08
                                            </td>
                                            <td class="lato">
                                                <span class="title">訂單編號：</span>
                                                <a href="order">201908080002</a>
                                            </td>
                                            <td>
                                                <span class="title">付款方式：</span>
                                                信用卡付款
                                            </td>
                                            <td>
                                                <span class="title">訂單狀況：</span>
                                                訂單處理中
                                            </td>
                                            <td class="lato font-weight-bold">
                                                <span class="title">訂單金額：</span>
                                                7,200
                                            </td>
                                            <td>
                                                <span class="title">兌換序號：</span>
                                                <button type="button" data-toggle="modal" data-target="#modalCenter">點我產生條碼</button>
                                            </td>
                                            <td>
                                                <span class="title"><span class="inquire"><span>詢</span><span>問</span></span>：</span>
                                                <a class="flex-center" href="service">
                                                    <img class="svg" src="styles/images/member/mail.svg" alt="雄獅鉛筆廠股份有限公司">
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="lato font-weight-bold">
                                                <span class="title">預約日期：</span>
                                                2019-08-08
                                            </td>
                                            <td class="lato">
                                                <span class="title">訂單編號：</span>
                                                <a href="order">201908080001</a>
                                            </td>
                                            <td>
                                                <span class="title">付款方式：</span>
                                                ATM轉帳
                                            </td>
                                            <td>
                                                <span class="title">訂單狀況：</span>
                                                待取票
                                            </td>
                                            <td class="lato font-weight-bold">
                                                <span class="title">訂單金額：</span>
                                                1,900
                                            </td>
                                            <td>
                                                <span class="title">兌換序號：</span>
                                                <button type="button" data-toggle="modal" data-target="#modalCenter">點我產生條碼</button>
                                            </td>
                                            <td>
                                                <span class="title"><span class="inquire"><span>詢</span><span>問</span></span>：</span>
                                                <a class="flex-center" href="service">
                                                    <img class="svg" src="styles/images/member/mail.svg" alt="雄獅鉛筆廠股份有限公司">
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="lato font-weight-bold">
                                                <span class="title">預約日期：</span>
                                                2019-08-01
                                            </td>
                                            <td class="lato">
                                                <span class="title">訂單編號：</span>
                                                <a href="order">201908010006</a>
                                            </td>
                                            <td>
                                                <span class="title">付款方式：</span>
                                                信用卡付款
                                            </td>
                                            <td>
                                                <span class="title">訂單狀況：</span>
                                                已取票
                                            </td>
                                            <td class="lato font-weight-bold">
                                                <span class="title">訂單金額：</span>
                                                1,600
                                            </td>
                                            <td>
                                                <span class="title">兌換序號：</span>
                                                <button type="button" data-toggle="modal" data-target="#modalCenter">點我產生條碼</button>
                                            </td>
                                            <td>
                                                <span class="title"><span class="inquire"><span>詢</span><span>問</span></span>：</span>
                                                <a class="flex-center" href="service">
                                                    <img class="svg" src="styles/images/member/mail.svg" alt="雄獅鉛筆廠股份有限公司">
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="lato font-weight-bold">
                                                <span class="title">預約日期：</span>
                                                2019-07-25
                                            </td>
                                            <td class="lato">
                                                <span class="title">訂單編號：</span>
                                                <a href="return-record">201907250009</a>
                                            </td>
                                            <td>
                                                <span class="title">付款方式：</span>
                                                ATM轉帳
                                            </td>
                                            <td>
                                                <span class="title">訂單狀況：</span>
                                                取消訂單處理中
                                            </td>
                                            <td class="lato font-weight-bold">
                                                <span class="title">訂單金額：</span>
                                                2,635
                                            </td>
                                            <td>
                                                <span class="title">兌換序號：</span>
                                                <button type="button" data-toggle="modal" data-target="#modalCenter">點我產生條碼</button>
                                            </td>
                                            <td>
                                                <span class="title"><span class="inquire"><span>詢</span><span>問</span></span>：</span>
                                                <a class="flex-center" href="service">
                                                    <img class="svg" src="styles/images/member/mail.svg" alt="雄獅鉛筆廠股份有限公司">
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="lato font-weight-bold">
                                                <span class="title">預約日期：</span>
                                                2019-07-17
                                            </td>
                                            <td class="lato">
                                                <span class="title">訂單編號：</span>
                                                <a href="return-record">201907170001</a>
                                            </td>
                                            <td>
                                                <span class="title">付款方式：</span>
                                                ATM轉帳
                                            </td>
                                            <td>
                                                <span class="title">訂單狀況：</span>
                                                退款完成
                                            </td>
                                            <td class="lato font-weight-bold">
                                                <span class="title">訂單金額：</span>
                                                4,800
                                            </td>
                                            <td>
                                                <span class="title">兌換序號：</span>
                                                <button type="button" data-toggle="modal" data-target="#modalCenter">點我產生條碼</button>
                                            </td>
                                            <td>
                                                <span class="title"><span class="inquire"><span>詢</span><span>問</span></span>：</span>
                                                <a class="flex-center" href="service">
                                                    <img class="svg" src="styles/images/member/mail.svg" alt="雄獅鉛筆廠股份有限公司">
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="lato font-weight-bold">
                                                <span class="title">預約日期：</span>
                                                2019-06-22
                                            </td>
                                            <td class="lato">
                                                <span class="title">訂單編號：</span>
                                                <a href="order">201906220005</a>
                                            </td>
                                            <td>
                                                <span class="title">付款方式：</span>
                                                ATM轉帳
                                            </td>
                                            <td>
                                                <span class="title">訂單狀況：</span>
                                                逾期失效
                                            </td>
                                            <td class="lato font-weight-bold">
                                                <span class="title">訂單金額：</span>
                                                2,800
                                            </td>
                                            <td>
                                                <span class="title">兌換序號：</span>
                                                <button type="button" data-toggle="modal" data-target="#modalCenter">點我產生條碼</button>
                                            </td>
                                            <td>
                                                <span class="title"><span class="inquire"><span>詢</span><span>問</span></span>：</span>
                                                <a class="flex-center" href="service">
                                                    <img class="svg" src="styles/images/member/mail.svg" alt="雄獅鉛筆廠股份有限公司">
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="lato font-weight-bold">
                                                <span class="title">預約日期：</span>
                                                2019-06-08
                                            </td>
                                            <td class="lato">
                                                <span class="title">訂單編號：</span>
                                                <a href="order">201906080003</a>
                                            </td>
                                            <td>
                                                <span class="title">付款方式：</span>
                                                信用卡付款
                                            </td>
                                            <td>
                                                <span class="title">訂單狀況：</span>
                                                訂單處理中
                                            </td>
                                            <td class="lato font-weight-bold">
                                                <span class="title">訂單金額：</span>
                                                1,200
                                            </td>
                                            <td>
                                                <span class="title">兌換序號：</span>
                                                <button type="button" data-toggle="modal" data-target="#modalCenter">點我產生條碼</button>
                                            </td>
                                            <td>
                                                <span class="title"><span class="inquire"><span>詢</span><span>問</span></span>：</span>
                                                <a class="flex-center" href="service">
                                                    <img class="svg" src="styles/images/member/mail.svg" alt="雄獅鉛筆廠股份有限公司">
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="lato font-weight-bold">
                                                <span class="title">預約日期：</span>
                                                2019-06-08
                                            </td>
                                            <td class="lato">
                                                <span class="title">訂單編號：</span>
                                                <a href="order">201906080001</a>
                                            </td>
                                            <td>
                                                <span class="title">付款方式：</span>
                                                ATM轉帳
                                            </td>
                                            <td>
                                                <span class="title">訂單狀況：</span>
                                                已取票
                                            </td>
                                            <td class="lato font-weight-bold">
                                                <span class="title">訂單金額：</span>
                                                1,200
                                            </td>
                                            <td>
                                                <span class="title">兌換序號：</span>
                                                <button type="button" data-toggle="modal" data-target="#modalCenter">點我產生條碼</button>
                                            </td>
                                            <td>
                                                <span class="title"><span class="inquire"><span>詢</span><span>問</span></span>：</span>
                                                <a class="flex-center" href="service">
                                                    <img class="svg" src="styles/images/member/mail.svg" alt="雄獅鉛筆廠股份有限公司">
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div class="pages d-table text-center m-auto font-18 lato font-weight-bold pb-sm-2">
                                <ul class="pagination">
                                    <li class="prev flex-center disabled">
                                        <a class="d-block" href="#" tabindex="-1" aria-disabled="true">
                                            <i class="icon-left-open font-24"></i>
                                        </a>
                                    </li>
                                    <li class="active" aria-current="page">
                                        <a class="d-block rounded-circle" href="#">1<span class="sr-only">(current)</span></a>
                                    </li>
                                    <li>
                                        <a class="d-block rounded-circle" href="#">2</a>
                                    </li>
                                    <li>
                                        <a class="d-block rounded-circle" href="#">3</a>
                                    </li>
                                    <li>
                                        <a class="d-block rounded-circle" href="#">4</a>
                                    </li>
                                    <li>
                                        <a class="d-block rounded-circle" href="#">5</a>
                                    </li>
                                    <li class="next flex-center">
                                        <a class="d-block" href="#">
                                            <i class="icon-right-open font-24"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <!-- main ======================================================================================= -->
        <!-- Modal -->
        <div class="modal fade" id="modalCenter" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <img class="lazyload" src="styles/images/common/preload.png" data-src="styles/images/member/code.png" alt="雄獅鉛筆廠股份有限公司">
                        <div class="notoSansTC les1 mb-sm-4">
                            <p class="font-weight-bold 1">雄獅文具想像力製造所</p>
                            <p>預約人姓名：林忠柴 先生</p>
                            <p>全票：<span class="lato font-weight-bold">5</span> 張</p>
                            <p>優待票：<span class="lato font-weight-bold">1</span> 張</p>
                            <p>課程：<span class="lato font-weight-bold">4</span> 份</p>
                            <p>預約日期：<span class="lato font-weight-bold">2019-08-08</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <?php include "footer.php"; ?>
    </div>
    <?php include "footer-js.php"; ?>
    <script>
        $("#period").change(function() {
            $("#periodForm").submit();
        });
    </script>
</body>

</html>