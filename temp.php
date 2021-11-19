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
                <div class="section pt-sm-5 mt-4">
                    <h1 class="d-table notoSansTC position-relative font-40 les2 mx-auto mb-sm-4 pb-3" style="z-index:1;" data-aos="fade-up">會員登入</h1>
                    <div class="block pt-sm-3 max600">
                        <div class="tabs" data-aos="fade-up" data-aos-delay="100">
                            <h2 class="hidden">會員登入</h2>
                            <ul class="noneStyle  clearfix notoSansTC">
                                <li class="active font-weight-500"><span class="flex-center">啟用信</span></li>
                            </ul>
                        </div>
                        <div class="box" data-aos="fade-up" data-aos-delay="100">
                            <form action="orders" method="GET" class="pb-2 pb-sm-4">
                                <div class="field-group mb-3">
                                    <label for="email" class="font-20 font-weight-bold mb-2 mb-sm-3">EMAIL：</label>
                                    <input type="text" name="email" id="email">
                                </div>
                                <div class="field-group mb-3">
                                    <label for="activeCode" class="font-20 font-weight-bold mb-2 mb-sm-3">啟用碼：</label>
                                    <input type="text" name="activeCode" id="activeCode">
                                </div>
                                <div class="field-group mb-3">
                                    <label for="verification" class="font-20 font-weight-bold mb-2 mb-sm-3">驗證碼：</label>
                                    <div class="verification w-100 position-relative">
                                        <input type="text" name="verification" id="verification">
                                        <a href="#"><img class="lazyload" src="styles/images/common/preload.png" data-src="styles/images/member/verification.jpg" alt="雄獅鉛筆廠股份有限公司"></a>
                                    </div>
                                </div>
                                <button type="submit" class="button lightblue-bg text-white w-100 font-20 font-weight-bold mb-sm-3">啟用</button>
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