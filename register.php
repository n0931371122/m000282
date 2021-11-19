<!doctype html>
<html lang="zh">

<head>
    <?php include "header-title.php"; ?>
</head>

<body>
    <div class="wp member" id="register">
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
                    <h1 class="d-table notoSansTC font-40 mx-auto les2 mb-sm-4 pb-3" data-aos="fade-up">會員登入</h1>
                    <div class="block pt-sm-3 max600">
                        <div class="tabs" data-aos="fade-up" data-aos-delay="100">
                            <h2 class="hidden">會員註冊</h2>
                            <ul class="noneStyle  clearfix notoSansTC">
                                <li><a class="flex-center" href="login">會員登入</a></li>
                                <li class="active font-weight-500"><span class="flex-center">會員註冊</span></li>
                            </ul>
                        </div>
                        <div class="box les1" data-aos="fade-up" data-aos-delay="100">
                            <div class="radios mt-2 pt-1 mb-2 pb-1" data-mode="phone">
                                <input type="radio" id="mobile" name="type" checked>
                                <label class="mr-4" for="mobile"><i></i>手機</label>
                                <input type="radio" id="Email" name="type">
                                <label class="mr-2" for="Email"><i></i>Email</label>
                            </div>
                            <form id="registerForm" action="#" method="POST" class="pb-2 pb-sm-4">
                                <div class="register-phone">
                                    <p class="mb-4">我們將發送簡訊驗證碼至您的手機內</p>
                                    <div class="field-group mb-3 pb-sm-2">
                                        <label for="phone" class="font-20 font-weight-bold mb-2 mb-sm-3">手機號碼：</label>
                                        <div class="phone">
                                            <input type="text" name="phone" id="phone" placeholder="TW +886">
                                            <a href="" class="font-16 notoSansTC">重寄驗證碼</a>
                                        </div>
                                    </div>
                                    <div class="field-group mb-3 pb-sm-2">
                                        <input type="text" name="phoneCode" id="phoneCode" placeholder="請輸入手機驗證碼">
                                    </div>
                                </div>
                                <div class="register-email">
                                    <p class="mb-4">我們將發送認證信至您的信箱內</p>
                                    <div class="field-group mb-3 pb-sm-2">
                                        <label for="email" class="font-20 font-weight-bold mb-2 mb-sm-3">EMAIL：</label>
                                        <input type="text" name="email" id="email" placeholder="sales@simbalion.com.tw ">
                                    </div>
                                </div>
                                <div class="field-group mb-3 pb-sm-2">
                                    <input type="password" name="password" id="password" placeholder="輸入密碼">
                                </div>
                                <div class="field-group mb-3 pb-sm-2">
                                    <input type="password" name="passwordCheck" id="passwordCheck" placeholder="請再次輸入密碼">
                                </div>
                                <div class="field-group mb-3 pb-sm-2">
                                    <div class="verification w-100 position-relative">
                                        <input type="text" name="verification" id="verification" placeholder="驗證碼">
                                        <a href="#"><img class="lazyload" src="styles/images/common/preload.png" data-src="styles/images/member/verification.jpg" alt="雄獅鉛筆廠股份有限公司"></a>
                                    </div>
                                </div>
                                <p class="font-16 privacy-and-terms mb-4 pb-sm-2">若要繼續註冊，請先閱讀並同意<a class="font-weight-bold" href="terms">會員條款</a>與<a class="font-weight-bold" href="privacy">隱私權政策</a></p>
                                <button type="button" class="button lightblue-bg text-white w-100 font-20 font-weight-bold mb-1 mb-sm-3">註冊</button>
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
    <script>
        $("#registerForm button").click(function() {
            if ($(".radios #mobile").prop("checked")) {
                $("form").attr("action", "ok-mobile");
            } else {
                $("form").attr("action", "ok-mail");
            }
            $("#registerForm").submit();
        });
    </script>
</body>

</html>