function getBodyScrollTop() {
  return self.pageYOffset || (document.documentElement && document.documentElement.ScrollTop) || (document.body && document.body.scrollTop);
}

$(function () {
  $(window).on('load', function () {
    $('body').addClass("loaded")
  })


  $('.js_btn__myaccount__x_side_drop').click(function () {
    $(this).closest('.myaccount__x_side__block__row').addClass('active')
    $(this).closest('.myaccount__x_side__block').find('.myaccount__x_side__block__row').each(function (index, element) {
      if (!$(this).hasClass('active')) {
        $(this).stop().slideToggle(400)
      }
    });
  })

  $('.js_btn__myaccount__x_accordeon').each(function () {
    const btn = $(this);
    btn.parent().addClass(btn.hasClass('hidden-sm') ? 'expand-mob' : 'expand');

    btn.click(function () {
      btn.closest('.js__myaccount__x_accordeon').find('.myaccount__x_content__block__title').toggleClass('active')
      btn.closest('.js__myaccount__x_accordeon').find('.myaccount__x_accordeon__content').slideToggle(300)
    })
  });
});
