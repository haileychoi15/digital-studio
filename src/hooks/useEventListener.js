import { useEffect } from 'react';

export const useEventListener = (target, type, listener) => {
    useEffect(() => {
        if (target) {
            target.addEventListener(type, listener);
            return () => target.removeEventListener(type, listener);
        }
    }, [target, type, listener]);
}