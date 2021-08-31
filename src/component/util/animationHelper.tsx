import React from 'react'


export const AnimationHelper = (render: Function, fps: number, duration: number = 500, repeat: boolean = true) => {
    let start = Date.now();
    let timer = setInterval(function () {
        let interval = Date.now() - start;

        render()

        // if (!repeat) {
            if (interval > duration) clearInterval(timer); // stop animation
        // }

    }, 1000 / 100);

}


export const useAnimationFrame = callback => {
    // Use useRef for mutable variables that we want to persist
    // without triggering a re-render on their change
    const requestRef = React.useRef(null);
    const previousTimeRef = React.useRef(null);

    const animate = time => {
        if (previousTimeRef.current != undefined) {
            const deltaTime = time - previousTimeRef.current;
            callback(deltaTime)
        }
        previousTimeRef.current = time;
        requestRef.current = requestAnimationFrame(animate);
    }

    React.useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current);
    }, []); // Make sure the effect runs only once
}