import { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
import { DropdownOption } from '../../model/types';

interface UseDropdownProps {
    options: DropdownOption[] | string[];
    onChange: (value: string) => void;
    placeholder: string;
}

function EventDropdown({ options, onChange, placeholder }: UseDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState<string | number | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <EventDropdownStyle ref={dropdownRef} hasValue={selectedValue !== null}>
            <div className="dropdown">
                <button className="dropdown-button" onClick={() => setIsOpen(!isOpen)}>
                    {selectedValue !== null ? selectedValue : placeholder}
                </button>
                <div className={`dropdown-list ${isOpen ? 'open' : ''}`}>
                    {(options).map((option) => {
                        const value = typeof option === 'string' ? option : option.name;
                        return (
                            <div
                                className="dropdown-item"
                                key={value}
                                onClick={() => {
                                    setSelectedValue(value);
                                    onChange(value);
                                    setIsOpen(false);
                                }}
                            >
                                {value}
                            </div>
                        );
                    })}
                </div>
            </div>
        </EventDropdownStyle>
    );
}

const EventDropdownStyle = styled.div<{ hasValue: boolean }>`
    position: relative;
    width: 100%;

    .dropdown-button {
        width: 100%;
        padding: 12px;
        border: 1px solid ${({ hasValue }) => (hasValue ? '#007BFF' : '#ccc')};        background: white;
        cursor: pointer;
        text-align: left;
        border-radius: 8px;
        font-size: 14.5px;
        color: ${({ hasValue }) => (hasValue ? 'black' : 'gray')};
        font-weight :550 ;
        transition: border 0.3s, color 0.3s;
    }

    .dropdown-list {
        width: 100%;
        border: 1px solid rgba(0,0,0,0.3);
        background: white;
        list-style: none;
        margin: 0;
        padding: 0;
        border-radius: 8px;
        overflow-y: auto;
        max-height: 0px;
        opacity: 0;
        visibility: hidden;
        transition: max-height 0.3s, opacity 0.3s ease-in-out;
    }

    .dropdown-list.open {
        margin-top: 4px;
        max-height: 120px;
        font-size: 14.5px;
        opacity: 1;
        visibility: visible;    
    }

    .dropdown-item {
        padding : 12px;
        cursor: pointer;
        &:hover {
            background: lightgray;
        }
    }
`;

export default EventDropdown;
