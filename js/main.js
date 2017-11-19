$(document).ready(() => {

  $('.information').on('click', event => {
      $(event.currentTarget).closest('.item').find('.extra-info').slideDown();
      $(event.currentTarget).find('.more-info').toggleClass('rotate');
  });

  $('.item').on('mouseleave', event => {
    $(event.currentTarget).find('.extra-info').slideUp();
    $(event.currentTarget).find('.more-info').toggleClass('rotate-reset');
  });

})
