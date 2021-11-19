<!doctype html>
<html lang="zh">

<head>
    <?php include "header-title.php"; ?>
</head>

<body>
    <div class="wp member noTab" id="forget-reset">
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
                    <h1 class="d-table notoSansTC font-40 les2 mx-auto mb-sm-4 pb-3" data-aos="fade-up">忘記密碼</h1>
                    <div class="block pt-sm-3 max600">
                        <div class="box les1" data-aos="fade-up" data-aos-delay="100">
                            <form action="forget-mobile-ok" class="pb-2 pb-sm-4 pt-sm-3">
                                <p class="font-30 notoSansTC">設定登入密碼</p>
                                <p class="mb-4 pb-sm-3">您的設定即將完成</p>
                                <div class="field-group mb-3 mb-sm-4">
                                    <label for="password" class="font-20 font-weight-bold mb-2 mb-sm-3">新密碼設定：</label>
                                    <input type="password" name="password" id="password" placeholder="輸入密碼">
                                </div>
                                <div class="field-group mb-3 mb-sm-4 pb-sm-2">
                                    <input type="password" name="checkPassword" id="checkPassword" placeholder="請再次輸入密碼">
                                </div>
                                <button type="submit" class="button lightblue-bg text-white w-100 font-20 font-weight-bold mb-3 mb-sm-4">完成</button>
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