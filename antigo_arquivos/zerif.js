jQuery(window).load(function() {
        jQuery(".status").fadeOut();
        jQuery(".preloader").delay(1000).fadeOut("slow")
});
jQuery(document).ready(function() {
        if (jQuery(window).width() < 767) {
                jQuery('#site-navigation li').each(function() {
                        if (jQuery(this).find('ul').length > 0) {
                                jQuery(this).addClass('has_children');
                                jQuery(this).find('a').first().after('<p class="dropdownmenu"></p>')
                        }
                })
        }
        jQuery('.dropdownmenu').click(function() {
                if (jQuery(this).parent('li').hasClass('this-open')) {
                        jQuery(this).parent('li').removeClass('this-open')
                } else {
                        jQuery(this).parent('li').addClass('this-open')
                }
        })
});

jQuery(document).ready(function() {
        jQuery('.main-nav-list a[href*=#]:not([href=#])').click(function() {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                        var target = jQuery(this.hash);
                        target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
                        if (target.length) {
                                jQuery('html,body').animate({
                                        scrollTop: target.offset().top
                                }, 1000);
                                return false
                        }
                }
        });
        var top = jQuery('#main-nav').offset().top - parseFloat(jQuery('#main-nav').css('margin-top').replace(/auto/, 0));
        jQuery(window).scroll(function(event) {
                var y = jQuery(this).scrollTop();
                if (y >= top) {
                        jQuery('#main-nav').addClass('fixed')
                } else {
                        jQuery('#main-nav').removeClass('fixed')
                }
        });
        jQuery('body:not(.home)').removeClass('custom-background')
});
var scrollAnimationTime = 1200,
        scrollAnimation = 'easeInOutExpo';
jQuery('a.scrollto').bind('click.smoothscroll', function(event) {
        event.preventDefault();
        var target = this.hash;
        jQuery('html, body').stop().animate({
                'scrollTop': jQuery(target).offset().top
        }, scrollAnimationTime, scrollAnimation, function() {
                window.location.hash = target
        })
});
jQuery(document).ready(function() {
        var jQuerywindow = jQuery(window);
        jQuery('div[data-type="background"], header[data-type="background"], section[data-type="background"]').each(function() {
                var jQuerybgobj = jQuery(this);
                jQuery(window).scroll(function() {
                        var yPos = -(jQuerywindow.scrollTop() / jQuerybgobj.data('speed'));
                        var coords = '50% ' + yPos + 'px';
                        jQuerybgobj.css({
                                backgroundPosition: coords
                        })
                })
        })
});
jQuery(function() {
        jQuery(".skill1").knob({
                'max': 100,
                'width': 64,
                'readOnly': true,
                'inputColor': ' #FFFFFF ',
                'bgColor': ' #222222 ',
                'fgColor': ' #e96656 '
        });
        jQuery(".skill2").knob({
                'max': 100,
                'width': 64,
                'readOnly': true,
                'inputColor': ' #FFFFFF ',
                'bgColor': ' #222222 ',
                'fgColor': ' #34d293 '
        });
        jQuery(".skill3").knob({
                'max': 100,
                'width': 64,
                'readOnly': true,
                'inputColor': ' #FFFFFF ',
                'bgColor': ' #222222 ',
                'fgColor': ' #3ab0e2 '
        });
        jQuery(".skill4").knob({
                'max': 100,
                'width': 64,
                'readOnly': true,
                'inputColor': ' #FFFFFF ',
                'bgColor': ' #222222 ',
                'fgColor': ' #E7AC44 '
        })
});
jQuery('.navbar-toggle').on('click', function() {
        jQuery(this).toggleClass('active')
});
jQuery(window).load(function() {
        var vp_h = jQuery(window).height();
        var b_g = jQuery('body').height();
        if (b_g < vp_h) {
                jQuery('footer').css("position", "absolute");
                jQuery('footer').css("bottom", "0px");
                jQuery('footer').css("width", "100%")
        }
        jQuery("form :input").each(function(index, elem) {
                var eId = jQuery(elem).attr("class");
                if ((eId == "sib-email-area") || (eId == "sib-NAME-area")) {
                        var label = null;
                        if (eId && (label = jQuery(elem).parents("form").find("label." + eId)).length == 1) {
                                jQuery(elem).attr("placeholder", jQuery(label).html());
                                jQuery(label).remove()
                        }
                }
        });
        var aChildren = jQuery("nav li").children('a');
        var aArray = [];
        for (var i = 0; i < aChildren.length; i++) {
                var aChild = aChildren[i];
                var ahref = jQuery(aChild).attr('href');
                aArray.push(ahref)
        }
        jQuery(window).scroll(function() {
                var windowPos = jQuery(window).scrollTop();
                var windowHeight = jQuery(window).height();
                var docHeight = jQuery(document).height();
                for (var i = 0; i < aArray.length; i++) {
                        if (aArray[i].indexOf("#") != -1) {
                                var theID = aArray[i].substr(aArray[i].indexOf("#"));
                                var divPos = jQuery(theID).offset().top;
                                var divHeight = jQuery(theID).height();
                                if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
                                        if (jQuery("a[href='" + theID + "']").length) {
                                                jQuery("a[href='" + theID + "']").addClass("nav-active")
                                        } else if (jQuery("a[href='" + aArray[i] + "']").length) {
                                                jQuery("a[href='" + aArray[i] + "']").addClass("nav-active")
                                        }
                                } else {
                                        if (jQuery("a[href='" + theID + "']").length) {
                                                jQuery("a[href='" + theID + "']").removeClass("nav-active")
                                        } else if (jQuery("a[href='" + aArray[i] + "']").length) {
                                                jQuery("a[href='" + aArray[i] + "']").removeClass("nav-active")
                                        }
                                }
                        }
                }
                if (windowPos + windowHeight == docHeight) {
                        if (!jQuery("nav li:last-child a").hasClass("nav-active")) {
                                var navActiveCurrent = $(".nav-active").attr("href");
                                jQuery("a[href='" + navActiveCurrent + "']").removeClass("nav-active");
                                jQuery("nav li:last-child a").addClass("nav-active")
                        }
                }
        })
});