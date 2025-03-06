import React, { useEffect, useState } from 'react';
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
interface Area {
    name: string;
    subArea: string[];
}
interface SearchBoxProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onFilterChange: (category: string, value: string) => void;
    onResetFilters: () => void;
    currentFilters: {
        sport: string;
        location: string;
        subLocation: string;
        gender: string;
    };
    areaData: Area[];
}


function SearchBox({
    value,
    onChange,
    onFilterChange,
    onResetFilters,
    currentFilters,
    areaData
}: SearchBoxProps) {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [subLocations, setSubLocations] = useState<string[]>([]);

    const filterOptions: filterProps = {
        sport: ["축구", "농구", "러닝", "헬스", "테니스", "수영", "요가", "기타"],
        gender: ["남성", "여성", "혼성"],
        location: areaData.map(area => area.name),
        subLocation: subLocations,
    };

    useEffect(() => {
        // 선택된 지역에 따라 하위 지역 업데이트
        const selectedArea = areaData.find(area => area.name === currentFilters.location);
        setSubLocations(selectedArea ? selectedArea.subArea : []);
    }, [currentFilters.location, areaData]);

    const toggleDropdown = (dropdownName: string) => {
        setActiveDropdown(prev => prev === dropdownName ? null : dropdownName);
    };

    const selectFilterOption = (category: string, value: string) => {
        onFilterChange(category, value);

        // 지역 선택 시 하위 지역 초기화
        if (category === 'location') {
            onFilterChange('subLocation', '상세지역');
        }

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
                <button className="refresh-button" onClick={onResetFilters}>
                    <RiResetRightFill />
                </button>

                {Object.keys(filterOptions).map((category) => (
                    <div className="dropdown-container" key={category}>
                        <button
                            className={`choice-button ${activeDropdown === category ? 'active' : ''}`}
                            onClick={() => toggleDropdown(category)}
                        >
                            {currentFilters[category]}
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
            width: 10%;
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
            width: 20%;
        }

        .choice-button {
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 100%;
            border: 1px solid rgba(0, 0, 0, 0.3);
            border-radius: 12px;
            font-size: 11px;
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
            scrollbar-width: none;
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