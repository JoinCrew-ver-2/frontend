import { styled } from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCreateEventStore } from '../store/useCreateEventStore';
import { IoIosArrowBack } from "react-icons/io";
import { useState } from 'react';

function WriteEvent() {
    const location = useLocation();
    const formDataFromState = location.state?.formData;
    const { setTitle, setContent } = useCreateEventStore();
    const navigate = useNavigate();
    const [title, setTitleState] = useState('');
    const [content, setContentState] = useState('');

    const handleBackClick = () => {
        navigate(-1);
    }

    const handleSubmit = () => {
        setTitle(title);
        setContent(content);
    }

    return <WriteEventStyle>
        <div className="back" onClick={handleBackClick}><IoIosArrowBack /></div>
        <div className="title">
            <h1>크루를 소개해주세요!</h1>
        </div>
        <div className="event-title">
            <textarea
                placeholder='크루 이름'
                value={title}
                onChange={(e) => setTitleState(e.target.value)}
            />
        </div>
        <div className="event-content">
            <textarea
                placeholder='크루에 대해 설명해주세요.'
                value={content}
                onChange={(e) => setContentState(e.target.value)}
            />
        </div>
        <div className="introduce">
            <h1>TIP 이렇게 소개해보세요</h1>
            <ul >
                <li>주로 어떤 운동을 하고 어디에서 활동하나요?</li>
                <li>어떤 사람들과 함께 하고 싶나요?</li>
                <li>모임에서 지켜야할 규칙이나 조건이 있나요?</li>
            </ul>
        </div>
        <button className="submit-button" onClick={handleSubmit}>모임 생성하기</button>
    </WriteEventStyle>;
}

const WriteEventStyle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;

    .back {
        width: 95%;
        margin: 12px;
        svg {
            font-size: 30px;
        }
    }
    .title {
        width: 90%;
        font-size : 20px;
    }

    .event-title,
    .event-content {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 95%;
        textarea {
            width: 90%;
            border: 1px solid rgba(0, 0, 0, 0.3);
            resize: none;
            border-radius: 12px;
            padding: 12px;
            font-family: 'NEXON Lv1 Gothic OTF', sans-serif;
            font-size : 16px;
        }
    }

    .event-content {
        textarea {
            min-height: 280px;
        }
    }

    .introduce{
        width: 90%;
        border : 1px solid rgba(0, 0, 0, 0.3);
        border-radius: 8px;
        font-size : 16px;
        background-color: aliceblue;
        h1 {
            padding : 40px 40px 40px 40px;
        }

        ul {
            list-style-type: disc; 
            margin-left: 20px;
            padding : 0 40px 40px 40px;
        }
    }

    .submit-button {
        width: 30%;
        padding : 8px;
        margin-bottom : 20px;
        background-color: #4ec94e;
        border: none;
        border-radius: 8px;
        font-weight: 550;
        font-size :14px;
        }
`;
export default WriteEvent;