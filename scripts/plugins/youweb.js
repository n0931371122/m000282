/*!
 * Youweb
 * 
 * @version 5.0.0 2017/03/13 00:00
 * @author JOE <joe@youweb.tw>
 * @copyright (c) youweb.tw
 * @link http://youweb.tw/
 */

; ({
    library:
    [
        //***********************************************************************************************************************//
        // jQuery core
        //***********************************************************************************************************************//

        'jquery/jquery-3.1.1.js',
        '*#jquery/jquery-2.2.4.js',
        'jquery/jquery-1.12.4.js',
        'jquery/jquery-1.8.3.js',

        //***********************************************************************************************************************//
        // jQuery effect
        //***********************************************************************************************************************//

        'jquery/effects/effect.js',
        'jquery/effects/all.js',
        'jquery/effects/blind.js',
        'jquery/effects/bounce.js',
        'jquery/effects/clip.js',
        'jquery/effects/drop.js',
        'jquery/effects/explode.js',
        'jquery/effects/fade.js',
        'jquery/effects/fold.js',
        'jquery/effects/highlight.js',
        'jquery/effects/puff.js',
        'jquery/effects/pulsate.js',
        'jquery/effects/scale.js',
        'jquery/effects/shake.js',
        'jquery/effects/size.js',
        'jquery/effects/slide.js',
        'jquery/effects/transfer.js',

        //***********************************************************************************************************************//
        // jQuery UI
        //***********************************************************************************************************************//

        'jquery/ui/themes/base/all.css',
        'jquery/ui/ui.js',
        'jquery/ui/all.js',
        'jquery/ui/accordion.js',
        'jquery/ui/autocomplete.js',
        'jquery/ui/button.js',
        'jquery/ui/checkboxradio.js',
        'jquery/ui/controlgroup.js',
        'jquery/ui/datepicker.js',
        'jquery/ui/dialog.js',
        'jquery/ui/draggable.js',
        'jquery/ui/droppable.js',
        'jquery/ui/menu.js',
        'jquery/ui/progressbar.js',
        'jquery/ui/resizable.js',
        'jquery/ui/selectable.js',
        'jquery/ui/selectmenu.js',
        'jquery/ui/slider.js',
        'jquery/ui/sortable.js',
        'jquery/ui/spinner.js',
        'jquery/ui/tabs.js',
        'jquery/ui/tooltip.js',
        'jquery/ui/i18n/i18n.js',

        //***********************************************************************************************************************//
        // Third Party
        //***********************************************************************************************************************//

        'helper/helper.js',
        'turnjs/turn.js',
        'turnjs/turn.html4.js',
        'turnjs/zoom.js',
        'turnjs/turn.js',
        'turnjs/scissor.js',
        'turnjs/hash.js',
        'form/jquery.form.js',
        'validate/jquery.validate.js',

        //***********************************************************************************************************************//
        // GSAP
        //***********************************************************************************************************************//

        'gsap/TweenMax.js',
        'gsap/TweenLite.js',
        'gsap/TimelineMax.js',
        'gsap/TimelineLite.js',
        'gsap/easing/EasePack.js',
        'gsap/plugins/AttrPlugin.js',
        'gsap/plugins/BezierPlugin.js',
        'gsap/plugins/ColorPropsPlugin.js',
        'gsap/plugins/CSSPlugin.js',
        'gsap/plugins/CSSRulePlugin.js',
        'gsap/plugins/DirectionalRotationPlugin.js',
        'gsap/plugins/EaselPlugin.js',
        'gsap/plugins/RaphaelPlugin.js',
        'gsap/plugins/RoundPropsPlugin.js',
        'gsap/plugins/ScrollToPlugin.js',
        'gsap/plugins/TEMPLATE_Plugin.js',
        'gsap/plugins/TextPlugin.js',
        'gsap/plugins/ThrowPropsPlugin.js',
        'gsap/utils/Draggable.js',
        'gsap/utils/SplitText.js',
        'gsap/jquery.gsap.js',
    ],

    /**
     * 建構子
     *
     * @return object
     */
    construct: function () {
        var self = this, external = self, internal = {}, root = self;

        //***********************************************************************************************************************//
        // loader
        //***********************************************************************************************************************//

        external.loader =
        internal.loader =
        {
            /**
             * 建構子
             *
             * @todo Implements preload without execute
             * @return loader
             */
            construct: function () {
                var self = this, external = self, internal = {};

                /**
                 * 預設設定
                 *
                 * @var object
                 */
                internal.defaults = {
                    filename: 'youweb.js',
                    appname: 'data-app',
                    sync: true,
                    required: false,
                    complete: null,
                    success: null,
                    error: null,
                    perComplete: null,
                    perSuccess: null,
                    perError: null
                };

                /**
                 * 載入規則
                 *
                 * @var object
                 */
                internal.rules = {
                    oldIe: root.env.browser.msie <= 8,
                    notOldIe: (root.env.browser.msie <= 8) === false,
                    frontend: false,
                    backend: false,
                };

                /**
                 * 狀態標記
                 *
                 * @var object
                 */
                external.token =
                internal.token = {
                    ready: 0,
                    complete: 1,
                    success: 2,
                    error: 3,
                    notExists: 4
                },

                /**
                 * 預載清單
                 *
                 * @var object
                 */
                internal.preloads = [];

                /**
                 * 載入清單集合
                 *
                 * @var object
                 */
                internal.files = [];

                /**
                 * 已載入清單集合
                 *
                 * @var object
                 */
                internal.loaded = {};

                /**
                 * 工作清單集合
                 *
                 * @var object
                 */
                internal.todos = {};

                /**
                 * 處理程序集合
                 *
                 * @var object
                 */
                internal.processes = {};

                /**
                 * 擱置重複
                 *
                 * @var object
                 */
                internal.deferreds = {};

                /**
                 * 等候完成區
                 *
                 * @var object
                 */
                internal.waitings = {};

                /**
                 * 快取物件
                 *
                 * @var object
                 */
                internal.cache = {};

                /**
                 * 待命事件
                 *
                 * @param function callback
                 * @return void
                 */
                external.ready =
                internal.ready = function (callback) {
                    internal
                    .response(internal.preloads)
                    .complete(function (status) {
                        for (var i = 0, length = status.length; i < length; i++) {
                            if (status[i] > internal.token.success) {
                                return;
                            }
                        }
                        callback && callback.call(external);
                    });

                    return external;
                };

                /**
                 * 等待處理程序完成
                 *
                 * @param string|array process
                 * @param function callback
                 * @return void
                 */
                internal.wait = function (process, callback) {
                    var responses = [],
                        processes = (typeof (process) === 'string') ? [process] : process,
                        await = function (process) {
                            var callee = arguments.callee,
                                status = internal.processes[process],
                                isNotExists = (status === undefined),
                                isLoading = (status === internal.token.ready),
                                isCompleted = (status >= internal.token.complete);

                            if (isLoading) {
                                internal.waitings[process] = internal.waitings[process] || [];
                                internal.waitings[process].push(function () {
                                    callee(process);
                                });
                            }

                            else if (isCompleted || isNotExists) {
                                isNotExists && (status = internal.token.notExists);
                                responses.push(status);

                                if (responses.length >= processes.length) {
                                    var response = (responses.length > 1) ? responses : responses[0];
                                    callback && callback(response);
                                }
                            }
                        };

                    root.each(processes, function (i, process) {
                        await(process);
                    });

                    return external;
                };

                /**
                 * 回應器
                 *
                 * @param string|array|object process
                 * @return object
                 */
                external.response =
                internal.response = function (process) {

                    if (root.isArray(process)) {
                        root.each(process, function (i, p) {
                            if (typeof p === 'object' && p.process) {
                                process[i] = p.process;
                            }
                        });
                    }

                    return {
                        process: process,
                        complete: function (callback) {
                            var that = this;
                            internal.wait(process, function (status) {
                                callback && callback.call(that, status);
                            });
                            return this;
                        },
                        success: function (callback) {
                            var that = this;
                            return this.complete(function (status) {
                                var result = status;
                                if (root.isArray(result)) {
                                    result = result.join('').replace(new RegExp(internal.token.success, 'g'), '');
                                    result = result || internal.token.success;
                                }

                                (Number(result) === internal.token.success) && callback && callback.call(that, status);
                            });
                        },
                        error: function (callback) {
                            var that = this;
                            return this.complete(function (status) {
                                var result = status;
                                if (root.isArray(result)) {
                                    result = result.join('\n');
                                    var hasError = result.match(new RegExp('^' + internal.token.error + '$', 'm')),
                                        hasNotExists = result.match(new RegExp('^' + internal.token.notExists + '$', 'm'));
                                    result = (hasError || hasNotExists) && internal.token.error;
                                }
                                (Number(result) >= internal.token.error) && callback && callback.call(that, status);
                            });
                        }
                    };
                };

                /**
                 * 進度物件
                 *
                 * @todo 不支援多組
                 * @subpackage
                 */
                external.progress =
                internal.progress = (function () {
                    var callbacks = {}, markers = {};
                    return {
                        after: function (label, callback) {
                            if (!markers[label]) {
                                callbacks[label] = callbacks[label] || [];
                                callbacks[label].push(callback);
                            }
                            else callback && callback();
                        },
                        mark: function (label) {
                            if (callbacks[label]) {
                                var map = callbacks[label];
                                delete callbacks[label];
                                root.each(map, function (n, callback) {
                                    callback();
                                });
                            }
                            markers[label] = true;
                        }
                    };
                }());

                /**
                 * 動態戴入方法
                 *
                 * call( params ) 
                 * call( items [, params ] ) 
                 * call( items [, complete callback ] ) 
                 * call( items [, porcess id ] ) 
                 *
                 * @subpackage
                 */
                external.include =
                internal.include = (function () {
                    return {
                        path: function (items, params) {
                            return internal.load(
                                internal.buildParams({
                                    type: 'path',
                                    required: false,
                                    items: items,
                                    params: params
                                })
                            );
                        },
                        library: function (items, params) {
                            return internal.load(
                                internal.buildParams({
                                    type: 'library',
                                    required: false,
                                    items: items,
                                    params: params
                                })
                            );
                        }
                    };
                }());

                /**
                 * 直接戴入方法
                 *
                 * call( params ) 
                 * call( items [, params ] ) 
                 * call( items [, complete callback ] ) 
                 * call( items [, porcess id ] ) 
                 *
                 * @subpackage
                 */
                external.require =
                internal.require = (function () {
                    return {
                        path: function (items, params) {
                            return internal.load(
                                internal.buildParams({
                                    type: 'path',
                                    required: true,
                                    items: items,
                                    params: params
                                })
                            );
                        },
                        library: function (items, params) {
                            return internal.load(
                                internal.buildParams({
                                    type: 'library',
                                    required: true,
                                    items: items,
                                    params: params
                                })
                            );
                        }
                    };
                }());

                /**
                 * 已載入清單集合
                 *
                 * @return object
                 */
                external.getLoaded =
                internal.getLoaded = function () {
                    return internal.loaded;
                };

                /**
                 * 傳回函式庫路徑集合
                 *
                 * @param string|array library
                 * @return array
                 */
                external.fetch =
                internal.fetch = function (library) {
                    var keywords = root.isArray(library) ? library : String(library).split(/\s*,\s*/);

                    var map = null;
                    function getMatches(keyword) {
                        map = map || root.library.join('\n').replace(/^\*(?:\w*[\!#]+)?(?:\w+\|)?(.+)/gm, '$1');
                        return map.match(new RegExp('.*(' + root.quoteRegex(keyword) + ').*', 'gm'));
                    }

                    var paths = [];
                    root.each(keywords, function (i, keyword) {
                        var matches = getMatches(keyword);
                        root.each(matches, function (j, path) {
                            path = internal.buildUrl(path);
                            paths.push(path);
                        });
                    });

                    return paths;
                };

                /**
                 * 載入方法
                 *
                 * @param mixed options
                 * @return response
                 */
                external.load =
                internal.load = function (options)
                {
                    // extend
                    var settings = root.extend({}, internal.defaults, options);

                    // paths
                    var paths = settings.path || [];
                    if (settings.library) {
                        var library = internal.fetch(settings.library);
                        if (library) paths = paths.concat(library);
                        if (root.isArray(settings.library)) {
                            settings.library = settings.library.join(', ');
                        }
                    }

                    // process
                    var process = settings.id || settings.path || settings.library;
                    process = process || (Math.random() * (new Date()).getTime()).toFixed();

                    // callback
                    var callback = function (name) {
                        setTimeout(function () {
                            var args = Array.prototype.slice.call(arguments).slice(1);
                            root.callback.apply(settings, args.unshift(name) && args);
                        }, 0);
                    };

                    if ((paths = internal.push(paths))) {
                        internal.processes[process] = internal.token.ready;
                        var start = function () {
                            var completes = 0,
                                successes = 0,
                                errors = 0;

                            (function (loop) {
                                if (paths[loop]) {
                                    var that = this, callee = arguments.callee;

                                    // 擱置重複
                                    if (internal.loaded[paths[loop].path] === internal.token.ready) {
                                        internal.deferreds[paths[loop].path] = internal.deferreds[paths[loop].path] || [];
                                        internal.deferreds[paths[loop].path].push(function () { callee(loop); });
                                        return;
                                    }

                                    // 開始作業
                                    if (!internal.loaded.hasOwnProperty(paths[loop].path)) {
                                        internal.loaded[paths[loop].path] = internal.token.ready;
                                    }

                                    // 開始載入
                                    internal.createElement(paths[loop], function (isLoaded, path, type)
                                    {
                                        // 個別完成
                                        completes++;
                                        internal.loaded[path] = internal.token.complete;
                                        callback('perComplete', path, type);
                                        if (isLoaded === true) {
                                            successes++;
                                            internal.loaded[path] = internal.token.success;
                                            callback('perSuccess', path, type);
                                        }
                                        else if (isLoaded === false) {
                                            errors++;
                                            internal.loaded[path] = internal.token.error;
                                            callback('perError', path, type);
                                        }

                                        // 全部完成
                                        if (completes >= paths.length) {
                                            internal.processes[process] = internal.token.complete;
                                            callback('complete', completes);
                                            if (successes >= completes) {
                                                internal.processes[process] = internal.token.success;
                                                callback('success', successes);
                                            }
                                            else if (errors) {
                                                internal.processes[process] = internal.token.error;
                                                callback('error', errors);
                                            }
                                        }

                                        // 處理擱置重複
                                        if (internal.deferreds[path]) {
                                            var deferreds = internal.deferreds[path];
                                            delete internal.deferreds[path];
                                            root.each(deferreds, function (i, callback) {
                                                callback();
                                            });
                                        }

                                        // 處理等候回應
                                        if (internal.waitings[process]) {
                                            var waitings = internal.waitings[process];
                                            delete internal.waitings[process];
                                            root.each(waitings, function (i, callback) {
                                                callback();
                                            });
                                        }

                                        // 同步載入
                                        if (settings.sync === true) {
                                            callee.call(that, loop + 1);
                                        }

                                    }, settings);

                                    // 異步載入
                                    if (settings.sync === false) {
                                        callee.call(that, loop + 1);
                                    }
                                }
                            }(0));
                        };
                        
                        // Have missions
                        if (paths.length) {
                            if (settings.required) start();
                            // TODO: Do need setTimeout()?
                            // else setTimeout(start, 0);
                            else start();
                        }
                        // Empty if
                        else {
                            internal.processes[process] = internal.token.complete;
                            callback('complete', 0);
                        }
                    }

                    // Clear
                    internal.files = [];
                    internal.todos = {};
                    return internal.response(process);
                };

                /**
                 * 建立元素
                 *
                 * @param object file
                 * @param function callback
                 * @param object settings
                 * @param boolean
                 */
                internal.createElement = function (file, callback, settings) {
                    var isCssFile = internal.isCssFile(file.path + '.' + file.type),
                        container = document.querySelector('head') || document.body || document,
                        element = isCssFile ? internal.createCss(file.path) : internal.createJs(file.path),
                        onDone = function (isLoaded) {
                            callback && callback(isLoaded, file.path, file.type);
                        };

                    // 已載入直接完成
                    if (internal.loaded[file.path]) {
                        var token = internal.loaded[file.path], isLoaded;
                        if (token === internal.token.success) isLoaded = true;
                        if (token === internal.token.error) isLoaded = false;
                        return onDone(isLoaded);
                    }

                    // 阻塞模式
                    if (settings.required && !isCssFile) {
                        window.document.write(element.outerHTML);
                        return onDone(undefined);
                    }

                    // 動態載入
                    if (element.tagName.toLocaleLowerCase() === 'script') {
                        element.async = "async";

                        // For ancient browsers (IE8, IE7, IE6...older)
                        if (root.env.browser.msie <= 8) {
                            var done = false;
                            element.onreadystatechange = function () {
                                if (!done && /loaded|complete/.test(this.readyState)) {
                                    this.onreadystatechange = null;
                                    done = true;
                                    onDone(true);
                                }
                            };
                        }
                        // For modern browsers (IE9+, Firefox, Chrome, Safari, Opera)
                        else {
                            element.onload = function (e) {
                                this.onload = null;
                                onDone(true);
                            };

                            // Not support in Safari lower than v5 and Opera lower than v11.64
                            element.onerror = function (e) {
                                this.onerror = null;
                                onDone(false);
                            };
                        }

                        var scripts = container.getElementsByTagName('script');
                        if (scripts.length) {
                            var lastScript = scripts[scripts.length - 1];
                            lastScript.parentNode.insertBefore(element, lastScript.nextSibling);
                        }
                        else container.appendChild(element);
                    }
                    // CSS
                    else {

                        //TODO: Implements onload, onerror
                        var links = container.getElementsByTagName('link');
                        if (links.length) {
                            var lastLink = links[links.length - 1];
                            lastLink.parentNode.insertBefore(element, lastLink.nextSibling);
                        }
                        else container.appendChild(element);
                        onDone(true);
                    }
                };

                /**
                 * 建立 Javascript 元素
                 *
                 * @param string src
                 * @return object
                 */
                internal.createJs = function (src) {
                    var element = document.createElement('script');
                    element.setAttribute('src', src);
                    internal.isHtml5() || element.setAttribute('type', 'text/javascript');
                    return element;
                };

                /**
                 * 建立 CSS 元素
                 *
                 * @param string href
                 * @return object
                 */
                internal.createCss = function (href) {
                    var element = document.createElement('link');
                    element.setAttribute('href', href);
                    element.setAttribute('rel', 'stylesheet');
                    internal.isHtml5() || element.setAttribute('type', 'text/css');
                    return element;
                };

                /**
                 * 新增檔案
                 *
                 * @param string|array path
                 * @param string type
                 * @return array
                 */
                internal.push = function (path, type) {

                    var getType = function (path, type) {
                        var js = 'js', css = 'css';
                        type = type || (internal.isCssFile(path) ? css : js);
                        if (type !== js && type !== css) type = js;
                        return type;
                    };

                    if (path) {
                        if (typeof (path) === 'string') {
                            type = getType(path, type);
                            var todo = type + path;
                            if (!internal.todos[todo]) {
                                internal.files.push({ path: path, type: type });
                                internal.todos[todo] = 1;
                            }
                        }
                        // batch
                        else if (typeof (path) === 'object') {
                            var callee = arguments.callee;
                            root.each(path, function (i, path) {
                                if (typeof (path) === 'string') {
                                    callee.call(
                                        internal,
                                        path,
                                        getType(path, type)
                                    );
                                }
                                else if (typeof (path) === 'object') {
                                    if (path.path) {
                                        callee.call(
                                            internal,
                                            path.path,
                                            getType(path.path, path.type || type)
                                        );
                                    }
                                }
                            });
                        }
                    }
                    return internal.files;
                };

                /**
                 * 是否為 Javascript 檔案
                 *
                 * @param string path
                 * @param boolean
                 */
                external.isJsFile =
                internal.isJsFile = function (path) {
                    return (/.+\.js(e|on)?$/i.test(path));
                };

                /**
                 * 是否為 CSS 檔案
                 *
                 * @param string path
                 * @param boolean
                 */
                external.isCssFile =
                internal.isCssFile = function (path) {
                    return (/.+\.css$/i.test(path));
                };

                /**
                 * 傳回目前頁面是否為 HTML5
                 *
                 * @todo cache by self
                 * @return boolean
                 */
                internal.isHtml5 = function () {

                    if (internal.cache.hasOwnProperty('isHtml5')) {
                        return internal.cache.isHtml5;
                    }

                    return (internal.cache.isHtml5 = (function () {
                        if (document.doctype === null) {
                            return document.querySelector('meta[charset]') ? true : false;
                        }
                        var node = document.doctype
                            doctype = "<!DOCTYPE " + node.name + (node.publicId ? ' PUBLIC"' + node.publicId + '"' : '')
                                    + (!node.publicId && node.systemId ? ' SYSTEM' : '')
                                    + (node.systemId ? ' "' + node.systemId + '"' : '') + ">";
                        return doctype === '<!DOCTYPE html>';
                    })());
                };

                /**
                 * 傳回頁面父路徑
                 *
                 * @param string
                 */
                external.getPageParentPath =
                internal.getPageParentPath = function () {
                    return internal.getPagePath().match(/(.*)\/.+/)[1] || '';
                };

                /**
                 * 傳回頁面路徑
                 *
                 * @param string
                 */
                external.getPagePath =
                internal.getPagePath = function () {
                    var baseUrl, baseElement = document.querySelector('base');

                    if (baseElement && baseElement.href) {
                        baseUrl = baseElement.href;
                    }

                    if (!baseUrl) {
                        baseUrl = window.location.href
                            .replace(/\?.*/, '')
                            .replace(/#.*/, '');
                    }

                    baseUrl = baseUrl.replace(/^https?:\/\/[^\/]+/, '').replace(/\/$/, '');

                    return baseUrl;
                };

                /**
                 * 傳回腳本父路徑
                 *
                 * @param string
                 */
                external.getScriptPath =
                internal.getScriptPath = function (filename) {
                    var script, scripts;
                    if (!filename && (scripts = document.querySelectorAll('script'))) {
                        script = scripts[scripts.length - 1];
                    }
                    script || (script = document.querySelector('script[src$="' + filename + '"]'));
                    return script ? root.stringify(script.src.match(/.*\//)) : '';
                };

                /**
                 * 傳回函式庫根路徑
                 *
                 * @todo cache by self
                 * @param string
                 */
                external.getLibraryBaseUrl =
                internal.getLibraryBaseUrl = function () {
                    if (internal.cache.libraryBaseUrl) {
                        return internal.cache.libraryBaseUrl;
                    }

                    var libraryBaseUrl = root.env.server('commonBaseUrl')
                        || internal.getScriptPath(internal.defaults.filename)
                        || internal.getScriptPath();

                    if (!libraryBaseUrl) {
                        throw new Error('Canot detect the base URL of the library.');
                    }

                    libraryBaseUrl = libraryBaseUrl.replace(/^https?:\/\/[^\/]+/, '');
                    return (internal.cache.libraryBaseUrl = libraryBaseUrl);
                };

                /**
                 * 組合 URL
                 *
                 * @param string url
                 * @return string
                 */
                internal.buildUrl = function (url) {
                    if (!url.match(/^https?:\/\/.+$/i) && !url.match(/^\//)) {
                        var baseUrl = internal.getLibraryBaseUrl();
                        url = baseUrl.replace(/\/*$/, '/' + url);
                    }
                    return url;
                };

                /**
                 * 建立參數
                 *
                 * @param object need
                 * @return object
                 */
                internal.buildParams = function (need) {
                    if (root.isPlainObject(need.items)) {
                        need.params = need.items;
                        need.items = need.params.items;
                    }

                    var settings = {}, id, complete;
                    if (typeof (need.params) === 'string') id = need.params;
                    else if (typeof (need.params) === 'function') complete = need.params;
                    else if (typeof (need.params) === 'object') settings = root.extend({}, need.params);

                    if (id) settings.id = id;
                    if (complete) settings.complete = complete;

                    settings.required = need.required || false;
                    settings[need.type] = need.items || null;

                    return settings;
                };

                /**
                 * 初始化
                 *
                 * @return loader
                 */
                return (function ()
                {
                    // Only load for marked with * 
                    var matches = root.library.join('\n').match(/^\*.+/gm),
                        list = { require: [], include: [], special: [] };

                    // Parses the library.
                    root.each(matches, function (i, match) {
                        var info = {
                            initial: match,
                            path: match.replace(/^\*(?:\w*[\!#]+)?(?:\w+\|)?(.+)/, '$1'),
                            ruel: match.replace(/^\*(?:\w*[\!#]+)?(?:(\w+)\|)?.+/, '$1') || null,
                            group: match.replace(/^\*(?:(\w*)[\!#]+)?\w+\|?.+/, '$1') || null,
                            include: /^\*\w*#/.test(match),
                            special: /^\*\w*\!/.test(match),
                        };

                        if (info.ruel) {
                            if (!internal.rules.hasOwnProperty(info.ruel) ||
                                !internal.rules[info.ruel]) {
                                return true;
                            }
                        }

                        info.path = internal.buildUrl(info.path);
                        if (info.special) list.special.push(info);
                        else if (info.include) list.include.push(info);
                        else list.require.push(info.path);
                    });

                    // Loads the app if has set a data-app.
                    var script = document.querySelector('script[src$="' + internal.defaults.filename + '"]');
                    if (script) {
                        var app = script.getAttribute(internal.defaults.appname);
                        if (app) {
                            var page = internal.getPagePath(),
                                path = page + '/' + app;

                            internal.include.path(path);
                        }
                    }

                    // Include mode with the special.
                    root.each(['include', 'special'], function (index, type) {
                        var groups = {};
                        root.each(list[type], function (index, info) {
                            var process = 'init-' + type;
                            if (info.group) process += '-' + info.group;
                            groups[process] = groups[process] || [];
                            groups[process].push(info.path);

                            if (type != 'special'
                                && root.inArray(process, internal.preloads) < 0) {
                                internal.preloads.push(process);
                            }
                        });

                        root.each(groups, function (process, list) {
                            internal.include.path(list, process);
                        });
                    });

                    // Required mode.
                    if (list.require.length) {
                        var process = 'init-require';
                        internal.require.path(list.require, process);
                        internal.preloads.push(process);
                    }

                    return (delete this.construct) && this;
                }
                .call(this));
            }
        };

        //***********************************************************************************************************************//
        // preloader
        //***********************************************************************************************************************//

        external.preloader =
        internal.preloader = (function () {
            var unknowSize = 100000000,
                fakeToken = -999999999,
                instanceId = 0,
                instances = {},
                configs = {
                    urls: [],
                    lazy: 10,
                    precision: 2,
                    minimum: 100,
                    crossDomain: true,
                    accurate: false,
                    gather: true,
                    history: true,
                    workspace: document,
                    start: null,
                    complete: null,
                    progress: null,
                    watch: null,
                    empty: null,
                    need: null
                };

            /**
             * Preloader
             * 
             * @todo audio/video/crossDomain options
             * @params object options
             * @return Preloader
             */
            function Preloader(options) {
                var self = this,
                    external = self,
                    internal = {},
                    settings = youweb.extend({}, configs, options),
                    history = new root.memory('session', 'preloader'),
                    aborted = false,
                    requests = [],
                    timers = [],
                    reading = {},
                    details = {
                        all: 0,
                        complete: 0,
                        success: 0,
                        error: 0,
                        progress: 0,
                        size: 0,
                        loaded: 0,
                        fake: 0,
                    };

                /**
                 * Gathers
                 * 
                 * @param function callback
                 * @return void
                 */
                internal.gather = function (callback) {
                    var isReady = true,
                        connections = {},
                        found = {},
                        groups = {},
                        uris = [],
                        styleSheets = [],
                        images = document.images;

                    // Starting
                    youweb.each(document.styleSheets, {
                        callback: function (index, styleSheet) {
                            var isCrossedDomainSheet = false;

                            // 1. In the Webkit, the cssRules/rules will be null.
                            // 2. In the Firefox, will throw a security exception.
                            // 3. In the IE/Edge has not security issue.

                            try {
                                var rules = styleSheet.cssRules || styleSheet.rules;
                                isCrossedDomainSheet = !youweb.isSet(rules) && styleSheet.href
                            }
                            catch (ex) {
                                isCrossedDomainSheet = ex.name === 'SecurityError';
                            }

                            if (isCrossedDomainSheet) {
                                isReady = false;
                                request(styleSheet.href, ready);
                            }
                            else {
                                styleSheets.push(styleSheet);
                            }
                        },
                        complete: function () {
                            isReady && ready();
                        }
                    });

                    // Ready
                    function ready() {
                        youweb.each(styleSheets, function (index, styleSheet) {
                            parse(styleSheet);
                        });

                        var workspace = settings.workspace;
                        if (workspace) {
                            found = {}; uris = []; images = [];

                            if (workspace instanceof Document) {
                                workspace = 'html';
                            }

                            if (typeof workspace === 'string') {
                                workspace = document.querySelector(workspace);
                            }

                            if (workspace && workspace instanceof HTMLElement) {
                                var children = [].slice.call(workspace.querySelectorAll('*')),
                                    elements = [workspace].concat(children);

                                youweb.each(elements, function (index, element) {
                                    if (element instanceof HTMLImageElement) {
                                        images.push(element);
                                    }
                                    else {
                                        element.matches = element.matches
                                            || element.webkitMatchesSelector
                                            || element.mozMatchesSelector
                                            || element.msMatchesSelector
                                            || element.oMatchesSelector;

                                        youweb.each(groups, function (selector, group) {
                                            if (element.matches(selector)) {
                                                youweb.each(group, function (index, uri) {
                                                    if (!found[uri]) {
                                                        found[uri] = uri;
                                                        uris.push(uri);
                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                        }

                        youweb.each(images, function (index, image) {
                            var uri = image.src || image.getAttribute('data-src');

                            if (uri && !found[uri]) {
                                found[uri] = uri;
                                uris.push(uri);
                            }
                        });

                        if (groups.global && groups.global.length) {
                            youweb.each(groups.global.reverse(), function (index, uri) {
                                if (!found[uri]) {
                                    uris.unshift(uri);
                                }
                                else {
                                    var index = uris.indexOf(uri);
                                    if (index > -1) {
                                        uris.slice(index, 1);
                                        uris.unshift(uri);
                                    }
                                }
                            });
                        }

                        callback && callback(uris);
                    }

                    // Parse
                    function parse(styleSheet) {
                        var rules = styleSheet.cssRules || styleSheet.rules,
                            link = null;

                        youweb.each(rules, function (index, rule) {
                            var children = rule.styleSheet || (rule.cssRules ? rule : null);

                            if (children) {
                                return parse(children);
                            }

                            try {
                                var css = rule.cssText,
                                    selector = rule.selectorText,
                                    parent = styleSheet.parentStyleSheet,
                                    href = styleSheet.href || styleSheet.url || parent.href || parent.url,
                                    path = youweb.stringify(href).match(/(.*)\/.+/)[1] || '';

                                if (css.indexOf('url') > -1) {
                                    var pattern = /url\s*\(["']?([^"'\)]+)["']?\)/ig,
                                        matches = null,
                                        fonts = [],
                                        isFontRule = rule instanceof CSSFontFaceRule;

                                    while (matches = pattern.exec(css)) {
                                        var key = selector || 'global',
                                            uri = matches[1],
                                            isDataUri = /^data:/i.test(uri);

                                        if (!isDataUri) {

                                            // To absolute url.
                                            if (!/^https?:\/\/.+$/i.test(uri)) {
                                                link = link || document.createElement('a');
                                                link.href = path + '/' + uri;
                                                uri = link.href;
                                            }

                                            if (isFontRule) {
                                                fonts.push(uri);
                                                continue;
                                            }

                                            if (!found[uri]) {
                                                found[uri] = uri;
                                                uris.push(uri);
                                                groups[key] = groups[key] || [];
                                                groups[key].push(uri);
                                            }
                                        }
                                    }

                                    // Font detection
                                    if (fonts.length) {
                                        var os = youweb.env.os,
                                            browser = youweb.env.browser,
                                            isSupported = {
                                                eot: browser.msie >= 6,
                                                ttf: !(browser.msie < 9)
                                                    && !(browser.android < 2.2)
                                                    && !(browser.safari < 4.3  && os.ios),
                                                otf: !(browser.msie < 9)
                                                    && !(browser.android < 2.2)
                                                    && !(browser.safari < 4.3 && os.ios),
                                                woff: !(browser.msie < 9)
                                                    && !(browser.android < 4.4)
                                                    && !(browser.safari < 5.1),
                                                woff2: browser.edge >= 14
                                                    || browser.firefox >= 39
                                                    || browser.chrome >= 36
                                                    || browser.safari >= 10
                                                    || browser.opera >= 23
                                                    || browser.android >= 5,
                                                svg: browser.safari >= 3.2
                                                    || (browser.android >= 3 && browser.android <= 4.44)
                                            };

                                        youweb.each(fonts, function (index, font) {
                                            var uri = font.toLowerCase(),
                                                uriWithoutFlag = uri.replace(/[#].+$/, ''),
                                                uriWithoutSuffix = uri.replace(/[\?#].+$/, ''),
                                                extension = uriWithoutSuffix.split(/\./).pop();

                                            if (isSupported[extension]) {
                                                if (!found[uriWithoutFlag]) {
                                                    found[uriWithoutFlag] = uriWithoutFlag;
                                                    uris.push(uriWithoutFlag);
                                                    groups.global = groups.global || [];
                                                    groups.global.push(uriWithoutFlag);
                                                }
                                                return false;
                                            }
                                        });
                                    }
                                }
                            }
                            // IE has a access denied issue of the rule.cssText,
                            // So, we have to use a try/catch for catching this error.
                            catch (ex) { }
                        });
                    };

                    // Request
                    function request(url, callback) {

                        requests.push(connections[url] = download(url, {
                            response: 'text',
                            complete: function (event) {
                                connections[url] = event.target.status === 200;
                                onResponse.call(event.target);
                            }
                        }));

                        function onResponse() {
                            var isSuccess = connections[url],
                                response = this.responseText,
                                isAllLoaded = true;

                            if (isSuccess) {
                                var path = url.match(/(.*)\/.+/)[1] || '',
                                    pattern = /@import\s+url\s*\(["']?([^"'\)]+)["']?\);/ig,
                                    cssText = response.replace(pattern, '').trim(),
                                    matches = null,
                                    files = [];

                                while (matches = pattern.exec(response)) {
                                    var uri = youweb.stringify(matches[1]),
                                        file = /^https?:\/\/.+$/i.test(uri) ? uri : path + '/' + uri;

                                    files.push(file);
                                }

                                if (cssText) {
                                    var style = document.createElement('style'),
                                        wrap = document.querySelector('head')
                                            || document.body
                                            || document;

                                    style.innerHTML = cssText;
                                    wrap.appendChild(style);

                                    style.sheet.url = url;
                                    styleSheets.push(style.sheet);
                                    style.remove();
                                }

                                youweb.each(files, function (index, file) {
                                    request(file, callback);
                                });
                            }

                            if (!isReady && youweb.isFunction(callback)) {
                                youweb.each(connections, function (i, request) {
                                    if (typeof request !== 'boolean') {
                                        return (isAllLoaded = false);
                                    }
                                });

                                if (isAllLoaded) {
                                    isReady = true;
                                    callback(styleSheets);
                                }
                            }
                        };
                    };
                };

                /**
                 * Loads
                 * 
                 * @param string url
                 * @return void
                 */
                internal.load = function (url) {
                    var extension = root.stringify(root.url.getExtension(url)).toLowerCase() || url,
                        isFake = extension === fakeToken,
                        events = {
                            progress: function (event) {
                                var self = this,
                                    detailed = null,
                                    currently = reading[url] = event.loaded || unknowSize,
                                    loaded = Math.min(root.sum(reading), details.size),
                                    percent = loaded / details.size * 100,
                                    progress = root.float(percent, settings.precision),
                                    canCallback = progress > details.progress || !details.timestamp;

                                if (canCallback) {
                                    var now = new Date().getTime(),
                                        elapsed = now - (details.timestamp || now),
                                        lazy = details.timestamp ? settings.lazy - elapsed : 0;

                                    details.progress = progress;
                                    details.loaded = loaded;
                                    details.timestamp = now;
                                    details.lazy = details.lazy || 0;
                                    details.lazy = Math.max(details.lazy + lazy, 0);
                                    detailed = root.extend({url: url}, details);

                                    timers.push(setTimeout(function () {
                                        internal.trigger('progress', detailed);

                                        if (detailed.progress >= 100) {
                                            timers.push(setTimeout(function () {
                                                delete detailed.url;
                                                detailed.lazy = settings.lazy;
                                                internal.trigger('complete', detailed);
                                            }, settings.lazy));
                                        }
                                    }, details.lazy));
                                }
                            },
                            ready: function () {
                                details.size += unknowSize;
                            },
                            complete: function (event) {
                                details.complete++;

                                if (!isFake) {
                                    history.set(url, 1);

                                    event.url = url;
                                    event.result = event.type === 'load';
                                    internal.trigger('watch', event);
                                }
                            },
                            success: function (event) {
                                details.success++;
                            },
                            error: function (event) {
                                details.error++;
                                if (!isFake) history.set(url, 0);
                            }
                        };

                    // Is valid
                    if (!isFake && (!url || typeof url !== 'string')) {
                        return null;
                    }

                    // XHR Force
                    if (settings.accurate && !isFake) {
                        extension = Math.random();
                    }

                    // Detection
                    switch (extension)
                    {
                        // XHR
                        default:
                            return events.ready() || function xhr() {
                                requests.push(download(url, {
                                    response: 'arraybuffer',
                                    precision: settings.precision,
                                    progress: function (event) {
                                        if ( !arguments.callee.called) {
                                            arguments.callee.called = true;
                                            details.size -= unknowSize;
                                            details.size += event.total || unknowSize;
                                        }
                                        events.progress(event);
                                    },
                                    complete: function (event) {
                                        events.complete(event);

                                        // IE and Edge (or maybe others)
                                        // will not trigger the progress event when an error occurs.
                                        if (!this.progress.called) {
                                            events.progress(event);
                                        }
                                    },
                                    success: function (event) {
                                        events.success(event);
                                    },
                                    error: function (event) {
                                        events.error(event);
                                    }
                                }));
                            };

                        // Images
                        case 'jpg':
                        case 'jpeg':
                        case 'png':
                        case 'apng':
                        case 'gif':
                        case 'bmp':
                        case 'ico':
                        case 'webp':
                            return events.ready() || function image() {
                                var image = new Image(),
                                    unbind = function () {
                                        image.onload = image.onerror = null;
                                    };

                                image.onload = function (event) {
                                    unbind()
                                        || events.complete(event)
                                        || events.success(event)
                                        || events.progress(event);
                                };

                                image.onerror = function () {
                                    unbind()
                                        || events.complete(event)
                                        || events.error(event)
                                        || events.progress(event);
                                };

                                image.src = url;
                                requests.push(image);
                            };

                        // Fakes
                        case fakeToken:
                            return events.ready() || function fake() {
                                var event = {type: 'load'},
                                    faked = 'fake://' + Math.random().toString().substring(2);

                                url = faked;
                                details.fake++;
                                events.complete(event)
                                events.success(event)
                                events.progress(event);
                            };
                    }
                };

                /**
                 * IsNotLocalHostUrl
                 *
                 * @param string url
                 * @return boolean
                 */
                internal.isNotLocalHostUrl = function (url) {
                    url = String(url).replace(/^\s+|\s+$/g, '');
                    if (/^\w+:\/\/.+\..+/i.test(url)) {
                        var host = root.quoteRegex(window.location.hostname),
                            port = window.location.port;

                        if (!port) {
                            if (window.location.protocol === 'http:') port = root.url.DEFAULT_PORT_HTTP;
                            if (window.location.protocol === 'https:') port = root.url.DEFAULT_PORT_HTTPS;
                        }

                        // Check the host
                        if (!(new RegExp('^https?\\://(.+\\:.+@)?(www\\.)?' + host + '[^\\w\\.]', 'i')).test(url)) {
                            return true;
                        }
                        // Check the port 
                        else {
                            var withPortRegex = new RegExp(host + '\\:\\d+', 'i'),
                                currentPortRegex = new RegExp(host + '\\:' + port + '[^\\d]', 'i');

                            // Standard port
                            if (port === root.url.DEFAULT_PORT_HTTP || port === root.url.DEFAULT_PORT_HTTPS) {
                                if (withPortRegex.test(url) && !currentPortRegex.test(url)) {
                                    return true;
                                }
                            }
                            // Other ports
                            else {
                                if (!currentPortRegex.test(url)) {
                                    return true;
                                }
                            }
                        }
                    }
                    return false;
                };

                /**
                 * Abort
                 * 
                 * @return Preloader
                 */
                external.abort =
                internal.abort = function () {
                    aborted = true;

                    setTimeout(function () {
                        root.each(requests, function (index, request) {
                            if (request instanceof XMLHttpRequest) {
                                request.abort();
                                request.onload
                                    = request.onloadstart
                                    = request.onloadend
                                    = request.onerror
                                    = request.onreadystatechange
                                    = request.onprogress
                                    = request.ontimeout
                                    = request.onabort = null;
                            }
                            else if (request instanceof Image) {
                                request.src = '';
                                request.onload
                                    = request.onerror
                                    = request.onabort = null;
                            }
                        });
                    });

                    setTimeout(function () {
                        root.each(timers, function (index, timer) {
                            clearTimeout(timer);
                        });
                    });

                    internal.trigger('aborted', { type: 'aborted' });
                    return this;
                };

                /**
                 * Trigger
                 * 
                 * @return void
                 */
                internal.trigger = function () {
                    if (arguments.length) {
                        var args = args = Array.prototype.slice.call(arguments),
                            type = args[0],
                            params = args.slice(1);

                        if (settings && settings[type]) {
                            settings[type].apply(external, params);
                            return true;
                        }
                    }
                    return false;
                };

                /**
                 * Starts
                 * 
                 * @return void
                 */
                internal.start = function (gathered) {
                    var queues = [],
                        urls = [];

                    if (gathered) {
                        urls = urls.concat(gathered);
                    }

                    if (typeof settings.urls === 'object') {
                        var values = root.toArray(settings.urls);
                        values = root.toUnique(values);
                        urls = urls.concat(values);
                    }

                    root.each(urls, {
                        callback: function (index, url) {
                            if (!settings.history || !history.has(url)) {
                                var queue = internal.load(url);
                                if (queue) queues.push(queue);
                            }
                        },
                        complete: function () {
                            details.all = queues.length;

                            // Minimum
                            if (details.all && details.all < settings.minimum && settings.minimum) {
                                var padding = settings.minimum - details.all;

                                for (var index = 0; index < padding; index++) {
                                    var queue = internal.load(fakeToken);
                                    if (queue) queues.unshift(queue);
                                }

                                details.all = queues.length;
                            }

                            // Call the complete event if empty
                            if (!details.all) {
                                internal.trigger('empty', details);
                                internal.trigger('complete', details);
                            }
                            // Excute all the queues
                            else {

                                // Call the start event first
                                internal.trigger('start', details);

                                root.each(queues, function (index, queue) {
                                    setTimeout(queue);
                                });
                            }
                        },
                    });
                };

                /**
                 * Ready
                 * 
                 * @return void
                 */
                internal.ready = function () {
                    settings.gather
                        ? internal.gather(internal.start)
                        : internal.start();
                };

                /**
                 * Initialize
                 * 
                 * @return void
                 */
                internal.initialize = !function () {
                    external.settings = settings;
                    external.details = details;
                    youweb.helper.ready(function () {
                        internal.ready();
                    });
                }();
            }

            /**
             * Downloads
             * 
             * @params string url
             * @params object options
             * @return XMLHttpRequest
             */
            function download(url, options) {
                var settings, events, xhr;

                // URL as options
                if (root.isPlainObject(url)) {
                    options = root.extend({}, url);
                    url = options.url;
                }

                // Options as callback
                if (root.isFunction(options)) {
                    options = { complete: options };
                }

                // Settings
                settings = $.extend({
                        method: 'GET',
                        response: 'blob',
                        timeout: 0,
                        precision: 0,
                        complete: null,
                        success: null,
                        error: null,
                        progress: null,
                        started: null,
                        aborted: null,
                        timeouted: null
                    }, options);

                // Events
                events = {
                    load: function (event) {
                        if (event.target.status !== 200) {
                            return xhr.onerror(event);
                        }

                        if (/blob/i.test(xhr.responseType)
                            && window.URL.createObjectURL) {
                            event.blob = URL.createObjectURL(this.response);
                        }

                        root.callback(settings, 'success', event);
                    },
                    start: function (event) {
                        root.callback.call(this, settings, 'started', event);
                    },
                    end: function (event) {
                        root.callback(settings, 'complete', event);
                    },
                    error: function (event) {
                        root.callback(settings, 'error', event);
                    },
                    progress: function (event) {
                        event.progress = root.float(event.loaded / event.total * 100, settings.precision);
                        root.callback(settings, 'progress', event);
                    },
                    abort: function (event) {
                        root.callback(settings, 'aborted', event);
                    },
                    timeout: function (event) {
                        root.callback(settings, 'timeouted', event);
                    }
                };

                // Request
                xhr = new XMLHttpRequest();
                xhr.open(settings.method, url);
                xhr.responseType = settings.response;
                xhr.timeout = settings.timeout;
                xhr.onloadstart = events.start;
                xhr.onloadend = events.end;
                xhr.onload = events.load;
                xhr.onerror = events.error;
                xhr.onprogress = events.progress;
                xhr.onabort = events.abort;
                xhr.ontimeout = events.timeout;
                xhr.send();

                return xhr;
            }

            /**
             * Gets the instance
             * 
             * @params mixed id
             * @return Preloader
             */
            function get(id) {
                return id ? instances[id] : instances;
            }

            /**
             * Initialize
             * 
             * @params object options
             * @return Preloader
             */
            function init(options) {
                options = options || {};

                var instance = new Preloader(options),
                    id = options.id || instanceId;

                instances[id] = instance;
                instanceId++;

                return instance;
            }

            /**
             * Public methods
             */
            return {
                download: download,
                get: get,
                init: init,
            };
        })();

        //***********************************************************************************************************************//
        // history
        //***********************************************************************************************************************//

        external.history =
        internal.history =
        {
            /**#@+
             * 事件表
             * const string
             */
            EVENT_CHANGE: 'history.change',
            EVENT_CHANGE_INTERNAL: 'history.change.internal',
            EVENT_CHANGE_EXTERNAL: 'history.change.external',
            EVENT_TYPE_POPSTATE: 'popstate',
            EVENT_TYPE_HASH: 'hashchange',
            /**#@-*/

            /**
             * 建構子
             *
             * @return history
             */
            construct: function () {
                var self = this, external = self, internal = { self: self };

                /**
                 * 狀態存放區
                 *
                 * @var object
                 */
                internal.states = {};

                /**
                 * 狀態支援
                 *
                 * @var boolean
                 */
                internal.isSupportState = !!(window.history && window.history.pushState);

                /**
                 * 初始頁面的 URL
                 *
                 * @var string
                 */
                internal.initialURL = location.href;

                /**
                 * 傳回/設定標題
                 *
                 * @param string title
                 * @param integer insert
                 * @param string delimiter
                 * @param boolean space
                 * @return mixed
                 */
                external.title =
                internal.title = function (title, insert, delimiter, space) {

                    if (title === undefined) {
                        return document.title;
                    }

                    // 以物件傳入參數
                    // TODO: Need to clone it?
                    if (root.isPlainObject(title)) {
                        space = title.space;
                        delimiter = title.delimiter;
                        insert = title.insert;
                        title = title.title;
                    }

                    title = root.stringify(title);
                    insert = parseInt(root.ifSet(insert, 0));
                    delimiter = root.ifSet(delimiter, '-');
                    space = root.ifSet(space, true);

                    if (insert !== 0) {
                        var splitRegExp = new RegExp('\\s*' + delimiter + '\\s*'),
                            currentTitle = root.stringify(document.title),
                            parts = currentTitle ? currentTitle.split(splitRegExp) : [],
                            preserve = Math.abs(insert);

                        if (insert > 0) {
                            parts = parts.slice(0, preserve);
                            parts.push(title);
                        }

                        if (insert < 0) {
                            parts = parts.reverse().slice(0, preserve);
                            parts.push(title);
                            parts = parts.reverse();
                        }

                        if (space) {
                            delimiter = ' ' + delimiter + ' ';
                        }

                        for (var i = 0, max = parts.length, validParts = []; i < max; i++) {
                            parts[i] && validParts.push(parts[i]);
                        }

                        title = validParts.join(delimiter);
                    }

                    document.title = title;
                    return external;
                };

                /**
                 * 從 HASH 中傳回 URI 
                 *
                 * @param string uri
                 * @return string
                 */
                internal.getFragmentUri = function (uri) {
                    uri = root.stringify(uri || window.location.href);
                    var hash = root.url.getHash(uri), fragmentUri = '';
                    if (/^\!/.test(hash)) {
                        fragmentUri = hash.replace(/^\!/, '');
                    }
                    return fragmentUri;
                };

                /**
                 * 觸發方法
                 *
                 * @return object
                 */
                external.fire =
                internal.fire = function () {
                    internal.onAddressChange({
                        isForce: true,
                        isInternal: true,
                        type: internal.isSupportState
                            ? self.EVENT_TYPE_POPSTATE
                            : self.EVENT_TYPE_HASH,
                        state: {}
                    });
                    return external;
                };

                /**
                 * 導航方法
                 *
                 * @param mixed uri
                 * @param object state
                 * @return object
                 */
                external.navigate =
                internal.navigate = function (uri, state) {

                    uri = uri || '';
                    if (typeof uri === 'object' && root.isFunction(uri.toPath)) {
                        // TODO: Need to clone it?
                        uri = uri.toPath();
                    }

                    // Gets current port
                    function port(number) {
                        if (!number) {
                            var scheme = location.protocol;
                            if (/^https/.test(scheme)) {
                                number = root.url.DEFAULT_PORT_HTTPS;
                            } else if (/^http/.test(scheme)) {
                                number = root.url.DEFAULT_PORT_HTTP;
                            }
                        }
                        return root.stringify(number);
                    }

                    // Check host
                    var uriInfo = root.url.parse(uri);
                    if (/^https?\:\/\//.test(uri)
                        && (uriInfo.scheme + ':' !== location.protocol
                        || uriInfo.host !== location.hostname
                        || port(uriInfo.port) !== port(location.port))) {
                        return external;
                    }

                    // Build path
                    if (/^\//.test(uriInfo.path)) uri = uriInfo.path;
                    else if (uriInfo.path) {
                        var baseHref = root.getBaseHref(),
                            baseInfo = root.url.parse(baseHref),
                            baseUri = baseInfo.path || location.pathname,
                            parts = uriInfo.path.split(/\//);

                        uri = uriInfo.path;
                        root.each(parts, function (i, part) {
                            if (part === '.') return true;
                            else if (part === '..') baseUri = baseUri.replace(/\/[^\/]+$/, '');
                            else baseUri += '/' + part;
                        });

                        uri = baseUri;
                    }

                    // Build query
                    uri += uriInfo.query ? '?' + uriInfo.query : '';
                    var pathname = root.url.getRequestUri().replace(/\?.*$/, ''),
                        currentHref = location.search
                        ? pathname + '?' + location.search
                        : pathname;

                    // To navigate
                    if (uri && uri !== currentHref) {
                        state = root.ifSet(state, null);
                        if (internal.isSupportState) {
                            window.history.pushState(state, '', uri);
                            internal.onPopState.isInternal = true;
                            internal.onPopState({ type: self.EVENT_TYPE_POPSTATE, state: state });
                        }
                        else {
                            window.location.hash = '#!' + uri;
                            internal.onHashChange.isInternal = true;

                            // TODO: Not tested
                            internal.states[uri] = state;
                        }
                    }

                    return external;
                };

                /**
                 * 原生事件
                 *
                 * @param object event
                 * @return void
                 */
                internal.onHashChange =
                internal.onPopState = function (event) {
                    // Ignore some browsers fire on page load
                    arguments.callee.fire = (arguments.callee.fire || 0) + 1;
                    if (arguments.callee.fire === 1
                        && internal.initialURL === location.href) {
                        return;
                    }

                    // Event object
                    var eventObject = {
                        isInternal: Boolean(arguments.callee.isInternal)
                    };

                    // Hash change
                    if (event.type === self.EVENT_TYPE_HASH) {
                        var uri = internal.getFragmentUri(event.newURL);
                        eventObject.type = event.type;
                        eventObject.state = internal.states[uri];
                    }

                        // Pop State
                    else if (event.type === self.EVENT_TYPE_POPSTATE) {
                        eventObject.type = event.type;
                        eventObject.state = event.state;
                    }

                    // Trigger
                    arguments.callee.isInternal = false;
                    eventObject.state = eventObject.state || {};
                    internal.onAddressChange(eventObject);
                };

                /**
                 * 位址變更事件
                 *
                 * @param object event
                 * @return void
                 */
                internal.onAddressChange = function (event) {
                    event = event || {};
                    event = root.extend({
                        type: 'initial',
                        target: external,
                        isInternal: Boolean(event.isInternal),
                        isExternal: !Boolean(event.isInternal),
                        state: 'state' in window.history ? window.history.state : null
                    }, event);

                    // Event object
                    var eventObject = {
                        nativeType: event.type,
                        state: event.state,
                        isForce: event.isForce
                    };

                    // Trigger change event
                    root.event.trigger(
                        external.EVENT_CHANGE,
                        event.target,
                        root.extend({
                            isInternal: event.isInternal,
                            isExternal: event.isExternal
                        }, eventObject)
                    );

                    // Trigger internal and external event
                    root.event.trigger(
                        event.isInternal
                            ? external.EVENT_CHANGE_INTERNAL
                            : external.EVENT_CHANGE_EXTERNAL,
                        event.target,
                        root.extend({}, eventObject)
                    );
                };

                /**
                 * 變更事件
                 *
                 * @param object callback
                 * @return void
                 */
                external.change = function (callback) {
                    root.event.on(self.EVENT_CHANGE, callback);
                    return this;
                };

                /**
                 * 內部變更事件
                 *
                 * @param object callback
                 * @return void
                 */
                external.internalChange = function (callback) {
                    root.event.on(self.EVENT_CHANGE_INTERNAL, callback);
                    return this;
                };

                /**
                 * 外部變更事件
                 *
                 * @param object callback
                 * @return void
                 */
                external.externalChange = function (callback) {
                    root.event.on(self.EVENT_CHANGE_EXTERNAL, callback);
                    return this;
                };

                /**
                 * 初始化
                 *
                 * @return object
                 */
                return (function () {
                    // Redirect for fragment URI
                    if (!internal.isSupportState) {
                        var fragmentUri = internal.getFragmentUri();
                        if (fragmentUri) {
                            return window.location.replace(fragmentUri);
                        }
                    }

                    // Listen for native events
                    (function () {
                        var addEvent = function (type, listener) {
                            var oldIe = root.env.browser.msie <= 8,
                                listen = oldIe ? window.attachEvent : window.addEventListener;
                            type = oldIe ? 'on' + type : type;
                            listen(type, listener);
                        };

                        if (internal.isSupportState) {
                            addEvent('popstate', internal.onPopState);
                        } else {
                            addEvent('hashchange', internal.onHashChange);
                        }
                    }());

                    // Overriding root.url.getRequestUri()
                    root.url.getRequestUri = (function () {
                        var getRequestUri = root.url.getRequestUri;
                        return function (uri) {
                            var requestUri = getRequestUri(uri);

                            // Override from the hash value
                            if (!internal.isSupportState) {
                                var fragmentUri = internal.getFragmentUri(uri);
                                if (fragmentUri) requestUri = fragmentUri;
                            }
                            return requestUri;
                        };
                    }());

                    return (delete this.construct) && this;
                })
                .call(this);
            }
        };

        //***********************************************************************************************************************//
        // url
        //***********************************************************************************************************************//

        external.url =
        internal.url =
        {
            /**
             * 建構子
             *
             * @return url
             */
            construct: function () {
                var self = this, external = self, internal = {};

                /**#@+
                 * 標準連接埠
                 * const integer
                 */
                external.DEFAULT_PORT_HTTP = internal.DEFAULT_PORT_HTTP = 80;
                external.DEFAULT_PORT_HTTPS = internal.DEFAULT_PORT_HTTPS = 443;
                /**#@-*/

                /**
                 * 傳回參數
                 *
                 * @param object name
                 * @return string|object
                 */
                external.param =
                internal.param = function (name) {
                    var params = internal.query.construct().toArray();
                    return (name !== undefined) ? params[name] : params;
                };

                /**
                 * 解析 URL
                 *
                 * @param string url
                 * @return string
                 */
                external.parse =
                internal.parse = function (url) {
                    var key = ['source', 'scheme', 'authority', 'userInfo', 'user', 'pass', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'fragment'],
                        regex = /^(?:([^:\/?#]+):)?(?:\/\/()(?:(?:()(?:([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?()(?:(()(?:(?:[^?#\/]*\/)*)()(?:[^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                        match = regex.exec(url), uri = {}, i = 14;
                    while (i--) if (match[i]) uri[key[i]] = match[i];
                    delete uri.source;
                    return uri;
                };

                /**
                 * 還原 URL
                 *
                 * @param object part
                 * @return string
                 */
                external.build =
                internal.build = function (parts, ignoreStandardPort) {
                    var scheme = root.stringify(parts.scheme),
                        username = root.stringify(parts.username),
                        password = root.stringify(parts.password),
                        host = root.stringify(parts.host),
                        port = root.stringify(parts.port),
                        path = root.stringify(parts.path),
                        query = root.stringify(parts.query),
                        fragment = root.stringify(parts.fragment),
                        auth = null;

                    if (ignoreStandardPort) {
                        if (Number(port) === internal.DEFAULT_PORT_HTTP ||
                            Number(port) === internal.DEFAULT_PORT_HTTPS) port = null;
                    }

                    scheme = scheme.length > 0 ? scheme + '://' : '';
                    password = password.length > 0 ? ':' + password : '';
                    auth = username.length > 0 ? username + password + "@" : '';
                    port = port.length > 0 ? ':' + port : '';
                    path = path.length > 0 ? path.replace(/^([^\/])/, '/$1') : '';
                    query = query.length > 0 ? '?' + query : '';
                    fragment = fragment.length > 0 ? '#' + fragment : '';

                    return scheme + auth + host + port + path + query + fragment;
                };

                /**
                 * URL 編碼
                 *
                 * @param string str
                 * @return string
                 */
                external.encode =
                internal.encode = function (str) {
                    str = root.stringify(str);
                    return encodeURIComponent(str)
                    .replace(/!/g, '%21')
                    .replace(/'/g, '%27')
                    .replace(/\(/g, '%28')
                    .replace(/\)/g, '%29')
                    .replace(/\*/g, '%2A')
                    .replace(/%20/g, '+');
                };

                /**
                 * URL 解碼
                 *
                 * @param string str
                 * @return string
                 */
                external.decode =
                internal.decode = function (str) {
                    str = root.stringify(str).replace(/\+/g, '%20');
                    return decodeURIComponent(str);
                };

                /**
                 * URL 編碼 (RFC 3986)
                 *
                 * @param string str
                 * @return string
                 */
                external.rawencode =
                internal.rawencode = function (str) {
                    str = root.stringify(str);
                    return encodeURIComponent(str)
                    .replace(/!/g, '%21')
                    .replace(/'/g, '%27')
                    .replace(/\(/g, '%28')
                    .replace(/\)/g, '%29')
                    .replace(/\*/g, '%2A');
                };

                /**
                 * URL 解碼 (RFC 3986)
                 *
                 * @param string str
                 * @return string
                 */
                external.rawdecode =
                internal.rawdecode = function (str) {
                    str = root.stringify(str);
                    return decodeURIComponent(str);
                };

                /**
                 * 傳回 HASH
                 *
                 * @param string uri
                 * @return string
                 */
                external.getHash =
                internal.getHash = function (uri) {
                    uri = root.stringify(uri || window.location.href);
                    var match = uri.match(/#(.*)$/);
                    return match ? match[1] : '';
                };

                /**
                 * 傳回副檔名
                 *
                 * @param string uri
                 * @return string
                 */
                external.getExtension =
                internal.getExtension = function (uri) {
                    uri = internal.getRequestUri(uri) || '';
                    if (uri.indexOf('.') > -1) {
                        return uri.replace(/[\?#].+$/, '').split(/\./).pop();
                    }
                    return null;
                };

                /**
                 * 傳回請求 URI
                 *
                 * @param string uri
                 * @return string
                 */
                external.getRequestUri = 
                internal.getRequestUri = function (uri) {
                    uri = root.stringify(uri || window.location.href);
                    var requestUri = uri.replace(/^\w+\:\/\/[^\/]+/, '').replace(/#.*/, '');
                    return requestUri;
                };

                /**
                 * 傳回查詢字串
                 *
                 * @param string uri
                 * @return string
                 */
                external.getQueryString =
                internal.getQueryString = function (uri) {
                    uri = root.stringify(uri || external.getRequestUri());
                    var match = uri.match(/\?(.*)$/);
                    return match ? match[1] : '';
                };

                /**
                 * 查詢字串物件
                 *
                 * @subpackage
                 */
                external.query =
                internal.query = (function () {
                    var self = this, common = {};

                    /**
                     * 預設過濾內容
                     *
                     * @var array
                     */
                    common.filters = {};
                    return {
                        /**
                         * 從字串解析為陣列
                         *
                         * @param string str
                         * @return object
                         */
                        parse: function (str) {
                            var cache = (arguments.callee.cache = arguments.callee.cache || {}),
                                token = root.json.encode(Array.prototype.slice.call(arguments));
                            if (cache[token]) return root.json.clone(cache[token]);

                            var strArr = root.stringify(str).replace(/^&+|&+$/g, '').split('&'),
                                sal = strArr.length, i, j, ct, p, lastObj, obj, lastIter, undef, chr, tmp, key, value,
                                postLeftBracketPos, keys, keysLen, result = {};

                            for (i = 0; i < sal; i++) {
                                tmp = strArr[i].split('=');
                                key = self.decode(tmp[0]);
                                value = (tmp.length < 2) ? '' : self.decode(tmp[1]);

                                while (key.charAt(0) === ' ') {
                                    key = key.slice(1);
                                }
                                if (key.indexOf('\x00') > -1) {
                                    key = key.slice(0, key.indexOf('\x00'));
                                }
                                if (key && key.charAt(0) !== '[') {
                                    keys = [];
                                    postLeftBracketPos = 0;
                                    for (j = 0; j < key.length; j++) {
                                        if (key.charAt(j) === '[' && !postLeftBracketPos) {
                                            postLeftBracketPos = j + 1;
                                        }
                                        else if (key.charAt(j) === ']') {
                                            if (postLeftBracketPos) {
                                                if (!keys.length) {
                                                    keys.push(key.slice(0, postLeftBracketPos - 1));
                                                }
                                                keys.push(key.substr(postLeftBracketPos, j - postLeftBracketPos));
                                                postLeftBracketPos = 0;
                                                if (key.charAt(j + 1) !== '[') {
                                                    break;
                                                }
                                            }
                                        }
                                    }
                                    if (!keys.length) {
                                        keys = [key];
                                    }
                                    for (j = 0; j < keys[0].length; j++) {
                                        chr = keys[0].charAt(j);
                                        if (chr === ' ' || chr === '.' || chr === '[') {
                                            keys[0] = keys[0].substr(0, j) + '_' + keys[0].substr(j + 1);
                                        }
                                        if (chr === '[') {
                                            break;
                                        }
                                    }

                                    obj = result;
                                    for (j = 0, keysLen = keys.length; j < keysLen; j++) {
                                        key = keys[j].replace(/^['"]/, '').replace(/['"]$/, '');
                                        lastIter = j !== keys.length - 1;
                                        lastObj = obj;
                                        if ((key !== '' && key !== ' ') || j === 0) {
                                            if (obj[key] === undef) {
                                                obj[key] = {};
                                            }
                                            obj = obj[key];
                                        }
                                        else {
                                            ct = -1;
                                            for (p in obj) {
                                                if (obj.hasOwnProperty(p)) {
                                                    if (+p > ct && p.match(/^\d+$/g)) {
                                                        ct = +p;
                                                    }
                                                }
                                            }
                                            key = ct + 1;
                                        }
                                    }
                                    lastObj[key] = value;
                                }
                            }

                            return (cache[token] = root.json.clone(result)) && result;
                        },

                        /**
                         * 從陣列還原為字串
                         *
                         * @param object params
                         * @param string sparator
                         * @return string
                         */
                        build: function (params, separator) {
                            var cache = (arguments.callee.cache = arguments.callee.cache || {}),
                                token = root.json.encode(Array.prototype.slice.call(arguments));
                            if (cache[token]) return cache[token];

                            var value, key, tmp = [];
                            var helper = function (key, val, separator) {
                                var k, tmp = [];

                                if (val === true) {
                                    val = '1';
                                }
                                else if (val === false) {
                                    val = '0';
                                }

                                if (val !== null && typeof (val) === 'object') {
                                    for (k in val) {
                                        if (val[k] !== null) {
                                            tmp.push(arguments.callee(key + '[' + k + ']', val[k], separator));
                                        }
                                    }
                                    return tmp.join(separator);
                                }
                                else if (typeof (val) !== 'function') {
                                    return self.encode(key) + '=' + self.encode(val);
                                }
                                else {
                                    throw new Error('There was an error processing for query()');
                                }
                            };

                            if (!separator) {
                                separator = "&";
                            }

                            for (key in params) {
                                value = params[key];
                                tmp.push(helper(key, value, separator));
                            }

                            return (cache[token] = tmp.join(separator));
                        },

                        /**
                         * 修改
                         *
                         * @param string add
                         * @param string remove
                         * @param string original
                         * @return object
                         */
                        modify: function (add, remove, original) {

                            // 以物件傳入參數
                            // TODO: Need to clone it?
                            if (root.isPlainObject(add)) {
                                original = add.original;
                                remove = add.remove;
                                add = add.add;
                            }

                            // 若為靜態呼叫時自動建構新實體
                            var instance = !this.setQuery ? this.construct() : this;

                            if (root.isSet(original)) {
                                instance.setQuery(original);
                            }
                            instance.add(add);
                            instance.remove(remove);
                            return instance;
                        },

                        /**
                         * 設定預設過濾內容
                         *
                         * @param object|string $filter
                         * @param boolean $push
                         * @return array
                         */
                        filter: function (filter, push) {
                            var add = (typeof filter === 'object')
                                ? root.extend({}, filter)
                                : filter.split(/\s*,\s*/);

                            if (!push) common.filters = {};
                            return root.extend(common.filters, add);
                        },

                        /**
                         * 傳回原生的查詢內容
                         *
                         * @return string
                         */
                        getNativeQuery: function () {
                            return root.url.getQueryString();
                        },

                        /**
                         * 建構子
                         *
                         * @param string query
                         * @param string separator
                         * @return query
                         */
                        construct: function (query, separator) {
                            var self = this, external = root.extend({}, self), internal = {};

                            /**
                             * 分隔符號
                             *
                             * @var string
                             */
                            internal.separator = '&';

                            /**
                             * 查詢字串內容
                             *
                             * @var string
                             */
                            internal.query = '';

                            /**
                             * 新增
                             *
                             * @param string query
                             * @return object
                             */
                            external.add =
                            internal.add = function (query) {
                                if (query) {
                                    var original = internal.getFiltered(),
                                        addible = self.parse(query),
                                        params = root.extend(original, addible);

                                    internal.setQuery(self.build(params));
                                }
                                return external;
                            };

                            /**
                             * 移除
                             *
                             * @param string query
                             * @return object
                             */
                            external.remove =
                            internal.remove = function (query) {
                                if (query) {
                                    var original = internal.getFiltered(),
                                        removable = query.split(/\s*,\s*/);

                                    root.each(removable, function (i, name) {
                                        if (original.hasOwnProperty(name)) {
                                            delete original[name];
                                        }
                                    });

                                    internal.setQuery(self.build(original));
                                }
                                return external;
                            };

                            /**
                             * 傳回經過濾內容
                             *
                             * @return object
                             */
                            internal.getFiltered = function () {
                                var params = self.parse(internal.query);
                                root.each(common.filters, function (i, name) {
                                    if (name in params) {
                                        delete params[name];
                                    }
                                });
                                return params;
                            };

                            /**
                             * 以 URL 格式傳回
                             *
                             * @return string
                             */
                            external.toUrl =
                            internal.toUrl = self.toUrl || function () {
                                var url = window.location.href.replace(/\?.*|#.*$/, ''),
                                    query = internal.toString();

                                if (query) url += '?' + query;
                                return url;
                            };

                            /**
                             * 以路徑格式傳回
                             *
                             * @return string
                             */
                            external.toPath =
                            internal.toPath = function () {
                                var url = internal.toUrl(),
                                    base = window.location.href.replace(/(\w)\/.*$/, '$1'),
                                    path = url.replace(new RegExp('^' + root.quoteRegex(base)), '');
                                return path;
                            };

                            /**
                             * 以字串格式傳回
                             *
                             * @return array
                             */
                            external.toString =
                            internal.toString = function () {
                                return internal.getQuery();
                            };

                            /**
                             * 以陣列格式傳回
                             *
                             * @return array
                             */
                            external.toArray =
                            internal.toArray = function () {
                                return self.parse(internal.query);
                            };

                            /**
                             * 傳回查詢字串
                             *
                             * @param string name
                             * @return string
                             */
                            external.getQuery =
                            internal.getQuery = function (name) {
                                var params = internal.toArray();
                                if (name !== undefined) {
                                    return params[name];
                                }
                                return self.build(params, internal.separator);
                            };

                            /**
                             * 設定查詢字串
                             *
                             * @param mixed $value
                             * @return Query
                             */
                            external.setQuery =
                            internal.setQuery = function (value) {
                                var query = (typeof value === 'object')
                                    ? self.build(value)
                                    : root.stringify(value).replace(/^(.+)?\?(.+)/, '$2');

                                internal.query = query;
                                return external;
                            };

                            /**
                             * 傳回分隔符號
                             *
                             * @return string
                             */
                            external.getSeparator =
                            internal.getSeparator = function () {
                                return internal.separator;
                            };

                            /**
                             * 設定分隔符號
                             *
                             * @param string $value
                             * @return Query
                             */
                            external.setSeparator =
                            internal.setSeparator = function (value) {
                                internal.separator = value;
                                return external;
                            };

                            /**
                             * 初始化
                             *
                             * @return Query
                             */
                            return (function () {
                                if (root.isSet(separator)) internal.setSeparator(separator);
                                if (root.isSet(query)) internal.setQuery(query);
                                else internal.setQuery(self.getNativeQuery());
                                return external;
                            }
                            .call(this));
                        }
                    };
                }.call(this));

                /**
                 * 初始化
                 *
                 * @return object
                 */
                return (function () {
                    return (delete this.construct) && this;
                })
                .call(this);
            }
        };

        //***********************************************************************************************************************//
        // core
        //***********************************************************************************************************************//

        /**
         * Event
         *
         * @todo return false in listener?
         * @subpackage
         */
        external.event =
        internal.event = (function () {
            var events = {},
                history = {};

            return {
                has: function (type, listener) {
                    var self = this,
                        has = false;

                    if (events[type]) {
                        has = true;
                    }

                    if (has && listener) {
                        has = false;
                        root.each(events[type], function (index, event) {
                            if (listener === event.listener) {
                                has = true;
                                return false;
                            }
                        });
                    }

                    return has;
                },
                isFired: function () {
                    var args = Array.prototype.slice.call(arguments);
                    return this.isTriggered.apply(this, args);
                },
                // TODO: type as array
                isTriggered: function (type) {
                    return history[type] ? true : false;
                },
                on: function (type, listener, one) {

                    // TODO: 應該用空白
                    if (root.isArray(type)) {
                        var that = this, callee = arguments.callee;
                        root.each(type, function (i, n) {
                            callee.call(that, n, listener);
                        });
                    }
                    else {
                        events[type] = events[type] || [];
                        events[type].push({
                            listener: listener,
                            one: Boolean(one)
                        });
                    }

                    return this;
                },
                one: function (type, listener) {
                    return this.on(type, listener, true);
                },
                once: function () {
                    var args = Array.prototype.slice.call(arguments);
                    return this.one.apply(this, args);
                },
                off: function (type, listener) {

                    if (root.isArray(type)) {
                        var that = this, callee = arguments.callee;
                        root.each(type, function (i, n) {
                            callee.call(that, n, listener);
                        });
                    }
                    else {
                        if (events.hasOwnProperty(type)) {
                            if (root.isFunction(listener)) {
                                root.each(events[type], function (index, event) {
                                    if (listener === event.listener) {
                                        events[type].splice(index, 1);
                                    }
                                });
                            }
                            else delete events[type];
                        }
                    }

                    return this;
                },
                trigger: function (type, target, params) {

                    if (root.isArray(type)) {
                        var that = this, callee = arguments.callee;
                        root.each(type, function (i, n) {
                            callee.call(that, n, target, params);
                        });
                    }
                    else {
                        if (events.hasOwnProperty(type)) {
                            root.each(events[type], function (index, event) {

                                if (!root.isSet(event) || !root.isFunction(event.listener)) {
                                    return true;
                                }

                                if (event.one === true) {
                                    events[type].splice(index, 1);
                                }

                                target = internal.ifSet(target, window);
                                var eventObject = root.extend(params, (function () {
                                    var stopPropagation = false;
                                    return {
                                        type: type,
                                        target: target,
                                        stopPropagation: function () {
                                            stopPropagation = true;
                                        },
                                        isPropagationStopped: function () {
                                            return stopPropagation;
                                        }
                                    };
                                }()));

                                event.listener.call(target, eventObject);

                                if (eventObject.isPropagationStopped()) {
                                    return false;
                                }
                            });
                        }

                        history[type] = history[type] ? history[type] + 1 : 1;
                    }

                    return this;
                },
                fire: function () {
                    var args = Array.prototype.slice.call(arguments);
                    return this.trigger.apply(this, args);
                },
            };
        })();

        /**
         * JSON
         *
         * @todo 似乎不能 clone 包含 function 的物件
         * @subpackage
         */
        external.json =
        internal.json = {
            encode: function (obj) {
                return JSON.stringify(obj);
            },
            decode: function (string) {
                return JSON.parse(string);
            },
            clone: function (object) {
                return this.decode(this.encode(object));
            },
            parse: function (string, defaultValue) {
                var parsed = (defaultValue !== undefined) ? defaultValue : null;
                try { parsed = internal.json.decode(string); } catch (ex) { }
                return parsed;
            }
        };

        /**
         * Base64
         *
         * @subpackage
         */
        external.base64 =
        internal.base64 = {
            encode: function (data) {
                var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
                    o1, o2, o3, h1, h2, h3, h4, bits, r, i = 0, ac = 0, enc = '', temp = [];

                if (window.btoa) {
                    try {
                        return window.btoa(unescape(encodeURIComponent(data)));
                    } catch (ex) {
                        return data;
                    }
                } else if (!data) {
                    return data;
                }

                data = unescape(encodeURIComponent(data));

                do {
                    o1 = data.charCodeAt(i++);
                    o2 = data.charCodeAt(i++);
                    o3 = data.charCodeAt(i++);
                    bits = o1 << 16 | o2 << 8 | o3;
                    h1 = bits >> 18 & 0x3f;
                    h2 = bits >> 12 & 0x3f;
                    h3 = bits >> 6 & 0x3f;
                    h4 = bits & 0x3f;
                    temp[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
                }
                while (i < data.length);
                enc = temp.join('');
                r = data.length % 3;

                return (r ? enc.slice(0, r - 3) : enc) + '==='.slice(r || 3);
            },
            decode: function (data) {
                var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
                    o1, o2, o3, h1, h2, h3, h4, bits, i = 0, ac = 0, dec = '', temp = [];

                if (window.atobx) {
                    try {
                        return decodeURIComponent(escape(window.atob(data)));
                    } catch (ex) {
                        return data;
                    }
                } else if (!data) {
                    return data;
                }

                data += '';

                do {
                    h1 = b64.indexOf(data.charAt(i++));
                    h2 = b64.indexOf(data.charAt(i++));
                    h3 = b64.indexOf(data.charAt(i++));
                    h4 = b64.indexOf(data.charAt(i++));
                    bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;
                    o1 = bits >> 16 & 0xff;
                    o2 = bits >> 8 & 0xff;
                    o3 = bits & 0xff;

                    if (h3 == 64) {
                        temp[ac++] = String.fromCharCode(o1);
                    } else if (h4 == 64) {
                        temp[ac++] = String.fromCharCode(o1, o2);
                    } else {
                        temp[ac++] = String.fromCharCode(o1, o2, o3);
                    }
                }
                while (i < data.length);

                dec = temp.join('');
                return decodeURIComponent(escape(dec.replace(/\0+$/, '')));
            }
        };

        /**
         * Timer
         *
         * @subpackage
         */
        external.timer =
        internal.timer = {
            timeout: function (callback, delay) {
                return new (function (callback, delay) {
                    var timer, start, remaining = delay, terminated = false;

                    this.stop = function () {
                        if (!terminated) {
                            clearTimeout(timer);
                            terminated = true;
                        }
                    };

                    this.pause = function () {
                        if (!terminated) {
                            clearTimeout(timer);
                            remaining -= new Date() - start;
                        }
                    };

                    this.resume = function () {
                        if (!terminated) {
                            clearTimeout(timer);
                            start = new Date();
                            timer = setTimeout(function () {
                                terminated = true;
                                callback();
                            }, remaining);
                        }
                    };

                    this.resume();

                })(callback, delay);
            },
            // TODO: Not tested
            interval: function (callback, tick) {
                return new (function (callback, tick) {
                    var timer, start, remaining = tick;
                    this.clear = function () {
                        clearInterval(timer);
                    };
                    this.pause = function () {
                        this.clear();
                        remaining -= new Date() - start;
                    };
                    this.resume = function () {
                        start = new Date();
                        timer = setInterval(callback, remaining);
                    };
                    this.resume();
                })(callback, tick);
            }
        };

        /*
         * Memory
         *
         * @todo cookie
         * @param string type
         * @param string namespace
         * @return object
         */
        external.memory =
        internal.memory = function (type, namespace) {
            var self = this,
                defaulType = 'session',
                type = internal.stringify(type || defaulType).toLowerCase() + 'Storage',
                namespace = namespace || document.location.hostname,
                // namespace = Math.random(),
                storage = {};

            self.has = function (key) {
                return (key in storage);
            };

            self.get = function (key) {
                return key ? storage[key] : storage;
            };

            self.set = function (key, value) {
                storage[key] = value;
                return update(storage);
            };

            self.remove = function (key) {
                delete storage[key];
                return update(storage);
            };

            self.clear = function (key) {
                storage = {};
                return update(storage);
            };

            self.destroy = function (key) {
                try {
                    if (window[type]) {
                        window[type].removeItem(namespace);
                    }
                }
                finally {
                    return self;
                }
            };

            function update(content) {
                try {
                    if (window[type]) {
                        window[type].setItem(namespace, internal.json.encode(content));
                    }
                }
                finally {
                    return self;
                }
            }

            try {
                if (window[type]) {
                    storage = internal.json.parse(window[type].getItem(namespace)) || {};
                }
            }
            catch (ex) { }
        };

        /**
         * 回呼器
         *
         * callback(context, member)
         * callback(context, member, arg1, arg2...)
         * callback.call(context, member)
         * callback.apply(context, args)
         *
         * @param object context
         * @param string member
         * @param mixed  arg1 [, object $argN... ]
         * @return mixed
         */
        external.callback =
        internal.callback = function (context, member) {
            var returned;

            if (typeof context === 'string') {
                member = context;
                context = this;
            }

            if (typeof context === 'object'
                && typeof member === 'string') {

                if (member in context
                    && internal.isFunction(context[member])) {
                    var args = Array.prototype.slice.call(arguments).slice(2);
                    returned = context[member].apply(context, args);
                }
            }

            return returned;
        };

        /**
         * 迭代器
         *
         * @todo 新增 start 起始點參數
         * @param object|array obj
         * @param function callback
         * @param object options
         * @return object
         */
        external.each =
        internal.each = function (obj, callback, options) {
            var returned,
                isArrayLike = internal.isArrayLike(obj),
                options = internal.ifSet(options, {});

            if (typeof callback === 'object') {
                options = callback;
                callback = options.callback;
            }

            if (typeof options === 'number') {
                options = { delay: options };
            }

            if (typeof options === 'function') {
                options = { complete: options };
            }

            if (internal.isSet(options.delay)
                || internal.isSet(options.batch)) {
                var map = [],
                    count = 0,
                    settings = root.extend({
                        delay: 0,
                        batch: 1,
                        complete: null
                    }, options);

                if (isArrayLike) {
                    map = obj;
                    count = map.length;
                }
                else if (Object.keys) {
                    map = Object.keys(obj);
                    count = map.length;
                }
                else {
                    internal.each(obj, function (key) {
                        map.push(key);
                        count++;
                    });
                }

                (function (map, start) {
                    for (
                        var callee = arguments.callee, times = 1, index = (start = start || 0);
                        index < count;
                        index++, times++) {

                        // Callback
                        var key = isArrayLike ? index : map[index], val = obj[key];
                        if (callback.call(val, key, val) === false) break;

                        // Complete
                        if ((index + 1) === count) {
                            internal.callback(settings, 'complete');
                        }

                        // Batch
                        if (options.delay > 0 && times >= settings.batch) {
                            setTimeout(function () {
                                callee(map, index + 1);
                            }, options.delay);
                            break;
                        }
                    }

                    // Complete
                    if (count === 0) {
                        internal.callback(settings, 'complete');
                    }

                }(map));
            }
            else if (isArrayLike) {
                for (var i = 0, max = obj.length; i < max; i++) {
                    returned = callback.call(obj[i], i, obj[i]);
                    if (returned === false) break;
                }

                internal.callback(options, 'complete');
            }
            else {
                for (var k in obj) {
                    returned = callback.call(obj[k], k, obj[k]);
                    if (returned === false) break;
                }

                internal.callback(options, 'complete');
            }

            return obj;
        };

        /**
         * 物件繼承
         *
         * 參數 target 以傳址方式將會同步修改，若將之傳入空白物件 {} 將得到全新複製。
         *
         * extend( [deep ], target, object1 [, objectN ] ) 
         * extend( target [, object1 ] [, objectN ] ) 
         *
         * @param boolean deep     遞迴合併 !OPTIONAL 
         * @param object  target   目標承接物件
         * @param mixed   object1 [, object $objectN... ]
         * @return object
         */
        external.extend =
        internal.extend = function () {
            var src, copyIsArray, copy, name, options, clone,
                target = arguments[0] || {},
                i = 1,
                length = arguments.length,
                deep = false;

            // Handle a deep copy situation
            if (typeof target === 'boolean') {
                deep = target;
                target = arguments[1] || {};
                // skip the boolean and the target
                i = 2;
            }

            // Handle case when target is a string or something (possible in deep copy)
            if (typeof target !== 'object' && !internal.isFunction(target)) {
                target = {};
            }

            // extend the root itself if only one argument is passed
            if (length === i) {
                target = external;
                --i;
            }

            for (; i < length; i++) {
                // Only deal with non-null/undefined values
                if (root.isSet((options = arguments[i]))) {
                    // Extend the base object
                    for (name in options) {
                        src = target[name];
                        copy = options[name];

                        // Prevent never-ending loop
                        if (target === copy) {
                            continue;
                        }

                        // Recurse if we're merging plain objects or arrays
                        if (deep && copy && (internal.isPlainObject(copy) || (copyIsArray = internal.isArray(copy)))) {
                            if (copyIsArray) {
                                copyIsArray = false;
                                clone = src && internal.isArray(src) ? src : [];

                            } else {
                                clone = src && internal.isPlainObject(src) ? src : {};
                            }

                            // Never move original objects, clone them
                            target[name] = arguments.callee(deep, clone, copy);

                            // Don't bring in undefined values
                        } else if (copy !== undefined) {
                            target[name] = copy;
                        }
                    }
                }
            }

            // Return the modified object
            return target;
        };

        /**
         * 計數物件成員數
         *
         * @param object|array obj
         * @param boolean ownPropertyCheck
         * @return void
         */
        external.count =
        internal.count = function (obj, ownPropertyCheck) {
            if (typeof obj === 'object') {

                if (internal.isArrayLike(obj)) {
                    return obj.length;
                }

                if (!ownPropertyCheck && Object.keys) {
                    return Object.keys(obj).length;
                }

                var size = 0;
                for (var key in obj) {
                    if (ownPropertyCheck) {
                        if (obj.hasOwnProperty(key)) {
                            size++;
                        }
                    }
                    else size++;
                }
                return size;
            }
            return 0;
        };

        /**
         * 字串化
         *
         * @param mixed value
         * @return string
         */
        external.string =
        internal.string = function (value) {
            value = internal.isSet(value) ? value : '';
            return String(value);
        };

        /**
         * 字串化
         *
         * @see internal.string()
         */
        external.stringify =
        internal.stringify = function (value) {
            return internal.string(value);
        };

        /**
         * 整數化
         *
         * @param mixed value
         * @return integer
         */
        external.integer =
        internal.integer = function (value) {
            return parseInt(value, 10) || 0;
        };

        /**
         * 浮點數化
         *
         * @param mixed value
         * @param mixed precision
         * @return float
         */
        external.float =
        internal.float = function (value, precision) {
            var float = parseFloat(value) || 0;

            if (typeof precision === 'number') {
                float = parseFloat(float.toFixed(precision));
            }

            return float;
        };

        /**
         * 整數化
         *
         * @see internal.integer()
         */
        external.integerify =
        internal.integerify = function (value) {
            return internal.integer(value);
        };

        /**
         * 傳回其中一個參數
         *
         * @param mixed a
         * @param mixed b
         * @return mixed
         */
        external.ifBlank =
        internal.ifBlank = function (a, b) {
            return root.isBlank(a) ? a : b;
        };

        /**
         * 傳回其中一個參數
         *
         * @param mixed a
         * @param mixed b
         * @return mixed
         */
        external.ifEmpty =
        internal.ifEmpty = function (a, b) {
            return root.isEmpty(a) ? a : b;
        };

        /**
         * 傳回其中一個參數
         *
         * @param mixed a
         * @param mixed b
         * @return mixed
         */
        external.ifSet =
        internal.ifSet = function (a, b) {
            return root.isSet(a) ? a : b;
        };

        /**
         * 斷言
         *
         * @todo 
         * @param mixed a
         * @param mixed b
         * @param mixed c
         * @return mixed
         */
        external.if =
        internal.if = function (a, b, c) {
            //return root.isSet(a) ? a : b;
        };

        /**
         * 斷言
         *
         * @todo 
         * @param mixed a
         * @param mixed b
         * @return mixed
         */
        external.assert =
        internal.assert = function (a, b) {
            //return root.isSet(a) ? a : b;
        };

        /**
         * 傳回內容是否為 true 
         * 
         * 滿足以下條件
         * boolean: true, integer: 1, string: 1/true/y/yes/on
         *
         * @param mixed val
         * @return boolean
         */
        external.isTrue =
        internal.isTrue = function (val) {
            if (val === true || val === 1) return true;
            return (/^(1|true|y|yes|on)$/i).test(val);
        };

        /**
         * 傳回內容是否為 false
         * 
         * 滿足以下條件
         * boolean: false, integer: 0, string: 0/false/n/no/off
         *
         * @param mixed val
         * @return boolean
         *
         */
        external.isFalse =
        internal.isFalse = function (val) {
            if (val === false || val === 0) return true;
            return (/^(0|false|n|no|off)$/i).test(val);
        };

        /**
         * 傳回是否為空值
         * 
         * 此方法與 internal.isEmpty() 相同，
         * 但不包含數字為 0 的變數。
         *
         * @param mixed value
         * @return boolean
         */
        external.isBlank =
        internal.isBlank = function (value) {
            return (internal.isEmpty(value) && String(value) !== '0');
        };

        /**
         * 傳回是否為空值
         *
         * @param mixed value
         * @param boolean ownPropertyCheck
         * @return boolean
         */
        external.isEmpty =
        internal.isEmpty = function (value, ownPropertyCheck) {
            var emptyValues = [undefined, null, false, 0, '', '0'];
            for (var i = 0, max = emptyValues.length; i < max; i++) {
                if (value === emptyValues[i]) {
                    return true;
                }
            }

            if (typeof value === 'object') {
                for (var key in value) {
                    if (ownPropertyCheck) {
                        if (value.hasOwnProperty(key)) {
                            return false;
                        }
                    }
                    else return false;
                }
                return true;
            }
            return false;
        };

        /**
         * 傳回是否已設定
         *
         * @param mixed value
         * @return boolean
         */
        external.isSet =
        internal.isSet = function (value) {
            return (value !== undefined && value !== null);
        };

        /**
         * 傳回是否為類陣列
         *
         * isArrayLike([])                   > true
         * isArrayLike(arguments)            > true
         * isArrayLike('123'.match(/[0-9]/)) > true
         *
         * @param mixed value
         * @return boolean
         */
        external.isArrayLike =
        internal.isArrayLike = function (value) {
            if (internal.isSet(value)) {
                var length = value.length, type = internal.type(value);
                return type === 'array' || type !== 'function'
                    && (length === 0 || typeof length === 'number' && length > 0 && (length - 1) in value);
            }
            return false;
        };

        /**
         * 傳回是否為陣列
         *
         * @param mixed value
         * @return boolean
         */
        external.isArray =
        internal.isArray = function (value) {
            if (internal.isSet(value)) {
                if (Array.isArray) return Array.isArray(value);
                return internal.type(value) === 'array';
            }
            return false;
        };

        /**
         * 傳回是否為一般物件
         *
         * 一般物件定義為以實字 {} 或 new Object 建立者。
         *
         * @param mixed value
         * @return boolean
         */
        external.isPlainObject =
        internal.isPlainObject = function (value) {
            if (internal.isSet(value) && internal.type(value) === 'object') {
                var name = (/\W*function\s+([\w\$]+)\s*\(/).exec(value.constructor);
                return Boolean((name && name.length && name[1] === 'Object'));
            }
            return false;
        };

        /**
         * 傳回是否為函式
         *
         * @param mixed value
         * @return boolean
         */
        external.isFunction =
        internal.isFunction = function (value) {
            return internal.isType(value, 'function');
        };

        /**
         * 傳回是否為指定類型
         *
         * @param mixed value
         * @return boolean
         */
        external.isType =
        internal.isType = function (value, type) {
            var detected = internal.type(value),
                types = internal.stringify(type).split(/\s*,\s*/),
                matched = false;

            internal.each(types, function (i, type) {
                if (detected === type) {
                    matched = true;
                    return false;
                }
            });

            return matched;
        };

        /**
         * 傳回物件類型
         *
         * 此方法不同於 typeof，而是傳回物件實體類型。並且永遠是小寫字母。
         *
         * type(null)         > null
         * type(undefined)    > undefined
         * type(true)         > boolean
         * type(123)          > number
         * type('123')        > string
         * type(parsetInt)    > function
         * type([])           > array
         * type({})           > object
         * type(new Object()) > object
         * type(new Date())   > date
         * type(new Regexp()) > regexp
         * type(/[a-z]/)      > regexp
         *
         * @param mixed value
         * @return string
         */
        external.type =
        internal.type = function (value) {
            return Object.prototype.toString.call(value)
                .replace(/\[object\x20(\w+)\]$/i, '$1')
                .toLowerCase();
        };

        /**
         * 跳脫正規表達式特殊字元
         *
         * @param string str
         * @param string delimiter
         * @return string
         */
        external.quoteRegex =
        internal.quoteRegex = function (str, delimiter) {
            return root.stringify(str).replace(new RegExp('[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\' + (delimiter || '') + '-]', 'g'), '\\$&');
        };

        /**
         * 將字元的第一個字元轉為大寫字母
         *
         * @param string str
         * @return string
         */
        external.capitalize =
        internal.capitalize = function (str) {
            return root.stringify(str).replace(/^[a-z]/, function (first) {
                return first.toUpperCase();
            });
        };

        /**
         * 將字元的第一個字元轉為小寫字母
         *
         * @param string str
         * @return string
         */
        external.uncapitalize =
        internal.uncapitalize = function (str) {
            return root.stringify(str).replace(/^[A-Z]/, function (first) {
                return first.toLowerCase();
            });
        };

        /**
         * 轉換為大駝峰書寫
         *
         * @param str...
         * @return string
         */
        external.toUpperCamelCase =
        internal.toUpperCamelCase = function () {
            var text = '';
            sewii.each(arguments, function (i, arg) {
                text += internal.capitalize(arg);
            });
            return text;
        };

        /**
         * 轉換為小駝峰書寫
         *
         * @param str...
         * @return string
         */
        external.toLowerCamelCase =
        internal.toLowerCamelCase =
        external.toCamelCase =
        internal.toCamelCase = function () {
            var text = internal.toUpperCamelCase.apply(internal, arguments);
            return internal.uncapitalize(text);
        };

        /**
         * 去除字串前後的空白字元
         *
         * @param string str
         * @param string charlist
         * @return string
         */
        external.trim =
        internal.trim = function (str, charlist) {
            var whitespace, l = 0, i = 0;

            str = internal.stringify(str);

            if (str.trim && !internal.isSet(charlist)) {
                return str.trim();
            }

            if (!charlist) {
                whitespace = ' \n\r\t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000';
            } else {
                charlist += '';
                whitespace = charlist.replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, '$1');
            }

            l = str.length;
            for (i = 0; i < l; i++) {
                if (whitespace.indexOf(str.charAt(i)) === -1) {
                    str = str.substring(i);
                    break;
                }
            }

            l = str.length;
            for (i = l - 1; i >= 0; i--) {
                if (whitespace.indexOf(str.charAt(i)) === -1) {
                    str = str.substring(0, i + 1);
                    break;
                }
            }

            return whitespace.indexOf(str.charAt(0)) === -1 ? str : '';
        };

        /**
         * 截斷字串
         *
         * @param string text
         * @param intger max
         * @param string symbol
         * @param float offset
         * @return string
         */
        external.truncateText =
        internal.truncateText = function (text, max, symbol, offset) {
            text = internal.ifSet(text, '');
            max = internal.ifSet(max, 0);
            symbol = internal.ifSet(symbol, '...');
            offset = internal.ifSet(offset, 0.85);

            if (max > 0 && text) {
                var summary = text, length = max, hasChinese = /[\u4e00-\u9fa5]/.test(text);

                if (hasChinese) {
                    for (var i = 0; i < length; i++) {
                        if (text[i] && text[i].charCodeAt(0) > 128) {
                            length -= offset;
                        }
                    }
                }

                summary = text.substr(0, parseInt(length, 10));
                summary = summary + (summary != text ? symbol : '');
                return summary;
            }

            return text;
        };

        /**
         * 將整數補零
         *
         * @param intger number
         * @param intger length
         * @return boolean
         */
        external.padZero =
        internal.padZero = function (number, length) {
            return Array(Math.max(length - String(number).length + 1, 0)).join(0) + number;
        };

        /**
         * 搜尋陣列元素
         *
         * @param array array
         * @param mixed element
         * @return integer
         */
        external.inArray =
        internal.inArray = function (element, array, start) {
            if (internal.isArray(array)) {
                if (Array.prototype.indexOf) {
                    return array.indexOf.call(array, element, start);
                }

                var length = array.length;
                start = start ? start < 0 ? Math.max(0, length + start) : start : 0;

                for (; start < length; start++) {

                    // Skip accessing in sparse arrays
                    if (start in array && array[start] === element) {
                        return start;
                    }
                }
            }
            return -1;
        };

        /**
         * 將物件轉換為陣列
         *
         * @param array|arrayLike|object obj
         * @return array
         */
        external.toArray =
        internal.toArray = function (values) {
            var array = [];

            if (internal.isArray(values)) {
                array = values;
            }
            else if (internal.isArrayLike(values)) {
                array = Array.prototype.slice.call(values);
            }
            else if (internal.isPlainObject(values)) {
                array = Object.values
                    ? Object.values(values)
                    : array = Object.keys(values).map(function (key) {
                        return values[key];
                    });
            }

            return array;
        };

        /**
         * 去除重複的陣列元素
         *
         * @param array
         * @return array
         */
        external.toUnique =
        internal.toUnique = function (values) {
            return values.filter(function (value, index, self) {
                return self.indexOf(value) === index;
            });
        };

        /**
         * 傳回隨機數字
         *
         * @param integer min
         * @param integer max
         * @return integer
         */
        external.getRandomNumber =
        internal.getRandomNumber = function (min, max) {
            min = internal.ifSet(min, 0);
            max = internal.ifSet(max, 9007199254740992);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };

        /**
         * 傳回隨機陣列索引
         *
         * @todo 未支援雜湊型陣列
         * @param array array
         * @return integer
         */
        external.getRandomKey =
        internal.getRandomKey = function (array) {
            if (internal.isArrayLike(array)) {
                var min = 0, max = array.length - 1;
                return internal.getRandomNumber(min, max);
            }
            return -1;
        };

        /**
         * 傳回隨機陣列元素
         
         * @param array array
         * @return integer
         */
        external.getRandomValue =
        internal.getRandomValue = function (array) {
            if (internal.isArrayLike(array)) {
                var randomKey = internal.getRandomKey(array);
                return array[randomKey];
            }
            return null;
        };

        /**
         * 將所有元素值加總
         *
         * @param array|arrayLike|object values
         * @return Number
         */
        external.sum =
        internal.sum = function (values) {
            return internal.toArray(values).reduce(function (a, b) {
                return a + b;
            }, 0);
        };

        /**
         * 打亂陣列元素
         *
         * @return integer
         */
        external.shuffle =
        internal.shuffle = function (array) {
            if (internal.isArrayLike(array)) {
                array = array.sort(function () {
                    return Math.random() - 0.5;
                });
            }
            return array;
        };

        /**
         * 傳回 Base 標籤路徑
         *
         * @param string url
         * @return string
         */
        external.getBaseHref =
        internal.getBaseHref = function () {
            var baseHref, baseElement = document.querySelector('base');
            if (baseElement && baseElement.href) {
                baseHref = baseElement.href.replace(/\/+$/g, '');
            }
            return internal.stringify(baseHref);
        };

        /**
         * 傳回 URI 是否為絕對路徑
         *
         * @param string url
         * @return string
         */
        external.isAbsoluteUri =
        internal.isAbsoluteUri = function (uri) {
            return (/^\w+:\/\/.+$/i).test(uri) || (/^\//).test(uri);
        };

        /**
         * 記錄器
         *
         * @return void
         */
        external.log =
        internal.log = function () {
            if (window.console) {
                console.log.apply(console, arguments);
            }
        };

        /**
         * 修正 IE 忽略 base 標籤的 Uri 路徑錯誤
         *
         * @param string url
         * @return string
         */
        internal.fixIeRelativeUri = function (uri) {
            if (internal.env.browser.msie) {
                var base = document.getElementsByTagName('base');
                if (base && base[0].href) {
                    if (!/^\//.test(uri) && !/^\w+\:/.test(uri)) {
                        uri = base[0].href + uri;
                    }
                }
            }
            return uri;
        };

        //***********************************************************************************************************************//
        // Environment
        //***********************************************************************************************************************//

        external.env =
        internal.env = (function () {
            var memory = new root.memory('session', 'environment'),
                platform = navigator.platform.toLowerCase(),
                ua = navigator.userAgent.toLowerCase(),
                uao = memory.get('uao') || memory.set('uao', ua).get('uao'),
                uac = uao || ua,
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
                    windows: regex.windows.test(uac),
                    macintosh: regex.macintosh.test(uac),
                    linux: regex.linux.test(uac),
                    freebsd: regex.freebsd.test(uac),
                    openbsd: regex.openbsd.test(uac),
                    symbos: regex.symbos.test(uac),
                    ios: regex.ios.test(uac),
                    android: regex.android.test(uac),
                    blackBerry: regex.blackBerry.test(uac)
                },
                device = {
                    iphone: regex.iphone.test(uac),
                    ipad: regex.ipad.test(uac),
                    ipod: regex.ipod.test(uac),
                    desktop: regex.desktop.test(uac),
                    tablet: regex.mobile.test(uac),
                    mobile: regex.mobile.test(uac)
                },
                browser = (function () {
                    var NO_MATCHED,
                        KUNOW_VERSION = -1,
                        toVersion = function (version) {
                            return parseFloat(root.stringify(version).replace(/(\.)/g, function (matched) {
                                matched = !arguments.callee.replaced ? matched : '';
                                arguments.callee.replaced = true;
                                return matched;
                            }));
                        },
                        map = (function () {
                            var info = {
                                mozilla: /mozilla/.test(uac),
                                webkit: /webkit/.test(uac),
                                gecko: /gecko/.test(uac),
                                safari: /safari/.test(uac),
                                chrome: /chrome/.test(uac),
                                crios: /crios/.test(uac),
                                firefox: /firefox/.test(uac),
                                opera: /opera|opr\//.test(uac),
                                konqueror: /konqueror/.test(uac),
                                edge: /edge/.test(uac),
                                msie: (function () {
                                    var matches, version = NO_MATCHED;

                                    if (/msie/.test(uac)) {
                                        version = KUNOW_VERSION;
                                        if ((matches = uac.match(/msie ([\w.]+)/))) {
                                            version = matches[1];
                                        }
                                    }

                                    if ((matches = uac.match(/trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/))) {
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
                                            if ((matches = uac.match(/(?:android)[ \/]([\w.]+)/))) {
                                                version = matches[1];
                                            }
                                        };
                                    
                                    if (/android/.test(uac)) {
                                        if (/android .+ version[ \/][\w\.]+/.test(uac)) {
                                            parse();
                                        }
                                        // Same vendors may be modify the "version/x.x" string to another.
                                        // So, in this case we have to double check it.
                                        else if ((matches = uac.match(/\(khtml, like gecko\) (\w+)[ \/][\w\.]+ chrome[ \/]/))) {
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
                    root.each(map, function (name, browser) {
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
                            if (patterns[name] && (matches = uac.match(patterns[name]))) {
                                map[name] = matches[1];
                            }
                        }

                        if (map[name] !== NO_MATCHED) {
                            map[name] = toVersion(map[name]);
                        }
                    });

                    return map;
                }()),
                support = (function () {
                    var $3d = browser.chrome >= 12 || browser.safari >= 4 || browser.firefox >= 10 || browser.opera >= 15 || browser.msie >= 10 || browser.edge >= 12,
                        $3dmax = $3d && (browser.chrome >= 12 || browser.safari >= 4 || browser.firefox >= 10 || browser.opera >= 15),
                        $3dmin = $3d && (browser.msie >= 10 || browser.edge >= 12),
                        $25d = browser.msie === 9 || (browser.opera >= 10.5 && browser.opera < 15),
                        $2d = browser.msie <= 8 || browser.opera < 10.5,
                        touchable = !!('ontouchstart' in window || window.navigator.maxTouchPoints || window.navigator.msMaxTouchPoints),
                        xhr2 = window.ProgressEvent && window.FormData,
                        blob = window.Blob && window.URL && window.URL.createObjectURL,
                        geolocation = navigator.geolocation,
                        transition = document.documentElement.style.transition !== undefined
                            || document.documentElement.style.MsTransition !== undefined
                            || document.documentElement.style.webkitTransition !== undefined
                            || document.documentElement.style.MozTransition !== undefined
                            || document.documentElement.style.OTransition !== undefined;

                    return {
                        $3d: $3d,
                        $3dmax: $3dmax,
                        $3dmin: $3dmin,
                        $25d: $25d,
                        $2d: $2d,
                        touchable: touchable,
                        geolocation: geolocation
                    };
                }()),
                simulate = (function () {
                    var status = uac !== ua,
                        desktop = status && device.mobile && !regex.mobile.test(ua),
                        mobile = status && device.desktop && !regex.desktop.test(ua);

                    if (!desktop) {
                        desktop = screen.width < 1024
                            && screen.width < screen.height
                            && !regex.mobile.test(ua)
                    }

                    if (!mobile) {
                        mobile = screen.width > 1023
                            && screen.width > screen.height
                            && !regex.desktop.test(ua)
                    }

                    return {
                        status: status,
                        desktop: desktop,
                        mobile: mobile,
                    };
                }()),
                server = function (name) {
                    var map = {
                        baseUrl: '<?php echo $baseUrl; ?>',
                        commonBaseUrl: '<?php echo $commonBaseUrl; ?>',
                        routeInfo: "<?php echo $routeInfo; ?>"
                    };

                    if (typeof (map[name]) === 'string' && map[name].indexOf("?>")) {
                        map[name] = map[name].replace(/<\?[^\?]*\?>/, '');
                    }

                    return name in map ? map[name] : null;
                };

            return {
                platform: platform,
                userAgent: ua,
                userAgentCurrent: uac,
                userAgentOiginal: uao,
                os: os,
                device: device,
                browser: browser,
                support: support,
                simulate: simulate,
                server: server
            };
        }());

        //***********************************************************************************************************************//
        // Helper
        //***********************************************************************************************************************//

        external.helper =
        internal.helper =
        {
            /*
             * 傳回目前選取的文字內容
             *
             * @return string
             */
            getSelectedText: function () {
                if (window.getSelection) {
                    return window.getSelection().toString();
                }
                else if (document.getSelection) {
                    return document.getSelection();
                }
                else if (document.selection) {
                    return document.selection.createRange().text;
                }
            },

            /**
             * 開啟視窗
             *
             * @param string url
             * @param object option
             * @return object
             */
            open: function (uri, options) {
                if (root.isPlainObject(uri)) {
                    options = root.extend({}, uri);
                    uri = options.uri;
                }

                var setting = root.extend({
                    width: 0,
                    height: 0,
                    target: '_self',
                    params: null,
                    focus: true
                }, options);

                if (setting.width && setting.height) {
                    var width = setting.width,
                        height = setting.height,
                        left = ($(window).width() - width) / 2,
                        top = ($(window).height() - height) / 2;

                    setting.params += 'location=1, scrollbars=1, resizable=1';
                    setting.params += ', width=' + width + ', height=' + height;
                    setting.params += ', left=' + left + ', top=' + top;
                }

                uri = internal.fixIeRelativeUri(uri);
                var win = window.open(uri, setting.target, setting.params);
                if (setting.focus) win.focus();
                return win;
            },

            /**
             * 重新導向
             *
             * @param string url
             * @return void
             */
            redirect: function (uri, target) {
                uri = internal.fixIeRelativeUri(uri);
                if (target) window.open(uri, target);
                else window.location.href = uri;
            },

            /**
             * DOM 載入事件
             *
             * @param function callback
             * @return void
             */
            ready: (function () {
                var readyListener = function (callback) {
                    var callee = arguments.callee;

                    if (callee.isReady) {
                        return root.isFunction(callback) && callback();
                    }

                    function ready() {
                        if (!document.body) {
                            return setTimeout(arguments.callee);
                        }
                        callee.isReady = true;
                        root.isFunction(callback) && callback();
                    }

                    function done() {
                        if (document.addEventListener
                            || (event && event.type === 'load')
                            || (document.readyState === 'complete')) {
                            unbind() || ready();
                        }
                    }

                    function unbind() {
                        if (document.addEventListener) {
                            document.removeEventListener('DOMContentLoaded', done, false);
                            window.removeEventListener('load', done, false);
                        } else {
                            document.detachEvent('onreadystatechange', done);
                            window.detachEvent('onload', done);
                        }
                    }

                    // Standards-based browsers
                    if (document.addEventListener) {
                        document.addEventListener('DOMContentLoaded', done, false);
                        window.addEventListener('load', done, false);
                    }

                        // For IE <= 8
                    else {
                        document.attachEvent('onreadystatechange', done);
                        window.attachEvent('onload', done);

                        if (!window.frameElement
                            && document.documentElement) {
                            (function doScrollCheck() {
                                if (!callee.isReady) {
                                    try {
                                        document.documentElement.doScroll('left');
                                    } catch (e) {
                                        return setTimeout(doScrollCheck, 50);
                                    }
                                    done();
                                }
                            })();
                        }
                    }
                };

                return readyListener()
                    || readyListener;
            }()),

            /**
             * 頁面載入事件
             *
             * @param function callback
             * @return void
             */
            load: function (callback) {
                var done = function () {
                    root.isFunction(callback) && callback();
                };

                if (document.readyState === 'complete') {
                    done();
                }
                else if (document.addEventListener) {
                    window.addEventListener('load', done, false);
                }
                else {
                    window.attachEvent('onload', done);
                }
            }
        };

        /**
         * 初始化
         *
         * @return object
         */
        return (function () {
            this.url.construct();
            this.history.construct();
            this.loader.construct();
            window.youweb = window.sewii = this;
            return (delete this.construct) && this;
        })
        .call(this);
    }
}).construct();

