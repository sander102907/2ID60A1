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
    return false;
  });

  $('.extra-info li').on('click' , event => {
    $(event.currentTarget).addClass('active');
    $(event.currentTarget).siblings().removeClass('active');
    $('.extra-info').children().removeClass('disabled');
    /*if(getElementsByClassName('more-info').style.color == white) {
      $(event.currentTarget).style.opacity = "1";*/
    return false;
  })

  $('#menu-button').on('click' , () => {
    $('.menu').slideToggle();
    $('#menu-button').toggleClass('pressed');
    $('.content').toggleClass('move-up');
  })

  $('.menu').on('mouseleave' , () => {
    $('.menu').slideUp();
    $('#menu-button').removeClass('pressed');
    $('.content').removeClass('move-up');
  })

})
