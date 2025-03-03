import { styled } from 'styled-components';

interface MultipleSelectProps {
    options: {
        id: number;
        name: string;
    }[];
    onChange: (selected: number[]) => void;
    selected: number[];
}

function MultipleSelect({ options, onChange, selected }: MultipleSelectProps) {
    const handleOptionClick = (id: number) => {
        if (selected.includes(id)) {
            onChange(selected.filter((optionId) => optionId !== id));
        } else {
            onChange([...selected, id]);
        }
    };

    return <MultipleSelectStyle>
        {options.map((option) => (
            <span
                key={option.id}
                className={`option ${selected.includes(option.id) ? 'selected' : ''}`}
                onClick={() => handleOptionClick(option.id)}
            >
                {option.name}
            </span>
        ))}
    </MultipleSelectStyle>;
}

const MultipleSelectStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    
    .option {
        min-width: 60px;
        border: 1px solid rgba(0,0,0,0.3);
        padding : 8px;
        border-radius: 12px;
        font-size : 12px;
        background-color: white;
        color : black;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .option.selected {
        border-color : blue;
        color : blue;
        background-color: aliceblue;
    }
`;

export default MultipleSelect;