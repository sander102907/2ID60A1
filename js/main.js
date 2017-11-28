$(document).ready(() => {

  $('.information').on('click', event => {
      $(event.currentTarget).closest('.item').find('.extra-info').slideDown();
      $(event.currentTarget).find('.more-info').addClass('rotate');
      $(event.currentTarget).find('.more-info').removeClass('rotate-reset');
      return false;
  });

  $('.item').on('mouseleave', event => {
    $(event.currentTarget).find('.extra-info').slideUp();
    $(event.currentTarget).find('.more-info').removeClass('rotate');
    $(event.currentTarget).find('.more-info').addClass('rotate-reset');
    $(event.currentTarget).find('.extra-info').find('li').removeClass('active');
    $('.addcart-button').addClass('disabled');
    $('.sizes').slideUp();
    $('.addcart-button').removeClass('sizes-on');
    $('.extra-info').css("padding-bottom", "0px");
    return false;
  });

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
    $('.menu').slideToggle();
    $('#menu-button').toggleClass('pressed');
    $('.content').toggleClass('move-up');
    return false;
  })

  $('.content').on('click' , () => {
    $('.menu').slideUp();
    $('#menu-button').removeClass('pressed');
    $('.content').removeClass('move-up');
    return false;
  })

  $('.dropdown-size-container').on('click' , event => {
    $('.sizes').slideToggle();
    $('.addcart-button').toggleClass('sizes-on');
    if ($('.addcart-button').css("display") === "none") {
      $('.extra-info').css("padding-bottom", "45px");
    } else if ($('.addcart-button').css("display") === "block") {
      $('.extra-info').css("padding-bottom", "0px");
    }
    return false;
  })

  $('.sizes li').on('click' , event => {
    $('.sizes').slideUp();
    $('.addcart-button').toggleClass('sizes-on');
    if ($('.addcart-button').css("display") === "none") {
      $('.extra-info').css("padding-bottom", "45px");
    } else if ($('.addcart-button').css("display") === "block") {
      $('.extra-info').css("padding-bottom", "0px");
    }
    $(".current-size").html($(event.currentTarget).html());
    return false;
  })


  $('.addcart-button').on('click' , () => {
    if ($('.addcart-button').css("opacity") == 1) {
      $(".counter").html(parseInt($('.counter').html())+ 1);
      if($(".counter").html()!="0") $(".counter").css("display", "inline");
      return false;
    }
  })

  let items = parseInt($('.counter').html());

})
