import { useEffect, useState } from 'react';

function useDarkMode() {
    const [isDarkMode, setIsDarkMode] = useState(
        typeof window !== 'undefined' ? localStorage.darkMode : false
    );
    const colorTheme ='dark-mode';

    useEffect(() => {
        const root = window.document.body;

        root.classList.toggle(colorTheme);

        if (typeof window !== 'undefined') {
            localStorage.setItem('darkMode', !isDarkMode);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isDarkMode]);

    return [isDarkMode, setIsDarkMode];
}

export default useDarkMode;