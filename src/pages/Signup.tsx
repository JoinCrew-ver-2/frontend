import styled from "styled-components";
import { useForm } from "react-hook-form";
import Button from "../components/common/Button";
import { useEffect } from "react";

interface SignupProps {
  email: string;
  verificationCode: string;
  password: string;
  nickname: string;
  gender: string;
  location: string;
  exerciseTypes: string[];
  mbti?: string;
}

const exerciseList = [
  "축구",
  "테니스",
  "수영",
  "러닝",
  "요가",
  "농구",
  "헬스",
  "기타",
];

const mbtiList = [
  "ISTJ",
  "ISFJ",
  "INFJ",
  "INTJ",
  "ISTP",
  "ISFP",
  "INFP",
  "INTP",
  "ESTP",
  "ESFP",
  "ENFP",
  "ENTP",
  "ESTJ",
  "ESFJ",
  "ENFJ",
  "ENTJ",
];
function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<SignupProps>({
    mode: "onChange", // 실시간 유효성 검사 설정
    defaultValues: {
      exerciseTypes: [],
      gender: "",
    },
  });

  const onSubmit = (data: SignupProps) => {
    console.log(data);
  };

  const selectedExercises = watch("exerciseTypes") || [];
  const selectedGender = watch("gender");

  const toggleExercise = (exercise: string) => {
    const current = selectedExercises;
    const updated = current.includes(exercise)
      ? current.filter((item) => item !== exercise)
      : [...current, exercise];
    setValue("exerciseTypes", updated, { shouldValidate: true });
  };

  // 운동 종목 최소 1개 이상 선택 필수
  useEffect(() => {
    register("exerciseTypes", {
      required: "관심 운동을 1개 이상 선택해주세요",
      validate: (value) =>
        value.length > 0 || "관심 운동을 1개 이상 선택해주세요",
    });

    // 성별 등록
    register("gender", {
      required: "성별을 선택해주세요",
    });
  }, [register]);

  return (
    <SignupStyle>
      <h1>
        <span style={{ color: "#6969DC" }}>Join</span>
        <span style={{ color: "#3AE159" }}>Crew</span>
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="inputs">
          <div className="input-row">
            <input
              type="email"
              placeholder="✉️ 이메일"
              {...register("email", {
                required: "이메일을 입력해주세요",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
                  message: "올바른 이메일 형식이 아닙니다",
                },
              })}
              style={{ width: "75%" }}
            />
            <Button
              text="중복 확인"
              type="submit"
              width="25%"
              height="2.5rem"
            />
          </div>
          {errors.email && (
            <span className="error-message">{errors.email.message}</span>
          )}
        </div>

        <div className="inputs">
          <div className="input-row">
            <input
              placeholder="인증번호 확인"
              {...register("verificationCode", {
                required: "인증번호를 입력해주세요",
              })}
              style={{ width: "75%" }}
            />
            <Button text="확인" type="submit" width="25%" height="2.5rem" />
          </div>
          {errors.verificationCode && (
            <span className="error-message">
              {errors.verificationCode.message}
            </span>
          )}
        </div>

        <div className="inputs">
          <input
            type="password"
            placeholder="🔒 비밀번호"
            {...register("password", {
              required: "비밀번호를 입력해주세요",
            })}
          />
          {errors.password && (
            <span className="error-message">{errors.password.message}</span>
          )}
        </div>

        <div className="inputs">
          <div className="input-row">
            <input
              placeholder="👤 닉네임"
              {...register("nickname", {
                required: "닉네임을 입력해주세요",
              })}
              style={{ width: "75%" }}
            />
            <Button
              text="중복 확인"
              type="submit"
              width="25%"
              height="2.5rem"
            />
          </div>
          {errors.nickname && (
            <span className="error-message">{errors.nickname.message}</span>
          )}
        </div>

        <GenderContainer>
          <div>
            <GenderButton
              type="button"
              className={selectedGender === "남성" ? "selected" : ""}
              onClick={() =>
                setValue("gender", "남성", { shouldValidate: true })
              }
            >
              남성
            </GenderButton>
            <GenderButton
              type="button"
              className={selectedGender === "여성" ? "selected" : ""}
              onClick={() =>
                setValue("gender", "여성", { shouldValidate: true })
              }
            >
              여성
            </GenderButton>
          </div>
          {errors.gender && (
            <span className="error-message">{errors.gender.message}</span>
          )}
        </GenderContainer>

        <ExerciseContainer>
          <p>관심 운동 종목을 선택해주세요</p>
          <div>
            {exerciseList.map((exercise) => (
              <ExerciseButton
                key={exercise}
                type="button"
                className={
                  selectedExercises.includes(exercise) ? "selected" : ""
                }
                onClick={() => toggleExercise(exercise)}
              >
                {exercise}
              </ExerciseButton>
            ))}
          </div>
          {errors.exerciseTypes && (
            <span className="error-message">
              {errors.exerciseTypes.message}
            </span>
          )}
        </ExerciseContainer>

        <div className="MbtiContainer">
          <p>MBTI를 알려주세요(선택)</p>
          <select {...register("mbti")}>
            <option value="">선택 안 함</option>
            {mbtiList.map((mbti) => (
              <option key={mbti} value={mbti}>
                {mbti}
              </option>
            ))}
          </select>
        </div>

        <Button text="회원가입" type="submit" width="50%" />
      </form>
    </SignupStyle>
  );
}
const SignupStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 2rem;
  }

  .error-message {
    color: #6969dc;
    font-size: 0.8rem;
    text-align: left; 
    align-self: flex-start; 
  }

  form {
    width: 90%;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    align-items: center;

    .inputs {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 4rem;
      width: 100%;
      padding: 0.3rem;
      gap: 0.5rem;

      .input-row {
        display: flex;
        align-items: center;
        gap: 1rem;
        width: 100%;
      }

      input {
        width: 100%;
        height: 2.5rem;
        border-radius: 10px;
        border: 1px solid #bdbdbd;
        outline: none;
      }

      input:focus {
        border: 2px solid #3ae159;
      }
    }

    .MbtiContainer {
      width: 100%;
      margin-bottom: 2rem;

      select {
        margin-top: 0.5rem;
        width: 100%;
        height: 3rem;
        border-radius: 10px;
        border: 1px solid #bdbdbd;
        outline: none;
      }
    }
  }
`;

const GenderContainer = styled.div`
  height: 4.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  margin-top: 0.5rem;

  div {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }
`;

const GenderButton = styled.button`
  flex: 1;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  border: 1px solid #bdbdbd;
  background: white;
  cursor: pointer;

  &.selected {
    background: #3ae159;
    color: white;
    border: none;
  }
`;

const ExerciseContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  height: 9.5rem;
  width: 100%;
  margin-bottom: 0.5rem;

  div {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 0.5rem;
    justify-content: center;
  }
`;

const ExerciseButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  border: 1px solid #bdbdbd;
  background: white;
  cursor: pointer;

  &.selected {
    background: #3ae159;
    color: white;
    border: none;
  }
`;

export default Signup;
