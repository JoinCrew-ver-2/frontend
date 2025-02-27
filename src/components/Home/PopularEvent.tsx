import React, { useState } from 'react';
import { styled } from 'styled-components';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function PopularEvent() {
    const events = [
        { id: 0, title: '자전거 모임', location: '서울시 강서구', likeCount: '3256', condition: '20대 성별무관' },
        { id: 1, title: '등산 모임', location: '서울시 강남구', likeCount: '2134', condition: '30대 성별무관' },
        { id: 2, title: '축구 모임', location: '서울시 송파구', likeCount: '4210', condition: '20대 성별무관' },
        { id: 3, title: '배드민턴 모임', location: '서울시 마포구', likeCount: '1234', condition: '30대 성별무관' },
        { id: 4, title: '야구 모임', location: '서울시 강북구', likeCount: '3005', condition: '50대 성별무관' },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex + 2 >= events.length) {
                return 0;
            } else {
                return prevIndex + 2;
            }
        });
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex - 2 < 0) {
                return events.length - 2;
            } else {
                return prevIndex - 2;
            }
        });
    };

    const visibleEvents = [
        events[currentIndex],
        events[(currentIndex + 1) % events.length]
    ];

    return (
        <PopularEventStyle>
            <div className="popular-title">
                <h1>요즘 핫한 모임</h1>
            </div>
            <div className="slider-container">
                <button className="nav-button prev" onClick={prevSlide}>
                    <ChevronLeft />
                </button>
                <button className="nav-button next" onClick={nextSlide}>
                    <ChevronRight />
                </button>

                <div className="popular-events">
                    {visibleEvents.map((event) => (
                        <div className="popular-event" key={event.id}>
                            <div className="event-title">{event.title}</div>
                            <div className="event-location">{event.location}</div>
                            <div className="event-info">
                                <div className="likeCount">❤️ {event.likeCount}</div>
                                <div className="event-condition">{event.condition}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="pagination">
                    {Array.from({ length: Math.ceil(events.length / 2) }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index * 2)}
                            className={`dot ${index === Math.floor(currentIndex / 2) ? 'active' : ''}`}
                        />
                    ))}
                </div>
            </div>
        </PopularEventStyle>
    );
}

const PopularEventStyle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;

    .popular-title {
        width: 90%;
        text-align: left;

        h1 {
            font-size: 20px;
            font-weight: bold;
        }
    }

    .slider-container {
        position: relative;
        width: 100%;
        padding: 0 20px;
    }

    .nav-button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: #fff;
        border: none;
        border-radius: 50%;
        padding: 8px;
        cursor: pointer;
        z-index: 1;

        &.prev {
            left: 10px;
        }

        &.next {
            right: 10px;
        }

        &:hover {
            color: blue;
        }
    }

    .popular-events {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
        margin: 0 30px;
        transition: opacity 0.3s ease; 
    }

    .popular-event {
        border: 1px solid rgba(0, 0, 0, 0.3);
        border-radius: 8px;
        padding: 12px;
        font-size: 12px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        transition: transform 0.3s ease;
        z-index:0;

        &:hover {
            transform: scale(1.02);
            z-index: 2;
        }

        .event-title {
            font-weight: bold;
            font-size: 14px;
        }

        .event-location {
            color: gray;
            font-size: 12px;
        }

        .event-info {
            width: 100%;
            display: flex;
            justify-content: space-between;
            font-size: 10px;
            align-items: flex-end;

            .likeCount {
                color: #ff4444;
            }

            .event-condition {
                color: gray;
            }
        }
    }

    .pagination {
        display: flex;
        justify-content: center;
        gap: 8px;
        margin-top: 16px;

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #ddd;
            border: none;
            padding: 0;
            cursor: pointer;
            transition: all 0.3s ease;

            &.active {
                background: #2196f3;
                width: 16px;
                border-radius: 4px;
            }
        }
    }
`;

export default PopularEvent;