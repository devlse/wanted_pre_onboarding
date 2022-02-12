import React, { useState } from "react";
import styled from "styled-components";
import '../styles/common.css';

const EditContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: bold;

    .editItem {
        margin: 20px;

        input {
            height: 35px;
            margin-left: 20px;
            border: 1px solid hsl(150deg 3% 88%);
            padding: 0 7px;
            border-radius: 3px;
            text-align: center;
        }
    }

    .editInform {
        display: block;
        margin: 20px 0 50px 0;
    }
    
`

function ClickToEdit () {
    const [inputs, setInputs] = useState({
        name: '김코딩',
        age: '20'
    });

    const { name, age } = inputs;

    const onChange = (e) => {
        const { name, value } = e.target; // input의 name 값을 참조 (e.target.name, e.target.value)
        setInputs({
            ...inputs,     // 기존의 input 객체를 복사한 뒤
            [name]: value // name 키를 가진 값을 value로 설정
        });
    };

    return (
        <>
            <div className='container'>
                <div className="common-title">ClickToEdit</div>
                    <EditContainer>
                        <div className="editItem">이름 <input name="name" type="text" onChange={onChange} value={name}/></div>
                        <div className="editItem">나이 <input name="age" type="text" onChange={onChange} value={age}/></div>
                        <span className="editInform">이름: {name} / 나이: {age}</span>
                    </EditContainer>
            </div>
        </>
    );
};

export default ClickToEdit;