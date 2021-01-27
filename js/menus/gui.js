//just a plain text
class Label
{
	constructor(x, y, text, color, font, align = "left", baseline = "top")
	{
		this.x = x;
		this.y = y;
		
		this.text = text;
		this.color = color;
		this.font = font;
		
		this.align = align;
		this.baseline = baseline;
	}
	
	update() {}
	
	render()
	{
		ctx.fillStyle = this.color;
		ctx.font = this.font;
		
		ctx.textAlign = this.align;
		ctx.textBaseline = this.baseline;
		
		ctx.fillText(this.text, this.x, this.y);
	}
}

//button to press
class Button
{
	constructor(x, y, text, color, font, fontsize, func)
	{
		this.x = x;
		this.y = y;
		
		this.text = text;
		this.color = color;
		this.font = font;
		this.fontsize = fontsize;
		
		this.func = func;
		
		//get size
		ctx.font = this.fontsize + "px " + this.font;
		this.width = ctx.measureText(this.text).width;
		this.height = this.fontsize;
		
		this.scale = 1;
		this.scaleMin = 1;
		this.scaleMax = 1.25;
	}
	
	update()
	{
		//animation for scaling
		let targS = this.scaleMin;
		
		//if mouse inside
		if (mouse.x > this.x - this.width / 2 && mouse.x < this.x + this.width / 2 &&
			mouse.y > this.y - this.height / 2 && mouse.y < this.y + this.height / 2)
		{
			targS = this.scaleMax;
			
			//if mouse pressed, call func
			if (mouse.getButton("left"))
				this.func();
		}
		
		this.scale += (targS - this.scale) * 0.1;
	}
	
	render()
	{
		ctx.fillStyle = this.color;
		ctx.font = Math.floor(this.fontsize * this.scale) + "px " + this.font;
		
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		
		ctx.fillText(this.text, this.x, this.y);
	}
}