import React from 'react';

function useKeydown(key, callback) {
    //declare the useEffect hook to handle the keydown event so we can pass the key and the handler function
    React.useEffect(() => {
        function handleKeyDown(event) {
            if (event.code === key) {
                callback(event);
            }
        }

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [key, callback]);
}

export default useKeydown;
