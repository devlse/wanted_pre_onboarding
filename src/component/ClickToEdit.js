import React from "react";
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

        }
    }

    .editInform {
        display: block;
        margin: 20px 0 50px 0;
    }
    
`

function ClickToEdit () {
    return (
        <>
            <div className='container'>
                <div className="common-title">ClickToEdit</div>
                    <EditContainer>
                        <div className="editItem">이름 <input type="text" /></div>
                        <div className="editItem">나이 <input type="text" /></div>
                        <span className="editInform">이름: 최해커 / 나이: 20</span>
                    </EditContainer>
            </div>
        </>
    );
};

export default ClickToEdit;