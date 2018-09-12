$(window).on('load', function () {
    $('.preloader-background').delay(0).fadeOut('slow');
    $('.preloader-wrapper').delay(0).fadeOut();

    setTimeout(function () { $("#banner-name").fadeIn(1000); }, 250);
    setTimeout(function () { $("#banner-logo").fadeIn(1000); }, 750);
    setTimeout(function () {
        var logo = document.getElementById('banner-logo');
        logo.classList.add("enlarge");
    }, 1750);
    setTimeout(function () { $("#banner-buttons").fadeIn(1000); }, 1750);
    setTimeout(function () { $("#banner-down").removeClass("scale-out").addClass("scale-in"); }, 2250);

});

$(document).ready(function () {
    $('.parallax').parallax();
    $('.sidenav').sidenav();

    let numBokehDots = 30;
    let banner = document.getElementById("banner");
    let sizes = ["tiny", "small", "medium", "big"];
    let distances = ["distant", "far", "near", "close"];
    let colors = ["#D3BE86", "white", "#FAF0E6"];

    for (var i = 0; i < numBokehDots; i++) {
        let newBokehDot = document.createElement("div")
        newBokehDot.classList.add("bokeh");
        newBokehDot.classList.add(sizes[Math.floor(Math.random() * sizes.length)]);
        newBokehDot.classList.add(distances[Math.floor(Math.random() * distances.length)]);

        newBokehDot.style.top = (Math.floor(40 + (i * 0.8) + Math.random() * 5)).toString() + "vh";
        if (i % 2 == 0) {
            newBokehDot.style.left = (Math.floor(Math.pow(Math.random() + 0.2, 2) * 30)).toString() + "vw";
        }
        else {
            newBokehDot.style.right = (Math.floor(Math.pow(Math.random() + 0.2, 2) * 30)).toString() + "vw";
        }

        newBokehDot.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        banner.appendChild(newBokehDot);
    }

    $(".bokeh.distant").paroller({ factor: 0.2, type: 'foreground', direction: 'vertical' });
    $(".bokeh.far").paroller({ factor: 0.4, type: 'foreground', direction: 'vertical' });
    $(".bokeh.near").paroller({ factor: 0.8, type: 'foreground', direction: 'vertical' });
    $(".bokeh.close").paroller({ factor: 1.2, type: 'foreground', direction: 'vertical' });

    $(document).scroll(function () {
        var navbar = $("#top-navbar");
        navbar.toggleClass('afterScroll', $(this).scrollTop() > window.screen.height * 0.1);
    });


    ScrollReveal({ origin: 'bottom', distance: '50px', duration: '2000' }).reveal('.section');
    ScrollReveal({ origin: 'bottom', distance: '50px', duration: '2000' }).reveal('.sr-bottom');
    ScrollReveal({ origin: 'left', distance: '20px', duration: '2000' }).reveal('.sr-left');
    ScrollReveal({ origin: 'right', distance: '20px', duration: '2000' }).reveal('.sr-right');

    let courseworkButton = document.getElementById("coursework-button");
    courseworkButton.addEventListener("click", function () {
        this.classList.toggle("clicked");
        let courseworkList = document.getElementById("coursework-list");
        if (courseworkList.style.maxHeight) {
            courseworkList.style.maxHeight = null;
        } else {
            courseworkList.style.maxHeight = courseworkList.scrollHeight + "px";
        }
    });

    let nonTechnicalButton = document.getElementById("non-technical-button");
    nonTechnicalButton.addEventListener("click", function () {
        let nonTechnicalList = document.getElementById("non-technical-list");
        if (nonTechnicalList.style.maxWidth) {
            nonTechnicalList.style.maxWidth = null;
            this.classList.remove("fa-angle-double-left");
            this.classList.add("fa-angle-double-right")
        } else {
            nonTechnicalList.style.maxWidth = "100%";
            this.classList.remove("fa-angle-double-right");
            this.classList.add("fa-angle-double-left")
        }
    });

    // from https://css-tricks.com/snippets/jquery/smooth-scrolling/
    $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 500, function () {
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) {
                            return false;
                        } else {
                            $target.attr('tabindex', '-1');
                            $target.focus();
                        };
                    });
                }
            }
        });

});

