//all game menus (main menu, pause menu, settings, etc)
class Menu
{
	//screens - object of screens { main : ..., pause : ... }
	//screen has open, close, update and render functions
	constructor(screens)
	{
		this.screens = screens;
		this.screen = this.screens.main;
		
		this.screen.open();
	}
	
	changeScreen(index)
	{
		if (this.screen)
			this.screen.close();
		
		if (index == null)
			this.screen = null;
		else
			this.screen = this.screens[index];
		
		if (this.screen)
			this.screen.open();
	}
	
	//perform screen actions
	update()
	{
		if (this.screen)
			this.screen.update();
	}
	render()
	{
		if (this.screen)
			this.screen.render();
	}
}