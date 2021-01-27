//size of tile
const TILESIZE = 16;

//types of tiles
const EMPTY = 0;
const WALL = 1;

//tetrismen in action
class Game
{
	constructor()
	{
		//static objects (walls, keys, locks, conveyors, buttons, doors, potions, etc...)
		this.tiles = 
		[
			[ EMPTY, EMPTY, EMPTY, WALL, EMPTY, WALL ],
			[ EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, WALL ],
			[ WALL, EMPTY, EMPTY, EMPTY, EMPTY, WALL ],
			[ WALL, EMPTY, EMPTY, EMPTY, WALL, WALL ],
			[ WALL, EMPTY, EMPTY, EMPTY, WALL, WALL ],
			[ EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, WALL ],
			[ EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, WALL ],
			[ EMPTY, EMPTY, WALL, WALL, EMPTY, WALL ],
		];
		
		this.camera = new Camera();
		this.camera.x = this.tiles[0].length * TILESIZE / 2;
		this.camera.y = this.tiles.length * TILESIZE / 2;
		
		this.tetrismen = [ 
			new Tetrisman(1, 2, "red", [[false, true], [true, true], [true, false]], [])
		];
	}
	
	getTile(x, y)
	{
		if (x < 0 || y < 0 || x >= this.tiles.length || y >= this.tiles[0].length) return EMPTY;
		return this.tiles[Math.floor(x / TILESIZE)][Math.floor(y / TILESIZE)];
	}
	
	update()
	{
		let sp = TILESIZE;
		if (keyboard.getKey("A")) this.camera.x -= sp;
		if (keyboard.getKey("D")) this.camera.x += sp;
		if (keyboard.getKey("W")) this.camera.y -= sp;
		if (keyboard.getKey("S")) this.camera.y += sp;
		
		if (keyboard.getKey("Q")) this.camera.scale /= 1.1;
		if (keyboard.getKey("E")) this.camera.scale *= 1.1;
		
		for (let t of this.tetrismen) t.update();
	}
	render()
	{
		this.camera.transform();
		
		for (let i = 0; i < this.tiles.length; i++)
			for (let j = 0; j < this.tiles[0].length; j++)
				if (this.tiles[i][j] != EMPTY)
				{
					ctx.beginPath();
					ctx.fillStyle = "black";
					
					ctx.rect(i * TILESIZE, j * TILESIZE, TILESIZE, TILESIZE);
					
					ctx.fill();
				}
		
		for (let t of this.tetrismen) t.render();
		
		this.camera.reset();
	}
}