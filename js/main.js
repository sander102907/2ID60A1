$(document).ready(() => {


  $('.information').on('click', event => {
      $(event.currentTarget).closest('.item').find('.extra-info').slideDown();
      $(event.currentTarget).find('.more-info').addClass('rotate');
      $(event.currentTarget).find('.more-info').removeClass('rotate-reset');
      $('.menu').slideUp();
      $('#menu-button').removeClass('pressed');
      $('.content').removeClass('move-up');
      //close siblings
      $(event.currentTarget).closest('.item').siblings().find('.extra-info').slideUp();
      $(event.currentTarget).closest('.item').siblings().find('.more-info').removeClass('rotate');
      $(event.currentTarget).closest('.item').siblings().find('.more-info').addClass('rotate-reset');
      $(event.currentTarget).closest('.item').siblings().find('.extra-info').find('li').removeClass('active');
      $('.addcart-button').addClass('disabled');
      $('.sizes').slideUp();
      $('.addcart-button').removeClass('sizes-on');
      $('.extra-info').css("padding-bottom", "0px");
      $(".current-size").html("select size");
      return false;
  });


  //close selected products on mouseleave
  /*$('.item').on('mouseleave', event => {
    $(event.currentTarget).find('.extra-info').slideUp();
    $(event.currentTarget).find('.more-info').removeClass('rotate');
    $(event.currentTarget).find('.more-info').addClass('rotate-reset');
    $(event.currentTarget).find('.extra-info').find('li').removeClass('active');
    $('.addcart-button').addClass('disabled');
    $('.sizes').slideUp();
    $('.addcart-button').removeClass('sizes-on');
    $('.extra-info').css("padding-bottom", "0px");
    $(".current-size").html("select size");
    return false;
  });*/

  $('.extra-info li').on('click' , event => {
    $(event.currentTarget).addClass('active');
    $(event.currentTarget).siblings().removeClass('active');
    $('.extra-info').children().removeClass('disabled');
    $('.sizes').slideUp();
    /*if(getElementsByClassName('more-info').style.color == white) {
      $(event.currentTarget).style.opacity = "1";*/
    return false;
  })


  $('#menu-button').on('click' , () => {
    toggleMenu();
    if ($('.cartoverview').css("display") == "block") {
      toggleCartOverview();
    }
  })

  function toggleMenu() {
    $('.menu').slideToggle();
    $('#menu-button').toggleClass('pressed');
    $('.content').toggleClass('move-up');
    return false;
  }

  $('#icon').on('click' , () => {
    toggleCartOverview();
    if ($('.menu').css("display") == "block") {
      toggleMenu();
    }
  })

  function toggleCartOverview () {
      $('#icon').toggleClass('pressed');
      $('.cartoverview').slideToggle();
      return false;
  }


  $('.content').on('click' , () => {
    $('.menu').slideUp();
    $('#menu-button').removeClass('pressed');
    $('.content').removeClass('move-up');
    $(event.currentTarget).find('.extra-info').slideUp();
    $(event.currentTarget).find('.more-info').removeClass('rotate');
    $(event.currentTarget).find('.more-info').addClass('rotate-reset');
    $(event.currentTarget).find('.extra-info').find('li').removeClass('active');
    $('.addcart-button').addClass('disabled');
    $('.sizes').slideUp();
    $('.addcart-button').removeClass('sizes-on');
    $('.extra-info').css("padding-bottom", "0px");
    $(".current-size").html("select size");
    $('.cartoverview').slideUp();
    $('#icon').removeClass('pressed');
    return false;
  })

  $('.dropdown-size-container').on('click' , event => {
    $('.sizes').slideToggle();
    $('.addcart-button').toggleClass('sizes-on');
    if ($('.addcart-button').css("display") === "none") {
      $('.extra-info').css("padding-bottom", "53px");
    } else if ($('.addcart-button').css("display") === "block") {
      $('.extra-info').css("padding-bottom", "0px");
    }
      $('.size-arrow .material-icons').toggleClass('rotate-180');
    return false;
  })

  $('.sizes li').on('click' , event => {
    $('.sizes').slideUp();
    $('.addcart-button').toggleClass('sizes-on');
    if ($('.addcart-button').css("display") === "none") {
      $('.extra-info').css("padding-bottom", "53px");
    } else if ($('.addcart-button').css("display") === "block") {
      $('.extra-info').css("padding-bottom", "0px");
    }
    $(".current-size").html($(event.currentTarget).html());
    return false;
  })

  let tooltipOn = false;

  $('.addcart-button').on('click' , () => {
    if ($('.addcart-button').css("opacity") == 1) {
      $(".counter").html(parseInt($('.counter').html())+ 1);
      $('#amount').html(parseInt($('.counter').html()));
      if($(".counter").html()!="0") $(".counter").css("display", "inline");
      $('.tooltip').css("opacity", 1);
      if (!tooltipOn) {
        tooltip = true;
        setTimeout(function(){ $('.tooltip').css('opacity', 0); }, 2000);
      }
      return false;
    }
  })

  let items = parseInt($('.counter').html());


})
