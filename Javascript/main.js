$(document).ready(() => {

  $('.information').on('click', event => {
      $(event.currentTarget).find('.extra-info').toggle();
  });

})
