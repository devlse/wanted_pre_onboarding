import React, { useState } from 'react';
import styled from 'styled-components';
import '../styles/common.css';
import '../styles/Toggle.css';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 60px;
`

// Toggle 컴포넌트
function Toggle () {
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <div className='container'>
                <b>Toggle</b>
                <Wrapper>
                    <input
                        className='toggle-input'
                        type="checkbox"
                        onChange={() => setToggle(!toggle)}
                        id={`el`} // label과 연결할 id
                    />
                    <label 
                        className='toggle-label'
                        htmlFor={`el`}    // input과 연결
                    >
                        <div className='ball'></div>    {/* 좌우로 움직이는 원 */}
                    </label>
                    <div>Toggle Switch {toggle === true ? 'ON' : 'OFF'}</div>   {/* ON OFF 바꿔줘야하는 부분 */}
                </Wrapper>
            </div>
        </>

    );
};


export default Toggle;