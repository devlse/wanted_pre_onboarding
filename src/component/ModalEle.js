import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,0.5);
    z-index: 0;
`;

const ModalContainer = styled.div`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    max-width: 80%; 
    max-height: 80%;
    width: 400px;
    height: 150px;

    padding: 15px;
    background: white;
    border-radius: 15px;
    box-sizing: border-box;

    text-align: center;
    color: #4900ce;
    font-size: 17px;
`;

const CloseIcon = styled.div`
    width: 20px;
    height: 20px;
    background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGlkPSJMYWdlcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IC0yNjUgMzg4LjkgNjQgNjQ7IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9Ii0yNjUgMzg4LjkgNjQgNjQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0tMjI0LjcsNDIwLjlsNy4zLTcuM2MwLjYtMC42LDAuNi0xLjUsMC0yLjFsLTYuMi02LjJjLTAuNi0wLjYtMS41LTAuNi0yLjEsMGwtNy4zLDcuM2wtNy4zLTcuM2MtMC42LTAuNi0xLjUtMC42LTIuMSwwICBsLTYuMiw2LjJjLTAuNiwwLjYtMC42LDEuNSwwLDIuMWw3LjMsNy4zbC03LjMsNy4zYy0wLjYsMC42LTAuNiwxLjUsMCwyLjFsNi4yLDYuMmMwLjYsMC42LDEuNSwwLjYsMi4xLDBsNy4zLTcuM2w3LjMsNy4zICBjMC42LDAuNiwxLjUsMC42LDIuMSwwbDYuMi02LjJjMC42LTAuNiwwLjYtMS41LDAtMi4xTC0yMjQuNyw0MjAuOXoiLz48L3N2Zz4=') no-repeat;
    background-size: contain;

    margin: auto;
    margin-bottom: 30px;

    cursor: pointer;
`;

function ModalEle (props) {
    const { showModal, closeModal } = props;

    return (
        <>
        { showModal ?
                <Background onClick={closeModal}>
                    <ModalContainer onClick={e => e.stopPropagation()}>
                        <CloseIcon onClick={closeModal} />
                        <p>HELLO CODESTATES!</p>
                    </ModalContainer> 
                </Background> : null
        }
        </>
    );
};

export default ModalEle;