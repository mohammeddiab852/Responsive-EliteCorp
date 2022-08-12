$(function(){
var windowh = $(window).height(),
    upperh = $('.upper-bar').innerHeight(), 
    navbarh = $('.navbar-brand').innerHeight(),
$('.slider').height(windowh-(upperh+navbarh))    
})