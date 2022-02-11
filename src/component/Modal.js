import React, { useState } from 'react';
import styled from 'styled-components';
import '../styles/common.css';
import ModalEle from './ModalEle';

const Btn = styled.div`
    width: 140px;
    height: 60px;
    background: cornflowerblue;
    border-radius: 50px;

    color: white;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    cursor: pointer;
`

function Modal () {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    }

    return (
        <>
            <div className='container'>
                <b>Modal</b>
                <div className='wrap'>
                    <Btn onClick={openModal}><p>Open Modal</p></Btn>
                    <ModalEle showModal={showModal} closeModal={closeModal} />
                </div>
            </div>
        </>
    );
};


export default Modal;