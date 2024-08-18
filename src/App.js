import React, { useState } from 'react';
//creating function alert
function TextInputComponent() {
    const [inputText, setInputText] = useState('');
    alert("hello");

    const handleChange = (event) => {
        setInputText(event.target.value);
    };

    return (
        <div>
            <h1>Enter Text</h1>
                <input
                type="text"
                value={inputText}
                onChange={handleChange}
            />
            <br /><br />
            
            <p>Your text is: {inputText}</p>
        </div>
    );
}

export default TextInputComponent;