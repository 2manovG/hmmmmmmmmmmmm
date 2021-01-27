//for view
class Camera
{
	constructor()
	{
		this.x = this.y = 0;
		this.scale = 1;
	}
	
	reset()
	{
		ctx.resetTransform();
	}
	transform()
	{
		let sz = Math.floor(TILESIZE * this.scale) / TILESIZE;
		
		ctx.translate(width / 2, height / 2);
		ctx.scale(sz, sz);
		ctx.translate(-this.x, -this.y);
	}
}