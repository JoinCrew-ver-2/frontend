import { styled } from 'styled-components';
import { FaPencil } from "react-icons/fa6";
import { SiSpringCreators } from "react-icons/si";
import { useNavigate } from 'react-router-dom';

function MyEvent() {
    const dummyData = [
        { id: 0, title: "테니스 크루원 모집합니다!", maxMember: 8, currentMember: 3 },
        { id: 1, title: "런닝 크루원 모집합니다!", maxMember: 9, currentMember: 6 },
        { id: 2, title: "헬스 크루원 모집합니다!", maxMember: 20, currentMember: 12 },
        { id: 3, title: "test4", maxMember: 8, currentMember: 3 },
        { id: 4, title: "test5", maxMember: 8, currentMember: 3 },
        { id: 5, title: "test6", maxMember: 8, currentMember: 3 },
        { id: 6, title: "test7", maxMember: 8, currentMember: 3 },
    ]
    const navigate = useNavigate();

    return <MyEventStyle>
        <h1>내가 작성한 모임</h1>
        <div className="event-container">
            <div className="spring-icons">
                <SiSpringCreators />
                <SiSpringCreators />
                <SiSpringCreators />
            </div>
            <div className="my-write-event">
                {dummyData.map((data) =>
                    <div className="event"
                        key={data.id}
                        onClick={() => navigate(`/event/${data.id}`)}
                    >
                        <div className="event-title">{data.title}</div>
                        <div className="event-member">
                            {data.currentMember} / {data.maxMember}
                        </div>
                        <div className="icon">
                            <FaPencil />
                        </div>
                    </div>
                )}
            </div>
        </div>
    </MyEventStyle>;
}

const MyEventStyle = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    gap :20px;

    h1 {
        font-size : 20px;
    }

    .event-container {
        display: flex;
        position: relative;
    }

    .spring-icons {
        display: flex;
        flex-direction: column;
        position: absolute;
        left:-21px;
        top: 50%;
        gap : 32px;
        transform: translateY(-50%);
        z-index: 1;
        color: #000000;
        
        svg {
            font-size : 34px;
            transform: rotate(145deg);
        }
    }

    .my-write-event {
        width : 100%;
        background-color: white;
        max-height : 200px;
        min-height: 200px;
        border : 6px solid #3AE159;
        border-radius : 12px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap : 12px;
        overflow-y : auto;
        padding: 20px 0;
        scrollbar-width: thin;

        .event {
            width : 70%;
            border-bottom: 2px solid;
            padding: 8px 8px 6px 12px;
            font-size : 12px;
            font-weight : bold;
            display: grid;
            grid-template-columns: 70% 25% 5%;
            cursor: pointer;
            svg {
                font-size : 16px;
            }
        }
    }
`;

export default MyEvent;