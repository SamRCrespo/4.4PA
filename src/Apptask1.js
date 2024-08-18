import React, { useState } from 'react';
import './App.css';
import Button from './Button';

function App() {
    const [clickCount, setClickCount] = useState(0);
    const [displayNum, setDisplayNum] = useState('');

    const handleClickUp = () => {
        setClickCount(clickCount + 1);
        setDisplayNum(`Button clicked ${clickCount + 1} times.`);
    };

    const handleClickDown = () => {
        if (clickCount > 0) {
            setClickCount(clickCount - 1);
            setDisplayNum(`Button clicked ${clickCount - 1} times.`);
        } else {
            setDisplayNum(`Button clicked 0 times.`);
        }
    };

    return (
        <div className="App">
            <h2>Click buttons to see number of clicks.</h2><br />
            Click a button below:<br />
            <table width='100%'>
                <tbody>
                    <tr>
                        <td><Button label="Click Up" onClick={handleClickUp} /></td>
                    </tr>
                    <tr>
                        <td><Button label="Click Down" onClick={handleClickDown} /></td>
                    </tr>
                </tbody>
            </table>
            {displayNum && <p style={{ fontSize: '30px', fontWeight: 'bold', color: 'green' }}>{displayNum}</p>}<br />
        </div>
    );
}

export default App;
