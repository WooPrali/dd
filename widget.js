


// You can also get the style every time it changes, try this:
/*Wix.addEventListener(Wix.Events.STYLE_PARAMS_CHANGE, style => {
 console.log(style);
 });*/

function onSettingsUpdate(update) {
    update = stringify(update);
    $('.sample-settings-title').show();
    $('.json').html(update);
    updateCompHeight();
}

function updateCompHeight(height) {
    const desiredHeight = height || document.documentElement.scrollHeight;
    Wix.setHeight(desiredHeight);
}

function stringify(input) {
    try {
        return JSON.stringify(input, null, 4);
    } catch (err) {
        return input;
    }
}
(function($){
    $(document).ready(function(){
        console.log('Ready');
        window.StorefrontSDK=false;
        var data={}; count=0; style_data=false; editor=false;         
        console.log('Next');

        

        loadData();

        Wix.addEventListener(Wix.Events.SETTINGS_UPDATED, onSettingsUpdate);
        // You can get the style params programmatically, un-comment the following snippet to see how it works:

        function onSettingsUpdate(update) {
           // update = stringify(update);
            //$('.sample-settings-title').show();
           // $('.json').html(update);
           // updateCompHeight();
            console.log("Setting Update");
            console.log(update);
        }

        function loadData(){
            // Wix.Data.Public.get("startCounter", { scope: 'APP' }, function(d){console.log(d); data.counter=d.startCounter; run();}, function(f){console.log(f)});
            Wix.Data.Public.get("_businessID", { scope: 'APP' }, function(d){console.log(d); data._businessID=d._businessID; count++; run();}, function(f){console.log(f)});
            Wix.Data.Public.get("_buttonText", { scope: 'APP' }, function(d){console.log(d); data._buttonText=d._buttonText; count++; run();}, function(f){console.log(f)});
            Wix.Styles.getStyleParams(style => {
                style_data=style;
                console.log(style);
                if(style_data.numbers._buttonAlignment==1){
                    style_data._buttonAlignment='left';
                }else if(style_data.numbers._buttonAlignment==2){
                    style_data._buttonAlignment='center';
                }else if(style_data.numbers._buttonAlignment==3){
                    style_data._buttonAlignment='right';
                }else{
                    style_data._buttonAlignment='';
                }
                run();            
            });
        }

        function run(){  
            console.log(data);          
            if(count==2 && style_data)  {
                console.log(data);
                create();
            }
        }  

        /*
        console.log( "Wix.Styles");
        console.log( Wix.Styles);
        $('.navtohome').click(() => {
            Wix.getSiteMap(pages => {
            Wix.navigateToPage(pages[0].pageId.substring(1));
            });
            console.log('navigated');
        });
        */
        
        
        function create(){
            !(function (e, t, r, n) {
                var o, c, s;
                (o = e.document),
                    (c = t.children[0]),
                    (s = o.createElement("script")),
                    (e.StorefrontSDKObject = "StorefrontSDK"),
                    (e[e.StorefrontSDKObject] = {
                        executeCommand: function (t, r) {
                            e[e.StorefrontSDKObject].buffer.push([t, r]);
                        },
                        buffer: [],
                    }),
                    (s.async = 1),
                    (s.src = "https://web-apps.cdn4dd.com/webapps/sdk-storefront/latest/sdk.js"),
                    t.insertBefore(s, c);
            })(window, document.head); 
            StorefrontSDK.executeCommand("renderFloatingButton", {
                businessId: data._businessID,
                buttonText: data._buttonText,
                position: "",
                buttonBackgroundColor: style_data.colors._buttonBackgroundColor.value,
                buttonTextColor: style_data.colors._buttonTextColor.value,
                buttonAlignment: style_data._buttonAlignment,
                floatingBar: style_data.booleans._floatingBar,
                backgroundColor: "",
                urlParams: { utm_medium: "wix_app" },
            });

            /*StorefrontSDK.executeCommand("renderFloatingButton", {
                businessId: 1234,
                buttonText: "Order Online 3",
                position: "",
                buttonBackgroundColor: "#ff0000",
                buttonTextColor: "#ffffff",
                buttonAlignment: "",
                floatingBar: 1,
                backgroundColor: "",
                urlParams: { utm_medium: "wp_plugin" },
            });*/
        }
       
    });
    console.log('jQuery');
})(jQuery);
