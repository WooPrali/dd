
(function($){
  $(document).ready(function(){
    var $body=$("body");
    function advanced_settings(){
      var $el=$(".advanced_settings");
      var $btn=$(".advanced_settings_btn");
      $btn.click(function(){
        if($el.hasClass("active")){
          $el.removeClass("active");
          $btn.removeClass("active");
        }else{
          $el.addClass("active");
          $btn.addClass("active");
        }       
      });  
    }
    advanced_settings();

     Wix.Settings.triggerSettingsUpdatedEvent({key: 'businessID_', value: "123456"});
     attachListeners()
   // $(attachListeners);
    
  })
})(jQuery);


function onUpdate(key, value) { 
  Wix.Settings.triggerSettingsUpdatedEvent({key: key, value: value});
  console.log(key);
  console.log(value);
  console.log(Wix);

  Wix.Styles.getStyleParams(style => {
    console.log(style);
  });  
}

function attachListeners() {
  $('[wix-ctrl]').each(function (index, element) {
    var $element = $(element);
    var ctrl = $element.getCtrl();
    if ($.isFunction(ctrl.onChange)) {
      ctrl.onChange(function (value) {
        onUpdate($element.attr('wix-param'), value);
      })
    }
    console.log($element);   
  });
}
