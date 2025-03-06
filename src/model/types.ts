export interface DropdownOption {
    id: number;
    name: string;
}

export interface DropdownState {
    exercise: string;
    time: string;
    location: string;
    purpose: string;
    gender: string;
    age: string;
    level: string;
    maxMember: number;
}

export interface EventDetailInfo {
    id: number;
    title: string;
    location: string;
    condition: string;
    waitingMember: number;
    maxMember: number;
    slot: string;
    time: string;
    gender: string;
}