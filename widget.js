


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
        Wix.Data.Public.get("startCounter", { scope: 'APP' }, function(d){console.log(d)}, function(f){console.log(f)});
        Wix.Data.Public.get("_businessID", { scope: 'APP' }, function(d){console.log(d)}, function(f){console.log(f)});
        
        console.log('Next');
        Wix.addEventListener(Wix.Events.SETTINGS_UPDATED, onSettingsUpdate);
        // You can get the style params programmatically, un-comment the following snippet to see how it works:
        Wix.Styles.getStyleParams(style => {
        console.log(style);
        });
        

        console.log( "Wix.Styles");
        console.log( Wix.Styles);
        $('.navtohome').click(() => {
            Wix.getSiteMap(pages => {
            Wix.navigateToPage(pages[0].pageId.substring(1));
            });
            console.log('navigated');
        });
        create();
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
                businessId: 1234,
                buttonText: "Order Online 2",
                position: "",
                buttonBackgroundColor: "#ff0000",
                buttonTextColor: "#ffffff",
                buttonAlignment: "",
                floatingBar: 1,
                backgroundColor: "",
                urlParams: { utm_medium: "wp_plugin" },
            });
        }
       
    });
    console.log('jQuery');
})(jQuery);
