
//popup Video system 02
$(document).ready(function() {
  $('#youtubeVid').magnificPopup({
  	type:'iframe',
//iframe Start=================================
  	iframe: {

  patterns: {
    youtube: {
      index: 'youtube.com/', 
      id: 'v=',

      src: 'https://www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
    }

  },

  srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
}

//iframe End===========================================




  });

  //Owl Carousel Active
  $('.owl-carousel').owlCarousel({
    loop:true,
    items:1,
    nav:true,
    dots:true,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    smartSpeed:250,
    autoplaySpeed:true;
    navSpeed:false,
    // dotsSpeed:false/500,
    responsive:{
      
    }
  });
});



