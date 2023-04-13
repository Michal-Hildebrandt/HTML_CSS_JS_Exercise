document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar');
	function shadow() {
		if (window.scrollY >= 300) {
			nav.classList.add('shadow-bg');
		} else {
			nav.classList.remove('shadow-bg');
		}
	}

	window.addEventListener('scroll', shadow);
});
