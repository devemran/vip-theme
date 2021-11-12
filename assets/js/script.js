



// lightbox and filter
var lightboxDescription = GLightbox({
  selector: 'glightbox'
});

 
function call(id) {
  const items = Array.from(document.getElementsByClassName("filter"));
  items.map(function (item, index) {
    console.log(item);
    if (id === "all") {
      item.classList.remove('d-none');
      item.classList.add('fadeIn','glightbox');
      setTimeout(clean,500);
    } else {
      const check = items[index].classList.contains(id);
      console.log(check);

      if (check) {
        item.classList.remove('d-none');
        item.classList.add('fadeIn','glightbox');
      } else {
        item.classList.add('d-none');
        item.classList.remove('fadeIn','glightbox');
      }
    }
  })
}

function clean() {
  const items = Array.from(document.getElementsByClassName("filter"));
  items.map(function (item, index) {
    item.classList.remove('fadeIn');
  })
}


$(document).ready(function(){

  $(document).on("click", ".work__btn button", function(){
    $(".work__btn button").removeClass("active");
    $(this).addClass("active");
  });

 

 
  $('.testimonial__container').owlCarousel({
      loop:true,
      center: false,
      nav:false,
      margin:30,
      dots:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:2
          }
      }
  })

  $('#header li a').click(function(e) {

    let tt = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $(tt).offset().top
    }, 1000);

    e.preventDefault();
  });






  $(".header__toggle-bar").click(function(){

     $(".header-area__main-manu").slideToggle(500);


  });

  


  $('.client__h-counter').counterUp({
      delay: 10,
      time: 1000,
      offset: 70,
      beginAt: 100,
      formatter: function (n) {
        return n.replace(/,/g, '.');
      }
  });



  });




var typed = new Typed(".auto_input", {
    strings: ["Business Man.", "seo master.", "designer", "phtograpjar"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true

});





