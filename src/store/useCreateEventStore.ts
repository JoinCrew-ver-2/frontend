import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type EventFormData = {
    // 단일 선택 필드
    sport: string;
    time: string;
    location: string;
    gender: string;
    age: string;
    memberCount: number;
    // 다중 선택 필드
    moods: number[];
    levels: number[];
    title: string;
    content: string;
};

type CreateEventStore = {
    // 폼 데이터
    formData: EventFormData;

    // 액션
    setSport: (value: string) => void;
    setTime: (value: string) => void;
    setLocation: (value: string) => void;
    setGender: (value: string) => void;
    setAge: (value: string) => void;
    setMemberCount: (value: number) => void;
    setMoods: (values: number[]) => void;
    setLevels: (values: number[]) => void;
    setTitle: (value: string) => void;
    setContent: (value: string) => void;

    // 전체 폼 데이터 설정 (페이지에서 돌아올 때 등)
    setFormData: (data: Partial<EventFormData>) => void;

    // 폼 초기화
    resetForm: () => void;

    // 유효성 검사
    isFirstStepValid: () => boolean;
    isSecondStepValid: () => boolean;
    isThirdStepValid: () => boolean;
    isFormValid: () => boolean;
    formValid: () => boolean;
};

// 초기 상태 정의
const initialState: EventFormData = {
    sport: "",
    time: "",
    location: "",
    gender: "",
    age: "",
    memberCount: -1,
    moods: [],
    levels: [],
    title: "",
    content: "",
};

// Zustand 스토어 생성
export const useCreateEventStore = create<CreateEventStore>()(
    persist(
        (set, get) => ({
            formData: { ...initialState },

            setSport: (value) => set((state) => ({
                formData: { ...state.formData, sport: value }
            })),
            setTime: (value) => set((state) => ({
                formData: { ...state.formData, time: value }
            })),
            setLocation: (value) => set((state) => ({
                formData: { ...state.formData, location: value }
            })),
            setGender: (value) => set((state) => ({
                formData: { ...state.formData, gender: value }
            })),
            setAge: (value) => set((state) => ({
                formData: { ...state.formData, age: value }
            })),
            setMemberCount: (value) => set((state) => ({
                formData: { ...state.formData, memberCount: value }
            })),
            setTitle: (value) => set((state) => ({
                formData: { ...state.formData, title: value }
            })),
            setContent: (value) => set((state) => ({
                formData: { ...state.formData, content: value }
            })),
            setMoods: (values) => set((state) => ({
                formData: { ...state.formData, moods: values }
            })),
            setLevels: (values) => set((state) => ({
                formData: { ...state.formData, levels: values }
            })),

            setFormData: (data) => set((state) => ({
                formData: { ...state.formData, ...data }
            })),
            resetForm: () => set({ formData: { ...initialState } }),

            isFirstStepValid: () => {
                const { sport, time, location, gender, age, memberCount } = get().formData;
                return (
                    sport !== "" &&
                    time !== "" &&
                    location !== "" &&
                    gender !== "" &&
                    age !== "" &&
                    memberCount !== -1
                );
            },
            isSecondStepValid: () => {
                const { moods, levels } = get().formData;
                return moods.length > 0 && levels.length > 0;
            },
            isThirdStepValid: () => {
                const { title, content } = get().formData;
                return (
                    title !== "" && content !== ""
                )
            },
            isFormValid: () => {
                return get().isFirstStepValid() && get().isSecondStepValid();
            },
            formValid: () => {
                return get().isFirstStepValid() && get().isSecondStepValid() && get().isThirdStepValid()
            }
        }),
        {
            name: 'create-event-storage', // 로컬 스토리지 키 이름
            partialize: (state) => ({ formData: state.formData }) // 저장할 상태 부분 선택
        }
    )
);