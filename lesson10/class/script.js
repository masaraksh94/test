'use strict';
//es6
class Option {
	constructor(height, width, bg, fontSize, textAlign) {
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}

	addElem() {
		let div = document.createElement('div');
			div.classList.add('block');
			div.innerHTML = 'Hello World!';
			div.style.cssText = `height: ${this.height}; width: ${this.width}; background-color: ${this.bg}; font-size: ${this.fontSize}; text-align: ${this.textAlign};`;

			document.body.appendChild(div);

			
	}

}

let result = new Option('100px', '100px', 'red', '20px', 'center');

result.addElem();

