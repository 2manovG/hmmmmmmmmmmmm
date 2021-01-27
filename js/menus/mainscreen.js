//main menu
class MainScreen
{
	open()
	{
		this.gui = [
			//just plain texts
			new Label(width/2, 32, "Tetrismen", "red", "108px Arial", "center"),
			new Label(width - 8, height - 8, "by IvanovTV, 2021", "black", "18px Arial", "right", "bottom"),
			new Label(8, height - 8, "ver 0.0.1", "black", "18px Arial", "left", "bottom"),
			
			//purpose of main menu
			new Button(width / 2, 250, "Play", "Green", "Arial", 32, this.btn_play),
			new Button(width / 2, 300, "Options", "Green", "Arial", 32, this.btn_options),
		];
	}
	close()
	{
		this.gui = [];
	}
	
	update()
	{
		for (let g of this.gui)
			g.update();
	}
	render()
	{
		for (let g of this.gui)
			g.render();
	}
	
	//menu buttons
	btn_play()
	{
		menu.changeScreen(null);
		//game.loadLevel(0);
	}
	btn_options()
	{
		
	}
}