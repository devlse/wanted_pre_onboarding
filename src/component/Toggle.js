import React, { useState } from 'react';
import '../styles/common.css';
import '../styles/Toggle.css';

function Toggle () {
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <div className='container'>
                <b>Toggle</b>
                <div className='wrap'>
                    <input
                        className='toggle-input'
                        type="checkbox"
                        onChange={() => setToggle(!toggle)}
                        id={`el`}
                    />
                    <label 
                        className='toggle-label'
                        htmlFor={`el`}
                    >
                        <div className='ball'></div> 
                    </label>
                    <div>Toggle Switch {toggle === true ? 'ON' : 'OFF'}</div>
                </div>
            </div>
        </>

    );
};


export default Toggle;