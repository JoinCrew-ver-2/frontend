import { useForm } from "react-hook-form";
import styled from "styled-components";

interface LoginProps {
  email: string;
  password: string;
}
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>();

  const onSubmit = (data: LoginProps) => {
    console.log(data);
  };

  return (
    <LoginStyle>
      <h1>
        <span style={{ color: "#6969DC" }}>Join</span>
        <span style={{ color: "#3AE159" }}>Crew</span>
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="inputs">
          <input
            type="email"
            placeholder="이메일"
            {...register("email", {
              required: "이메일을 입력해주세요",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
                message: "올바른 이메일 형식이 아닙니다",
              },
            })}
          />
          {errors.email && (
            <span className="error-message">{errors.email.message}</span>
          )}
        </div>

        <div className="inputs">
          <input
            type="password"
            placeholder="비밀번호"
            {...register("password", {
              required: true,
            })}
          />
          {errors.password && (
            <span className="error-message">비밀번호를 입력해주세요</span>
          )}
        </div>

        <button type="submit">로그인</button>
      </form>
      <span className="auth-links">
        <p>비밀번호 찾기</p>
        <p>|</p>
        <p>회원가입</p>
      </span>
    </LoginStyle>
  );
}
const LoginStyle = styled.div`
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 3rem;
  }

  form {
    width: 90%;
    display: flex;
    flex-direction: column;
    padding: 1rem;

    .inputs {
      height: 4.5rem;
      margin-bottom: 1rem;

      input {
        width: 100%;
        height: 2.5rem;
        margin-bottom: 0.5rem;
        border: none;
        border-bottom: 1px solid #ccc;
        outline: none;
      }

      input:focus {
        border-bottom: 2px solid #3AE159;
      }

      .error-message {
        color: #6969dc;
        font-size: 0.9rem;
      }
    }
  }

  .auth-links {
    margin-top: 1rem;
    display: flex;
    width: 50%;
    justify-content: space-around;
    color:#8C8C8C;
    cursor: pointer;
  }
`;
export default Login;
