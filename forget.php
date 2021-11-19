<!doctype html>
<html lang="zh">

<head>
    <?php include "header-title.php"; ?>
</head>

<body>
    <div class="wp member noTab" id="forget">
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
                            <form id="forgetForm" action="#" class="pb-2 pb-sm-4 mt-2 mt-sm-4">
                                <p class="mb-4 pb-sm-3">請輸入您註冊想像力製造所的Email或手機號碼</p>
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

                                <button type="button" class="button lightblue-bg text-white w-100 font-20 font-weight-bold mb-sm-3">下一步</button>
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
                $("form").attr("action", "forget-mobile");
            } else {
                $("form").attr("action", "forget-mail-ok");
            }
            $("#forgetForm").submit();
        });
    </script>
</body>

</html>