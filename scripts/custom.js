$(window).on('load', function() {
    $('#page-build').remove();
    setTimeout(function() {
        $("#preloader").addClass('hide-preloader');
    }, 450);
});
$(document).ready(function() {
    'use strict'

    function init_template() {
        $('a').on('click', function() {
            var attrs = $(this).attr('href');
            if (attrs === '#') {
                return false;
            }
        });
        $(function() {
            FastClick.attach(document.body);
        });
        $(function() {
            $(".preload-image").lazyload({
                threshold: 500
            });
        });
        setTimeout(function() {
            $('.menu, .menu-hider').css({
                'display': 'block'
            });
        });
        setTimeout(function() {
            $('.page-hider').remove();
        }, 250)
        if (!$('#page-transitions .menu-hider').length) {
            $('#page-transitions').append('<div class="menu-hider"></div>')
        }
        $('.menu-items a').append('<i class="fa fa-angle-right"></i>');
        $('a[data-menu]').on('click', function() {
            var menuData = $(this).data('menu');
            var menuHider = $('.menu-hider');
            var menuID = $('#' + menuData);
            var pageContent = $('.page-content');
            var pageHeader = $('.header');
            var menuSidebarRight = $('#' + menuData).hasClass('sidebar-right');
            var menuSidebarLeft = $('#' + menuData).hasClass('sidebar-left');
            var menuTop = $('#' + menuData).hasClass('menu-top');
            var menuTopActive = $('#' + menuData).hasClass('menu-top-active');
            var menuBottom = $('#' + menuData).hasClass('menu-bottom');
            var menuBottomActive = $('#' + menuData).hasClass('menu-bottom-active');
            var menuHeight = menuID.data('menu-height');
            var moveElements = $('.page-content, .header');
            var pageContentMove = (menuHeight * 35) / 100;
            pageContent.css({
                'min-height': $(window).height()
            })
            menuID.css({
                "height": menuHeight
            });
            menuHider.toggleClass('menu-hider-active');
            if (menuSidebarRight) {
                menuID.toggleClass('sidebar-active');
            }
            if (menuSidebarLeft) {
                menuID.toggleClass('sidebar-active');
            }
            if (menuTop) {
                menuID.addClass('menu-top-active');
                moveElements.css({
                    "transform": "translateY(" + pageContentMove + "px)"
                });
            }
            if (menuTopActive) {
                menuID.removeClass('menu-top-active');
            }
            if (menuBottom) {
                menuID.addClass('menu-bottom-active');
                moveElements.css({
                    "transform": "translateY(" + pageContentMove * (-1) + "px)"
                });
            }
            if (menuBottomActive) {
                menuID.removeClass('menu-bottom-active');
            }
        });
        $('.menu-top').each(function() {
            var menuDistanceTop = $(this).data('menu-height');
            $(this).css({
                "transform": "translateY(" + menuDistanceTop * (-1) + "px)"
            });
        });

        function close_menu() {
            $('.menu, .header, .page-content, .menu-hider, .menu-top, .menu-bottom').removeClass('sidebar-active menu-top-active menu-bottom-active menu-hider-active');
            $('.page-content, .header').css({
                "transform": "translateY(0px)"
            });
        }
        $('.close-menu, .menu-hider').on('click', function() {
            close_menu();
        });
        var dteNow = new Date();
        var intYear = dteNow.getFullYear();
        $('#copyright-year, .copyright-year').html(intYear);
        $('.back-button').on('click', function() {
            $('#page-transitions').addClass('back-button-clicked');
            $('#page-transitions').removeClass('back-button-not-clicked');
            window.history.go(-1);
            return false;
        });
        $('.back-to-top-badge, .back-to-top').on("click", function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, universalTransitionTime);
            return false;
        });

        function header_card() {
            if ($(".header-card").length) {
                $('.header').addClass('hide-header-card');
            } else {
                $('.header').removeClass('hide-header-card');
            }
        }
        header_card();
        $('a[data-accordion]').on("click", function() {
            console.log('test');
            var accordion_number = $(this).data('accordion');
            $('.accordion-content').slideUp(200);
            $('.accordion i').removeClass('rotate-180');
            if ($('#' + accordion_number).is(":visible")) {
                $('#' + accordion_number).slideUp(200);
                $(this).find('i:last-child').removeClass('rotate-180');
            } else {
                $('#' + accordion_number).slideDown(200);
                $(this).find('i:last-child').addClass('rotate-180');
            }
        });
        setTimeout(function() {
            $('.ad-300x50-fixed').fadeIn(350);
        }, 2500);
        $('.close-ad-button').on('click', function() {
            $('.ad-300x50-fixed').fadeOut(250);
        });
        $(window).on('scroll', function() {
            var total_scroll_height = document.body.scrollHeight
            var inside_header = ($(this).scrollTop() <= 200);
            var passed_header = ($(this).scrollTop() >= 0);
            var passed_header2 = ($(this).scrollTop() >= 150);
            var footer_reached = ($(this).scrollTop() >= (total_scroll_height - ($(window).height() + 300)));
            if (inside_header === true) {
                $('.back-to-top-badge').removeClass('back-to-top-badge-visible');
                header_card();
            } else if (passed_header === true) {
                $('.header').removeClass('hide-header-card');
                $('.back-to-top-badge').addClass('back-to-top-badge-visible');
            }
            if (footer_reached == true) {
                $('.back-to-top-badge').removeClass('back-to-top-badge-visible');
            }
        });
        setTimeout(function() {
            $('.single-slider').owlCarousel({
                loop: true,
                margin: 15,
                nav: false,
                // autoHeight: true,
                lazyLoad: true,
                items: 1,
                mouseDrag: true,
                touchDrag: true,
                // autoplay: true,
                // autoplayTimeout: 3500
            });
            $('.single-slider2').owlCarousel({
                loop: false,
                margin: 15,
                nav: false,
                // autoHeight: true,
                lazyLoad: true,
                items: 1,
                mouseDrag: true,
                touchDrag: true,
                // autoplay: true,
                // autoplayTimeout: 3500
            });
            $('.menu-fixed-slider').owlCarousel({
                loop: false,
                margin: 0,
                nav: false,
                items: 5
            });
            $('.double-slider').owlCarousel({
                loop: false,
                margin: 10,
                nav: false,
                // autoHeight: true,
                lazyLoad: true,
                items: 3,
                autoplay: false,
                mouseDrag: true,
                touchDrag: true,
                // autoplayTimeout: 3500
            });
            $('.thumb-slider').owlCarousel({
                loop: true,
                margin: 10,
                nav: false,
                autoHeight: true,
                autoWidth:true,
                lazyLoad: true,
                items: 3,
                autoplay: true,
                autoplayTimeout: 3500
            });
            $('.cover-slider').owlCarousel({
                loop: true,
                nav: false,
                lazyLoad: true,
                items: 1,
                autoplay: true,
                autoplayTimeout: 3500
            });
            $('.cover-walkthrough-slider').owlCarousel({
                loop: false,
                nav: false,
                lazyLoad: true,
                items: 1,
                autoplay: false,
                autoplayTimeout: 3500
            });
            $('.cover-slider-full').owlCarousel({
                loop: false,
                nav: false,
                dots: false,
                mouseDrag: false,
                touchDrag: false,
                pullDrag: false,
                lazyLoad: true,
                items: 1,
                autoplay: true,
                autoplayTimeout: 3500
            });
            $('.timeline-slider').owlCarousel({
                loop: true,
                lazyLoad: true,
                nav: false,
                items: 1,
                autoplay: true,
                autoplayTimeout: 3500
            });
            $('.nonloop-slider').owlCarousel({
                // center: true,
                autoplay: false,
                items:1,
                loop:false,
                mouseDrag: true,
                touchDrag: true,
                autoWidth:true,
                margin:10,
            });
            $('.next-slide, .next-slide-arrow, .next-slide-text, .next-slide-custom').on('click', function() {
                $(this).parent().find('.owl-carousel').trigger('next.owl.carousel');
            });
            $('.prev-slide, .prev-slide-arrow, .prev-slide-text, .prev-slide-custom').on('click', function() {
                $(this).parent().find('.owl-carousel').trigger('prev.owl.carousel');
            });
        }, 100);
        setTimeout(function() {
            resize_coverpage();
        }, 250);
        $(window).on('resize', function() {
            resize_coverpage();
        })

        function resize_coverpage() {
            var cover_height = $(window).height();
            var cover_width = $(window).width();
            if ($('.page-content-full').length > 0) {
                var header_height = "0";
                $('.page-content, #page-transitions').css({
                    "min-height": cover_height
                });
            } else {
                var header_height = "55";
                $('.page-content, #page-transitions').css({
                    "min-height": cover_height
                });
            }
            $('.cover-item').css({
                "height": (cover_height - header_height),
                "width": cover_width
            })
            $('.cover-item-full').css({
                "margin-top": header_height * (-1),
                "height": cover_height,
                "width": cover_width
            })
            $('.coverpage-full .cover-item').css({
                "height": cover_height,
                "width": cover_width
            });
            $('.coverpage-full').css({
                "margin-top": header_height * (-1)
            });
            $('.cover-content-center').each(function() {
                var cover_content_center_height = $(this).innerHeight();
                var cover_content_center_width = $(this).innerWidth();
                $(this).css({
                    "margin-left": (cover_content_center_width / 2) * (-1),
                    "margin-top": ((cover_content_center_height / 2) * (-1))
                })
            });
            $('.cover-content-center-full').each(function() {
                var cover_content_center_height = $(this).innerHeight();
                $(this).css({
                    "margin-top": (cover_content_center_height / 2) * (-1)
                })
            });
        }
        baguetteBox.run('.gallery', {});
        baguetteBox.run('.profile-gallery', {});
        if ($('.gallery-filter').length > 0) {
            $('.gallery-filter').filterizr();
        }
        $('.gallery-filter-controls li').on('click', function() {
            $('.gallery-filter-controls li').removeClass('gallery-filter-active color-highlight');
            $(this).addClass('gallery-filter-active color-highlight');
        })
        var formSubmitted = "false";
        jQuery(document).ready(function(e) {
            function t(t, n) {
                formSubmitted = "true";
                var r = e("#" + t).serialize();
                e.post(e("#" + t).attr("action"), r, function(n) {
                    e("#" + t).hide();
                    e("#formSuccessMessageWrap").fadeIn(500)
                })
            }

            function n(n, r) {
                e(".formValidationError").hide();
                e(".fieldHasError").removeClass("fieldHasError");
                e("#" + n + " .requiredField").each(function(i) {
                    if (e(this).val() == "" || e(this).val() == e(this).attr("data-dummy")) {
                        e(this).val(e(this).attr("data-dummy"));
                        e(this).focus();
                        e(this).addClass("fieldHasError");
                        e("#" + e(this).attr("id") + "Error").fadeIn(300);
                        return false
                    }
                    if (e(this).hasClass("requiredEmailField")) {
                        var s = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                        var o = "#" + e(this).attr("id");
                        if (!s.test(e(o).val())) {
                            e(o).focus();
                            e(o).addClass("fieldHasError");
                            e(o + "Error2").fadeIn(300);
                            return false
                        }
                    }
                    if (formSubmitted == "false" && i == e("#" + n + " .requiredField").length - 1) {
                        t(n, r)
                    }
                })
            }
            e("#formSuccessMessageWrap").hide(0);
            e(".formValidationError").fadeOut(0);
            e('input[type="text"], input[type="password"], textarea').focus(function() {
                if (e(this).val() == e(this).attr("data-dummy")) {
                    e(this).val("")
                }
            });
            e("input, textarea").blur(function() {
                if (e(this).val() == "") {
                    e(this).val(e(this).attr("data-dummy"))
                }
            });
            e("#contactSubmitButton").click(function() {
                n(e(this).attr("data-formId"));
                return false
            })
        })
        var universalTransitionTime = 350;
        $('.header, .footer, .header-card, #menu-hider, .menu-hider-active, .menu-sidebar, .menu-flyin, .active-flyin, .page-content, .menu-sidebar-3d-wrapper, .menu-sidebar, .menu-sidebar-shadow, .content-push-left, .content-push-right, .content-parallax-left, .content-parallax-right, .fake-shadow-right, .fake-shadow-left, .menu-sidebar-push').css({
            WebkitTransition: 'all ' + universalTransitionTime + 'ms ease',
            MozTransition: 'all ' + universalTransitionTime + 'ms ease',
            MsTransition: 'all ' + universalTransitionTime + 'ms ease',
            OTransition: 'all ' + universalTransitionTime + 'ms ease',
            transition: 'all ' + universalTransitionTime + 'ms ease'
        });
        (function(a, b, c) {
            if (c in b && b[c]) {
                var d, e = a.location,
                    f = /^(a|html)$/i;
                a.addEventListener("click", function(a) {
                    d = a.target;
                    while (!f.test(d.nodeName)) d = d.parentNode;
                    "href" in d && (d.href.indexOf("http") || ~d.href.indexOf(e.host)) && (a.preventDefault(), e.href = d.href)
                }, !1)
            }
        })(document, window.navigator, "standalone")
        $('head').append('<meta charset="utf-8">');
        $('head').append('<meta name="apple-mobile-web-app-capable" content="yes">');
        var isMobile = {
            Android: function() {
                return navigator.userAgent.match(/Android/i);
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Windows: function() {
                return navigator.userAgent.match(/IEMobile/i);
            },
            any: function() {
                return (isMobile.Android() || isMobile.iOS() || isMobile.Windows());
            }
        };
        if (!isMobile.any()) {
            $('.show-blackberry, .show-ios, .show-windows, .show-android').addClass('disabled');
            $('.show-no-detection').removeClass('disabled');
        }
        if (isMobile.Android()) {
            $('head').append('<meta name="theme-color" content="#000000"> />');
            $('.show-android').removeClass('disabled');
            $('.show-blackberry, .show-ios, .show-windows, .show-download').addClass('disabled');
            $('.sidebar-scroll').css('right', '0px');
            $('.set-today').addClass('mobile-date-correction');
        }
        if (isMobile.iOS()) {
            $('.show-ios').removeClass('disabled');
            $('.show-blackberry, .show-android, .show-windows, .show-download').addClass('disabled');
            $('.set-today').addClass('mobile-date-correction');
        }
        if (isMobile.Windows()) {
            $('.show-windows').removeClass('disabled');
            $('.show-blackberry, .show-ios, .show-android, .show-download').addClass('disabled');
        }
        $('.inner-link-list').on('click', function() {
            $(this).parent().find('.link-list').slideToggle(250);
        });
        window.FontAwesomeConfig = {
            searchPseudoElements: true
        }
        $('.close-notification').on('click', function() {
            $(this).parent().hide(250);
        });
        if ($('.chart').length > 0) {
            var loadJS = function(url, implementationCode, location) {
                var scriptTag = document.createElement('script');
                scriptTag.src = url;
                scriptTag.onload = implementationCode;
                scriptTag.onreadystatechange = implementationCode;
                location.appendChild(scriptTag);
            };
            var call_charts_to_page = function() {
                new Chart(document.getElementById("pie-chart"), {
                    type: 'pie',
                    data: {
                        labels: ["Facebook", "Twitter", "Google Plus", "Pinterest", "WhatsApp"],
                        datasets: [{
                            backgroundColor: ["#4A89DC", "#4FC1E9", "#FC6E51", "#ED5565", "#A0D468"],
                            borderColor: "rgba(255,255,255,1)",
                            data: [7000, 3000, 1000, 2000, 2000]
                        }]
                    },
                    options: {
                        legend: {
                            display: true,
                            position: 'bottom',
                            labels: {
                                fontSize: 13,
                                padding: 15,
                                boxWidth: 12
                            },
                        },
                        tooltips: {
                            enabled: true
                        },
                        animation: {
                            duration: 1500
                        }
                    }
                });
                new Chart(document.getElementById("doughnut-chart"), {
                    type: 'doughnut',
                    data: {
                        labels: ["Apple Inc.", "Samsung", "Google", "One Plus", "Huawei"],
                        datasets: [{
                            backgroundColor: ["#CCD1D9", "#5D9CEC", "#FC6E51", "#434A54", "#4FC1E9"],
                            borderColor: "rgba(255,255,255,1)",
                            data: [5500, 4000, 2000, 3000, 1000]
                        }]
                    },
                    options: {
                        legend: {
                            display: true,
                            position: 'bottom',
                            labels: {
                                fontSize: 13,
                                padding: 15,
                                boxWidth: 12
                            },
                        },
                        tooltips: {
                            enabled: true
                        },
                        animation: {
                            duration: 1500
                        },
                        layout: {
                            padding: {
                                bottom: 30
                            }
                        }
                    }
                });
                new Chart(document.getElementById("polar-chart"), {
                    type: 'polarArea',
                    data: {
                        labels: ["Windows", "Mac", "Linux"],
                        datasets: [{
                            backgroundColor: ["#CCD1D9", "#5D9CEC", "#FC6E51"],
                            borderColor: "rgba(255,255,255,1)",
                            data: [7000, 10000, 5000]
                        }]
                    },
                    options: {
                        legend: {
                            display: true,
                            position: 'bottom',
                            labels: {
                                fontSize: 13,
                                padding: 15,
                                boxWidth: 12
                            },
                        },
                        tooltips: {
                            enabled: true
                        },
                        animation: {
                            duration: 1500
                        },
                        layout: {
                            padding: {
                                bottom: 30
                            }
                        }
                    }
                });
                new Chart(document.getElementById("vertical-chart"), {
                    type: 'bar',
                    data: {
                        labels: ["2010", "2015", "2020", "2025"],
                        datasets: [{
                            label: "iOS",
                            backgroundColor: "#A0D468",
                            data: [900, 1000, 1200, 1400]
                        }, {
                            label: "Android",
                            backgroundColor: "#4A89DC",
                            data: [890, 950, 1100, 1300]
                        }]
                    },
                    options: {
                        legend: {
                            display: true,
                            position: 'bottom',
                            labels: {
                                fontSize: 13,
                                padding: 15,
                                boxWidth: 12
                            },
                        },
                        title: {
                            display: false
                        }
                    }
                });
                new Chart(document.getElementById("horizontal-chart"), {
                    type: 'horizontalBar',
                    data: {
                        labels: ["2010", "2013", "2016", "2020"],
                        datasets: [{
                            label: "Mobile",
                            backgroundColor: "#BF263C",
                            data: [330, 400, 580, 590]
                        }, {
                            label: "Responsive",
                            backgroundColor: "#EC87C0",
                            data: [390, 450, 550, 570]
                        }]
                    },
                    options: {
                        legend: {
                            display: true,
                            position: 'bottom',
                            labels: {
                                fontSize: 13,
                                padding: 15,
                                boxWidth: 12
                            },
                        },
                        title: {
                            display: false
                        }
                    }
                });
                new Chart(document.getElementById("line-chart"), {
                    type: 'line',
                    data: {
                        labels: [2000, 2005, 2010, 2015, 2010],
                        datasets: [{
                            data: [500, 400, 300, 200, 300],
                            label: "Desktop Web",
                            borderColor: "#D8334A"
                        }, {
                            data: [0, 100, 300, 400, 500],
                            label: "Mobile Web",
                            borderColor: "#4A89DC"
                        }]
                    },
                    options: {
                        legend: {
                            display: true,
                            position: 'bottom',
                            labels: {
                                fontSize: 13,
                                padding: 15,
                                boxWidth: 12
                            },
                        },
                        title: {
                            display: false
                        }
                    }
                });
            }
            loadJS('scripts/charts.js', call_charts_to_page, document.body);
        }

        function createCookie(e, t, n) {
            if (n) {
                var o = new Date;
                o.setTime(o.getTime() + 48 * n * 60 * 60 * 1e3);
                var r = "; expires=" + o.toGMTString()
            } else var r = "";
            document.cookie = e + "=" + t + r + "; path=/"
        }

        function readCookie(e) {
            for (var t = e + "=", n = document.cookie.split(";"), o = 0; o < n.length; o++) {
                for (var r = n[o];
                    " " == r.charAt(0);) r = r.substring(1, r.length);
                if (0 == r.indexOf(t)) return r.substring(t.length, r.length)
            }
            return null
        }

        function eraseCookie(e) {
            createCookie(e, "", -1)
        }
        if (!readCookie('enabled_cookie_themeforest_ultramobile1')) {
            setTimeout(function() {
                $('.cookie-policy').fadeIn(300);
            }, 1500);
        }
        if (readCookie('enabled_cookie_themeforest_ultramobile1')) {
            $('.cookie-policy').fadeOut(300);
        }
        $('.hide-cookie').click(function() {
            $('.cookie-policy').fadeOut(300);
            createCookie('enabled_cookie_themeforest_ultramobile1', true, 1)
        });
        $(window).scroll(function() {
            var wintop = $(window).scrollTop(),
                docheight = $('.page-content').height(),
                winheight = $(window).height();
            var totalScroll = (wintop / (docheight - winheight)) * 100;
            $(".reading-line").css("width", totalScroll + "%");
        });
        $(function() {
            var $article = $('.reading-time-box');
            $article.readingTime({
                readingTimeAsNumber: true,
                readingTimeTarget: $article.find('.reading-time'),
                wordCountTarget: $article.find('.reading-words'),
                wordsPerMinute: 1075,
                round: false,
                lang: 'en',
            });
        });
        $('a[data-deploy-snack]').on("click", function() {
            var snack_number = $(this).data('deploy-snack');
            $('#' + snack_number).addClass('active-snack');
            setTimeout(function() {
                $('#' + snack_number).removeClass('active-snack');
            }, 5000);
        });
        $('.snackbar a').on('click', function() {
            $(this).parent().removeClass('active-snack');
        });
        $('.snb').on("click", function() {
            var snb_height = $('.notification-bar').height();
            $('.notification-bar').toggleClass('toggle-notification-bar');
        });
        if ($('#sortable').length) {
            var list = document.getElementById("sortable");
            Sortable.create(list);
        }
        $('[data-search]').on('keyup', function() {
            var searchVal = $(this).val();
            var filterItems = $(this).parent().parent().find('[data-filter-item]');
            if (searchVal != '') {
                $(this).parent().parent().find('.search-results').removeClass('disabled-search-list');
                $(this).parent().parent().find('[data-filter-item]').addClass('disabled-search');
                $(this).parent().parent().find('[data-filter-item][data-filter-name*="' + searchVal.toLowerCase() + '"]').removeClass('disabled-search');
            } else {
                $(this).parent().parent().find('.search-results').addClass('disabled-search-list');
                $(this).parent().parent().find('[data-filter-item]').removeClass('disabled-search');
            }
            var filterItemsFixed = $('.search-fixed').find('[data-filter-item]');
            if (searchVal != '') {
                $('.search-fixed .search-results').removeClass('disabled-search-list');
                $('.search-fixed .search-results').find('[data-filter-item]').addClass('disabled-search');
                $('.search-fixed .search-results').find('[data-filter-item][data-filter-name*="' + searchVal.toLowerCase() + '"]').removeClass('disabled-search');
            } else {
                $('.search-fixed .search-results').addClass('disabled-search-list');
                $('.search-fixed .search-results').find('[data-filter-item]').removeClass('disabled-search');
            }
        });
        $('.open-search').on('click', function() {
            $('.search-header').addClass('show-fixed-search');
        });
        $('.close-search').on('click', function() {
            $('.search-fixed .search-results').addClass('disabled-search-list');
            $('.search-fixed .search-results').find('[data-filter-item]').addClass('disabled-search');
            $('.search-header').removeClass('show-fixed-search');
        });
        $('.active-tab').fadeIn(0);
        $('a[data-tab]').on("click", function() {
            var tab_number = $(this).data('tab');
            $(this).parent().find('[data-tab]').removeClass('active-tab-button');
            $(this).parent().parent().find('.tab-titles a').removeClass('active-tab-button');
            $(this).addClass('active-tab-button');
            $(this).parent().parent().find('.tab-item').fadeOut(200);
            $('#' + tab_number).fadeIn(200);
        });
        $('a[data-tab-pill]').on("click", function() {
            var tab_number = $(this).data('tab-pill');
            var tab_bg = $(this).parent().parent().find('.tab-pill-titles').data('active-tab-pill-background');
            $(this).parent().find('[data-tab-pill]').removeClass('active-tab-pill-button ' + tab_bg);
            $(this).parent().parent().find('.tab-titles a').removeClass('active-tab-pill-button ' + tab_bg);
            $(this).addClass('active-tab-pill-button ' + tab_bg);
            $(this).parent().parent().find('.tab-item').fadeOut(200);
            $('#' + tab_number).fadeIn(200);
        });
        $('a[data-toast]').on("click", function() {
            $('.toast').removeClass('show-toast');
            var toast_number = $(this).data('toast');
            $('#' + toast_number).addClass('show-toast');
            setTimeout(function() {
                $('#' + toast_number).removeClass('show-toast');
            }, 3000);
        });
        $('.toggle-trigger, .toggle-title').on('click', function() {
            $(this).parent().toggleClass('toggle-active');
            $(this).parent().find('.toggle-content').slideToggle(250);
        });
        $('.faq-question').on('click', function() {
            $(this).parent().find('.faq-answer').slideToggle(300);
            $(this).find('.fa-plus').toggleClass('rotate-45');
            $(this).find('.fa-chevron-down').toggleClass('rotate-180');
            $(this).find('.fa-arrow-down').toggleClass('rotate-180');
        })
        if ($('.article-card, .instant-box').length) {
            setTimeout(function() {
                $('[data-article-card="' + activate_clone + '"]').addClass('active-card');
                $('[data-instant="' + activate_clone + '"]').addClass('active-instant');
            }, 0);
        }
        $('[data-article-card]').clone().addClass('article-clone').removeClass('article-card-round').appendTo('#page-transitions');
        $('.article-clone .article-header').append('<span class="article-back"><i class="fa fa-angle-left"></i> Back</span>');
        $('[data-deploy-card]').on('click', function() {
            $('.article-clone a').removeAttr('data-deploy-card');
            var data_card = $(this).data('deploy-card');
            $('[data-article-card="' + data_card + '"]').addClass('active-card');
            $('.article-card').animate({
                scrollTop: 0
            }, 0);
        });
        $('.article-clone .article-back, .close-article').on('click', function() {
            $('.article-clone').removeClass('active-card');
            return false;
        });
        $('.instant-box').clone().addClass('instant-box-clone').appendTo('#page-transitions');
        $('[data-deploy-instant]').on('click', function() {
            $('.instant-box-clone .instant-content').removeAttr('data-deploy-instant');
            var data_card = $(this).data('deploy-instant');
            $('[data-instant="' + data_card + '"]').addClass('active-instant');
            $('.instant-box').animate({
                scrollTop: 0
            }, 0);
        });
        $('.instant-clone').remove('instant-hidden-large');
        $('.close-instant').on('click', function() {
            $('.instant-box-clone').removeClass('active-instant');
            return false;
        });
        if ($('.progress-bar').length > 0) {
            $('.progress-bar-wrapper').each(function() {
                var progress_height = $(this).data('progress-height');
                var progress_border = $(this).data('progress-border');
                var progress_round = $(this).attr('data-progress-round');
                var progress_color = $(this).data('progress-bar-color');
                var progress_bg = $(this).data('progress-bar-background');
                var progress_complete = $(this).data('progress-complete');
                var progress_text_visible = $(this).attr('data-progress-text-visible');
                var progress_text_color = $(this).attr('data-progress-text-color');
                var progress_text_size = $(this).attr('data-progress-text-size');
                var progress_text_position = $(this).attr('data-progress-text-position');
                var progress_text_before = $(this).attr('data-progress-text-before');
                var progress_text_after = $(this).attr('data-progress-text-after');
                if (progress_round === 'true') {
                    $(this).find('.progress-bar').css({
                        'border-radius': progress_height
                    })
                    $(this).css({
                        'border-radius': progress_height
                    })
                }
                if (progress_text_visible === 'true') {
                    $(this).append('<em>' + progress_text_before + progress_complete + '%' + progress_text_after + '</em>')
                    $(this).find('em').css({
                        "color": progress_text_color,
                        "text-align": progress_text_position,
                        "font-size": progress_text_size + 'px',
                        "height": progress_height + 'px',
                        "line-height": progress_height + progress_border + 'px'
                    });
                }
                $(this).css({
                    "height": progress_height + progress_border,
                    "background-color": progress_bg,
                })
                $(this).find('.progress-bar').css({
                    "width": progress_complete + '%',
                    "height": progress_height - progress_border,
                    "background-color": progress_color,
                    "border-left-color": progress_bg,
                    "border-right-color": progress_bg,
                    "border-left-width": progress_border,
                    "border-right-width": progress_border,
                    "margin-top": progress_border,
                })
            });
        }

        function countdown(dateEnd) {
            var timer, years, days, hours, minutes, seconds;
            dateEnd = new Date(dateEnd);
            dateEnd = dateEnd.getTime();
            if (isNaN(dateEnd)) {
                return;
            }
            timer = setInterval(calculate, 1);

            function calculate() {
                var dateStart = new Date();
                var dateStart = new Date(dateStart.getUTCFullYear(), dateStart.getUTCMonth(), dateStart.getUTCDate(), dateStart.getUTCHours(), dateStart.getUTCMinutes(), dateStart.getUTCSeconds());
                var timeRemaining = parseInt((dateEnd - dateStart.getTime()) / 1000)
                if (timeRemaining >= 0) {
                    years = parseInt(timeRemaining / 31536000);
                    timeRemaining = (timeRemaining % 31536000);
                    days = parseInt(timeRemaining / 86400);
                    timeRemaining = (timeRemaining % 86400);
                    hours = parseInt(timeRemaining / 3600);
                    timeRemaining = (timeRemaining % 3600);
                    minutes = parseInt(timeRemaining / 60);
                    timeRemaining = (timeRemaining % 60);
                    seconds = parseInt(timeRemaining);
                    if ($('.countdown').length > 0) {
                        $(".countdown #years")[0].innerHTML = parseInt(years, 10);
                        $(".countdown #days")[0].innerHTML = parseInt(days, 10);
                        $(".countdown #hours")[0].innerHTML = ("0" + hours).slice(-2);
                        $(".countdown #minutes")[0].innerHTML = ("0" + minutes).slice(-2);
                        $(".countdown #seconds")[0].innerHTML = ("0" + seconds).slice(-2);
                    }
                } else {
                    return;
                }
            }

            function display(days, hours, minutes, seconds) {}
        }
        countdown('01/19/2030 03:14:07 AM');
        $('.show-map, .hide-map').on('click', function() {
            $('.map-full .cover-content').toggleClass('deactivate-map');
            $('.map-full .cover-overlay').toggleClass('deactivate-map');
            $('.map-but-1, .map-but-2').toggleClass('deactivate-map');
            $('.map-full .hide-map').toggleClass('activate-map');
        });
        $('[data-toggle-box]').on('click', function() {
            var toggle_box = $(this).data('toggle-box');
            if ($('#' + toggle_box).is(":visible")) {
                $('#' + toggle_box).slideUp(250);
            } else {
                $("[id^='box']").slideUp(250);
                $('#' + toggle_box).slideDown(250);
            }
        });
        $('.read-more-show').on('click', function() {
            $(this).hide();
            $(this).parent().parent().find('.read-more-box').show();
        });
        var share_link = window.location.href;
        $('.shareToFacebook').prop("href", "https://www.facebook.com/sharer/sharer.php?u=" + share_link)
        $('.shareToGooglePlus').prop("href", "https://plus.google.com/share?url=" + share_link)
        $('.shareToTwitter').prop("href", "https://twitter.com/home?status=" + share_link)
        $('.shareToPinterest').prop("href", "https://pinterest.com/pin/create/button/?url=" + share_link)
        $('.shareToWhatsApp').prop("href", "whatsapp://send?text=" + share_link)
        $('.shareToMail').prop("href", "mailto:?body=" + share_link)
    }
    setTimeout(init_template, 0);
    $(function() {
        'use strict';
        var options = {
            prefetch: true,
            prefetchOn: 'mouseover',
            cacheLength: 100,
            scroll: true,
            blacklist: '.default-link' && '.show-gallery',
            forms: 'contactForm',
            onStart: {
                duration: 350,
                render: function($container) {
                    $container.addClass('is-exiting');
                    $('.page-change-preloader').addClass('show-change-preloader');
                    $('.menu, .header, .page-content, .menu-hider, .menu-top, .menu-bottom').removeClass('sidebar-active menu-top-active menu-bottom-active menu-hider-active');
                    $('.page-content, .header').css({
                        "transform": "translateY(0px)"
                    });
                    return false;
                }
            },
            onReady: {
                duration: 50,
                render: function($container, $newContent) {
                    $container.removeClass('is-exiting');
                    $container.html($newContent);
                    $('#page-build').remove();
                    $('.page-change-preloader').addClass('show-change-preloader');
                }
            },
            onAfter: function($container, $newContent) {
                setTimeout(init_template, 0)
                setTimeout(function() {
                    $('.page-change-preloader').removeClass('show-change-preloader');
                }, 150);
            }
        };
        var smoothState = $('#page-transitions').smoothState(options).data('smoothState');
    });
    $('body').append('<div class="page-change-preloader preloader-light"><div id="preload-spinner" class="spinner-blue"></div></div>');
});