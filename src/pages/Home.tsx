import { styled } from 'styled-components';
import ImageSlider from '../components/Home/ImageSlider';
import SelectSports from '../components/Home/SelectSports';
import RecommandEvent from '../components/Home/RecommandEvent';
import PopularEvent from '../components/Home/PopularEvent';

function Home() {
    return <HomeStyle>
        <ImageSlider />
        <SelectSports />
        <RecommandEvent />
        <PopularEvent />
    </HomeStyle>;
}

const HomeStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

export default Home;