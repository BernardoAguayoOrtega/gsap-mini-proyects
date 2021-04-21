import * as React from 'react';
import { gsap, Power1, Elastic, Back } from 'gsap/all';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import './style.css';

export function Alien(props) {
	const [motionPathData] = React.useState(
		'M-399.25379,-340.71797 C-399.25379,-340.71797 386.70813,-284.92113 420.50613,-152.49513 454.28013,-20.09013 -159.91287,-245.09513 -159.91287,-91.90313 -159.91287,61.26087 378.10113,-103.60513 384.90413,21.27287 391.70213,146.13787 122.70503,104.22685 122.70503,104.22685 ',
	);
	const [exitPathData] = React.useState(
		'M579.41621,-174.11096 C579.41621,-174.11096 502.92821,-184.48396 411.31121,-159.05496 309.72221,-130.85696 292.54621,-121.82696 196.91321,-90.59496 134.95521,-70.35696 62.36621,-19.28196 55.60721,29.13604 48.81421,77.74604 120.07209,102.90601 120.07209,102.90601 ',
	);

	const ref = React.useRef(undefined);

	function alien() {
		var tl = gsap
			.timeline({ defaults: { ease: Power1.easeOut } })
			.addLabel('tiltOne', 0.2)
			.addLabel('tiltTwo', 0.7)
			.addLabel('tiltThree', 1.6)
			.to(
				'.alien',
				{
					duration: 10,
					immediateRender: true,
					ease: Elastic.easeOut.config(1, 1.2),
					motionPath: motionPathData,
				},
				0,
			)
			.from(
				'.alien',
				{
					duration: 4,
					scale: 0.1,
					immediateRender: false,
				},
				0,
			)
			.to(
				'.alien',
				{
					duration: 0.5,
					rotate: '15deg',
					ease: Power1.easeInOut,
				},
				'tiltOne',
			)
			.to(
				'.alien',
				{
					duration: 0.5,
					rotate: '-15deg',
					ease: Power1.easeInOut,
				},
				'tiltTwo',
			)
			.to(
				'.alien',
				{
					duration: 0.5,
					rotate: '15deg',
					ease: Power1.easeInOut,
				},
				'tiltThree',
			)
			.to(
				'.alien',
				{
					duration: 0.7,
					rotate: '0deg',
					ease: Back.easeOut.config(8),
				},
				'tiltThree+=1',
			);

		return tl;
	}

	React.useEffect(() => {
		gsap.registerPlugin(MotionPathPlugin);
		gsap.set('.alien', {
			xPercent: -50,
			yPercent: -20,
			autoAlpha: 1,
			transformOrigin: '50% 50%',
		});
		gsap.to('.prefix__stars', {
			duration: 1,
			opacity: 0.2,
			stagger: {
				each: 0.5,
				yoyo: true,
				repeat: -1,
				repeatDelay: 0,
				ease: 'Power1.easeInOut',
				from: 'start',
			},
		});

		const mainTimeline = gsap
			.timeline({ defaults: { ease: Power1.easeOut } })
			// .add(alien(), 0.5);
		// .add(lightOpen(), 3.2)
		// .add(sheep(), 3.4)
		// .add(alienExit(), 7);
	});

	return (
		<div className='container'>
			<svg
				ref={ref}
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 914.15 946.11'
				{...props}>
				<defs>
					<linearGradient
						id='prefix__a'
						x1={456.36}
						x2={456.36}
						y1={416.65}
						y2={861.47}
						gradientUnits='userSpaceOnUse'>
						<stop offset={0} stopColor='#fff' />
						<stop offset={0.79} stopColor='#cefbff' stopOpacity={0} />
					</linearGradient>
					<linearGradient
						id='prefix__b'
						x1={467.04}
						x2={468.61}
						y1={471.42}
						y2={794.45}
						gradientUnits='userSpaceOnUse'>
						<stop offset={0.02} stopColor='#73f5b8' />
						<stop offset={0.18} stopColor='#7ef4c7' stopOpacity={0.86} />
						<stop offset={0.5} stopColor='#93f2e2' stopOpacity={0.6} />
						<stop offset={0.65} stopColor='#9bf1ed' stopOpacity={0.5} />
						<stop offset={1} stopColor='#fff' stopOpacity={0} />
					</linearGradient>
				</defs>
				<g className='prefix__bg' id='alien'>
					<path fill='#1c144e' d='M913.37 914.16V.79H0v913.37' />
					<path
						fill='url(#prefix__a)'
						d='M893.75 680a81 81 0 00-21.15 2.83c-7.78-58.49-48.69-103.1-98-103.1h-2.44c-49.32 0-90.23 44.61-98 103.1A81 81 0 00653 680c-36.38 0-68.17 24.27-85.48 60.47a25.37 25.37 0 00-2-2.86c-8-10-21.1-10-29.15 0a26.53 26.53 0 00-4.55 8.54c-12.24-10.93-27.24-17.4-43.47-17.4a61 61 0 00-20.47 3.57 28.42 28.42 0 00-6-15.76 2.62 2.62 0 00-4.22 0 28.48 28.48 0 00-5.94 15.76 61 61 0 00-20.47-3.57c-16.23 0-31.23 6.47-43.47 17.4a26.72 26.72 0 00-4.55-8.54c-8-10-21.1-10-29.15 0a25.37 25.37 0 00-2 2.86c-17.23-36.23-49.03-60.47-85.4-60.47a81.07 81.07 0 00-21.16 2.83c-7.78-58.49-48.68-103.1-98-103.1h-2.43c-49.32 0-90.23 44.61-98 103.1A80.84 80.84 0 000 684.22v261.89h912.73V682.23a81.47 81.47 0 00-18.98-2.23z'
						opacity={0.4}
					/>
					<path fill='#1d1551' d='M0 806.5s441.79-224.43 913.37-.1v107.76H0z' />
				</g>
				<g opacity={0.5} className='prefix__stars' fill='#fff'>
					<circle
						className='prefix__star'
						cx={677.68}
						cy={589.97}
						r={4.7}
						opacity={0.55}
					/>
					<circle
						className='prefix__star'
						cx={526.68}
						cy={538.97}
						r={4.7}
						opacity={0.55}
					/>
					<circle
						className='prefix__star'
						cx={567.69}
						cy={62.34}
						r={6.83}
						opacity={0.8}
					/>
					<path
						className='prefix__star'
						d='M865.77 301.35a4.7 4.7 0 11-4.69-4.69 4.69 4.69 0 014.69 4.69zm-156.46 51.21a6.83 6.83 0 11-6.83-6.83 6.82 6.82 0 016.83 6.83z'
						opacity={0.8}
					/>
					<circle
						className='prefix__star'
						cx={579.5}
						cy={252.12}
						r={6.83}
						opacity={0.6}
					/>
					<circle
						className='prefix__star'
						cx={773.18}
						cy={456.67}
						r={6.83}
						opacity={0.55}
					/>
					<circle className='prefix__star' cx={865.77} cy={493.49} r={6.83} />
					<path
						className='prefix__star'
						d='M914.15 155.44a6.83 6.83 0 11-6.83-6.83 6.82 6.82 0 016.83 6.83zM36.47 567.87c4.64 6.09-.32 12.84-6.34 11.7a6.8 6.8 0 01-5.36-5.36c-1.14-6.01 5.61-10.98 11.7-6.34zm478.88-81.21a6.83 6.83 0 11-6.82-6.83 6.82 6.82 0 016.82 6.83zM324.11 373a6.83 6.83 0 11-6.83-6.83 6.82 6.82 0 016.83 6.83z'
						opacity={0.6}
					/>
					<circle
						className='prefix__star'
						cx={735.67}
						cy={233.76}
						r={6.83}
						opacity={0.8}
					/>
					<circle
						className='prefix__star'
						cx={360.71}
						cy={650.04}
						r={4.7}
						opacity={0.6}
					/>
					<circle
						className='prefix__star'
						cx={249.71}
						cy={566.04}
						r={4.7}
						opacity={0.55}
					/>
					<circle className='prefix__star' cx={203.98} cy={143.91} r={4.7} />
					<circle
						className='prefix__star'
						cx={63.6}
						cy={296.66}
						r={6.83}
						opacity={0.8}
					/>
					<path
						className='prefix__star'
						d='M389.2 258.94a6.83 6.83 0 11-6.83-6.83 6.83 6.83 0 016.83 6.83zM84.08 37.39a6.83 6.83 0 11-6.83-6.83 6.82 6.82 0 016.83 6.83zm264.57 71.88a4.7 4.7 0 11-4.7-4.7 4.7 4.7 0 014.7 4.7zm417.71-25.71a4.7 4.7 0 11-4.7-4.7 4.7 4.7 0 014.7 4.7zM184.77 444.27a4.7 4.7 0 11-4.7-4.69 4.69 4.69 0 014.7 4.69z'
						opacity={0.55}
					/>
				</g>
				<g opacity='1' class='alien'>
					<ellipse
						class='groundlight'
						opacity='0'
						cx='468.66'
						cy='806.4'
						fill='#9bf1ed'
						rx='117.66'
						ry='31.9'
					/>
					<path
						class='light'
						fill='url(#gradientTwo)'
						d='M586.32 804.28l-83.71-306.01-70.33.18L351 806.5'
					/>
					<g class='spaceship'>
						<path
							fill='#344776'
							d='M401.16 454.48s18.54-53.65 68.07-54.16 67 54.16 67 54.16z'
						/>
						<path
							fill='#f3f3ff'
							d='M537.14 455.65h-138.4s-1.16-11.37 70.23-11.38c66.69 0 68.17 11.38 68.17 11.38'
						/>
						<path
							fill='#5f5db6'
							d='M592.39 487H343.44s-2.1-37.77 126.32-37.78c120 0 122.63 37.78 122.63 37.78'
						/>
						<path
							fill='#48739b'
							d='M591.89 490.07C577 515 418.8 507.92 418.8 507.92s-88.42-5.81-73.06-25.73S453.66 459.77 492.27 461s109.93 11.88 99.62 29.05'
						/>
						<path
							class='lightring'
							fill='#fff'
							d='M425.36 508.5s-6.82-3.38 0-8.2 28.49-8.18 47-7.7 44.79 5.29 41.9 13-70.67 14.72-88.9 2.9z'
						/>
						<path
							class='lightcircle'
							opacity='0'
							fill='#fff'
							d='M430 508.78s14-6.82 39.19-6.6 36.61 5.62 36.61 5.62-3.41 15-36.39 14.35S430 508.78 430 508.78z'
						/>
						<path
							fill='#344776'
							d='M474.75 386.08a5.07 5.07 0 1 1-5.06-5.07 5.07 5.07 0 0 1 5.06 5.07z'
						/>
						<path fill='#344776' d='M468.28 386.81h2.81v21.86h-2.81z' />
						<path
							fill='#9bf1ed'
							d='M521.51 439s.73 5.43-3.37 1.8-8.9-18.32-24.34-28.79c0-.01 22.27 12.46 27.71 26.99z'
							opacity='.48'
						/>
					</g>
				</g>
			</svg>
		</div>
	);
}
