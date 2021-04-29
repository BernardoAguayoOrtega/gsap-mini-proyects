const tl = new TimelineMax();
const controller = new ScrollMagic.Controller();

tl.staggerFrom(
	'#gray-figures > *',
	1,
	{ scale: 0, transformOrigin: 'center center' },
	0.2,
)
	.to('#letters > text', 1, { autoAlpha: 1 })
	.staggerFrom(
		'#green-figures > *',
		1,
		{
			zIndex: 100,
			autoAlpha: 1,
			opacity: 1,
			scale: 1,
			transformOrigin: 'center center',
		},
		0.1,
	);

const clean = () => {
	const tl = new TimelineMax();
	tl.set('#container', { display: 'none' }, 0)
		.set('#green-figures > *', { autoAlpha: 0 }, 0)
		.set('#letters > text', { autoAlpha: 0 }, 0)
		.set('#container', { display: 'block' }, 0);
};

clean();

var scene = new ScrollMagic.Scene({
	triggerElement: '#stage',
	triggerHook: 1,
})
	.setTween(tl)
	.addTo(controller);
