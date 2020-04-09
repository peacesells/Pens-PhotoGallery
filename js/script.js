let btn_prev = document.querySelector('#gallery .buttons .prev');
let btn_next = document.querySelector('#gallery .buttons .next');

let images = document.querySelectorAll('#gallery .photos img');
let i = 0;

const buttons = document.querySelectorAll('a');

btn_prev.onclick = function() {
	images[i].className = '';
	i--;

	if (i < 0) {
		i = images.length - 1;
	}

	images[i].className = 'showed';
}

btn_next.onclick = function() {
	images[i].className = '';
	i++;

	if (i >= images.length) {
		i = 0;
	}

	images[i].className = 'showed';
}

buttons.forEach(btn => {
	btn.addEventListener('click', function(e) {

		let x = e.clientX - e.target.offsetLeft;
		let y = e.clientY - e.target.offsetTop;

		let ripples = document.createElement('span');
		ripples.style.left = x + 'px';
		ripples.style.top = y + 'px';
		this.appendChild(ripples);

		setTimeout(() => {
			ripples.remove()
		}, 1000);
	})
})