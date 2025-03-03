import { styled } from 'styled-components';
import BasicInfo from '../components/ModifyInfo/BasicInfo';

function ModifyInfo() {
    return <ModifyInfoStyle>
        <BasicInfo />
        <div className="member-setting">
            <div className="reset-password">비밀번호 변경</div>
            <div className="withdraw">회원 탈퇴</div>
        </div>
    </ModifyInfoStyle>;
}

const ModifyInfoStyle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: 100vh; 

    .member-setting{
        display: flex;
        flex-direction: column;
        margin-top: auto;
        
        .reset-password,
        .withdraw {
            cursor: pointer;
            border-top : 1px solid black;
            padding : 20px;
            display: flex;
            align-items: center;
            color : blue;
            font-size : 14px;
        }
    }
`;

export default ModifyInfo;