<!doctype html>
<html lang="zh">

<head>
    <?php include "header-title.php"; ?>
</head>

<body>
    <div class="wp member noTab">
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
                    <h1 class="d-table notoSansTC font-40 les2 mx-auto mb-sm-4 pb-3" data-aos="fade-up">重寄認證碼/啟用信</h1>
                    <div class="block pt-sm-3 max600">
                        <div class="box les1" data-aos="fade-up" data-aos-delay="100">
                            <form id="activateForm" action="#" class="pb-4 mt-2 mt-sm-3">
                                <p class="text-center mb-4 pb-sm-3 pt-sm-1" style="line-height:1.6em;">沒有收到會員註冊啟用信嗎？如果您已確認收件匣及垃圾信件夾都找不到啟用信件，請於下方輸入您註冊會員的電子信箱，將重新寄送一封啟用信給您，或者輸入您的手機號碼，重新發送驗證碼到您的手機</p>
                                <div class="field-group mb-3">
                                    <label for="account" class="font-20 font-weight-bold mb-2 mb-sm-3">EMAIL/手機號碼：</label>
                                    <input type="text" name="account" id="account">
                                </div>
                                <div class="field-group mb-4 pb-sm-3">
                                    <label for="verification" class="font-20 font-weight-bold mb-2 mb-sm-3">驗證碼：</label>
                                    <div class="verification w-100 position-relative">
                                        <input type="text" name="verification" id="verification">
                                        <a href="#"><img class="lazyload" src="styles/images/common/preload.png" data-src="styles/images/member/verification.jpg" alt="雄獅鉛筆廠股份有限公司"></a>
                                    </div>
                                </div>

                                <button type="submit" class="button lightblue-bg text-white w-100 font-20 font-weight-bold mb-sm-3">確認送出</button>
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
        $("button").click(function() {
            var phonePattern = new RegExp('[0-9]{4}-?[0-9]{3}-?[0-9]{3}');
            var str = $("input[type='text']").val();
            if (str.match(phonePattern)) {
                $("form").attr("action", "activate-mobile");
            } else {
                $("form").attr("action", "activate-mail-ok");
            }
            $("#activateForm").submit();
        });
    </script>
</body>

</html>