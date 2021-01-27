var keyboard = new Keyboard();
var mouse = new Mouse();
var game = new Game();

var menu = new Menu({
	main: new MainScreen(),
	pause: null,
	settings: null,
});
menu.changeScreen(null);

setInterval(function()
{
	ctx.clearRect(0, 0, width, height);
	
	game.update();
	game.render();
	
	menu.update();
	menu.render();
}, 10);