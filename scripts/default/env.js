    (function() {
        var env = (function () {
        var ua = navigator.userAgent.toLowerCase(),
        regex = {
            windows: /windows|win(ce|16|32|64)|pocket pc/,
            macintosh: /macintosh|powerpc/,
            linux: /linux/,
            freebsd: /freebsd/,
            openbsd: /openbsd/,
            symbos: /symbos/,
            ios: /ios|iphone|ipad|ipod/,
            android: /android/,
            blackBerry: /blackBerry/,
            iphone: /iphone/,
            ipad: /ipad/,
            ipod: /ipod/,
            desktop: /windows|win32|linux|macintosh|powerpc|freebsd|openbsd/,
            mobile: /ios|iphone|ipad|ipod|android|iemobile|blackberry/,
        },
        os = {
            windows: regex.windows.test(ua),
            macintosh: regex.macintosh.test(ua),
            linux: regex.linux.test(ua),
            freebsd: regex.freebsd.test(ua),
            openbsd: regex.openbsd.test(ua),
            symbos: regex.symbos.test(ua),
            ios: regex.ios.test(ua),
            android: regex.android.test(ua),
            blackBerry: regex.blackBerry.test(ua)
        },
        device = {
            iphone: regex.iphone.test(ua),
            ipad: regex.ipad.test(ua),
            ipod: regex.ipod.test(ua),
            desktop: regex.desktop.test(ua),
            tablet: regex.mobile.test(ua),
            mobile: regex.mobile.test(ua)
        },
        browser = (function () {
            var NO_MATCHED,
                KUNOW_VERSION = -1,
                toVersion = function (version) {
                    return parseFloat(String(version || '').replace(/(\.)/g, function (matched) {
                        matched = !arguments.callee.replaced ? matched : '';
                        arguments.callee.replaced = true;
                        return matched;
                    }));
                },
                map = (function () {
                    var info = {
                        mozilla: /mozilla/.test(ua),
                        webkit: /webkit/.test(ua),
                        gecko: /gecko/.test(ua),
                        safari: /safari/.test(ua),
                        chrome: /chrome/.test(ua),
                        crios: /crios/.test(ua),
                        firefox: /firefox/.test(ua),
                        opera: /opera|opr\//.test(ua),
                        konqueror: /konqueror/.test(ua),
                        edge: /edge/.test(ua),
                        msie: (function () {
                            var matches, version = NO_MATCHED;

                            if (/msie/.test(ua)) {
                                version = KUNOW_VERSION;
                                if ((matches = ua.match(/msie ([\w.]+)/))) {
                                    version = matches[1];
                                }
                            }

                            if ((matches = ua.match(/trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/))) {
                                if (/netscape/.test(navigator.appName.toLowerCase())) {
                                    version = matches[1];
                                }
                            }

                            if (version !== NO_MATCHED) {
                                version = toVersion(version);
                            }

                            return version;
                        }()),
                        android: (function () {
                            var matches,
                                version = NO_MATCHED,
                                parse = function () {
                                    version = KUNOW_VERSION;
                                    if ((matches = ua.match(/(?:android)[ \/]([\w.]+)/))) {
                                        version = matches[1];
                                    }
                                };

                            if (/android/.test(ua)) {
                                if (/android .+ version[ \/][\w\.]+/.test(ua)) {
                                    parse();
                                }
                                else if ((matches = ua.match(/\(khtml, like gecko\) (\w+)[ \/][\w\.]+ chrome[ \/]/))) {
                                    parse();
                                }
                            }

                            if (version !== NO_MATCHED) {
                                version = toVersion(version);
                            }

                            return version;
                        }())
                    };

                    // Some exceptions
                    info.webkit = info.webkit && !info.edge;
                    info.safari = info.safari && !info.chrome && !info.crios && !info.android && !info.opera && !info.edge;
                    info.chrome = (info.chrome || info.crios) && !info.android && !info.opera && !info.edge;
                    info.chromium = !!info.android;
                    info.ms = info.edge || info.msie;

                    return info;
                }());

            // Version
            for (var name in map) {
                var browser = map[name];

                map[name] = typeof browser === 'number' ? browser : NO_MATCHED;

                if (browser === true) {
                    var matches,
                        patterns = {
                            mozilla: /mozilla[ \/]([\w.]+)/,
                            webkit: /webkit[ \/]([\w.]+)/,
                            gecko: /gecko[ \/]([\w.]+)/,
                            safari: /version[ \/]([\w.]+).*safari/,
                            chrome: /(?:chrome|crios)[ \/]([\w.]+)/,
                            chromium: /(?:chrome|crios)[ \/]([\w.]+)/,
                            crios: /crios[ \/]([\w.]+)/,
                            firefox: /firefox[ \/]([\w.]+)/,
                            opera: /(?:opera|opr)(?:.*version)?[ \/]([\w.]+)/,
                            android: /(?:android)[ \/]([\w.]+)/,
                            konqueror: /konqueror[ \/]([\w.]+)/,
                            edge: /edge[ \/]([\w.]+)/
                        };

                    map[name] = KUNOW_VERSION;
                    if (patterns[name] && (matches = ua.match(patterns[name]))) {
                        map[name] = matches[1];
                    }
                }

                if (map[name] !== NO_MATCHED) {
                    map[name] = toVersion(map[name]);
                }
            }

            return map;
        }());
        return {
            ua: ua,
            os: os,
            device: device,
            browser: browser
        };
    }());

        $(function() {
            $(window).resize((function() {
                var root = $('html'),
                    msie = 'msie',
                    clientWidth = $(window).width(),
                    clientHeight = $(window).height()
                forcePcVersion = true;

                $.each($.extend({}, env.os, env.device, env.browser), function(name, value) {
                    value && root.addClass(name);
                    if (value === msie) {
                        root.addClass(msie + env.browser.version);
                    }
                });

                if (env.device.mobile || forcePcVersion) {
                    root.toggleClass('min-sm-size', clientWidth >= 768);
                    root.toggleClass('min-md-size', clientWidth >= 992);
                    root.toggleClass('min-lg-size', clientWidth >= 1200);
                    root.toggleClass('min-bg-size', clientWidth >= 1408);

					root.toggleClass('max-ss-size',  clientWidth <= 360);
                    root.toggleClass('max-xs-size',  clientWidth <= 480);
                    root.toggleClass('max-sm-size',  clientWidth <= 767);
                    root.toggleClass('max-md-size',  clientWidth <= 991);
                    root.toggleClass('max-lg-size',  clientWidth <= 1199);
                    root.toggleClass('max-bg-size',  clientWidth <= 1407);

                }

                return arguments.callee;
            }()));
        });
    }());