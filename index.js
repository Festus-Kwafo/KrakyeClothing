$(document).ready(function(){
    //banner owl carousel
    $("#banner-area .owl-carousel").owlCarousel({
        dots: true,
        items: 1,
        loop: true,
        autoplay:true,
        autoplayTimeout:000,
        autoplayHoverPause:true
    });

    //top sale carousel
    $("#top-sale .owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        responsive: {
            0:{
                items: 2
            },
            600:{
                items: 2
            },
            1000:{
                items: 5
            }
        }
    });
    //isotope filter
    var $grid = $(".grid").isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
    });

    //filter items on buttton click
    $(".button-group").on("click", "button", function(){
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({filter:filterValue});
    });

    //New Clothes carousel
    $("#new-clothes .owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        responsive: {
            0:{
                items: 2
            },
            600:{
                items: 2
            },
            1000:{
                items: 5
            }
        }
    });
    //product Qty section
    let $qty_up = $(".qty .qty_up");
    let $qty_down = $(".qty .qty_down");
    //let $input = $(".qty .qty_input");

    //click on qty
    $qty_up.click(function(e){
        let $input = $(`.qty_input[data-id='${$(this).data("id")}']`);
        if($input.val() >= 1 && $input.val() <= 19){
            $input.val(function(i, oldval){
                return++oldval;
            })
        }
    });

    //click on qty
    $qty_down.click(function(e){
        let $input = $(`.qty_input[data-id='${$(this).data("id")}']`);
        if($input.val() > 1 && $input.val() <= 20){
            $input.val(function(i, oldval){
                return--oldval;
            })
        }
    });
});

$(function(){
    $("[data-trigger]").on("click", function(){
        var target_id = $(this).attr("data-trigger");
        $(target_id).toggleClass("show")
        $('body').toggleClass("offcanvas-active")  
    });

    $(".btn-close").click(function(){
        $(".navbar-collapse").removeClass("show");
        $('body').removeClass("offcanvas-active");
    })
})

function myFunction(x) {
    x.classList.toggle("show_color");
  }
