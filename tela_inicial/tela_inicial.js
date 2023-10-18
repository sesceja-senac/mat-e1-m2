
$(document).ready(function() {
    if(localStorage.getItem('lstvideo-intro')!=='true'){
      $('html').css('overflow', 'hidden')
      $('.backdrop').fadeIn()
    } 
    $('.botao-video').click(function(){
      $('.backdrop').fadeIn()
      $('html').css('overflow', 'hidden')
    })
    $('#fechar-video').click(function(){
      $('.backdrop').hide()
      $('html').css('overflow', 'unset')
      localStorage.setItem('lstvideo-intro', 'true')
    })
    
    $('.img-atletas').addClass("init");
    window.setTimeout(function(){
      $('.img-titulo').addClass("init");
  }, 500)
  window.setTimeout(function(){
    $('.sub-titulo').addClass("init");
}, 700)
window.setTimeout(function(){
  $('.aneis:nth-child(1)').removeClass("init");
}, 700)
  window.setTimeout(function(){
    $('.aneis:nth-child(2)').removeClass("init");
}, 900)
window.setTimeout(function(){
  $('.aneis:nth-child(3)').removeClass("init");
}, 1200)
window.setTimeout(function(){
  $('.aneis:nth-child(4)').removeClass("init");
}, 1500)
window.setTimeout(function(){
  $('.aneis:nth-child(5)').removeClass("init");
}, 1800)
});
  

$(document).ready(function() {
  $('#btn-1').hover(function(){
    $('.pipa_1').toggleClass("pipa_1-hover");
  })
  $('#btn-2').hover(function(){
    $('.pipa_2').toggleClass("pipa_2-hover");
  })
  $('#btn-3').hover(function(){
    $('.pipa_3').toggleClass("pipa_3-hover");
  })
  $('#btn-4').hover(function(){
    $('.pipa_4').toggleClass("pipa_4-hover");
  })
});