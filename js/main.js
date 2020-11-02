$(function(){
    $('.header__menu-btn').on('click', function(){
        $('.header__menu ul').slideToggle();
      });
    $('.header__menu-btn').on('click', function(){
        $('.header__menu-btn').toggleClass('header__menu-btn--active');
      });
  });