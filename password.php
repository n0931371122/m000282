<!doctype html>
<html lang="zh">

<head>
    <?php include "header-title.php"; ?>
</head>

<body>
    <div class="wp member noTab memberCenter" id="password">
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
                        <li aria-current="page">密碼管理</li>
                    </ol>
                    <h1 class="d-table notoSansTC font-40 les2 mx-auto mb-md-4 pb-md-2" data-aos="fade-up" data-aos-delay="100">會員中心</h1>
                    <h2 class="hidden">密碼管理</h2>
                    <div class="block max1500 pt-3">
                        <div class="d-table tabs mx-auto" data-aos="fade-up" data-aos-delay="200">
                            <ul class="noneStyle clearfix notoSansTC">
                                <li><a href="orders" class="flex-center">訂單查詢</a></li>
                                <li><a href="editor" class="flex-center">個人資料</a></li>
                                <li class="active font-weight-500"><a href="password" class="flex-center">密碼管理</a></li>
                            </ul>
                        </div>
                        <div class="box les1" data-aos="fade-up" data-aos-delay="200">
                            <span class="d-block font-22 notoSansTC font-weight-500 mb-3 mb-sm-4">密碼管理</span>
                            <form action="password-ok" method="POST" class="pt-sm-2">
                                <div class="row mb-3">
                                    <div class="field-group col-12" data-aos="fade-up">
                                        <label for="oldPassword" class="font-18 notoSansTC mb-1 mb-sm-3">原密碼<span class="text-red ml-1">*</span></label>
                                        <input type="password" name="oldPassword" id="oldPassword" placeholder="請輸入會員密碼以進行資料認證">
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="field-group col-12" data-aos="fade-up">
                                        <label for="newPassword" class="font-18 notoSansTC mb-1 mb-sm-3">輸入新密碼 <span class="text-red ml-1">*</span></label>
                                        <input type="password" name="newPassword" id="newPassword" placeholder="至少輸入6個字元以上">
                                    </div>
                                </div>
                                <div class="row mb-3 pb-sm-2">
                                    <div class="field-group col-12" data-aos="fade-up">
                                        <label for="checkPassword" class="font-18 notoSansTC mb-1 mb-sm-3">確認新密碼<span class="text-red ml-1">*</span></label>
                                        <input type="password" name="checkPassword" id="checkPassword" placeholder="請重覆輸入一次新密碼">
                                    </div>
                                </div>
                                <div class="btns flex-center mt-3 mt-sm-5 pt-sm-4" data-aos="fade-up">
                                    <button type="submit" class="blue-btn h60 w180 font-16 font-weight-bold">儲存</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <!-- main ======================================================================================= -->
    </div>
    <?php include "footer.php"; ?>
    <?php include "footer-js.php"; ?>

</body>

</html>