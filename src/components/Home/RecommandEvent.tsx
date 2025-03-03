import { styled } from 'styled-components';
import { FaAngleRight } from "react-icons/fa";

function RecommandEvent() {
    const events = [
        { title: "같이 러닝하실 분", match: "ai 매치 90%", location: "서울시 강서구" },
        { title: "같이 운동하실 분", match: "ai 매치 85%", location: "서울시 강남구" },
        { title: "같이 요가하실 분", match: "ai 매치 92%", location: "서울시 마포구" },
        { title: "같이 클라이밍하실 분", match: "ai 매치 88%", location: "서울시 서초구" }
    ];

    return (
        <RecommandEventStyle>
            <div className="recommand-title">
                <h1>홍길동님을 위한 추천 모임</h1>
                <span>더보기<FaAngleRight /></span>
            </div>
            <div className="recommand-event">
                {events.map((event, index) => (
                    <div key={index} className="event">
                        <div className="event-title">
                            <span>{event.title}</span>
                        </div>
                        <div className="event-info">
                            <span className="ai-match">{event.match}</span>
                            <span className="location">{event.location}</span>
                        </div>
                    </div>
                ))}
            </div>
        </RecommandEventStyle>
    );
}

const RecommandEventStyle = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap : 12px;

    .recommand-title{
        width: 90%;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        h1 {
            margin: 0%;
            font-size: 20px;
        }
        span{
            font-size: 10px;
            color : gray;
        }
    }
    .recommand-event{
        width: 90%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 8px;

        .event {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border: 1px solid rgba(0, 0, 0, 0.3);
            border-radius: 8px;
            font-size : 12px;
            width: 100%;
            height: 80px;

            .event-title {
                width: 90%;
                font-size : 12px;
                font-weight: bold;
                padding : 12px;
            }
            .event-info {
                padding : 12px;
                width : 90%;
                display: flex;
                justify-content: space-between;

                .ai-match {
                    color : blue;
                }
                .location{
                    color : gray;
                }
            }
        }
    }
`;

export default RecommandEvent;