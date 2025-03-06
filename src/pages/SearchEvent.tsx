import { styled } from 'styled-components';
import { useMemo, useState } from 'react';
import SearchBox from '../components/SearchEvent/SearchBox';
import SearchList from '../components/SearchEvent/SearchList';
import { EventDetailInfo } from '../model/types';
import { area } from '../area';

const events: EventDetailInfo[] = [
    { id: 0, title: '자전거 모임', location: '서울특별시 강서구', condition: '20대', waitingMember: 3, maxMember: 8, slot: "축구", time: "오전", gender: "남성", },
    { id: 1, title: '농구 모임', location: '인천광역시', condition: '30대', waitingMember: 3, maxMember: 8, slot: "농구", time: "오후", gender: "여성", },
    { id: 2, title: '테니스 모임', location: '경기도', condition: '20대', waitingMember: 3, maxMember: 8, slot: "테니스", time: "저녁", gender: "혼성", },
    { id: 3, title: '러닝 모임', location: '부산광역시', condition: '30대', waitingMember: 3, maxMember: 8, slot: "러닝", time: "오전", gender: "남성", },
    { id: 4, title: '헬스 모임', location: '경상북도', condition: '50대', waitingMember: 3, maxMember: 8, slot: "헬스", time: "오전", gender: "여성", },
    { id: 5, title: '수영 모임', location: '광주광역시', condition: '50대', waitingMember: 3, maxMember: 8, slot: "수영", time: "오전", gender: "혼성", },
    { id: 6, title: '요가 모임', location: '울산광역시', condition: '50대', waitingMember: 3, maxMember: 8, slot: "요가", time: "오전", gender: "남성", },
    { id: 7, title: '배드민턴 모임', location: '대전광역시', condition: '50대', waitingMember: 3, maxMember: 8, slot: "기타", time: "오전", gender: "남성", },
    { id: 8, title: '탁구 모임', location: '대구광역시', condition: '50대', waitingMember: 3, maxMember: 8, slot: "기타", time: "오전", gender: "남성", },
    { id: 9, title: '필라테스 모임', location: '충청남도', condition: '50대', waitingMember: 3, maxMember: 8, slot: "기타", time: "오전", gender: "여성", },
    { id: 10, title: '야구 모임', location: '강원도', condition: '50대', waitingMember: 3, maxMember: 8, slot: "기타", time: "오전", gender: "남성", },
    { id: 11, title: '볼링모임', location: '제주도', condition: '50대', waitingMember: 3, maxMember: 8, slot: "기타", time: "오전", gender: "혼성", },
];

function SearchEvent() {
    const [searchValue, setSearchValue] = useState("");
    const [filters, setFilters] = useState({
        sport: "종목",
        gender: "성별",
        location: "지역",
        subLocation: "상세지역",
    });

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    }

    const filteredEvents = useMemo(() => {
        return events.filter(event => {
            const matchesSearch = event.title.toLowerCase().includes(searchValue.toLowerCase());

            const matchesSport = filters.sport === "종목" || event.slot === filters.sport;
            const matchesMainLocation = filters.location === "지역" || event.location.includes(filters.location);
            const matchesSubLocation = filters.subLocation === "상세지역" || event.location.includes(filters.subLocation);
            const matchesGender = filters.gender === "성별" || event.gender === filters.gender;

            return matchesSearch && matchesSport && matchesMainLocation && matchesSubLocation && matchesGender;
        });
    }, [searchValue, filters, events]);

    // 필터 상태 업데이트 함수
    const updateFilters = (category: keyof typeof filters, value: string) => {
        setFilters(prev => ({
            ...prev,
            [category]: value
        }));
    };

    const resetAllFilters = () => {
        setFilters({
            sport: "종목",
            gender: "성별",
            location: "지역",
            subLocation: "상세지역",
        });
        setSearchValue("");
    };

    return <SearchEventStyle>
        <SearchBox
            value={searchValue}
            onChange={handleSearchChange}
            onFilterChange={updateFilters}
            onResetFilters={resetAllFilters}
            currentFilters={filters}
            areaData={area}
        />
        <SearchList events={filteredEvents} />
    </SearchEventStyle>;
}

const SearchEventStyle = styled.div`
display: flex;
flex-direction: column;
gap : 12px;
`;

export default SearchEvent;