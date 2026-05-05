'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

interface ImageProps {
	src: string;
	alt?: string;
}

interface ZoomParallaxProps {
	/** Array of images to be displayed in the parallax effect max 7 images */
	images: ImageProps[];
}

export function ZoomParallax({ images }: ZoomParallaxProps) {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start start', 'end end'],
	});

	const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
	const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
	const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
	const scale7 = useTransform(scrollYProgress, [0, 1], [1, 7]);
	const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
	const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

	const scales = [
		scale4, scale5, scale6, scale5, scale6, scale8, scale9,
		scale7, scale8, scale5, scale6, scale7, scale8, scale9, scale6
	];

	const positions = [
		"", // Index 0: Center
		"[&>div]:!-top-[25vh] md:[&>div]:!-top-[30vh] [&>div]:!left-[15vw] md:[&>div]:!left-[5vw] [&>div]:!h-[20vh] md:[&>div]:!h-[30vh] [&>div]:!w-[50vw] md:[&>div]:!w-[35vw]", // 1
		"[&>div]:!-top-[5vh] md:[&>div]:!-top-[10vh] [&>div]:!-left-[20vw] md:[&>div]:!-left-[25vw] [&>div]:!h-[30vh] md:[&>div]:!h-[45vh] [&>div]:!w-[40vw] md:[&>div]:!w-[20vw]", // 2
		"[&>div]:!left-[25vw] md:[&>div]:!left-[27.5vw] [&>div]:!h-[20vh] md:[&>div]:!h-[25vh] [&>div]:!w-[45vw] md:[&>div]:!w-[25vw]", // 3
		"[&>div]:!top-[20vh] md:[&>div]:!top-[27.5vh] [&>div]:!left-[10vw] md:[&div]:!left-[5vw] [&>div]:!h-[20vh] md:[&>div]:!h-[25vh] [&>div]:!w-[40vw] md:[&>div]:!w-[20vw]", // 4
		"[&>div]:!top-[25vh] md:[&>div]:!top-[27.5vh] [&>div]:!-left-[20vw] md:[&>div]:!-left-[22.5vw] [&>div]:!h-[20vh] md:[&>div]:!h-[25vh] [&>div]:!w-[50vw] md:[&>div]:!w-[30vw]", // 5
		"[&>div]:!top-[15vh] md:[&>div]:!top-[22.5vh] [&>div]:!left-[20vw] md:[&>div]:!left-[25vw] [&>div]:!h-[12vh] md:[&>div]:!h-[15vh] [&>div]:!w-[30vw] md:[&>div]:!w-[15vw]", // 6
		"[&>div]:!-top-[40vh] md:[&>div]:!-top-[45vh] [&>div]:!-left-[10vw] md:[&>div]:!-left-[10vw] [&>div]:!h-[20vh] md:[&>div]:!h-[25vh] [&>div]:!w-[40vw] md:[&>div]:!w-[20vw]", // 7
		"[&>div]:!-top-[20vh] md:[&>div]:!-top-[25vh] [&>div]:!left-[30vw] md:[&>div]:!left-[35vw] [&>div]:!h-[20vh] md:[&>div]:!h-[25vh] [&>div]:!w-[40vw] md:[&>div]:!w-[20vw]", // 8
		"[&>div]:!top-[10vh] md:[&>div]:!top-[10vh] [&>div]:!-left-[35vw] md:[&>div]:!-left-[40vw] [&>div]:!h-[30vh] md:[&>div]:!h-[35vh] [&>div]:!w-[30vw] md:[&>div]:!w-[15vw]", // 9
		"[&>div]:!-top-[15vh] md:[&>div]:!-top-[20vh] [&>div]:!left-[40vw] md:[&>div]:!left-[42vw] [&>div]:!h-[25vh] md:[&>div]:!h-[30vh] [&>div]:!w-[30vw] md:[&>div]:!w-[15vw]", // 10
		"[&>div]:!top-[40vh] md:[&>div]:!top-[42vh] [&>div]:!-left-[5vw] md:[&>div]:!-left-[5vw] [&>div]:!h-[15vh] md:[&>div]:!h-[20vh] [&>div]:!w-[45vw] md:[&>div]:!w-[25vw]", // 11
		"[&>div]:!top-[35vh] md:[&>div]:!top-[38vh] [&>div]:!left-[20vw] md:[&>div]:!left-[18vw] [&>div]:!h-[20vh] md:[&>div]:!h-[25vh] [&>div]:!w-[40vw] md:[&>div]:!w-[20vw]", // 12
		"[&>div]:!-top-[45vh] md:[&>div]:!-top-[48vh] [&>div]:!left-[20vw] md:[&>div]:!left-[22vw] [&>div]:!h-[12vh] md:[&>div]:!h-[15vh] [&>div]:!w-[30vw] md:[&>div]:!w-[15vw]", // 13
		"[&>div]:!top-[5vh] md:[&>div]:!top-[5vh] [&>div]:!left-[45vw] md:[&>div]:!left-[48vw] [&>div]:!h-[25vh] md:[&>div]:!h-[30vh] [&>div]:!w-[20vw] md:[&>div]:!w-[10vw]", // 14
	];

	// Fade out all images earlier to make room for the text
	const opacity = useTransform(scrollYProgress, [0, 0.2, 0.4], [1, 1, 0]);
	
	// Fade in the message as photos disappear - Tuned for an ultra-short 150vh height
	const textOpacity = useTransform(scrollYProgress, [0.3, 0.5, 0.8], [0, 1, 1]);

	return (
		<div ref={container} className="relative h-[150vh]">
			<div className="sticky top-0 h-screen overflow-hidden bg-black flex items-center justify-center z-20">
				{/* Images First */}
				{images.map(({ src, alt }, index) => {
					const scale = scales[index % scales.length];
					const position = positions[index % positions.length];
					const isMain = index === 0;

					return (
						<motion.div
							key={index}
							style={{ 
								scale, 
								opacity,
								zIndex: isMain ? 10 : 1 
							}}
							className={`absolute top-0 flex h-full w-full items-center justify-center ${position}`}
						>
							<div className="relative h-[20vh] w-[60vw] md:h-[25vh] md:w-[25vw] overflow-hidden">
								<img
									src={src || '/placeholder.svg'}
									alt={alt || `Parallax image ${index + 1}`}
									className="h-full w-full object-cover"
								/>
							</div>
						</motion.div>
					);
				})}

				{/* Background Message - Increased visibility and better responsiveness */}
				<motion.div 
					style={{ opacity: textOpacity }}
					className="absolute inset-0 flex items-center justify-center z-[100] pointer-events-none"
				>
					<h2 className="text-white text-4xl sm:text-6xl md:text-[8vw] font-black uppercase tracking-tighter text-center max-w-7xl px-4 leading-[0.85] italic">
						20s GONNA LOOK<br/>
						<span className="text-[#ff0000]">GREAT ON YOU</span>
					</h2>
				</motion.div>
			</div>
		</div>
	);
}
