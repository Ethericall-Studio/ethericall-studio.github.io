window.addEventListener('load', () => {
	
	var rythm = new Rythm()
	rythm.crossOrigin = 'anonymous';
rythm.setMusic('js/urdead.mp3')
rythm.start();
});