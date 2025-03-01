import { styled } from 'styled-components';
import { useState } from 'react';
import SearchBox from '../components/SearchEvent/SearchBox';
import SearchList from '../components/SearchEvent/SearchList';

function SearchEvent() {
    const [searchValue, setSearchValue] = useState("");

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    }

    return <SearchEventStyle>
        <SearchBox
            value={searchValue}
            onChange={handleSearchChange}
        />
        <SearchList />
    </SearchEventStyle>;
}

const SearchEventStyle = styled.div`
display: flex;
flex-direction: column;
gap : 12px;
`;

export default SearchEvent;