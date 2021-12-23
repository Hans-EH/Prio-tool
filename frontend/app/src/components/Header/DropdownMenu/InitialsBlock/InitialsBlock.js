import React, { useMemo } from 'react'

import useLocalStorage from '../../../../hooks/useLocalStorage';

const InitialsBlock = () => {

    function stringToHex(str) {
        if (str === undefined) {
            return '#000';
        } 
        
        for (var i = 0, hash = 0; i < str.length; hash = str.charCodeAt(i++) + ((hash << 5) - hash));
        let color = Math.floor(Math.abs((Math.sin(hash) * 10000) % 1 * 16777216)).toString(16);
        return '#' + Array(6 - color.length + 1).join('0') + color;
    }

    // Tester
    const [username] = useLocalStorage("user");
    const usernameColor = useMemo(() => stringToHex(username), [username]);

    return (
        <div className="rounded-full h-12 w-12 mr-1 text-white flex justify-center items-center" style={{ backgroundColor: usernameColor }}>
            <span className="text-lg uppercase tracking-widest font-bold">{username ? username[0] : <p>?</p>}</span>
        </div>
    )
}

export default InitialsBlock
