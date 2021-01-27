//keyboard handler
class Keyboard
{
	constructor()
	{
		this.keys = Array.from({ length : 256 }, () => false);
		
		var keyboard = this;
		document.addEventListener("keydown", function(e)
		{
			keyboard.keys[e.keyCode] = true;
		}, false);
		document.addEventListener("keyup", function(e)
		{
			keyboard.keys[e.keyCode] = false;
		}, false);
	}
	
	getKey(i)
	{
		let index = i;
		if (typeof(i) == "string")
			index = i.charCodeAt(0);
		
		if (index < 0 || index >= this.keys.length) return false;
		return this.keys[index];
	}
}

//mouse handler
class Mouse
{
	constructor()
	{
		this.buttons = Array.from({ length : 3 }, () => false);
		this.x = 0;
		this.y = 0;
		
		var mouse = this;
		canvas.addEventListener("mousedown", function(e)
		{
			mouse.buttons[e.button] = true;
		}, false);
		canvas.addEventListener("mouseup", function(e)
		{
			mouse.buttons[e.button] = false;
		}, false);
		canvas.addEventListener("mousemove", function(e)
		{
			mouse.x = e.offsetX;
			mouse.y = e.offsetY;
		}, false);
	}
	
	getButton(i)
	{
		let index = i;
		if (typeof(i) == "string")
			switch (i)
			{
				case "left": index = 0; break;
				case "middle": index = 1; break;
				case "right": index = 2; break;
				default: index = -1; break;
			}
		
		if (index < 0 || index >= this.buttons.length) return false;
		return this.buttons[index];
	}
	/*getPos()
	{
		return { x : this.x, y : this.y };
	}*/
}