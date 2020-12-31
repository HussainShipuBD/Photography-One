// Mobile Menu Dropdown
$(".icon_click").click(function() {
    $(".mobile_menu_dropdown, .all_toggles, .icon_click, .icon_rmv").addClass("active");
    $("html").addClass("modal-open");
});

$(".icon_rmv, .all_toggles").click(function() {
    $(".mobile_menu_dropdown, .all_toggles, .icon_rmv, .icon_click").removeClass("active");
    $("html").removeClass("modal-open");
});

// Mobile Menu iteam select
$(document).ready(function () {
    $(".mbl_select_iteam_in").click(function () {
        $(this).toggleClass("icon").siblings().slideToggle(300);
    })
});

// Mobile bottom
$(".icon_one").click(function () {
  $(".mobile_menu_btm").addClass("active");
  $(".icon_one").addClass("active");
    $(".icon_two").addClass("active");
});

$(".icon_two").click(function () {
    $(".mobile_menu_btm").removeClass("active");
    $(".icon_one").removeClass("active");
    $(".icon_two").removeClass("active");
});

// $("._1mobile_menu_search").click(function () {
//     $(".mobile_menu_btm").removeClass("active");
// });

//MENU SEARCH OPEN
$(document).ready(function(){
  $("#_1menu_search_click").click(function(){
    if ($("#_1menu_search_click").hasClass("_1menu_search_icon")) {
      $("#_1menu_search").removeClass("_1menu_search_main_none").addClass( "_1menu_search_main_open" );
      $("#_1menu_search_click").addClass( "_1menu_search_icon_none" );
      $("#_1menu_list").addClass( "_1menu_list_none" );
    }
  });

  $("#_1menu_search_cloase").click(function(){
    if ($("#_1menu_search_cloase").hasClass("_1menu_search_cloase")) {
      $("#_1menu_search").removeClass("_1menu_search_main_open").addClass( "_1menu_search_main_none" );
      $("#_1menu_search_click").removeClass( "_1menu_search_icon_none" );
      $("#_1menu_list").removeClass( "_1menu_list_none" );
    }
  });
});


//SCROLL MENU ONE
$(document).ready(function(){
  var scrollTop = 0;
  $(window).scroll(function(){
    scrollTop = $(window).scrollTop();
    if (scrollTop >= 80) {
      $('#1menu').addClass( "_bgB" );
    } else  {
      $('#1menu').removeClass("_bgB");
    } 
  });
});

//TABS 
$(document).ready(function() {
  $(".tab-1.tab-1-select-1").addClass("tab-list-active");
  $(".tab-content.tab-content-1").show().siblings().hide();
  $(".tab-1").on("click", function() {
    var self = $(this);
    self.addClass("tab-list-active").siblings().removeClass("tab-list-active");
    var select = self.attr("data-tab-select");
    $(".tab-content[data-tab-content="+select+"]").show().siblings().hide();
  });
});


// Detect mouse hover, change the active class.
$( document ).ready(function() {
    $( "#_2price_card_one" )
      .mouseenter(function() {
        $("#_2price_card_three").removeClass('_2price_card_active');
        $("#_2price_card_one").addClass('_2price_card_active');
      })
      .mouseleave(function() {
        $("#_2price_card_one").removeClass('_2price_card_active');
        $("#_2price_card_three").addClass('_2price_card_active');
    });

    $( "#_2price_card_two" )
      .mouseenter(function() {
        $("#_2price_card_three").removeClass('_2price_card_active');
        $("#_2price_card_two").addClass('_2price_card_active');
      })
      .mouseleave(function() {
        $("#_2price_card_two").removeClass('_2price_card_active');
        $("#_2price_card_three").addClass('_2price_card_active');
    });

    $( "#_2price_card_four" )
      .mouseenter(function() {
        $("#_2price_card_three").removeClass('_2price_card_active');
        $("#_2price_card_four").addClass('_2price_card_active');
      })
      .mouseleave(function() {
        $("#_2price_card_four").removeClass('_2price_card_active');
        $("#_2price_card_three").addClass('_2price_card_active');
    });
});

//Isotope Masonry 
$(document).ready(function () {
  var $grid = $('.all-portfolio').isotope({
    itemSelector: '.grid-item',
  });

  $('.portfolio-menu').on('click', 'a', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

  $('.portfolio-menu a').on('click', function (event) {
    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
    event.preventDefault();
  });
});

//Slider Common
// jQuery(document).ready(function($) {
//   $('.owl-carousel').owlCarousel({
//     items: 1,
//     lazyLoad: true,
//     lazyLoadEager: 1,
//     loop: true,
//     margin: 10,
//     nav: true,
//     dots: false,
//     autoHeight: true,
//     autoplay:true,
//     autoplayTimeout:5000
//   });
// });

//Image Popup
$('.test-popup-link').magnificPopup({
  type: 'image'
});


