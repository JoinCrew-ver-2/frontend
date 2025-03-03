import React, { useState } from 'react';
import { styled } from 'styled-components';
import { FaSearch } from "react-icons/fa";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import { RiResetRightFill } from "react-icons/ri";

interface filterProps {
    sport: string[];
    location: string[];
    gender: string[];
    level: string[];
}

function SearchBox({ value, onChange }) {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [filters, setFilters] = useState({
        sport: "종목",
        location: "지역",
        gender: "성별",
        level: "수준"
    });

    const filterOptions: filterProps = {
        sport: ["축구", "농구", "러닝", "헬스", "테니스", "수영", "요가", "기타"],
        location: ["서울", "경기", "인천", "부산", "대구", "광주", "대전", "울산", "세종", "강원"],
        gender: ["남성", "여성", "혼성"],
        level: ["왕초보", "초보", "중수", "고수", "전문가"]
    };

    const toggleDropdown = (dropdownName) => {
        if (activeDropdown === dropdownName) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(dropdownName);
        }
    };

    const selectFilterOption = (category, value) => {
        setFilters(prev => ({
            ...prev,
            [category]: value
        }));
        setActiveDropdown(null);
    };

    const resetAllFilters = () => {
        setFilters({
            sport: "종목",
            location: "지역",
            gender: "성별",
            level: "수준"
        });
        setActiveDropdown(null);
    };

    return (
        <SearchBoxStyle>
            <div className="search-bar">
                <input
                    type="search"
                    placeholder="검색어를 입력하세요"
                    value={value}
                    onChange={onChange}
                />
                <FaSearch className="search-icon" />
            </div>
            <div className="search-button">
                <button className="refresh-button" onClick={resetAllFilters}>
                    <RiResetRightFill />
                </button>

                {Object.keys(filters).map((category) => (
                    <div className="dropdown-container" key={category}>
                        <button
                            className={`choice-button ${activeDropdown === category ? 'active' : ''}`}
                            onClick={() => toggleDropdown(category)}
                        >
                            {filters[category]}
                            {activeDropdown === category ? <GoTriangleUp /> : <GoTriangleDown />}
                        </button>

                        {activeDropdown === category && (
                            <div className="dropdown-menu">
                                {filterOptions[category].map((option, index) => (
                                    <div
                                        key={index}
                                        className="dropdown-item"
                                        onClick={() => selectFilterOption(category, option)}
                                    >
                                        {option}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </SearchBoxStyle>
    );
}

const SearchBoxStyle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    
    .search-bar {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        input {
            font-size: 16px;
            width: 90%;
            height: 40px;
            border: 1px solid rgba(0, 0, 0, 0.3);
            border-radius: 8px;
            padding-left: 8px;

            &::-webkit-search-cancel-button {
                display: none;
            }
        }
        
        .search-icon {
            position: absolute;
            right: 8%;
            font-size: 18px;
            color: rgba(0, 0, 0, 0.5);
            cursor: pointer;
        }
    }

    .search-button {
        display: flex;
        width: 90%;
        justify-content: space-between;
        position: relative;

        .refresh-button {
            width: 15%;
            border: 1px solid rgba(0, 0, 0, 0.3);
            border-radius: 12px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 12px;
            cursor: pointer;
            background-color: white;

            svg {
                font-size: 20px;
                transition: transform 0.5s ease-in-out;
            }

            &:hover svg {
                transform: rotate(360deg);
            }
        }

        .dropdown-container {
            position: relative;
            width: 18%;
        }

        .choice-button {
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 100%;
            border: 1px solid rgba(0, 0, 0, 0.3);
            border-radius: 12px;
            font-size: 12px;
            background-color: white;
            cursor: pointer;
            padding: 8px 0;
            transition: all 0.2s ease;
            font-weight: bold;

            &.active {
                border-color: #2196f3;
                color: #2196f3;
            }

            svg {
                font-size: 16px;
            }
        }

        .dropdown-menu {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background-color: white;
            border: 1px solid rgba(0, 0, 0, 0.2);
            border-radius: 8px;
            margin-top: 4px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            z-index: 10;
            max-height: 200px;
            overflow-y: auto;
        }

        .dropdown-item {
            padding: 8px 12px;
            font-size: 12px;
            cursor: pointer;
            
            &:hover {
                background-color: #f5f5f5;
            }
            
            &:first-child {
                border-radius: 8px 8px 0 0;
            }
            
            &:last-child {
                border-radius: 0 0 8px 8px;
            }
        }
    }
`;

export default SearchBox;