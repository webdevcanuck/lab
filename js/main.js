(function(init) {
    init(window.jQuery, window, document)
}(function($, window, document) {

    $(function() {
        end = false;
        $(window).load(function() {
            var buttons = $(".buttons");
            buttons.on("click", ".btn", function() {
                alert($(".btn", buttons).index(this));
            });
            end = true;
        });
    });
    time25 = null;
    time50 = null;

    var bod = $("body");
    bar = '<div id="preloadbar" style="width:50%; height:40px; margin:0 auto; position:relative; top:50%; margin-top:-20px"><div style="background:#CC0000; width:0; height:100%"></div></div>'
    preload = '<div id="preloader" style="position:fixed; top:0; left:0; width:100%; height:100%; background:#FFF; z-index:99999">' + bar + '</div>';
    bod.append(preload);
    preLoad50();
}));

function preLoad50() {
    w = ($("#preloadbar").width() / 2);
    f = $("#preloadbar").width();
    a = 0;
    time50 = setInterval(function() {
        $("#preloadbar div").width(a++);
        //console.log("a:" + a + " w:" + w);
        if (a > (w / 3)) {
            clearInterval(time50);
            time25 = setInterval(function() {
                $("#preloadbar div").width(a++);
                if (end) {
                    setTimeout(function() {
                        clearInterval(time25);
                        finale = setInterval(function() {
                            $("#preloadbar div").width(a++);
                            console.log(a+" : "+f)
                            if (a > f){
                              clearInterval(finale);
                              $("#preloader").animate({
                                opacity:0
                              },500, function(){
                                $("#preloader").remove();
                              });
                            }
                        }, 10)
                    }, 1000);
                }
            }, 100)
        }
    }, 10)
}
