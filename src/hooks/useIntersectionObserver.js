import { useEffect } from "react";

export const useIntersectionObserver = (targets, options, handler, antiHandler) => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    if (handler) handler();
                }
                else {
                    if (antiHandler) antiHandler();
                }
            });
        }, options);

        targets.forEach(target => {
            const { current } = target;
            if (current) observer.observe(current);
        });

        return () => targets.forEach(target => {
            const { current } = target;
            if (current) observer.unobserve(current);
        });
    }, [targets, options, handler, antiHandler]);
}