<!doctype html>
<html lang="zh">

<head>
    <?php include "header-title.php"; ?>
</head>

<body>
    <div class="wp reservation cart" id="cart-2" data-leaf="about">
        <?php include "header.php"; ?>
        <!-- main ======================================================================================= -->
        <main class="main">
            <div class="inner">
                <div class="dec-section">
                    <div class="leafs">
                        <div class="left leafGroup">
                            <div data-aos="fade-right" data-aos-delay="200">
                                <img class="lazyload" src="styles/images/common/preload.png" data-src="styles/images/reservation/leaf-left.png" alt="雄獅鉛筆廠股份有限公司">
                            </div>
                            <div class="dec productLeaf">
                            </div>
                        </div>
                        <div class="right leafGroup">
                            <div data-aos="fade-left" data-aos-delay="500">
                                <img class="lazyload" src="styles/images/common/preload.png" data-src="styles/images/index/section-2/leaf-right-1.svg" alt="雄獅鉛筆廠股份有限公司">
                                <img class="lazyload" src="styles/images/common/preload.png" data-src="styles/images/index/section-2/leaf-right-2.svg" alt="雄獅鉛筆廠股份有限公司">
                                <img class="lazyload" src="styles/images/common/preload.png" data-src="styles/images/index/section-2/leaf-right-3.svg" alt="雄獅鉛筆廠股份有限公司">
                            </div>
                            <div class="dec productLeaf">
                            </div>
                        </div>
                    </div>
                    <div class="clouds">
                        <div data-aos="fade-in" data-aos-delay="250">
                            <img class="cloud cloud-1 lazyload" src="styles/images/common/preload.png" data-src="styles/images/reservation/cloud-3.svg" alt="雄獅鉛筆廠股份有限公司">
                        </div>
                        <div data-aos="fade-in" data-aos-delay="250">
                            <img class="cloud cloud-2 lazyload" src="styles/images/common/preload.png" data-src="styles/images/reservation/cloud-3.svg" alt="雄獅鉛筆廠股份有限公司">
                        </div>
                        <div data-aos="fade-in" data-aos-delay="200">
                            <img class="cloud cloud-3 lazyload" src="styles/images/common/preload.png" data-src="styles/images/reservation/cloud-2.svg" alt="雄獅鉛筆廠股份有限公司">
                        </div>

                    </div>
                    <img class="fishs lazyload" src="styles/images/common/preload.png" data-src="styles/images/reservation/fish.png" alt="雄獅鉛筆廠股份有限公司">
                </div>
                <div class="section">
                    <ol class="breadcrumb pt-sm-5 mt-4 pb-1 mb-0" data-aos="fade-up">
                        <li><a href="./">首頁</a></li>
                        <li aria-current="page"> 我的購物車</li>
                    </ol>
                    <h1 class="hidden">我的購物車</h1>
                    <h2 style="color: #082252;" class="d-table notoSansTC font-40 les2 mx-auto mb-sm-4 pb-3" data-aos="fade-up" data-aos-delay="100">填寫資料</h2>
                    <ul class="steps les1 noneStyle d-table text-center mx-auto">
                        <li class="float-left purple-line">
                            <div class="position-relative text-center mb-sm-3">
                                <img src="styles/images/cart/step-circle-complete.png" alt="雄獅鉛筆廠股份有限公司">
                                <span class="lato absolute-center text-white font-24">1</span>
                            </div>
                            <span class="d-block notoSansTC font-weight-500 pt-2">購物清單</span>
                        </li>
                        <li class="float-left">
                            <div class="position-relative text-center mb-sm-3">
                                <img src="styles/images/cart/step-circle-complete.png" alt="雄獅鉛筆廠股份有限公司">
                                <span class="lato absolute-center text-white font-24">2</span>
                            </div>
                            <span class="d-block notoSansTC font-weight-500 pt-2">填寫資料</span>
                        </li>
                        <li class="float-left">
                            <div class="position-relative text-center mb-sm-3">
                                <img src="styles/images/cart/step-circle.png" alt="雄獅鉛筆廠股份有限公司">
                                <span class="lato absolute-center text-white font-24">3</span>
                            </div>
                            <span class="d-block notoSansTC font-weight-500 pt-2">確認訂單</span>
                        </li>
                    </ul>
                    <div class="block pt-4">
                        <div class="max1500">
                            <div class="box" data-aos="fade-up">
                                <form method="POST" action="cart-3" class="w-100">
                                    <div class="notoSansTC pb-3 pb-sm-5">
                                        <div class="row mx-0 mb-3">
                                            <div class="field-group mb-3 mb-sm-0 mr-lg-4 pr-lg-3" data-aos="fade-up">
                                                <label for="name" class="font-18 notoSansTC mb-1 mb-sm-3 mb-md-0 mr-2">姓　　名：</label>
                                                <input type="text" name="name" id="name" value="林忠柴 先生">
                                            </div>
                                            <div data-aos="fade-up">
                                                <label for="name" class="font-18 notoSansTC mr-4">性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;別：</label>
                                                <div class="radios gender">
                                                    <input type="radio" id="male" name="gender" checked>
                                                    <label class="mb-0 mr-3 mr-sm-5" for="male"><i></i>先&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;生</label>
                                                    <input type="radio" id="female" name="gender">
                                                    <label class="mb-0" for="female"><i></i>小&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;姐</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mx-0 mb-3">
                                            <div class="field-group mb-sm-0 mr-lg-4 pr-lg-3" data-aos="fade-up">
                                                <label for="mobile" class="font-18 notoSansTC mb-sm-3 mb-md-0 mr-2">手機號碼：</label>
                                                <input type="text" name="mobile" id="mobile" value="09******11">
                                            </div>
                                            <a href="editor" class="flex-center font-16 text-white">修改會員資料</a>
                                        </div>
                                        <div class="row mx-0 mb-3">
                                            <div class="field-group mb-sm-0 mr-lg-4 pr-lg-3" data-aos="fade-up">
                                                <label for="phone" class="font-18 notoSansTC mb-sm-3 mb-md-0 mr-2">聯絡電話：</label>
                                                <input type="text" name="phone" id="phone" value="03-411-6888">
                                            </div>
                                        </div>
                                        <div class="row mx-0 mb-3">
                                            <div class="field-group mb-sm-0 mr-lg-4 pr-lg-3" data-aos="fade-up">
                                                <label for="mail" class="font-18 notoSansTC mb-sm-3 mb-md-0 mr-2">電子信箱：</label>
                                                <input type="email" name="mail" id="mail" value="sales@simbalion.com.tw">
                                            </div>
                                        </div>
                                        <div class="address pt-sm-2">
                                            <span class="d-block font-18 notoSansTC mb-1 mb-sm-3 mr-2" data-aos="fade-up">通訊地址：</span>
                                            <div>
                                                <div class="row">
                                                    <div class="field-group" data-aos="fade-up">
                                                        <div class="select-group">
                                                            <select class="selectpicker" name="city" id="city">
                                                                <option>請選擇縣市</option>
                                                                <option>台北市</option>
                                                                <option>台中市</option>
                                                            </select>

                                                        </div>
                                                    </div>
                                                    <div class="field-group" data-aos="fade-up">
                                                        <div class="select-group">
                                                            <select class="selectpicker" name="area" id="area">
                                                                <option>請選擇區域</option>
                                                                <option>北區</option>
                                                                <option>東區</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="field-group" data-aos="fade-up">
                                                        <input type="text" name="zip" id="zip" pattern="[0-9]{3}" placeholder="郵遞區號">
                                                    </div>
                                                </div>
                                                <div class="row mt-sm-3">
                                                    <div class="field-group col-12" data-aos="fade-up">
                                                        <input type="text" name="address" id="address" placeholder="街道地址">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="invoice" class="notoSansTC pb-3 pb-sm-4 pt-3 pt-sm-4">
                                        <ul class="noneStyle clearfix mb-sm-4 pb-2">
                                            <li class="active">
                                                <div class="flex-center">個人雲端發票</div>
                                            </li>
                                            <li>
                                                <div class="flex-center">個人紙本發票</div>
                                            </li>
                                            <li>
                                                <div class="flex-center">營業人發票</div>
                                            </li>
                                            <li>
                                                <div class="flex-center">發票捐贈</div>
                                            </li>
                                        </ul>
                                        <div>
                                            <div>
                                                <div class="pb-sm-4 mb-sm-3">
                                                    <div class="radios mb-2">
                                                        <div>
                                                            <input type="radio" id="vehicle-1" name="vehicle" checked>
                                                            <label class="mb-0 mr-4 pr-1" for="vehicle-1"><i></i>會員載具</label>
                                                        </div>
                                                        <div>
                                                            <input type="radio" id="vehicle-2" name="vehicle">
                                                            <label class="mb-0 mr-4 pr-1" for="vehicle-2"><i></i>手機條碼載具</label>
                                                        </div>
                                                        <div>
                                                            <input type="radio" id="vehicle-3" name="vehicle">
                                                            <label class="mb-0 mr-4 pr-1" for="vehicle-3"><i></i>自然人憑證載具</label>
                                                        </div>
                                                    </div>
                                                    <input class="w570" type="text" placeholder="請輸入載具編號">
                                                </div>
                                            </div>
                                            <div>
                                                <div class="radios mb-2">
                                                    <div>
                                                        <input type="radio" id="location-1" name="location" checked>
                                                        <label class="mb-0 mr-4 pr-1" for="location-1"><i></i>同訂購人地址</label>
                                                    </div>
                                                    <div>
                                                        <input type="radio" id="location-2" name="location">
                                                        <label class="mb-0 mr-4 pr-1" for="location-2"><i></i>重新填寫</label>
                                                    </div>
                                                </div>
                                                <div class="address pt-sm-2">
                                                    <div>
                                                        <div class="row">
                                                            <div class="field-group" data-aos="fade-up">
                                                                <div class="select-group">
                                                                    <select class="selectpicker" name="invoice-city" id="invoice-city">
                                                                        <option>請選擇縣市</option>
                                                                        <option>台北市</option>
                                                                        <option>台中市</option>
                                                                    </select>

                                                                </div>
                                                            </div>
                                                            <div class="field-group" data-aos="fade-up">
                                                                <div class="select-group">
                                                                    <select class="selectpicker" name="invoice-area" id="invoice-area">
                                                                        <option>請選擇區域</option>
                                                                        <option>北區</option>
                                                                        <option>東區</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div class="field-group" data-aos="fade-up">
                                                                <input type="text" name="invoice-zip" id="invoice-zip" pattern="[0-9]{3}" placeholder="郵遞區號">
                                                            </div>
                                                        </div>
                                                        <div class="row mt-sm-3">
                                                            <div class="field-group col-12" data-aos="fade-up">
                                                                <input type="text" name="invoice-address" id="invoice-address" placeholder="街道地址">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p class="mb-1 mt-3">發票於付款後7-14個工作天，以平信寄出。</p>
                                                <p>依統一發票使用辦法規定，個人發票一經開立，不得更改或改開公司戶發票。
                                                    <a href="https://www.einvoice.nat.gov.tw/ein_upload/html/ESQ/ESQ101W.html" target="_blank">財政部電子發票流程說明</a>
                                                </p>
                                            </div>
                                            <div>
                                                <div>
                                                    <label for="uniformNumbers" class="mr-3 mb-0">統一編號</label>
                                                    <input class="w210" type="text" name="uniformNumbers" id="uniformNumbers">
                                                </div>
                                                <div class="mt-2 mt-sm-3 mt-lg-0">
                                                    <label for="company" class="mr-3 mb-0 ml-lg-4 pl-lg-2">公司名稱</label>
                                                    <input class="w457" type="text" name="company" id="company">
                                                </div>
                                                <div class="radios mb-2 mt-3">
                                                    <div>
                                                        <input type="radio" id="location2-1" name="location2" checked>
                                                        <label class="mb-0 mr-4 pr-1" for="location2-1"><i></i>同訂購人地址</label>
                                                    </div>
                                                    <div>
                                                        <input type="radio" id="location2-2" name="location2">
                                                        <label class="mb-0 mr-4 pr-1" for="location2-2"><i></i>重新填寫</label>
                                                    </div>
                                                </div>
                                                <div class="address w-100 pt-sm-2">
                                                    <div>
                                                        <div class="row">
                                                            <div class="field-group" data-aos="fade-up">
                                                                <div class="select-group">
                                                                    <select class="selectpicker" name="invoice-2-city" id="invoice-2-city">
                                                                        <option>請選擇縣市</option>
                                                                        <option>台北市</option>
                                                                        <option>台中市</option>
                                                                    </select>

                                                                </div>
                                                            </div>
                                                            <div class="field-group" data-aos="fade-up">
                                                                <div class="select-group">
                                                                    <select class="selectpicker" name="invoice-2-area" id="invoice-2-area">
                                                                        <option>請選擇區域</option>
                                                                        <option>北區</option>
                                                                        <option>東區</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div class="field-group" data-aos="fade-up">
                                                                <input type="text" name="invoice-2-zip" id="invoice-2-zip" pattern="[0-9]{3}" placeholder="郵遞區號">
                                                            </div>
                                                        </div>
                                                        <div class="row mt-sm-3">
                                                            <div class="field-group col-12" data-aos="fade-up">
                                                                <input type="text" name="invoice-2-address" id="invoice-2-address" placeholder="街道地址">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p class="mt-3">發票於付款後7-14個工作天，以平信寄出。</p>
                                            </div>
                                            <div>
                                                <div class="radios mb-2">
                                                    <div>
                                                        <input type="radio" id="donate-1" name="donate" checked>
                                                        <label class="mb-0 mr-3" for="donate-1"><i></i>OO福利基金會</label>
                                                    </div>
                                                    <div>
                                                        <input type="radio" id="donate-2" name="donate">
                                                        <label class="mb-0 mr-3" for="donate-2"><i></i>OO福利基金會</label>
                                                    </div>
                                                    <div>
                                                        <input type="radio" id="donate-3" name="donate">
                                                        <label class="mb-0 mr-3" for="donate-3"><i></i>OO福利基金會</label>
                                                    </div>
                                                    <div>
                                                        <input type="radio" id="donate-4" name="donate">
                                                        <label class="mb-0 mr-3" for="donate-4"><i></i>OO福利基金會</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="note pt-3 pt-sm-4 pb-sm-4 mb-sm-4 pl-sm-4">
                                        <span class="d-block mb-2 mb-sm-3 pt-sm-3">提醒您：</span>
                                        <ul class="noneStyle">
                                            <li>在進行付款前，請再次確認所有資料是否正確無誤。</li>
                                            <li>若點選進行付款，則無法再增減商品的購買數量。</li>
                                            <li>請仔細閱讀本網站所提供之<a href="terms">會員條款</a>、<a href="privacy">隱私權政策</a>所載內容及其意義，若繼續進行操作，則代表茲同意該等條款規定，並願遵守網站現今、嗣後規範的各種規則。</li>
                                        </ul>
                                    </div>
                                    <div class="text-center les2 pt-3 pt-sm-5 pb-1">
                                        <span class="d-block notoSansTC font-weight-500 pt-2 mb-2 mb-sm-3 pb-1">虛擬帳號ATM轉帳</span>
                                        <span class="d-block notoSansTC mb-2 mb-sm-3" style="color:#262626;opacity:0.55;">本訂單應付總額</span>
                                        <span class="d-block notoSansTC font-weight-500 font-30" style="color:#D70084;">NT $1900</span>
                                    </div>


                                    <div class="btns flex-center pt-3 pt-sm-5 mt-sm-4 pb-sm-5 mb-3">
                                        <a href="cart-1" class="white-btn font-16 flex-center font-weight-bold w180 h60">上一步</a>
                                        <button type="submit" class="blue-btn font-16 font-weight-bold w180 h60">進行付款</button>
                                    </div>
                                </form>
                            </div>
                        </div>


                    </div>
                    <img class="dec position-absolute" src="styles/images/reservation/bg.jpg" alt="雄獅鉛筆廠股份有限公司">
                </div>
            </div>

        </main>
        <!-- main ======================================================================================= -->

        <?php include "footer.php"; ?>
    </div>
    <?php include "footer-js.php"; ?>

</body>

</html>