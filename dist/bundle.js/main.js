$(document).ready((function(){$("#banner-area .owl-carousel").owlCarousel({dots:!0,items:1,loop:!0,autoplay:!0,autoplayTimeout:0,autoplayHoverPause:!0}),$("#top-sale .owl-carousel").owlCarousel({loop:!0,nav:!0,dots:!1,responsive:{0:{items:2},600:{items:2},1e3:{items:5}}});var t=$(".grid").isotope({itemSelector:".grid-item",layoutMode:"fitRows"});$(".button-group").on("click","button",(function(){var o=$(this).attr("data-filter");t.isotope({filter:o})})),$("#new-clothes .owl-carousel").owlCarousel({loop:!0,nav:!0,dots:!1,responsive:{0:{items:2},600:{items:2},1e3:{items:5}}});let o=$(".qty .qty_up"),a=$(".qty .qty_down");o.click((function(t){let o=$(`.qty_input[data-id='${$(this).data("id")}']`);o.val()>=1&&o.val()<=19&&o.val((function(t,o){return++o}))})),a.click((function(t){let o=$(`.qty_input[data-id='${$(this).data("id")}']`);o.val()>1&&o.val()<=20&&o.val((function(t,o){return--o}))}))})),$((function(){$("[data-trigger]").on("click",(function(){var t=$(this).attr("data-trigger");$(t).toggleClass("show"),$("body").toggleClass("offcanvas-active")})),$(".btn-close").click((function(){$(".navbar-collapse").removeClass("show"),$("body").removeClass("offcanvas-active")}))}));