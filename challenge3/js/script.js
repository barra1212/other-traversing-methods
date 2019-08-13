$(document).ready(function() {
    // put your code here

$(".theButton").click(function(){
var panelColor = $(this).css("background-color");
console.log(panelColor);
$(".superButton").css("color", panelColor);
})



});