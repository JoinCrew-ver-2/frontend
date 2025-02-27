import { styled } from 'styled-components';
import { PiSoccerBallFill, PiBasketball, PiBarbellFill } from "react-icons/pi";
import { RiRunLine } from "react-icons/ri";
import { MdSportsTennis, MdGroups } from "react-icons/md";
import { FaSwimmer } from "react-icons/fa";
import { GrYoga } from "react-icons/gr";

function SelectSports() {
    return (
        <SelectSportsStyle>
            <div className="select-sports">
                <SelectItem icon={<PiSoccerBallFill />} text="축구" />
                <SelectItem icon={<PiBasketball />} text="농구" />
                <SelectItem icon={<RiRunLine />} text="러닝" />
                <SelectItem icon={<PiBarbellFill />} text="헬스" />
                <SelectItem icon={<MdSportsTennis />} text="테니스" />
                <SelectItem icon={<FaSwimmer />} text="수영" />
                <SelectItem icon={<GrYoga />} text="요가" />
                <SelectItem icon={<MdGroups />} text="기타" />
            </div>
        </SelectSportsStyle>
    );
}

const SelectItem = ({ icon, text }) => (
    <div className="select">
        <div className="select-image">
            {icon}
        </div>
        <div className="select-font">
            {text}
        </div>
    </div>
);

const SelectSportsStyle = styled.div`
.select-sports {
  display: grid;
  grid-template-columns: repeat(4, 1fr);  
  grid-template-rows: repeat(2, 1fr);
  gap: 16px;

  .select {
    width: 100px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    
    .select-image {
        background-color: #f7f9f9;
        border: 1px solid rgba(0, 0, 0, 0.3);         
        width: 80px;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        
        svg {
            font-size: 28px;
        }
    }

    .select-font {
        font-size: 12px;
    }
  }
}`;

export default SelectSports;
