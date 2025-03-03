import { styled } from 'styled-components';
import ProfileCard from '../components/Mypage/ProfileCard';
import MyEvent from '../components/Mypage/MyEvent';
import LikeEvent from '../components/Mypage/LikeEvent';

function Mypage() {
    return <MypageStyle>
        <ProfileCard />
        <MyEvent />
        <LikeEvent />
    </MypageStyle>;
}

const MypageStyle = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin: 20px 0 0 0;
    gap: 12px;
`;

export default Mypage;