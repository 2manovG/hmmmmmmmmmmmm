//tetrisman himself!!!
class Tetrisman
{
	//x, y -- pos in level
	//shape -- collision mask [[true, false, ...], ...]
	//eyes -- array or {x, y} -- positions of eyes
	constructor(x, y, color, shape, eyes)
	{
		this.x = Math.floor(x * TILESIZE);
		this.y = Math.floor(y * TILESIZE);
		this.shape = shape;
		this.color = color;
		this.eyes = eyes;
		
		this.sleep = true;
	}
	
	update()
	{
		
	}
	render()
	{
		ctx.beginPath();
		ctx.fillStyle = this.color;
		
		for (let i = 0; i < this.shape.length; i++)
			for (let j = 0; j < this.shape[0].length; j++)
				if (this.shape[i][j])
					ctx.rect(this.x + TILESIZE * i, this.y + TILESIZE * j, TILESIZE, TILESIZE);
		
		ctx.fill();
	}
}