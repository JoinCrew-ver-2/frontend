import { styled } from 'styled-components';
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { useEffect, useRef, useState } from 'react';

function EventDetail() {
    const dummyData =
    {
        id: 0,
        title: '축구 모임',
        location: '서울시 강서구',
        condition: '20대 성별무관',
        waitingMember: 3,
        maxMember: 8,
        slot: "축구",
        time: "오전",
        gender: "무관",
        atmosphere: ["친목도모", "즐기면서"],
        level: ["초보", "중수"],
        content: "축구 ㄱ? 축구 ㄱ? 축구 ㄱ?축구 ㄱ? 축구 ㄱ? 축구 ㄱ?축구 ㄱ? 축구 ㄱ? 축구 ㄱ?축구 ㄱ? 축구 ㄱ? 축구 ㄱ?축구 ㄱ? 축구 ㄱ? 축구 ㄱ?축구 ㄱ? 축구 ㄱ? 축구 ㄱ?축구 ㄱ? 축구 ㄱ? 축구 ㄱ?축구 ㄱ? 축구 ㄱ? 축구 ㄱ?축구 ㄱ? 축구 ㄱ? 축구 ㄱ?축구 ㄱ? 축구 ㄱ? 축구 ㄱ?축구 ㄱ? 축구 ㄱ? 축구 ㄱ?축구 ㄱ? 축구 ㄱ? 축구 ㄱㅇㅇ축구 ㄱ?축구 ㄱ? 축구 ㄱ? 축구 ㄱ?축구 ㄱ? 축구 ㄱ? 축구 ㄱ?축구 ㄱ? 축구 ㄱ? 축구 ㄱ?축구 ㄱ? 축구 ㄱ? 축구 ㄱ?축구 ㄱ? 축구 ㄱ? 축구 ㄱ?축구 ㄱ? 축구 ㄱ? 축구 ㄱ?축구 ㄱ? 축구 ㄱ? 축구 ㄱ?축구 ㄱ? 축구 ㄱ? 축구 ㄱ?축구 ㄱ? 축구 ㄱ? 축구 ㄱㅇㅇ축구 ㄱ?축구 ㄱ? 축구 ㄱ? 축구 ㄱ?축구 ㄱ? 축구 ㄱ? 축구 ㄱ?축구 ㄱ? 축구 ㄱ? 축구 ㄱ?축구 ㄱ? 축구 ㄱ? 축구 ㄱ?축구 ㄱ? 축구 ㄱ? 축구 ㄱ?축구 ㄱ? 축구 ㄱ? 축구 ㄱ?축구 ㄱ? 축구 ㄱ? 축구 ㄱ?축구 ㄱ? 축구 ㄱ? 축구 ㄱ?축구 ㄱ? 축구 ㄱ? 축구 ㄱㅇㅇ",
        likeNumber: 3256,
    }

    const dummyUser = [
        { id: 0, nickname: "test1", profile: "defaultImage.svg" },
        { id: 1, nickname: "test2", profile: "defaultImage.svg" },
        { id: 2, nickname: "test3", profile: "defaultImage.svg" },
    ]

    const [activeDropdown, setActiveDropdown] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const toggleDropdown = () => {
        setActiveDropdown(!activeDropdown);
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setActiveDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleEdit = () => {
        console.log("수정하기 클릭됨");
        setActiveDropdown(false);
    };

    const handleDelete = () => {
        console.log("삭제하기 클릭됨");
        setActiveDropdown(false);
    };

    return <EventDetailStyle>
        <div className="event">
            <div className="event-title">
                <h1>{dummyData.title}</h1>
                <div className="dropdown-container" ref={dropdownRef}>
                    <div className="dropdown-icon" onClick={toggleDropdown}>
                        <BsThreeDotsVertical />
                    </div>
                    {activeDropdown && (
                        <div className="dropdown-menu">
                            <div className="dropdown-item" onClick={handleEdit}>수정하기</div>
                            <div className="divider"></div>
                            <div className="dropdown-item" onClick={handleDelete}>삭제하기</div>
                        </div>
                    )}
                </div>
            </div>
            <div className="event-creator">닉네임 들어갈 자리</div>
            <div className="divider"></div>
            <div className="event-info">
                <dl>
                    <dt>운동 종류</dt> <dd>{dummyData.slot}</dd>
                    <dt>운동 목적</dt> <dd>{dummyData.atmosphere.join(" | ")}</dd>
                    <dt>시간</dt> <dd>{dummyData.time}</dd>
                    <dt>지역</dt> <dd>{dummyData.location}</dd>
                    <dt>성별</dt> <dd>{dummyData.gender}</dd>
                    <dt>나이</dt> <dd>{dummyData.condition}</dd>
                    <dt>모집 인원</dt> <dd>{dummyData.maxMember}명</dd>
                    <dt>난이도</dt> <dd>{dummyData.level.join(" | ")}</dd>
                </dl>
            </div>
            <div className="divider"></div>
            <div className="event-content">{dummyData.content}</div>
        </div>
        <div className="join-list">
            <span>
                참여중인 크루원
                <span className="waiting">{dummyData.waitingMember}</span> /
                <span className="max">{dummyData.maxMember}</span>
            </span>
            <div className="users-list">
                {dummyUser.map((user) => (
                    <div className="user-list">
                        <img className="profile-image" src={`/images/${user.profile}`} alt="프로필 이미지" />
                        <div className="profile-nickname">{user.nickname}</div>
                        <button className='accept-button'>수락</button>
                        <button className='reject-button'>거절</button>
                    </div>
                ))}
            </div>
        </div>
        <div className="request-form">
            <div className="like">
                <FaHeart />
                {dummyData.likeNumber}</div>
            <button className="request-button">지원하기</button>
        </div>
    </EventDetailStyle>;
}

const EventDetailStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width : 100%;
    gap: 16px;

    .divider {
        font-weight : bold;
        height: 1px;
        margin: 0;
        background-color: rgba(0,0,0,1);
    }

    .event {
        display: flex;
        flex-direction: column;
        gap : 16px;
        width: 80%;

        .event-title {
            display: flex;
            justify-content: space-between;
            font-size : 24px;
            align-items: center;
            position: relative;

            .dropdown-container {
                position : relative;
            }

            .dropdown-icon {
                cursor : pointer;
                padding: 5px;
            }

            .dropdown-menu {
                position: absolute;
                right: -60%;
                top: 90%;
                background-color: white;
                border: 1px solid rgba(0,0,0,0.3);
                border-radius: 4px;
                z-index: 10;
                width : 80px;
                box-shadow : 0 2px 5px rgba(0,0,0,0.2);
            }

            .dropdown-item{
                padding : 8px 12px;
                cursor : pointer;
                font-size : 14px;
                transition: background-color 0.2s;
                display: flex;
                justify-content: center;
                &:hover {
                    background-color : #f5f5f5
                }
            }
        }

        .event-creator {
            font-size : 12px;
            color : gray
        }

        .event-info dl {
            display: grid;
            grid-template-columns: 30% auto;  
            gap: 12px;
            font-size : 16px;
        }

        .event-info dt {
            font-weight : bold;
        }

    }

    .join-list {
        width: 80%;
        border: 1px solid rgba(0,0,0,0.3);
        padding : 16px;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        gap : 4px;

        span {
            font-size: 18px;
            font-weight: bold;
        }

        .waiting {
            color: lightgray; 
            font-weight: normal;
            margin-left: 8px;
        }

        .max {
            font-weight: normal;
            margin-left: 4px;
        }

        .users-list{
            width: 100%;
            display: flex;
            flex-direction: column;
            gap : 8px;

            .user-list {
                display: grid;
                grid-template-columns: 1fr 2fr 1fr 1fr;
                place-items: center;
                padding : 4px;

                .profile-image  {
                    width: 45px;
                    height: 45px;
                    border-radius: 50%;
                    object-fit: cover;
                }

                .profile-nickname {
                    justify-self : start;
                    font-weight: bold;
                }

                .accept-button,
                .reject-button {
                    border: none;
                    background-color: #4ec94e;
                    color: white;
                    width: 90%;
                    height:60%;
                    border-radius: 8px;
                }
                .reject-button {
                    background-color: red;
                }       
            }
        }
    }

    .request-form {
        width: 80%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        place-items: center;
        margin-bottom: 20px;

        .like {
            font-size : 24px;
            font-weight: bold;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: flex-start;
            gap : 4px;

            svg {
                color : red;
            }
        }

        .request-button {
            width : 80%;
            height : 40px;
            border : none;
            background-color : #4ec94e;
            border-radius: 12px;
            font-size : 16px;
            font-weight: bold;
        }
    }
`;

export default EventDetail;