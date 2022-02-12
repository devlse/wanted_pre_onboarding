import React, { useState } from "react";
import styled from "styled-components";
import '../styles/common.css';

const searchedWords = [
    'antique',
    'vintage',
    '중고A급',
    'refurbished',
    'rustic'
]

const SearchBox = styled.div`
    width: 100%;
    height: 50px;
    border: 1px solid hsl(150deg 3% 88%);
    border-radius: 15px;
    margin: 100px 0;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    :focus-within {
        box-shadow: 0 8px 8px rgb(0,0,0, 0.1);
    }

    input {
        background: transparent;
        flex: 1;
        height: 48px;
        border: none;
        margin: 0 8px;

        font-size: 16px;

        :focus {
            outline: none;
        }
    }

    .resetBtn {
        font-weight: bold;
        font-size: 18px;
        text-align: center;

        display: block;
        width: 50px;
        height: 20px;

        cursor: pointer;
    }
`

const DropDownBox = styled.div`

`


function AutoComplete () {
    return (
        <>
            <div className='container'>
                <div className="common-title">AutoComplete</div>
                    <SearchBox>
                        <input type="text" />
                        <span className="resetBtn">×</span>
                    </SearchBox>
                    <DropDownBox>

                    </DropDownBox>
            </div>
        </>
    );
};

export default AutoComplete;