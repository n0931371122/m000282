<!doctype html>
<html lang="zh">

<head>
    <?php include "header-title.php"; ?>
</head>

<body>
    <div class="wp member" id="login">
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

                </div>
                <div class="section pt-sm-5 mt-4">
                    <h1 class="d-table notoSansTC font-40 les2 mx-auto mb-sm-4 pb-3" data-aos="fade-up">會員登入</h1>
                    <div class="block pt-sm-3 max600">
                        <div class="tabs" data-aos="fade-up" data-aos-delay="100">
                            <h2 class="hidden">會員登入</h2>
                            <ul class="noneStyle  clearfix notoSansTC">
                                <li class="active font-weight-500"><span class="flex-center">會員登入</span></li>
                                <li><a class="flex-center" href="register">會員註冊</a></li>
                            </ul>
                        </div>
                        <div class="box" data-aos="fade-up" data-aos-delay="100">
                            <form action="orders" method="GET" class="pb-2 pb-sm-4">
                                <div class="field-group mb-3">
                                    <label for="account" class="font-20 font-weight-bold mb-2 mb-sm-3">EMAIL/手機號碼：</label>
                                    <input type="text" name="account" id="account">
                                </div>
                                <p>asdasd</p>
                                <div class="field-group mb-3">
                                    <label for="password" class="font-20 font-weight-bold mb-2 mb-sm-3">密碼：</label>
                                    <input type="password" name="password" id="password">
                                </div>
                                <div class="field-group mb-3">
                                    <label for="verification" class="font-20 font-weight-bold mb-2 mb-sm-3">驗證碼：</label>
                                    <div class="verification w-100 position-relative">
                                        <input type="text" name="verification" id="verification">
                                        <a href="#"><img class="lazyload" src="styles/images/common/preload.png" data-src="styles/images/member/verification.jpg" alt="雄獅鉛筆廠股份有限公司"></a>
                                    </div>
                                </div>
                                <ul class="d-table noneStyle clearfix mx-auto pt-sm-2 mb-3">
                                    <li>
                                        <a href="forget">忘記密碼?</a>
                                    </li>
                                    <li>
                                        <a href="activate">重寄認證碼/啟用信</a>
                                    </li>
                                </ul>
                                <button type="submit" class="button lightblue-bg text-white w-100 font-20 font-weight-bold mb-sm-3">確定登入</button>
                                <span class="d-table mx-auto my-2 my-sm-3 py-sm-1">或</span>
                                <a href="#" target="_blank" class="fb flex-center button w-100 mt-1 mt-sm-3">
                                    <div>
                                        <img class="lazyload" src="styles/images/common/preload.png" data-src="styles/images/member/fb.svg" alt="雄獅鉛筆廠股份有限公司">
                                        <span class="text-white">以 Facebook 登入</span>
                                    </div>
                                </a>
                            </form>


                        </div>

                    </div>

                    <img class="dec position-absolute lazyload" src="styles/images/common/preload.png" data-src="styles/images/member/bg-bottom.jpg" alt="雄獅鉛筆廠股份有限公司" data-aos="fade-up">

                </div>
            </div>

        </main>
        <!-- main ======================================================================================= -->

        <?php include "footer.php"; ?>
    </div>
    <?php include "footer-js.php"; ?>

</body>

</html>