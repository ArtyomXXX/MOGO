$((function(){let e=$("#header"),l=$("#main").innerHeight(),a=$(window).scrollTop();function t(a){a>l?e.addClass("fixed"):e.removeClass("fixed")}t(a),$(window).on("scroll",(function(){a=$(this).scrollTop(),t(a)})),$("[data-scroll]").on("click",(function(e){e.preventDefault();let l=$(this),a=$(this).data("scroll"),t=$(a).offset().top;$("#nav a").removeClass("active"),l.addClass("active"),$("html, body").animate({scrollTop:t},500)})),$("#nav-toggle").on("click",(function(e){e.preventDefault(),$(this).toggleClass("active"),$("#nav").toggleClass("active")})),$("[data-collapse]").on("click",(function(e){e.preventDefault();let l=$(this).data("collapse");$(".accordion__header::after").toggleClass("accordion__header::after active"),$(this).addClass("active"),$(l).slideToggle()})),$(".single-item").slick({Infinity:!0,fade:!1,slidesToShow:1,slidesToScroll:1})}));