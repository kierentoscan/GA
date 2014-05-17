$(document).ready(function () {
    // code to display red rounded hotspots
    $(".redhotspot").css({
        "border": "solid 1px #990000",
        "background": "#cc0000",
        "border-radius": "6px"
    })
        
 
$("#fhotspot1").LiteTooltip({
    textalign: "left",
    templatename: "BostonBlue",
    title:
    '<div class="template">' +
    '<p>' +
    'SHOW US YOUR LAMB' +
    '</p>' +
    '</div>'
});
 

});