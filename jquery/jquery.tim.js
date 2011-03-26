$(document).ready(function() {
  $('#content a').each(function () {
  }).hover(function () {
    $('img', this).stop().animate({
      marginLeft : 5
    }, 250);
    
  }, function () {
    $('img', this).stop().animate({
      marginLeft : 10
    }, 250);

  }).find('img').css('marginLeft', 10);
  
  $('.navigation').each(function () {
    var $links = $(this).find('a'),
      panelIds = $links.map(function() { return this.hash; }).get().join(","),
      $panels = $(panelIds),
      $panelwrapper = $panels.filter(':first').parent(),
      delay = 375,
      heightOffset = 40;
      
    $panels.hide();
    
    $links.click(function () {
      var link = this, 
        $link = $(this);
      
      if ($link.is('.selected')) {
        return false;
      }
      
      $links.removeClass('selected');
      $link.addClass('selected');
      
      document.title = 'John - ' + $link.text();
              
      if ($.support.opacity) {
        $panels.stop().animate({}, delay);
      }
      
      $panelwrapper.stop().animate({
        height: 0
      }, delay, function () {
        var height = $panels.hide().filter(link.hash).show().height() + heightOffset;
        
        $panelwrapper.animate({
          height: height
        }, delay);
      });
    });
    
    $links.filter(window.location.hash ? '[hash=' + window.location.hash + ']' : ':first').click();
  });
});