import { styled } from 'styled-components';

function SearchList() {
    const events = [
        { id: 0, title: '자전거 모임', location: '서울시 강서구', condition: '20대 성별무관', waitingMember: 3, maxMember: 8, slot: "축구", time: "오전", gender: "무관" },
        { id: 1, title: '등산 모임', location: '서울시 강남구', condition: '30대 성별무관', waitingMember: 3, maxMember: 8, slot: "축구", time: "오전", gender: "무관" },
        { id: 2, title: '축구 모임', location: '서울시 송파구', condition: '20대 성별무관', waitingMember: 3, maxMember: 8, slot: "축구", time: "오전", gender: "무관" },
        { id: 3, title: '배드민턴 모임', location: '서울시 마포구', condition: '30대 성별무관', waitingMember: 3, maxMember: 8, slot: "축구", time: "오전", gender: "무관" },
        { id: 4, title: '야구 모임', location: '서울시 강북구', condition: '50대 성별무관', waitingMember: 3, maxMember: 8, slot: "축구", time: "오전", gender: "무관" },
        { id: 4, title: '야구 모임', location: '서울시 강북구', condition: '50대 성별무관', waitingMember: 3, maxMember: 8, slot: "축구", time: "오전", gender: "무관" },
        { id: 4, title: '야구 모임', location: '서울시 강북구', condition: '50대 성별무관', waitingMember: 3, maxMember: 8, slot: "축구", time: "오전", gender: "무관" },
        { id: 4, title: '야구 모임', location: '서울시 강북구', condition: '50대 성별무관', waitingMember: 3, maxMember: 8, slot: "축구", time: "오전", gender: "무관" },
        { id: 4, title: '야구 모임', location: '서울시 강북구', condition: '50대 성별무관', waitingMember: 3, maxMember: 8, slot: "축구", time: "오전", gender: "무관" },
        { id: 4, title: '야구 모임', location: '서울시 강북구', condition: '50대 성별무관', waitingMember: 3, maxMember: 8, slot: "축구", time: "오전", gender: "무관" },
        { id: 4, title: '야구 모임', location: '서울시 강북구', condition: '50대 성별무관', waitingMember: 3, maxMember: 8, slot: "축구", time: "오전", gender: "무관" },
        { id: 4, title: '야구 모임', location: '서울시 강북구', condition: '50대 성별무관', waitingMember: 3, maxMember: 8, slot: "축구", time: "오전", gender: "무관" },
    ];

    return <SearchListStyle>
        <div className="event-lists">
            {events.map((event) => (
                <div key={event.id} className="event">
                    <div className="event-info">
                        <div className="event-title">{event.title}</div>
                        <div className="event-detail-info">
                            <span>{event.location}</span>
                            <span>{event.condition}</span>
                        </div>
                    </div>
                    <div className="event-member">
                        <span style={{ color: "gray" }}>{event.waitingMember}</span>
                        /
                        <span>{event.maxMember}</span>
                    </div>
                </div>
            )
            )}
        </div>
    </SearchListStyle>;
}

const SearchListStyle = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 12px;

    .event-lists {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 90%;
        gap: 8px;

        .event {
            width: 100%;
            border: 1px solid rgba(0,0,0,0.3);
            border-radius: 8px;
            background-color: #e1ebf4d6;
            display: flex;
            justify-content: space-between;
            cursor: pointer;

            &:hover {
                background-color: aliceblue;
            }

            .event-info {
                display: flex;
                flex-direction: column;
                gap : 10px;
                width: 70%;
                margin: 12px 12px 12px 12px;

                .event-title{
                    font-size: 14px;
                    font-weight: bold;
                }

                .event-detail-info{
                    display: flex;
                    gap:8px;
                    font-size: 10px;
                    color : #a0a0a0
                }
            }
            
            .event-member { 
                width: 25%;
                display: flex;
                justify-content: center;
                align-items: center;
                gap : 4px;
            }
        }
    }
`;

export default SearchList;