import React, { useState } from "react";
import styled from "styled-components";
import '../styles/common.css';

const TabMenu = styled.ul`
    height: 45px;
    padding: 0;
    margin: 30px 0;

    background: #eee;
    color: #333;
    font-weight: bold;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    list-style: none;

    .submenu {
        display: flex;
        padding: 15px;
        box-sizing: border-box;

        flex-grow: 1;
        cursor: pointer;
    }

    .focused {
        background-color: #4900ce;
        height: 100%;
        color: white;

        display: flex;
        align-items: center;
        
        transition: 0.5s;
    }
`;

const Contents = styled.div`
    text-align: center;
    padding: 50px;
    box-sizing: border-box;
`;


function Tab () {
    const tabArr = [
        { 
            name: 'Tab1',
            content: 'Tab menu ONE'
        },
        { 
            name: 'Tab2',
            content: 'Tab menu TWO'
        },
        { 
            name: 'Tab3',
            content: 'Tab menu THREE'
        }
    ];

    const [currentTab, setCurrentTab] = useState(0);

    const tabHandler = (idx) => {
        setCurrentTab(idx);
    };

    return (
        <>
            <div className='container'>
                <b>Tab</b>
                <TabMenu>
                    {tabArr.map((el, idx) => {
                        return <li key={idx}
                                   className={`${idx === currentTab ? 'submenu focused' : 'submenu'}`}
                                   onClick={() => tabHandler(idx)}>
                                {el.name}
                                </li>
                    })}
                </TabMenu>
                <Contents>
                    <p>{tabArr[currentTab].content}</p>
                </Contents>
            </div>
        </>
    );
};

export default Tab;