import { useState, useEffect, useRef } from "react";

export default function useNerScreen({ distancie = "100px" } = {}) {
	const [isNearScreen, setShow] = useState(false);
	const fromRef = useRef();
	useEffect(() => {
		let observer;
		const onchange = (entries, observer) => {
			const el = entries[0];
			if (el.isIntersecting) {
				setShow(true);
				observer.disconnect();
			}
		};

		Promise.resolve(
			typeof IntersectionObserver !== "undefined"
				? IntersectionObserver
				: import("intersection-observer")
		).then(() => {
			const observer = new IntersectionObserver(onchange, {
				rootMargin: distancie,
			});
			observer.observe(fromRef.current);
		});

		return () => observer && observer.disconnect();
	});
	return { isNearScreen, fromRef };
}
