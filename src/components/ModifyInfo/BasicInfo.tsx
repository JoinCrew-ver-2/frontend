import { styled } from 'styled-components';
import { IoMdSettings } from "react-icons/io";

function BasicInfo() {
    const dummyData = {
        email: "test@test.com",
        nickname: "테스트",
        gender: "남성",
        age: "20대",
        location: "서울",
        moods: [
            { id: 1, name: "축구" },
            { id: 2, name: "테니스" },
        ],
        mbti: "ISTP"
    }
    return <BasicInfoStyle>
        <img src={`/images/defaultImage.svg`} />
        <div className="member-info">
            <h1>기본 정보<IoMdSettings /></h1>
            <dl>
                <dt>아이디</dt><dd>{dummyData.email}</dd>
                <dt>닉네임</dt><dd>{dummyData.nickname}</dd>
                <dt>성별</dt><dd>{dummyData.gender}</dd>
                <dt>연령</dt><dd>{dummyData.age}</dd>
                <dt>지역</dt><dd>{dummyData.location}</dd>
            </dl>
        </div>
        <div className="info-detail">
            <h1>상세 정보</h1>
            <dl>
                <dt>관심 운동 종목</dt>
                <dd className="sports">{dummyData.moods.map((data) => (
                    <div className="detail">
                        {data.name}
                    </div>
                ))}</dd>
                <dt>MBTI</dt>
                <dd>
                    <div className="detail">{dummyData.mbti}</div>
                </dd>
            </dl>
        </div>
    </BasicInfoStyle>;
}

const BasicInfoStyle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    img {
        width: 30%;
        object-fit: cover;
        border-radius: 50%;
    }

    .member-info,
    .info-detail {
        width: 80%;
        display: flex;
        flex-direction: column;
        gap : 8px;

        h1 {
            font-size: 20px;
            padding : 0 0 8px 0;
            border-bottom: 2px solid;
            display: flex;
            flex-direction: row;
            gap: 8px;
            align-items: center;

            svg {
                font-size :24px;
                cursor: pointer;
                transition: transform 1s ease-in-out;
            }   

            &:hover svg {
                transform: rotate(180deg);
            }
        }

        dl {
            display: grid;
            width: 100%;
            grid-template-columns: 35% auto; 
            grid-template-rows :auto ;
            font-size : 16px;
        }

        dd {
            border-bottom: 1px solid;
            padding: 16px;
            
        }

        dt {
            display: flex;
            align-items: center; 
            justify-content: flex-start;
            border-bottom: 1px solid;
            padding: 16px; 
        }

        dl > dt:last-of-type,
        dl > dd:last-of-type {
            border-bottom: none;
        }

        .sports {
            display: flex;
            flex-direction: row;
            gap : 12px;

        }
        .detail {
            display: flex;
            justify-content: center;
            align-items: center;
            width : 60px;
            padding : 8px;
            border: 1px solid rgba(0,0,0,0.3);
            border-radius: 20px;
        }
    }
`;

export default BasicInfo;