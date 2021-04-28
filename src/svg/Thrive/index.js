import { TimelineMax, gsap } from 'gsap/all';
import { useEffect, useRef, useState } from 'react';
import './styles.css';

export const Thrive = () => {
	const ref = useRef(undefined);

	const clean = () => {
		const tl = new TimelineMax();
		tl.set('#container', { display: 'none' }, 0)
			.set('#green-figures > *', { autoAlpha: 0 }, 0)
			.set('#letters > text', { autoAlpha: 0 }, 0)
			.set('#container', { display: 'block' }, 0);

		return tl;
	};

	useEffect(() => {
		const element = ref.current;
		const tl = new TimelineMax();

		tl.add(clean())
			.staggerFrom(
				element.querySelectorAll('#gray-figures > *'),
				1,
				{ scale: 0, transformOrigin: 'center center' },
				0.2,
			)
			.to(element.querySelectorAll('#letters > text'), 1, { autoAlpha: 1 })
			.staggerFrom(
				element.querySelectorAll('#green-figures > *'),
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
	}, []);

	return (
		<div id='container'>
			<svg
				ref={ref}
				id='prefix__Capa_1'
				xmlns='http://www.w3.org/2000/svg'
				x={0}
				y={0}
				viewBox='0 0 1355 372'
				xmlSpace='preserve'>
				<style>
					{
						'.prefix__st1{fill:#d4dadd}.prefix__st9{fill:#fff}.prefix__st10{font-family:&apos;Helvetica&apos;}.prefix__st11{font-size:17.8476px}.prefix__st12{fill:#353d3f}.prefix__st13{fill:none;stroke:#bfcbd1;stroke-miterlimit:10}'
					}
				</style>
				<g id='gray-figures'>
					<path
						className='prefix__st1'
						d='M268.3 150l-65.8-76.1H77.2l61.4 76.1-61.4 76.1h125.3l65.6-75.8z'
					/>
					<path
						className='prefix__st1'
						d='M439.8 149.7l-65.5-75.8H249l61.4 76.1-61.4 76.1h125.3z'
					/>
					<path
						className='prefix__st1'
						d='M546.1 73.9H420.8l61.4 76.1-61.4 76.1h125.3l65.5-75.8z'
					/>
					<path
						className='prefix__st1'
						d='M783.7 150l-65.8-76.1H592.6L654 150l-61.4 76.1h125.3z'
					/>
					<path
						className='prefix__st1'
						d='M889.6 73.9H764.4l61.3 76.1-61.3 76.1h125.2l65.6-75.8z'
					/>
					<path
						className='prefix__st1'
						d='M1127 149.7l-65.6-75.8H936.2l61.3 76.1-61.3 76.1h125.2l65.6-75.8z'
					/>
					<path
						className='prefix__st1'
						d='M1298.8 149.7l-65.6-75.8h-125.3l61.4 76.1-61.4 76.1h125.3z'
					/>
				</g>
				<g id='green-figures'>
					<linearGradient
						id='prefix__SVGID_1_'
						gradientUnits='userSpaceOnUse'
						x1={5.826}
						y1={150.302}
						x2={1188.493}
						y2={147.636}>
						<stop offset={0} stopColor='#b2d235' />
						<stop offset={0.106} stopColor='#94ca3b' />
						<stop offset={0.236} stopColor='#75c241' />
						<stop offset={0.347} stopColor='#63bd45' />
						<stop offset={0.425} stopColor='#5cbb46' />
						<stop offset={1} stopColor='#0c8848' />
					</linearGradient>
					<path
						id='first'
						fill='url(#prefix__SVGID_1_)'
						d='M268.3 150l-65.8-76.1H77.2l61.4 76.1-61.4 76.1h125.3l65.6-75.8z'
					/>
					<linearGradient
						id='prefix__SVGID_2_'
						gradientUnits='userSpaceOnUse'
						x1={5.827}
						y1={150.69}
						x2={1188.494}
						y2={148.023}>
						<stop offset={0} stopColor='#b2d235' />
						<stop offset={0.106} stopColor='#94ca3b' />
						<stop offset={0.236} stopColor='#75c241' />
						<stop offset={0.347} stopColor='#63bd45' />
						<stop offset={0.425} stopColor='#5cbb46' />
						<stop offset={1} stopColor='#0c8848' />
					</linearGradient>
					<path
						fill='url(#prefix__SVGID_2_)'
						d='M439.8 149.7l-65.5-75.8H249l61.4 76.1-61.4 76.1h125.3z'
					/>
					<linearGradient
						id='prefix__SVGID_3_'
						gradientUnits='userSpaceOnUse'
						x1={5.828}
						y1={151.077}
						x2={1188.495}
						y2={148.41}>
						<stop offset={0} stopColor='#b2d235' />
						<stop offset={0.106} stopColor='#94ca3b' />
						<stop offset={0.236} stopColor='#75c241' />
						<stop offset={0.347} stopColor='#63bd45' />
						<stop offset={0.425} stopColor='#5cbb46' />
						<stop offset={1} stopColor='#0c8848' />
					</linearGradient>
					<path
						fill='url(#prefix__SVGID_3_)'
						d='M546.1 73.9H420.8l61.4 76.1-61.4 76.1h125.3l65.5-75.8z'
					/>
					<linearGradient
						id='prefix__SVGID_4_'
						gradientUnits='userSpaceOnUse'
						x1={5.829}
						y1={151.464}
						x2={1188.495}
						y2={148.798}>
						<stop offset={0} stopColor='#b2d235' />
						<stop offset={0.106} stopColor='#94ca3b' />
						<stop offset={0.236} stopColor='#75c241' />
						<stop offset={0.347} stopColor='#63bd45' />
						<stop offset={0.425} stopColor='#5cbb46' />
						<stop offset={1} stopColor='#0c8848' />
					</linearGradient>
					<path
						fill='url(#prefix__SVGID_4_)'
						d='M783.7 150l-65.8-76.1H592.6L654 150l-61.4 76.1h125.3z'
					/>
					<linearGradient
						id='prefix__SVGID_5_'
						gradientUnits='userSpaceOnUse'
						x1={5.83}
						y1={151.852}
						x2={1188.496}
						y2={149.185}>
						<stop offset={0} stopColor='#b2d235' />
						<stop offset={0.106} stopColor='#94ca3b' />
						<stop offset={0.236} stopColor='#75c241' />
						<stop offset={0.347} stopColor='#63bd45' />
						<stop offset={0.425} stopColor='#5cbb46' />
						<stop offset={1} stopColor='#0c8848' />
					</linearGradient>
					<path
						fill='url(#prefix__SVGID_5_)'
						d='M889.6 73.9H764.4l61.3 76.1-61.3 76.1h125.2l65.6-75.8z'
					/>
					<linearGradient
						id='prefix__SVGID_6_'
						gradientUnits='userSpaceOnUse'
						x1={5.83}
						y1={152.239}
						x2={1188.497}
						y2={149.572}>
						<stop offset={0} stopColor='#b2d235' />
						<stop offset={0.106} stopColor='#94ca3b' />
						<stop offset={0.236} stopColor='#75c241' />
						<stop offset={0.347} stopColor='#63bd45' />
						<stop offset={0.425} stopColor='#5cbb46' />
						<stop offset={1} stopColor='#0c8848' />
					</linearGradient>
					<path
						fill='url(#prefix__SVGID_6_)'
						d='M1127 149.7l-65.6-75.8H936.2l61.3 76.1-61.3 76.1h125.2l65.6-75.8z'
					/>
					<linearGradient
						id='prefix__SVGID_7_'
						gradientUnits='userSpaceOnUse'
						x1={5.831}
						y1={152.626}
						x2={1188.498}
						y2={149.96}>
						<stop offset={0} stopColor='#b2d235' />
						<stop offset={0.106} stopColor='#94ca3b' />
						<stop offset={0.236} stopColor='#75c241' />
						<stop offset={0.347} stopColor='#63bd45' />
						<stop offset={0.425} stopColor='#5cbb46' />
						<stop offset={1} stopColor='#0c8848' />
					</linearGradient>
					<path
						fill='url(#prefix__SVGID_7_)'
						d='M1298.8 149.7l-65.6-75.8h-125.3l61.4 76.1-61.4 76.1h125.3z'
					/>
				</g>
				<g id='letters'>
					<text transform='translate(676.368 150.099)'>
						<tspan
							x={0}
							y={0}
							className='prefix__st9 prefix__st10 prefix__st11'>
							{'Cohort'}
						</tspan>
						<tspan
							x={-10.2}
							y={21.4}
							className='prefix__st9 prefix__st10 prefix__st11'>
							{'Selection'}
						</tspan>
					</text>
					<text transform='translate(148.225 150.768)'>
						<tspan
							x={0}
							y={0}
							className='prefix__st9 prefix__st10 prefix__st11'>
							{'Applications'}
						</tspan>
						<tspan
							x={27}
							y={20.1}
							className='prefix__st9 prefix__st10 prefix__st11'>
							{'Open'}
						</tspan>
					</text>
					<text transform='translate(319.728 150.768)'>
						<tspan
							x={0}
							y={0}
							className='prefix__st9 prefix__st10 prefix__st11'>
							{'Applications'}
						</tspan>
						<tspan
							x={25.9}
							y={20.1}
							className='prefix__st9 prefix__st10 prefix__st11'>
							{'Close'}
						</tspan>
					</text>
					<text transform='translate(490.717 150.768)'>
						<tspan
							x={0}
							y={0}
							className='prefix__st9 prefix__st10 prefix__st11'>
							{'Applications'}
						</tspan>
						<tspan
							x={19.4}
							y={20.1}
							className='prefix__st9 prefix__st10 prefix__st11'>
							{'Review'}
						</tspan>
					</text>
					<text
						transform='translate(1186.973 156.799)'
						className='prefix__st9 prefix__st10 prefix__st11'>
						{'Demo Day'}
					</text>
					<text
						transform='translate(1009.236 156.376)'
						className='prefix__st9 prefix__st10 prefix__st11'>
						{'Seed Camp'}
					</text>
					<text
						transform='translate(834.047 156.835)'
						className='prefix__st9 prefix__st10 prefix__st11'>
						{'Pitch Finals'}
					</text>
				</g>
				<g>
					<path
						className='prefix__st12'
						d='M77.6 275.6h2l4.6 12.8h-1.8l-1.3-3.7H76l-1.3 3.7h-1.8l4.7-12.8zm-1.1 7.6h4l-2-5.7-2 5.7zM87 285.1c0 .8.2 1.3.5 1.7.3.3.8.5 1.5.5.8 0 1.4-.3 1.8-.9.4-.6.7-1.4.7-2.4v-5H93v9.3h-1.4V287c-.1.2-.2.3-.3.5-.7.8-1.5 1.2-2.5 1.2-1.1 0-1.9-.3-2.4-.8s-.8-1.3-.8-2.4v-6.4H87v6zM98.6 291.1c.9 0 1.6-.3 2.1-.8s.7-1.4.7-2.5v-.3c-.6.8-1.5 1.2-2.5 1.2-1.2 0-2.2-.5-3-1.4s-1.1-2.2-1.1-3.8c0-1.4.4-2.5 1.1-3.4.7-.9 1.7-1.3 2.8-1.3 1.1 0 2 .5 2.7 1.5l.1.2v-1.3h1.5v8.6c0 1.6-.4 2.7-1.1 3.5-.7.8-1.8 1.1-3.2 1.1-1.1 0-1.9-.2-2.5-.7-.6-.5-1-1.2-1.1-2.1h1.6c.1.5.3.9.7 1.2s.6.3 1.2.3zm.3-10.9c-.9 0-1.5.3-1.9.8-.4.6-.6 1.4-.6 2.7 0 1.1.2 2 .7 2.6.4.6 1.1.9 1.9.9.8 0 1.4-.3 1.8-.9.5-.6.7-1.3.7-2.3 0-1.3-.2-2.3-.6-3-.5-.4-1.2-.8-2-.8zM117.6 279.6c0 .9-.2 1.7-.7 2.3-.5.6-1.4 1.3-2.7 2-1.4.8-2.4 1.5-2.9 2.1-.2.3-.4.6-.5.9h6.8v1.5H109c0-1.3.3-2.4 1-3.2.7-.8 1.9-1.8 3.7-2.7.9-.5 1.5-.9 1.8-1.3.3-.4.5-.9.5-1.6 0-.7-.2-1.2-.7-1.6-.5-.4-1.1-.6-1.8-.6-.8 0-1.4.3-1.8.8-.4.5-.7 1.3-.7 2.3h-1.5c0-1.4.3-2.5 1.1-3.3.8-.8 1.8-1.2 3.2-1.2 1.2 0 2.1.3 2.9 1 .5.6.9 1.5.9 2.6zM120.1 287.1c-.7-1.1-1.1-2.7-1.1-4.8s.4-3.7 1.1-4.8c.7-1.1 1.8-1.7 3.2-1.7 1.4 0 2.4.6 3.2 1.7.7 1.1 1.1 2.7 1.1 4.8s-.4 3.7-1.1 4.8c-.7 1.1-1.8 1.7-3.2 1.7-1.4 0-2.5-.6-3.2-1.7zm5.1-1c.4-.8.7-2.1.7-3.8 0-1.7-.2-2.9-.7-3.8s-1.1-1.3-2-1.3c-.9 0-1.5.4-2 1.3s-.7 2.1-.7 3.8c0 1.7.2 2.9.7 3.8.4.8 1.1 1.3 2 1.3.9-.1 1.6-.5 2-1.3zM133.6 282.7h4.4v1.6h-4.4v-1.6zM146.4 288.4h-1.6v-12.8h2l6.4 10.4v-10.4h1.6v12.8H153l-6.6-10.5v10.5zM157.9 287.3c-.8-.9-1.2-2.1-1.2-3.6s.4-2.7 1.2-3.6c.8-.9 1.8-1.4 3.1-1.4s2.3.5 3.1 1.4 1.2 2.1 1.2 3.6-.4 2.7-1.2 3.6c-.8.9-1.8 1.4-3.1 1.4s-2.3-.5-3.1-1.4zm5.1-1c.5-.6.7-1.5.7-2.6s-.2-2-.7-2.6c-.5-.6-1.1-1-2-1-.8 0-1.5.3-2 1-.5.6-.7 1.5-.7 2.6s.2 2 .7 2.6c.5.6 1.1 1 2 1 .8 0 1.5-.3 2-1zM165.9 279.1h1.8l2.5 7.6 2.6-7.6h1.8l-3.5 9.3h-1.6l-3.6-9.3zM184.6 275.9c1.1 0 2 .3 2.6.9s1 1.4 1 2.5h-1.6c-.1-.6-.3-1.1-.6-1.4-.4-.3-.9-.5-1.5-.5-1 0-1.7.5-2.2 1.4-.5.8-.7 1.9-.7 3.3.8-1 1.8-1.5 3-1.5s2.1.4 2.9 1.1c.7.8 1.1 1.8 1.1 3s-.4 2.3-1.2 3-1.8 1.1-3.1 1.1c-1.4 0-2.4-.5-3.2-1.6-.7-1.1-1.1-2.6-1.1-4.5 0-2.2.4-3.8 1.2-5 .8-1.3 2-1.8 3.4-1.8zm-2.8 8.7c0 .8.2 1.5.7 2s1.1.8 1.8.8 1.4-.3 1.8-.8.7-1.2.7-2-.2-1.5-.7-2-1.1-.8-1.8-.8-1.4.3-1.8.8c-.4.5-.7 1.2-.7 2zM258.9 288.4h-1.6v-12.8h2l6.4 10.4v-10.4h1.6v12.8h-1.9l-6.6-10.5v10.5zM270.4 287.3c-.8-.9-1.2-2.1-1.2-3.6s.4-2.7 1.2-3.6c.8-.9 1.8-1.4 3.1-1.4s2.3.5 3.1 1.4 1.2 2.1 1.2 3.6-.4 2.7-1.2 3.6c-.8.9-1.8 1.4-3.1 1.4s-2.3-.5-3.1-1.4zm5.1-1c.5-.6.7-1.5.7-2.6s-.2-2-.7-2.6c-.5-.6-1.1-1-2-1-.8 0-1.5.3-2 1-.5.6-.7 1.5-.7 2.6s.2 2 .7 2.6c.5.6 1.1 1 2 1 .9 0 1.5-.3 2-1zM278.5 279.1h1.8l2.5 7.6 2.6-7.6h1.8l-3.5 9.3h-1.6l-3.6-9.3zM300.9 279.6c0 .9-.2 1.7-.7 2.3-.5.6-1.4 1.3-2.7 2-1.4.8-2.4 1.5-2.9 2.1-.2.3-.4.6-.5.9h6.8v1.5h-8.6c0-1.3.3-2.4 1-3.2.7-.8 1.9-1.8 3.7-2.7.9-.5 1.5-.9 1.8-1.3.3-.4.5-.9.5-1.6 0-.7-.2-1.2-.7-1.6-.5-.4-1.1-.6-1.8-.6-.8 0-1.4.3-1.8.8-.4.5-.7 1.3-.7 2.3h-1.5c0-1.4.3-2.5 1.1-3.3.8-.8 1.8-1.2 3.2-1.2 1.2 0 2.1.3 2.9 1 .5.6.9 1.5.9 2.6zM303.4 287.1c-.7-1.1-1.1-2.7-1.1-4.8s.4-3.7 1.1-4.8c.7-1.1 1.8-1.7 3.2-1.7 1.4 0 2.4.6 3.2 1.7.7 1.1 1.1 2.7 1.1 4.8s-.4 3.7-1.1 4.8c-.7 1.1-1.8 1.7-3.2 1.7-1.4 0-2.5-.6-3.2-1.7zm5.1-1c.4-.8.7-2.1.7-3.8 0-1.7-.2-2.9-.7-3.8s-1.1-1.3-2-1.3c-.9 0-1.5.4-2 1.3s-.7 2.1-.7 3.8c0 1.7.2 2.9.7 3.8.4.8 1.1 1.3 2 1.3.9-.1 1.6-.5 2-1.3zM312.9 287.5v-1h1.8v1.6c0 .9-.1 1.6-.4 2-.3.5-.8.8-1.4.9v-.8c.4-.1.6-.3.8-.6.1-.3.2-.7.2-1.2h-.9v-.9zM330 279.6c0 .9-.2 1.7-.7 2.3-.5.6-1.4 1.3-2.7 2-1.4.8-2.4 1.5-2.9 2.1-.2.3-.4.6-.5.9h6.8v1.5h-8.6c0-1.3.3-2.4 1-3.2.7-.8 1.9-1.8 3.7-2.7.9-.5 1.5-.9 1.8-1.3.3-.4.5-.9.5-1.6 0-.7-.2-1.2-.7-1.6-.5-.4-1.1-.6-1.8-.6-.8 0-1.4.3-1.8.8-.4.5-.7 1.3-.7 2.3h-1.5c0-1.4.3-2.5 1.1-3.3.8-.8 1.8-1.2 3.2-1.2 1.2 0 2.1.3 2.9 1 .5.6.9 1.5.9 2.6zM332.4 287.1c-.7-1.1-1.1-2.7-1.1-4.8s.4-3.7 1.1-4.8c.7-1.1 1.8-1.7 3.2-1.7 1.4 0 2.4.6 3.2 1.7.7 1.1 1.1 2.7 1.1 4.8s-.4 3.7-1.1 4.8c-.7 1.1-1.8 1.7-3.2 1.7-1.4 0-2.4-.6-3.2-1.7zm5.2-1c.4-.8.7-2.1.7-3.8 0-1.7-.2-2.9-.7-3.8s-1.1-1.3-2-1.3c-.9 0-1.5.4-2 1.3s-.7 2.1-.7 3.8c0 1.7.2 2.9.7 3.8.4.8 1.1 1.3 2 1.3.9-.1 1.5-.5 2-1.3zM349.4 279.6c0 .9-.2 1.7-.7 2.3-.5.6-1.4 1.3-2.7 2-1.4.8-2.4 1.5-2.9 2.1-.2.3-.4.6-.5.9h6.8v1.5h-8.6c0-1.3.3-2.4 1-3.2.7-.8 1.9-1.8 3.7-2.7.9-.5 1.5-.9 1.8-1.3.3-.4.5-.9.5-1.6 0-.7-.2-1.2-.7-1.6-.5-.4-1.1-.6-1.8-.6-.8 0-1.4.3-1.8.8-.4.5-.7 1.3-.7 2.3h-1.5c0-1.4.3-2.5 1.1-3.3.8-.8 1.8-1.2 3.2-1.2 1.2 0 2.1.3 2.9 1 .6.6.9 1.5.9 2.6zM351.9 287.1c-.7-1.1-1.1-2.7-1.1-4.8s.4-3.7 1.1-4.8c.7-1.1 1.8-1.7 3.2-1.7 1.4 0 2.4.6 3.2 1.7.7 1.1 1.1 2.7 1.1 4.8s-.4 3.7-1.1 4.8c-.7 1.1-1.8 1.7-3.2 1.7-1.4 0-2.4-.6-3.2-1.7zm5.2-1c.4-.8.7-2.1.7-3.8 0-1.7-.2-2.9-.7-3.8s-1.1-1.3-2-1.3c-.9 0-1.5.4-2 1.3s-.7 2.1-.7 3.8c0 1.7.2 2.9.7 3.8.4.8 1.1 1.3 2 1.3.9-.1 1.5-.5 2-1.3z'
					/>
					<g>
						<path
							className='prefix__st12'
							d='M427.8 275.6H433.1c1.6 0 2.9.6 3.9 1.7 1 1.2 1.4 2.7 1.4 4.7s-.5 3.5-1.5 4.7c-1 1.2-2.3 1.7-4 1.7h-5.2v-12.8zm1.7 11.3h3.2c1.2 0 2.2-.4 2.9-1.3s1-2.1 1-3.6c0-1.6-.3-2.8-1-3.6s-1.6-1.3-2.8-1.3h-3.3v9.8zM444 288.7c-1.3 0-2.4-.4-3.1-1.3-.8-.8-1.1-2-1.1-3.5 0-1.6.4-2.8 1.2-3.7s1.9-1.4 3.2-1.4c1.2 0 2.2.5 3 1.4.8.9 1.1 2.1 1.1 3.6v.6h-6.8c.1.9.3 1.6.6 2.1.4.6 1.1.9 2.1.9.6 0 1.1-.2 1.6-.5s.7-.8.8-1.3h1.6c-.2 1-.7 1.8-1.4 2.3-.8.5-1.7.8-2.8.8zm2.6-5.7c0-.9-.3-1.5-.6-2-.4-.5-1-.8-1.9-.8-.8 0-1.5.3-2 .9-.4.5-.6 1.1-.7 1.9h5.2zM457.3 285.1c-.2 1.2-.6 2.1-1.2 2.7s-1.6.9-2.7.9c-1.2 0-2.2-.4-3-1.3-.7-.9-1.1-2.1-1.1-3.6s.4-2.7 1.1-3.6c.8-.9 1.8-1.3 3.1-1.3 1.1 0 2 .3 2.7.9s1 1.5 1.1 2.5h-1.5c-.1-.7-.3-1.2-.7-1.6-.4-.4-.9-.5-1.6-.5-.8 0-1.4.3-1.9 1s-.7 1.5-.7 2.6c0 1.2.2 2.1.6 2.7.4.6 1 .9 1.9.9.6 0 1.1-.2 1.5-.6.4-.4.7-.9.8-1.7h1.6zM462.8 275.3l-4.4 13.5h-1.2l4.4-13.5h1.2zM468.2 275.6h1.8v9.2c0 1.3-.3 2.2-1 2.9s-1.5 1-2.7 1c-1.2 0-2.1-.3-2.8-1-.7-.6-.9-1.5-.9-2.6v-.9h1.6v.9c0 .7.2 1.2.5 1.6.3.4.8.6 1.4.6.6 0 1.1-.2 1.5-.7.4-.4.5-1 .5-1.8v-9.2zM474.7 288.7c-.9 0-1.6-.2-2.2-.7-.5-.5-.8-1.1-.8-2 0-.8.3-1.5.8-2s1.2-.8 2.2-.9l2.1-.3c.2 0 .3 0 .5-.1s.4-.2.5-.3.2-.4.2-.6v-.1c0-.5-.2-.9-.6-1.2s-.9-.4-1.6-.4c-.6 0-1.1.1-1.5.4-.4.3-.6.7-.7 1.3h-1.4c.1-1 .4-1.8 1.1-2.3.6-.5 1.6-.8 2.8-.8 1.1 0 2 .2 2.6.7.6.5.9 1.2.9 2.1v5.1c0 .2 0 .3.1.4.1.1.2.1.4.1h.2c.1 0 .2 0 .3-.1v1.1c-.2.1-.3.1-.5.1s-.3.1-.4.1c-.6 0-1-.2-1.3-.5-.2-.2-.3-.5-.4-.9-.1.1-.2.3-.4.4-.8 1-1.8 1.4-2.9 1.4zm3.3-4v-1c-.3.1-.6.2-1 .3l-1.4.2c-.8.1-1.3.3-1.7.5-.3.2-.5.6-.5 1 0 .5.1.9.4 1.2.3.3.7.4 1.2.4.8 0 1.5-.2 2.1-.7.4-.3.6-.7.8-1.1 0-.1 0-.2.1-.4-.1 0 0-.2 0-.4zM482 279.1h1.5v1.4l.3-.5c.7-.8 1.5-1.2 2.6-1.2 1 0 1.8.3 2.4.8.6.6.8 1.4.8 2.4v6.4H488v-5.9c0-.8-.2-1.4-.5-1.8-.3-.4-.8-.5-1.5-.5-.8 0-1.4.3-1.8.9s-.7 1.3-.7 2.3v5H482v-9.3zM504.4 279.6c0 .9-.2 1.7-.7 2.3-.5.6-1.4 1.3-2.7 2-1.4.8-2.4 1.5-2.9 2.1-.2.3-.4.6-.5.9h6.8v1.5h-8.6c0-1.3.3-2.4 1-3.2.7-.8 1.9-1.8 3.7-2.7.9-.5 1.5-.9 1.8-1.3.3-.4.5-.9.5-1.6 0-.7-.2-1.2-.7-1.6-.5-.4-1.1-.6-1.8-.6-.8 0-1.4.3-1.8.8-.4.5-.7 1.3-.7 2.3h-1.5c0-1.4.3-2.5 1.1-3.3.8-.8 1.8-1.2 3.2-1.2 1.2 0 2.1.3 2.9 1 .5.6.9 1.5.9 2.6zM506.9 287.1c-.7-1.1-1.1-2.7-1.1-4.8s.4-3.7 1.1-4.8c.7-1.1 1.8-1.7 3.2-1.7 1.4 0 2.4.6 3.2 1.7.7 1.1 1.1 2.7 1.1 4.8s-.4 3.7-1.1 4.8c-.7 1.1-1.8 1.7-3.2 1.7-1.4 0-2.5-.6-3.2-1.7zm5.2-1c.4-.8.7-2.1.7-3.8 0-1.7-.2-2.9-.7-3.8s-1.1-1.3-2-1.3c-.9 0-1.5.4-2 1.3s-.7 2.1-.7 3.8c0 1.7.2 2.9.7 3.8.4.8 1.1 1.3 2 1.3.8-.1 1.5-.5 2-1.3zM523.9 279.6c0 .9-.2 1.7-.7 2.3-.5.6-1.4 1.3-2.7 2-1.4.8-2.4 1.5-2.9 2.1-.2.3-.4.6-.5.9h6.8v1.5h-8.6c0-1.3.3-2.4 1-3.2.7-.8 1.9-1.8 3.7-2.7.9-.5 1.5-.9 1.8-1.3.3-.4.5-.9.5-1.6 0-.7-.2-1.2-.7-1.6-.5-.4-1.1-.6-1.8-.6-.8 0-1.4.3-1.8.8-.4.5-.7 1.3-.7 2.3h-1.5c0-1.4.3-2.5 1.1-3.3.8-.8 1.8-1.2 3.2-1.2 1.2 0 2.1.3 2.9 1 .5.6.9 1.5.9 2.6zM526.4 287.1c-.7-1.1-1.1-2.7-1.1-4.8s.4-3.7 1.1-4.8c.7-1.1 1.8-1.7 3.2-1.7 1.4 0 2.4.6 3.2 1.7.7 1.1 1.1 2.7 1.1 4.8s-.4 3.7-1.1 4.8c-.7 1.1-1.8 1.7-3.2 1.7-1.4 0-2.5-.6-3.2-1.7zm5.1-1c.4-.8.7-2.1.7-3.8 0-1.7-.2-2.9-.7-3.8s-1.1-1.3-2-1.3c-.9 0-1.5.4-2 1.3s-.7 2.1-.7 3.8c0 1.7.2 2.9.7 3.8.4.8 1.1 1.3 2 1.3.9-.1 1.6-.5 2-1.3z'
						/>
					</g>
					<g>
						<path
							className='prefix__st12'
							d='M615.8 288.4v-12.8h8.9v1.6h-7.1v3.9h6.2v1.6h-6.2v5.8h-1.8zM629.9 288.7c-1.3 0-2.4-.4-3.1-1.3-.8-.8-1.1-2-1.1-3.5 0-1.6.4-2.8 1.2-3.7s1.9-1.4 3.2-1.4c1.2 0 2.2.5 3 1.4.8.9 1.1 2.1 1.1 3.6v.6h-6.8c.1.9.3 1.6.6 2.1.4.6 1.1.9 2.1.9.6 0 1.1-.2 1.6-.5s.7-.8.8-1.3h1.6c-.2 1-.7 1.8-1.4 2.3-.8.5-1.7.8-2.8.8zm2.6-5.7c0-.9-.3-1.5-.6-2-.4-.5-1-.8-1.9-.8-.8 0-1.5.3-2 .9-.4.5-.6 1.1-.7 1.9h5.2zM635.7 275.6h1.6v4.7c.7-1 1.6-1.5 2.7-1.5 1.2 0 2.2.4 2.9 1.3s1.1 2 1.1 3.4c0 1.6-.4 2.9-1.1 3.8s-1.7 1.4-3 1.4c-1.1 0-1.9-.4-2.5-1.2l-.1-.2v1.2h-1.5v-12.9zm4.1 11.7c.8 0 1.4-.3 1.9-.9.4-.6.6-1.5.6-2.7 0-1.2-.2-2-.6-2.6-.4-.6-1-.8-1.9-.8-.9 0-1.5.3-1.9.9-.4.6-.6 1.6-.6 3 0 1 .2 1.8.6 2.3.5.5 1.1.8 1.9.8zM658.3 279.6c0 .9-.2 1.7-.7 2.3-.5.6-1.4 1.3-2.7 2-1.4.8-2.4 1.5-2.9 2.1-.2.3-.4.6-.5.9h6.8v1.5h-8.6c0-1.3.3-2.4 1-3.2.7-.8 1.9-1.8 3.7-2.7.9-.5 1.5-.9 1.8-1.3.3-.4.5-.9.5-1.6 0-.7-.2-1.2-.7-1.6-.5-.4-1.1-.6-1.8-.6-.8 0-1.4.3-1.8.8-.4.5-.7 1.3-.7 2.3H650c0-1.4.3-2.5 1.1-3.3.8-.8 1.8-1.2 3.2-1.2 1.2 0 2.1.3 2.9 1 .7.6 1.1 1.5 1.1 2.6zM660.8 287.1c-.7-1.1-1.1-2.7-1.1-4.8s.4-3.7 1.1-4.8c.7-1.1 1.8-1.7 3.2-1.7 1.4 0 2.4.6 3.2 1.7.7 1.1 1.1 2.7 1.1 4.8s-.4 3.7-1.1 4.8c-.7 1.1-1.8 1.7-3.2 1.7-1.4 0-2.5-.6-3.2-1.7zm5.1-1c.4-.8.7-2.1.7-3.8 0-1.7-.2-2.9-.7-3.8s-1.1-1.3-2-1.3c-.9 0-1.5.4-2 1.3s-.7 2.1-.7 3.8c0 1.7.2 2.9.7 3.8.4.8 1.1 1.3 2 1.3.9-.1 1.6-.5 2-1.3zM677.8 279.6c0 .9-.2 1.7-.7 2.3-.5.6-1.4 1.3-2.7 2-1.4.8-2.4 1.5-2.9 2.1-.2.3-.4.6-.5.9h6.8v1.5h-8.6c0-1.3.3-2.4 1-3.2.7-.8 1.9-1.8 3.7-2.7.9-.5 1.5-.9 1.8-1.3.3-.4.5-.9.5-1.6 0-.7-.2-1.2-.7-1.6-.5-.4-1.1-.6-1.8-.6-.8 0-1.4.3-1.8.8-.4.5-.7 1.3-.7 2.3h-1.5c0-1.4.3-2.5 1.1-3.3.8-.8 1.8-1.2 3.2-1.2 1.2 0 2.1.3 2.9 1 .5.6.9 1.5.9 2.6zM683.2 279.5h-2.9v-1.3c.9 0 1.6-.2 2.1-.6.5-.4.9-1 1.2-1.8h1.3v12.5H683.2v-8.8z'
						/>
					</g>
					<g>
						<path
							className='prefix__st12'
							d='M954.7 275.6h2l4.6 12.8h-1.8l-1.3-3.7H953l-1.3 3.7h-1.8l4.8-12.8zm-1.1 7.6h4l-2-5.7-2 5.7zM962.4 279.1h1.5v1.3l.1-.1c.7-1 1.6-1.5 2.7-1.5 1.2 0 2.2.4 2.9 1.3s1.1 2 1.1 3.4c0 1.6-.4 2.9-1.1 3.8s-1.7 1.4-3 1.4c-1.1 0-1.9-.4-2.5-1.2l-.1-.1v4.7h-1.6v-13zm4 8.2c.8 0 1.4-.3 1.9-.9.4-.6.6-1.5.6-2.7 0-1.2-.2-2-.6-2.6-.4-.6-1-.8-1.9-.8-.9 0-1.5.3-1.9.9-.4.6-.6 1.6-.6 3 0 1 .2 1.8.6 2.3.5.5 1.1.8 1.9.8zM972.5 279.1h1.5v1.6c.1-.2.3-.5.4-.7.6-.8 1.3-1.2 2.2-1.2.1 0 .3 0 .4.1v1.6h-.3c-.8 0-1.5.3-2 .8s-.7 1.2-.7 2.2v5h-1.6v-9.4zM978.1 275.6h1.6v1.8h-1.6v-1.8zm0 3.5h1.6v9.3h-1.6v-9.3zM981.8 275.6h1.6v12.8h-1.6v-12.8zM998.3 279.6c0 .9-.2 1.7-.7 2.3-.5.6-1.4 1.3-2.7 2-1.4.8-2.4 1.5-2.9 2.1-.2.3-.4.6-.5.9h6.8v1.5h-8.6c0-1.3.3-2.4 1-3.2.7-.8 1.9-1.8 3.7-2.7.9-.5 1.5-.9 1.8-1.3.3-.4.5-.9.5-1.6 0-.7-.2-1.2-.7-1.6-.5-.4-1.1-.6-1.8-.6-.8 0-1.4.3-1.8.8-.4.5-.7 1.3-.7 2.3H990c0-1.4.3-2.5 1.1-3.3.8-.8 1.8-1.2 3.2-1.2 1.2 0 2.1.3 2.9 1 .7.6 1.1 1.5 1.1 2.6zM1000.8 287.1c-.7-1.1-1.1-2.7-1.1-4.8s.4-3.7 1.1-4.8c.7-1.1 1.8-1.7 3.2-1.7 1.4 0 2.4.6 3.2 1.7.7 1.1 1.1 2.7 1.1 4.8s-.4 3.7-1.1 4.8c-.7 1.1-1.8 1.7-3.2 1.7-1.4 0-2.5-.6-3.2-1.7zm5.1-1c.4-.8.7-2.1.7-3.8 0-1.7-.2-2.9-.7-3.8s-1.1-1.3-2-1.3c-.9 0-1.5.4-2 1.3s-.7 2.1-.7 3.8c0 1.7.2 2.9.7 3.8.4.8 1.1 1.3 2 1.3.9-.1 1.6-.5 2-1.3zM1017.8 279.6c0 .9-.2 1.7-.7 2.3-.5.6-1.4 1.3-2.7 2-1.4.8-2.4 1.5-2.9 2.1-.2.3-.4.6-.5.9h6.8v1.5h-8.6c0-1.3.3-2.4 1-3.2.7-.8 1.9-1.8 3.7-2.7.9-.5 1.5-.9 1.8-1.3.3-.4.5-.9.5-1.6 0-.7-.2-1.2-.7-1.6-.5-.4-1.1-.6-1.8-.6-.8 0-1.4.3-1.8.8-.4.5-.7 1.3-.7 2.3h-1.5c0-1.4.3-2.5 1.1-3.3.8-.8 1.8-1.2 3.2-1.2 1.2 0 2.1.3 2.9 1 .5.6.9 1.5.9 2.6zM1023.2 279.5h-2.9v-1.3c.9 0 1.6-.2 2.1-.6.5-.4.9-1 1.2-1.8h1.3v12.5h-1.6v-8.8z'
						/>
					</g>
					<g>
						<path
							className='prefix__st12'
							d='M1125.1 275.6h1.8v9.2c0 1.3-.3 2.2-1 2.9s-1.5 1-2.7 1c-1.2 0-2.1-.3-2.8-1-.7-.6-.9-1.5-.9-2.6v-.9h1.6v.9c0 .7.2 1.2.5 1.6.3.4.8.6 1.4.6.6 0 1.1-.2 1.5-.7.4-.4.5-1 .5-1.8v-9.2zM1130.7 285.1c0 .8.2 1.3.5 1.7.3.3.8.5 1.5.5.8 0 1.4-.3 1.8-.9.4-.6.7-1.4.7-2.4v-5h1.6v9.3h-1.4V287c-.1.2-.2.3-.3.5-.7.8-1.5 1.2-2.5 1.2-1.1 0-1.9-.3-2.4-.8s-.8-1.3-.8-2.4v-6.4h1.6v6zM1138.8 279.1h1.5v1.4l.3-.5c.7-.8 1.5-1.2 2.6-1.2 1 0 1.8.3 2.4.8.6.6.8 1.4.8 2.4v6.4h-1.6v-5.9c0-.8-.2-1.4-.5-1.8-.3-.4-.8-.5-1.5-.5-.8 0-1.4.3-1.8.9s-.7 1.3-.7 2.3v5h-1.6v-9.3zM1152.4 288.7c-1.3 0-2.4-.4-3.1-1.3-.8-.8-1.1-2-1.1-3.5 0-1.6.4-2.8 1.2-3.7s1.9-1.4 3.2-1.4c1.2 0 2.2.5 3 1.4.8.9 1.1 2.1 1.1 3.6v.6h-6.8c.1.9.3 1.6.6 2.1.4.6 1.1.9 2.1.9.6 0 1.1-.2 1.6-.5s.7-.8.8-1.3h1.6c-.2 1-.7 1.8-1.4 2.3-.8.5-1.7.8-2.8.8zm2.6-5.7c0-.9-.3-1.5-.6-2-.4-.5-1-.8-1.9-.8-.8 0-1.5.3-2 .9-.4.5-.6 1.1-.7 1.9h5.2zM1171 279.6c0 .9-.2 1.7-.7 2.3-.5.6-1.4 1.3-2.7 2-1.4.8-2.4 1.5-2.9 2.1-.2.3-.4.6-.5.9h6.8v1.5h-8.6c0-1.3.3-2.4 1-3.2.7-.8 1.9-1.8 3.7-2.7.9-.5 1.5-.9 1.8-1.3.3-.4.5-.9.5-1.6 0-.7-.2-1.2-.7-1.6-.5-.4-1.1-.6-1.8-.6-.8 0-1.4.3-1.8.8-.4.5-.7 1.3-.7 2.3h-1.5c0-1.4.3-2.5 1.1-3.3.8-.8 1.8-1.2 3.2-1.2 1.2 0 2.1.3 2.9 1 .5.6.9 1.5.9 2.6zM1173.5 287.1c-.7-1.1-1.1-2.7-1.1-4.8s.4-3.7 1.1-4.8c.7-1.1 1.8-1.7 3.2-1.7 1.4 0 2.4.6 3.2 1.7.7 1.1 1.1 2.7 1.1 4.8s-.4 3.7-1.1 4.8c-.7 1.1-1.8 1.7-3.2 1.7-1.4 0-2.5-.6-3.2-1.7zm5.1-1c.4-.8.7-2.1.7-3.8 0-1.7-.2-2.9-.7-3.8s-1.1-1.3-2-1.3c-.9 0-1.5.4-2 1.3s-.7 2.1-.7 3.8c0 1.7.2 2.9.7 3.8.4.8 1.1 1.3 2 1.3.9-.1 1.6-.5 2-1.3zM1190.5 279.6c0 .9-.2 1.7-.7 2.3-.5.6-1.4 1.3-2.7 2-1.4.8-2.4 1.5-2.9 2.1-.2.3-.4.6-.5.9h6.8v1.5h-8.6c0-1.3.3-2.4 1-3.2.7-.8 1.9-1.8 3.7-2.7.9-.5 1.5-.9 1.8-1.3.3-.4.5-.9.5-1.6 0-.7-.2-1.2-.7-1.6-.5-.4-1.1-.6-1.8-.6-.8 0-1.4.3-1.8.8-.4.5-.7 1.3-.7 2.3h-1.5c0-1.4.3-2.5 1.1-3.3.8-.8 1.8-1.2 3.2-1.2 1.2 0 2.1.3 2.9 1 .5.6.9 1.5.9 2.6zM1195.9 279.5h-2.9v-1.3c.9 0 1.6-.2 2.1-.6.5-.4.9-1 1.2-1.8h1.3v12.5h-1.6v-8.8z'
						/>
					</g>
					<path
						className='prefix__st13'
						d='M59.5 258.5h148v47.9h-148zM242.8 259h133.7v47.9H242.8zM412.8 259h133.7v47.9H412.8zM585.8 259h133.7v47.9H585.8z'
					/>
					<g>
						<path
							className='prefix__st12'
							d='M784.8 288.4v-12.8h8.9v1.6h-7.1v3.9h6.2v1.6h-6.2v5.8h-1.8zM798.9 288.7c-1.3 0-2.4-.4-3.1-1.3-.8-.8-1.1-2-1.1-3.5 0-1.6.4-2.8 1.2-3.7s1.9-1.4 3.2-1.4c1.2 0 2.2.5 3 1.4.8.9 1.1 2.1 1.1 3.6v.6h-6.8c.1.9.3 1.6.6 2.1.4.6 1.1.9 2.1.9.6 0 1.1-.2 1.6-.5s.7-.8.8-1.3h1.6c-.2 1-.7 1.8-1.4 2.3-.8.5-1.7.8-2.8.8zm2.6-5.7c0-.9-.3-1.5-.6-2-.4-.5-1-.8-1.9-.8-.8 0-1.5.3-2 .9-.4.5-.6 1.1-.7 1.9h5.2zM804.7 275.6h1.6v4.7c.7-1 1.6-1.5 2.7-1.5 1.2 0 2.2.4 2.9 1.3s1.1 2 1.1 3.4c0 1.6-.4 2.9-1.1 3.8s-1.7 1.4-3 1.4c-1.1 0-1.9-.4-2.5-1.2l-.1-.2v1.2h-1.5v-12.9zm4.1 11.7c.8 0 1.4-.3 1.9-.9.4-.6.6-1.5.6-2.7 0-1.2-.2-2-.6-2.6-.4-.6-1-.8-1.9-.8-.9 0-1.5.3-1.9.9-.4.6-.6 1.6-.6 3 0 1 .2 1.8.6 2.3.5.5 1.1.8 1.9.8zM827.3 279.6c0 .9-.2 1.7-.7 2.3-.5.6-1.4 1.3-2.7 2-1.4.8-2.4 1.5-2.9 2.1-.2.3-.4.6-.5.9h6.8v1.5h-8.6c0-1.3.3-2.4 1-3.2.7-.8 1.9-1.8 3.7-2.7.9-.5 1.5-.9 1.8-1.3.3-.4.5-.9.5-1.6 0-.7-.2-1.2-.7-1.6-.5-.4-1.1-.6-1.8-.6-.8 0-1.4.3-1.8.8-.4.5-.7 1.3-.7 2.3H819c0-1.4.3-2.5 1.1-3.3.8-.8 1.8-1.2 3.2-1.2 1.2 0 2.1.3 2.9 1 .7.6 1.1 1.5 1.1 2.6zM829.8 287.1c-.7-1.1-1.1-2.7-1.1-4.8s.4-3.7 1.1-4.8c.7-1.1 1.8-1.7 3.2-1.7 1.4 0 2.4.6 3.2 1.7.7 1.1 1.1 2.7 1.1 4.8s-.4 3.7-1.1 4.8c-.7 1.1-1.8 1.7-3.2 1.7-1.4 0-2.5-.6-3.2-1.7zm5.1-1c.4-.8.7-2.1.7-3.8 0-1.7-.2-2.9-.7-3.8s-1.1-1.3-2-1.3c-.9 0-1.5.4-2 1.3s-.7 2.1-.7 3.8c0 1.7.2 2.9.7 3.8.4.8 1.1 1.3 2 1.3.9-.1 1.6-.5 2-1.3zM846.8 279.6c0 .9-.2 1.7-.7 2.3-.5.6-1.4 1.3-2.7 2-1.4.8-2.4 1.5-2.9 2.1-.2.3-.4.6-.5.9h6.8v1.5h-8.6c0-1.3.3-2.4 1-3.2.7-.8 1.9-1.8 3.7-2.7.9-.5 1.5-.9 1.8-1.3.3-.4.5-.9.5-1.6 0-.7-.2-1.2-.7-1.6-.5-.4-1.1-.6-1.8-.6-.8 0-1.4.3-1.8.8-.4.5-.7 1.3-.7 2.3h-1.5c0-1.4.3-2.5 1.1-3.3.8-.8 1.8-1.2 3.2-1.2 1.2 0 2.1.3 2.9 1 .5.6.9 1.5.9 2.6zM852.2 279.5h-2.9v-1.3c.9 0 1.6-.2 2.1-.6.5-.4.9-1 1.2-1.8h1.3v12.5H852.2v-8.8z'
						/>
					</g>
					<path
						className='prefix__st13'
						d='M754.8 259h133.7v47.9H754.8zM922.8 259h133.7v47.9H922.8zM1094.8 259h133.7v47.9h-133.7z'
					/>
				</g>
			</svg>
		</div>
	);
};
