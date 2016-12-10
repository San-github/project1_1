/* global $ */

$(document).ready(function(){
    if($('.pages-home').length <= 0) { return; }
    
    $("input").hide();

    var element = $('#s1');
    var isVisible = element.is(':visible');
 
if (isVisible === false) {
    $("html").click(function(){
        $("#s2").fadeIn(300);
        $("#s1").fadeIn(300);;
    });
}
});