import { styled } from 'styled-components';
import { IoMdSettings } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

function ProfileCard() {
    const navigate = useNavigate();

    return <ProfileCardStyle>
        <img className="profile-image" src={`/images/defaultImage.svg`} alt="프로필 이미지" />
        <div className="user-info">
            <span>닉네임 님 </span>
            <div className="setting-icon">
                <IoMdSettings
                    onClick={() => navigate(`/modify-info`)}
                />
                회원 정보
            </div>
        </div>
    </ProfileCardStyle>;
}

const ProfileCardStyle = styled.div`
    width: 80%;
    display: grid;
    grid-template-columns: 1fr 1fr ;
    border-radius: 8px;
    border : 2px solid;
    box-shadow: 0 3px 3px rgba(0,0,0,0.3);

    .profile-image {
        padding :20px;
        width: 60%;
        border-radius: 50%;
        object-fit: cover;
    }

    .user-info{
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap : 20px;
        font-size : 18px;
        font-weight: bold;

        .setting-icon{
            display: flex;
            gap : 4px;
            align-items: center;
            svg {
                font-size : 20px;
                cursor:pointer;
            }
        }
    }
`;

export default ProfileCard;