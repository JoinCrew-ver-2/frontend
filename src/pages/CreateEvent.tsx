import { styled } from 'styled-components';
import MultipleSelect from '../components/CreateEvent/MultipleSelect';
import { useEffect, useState } from 'react';
import { useCreateEventStore } from '../store/useCreateEventStore';
import { useNavigate, useNavigationType } from 'react-router-dom';
import EventDropdown from '../components/CreateEvent/EventDropdown';
import { ageOptions, genderOptions, levelOptions, locationOptions, memberCountOptions, moodOptions, sportOptions, timeOptions } from '../model/eventcategory';

function CreateEvent() {
    const navigate = useNavigate();
    const [resetKey, setResetKey] = useState(0);
    const navigationType = useNavigationType();
    const [selectedMoods, setSelectedMoods] = useState<number[]>([]);
    const [selectedLevel, setSelectedLevel] = useState<number[]>([]);

    const handleMoodChange = (selected: number[]) => {
        setSelectedMoods(selected);
        setMoods(selected);
    };
    const handlelevelChange = (selected: number[]) => {
        setSelectedLevel(selected);
        setLevels(selected);
    };

    useEffect(() => {
        if (navigationType === 'POP' || navigationType === 'PUSH') {
            resetForm();
            setSelectedMoods([]);
            setSelectedLevel([]);
        }
    }, [navigationType]);

    const {
        setSport,
        setTime,
        setLocation,
        setGender,
        setAge,
        setMemberCount,
        setMoods,
        setLevels,
        isFormValid,
        resetForm,
        isFirstStepValid,
        isSecondStepValid
    } = useCreateEventStore();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const currentFormData = useCreateEventStore.getState().formData;

        if (isFormValid()) {
            navigate('/event/write', { state: { formData: currentFormData } });
        } else {
            if (!isFirstStepValid()) {
                alert('기본 정보를 모두 입력해주세요.');
            } else if (!isSecondStepValid()) {
                alert('모임 목적과 숙련도를 선택해주세요.');
            }
        }
    };

    const handleReset = () => {
        resetForm();
        setResetKey(prev => prev + 1);
    };

    return <CreateEventStyle key={resetKey}>
        <div className="crew">
            <h1>어떤 크루를 만들까요?</h1>
            <EventDropdown
                options={sportOptions}
                onChange={setSport}
                placeholder='운동종목을 선택해주세요.'
            />
            <EventDropdown
                options={timeOptions}
                onChange={setTime}
                placeholder='원하는 시간대를 선택해주세요.'
            />
            <EventDropdown
                options={locationOptions}
                onChange={setLocation}
                placeholder='원하는 지역을 선택해주세요.'
            />
            <EventDropdown
                options={genderOptions}
                onChange={setGender}
                placeholder=' 원하는 성별을 선택해주세요.'
            />
            <EventDropdown
                options={ageOptions}
                onChange={setAge}
                placeholder=' 원하는 연령대를 선택해주세요.'
            />
            <EventDropdown
                options={memberCountOptions}
                onChange={(value) => setMemberCount(Number(value))}
                placeholder="원하는 인원을 선택해주세요."
            />
        </div>
        <div className="crew-member">
            <h1>어떻게 운영하실 건까요?</h1>
            <a>모임 목적</a>
            <MultipleSelect options={moodOptions} onChange={handleMoodChange} selected={selectedMoods} />
            <a>숙련도</a>
            <MultipleSelect options={levelOptions} onChange={handlelevelChange} selected={selectedLevel} />
        </div>
        <div className="buttons">
            <button className="refresh-button" onClick={handleReset}>
                초기화
            </button>
            <button className="next-button" onClick={handleSubmit}>
                다음
            </button>
        </div>
    </CreateEventStyle>;
}

const CreateEventStyle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap : 28px;

    .crew,
    .crew-member {
        width: 90%;
        display: flex;
        flex-direction: column;
        gap: 12px;

        h1 {
            font-size: 22px;
        }
    }

    .buttons {
        width: 100%;
        display: flex;
        justify-content: center;
        gap : 5%;
        margin-bottom: 20px;
        .refresh-button,
        .next-button {
            width: 25%;
            padding : 12px;
            border : none;
            display: flex;
            justify-content: center;
            font-weight: bold;
            border-radius: 12px;
            cursor: pointer;
        }

        .refresh-button {
            background-color: lightgray;
        }

        .next-button{
            background-color: #4ec94e;
        }
    }

`;

export default CreateEvent;