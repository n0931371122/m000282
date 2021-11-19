<!doctype html>
<html lang="zh">

<head>
    <?php include "header-title.php"; ?>
</head>

<body>
    <div class="wp member noTab memberCenter" id="editor">
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
                        <li>會員中心</li>
                        <li aria-current="page">個人資料</li>
                    </ol>
                    <h1 class="d-table notoSansTC font-40 les2 mx-auto mb-md-4 pb-md-2" data-aos="fade-up" data-aos-delay="100">會員中心</h1>
                    <h2 class="hidden">個人資料</h2>
                    <div class="block max1500 pt-3">
                        <div class="d-table tabs mx-auto" data-aos="fade-up" data-aos-delay="200">
                            <ul class="noneStyle clearfix notoSansTC">
                                <li><a href="orders" class="flex-center">訂單查詢</a></li>
                                <li class="active font-weight-500"><a href="editor" class="flex-center">個人資料</a></li>
                                <li><a href="password" class="flex-center">密碼管理</a></li>
                            </ul>
                        </div>
                        <div class="box les1" data-aos="fade-up" data-aos-delay="200">
                            <span class="d-block font-22 notoSansTC font-weight-500 mb-2 mb-sm-3 pb-sm-1">個人資料</span>
                            <p class="pb-sm-3" style="color:#174A79;">為避免影響您的消費權益，請填寫真實姓名、電話、電子信箱及地址資料，以利後續發票中獎等通知的資訊傳遞。</p>
                            <form action="editor-ok" method="POST" class="pt-sm-4">
                                <div class="row mb-3">
                                    <div class="field-group col-12 col-sm-6 mb-3 mb-sm-0" data-aos="fade-up">
                                        <label for="mail" class="font-18 notoSansTC mb-1 mb-sm-3">Email<span class="text-red ml-1">*</span></label>
                                        <input type="email" name="mail" id="mail" value="sales@simbalion.com.tw">
                                    </div>
                                    <div class="field-group col-12 col-sm-6" data-aos="fade-up">
                                        <label for="phone" class="font-18 notoSansTC mb-1 mb-sm-3">手機號碼<span class="text-red ml-1">*</span></label>
                                        <input type="tel" name="phone" id="phone" value="0912-345678" pattern="[0,9]{2}[0-9]{2}-[0-9]{6}">
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <div class="field-group col-12 col-sm-6  mb-3 mb-sm-0" data-aos="fade-up">
                                        <label for="name" class="font-18 notoSansTC mb-1 mb-sm-3">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名<span class="text-red ml-1">*</span></label>
                                        <input type="text" name="name" id="name" placeholder="請輸入真實姓名">
                                    </div>
                                    <div class="col-12 col-sm-6" data-aos="fade-up">
                                        <label for="name" class="font-18 notoSansTC mb-1 mb-sm-3">性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;別<span class="text-red ml-1">*</span></label>
                                        <div class="radios gender mt-sm-2 pt-sm-1 mb-sm-2 pb-sm-1">
                                            <input type="radio" id="male" name="gender" checked>
                                            <label class="mb-0" for="male"><i></i>先 生</label>
                                            <input type="radio" id="female" name="gender">
                                            <label class="mb-0" for="female"><i></i>小 姐</label>
                                        </div>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <div class="field-group col-12 col-sm-6  mb-3 mb-sm-0" data-aos="fade-up">
                                        <label for="tel" class="font-18 notoSansTC mb-1 mb-sm-3">聯絡電話</label>
                                        <input type="tel" name="tel" id="tel" placeholder="例：02-000-000">
                                    </div>
                                    <div class="field-group col-12 col-sm-6" data-aos="fade-up">
                                        <label for="birthday" class="font-18 notoSansTC mb-1 mb-sm-3">生&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;日</label>
                                        <input type="text" name="birthday" id="birthday" class="datepicker">
                                    </div>
                                </div>
                                <div class="address">
                                    <span class="d-block font-18 notoSansTC mb-1 mb-sm-3" data-aos="fade-up">通訊地址<span class="text-red ml-1">*</span></span>
                                    <div class="row mb-2 mb-sm-3">

                                        <div class="field-group col-12 col-sm-4 col-lg-5" data-aos="fade-up">
                                            <div class="select-group mb-2 mb-sm-0">
                                                <select class="selectpicker" name="city" id="city">
                                                    <option>請選擇縣市</option>
                                                    <option>台北市</option>
                                                    <option>台中市</option>
                                                </select>

                                            </div>
                                        </div>
                                        <div class="field-group col-12 col-sm-4 col-lg-5" data-aos="fade-up">
                                            <div class="select-group mb-2 mb-sm-0">
                                                <select class="selectpicker" name="area" id="area">
                                                    <option>請選擇區域</option>
                                                    <option>北區</option>
                                                    <option>東區</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="field-group col-12 col-sm-4 col-lg-2" data-aos="fade-up">
                                            <input type="text" name="zip" id="zip" pattern="[0-9]{3}" placeholder="郵遞區號">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="field-group col-12" data-aos="fade-up">
                                            <input type="text" name="address" id="address" placeholder="街道地址">
                                        </div>
                                    </div>
                                </div>
                                <div class="d-table" data-aos="fade-up">
                                    <input type="checkbox" id="newsletter" name="newsletter">
                                    <label class="flex-center" for="newsletter">
                                        <span class="check mr-2"></span>
                                        <span class="notoSansTC">我願意收到想像力製造所電子報</span>
                                    </label>
                                </div>
                                <div class="btns flex-center mt-3 mt-sm-5" data-aos="fade-up">
                                    <button type="submit" class="blue-btn h60 w180 font-16 font-weight-bold">儲存</button>
                                </div>
                            </form>
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