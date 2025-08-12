import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

function SmoothScrolling({ children }: { children: React.ReactNode }) {
	useEffect(() => {
		const lenis = new Lenis({
			lerp: 0.05,
			duration: 1.5,
            smoothWheel: true,
		});

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);

		return () => {
			lenis.destroy(); // Cleanup when component unmounts
		};
	}, []);

	return <>{children}</>;
}

export default SmoothScrolling;
