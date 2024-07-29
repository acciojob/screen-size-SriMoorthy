//your JS code here. If required.
function resize() {
	let screenSize = document.getElementById('sizeInfo');
    screenSize.textContent = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`
}

window.addEventListener('resize',resize);

resize();
