import React, { useState } from "react";
import styled from "styled-components";
import '../styles/common.css';


const TagsInput = styled.div`
    width: 90%;
    min-height: 50px;
    border: 1px solid hsl(150deg 3% 88%);
    border-radius: 5px;
    padding: 0 6px;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;

    > ul {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin: 8px 0 0 0;

        > .tag {
            width: auto;
            height: 32px;
            background: #4900ce;
            padding: 1px 8px;
            border-radius: 7px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            font-size: 15px;
            margin: 0 8px 8px 0;

            > .tag-close-icon {
                display: block;
                width: 17px;
                height: 17px;
                border-radius: 50%;
                background: white;
                margin-left: 8px;
                line-height: 15px;
                text-align: center;
                color: #4900ce;
                font-weight: bold;
                cursor: pointer;
            };
        };
    };

    > input {
        background: transparent;
        flex: 1;
        height: 48px;
        border: none;
        font-size: 15px;
        
        :focus {
            outline: none;
        }
    }

    &:focus-within {
        border: 1px solid #4900ce;
    }
`;


function Tag () {
    const baseTags = ['Hello', 'world'];

    const [tags, setTags] = useState(baseTags);

    const addTags = (e) => {
        let value = e.target.value.trim();
        
        if (e.key === 'Enter' && value) {
            setTags([...tags, value]);  // spread로 기존의 tags를 복사해주고 입력받은 값 추가해주기
            e.target.value = ''; // 엔터키 누른 후엔 입력창 비우기
        } else if (e.key === 'Enter' && !value) {
            e.target.value = '';
        }
    }

    const removeTags = (idx) => { // 클릭으로 받은 index를 제외한 나머지 배열들을 필터링하여 배열재정리
        setTags(tags.filter((tag) => {
            return tag !== tags[idx]
        }));
    };

    return (
        <>
            <div className='container'>
                <div className='common-title'>Tag</div>
                <div className="wrap">
                    <TagsInput>
                        <ul id="tags">
                            {tags.map((tag, idx) => (
                                <li key={idx} className='tag'>
                                    <span>{tag}</span>
                                    <span className="tag-close-icon"
                                          onClick={() => removeTags(idx)}>×
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <input
                            className="tag-input"
                            type="text" 
                            placeholder="Press enter to add tags"
                            onKeyUp={(e) => {addTags(e)}}
                        />
                    </TagsInput>
                </div>
            </div>
        </>
    );
};

export default Tag;