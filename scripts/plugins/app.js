/*!
 * App
 * 
 * Copyright: http://youweb.tw/
 * Modified: 2017-01-01 00:00
 * 
 * @version 1.0.0
 * @author joe@youweb.tw
 * @class youweb.app
 */

; ({
    /**
     * Preinitialize
     * 
     * @returns void
     */
    preinit: function () {
        var self = this,
            kernael = 'modules/youweb.js',
            container = document.querySelector('head') || document.body || document,
            scripts = container.querySelectorAll('script'),
            script = document.createElement('script'),
            target = scripts ? scripts[scripts.length - 1] : 0;

        script.src = kernael;
        script.async = true;
        script.onload = function ()
        {
            youweb.loader.ready(function ()
            {
                // Framework
                this.include.library('helper.js').success(function () {
                    youweb.app = new youweb.helper.App(self);
                });

                // Requires
                this.response([
                    this.include.library('TweenMax'),
                    this.include.library('ui.js'),
                ])
                .success(function () {
                    youweb.loader.include.library('ui/themes/base/all, tooltip', 'tooltip');
                    youweb.event.fire('resolved');
                });

                // Plugins
                this.include.library('turn.js, zoom.js', 'book');
                this.include.library('form, validate', 'form');
            });
        };

        target && target.parentNode.insertBefore(script, target.nextSibling)
        target || container.appendChild(script);
    },

    /**
     * Initialize
     * 
     * @callback Initialize
     * @returns Defreed
     */
    init: function () {
        var self = this,
            deferred = self.defer();

        if (!youweb.event.isFired('resolved')) {
            youweb.event.once('resolved', function () {
                deferred.resolve();
            });
        }
        else deferred.resolve();

        return deferred;
    },

    /**
     * Ready
     * 
     * @callback DOMContentLoaded
     * @returns void
     */
    ready: function () {
        var self = this;

        // Memory for global accessing.
        self.memory = new youweb.memory('session', 'app');

        // Disallow user-scalable in iOS for fixing some issues.
        // In the latest iOS 10+, this will not really disable it.
        if (youweb.env.os.ios && youweb.env.browser.safari) {
            self.viewport.content('user-scalable', 'no');
        }

        // Remove the initial token.
        setTimeout(function () {
            self.html.that.removeClass('initial');
        });

        // Initialize the tweener.
        self.root.tweener.init();

        // Preload sound effects.
        self.root.sound.init({
            path: 'styles/sounds',
            list: {
                'page-flip-04': {
                    alias: 'flip',
                    volume: 1.0
                },
                'effect-09': {
                    alias: 'sidebar',
                    volume: 0.2
                },
                'effect-01': {
                    alias: 'button',
                    volume: 0.2
                },
                'effect-08': {
                    alias: 'link',
                    volume: 0.1
                },
                'effect-13': {
                    alias: 'bubble',
                    volume: 0.2
                },
            }
        });

    },

    /**
     * Layout
     * 
     * @namespace youweb.app.layout
     */
    layout:
    {
        ready: function () {
            var self = this;

            self.build();
            self.resize();
            self.patch();
        },
        build: function () {
            var self = this;

        },
        resize: function () {
            var self = this,
                classForResizing = 'layout-resizing';

            $(window).resize(function () {
                self.root.html.that.addClass(classForResizing);
            });

            $(window).resized(function () {
                self.root.html.that.removeClass(classForResizing);
            });
        },
        patch: function () {
            var self = this;

            // Fixing for the scrolling issue on iOS.
            !function scrolling() {
                var targets = [
                    '#main',
                    '.sidebar .scrollable',
                    '#toolbar .dropmenu .scrollable',
                ];

                $.each(targets, function (index, selector) {
                    self.html.that.find(selector).each(function () {
                        var scrollable = this;

                        scrollable.addEventListener('touchstart', function (event) {
                            this.allowUp = (this.scrollTop > 0);
                            this.allowDown = (this.scrollTop < this.scrollHeight - this.clientHeight);
                            this.slideBeginY = event.touches[0].pageY;
                        });

                        scrollable.addEventListener('touchmove', function (event) {
                            var up = (event.touches[0].pageY > this.slideBeginY);
                            var down = (event.touches[0].pageY < this.slideBeginY);
                            this.slideBeginY = event.touches[0].pageY;

                            if ((up && this.allowUp) || (down && this.allowDown)) {
                                event.stopPropagation();
                            } else {
                                event.preventDefault();
                            }
                        });
                    });
                });
            }();

            // Fixing for the tooltip bugs.
            !function () {
                var timer;

                $(window).mousemove(function (event) {
                    clearTimeout(timer);
                    timer = setTimeout(function () {
                        var tooltip = $('.ui-tooltip'),
                            className = 'tooltip';

                        if (tooltip.length) {
                            if (!$(event.target).hasClass(className)
                                && !$(event.target).parents('.' + className).length
                                && !$(event.target).is('object')) {
                                tooltip.remove();
                            }
                        }
                    }, 50);
                });
            }();
        },

        /**
         * Header
         * 
         * @namespace youweb.app.layout.header
         */
        header:
        {
            ready: function () {
                var self = this;

                self.resize();
                self.current();
            },
            resize: function () {
                var self = this;

                $(window).resized({
                    callback: function () {
                        // Sets a width for mobile device on zoom in.
                        self.html.that.css('width', $(this).width());
                    },
                    delay: false,
                    now: true
                });
            },
            current: function () {
                var self = this;

                self.html.that.find('.current').each(function () {
                    var form = $(this),
                        input = form.find('[name="input"]');

                    // Input
                    input.numericInput().on('blur keyup', function (event) {
                        if (event.type == 'blur' || event.keyCode == '13') {
                            var value = input.val();

                            if (value) {
                                value = youweb.integer(input.val()) || 1;
                                self.parent.main.book.jump(value);
                                input.val('');
                            }
                        }
                    });
                    
                    // State
                    youweb.event.on([
                        self.parent.main.book.event.jump,
                        self.parent.main.book.event.change
                    ],
                    function (event) {
                        input.attr('placeholder', event.now.join('-') + '/' + event.total);
                    });

                    // Tooltip
                    youweb.env.device.mobile || self.root.wait('tooltip', function () {
                        input.tooltip({
                            position: {
                                my: 'center top+15',
                                at: 'center top+15',
                            },
                        });
                    });

                    // Submit
                    form.submit(false);
                });
            },
            show: function () {
                var self = this;

                self.html.that.animate({
                    top: 0,
                    opacity: 1,
                }, {
                    duration: 600,
                    easing: 'easeInOutCirc'
                });
            },
            hide: function () {
                var self = this;

                self.html.that.animate({
                    top: -self.html.that.children().height() * 1.5,
                    opacity: 0,
                }, {
                    duration: 600,
                    easing: 'easeInOutCirc'
                });
            },
        },

        /**
         * Main
         * 
         * @namespace youweb.app.layout.main
         */
        main:
        {
            ready: function () {
                var self = this;
            },

            /**
             * Controls
             * 
             * @namespace youweb.app.layout.main.controls
             */
            controls:
            {
                ready: function () {
                    var self = this;

                    self.active();
                    self.prev();
                    self.next();
                },
                active: function () {
                    var self = this;

                    self.html.that.find('[name="prev"], [name="next"]').on('mouseenter', function () {
                        youweb.helper.sound.play('button');
                    });
                },
                prev: function () {
                    var self = this;

                    self.html.that.find('[name="prev"]').on('tap', function (event) {
                        self.parent.book.prev(event);
                        event.preventDefault();
                    });
                },
                next: function () {
                    var self = this;

                    self.html.that.find('[name="next"]').on('tap', function (event) {
                        self.parent.book.next(event);
                        event.preventDefault();
                    });
                },
            },

            /**
             * Book
             * 
             * @namespace youweb.app.layout.main.book
             */
            book:
            {
                event: {
                    init: 'app.layout.main.book.init',
                    ready: 'app.layout.main.book.ready',
                    preloaded: 'app.layout.main.book.preloaded',
                    preloading: 'app.layout.main.book.preloading',
                    jump: 'app.layout.main.book.jump',
                    change: 'app.layout.main.book.change',
                },
                init: function () {
                    var self = this,
                        deferred = self.root.defer();

                    self.getData(function (data) {

                        youweb.event.fire(self.event.init, self.html.that, {
                            data: data
                        });

                        self.data = data;
                        deferred.resolve();
                    });

                    return deferred;
                },
                ready: function () {
                    var self = this;

                    self.classes = {};
                    self.classes.ready = 'ready';
                    self.classes.busy = 'busy';
                    self.classes.zoomed = 'zoomed';
                    self.classes.grab = 'grab';
                    self.classes.grabbing = 'grabbing';

                    self.html.pages = self.html.that.children('.pages');

                    self.preload();
                    self.build();
                    self.turnable();
                    self.zoomable();
                    self.grabbable();
                    self.resize();
                    self.mousewheel();
                    self.keyboard();
                },
                preload: function () {
                    var self = this,
                        page = self.page(),
                        range = 2,
                        start = Math.max(page - range, 1),
                        end = Math.min(page + range, self.data.pages.length),
                        urls = [];
                    
                    $.each(self.data.pages, function (index, page) {
                        if (index >= start - 1
                            && index <= end - 1) {
                            urls.push(page.url);
                        }
                    });
                    
                    youweb.preloader.init({
                        lazy: 20,
                        urls: urls,
                        gather: true,
                        history: false,
                        progress: function (event) {
                            youweb.event.fire(self.event.preloading, this, event);
                        },
                        complete: function (event) {
                            youweb.event.fire(self.event.preloaded, this, event);
                        }
                    });
                },
                build: function () {
                    var self = this

                    $.each(self.data.pages, function (index, page) {
                        var number = index + 1,
                            name = 'page-name-' + number,
                            wrap = $('<div class="page"/>'),
                            image = new Image();

                        // Image
                        image.onload = image.onerror = function (event) {
                            this.onload = this.onerror = null;
                            if (event.type !== 'load') return;

                            $('<img />')
                                .attr('src', page.url)
                                .hide()
                                .fadeIn()
                                .appendTo(wrap);
                        };

                        // Links
                        $.each(page.links, function (index, link) {
                            var area = String(link.area).split(/\s*,\s*/),
                                left = Math.min(youweb.float(area[0]), 100),
                                top = Math.min(youweb.float(area[1]), 100),
                                width = Math.min(youweb.float(area[2]), 100),
                                height = Math.min(youweb.float(area[3]), 100),
                                target = youweb.ifSet(link.target, '_blank'),
                                href = youweb.ifSet(link.href, null),
                                title = youweb.ifSet(link.title, null),
                                icon = youweb.ifSet(link.icon, true);

                            width = (left + width > 100) ? 100 - left : width;
                            height = (top + height > 100) ? 100 - top : height;

                            $('<a />')
                                .attr({
                                    'href': href,
                                    'target': target,
                                    'title': title,
                                    'class': 'tooltip icon-location'
                                })
                                .css({
                                    left: left + '%',
                                    top: top + '%',
                                    width: width + '%',
                                    height: height + '%'
                                })
                                .html('<i>' + title + '</i>')
                                .toggleClass('icon', icon)
                                .appendTo(wrap);
                        });

                        image.src = page.url;
                        self.html.pages.append(wrap);
                    });

                    // Tooltip
                    youweb.env.device.mobile || self.root.wait('tooltip', function () {
                        var options = {
                            track: true,
                            classes: {
                                "ui-tooltip": "ui-corner-all ui-widget-shadow link"
                            },
                            position: {
                                my: 'center top+30',
                            },
                            show: {
                                duration: 'fast',
                                effect: 'show',
                                delay: 0
                            },
                            hide: {
                                duration: 'fast',
                                effect: 'hide',
                                delay: 0
                            }
                        };

                        youweb.event.on(self.event.jump, function (event) {
                            $.each(event.now, function (index, page) {
                                self.html.pages.find('.tooltip').each(function () {
                                    if (!$(this).tooltip('instance')) {
                                        $(this).tooltip(options);
                                    }
                                });
                            });
                        });

                        self.html.pages.find('.tooltip').tooltip(options);
                        self.html.pages.on('mouseenter', '.tooltip', function () {
                            youweb.helper.sound.play('bubble');
                        });
                    });
                },
                resize: function () {
                    var self = this,
                        mode = null;

                    $(window).resized({
                        callback: function () {
                            var size = self.getSize(),
                                isSingleMode = self.isSingleMode(),
                                display = isSingleMode ? 'single' : 'double';

                            self.html.pages.css({
                                width: size.width,
                                height: size.height,
                                left: 'calc(50% - ' + Math.round(size.width / 2) + 'px)',
                                top: 'calc(50% - ' + Math.round(size.height / 2) + 'px)',
                            });

                            self.wait(function () {
                                size = self.getSize()
                                size.width *= self.html.that.zoom('value');
                                size.height *= self.html.that.zoom('value');

                                self.html.pages.turn('display', display);
                                self.html.pages.turn('size', size.width, size.height);
                                self.html.pages.turn('resize');
                                self.html.that.zoom('resize');

                                // When the mode has been changed.
                                if (isSingleMode != mode) {
                                    mode = isSingleMode;
                                    youweb.event.fire(self.event.change, self, {
                                        data: self.data,
                                        total: self.total(),
                                        current: self.current(),
                                        now: self.now()
                                    });
                                }
                            });
                        },
                        delay: false,
                        now: true,
                    });
                },
                route: function () {
                    var self = this;

                    youweb.history.change(function (event) {
                        var page = self.page(),
                            info = self.data.pages[page - 1];

                        youweb.history.title(self.data.subject, -1);
                        youweb.history.title(info.title, -2);

                        if ((event.isExternal || event.isForce)
                            && !self.parent.parent.loading.need()) {

                            self.jump(page, {
                                external: event.isExternal,
                                force: event.isForce
                            });
                        }
                    })
                    .fire();
                },
                turnable: function () {
                    var self = this;

                    self.depth.build(this);
                    self.wait(function () {
                        self.html.pages.turn({
                            duration: 1500,
                            elevation: 50,
                            gradients: false,
                            autoCenter: true,
                            when: {
                                start: function (event, pageObj, corner) {
                                    self.depth.update();
                                },
                                end: function (event, pageObj) {
                                    self.depth.update();
                                },
                                turning: function (event, page, view) {
                                    self.depth.update(page);

                                    if (!self.jumped) {
                                        self.navigate(page);
                                        youweb.event.fire(self.event.jump, self, {
                                            data: self.data,
                                            total: self.total(),
                                            current: page,
                                            now: self.now(page)
                                        });
                                    }

                                    if (!self.jumped
                                        || (self.jumped && !self.jumped.force)) {
                                        youweb.helper.sound.play('flip');
                                    }

                                    self.jumped = null;
                                },
                                turned: function (event, page, view) {
                                    self.depth.update();
                                },
                            }
                        });

                        setTimeout(function () {
                            self.route();
                            self.html.that.visible();

                            setTimeout(function () {
                                self.html.pages.addClass(self.classes.ready);
                            });

                            youweb.event.fire(self.event.ready, self.html.that, {
                                data: self.data
                            });
                        });
                    });
                },
                zoomable: function () {
                    var self = this;

                    self.wait(function () {
                        self.html.that.zoom({
                            flipbook: self.html.pages,
                            easeFunction: 'cubic-bezier(0.785, 0.135, 0.150, 0.860)',
                            duration: 500,
                            max: function () {
                                var min = 2,
                                    size = self.getSize(),
                                    clientWidth = $(window).width() * 1.2,
                                    scaled = Math.max(clientWidth / size.width, min);

                                return scaled;
                            },
                            max: function () {
                                var min = 1.000001,
                                    size = self.getSize(),
                                    pageSize = self.isSingleMode() ? 1 : 2,
                                    settingWidth = self.data.width || 0,
                                    settingHeight = self.data.height || 0,
                                    width = settingWidth * pageSize,
                                    height = settingHeight,
                                    scaled = Math.max(width / size.width, min);

                                if (scaled === min) {
                                    var text = '頁面檢視比例已經放到最大',
                                        timeout = 2000,
                                        fade = 300,
                                        id = 'message-max-limit',
                                        box = $('<i/>', { 'id': id, 'class': 'ui-message' });

                                    $('#' + id).remove();
                                    box.text(text).appendTo('body').fadeIn(fade);

                                    setTimeout(function () {
                                        box.fadeOut(fade, function () {
                                            $('#' + id).remove();
                                        });
                                    }, timeout);
                                }

                                return scaled;
                            },
                            when: {
                                swipeLeft: function (event) {
                                    self.next(event);
                                },
                                swipeRight: function (event) {
                                    self.prev(event);
                                },
                                zoomIn: function (event) {
                                    setTimeout(function () {
                                        self.html.pages.addClass(self.classes.zoomed);
                                    });
                                },
                                zoomOut: function (event) {
                                    setTimeout(function () {
                                        self.html.pages.removeClass(self.classes.zoomed);
                                    });
                                },
                                resize: function (event, zoomeValue, page, pageElement) {
                                    setTimeout(function () {
                                        self.html.pages.removeClass(self.classes.busy);
                                    });
                                },
                            }
                        });

                        self.html.that.on('zoom.doubleTap', function (event) {
                            self.toolbar('zoom').trigger('tap');
                        });
                    });
                },
                grabbable: function () {
                    var self = this;

                    return;
                    self.wait(function () {
                        self.html.pages
                            .addClass(self.classes.grab)
                            .on('mousedown', function (event) {
                                self.html.pages.addClass(self.classes.grabbing);
                            })
                            .on('tap mouseup mouseout', function (event) {
                                self.html.pages.removeClass(self.classes.grabbing);
                            });
                    });
                },
                mousewheel: function () {
                    var self = this,
                        balance = 4,
                        prevTimes = 0,
                        nextTimes = 0,
                        timer = null;

                    self.html.pages.mousewheel(function (event, delta) {
                        var isPrev = delta >= 1,
                            isNext = delta <= -1;

                        clearTimeout(timer);
                        timer = setTimeout(function () {
                            prevTimes = nextTimes = 0;
                        }, 60);

                        if (isPrev && prevTimes++ >= balance) {
                            prevTimes = 0;
                            self.prev(event);
                        }

                        if (isNext && nextTimes++ >= balance) {
                            nextTimes = 0;
                            self.next(event);
                        }

                        return false;
                    });
                },
                keyboard: function () {
                    var self = this;

                    $(window).keydown(['left', 'up'], function () {
                        if (!self.parent.parent.sidebar.isOpened()) {
                            self.prev();
                        }
                    });

                    $(window).keydown(['right', 'down'], function () {
                        if (!self.parent.parent.sidebar.isOpened()) {
                            self.next();
                        }
                    });
                },
                touch: function () {
                    var self = this;
                },
                screen: function (event) {
                    var self = this,
                        callee = arguments.callee;

                    //$(window).on('resize', function (event) {
                    //    if (screen.height === window.innerHeight) {

                    //        self.toolbar('screen').trigger('click', {
                    //            execute: false
                    //        });

                    //        $(window).one('resize', function () {
                    //            if (screen.height !== window.innerHeight) {
                    //                self.toolbar('screen').trigger('click', {
                    //                    execute: false
                    //                });
                    //            }
                    //        });
                    //    }
                    //});

                    if (!youweb.isSet(callee.isActive)) {
                        youweb.helper.fullScreen.changed(function (event) {
                            if ((event.target.isActive && !callee.isActive)
                                || (!event.target.isActive && callee.isActive)) {

                                self.toolbar('screen').trigger('tap', {
                                    execute: false
                                });
                            }

                            callee.isActive = event.target.isActive;
                        });
                    }

                    callee.isActive = !callee.isActive ? true : false;
                    youweb.helper.fullScreen.toggle();
                },
                sound: function (event) {
                    var self = this,
                        callee = arguments.callee;

                    if (!callee.off) {
                        callee.off = true;
                        youweb.helper.sound.mute();
                    }
                    else {
                        callee.off = false;
                        youweb.helper.sound.unmute();
                    }

                    self.root.memory.set('muted', callee.off);
                },
                zoom: function (event) {
                    var self = this,
                        callee = arguments.callee;

                    if (self.isBusy()) {
                        // Undo the state of the button.
                        self.toolbar('zoom').trigger('tap', {
                            execute: false
                        });
                        return false;
                    }
                    else {
                        self.html.pages.addClass(self.classes.busy);
                    }

                    if (self.html.that.zoom('value') === 1) {
                        self.html.pages.addClass(self.classes.zoomed);
                        self.html.that.zoom('zoomIn');
                        //self.parent.parent.header.hide();
                    }
                    else {
                        self.html.that.zoom('zoomOut');
                        //self.parent.parent.header.show();
                    }
                },
                play: function (event) {
                    var self = this,
                        callee = arguments.callee,
                        speed = 2000;

                    if (!callee.playing) {
                        callee.playing = true;

                        function turn() {
                            total = self.total();
                            current = self.current();
                            
                            if (self.current() < self.total()) {
                                self.next();

                                clearTimeout(callee.timer);
                                callee.timer = setTimeout(function () {
                                    turn();
                                }, speed);
                            }
                            else {
                                $(event.target).trigger('tap');
                            }
                        }
                        
                        if (self.current() >= self.total()) {
                            self.first();
                            clearTimeout(callee.timer);
                            callee.timer = setTimeout(function () {
                                turn();
                            }, speed);
                        }
                        else {
                            turn();
                        }
                    }
                    else {
                        callee.playing = false;
                        clearTimeout(callee.timer);
                    }
                },
                stop: function (event) {
                    var self = this;

                    if (self.play.playing) {
                        self.toolbar('play').trigger('tap');
                    }
                },
                first: function (event) {
                    var self = this;

                    event && self.stop(event);
                    self.jump('first');
                },
                last: function (event) {
                    var self = this;

                    event && self.stop(event);
                    self.jump('last');
                },
                prev: function (event) {
                    var self = this;

                    event && self.stop(event);
                    self.jump('prev');
                },
                next: function (event) {
                    var self = this;

                    event && self.stop(event);
                    self.jump('next');
                },
                back: function (event) {
                    var self = this;
                    window.location = 'catalogs';
                },
                category: function (event) {
                    var self = this;

                    self.parent.parent.sidebar.open('category');
                },
                print: function (event) {
                    var self = this;

                    self.parent.parent.sidebar.open('printable');
                },
                share: function (event) {
                    var self = this;

                    self.parent.parent.sidebar.open('shareable');
                },
                download: function (event) {
                    var self = this;

                    self.parent.parent.sidebar.open('downloadable');
                },
                buy: function (event) {
                    var self = this;

                    if (self.data.url) {
                        youweb.helper.redirect(self.data.url, '_blank');
                    }
                },
                jump: function (dest, params) {
                    var self = this,
                        params = params || {},
                        total = self.total(),
                        current = self.current(),
                        page = -1;

                    switch (String(dest).toLowerCase()) {
                        case 'first':
                            page = 1;
                            break;
                        case 'last':
                            page = total;
                            break;
                        case 'prev':
                            var prev = current - (!self.isSingleMode() && current % 2 !== 0 ? 2 : 1);
                            page = Math.max(prev, 1);
                            break;
                        case 'next':
                            var next = current + (!self.isSingleMode() && current % 2 === 0 ? 2 : 1);
                            page = Math.min(next, total);
                            break;
                        default:
                            page = parseInt(dest) || 1;
                            page = Math.max(page, 1);
                            page = Math.min(page, total);
                            break;
                    }

                    if (self.html.pages.turn('hasPage', page) && (page !== current)) {
                        var delay = false,
                            timeout = youweb.ifSet(params.timeout, 300);

                        // For the depth of the pages effect
                        if (!params.force) {
                            if (current === 1 && page > 1 + 2) {
                                self.html.pages.turn('page', 2);
                                delay = true;
                            }

                            if (current === total && page < total - 2) {
                                self.html.pages.turn('page', total - 1);
                                delay = true;
                            }
                        }

                        // Turn to the page
                        function turn() {
                            self.jumped = params;
                            self.html.pages.turn('page', page);
                            params.force && self.html.pages.turn('stop');
                            (params.force || params.external) || self.navigate(page);

                            youweb.event.fire(self.event.jump, self, {
                                data: self.data,
                                total: total,
                                current: page,
                                now: self.now()
                            });
                        }

                        if (delay) {
                            setTimeout(function () {
                                turn();
                            }, timeout);
                        }
                        else turn();
                    }
                },
                total: function () {
                    var self = this;

                    return self.html.pages.turn('pages');
                },
                current: function () {
                    var self = this;

                    return self.html.pages.turn('page');
                },
                page: function () {
                    var self = this,
                        param = youweb.url.param('page'),
                        page = youweb.integer(param);

                    page = Math.max(page, 1);
                    page = Math.min(page, self.data.pages.length);

                    return page;
                },
                now: function (current) {
                    var self = this,
                        current = current || self.current(),
                        now = [current];

                    if (current > 1
                        && current < self.total()
                        && !self.isSingleMode()) {

                        now = now % 2 === 0
                            ? [current, current + 1]
                            : [current - 1, current];
                    }

                    return now;
                },
                navigate: function (page) {
                    var self = this,
                        uri = youweb.url.query.modify('page=' + page);

                    youweb.history.navigate(uri);
                },
                getSize: function () {
                    var self = this,
                        clientWidth = self.html.that.width(),
                        clientHeight = self.html.that.height(),
                        pageSize = self.isSingleMode() ? 1 : 2,
                        settingWidth = self.data.width || 0,
                        settingHeight = self.data.height || 0,
                        width = settingWidth * pageSize,
                        height = settingHeight,
                        scaled = clientWidth / width,
                        size = { width: width, height: height };

                    size.width = size.width * scaled,
                    size.height = size.height * scaled;

                    if (size.height > clientHeight) {
                        scaled = clientHeight / size.height;
                        size.width = size.width * scaled;
                        size.height = size.height * scaled;
                    }

                    size.width = youweb.integer(size.width);
                    size.height = youweb.integer(size.height);

                    return size;
                },
                getData: function (callback) {
                    var self = this,
                        callee = arguments.callee;

                    if (callee.data) {
                        return callback && callback(callee.data);
                    }

                    if (callee.request) {
                        return callee.request.done(function () {
                            return callback && callback(callee.data);
                        });
                    }

                    callee.request = $.ajax({
                        url: youweb.url.query.modify('data=1').toUrl(),
                        dataType: 'json',
                        success: function (data) {
                            if (!data || !data.pages || !data.pages.length) {
                                return this.error();
                            }

                            callee.data = data;
                            callback && callback(data);
                        },
                        error: function () {
                            throw new Error('The settings load failed.');
                        }
                    });
                },
                isBusy: function () {
                    var self = this;

                    return self.html.pages.hasClass(self.classes.busy);
                },
                isSingleMode: function () {
                    var self = this;

                    return self.root.viewport.is('tiny');
                },
                wait: function (callback) {
                    var self = this;

                    self.root.wait('book', callback);
                },
                toolbar: function (button) {
                    var self = this,
                        toolbar = self.parent.parent.footer.toolbar;

                    if (button) {
                        return toolbar.html.items.find('> li > button[name="' + button + '"]');
                    }

                    return toolbar;
                },

                /**
                 * Depth
                 * 
                 * @namespace youweb.app.layout.main.book.depth
                 */
                depth: {
                    build: function (parent) {
                        var self = this,
                            depth = $('<div class="depth" ignore="1"><i/></div>');

                        self.parent = parent;
                        depth.clone().addClass('left').appendTo(self.parent.html.pages);
                        depth.clone().addClass('right').appendTo(self.parent.html.pages);
                    },
                    update: function (dest) {
                        var self = this,
                            total = self.parent.html.pages.turn('pages'),
                            current = self.parent.html.pages.turn('page'),
                            goto = dest || current,
                            depth = {
                                left: self.parent.html.pages.find('.depth.left'),
                                right: self.parent.html.pages.find('.depth.right'),
                            };

                        // Width
                        if (!depth.width) {
                            depth.left.data('width')
                                || depth.left.data('width', depth.left.width());

                            depth.right.data('width')
                                || depth.right.data('width', depth.right.width());
                        }

                        // Left
                        if (goto > 3) {
                            depth.size = depth.left.data('width') * Math.min(1, current * 2 / total);
                            depth.left.css({ width: depth.size, left: -depth.size });
                        }
                        else {
                            depth.left.css({ width: 0 });
                        }

                        // Right
                        if (goto < total - 3) {
                            depth.size = depth.right.data('width') * Math.min(1, (total - current) * 2 / total);
                            depth.right.css({ width: depth.size, right: -depth.size });
                        }
                        else {
                            depth.right.css({ width: 0 });
                        }
                    },
                },
            },
        },

        /**
         * Sidebar
         * 
         * @namespace youweb.app.layout.sidebar
         */
        sidebar:
        {
            ready: function () {
                var self = this;
                
                self.classes = {};
                self.classes.transformed = 'transformed';
                self.classes.opened = 'opened';

                self.ease = Power4;
                self.duration = .8;

                self.html.layout = self.parent.html.that;
                self.html.wrapper = self.html.layout.children('.wrapper');

                self.build();
                self.resize();
                self.listen();
            },
            build: function () {
                var self = this;

                self.html.that.find('.body .scrollable').smoothWheel();
            },
            resize: function () {
                var self = this;

                $(window).resized({
                    callback: function () {
                        var header = self.html.that.children('.header'),
                            footer = self.html.that.children('.footer'),
                            body = self.html.that.children('.body'),
                            scrollable = body.find('.scrollable'),
                            height = self.html.that.height() - header.height() - footer.height();

                        scrollable.show().css('height', height);
                    },
                    delay: false,
                    now: true,
                });
            },
            listen: function () {
                var self = this;

                // Button
                self.html.that.find('button[name="close"]').on('click', function (event) {
                    self.close();
                    event.preventDefault();
                });

                // Wrapper
                self.html.wrapper.on('tap', function (event) {
                    if ($(event.target).node() == self.html.wrapper.node()) {
                        self.close();
                    }
                });

                // ESC
                $(window).keydown('esc', function () {
                    if (self.html.that.hasClass(self.classes.opened)) {
                        self.close();
                    }
                });
            },
            open: function (id) {
                var self = this,
                    timeline = youweb.helper.tweener.timeline(),
                    target = self.html.that.filter('#' + id);

                if (self.busy) return;

                if (self.html.that.hasClass(self.classes.opened)) {
                    timeline
                    .to({
                        target: self.html.that.not(target),
                        duration: self.duration,
                        params: {
                            ease: self.ease.easeOut,
                            x: -target.width(),
                            onStart: function () {
                                self.busy = true;
                                youweb.helper.sound.play('sidebar');
                            },
                            onComplete: function () {
                                $(this.target).removeClass(self.classes.opened);
                            },
                        },
                        position: '-=.0'
                    })
                    .to({
                        target: target,
                        duration: self.duration,
                        params: {
                            ease: self.ease.easeOut,
                            x: 0,
                            onComplete: function () {
                                self.busy = false;
                                target.addClass(self.classes.opened);
                            }
                        },
                        position: '-=' + (self.duration * .9)
                    });
                }
                else {
                    youweb.helper.tweener.set(self.html.layout, {
                        perspective: 800
                    });

                    timeline
                    .to({
                        target: self.html.wrapper,
                        duration: self.duration,
                        params: {
                            ease: self.ease.easeOut,
                            transformOrigin: 'left center',
                            rotationY: -20,
                            x: target.width() + 70,
                            scale: .7,
                            onStart: function () {
                                self.busy = true;
                                self.html.wrapper.addClass(self.classes.transformed);
                                youweb.helper.sound.play('sidebar');
                            }
                        },
                        position: '-=.0'
                    })
                    .fromTo({
                        target: target,
                        duration: self.duration,
                        from: {
                            x: -target.width(),
                        },
                        to: {
                            ease: self.ease.easeOut,
                            x: 0,
                            onComplete: function () {
                                self.busy = false;
                                target.addClass(self.classes.opened);
                            },
                        },
                        position: '-=' + (self.duration * 1)
                    });
                }
            },
            close: function () {
                var self = this,
                    timeline = youweb.helper.tweener.timeline(),
                    target = self.html.that.filter('.' + self.classes.opened);

                if (self.busy) return;

                timeline
                .to({
                    target: target,
                    duration: self.duration,
                    params: {
                        ease: self.ease.easeOut,
                        x: -target.width(),
                        onComplete: function () {
                            self.busy = false;
                            target.removeClass(self.classes.opened);
                            youweb.helper.tweener.set(target, {
                                x: -100000
                            });
                        },
                    },
                    position: '-=.0'
                })
                .to({
                    target: self.html.wrapper,
                    duration: self.duration,
                    params: {
                        ease: self.ease.easeOut,
                        rotationY: 0,
                        x: 0,
                        scale: 1,
                        onStart: function () {
                            self.busy = true;
                            self.html.wrapper.removeClass(self.classes.transformed);
                            youweb.helper.sound.play('sidebar');
                        }
                    },
                    position: '-=' + (self.duration * .95)
                });
            },
            isOpened: function () {
                var self = this;

                return self.html.that.hasClass(self.classes.opened);
            }
        },

        /**
         * Category
         * 
         * @namespace youweb.app.layout.category
         */
        category:
        {
            event: {
                itemShow: 'app.layout.category.item.show',
                itemHide: 'app.layout.category.item.hide',
            },
            ready: function () {
                var self = this;

                self.classes = {};
                self.classes.applied = 'applied';
                self.classes.active = 'active';
                self.classes.loaded = 'loaded';

                self.html.form = self.html.that.find('.form');
                self.html.input = self.html.form.find('[name="keyword"]');
                self.html.submit = self.html.form.find('[name="submit"]');
                self.html.clear = self.html.form.find('[name="clear"]');
                self.html.pages = self.html.that.find('.pages');
                self.html.sample = self.html.pages.children(':first');
                self.html.empty = self.html.that.find('.empty');
                self.html.match = self.html.that.find('.match');
                self.html.loading = self.html.that.find('.loading');

                self.resize();
                self.render();
                self.input();
                self.clear();
            },
            resize: function () {
                var self = this;

                function resizeThumbHandler(target) {
                    self.parent.main.book.getData(function (data) {
                        var thumbs = target || self.html.pages.children(':visible');

                        thumbs.find('.thumb').each(function () {
                            var me = $(this),
                                clientWidth = me.parent().parent().innerWidth(),
                                scaled = clientWidth / me.width(),
                                width = me.width() * scaled,
                                height = me.height() * scaled;

                            me.css('width', width);
                            me.css('height', height);
                        });
                    });
                }

                // Resize handler
                $(window).resized({
                    callback: function () {
                        resizeThumbHandler();
                    },
                    delay: false,
                });

                // When the item shown/hidden
                youweb.event.on(self.event.itemShow, function (event) {
                    resizeThumbHandler(event.target);
                });
            },
            render: function (keyword) {
                var self = this;

                // Filter
                if (keyword !== undefined) {
                    keyword = youweb.stringify(keyword).toLowerCase();

                    self.html.pages.children().each(function (index) {
                        var item = $(this),
                            page = item.data('page') || {},
                            number = index + 1;

                        if (!keyword
                            || youweb.stringify(page.name).toLowerCase().indexOf(keyword) > -1
                            || youweb.stringify(page.title).toLowerCase().indexOf(keyword) > -1
                            || youweb.stringify(page.description).toLowerCase().indexOf(keyword) > -1
                            || youweb.stringify(page.tag).toLowerCase().indexOf(keyword) > -1
                            || youweb.stringify(page.author).toLowerCase().indexOf(keyword) > -1
                            || youweb.stringify(page.copyright).toLowerCase().indexOf(keyword) > -1
                            || youweb.stringify(number).toLowerCase().indexOf(keyword) > -1) {
                            youweb.event.fire(self.event.itemShow, item.show());
                        }
                        else {
                            youweb.event.fire(self.event.itemHide, item.hide());
                        }
                    });

                    if (!self.html.pages.children(':visible').any()) {
                        self.html.match.show();
                    }
                    else {
                        self.html.match.hide();
                    }
                }
                // Load
                else {
                    self.parent.main.book.getData(function (data) {

                        // Start
                        self.html.that.addClass(self.classes.loaded);
                        self.html.loading.hide();
                        self.html.pages.show();
                        self.html.pages.empty();

                        // List
                        $.each(data.pages, function (index, page) {
                            var sample = self.html.sample.clone(),
                                number = index + 1;

                            self.html.pages.append(sample.data('page', page));

                            !function thumb() {
                                var image = new Image();

                                sample.find('.thumb').each(function () {
                                    var me = $(this),
                                        scaled = me.width() / data.width,
                                        width = data.width * scaled,
                                        height = data.height * scaled;

                                    me.css('width', width);
                                    me.css('height', height);
                                    me.transparent();
                                });

                                image.onload = image.onerror = function (event) {
                                    this.onload = this.onerror = null;

                                    if (event.type === 'load') {
                                        sample.find('.thumb').attr('src', page.url).fadeTo(200, 1);
                                    }
                                };

                                image.src = page.url;
                            }();

                            sample.find('a').removeAttr('href').on('click', function (event) {
                                if (!$(this).hasClass(self.classes.active)) {
                                    if (self.root.viewport.is('tiny')) {
                                        self.html.that.find('button[name="close"]').click();
                                        setTimeout(function () {
                                            self.parent.main.book.jump(number);
                                        }, 350);
                                    }
                                    else {
                                        self.parent.main.book.jump(number);
                                    }
                                }
                                event.preventDefault();
                            });

                            sample.find('.subject').text(function (i, text) {
                                var pager = youweb.stringify(text).replace('{page}', number),
                                    title = page.title;

                                $(this).parents('li').attr('title', title);
                                return pager;
                            });
                        });

                        // Empty if
                        if (!data.pages.length) {
                            self.html.empty.show();
                        }
                        else {
                            self.html.empty.hide();

                            // Tooltip
                            youweb.env.device.mobile || self.root.wait('tooltip', function () {
                                self.html.pages.children().tooltip({
                                    track: true,
                                    classes: {
                                        "ui-tooltip": "ui-corner-all ui-widget-shadow category"
                                    },
                                    position: {
                                        my: 'center top+30',
                                    },
                                    show: {
                                        duration: 'fast',
                                        effect: 'show',
                                        delay: 0
                                    },
                                    hide: {
                                        duration: 'fast',
                                        effect: 'hide',
                                        delay: 0
                                    }
                                });
                            });
                        }
                    });

                    // State
                    youweb.event.on([
                        self.parent.main.book.event.jump,
                        self.parent.main.book.event.change
                    ],
                    function (event) {
                        setTimeout(function () {
                            self.html.pages.children().removeClass(self.classes.active);
                            $.each(event.now, function (i, page) {
                                var index = youweb.integer(page) - 1;

                                self.html.pages.children().eq(index).addClass(self.classes.active);
                            });
                        });
                    });
                }
            },
            input: function () {
                var self = this,
                    isImeMode = false;

                // Hacking for IME mode !!
                // Only supported some browsers of windows.
                if (youweb.env.os.windows
                    && (youweb.env.browser.chrome
                            || youweb.env.browser.opera
                            || youweb.env.browser.msie
                            || youweb.env.browser.edge)) {

                    var hasFiredKeyUp = false,
                        timerForKeyUp = null;

                    // Listen to keydown event.
                    self.html.input.on('keydown', function (event) {
                        hasFiredKeyUp = false;

                        var keyCode = event.keyCode,
                            isImeKey = keyCode === 229;

                        if (isImeMode = isImeKey) {

                            // If the keyup event has not been fired in the delayed time,
                            // we should trigger manually the input event again,
                            // because when users select a word by Enter key in IME mode,
                            // the keyup and input events in Webkit will not be fired.
                            // In this case, we can't detect whether users have already selected a word,
                            // so we have to forcibly trigger the event always.
                            clearTimeout(timerForKeyUp);
                            timerForKeyUp = setTimeout(function () {
                                hasFiredKeyUp || self.html.input.triggerHandler('input', true);
                            }, 500);
                        }
                    });

                    // Listen to keyup event.
                    self.html.input.on('keyup', function (event) {
                        hasFiredKeyUp = true;

                        var keyCode = event.keyCode,
                            isImeKey = keyCode === 229,
                            isRemovedKey = keyCode === 8,
                            isSelectedKey = keyCode === 13 || keyCode === 32,
                            isNumberKey = keyCode >= 96 && keyCode <= 105,
                            isSpecialKeys = isImeKey || isRemovedKey || isSelectedKey || isNumberKey;

                        if (isImeMode && isSpecialKeys) {
                            self.html.input.triggerHandler('input', true);
                        }
                    });
                }

                // Listen to input event.
                self.html.input.on('input', function (event, force) {
                    var callee = arguments.callee,
                        keyword = self.keyword(),
                        last = youweb.stringify(callee.last);

                    // Ignore IME mode
                    if (isImeMode && !force) return;

                    self.html.that.toggleClass(self.classes.applied, !!keyword);

                    if (keyword !== last) {
                        callee.last = keyword;
                        self.render(keyword);
                    }
                });

                // Select the text on focus
                self.html.input.focus(function () {
                    $(this).one('mouseup', function () {
                        $(this).select();
                    });
                });

                // Disallow to submit the form
                self.html.form.submit(function (event) {
                    return false;
                });
            },
            clear: function () {
                var self = this;

                self.html.clear.on('click', function (event) {
                    self.html.input.val('').triggerHandler('input', true);
                    if (!youweb.env.device.mobile) {
                        self.html.input.focus();
                    }
                    event.preventDefault();
                });
            },
            keyword: function () {
                var self = this;

                return $.trim(youweb.stringify(self.html.input.val()));
            },
            isApplied: function () {
                var self = this;

                return self.html.that.hasClass(self.classes.applied);
            },
        },

        /**
         * Shareable
         * 
         * @namespace youweb.app.layout.shareable
         */
        shareable:
        {
            ready: function () {
                var self = this;

                self.html.form = self.html.that.find('form');
                self.form();
            },
            form: function () {
                var self = this;

                self.root.wait('form', function () {
                    self.html.form.each(function () {
                        var form = $(this),
                            submit = self.html.that.find('button[name="submit"]');

                        self.html.form.validate({
                            rules: {
                                name: {
                                    required: true,
                                },
                                email: {
                                    required: true,
                                    email: true
                                },
                            },
                            submitHandler: function (form) {

                                // Make a token for server-side
                                (function () {
                                    var $form = $(form),
                                        value = (new Date()).getTime(),
                                        name = '-validator-share-mail-',
                                        input = $form.find('input[name="' + name + '"]');

                                    input.length
                                        ? input.val(value)
                                        : $form.append($('<input />', {
                                            type: 'hidden',
                                            name: name,
                                            value: value
                                        }));
                                }());

                                // Submit as async request
                                $(form).ajaxSubmit({
                                    success: function (data) {
                                        if (/^200/.test(data)) {
                                            self.notify('success');
                                            $(form).resetForm();
                                            return false;
                                        }
                                        this.error();
                                    },
                                    error: function () {
                                        self.notify('error');
                                    },
                                    complete: function () {
                                        youweb.helper.overlay.hide();
                                    },
                                    beforeSend: function () {
                                        youweb.helper.overlay.show();
                                    }
                                });
                            }
                        });

                        submit.removeAttr('disabled').click(function (event) {
                            self.html.form.submit() && event.preventDefault();
                        });
                    });
                });

                self.parent.main.book.getData(function (data) {
                    self.html.form.find('input[name="subject"]').val(function (i, val) {
                        return youweb.stringify(val).replace('{subject}', data.subject);
                    });
                });
            },
            notify: function (type) {
                var self = this,
                    message = self.html.that.find('.message');

                message
                    .stop(true)
                    .slideUp(200)
                    .filter('.' + type)
                    .slideDown(600, 'easeOutExpo');
            },
        },

        /**
         * Printable
         * 
         * @namespace youweb.app.layout.printable
         */
        printable:
        {
            event: {
                action: 'app.layout.printable.action'
            },
            ready: function () {
                var self = this;

                self.html.form = self.html.that.find('form');
                self.html.action = self.html.form.find('input[name="action"]');
                self.html.range = self.html.form.find('input[name="range"]');
                self.html.submit = self.html.that.find('button[name="submit"]');

                self.form();
            },
            form: function () {
                var self = this;

                self.wait(function (data) {

                    // Validate
                    self.html.form.validate({
                        rules: {
                            range: {
                                required: function () {
                                    return self.isAction('range');
                                },
                                pages: $.validator.addMethod('pages', function (value, element) {
                                    return this.optional(element) || (function () {
                                        var value = self.html.range.val() || '',
                                            parts = value.split(/\s*,\s*/),
                                            pages = [];

                                        $.each(parts, function (index, part) {
                                            var spliting = part.split(/\s*\-\s*/),
                                                front = spliting[0] === '0' ? '1' : spliting[0],
                                                back = spliting[1] === '0' ? '1' : spliting[1],
                                                first = youweb.integer(front),
                                                second = youweb.integer(back),
                                                from = first,
                                                to = second,
                                                end = -1;

                                            if (first && second) {
                                                from = Math.min(first, second);
                                                to = Math.max(first, second);
                                            }

                                            from = Math.min(from, data.pages.length);
                                            to = Math.min(to, data.pages.length);
                                            end = to || from;

                                            while (from >= 1
                                                && from <= data.pages.length
                                                && from <= end) {
                                                pages.push(from++);
                                            }
                                        });

                                        pages = youweb.toUnique(pages);
                                        pages = pages.sort(function (a, b) {
                                            return a - b;
                                        });

                                        $(element).data('value', pages);
                                        return !!pages.length;
                                    }());

                                }, null) || true
                            },
                        },
                        submitHandler: function (form) {
                            var pages = self.getPages();

                            if (pages.length) {
                                self.printing.print(pages);
                            }
                        }
                    });

                    // Action
                    self.html.action.change(function (event) {
                        if (self.isAction('range')) {
                            self.html.range.prop('disabled', false).focus();
                        }
                        else {
                            self.html.range.prop('disabled', true);
                        }

                        youweb.event.fire(self.event.action);
                    });

                    // Range
                    self.html.range.blur(function (event) {
                        youweb.event.fire(self.event.action);
                    });

                    // Submit
                    self.html.submit.removeAttr('disabled').click(function (event) {
                        self.html.form.submit() && event.preventDefault();
                    });
                });
            },
            getPages: function () {
                var self = this,
                    pages = [];

                switch (self.getAction()) {
                    case 'current':
                        try {
                            pages = self.parent.main.book.now();
                        }
                        catch (ex) { }
                        break;

                    case 'all':
                        try {
                            var start = 1, end = self.parent.main.book.total();
                            while (start <= end) pages.push(start++);
                        }
                        catch (ex) { }
                        break;

                    case 'range':
                        pages = self.html.range.data('value') || [];
                        break;
                }

                return pages;
            },
            isAction: function (action) {
                var self = this;

                return self.getAction() === action;
            },
            getAction: function () {
                var self = this;

                return self.html.action.filter(':checked').val();
            },
            wait: function (callback) {
                var self = this;

                self.root.wait('form', function () {
                    self.parent.main.book.getData(function (data) {
                        callback && callback(data);
                    });
                });
            },

            /**
             * Preview
             * 
             * @namespace youweb.app.layout.printable.preview
             */
            preview:
            {
                ready: function () {
                    var self = this;

                    self.build();
                    self.prev();
                    self.next();
                },
                build: function () {
                    var self = this;

                    youweb.event.on(self.parent.parent.main.book.event.jump, function (event) {
                        self.parent.isAction('current') && self.jump(event.current);
                    });

                    self.parent.isAction('current') || self.jump(1);
                },
                total: function () {
                    var self = this;

                    return self.html.that.find('.current').data('total');
                },
                current: function () {
                    var self = this;

                    return self.html.that.find('.current').data('current');
                },
                prev: function () {
                    var self = this;

                    self.html.that.find('[name="prev"]').click(function () {
                        var total = self.total(),
                            current = self.current(),
                            dest = ((current - 1) % total) || total;

                        self.jump(dest);
                        event.preventDefault();
                    });
                },
                next: function () {
                    var self = this;

                    self.html.that.find('[name="next"]').click(function () {
                        var total = self.total(),
                            current = self.current(),
                            dest = ((current + 1) % total) || total;

                        self.jump(dest);
                        event.preventDefault();
                    });
                },
                jump: function (current) {
                    var self = this;

                    self.parent.parent.main.book.getData(function (data) {
                        var page = data.pages[current - 1],
                            image = new Image(),
                            thumb = self.html.that.find('.thumb'),
                            duration = 200;

                        if (page) {
                            image.onload = image.onerror = function (event) {
                                this.onload = this.onerror = null;
                                if (image.src !== page.url) return;

                                if (event.type === 'load') {
                                    thumb
                                        .attr('src', page.url)
                                        .finish()
                                        .fadeTo(duration, 1);
                                }

                                self.html.that.fadeIn(duration);
                            };

                            thumb.fadeTo(duration, 0);
                            image.src = page.url;

                            self.html.that.find('.current')
                                .data('current', current)
                                .data('total', data.pages.length)
                                .text(function (i, text) {
                                    return text.replace(/^[0-9\/]+/, current + '/' + data.pages.length);
                                });
                        }
                    });
                },
            },

            /**
             * Printing
             * 
             * @namespace youweb.app.layout.printing
             */
            printing:
            {
                ready: function () {
                    var self = this;

                    self.deferred = {};
                    self.deferred.build = self.root.defer();
                    self.html.pages = self.html.that.find('.pages');
                    self.html.that.appendTo(self.root.layout.html.that);

                    self.build();
                    self.listen();
                },
                build: function () {
                    var self = this;

                    self.parent.parent.main.book.getData(function (data) {
                        $.each(data.pages, function (index, page) {
                            var element = $('<div class="page"/>'),
                                image = new Image();

                            image.onload = image.onerror = function (event) {
                                this.onload = this.onerror = null;
                                if (event.type === 'load') {
                                    $('<img class="medium" />')
                                        .attr('src', page.url)
                                        .appendTo(element);
                                }
                            };

                            image.src = page.url;
                            self.html.pages.append(element);
                        });

                        self.deferred.build.resolve();
                    });
                },
                listen: function () {
                    var self = this;

                    youweb.event.on([
                        self.parent.parent.main.book.event.ready,
                        self.parent.parent.main.book.event.jump,
                        self.parent.event.action
                    ],
                    function (event) {
                        self.render(self.parent.getPages());
                    });
                },
                render: function (pages) {
                    var self = this;

                    if (pages && pages.length) {
                        self.deferred.build.done(function () {
                            var children = self.html.pages.children().hide();

                            $.each(pages, function (index, page) {
                                children.eq(page - 1).show();
                            });
                        });
                    }
                },
                print: function (pages) {
                    var self = this

                    if (pages && pages.length) {
                        self.render(pages);
                        window.print();
                    }
                }
            },
        },

        /**
         * Downloadable
         * 
         * @namespace youweb.app.layout.downloadable
         */
        downloadable:
        {
            ready: function () {
                var self = this;

                self.build();
            },
            build: function () {
                var self = this,
                    file = self.html.that.find('.file'),
                    uriOfPdf = youweb.url.query.modify('download=pdf').toUrl(),
                    uriOfZip = youweb.url.query.modify('download=zip').toUrl();

                file.filter('.pdf').attr('href', uriOfPdf);
                file.filter('.zip').attr('href', uriOfZip);

                if (youweb.env.os.ios) {
                    file.attr('target', '_blank');
                }

                file.on('mouseenter', function () {
                    youweb.helper.sound.play('link');
                });
            }
        },

        /**
         * Footer
         * 
         * @namespace youweb.app.layout.footer
         */
        footer:
        {
            ready: function () {
                var self = this;
            },

            /**
             * Toolbar
             * 
             * @namespace youweb.app.layout.footer.toolbar
             */
            toolbar:
            {
                ready: function () {
                    var self = this;

                    self.classes = {};
                    self.classes.invisible = 'invisible';
                    self.classes.active = 'active';
                    self.classes.nearby = 'nearby';

                    self.html.items = self.html.that.find('.items');
                    self.html.more = self.html.items.children().last();
                    self.html.cloned = self.html.items.children().clone();

                    self.build();
                    self.resize();
                    self.tooltip();
                    self.active();
                    self.click();
                },
                build: function () {
                    var self = this;

                    self.parent.parent.main.book.getData(function (data) {

                        // Remove the buy button when the data.url is not set.
                        if (!data.url) {
                            self.html.items
                                .add(self.html.cloned)
                                .add(self.dropmenu.html.scrollable)
                                .children()
                                .find('button[name="buy"]')
                                .remove();
                        }
                    });
                },
                resize: function () {
                    var self = this;

                    setTimeout(function () {
                        $(window).resized({
                            callback: function () {
                                var children = self.html.items.children(),
                                    containerSize = self.html.items.width(),
                                    totalSize = 0;

                                children.each(function (index) {
                                    var item = $(this),
                                        size = item.innerWidth();

                                    if (totalSize + size < containerSize) {
                                        item.show().removeClass(self.classes.invisible);
                                        totalSize += size;
                                    }
                                    else {
                                        children
                                            .slice(index - 1)
                                            .not(self.html.more)
                                            .hide()
                                            .addClass(self.classes.invisible);

                                        return false;
                                    }
                                });

                                self.dropmenu.update();
                                self.html.items.visible();
                            },
                            delay: false,
                            now: true
                        });
                    });
                },
                active: function () {
                    var self = this;

                    self.html.items.children()
                        .on('mouseenter', function () {
                            var item = $(this);

                            item.prev().addClass(self.classes.nearby);
                            item.next().addClass(self.classes.nearby);

                            setTimeout(function () {
                                youweb.helper.sound.play('button');
                            });
                        })
                        .on('mouseleave', function () {
                            var item = $(this);

                            item.prev().removeClass(self.classes.nearby);
                            item.next().removeClass(self.classes.nearby);
                        });
                },
                tooltip: function () {
                    var self = this;

                    self.html.items.find('button').attr('title', function (i) {
                        var me = $(this),
                            text = me.text();

                        self.root.wait('tooltip', function () {
                            var position = 'center top+115%';

                            me.tooltip({
                                position: {
                                    my: position,
                                    at: position,
                                },
                                show: {
                                    duration: 0,
                                    delay: 0
                                },
                                hide: {
                                    duration: 0,
                                    delay: 0
                                },
                                open: function (event, ui) {
                                }
                            });
                        });

                        return text;
                    });
                },
                click: function () {
                    var self = this,
                        button = self.html.items.children().find('button');

                    button.on('tap', function (event, params) {
                        params = params || {};

                        var me = $(this),
                            name = me.attr('name'),
                            activeClass = me.data('activeClass');

                        switch (name) {
                            default:
                                if (params.execute !== false
                                    && self.parent.parent.main.book[name]) {
                                    self.parent.parent.main.book[name](event);
                                }
                                break;
                        }

                        if (activeClass) {
                            me.add(self.dropmenu.html.that.find('button[name="' + name + '"]'))
                                .toggleClass(self.classes.active)
                                .toggleClass(activeClass);
                        }

                        event.preventDefault();
                    });

                    // Sound state
                    setTimeout(function () {
                        if (self.root.memory.get('muted')) {
                            button.filter('button[name="sound"]').trigger('tap');
                        }
                    });
                },

                /**
                 * Dropmenu
                 * 
                 * @namespace youweb.app.layout.footer.toolbar.dropmenu
                 */
                dropmenu:
                {
                    ready: function () {
                        var self = this;

                        self.html.scrollable = self.html.that.children('.scrollable');
                        self.html.toggle = self.parent.html.more.children('button');

                        self.build();
                        self.toggle();
                        self.auto();
                        self.click();
                    },
                    build: function () {
                        var self = this;

                        self.html.items = self.parent.html.cloned.not(':last').clone();
                        self.html.scrollable.empty().append(self.html.items);
                        self.html.scrollable.smoothWheel();
                    },
                    update: function () {
                        var self = this,
                            children = self.parent.html.items.children(),
                            className = self.parent.classes.invisible;

                        children.each(function (index) {
                            var item = $(this);

                            if (item.hasClass(className)) {
                                self.html.items.eq(index).show().removeClass(className);
                            }
                            else {
                                self.html.items.eq(index).hide().addClass(className);
                            }
                        });

                        if (!children.filter('.' + className).any()) {
                            self.parent.html.more.hide().addClass(className);
                            self.html.that.hide();
                        }
                        else {
                            self.parent.html.more.show().removeClass(className);
                        }
                    },
                    toggle: function () {
                        var self = this;

                        self.html.toggle.on('tap', function () {
                            self.html.that.finish().slideToggle({
                                duration: 600,
                                easing: 'easeOutExpo',
                                complete: function () {
                                    // Fixing for some bugs on iOS.
                                    $(this).css('overflow', youweb.env.device.mobile ? 'auto' : 'hide');
                                }
                            });
                        });
                    },
                    auto: function () {
                        var self = this,
                            wrap = self.html.toggle.parent(),
                            timeout = 1000,
                            timer = null;

                        youweb.env.device.mobile || self.html.toggle.parent()
                            .on('mouseout', function () {
                                if (!youweb.env.device.mobile
                                    && self.html.that.is(':visible')) {
                                    clearTimeout(timer);
                                    timer = setTimeout(function () {
                                        if (self.html.that.is(':visible')) {
                                            self.html.that.finish().slideUp({
                                                duration: 600,
                                                easing: 'easeOutExpo'
                                            });
                                        }
                                    }, timeout);
                                }
                            })
                            .on('mouseover', function () {
                                if (!youweb.env.device.mobile
                                    && self.html.that.is(':visible')) {
                                    clearTimeout(timer);
                                }
                            });

                        $(document).on('tap', function (event) {
                            if (self.html.that.is(':visible')) {
                                var target = $(event.target);

                                if (target.is(self.root.layout.main.selector)
                                    || target.parents(self.root.layout.main.selector).length) {
                                    self.html.that.finish().slideUp({
                                        duration: 600,
                                        easing: 'easeOutExpo'
                                    });
                                }
                            }
                        });
                    },
                    click: function () {
                        var self = this;

                        self.html.items.children('button[name]').on('click', function () {
                            var name = $(this).attr('name');

                            self.parent.html.items.find('> li > button[name=' + name + ']').trigger('tap');
                            self.html.that.finish().fadeOut(200);
                        });
                    },
                },
            }
        },

        /**
         * Loading
         * 
         * @namespace youweb.app.layout.loading
         */
        loading:
        {
            ready: function () {
                var self = this;

                self.build();
            },
            build: function () {
                var self = this;

                if (self.need()) {
                    self.listen();
                }
            },
            listen: function () {
                var self = this;

                // Progress
                youweb.event.on(self.parent.main.book.event.preloading, function (event) {
                    var progress = event.progress.toFixed(2) + '%';
                    self.html.that.find('.progress').text(progress);
                });

                // Complete
                youweb.event.on(self.parent.main.book.event.preloaded, function () {
                    self.animate();
                });
            },
            animate: function () {
                var self = this,
                    timeline = youweb.helper.tweener.timeline({
                        onStart: function () {
                            youweb.helper.sound.mute();
                        },
                        onComplete: function () {
                            if (!self.root.memory.get('muted')) {
                                youweb.helper.sound.unmute();
                            }
                            self.html.that.hide();
                        }
                    });

                self.parent.main.book.wait(function () {
                    timeline
                    .to({
                        target: self.html.that,
                        duration: 1,
                        params: {
                            ease: Circ.easeInOut,
                            scale: 1.2,
                            opacity: 0,
                        },
                        position: '-=.0'
                    })
                    .fromTo({
                        target: self.parent.main.book.html.that,
                        duration: 2,
                        from: {
                            opacity: .0,
                            scale: .2,
                        },
                        to: {
                            ease: Circ.easeInOut,
                            opacity: 1,
                            scale: 1,
                        },
                        position: '-=.7'
                    })
                    .addCallback({
                        callback: function () {
                            var page = Math.max(self.parent.main.book.page(), 2);

                            self.parent.main.book.jump(page);
                        },
                        position: '-=1.2'
                    })
                    .fromTo({
                        target: self.parent.header.html.that,
                        duration: 1,
                        from: {
                            y: '-100%',
                        },
                        to: {
                            ease: Circ.easeOut,
                            y: '0%',
                        },
                        position: 1.9
                    })
                    .fromTo({
                        target: self.parent.footer.html.that,
                        duration: 1,
                        from: {
                            y: '100%',
                        },
                        to: {
                            ease: Circ.easeOut,
                            y: '0%',
                        },
                        position: 1.9
                    })
                    .fromTo({
                        target: self.parent.main.controls.html.that.find('button'),
                        duration: .6,
                        from: {
                            opacity: 0,
                        },
                        to: {
                            ease: Circ.easeOut,
                            opacity: 1,
                        },
                        position: 1.9
                    })
                    .fromTo({
                        target: self.parent.footer.toolbar.html.items,
                        duration: 1.3,
                        from: {
                            opacity: 0,
                            scaleY: 0,
                            y: 30
                        },
                        to: {
                            ease: Power4.easeInOut,
                            opacity: 1,
                            scaleY: 1,
                            y: 0
                        },
                        position: 1.7
                    });
                });
            },
            need: function () {
                var self = this;

                return self.html.that.is(':visible');
            },
        }
    },
})
.preinit();