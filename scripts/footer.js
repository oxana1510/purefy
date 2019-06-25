/*==============================Footer=================*/
(function(){

    footer();

    $(window).resize(function() {
      footer();
    });

    function footer() {
      var docHeight = $(window).height(),
        footerHeight = $('footer').outerHeight(),
        footerTop = $('footer').position().top + footerHeight;

      if (footerTop < docHeight) {
        $('footer').css('margin-top', (docHeight - footerTop) + 'px');
      }
    }

  })();