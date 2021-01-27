//load variables
var canvas = document.getElementById("ctx");
var ctx = canvas.getContext("2d");

var width = canvas.width;
var height = canvas.height;

//disable context menu
canvas.addEventListener('contextmenu', function(e) { if (e.button == 2) { e.preventDefault(); } });