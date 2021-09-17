function modoescuro(){
    $ ("#modecolor").addClass("darkmode");
    $ ("#modecolor").removeClass("lightmode");
    $ ("#default").addClass("d-none");
    $("#cheked").removeClass("d-none");
    $("#tcolor").addClass("text-info");
    $(".descript").addClass("descript2");
    $(".descript").removeClass("descript");
    
}
function modoclaro(){
    $ ("#modecolor").addClass("lightmode");
    $ ("#modecolor").removeClass("darkmode");
    $ ("#default").removeClass("d-none");
    $("#cheked").addClass("d-none");
    $("#tcolor").removeClass("text-info");
    $(".descript2").addClass("descript");
    $(".descript2").removeClass("descript2");
    
}