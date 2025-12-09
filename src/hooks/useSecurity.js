import { useEffect } from 'react';

const useSecurity = () => {
    useEffect(() => {
        // Disable Right Click
        const handleContextMenu = (e) => {
            e.preventDefault();
        };

        // Disable Keyboard Shortcuts
        const handleKeyDown = (e) => {
            // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
            if (
                e.key === 'F12' ||
                (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i')) ||
                (e.ctrlKey && e.shiftKey && (e.key === 'J' || e.key === 'j')) ||
                (e.ctrlKey && (e.key === 'U' || e.key === 'u'))
            ) {
                e.preventDefault();
            }
        };

        // Add Console Warning
        const consoleWarning = () => {
            console.log(
                '%cStop!',
                'color: red; font-size: 50px; font-weight: bold; text-shadow: 2px 2px 0px black;'
            );
            console.log(
                '%cThis is a browser feature intended for developers. If someone told you to copy-paste something here to enable an Inventum feature or "hack" someone\'s account, it is a scam and will give them access to your account.',
                'color: white; font-size: 20px; font-weight: bold; background-color: red; padding: 10px; border-radius: 5px;'
            );
        };

        document.addEventListener('contextmenu', handleContextMenu);
        document.addEventListener('keydown', handleKeyDown);
        consoleWarning();

        return () => {
            document.removeEventListener('contextmenu', handleContextMenu);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);
};

export default useSecurity;
