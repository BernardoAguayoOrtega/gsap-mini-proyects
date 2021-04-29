
gsap.registerPlugin(ScrollTrigger);

const clean = () => {
	const tl = new TimelineMax();
	tl.set('#container', { display: 'none' }, 0)
		.set('#green-figures > *', { autoAlpha: 0 }, 0)
		.set('#letters > text', { autoAlpha: 0 }, 0)
		.set('#container', { display: 'block' }, 0);

	return tl;
};

const tl = new TimelineMax();

tl.add(clean())
	.staggerFrom(
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

	ScrollTrigger.create({
		trigger: "#container",
		animation: tl,
		// Uncomment these to see how they affect the ScrollTrigger
		markers: true,
		start: "top center+=300px",
		end: "top center",
		// toggleClass: "active",
		// pin: true,
		scrub: 1,
		// onUpdate: self => {
		//   console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity());
		// }
	});
		
