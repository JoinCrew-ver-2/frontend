import styled from "styled-components";
import { area } from "../area";

type AreaSelectProps = {
  selectedArea: string;
  selectedSubArea: string;
  onChange: (area: string, subArea: string) => void;
};

function AreaSelect({ selectedArea, selectedSubArea, onChange }:AreaSelectProps) {
  // 선택된 지역에 따라 하위 지역 목록을 가져옴
  const subAreas =
    area.find((area) => area.name === selectedArea)?.subArea || [];

  // 이벤트 핸들러
  const handleAreaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newArea = e.target.value;
    onChange(newArea, "");
  };

  const handleSubAreaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSubArea = e.target.value;
    onChange(selectedArea, newSubArea);
  };

  return (
    <AreaSelectStyle>
      <select value={selectedArea} onChange={handleAreaChange}>
        <option value="">지역을 선택해주세요</option>
        {area.map((area) => (
          <option key={area.name} value={area.name}>
            {area.name}
          </option>
        ))}
      </select>
      <select value={selectedSubArea} onChange={handleSubAreaChange}>
        <option value="">시,군,구를 선택해주세요</option>
        {subAreas.map((subArea) => (
          <option key={subArea} value={subArea}>
            {subArea}
          </option>
        ))}
      </select>
    </AreaSelectStyle>
  );
}

const AreaSelectStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;

  select {
    flex: 1;
    height: 2.5rem;
    padding: 0.5rem;
    border-radius: 10px;
    border: 1px solid #bdbdbd;
    outline: none;
  }
`;
export default AreaSelect;
