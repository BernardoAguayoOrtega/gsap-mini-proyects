import * as React from 'react';
import { gsap } from 'gsap/all';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import './style.css';

export function Alien(props) {
	React.useEffect(() => {
		gsap.registerPlugin(MotionPathPlugin);
	});

	return (
		<div className='container'>
			<svg
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
				<g className='prefix__bg'>
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
			</svg>
		</div>
	);
}
