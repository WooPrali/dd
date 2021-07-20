
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

     
     attachListeners();
   // $(attachListeners);
    
  })
})(jQuery);


function onUpdate(key, value) { 
  //Wix.Settings.triggerSettingsUpdatedEvent({key: key, value: value});
  //Wix.Settings.triggerSettingsUpdatedEvent({key: key+'Fast', value: "123456"});
  console.log(key);
  console.log(value);
  console.log(Wix);
  //Wix.Settings.triggerSettingsUpdatedEvent({key: 'dropdown2', value: 0});
  Wix.Styles.getStyleParams(style => {
    console.log(style);
  });  
  //Wix.UI.set('messagePlaceholder',"fast");  

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
     console.log(ctrl.getParamKey()); 
    console.log($element);   
  });
}
