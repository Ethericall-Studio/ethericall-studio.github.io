window.addEventListener('click', () => {
	
	var rythm = new Rythm()
	rythm.crossOrigin = 'anonymous';
rythm.setMusic('js/urdead.mp3');
	rythm.addRythm('fontColor2', 'color', 0, 10, {
              from: [255,0,0],
              to:[100,0,150]
            })
rythm.start();
});