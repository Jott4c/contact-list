import { useForm } from "react-hook-form";
import api from "../../services/api";
import { Button, Input, LoginContainer, LoginForm } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";

interface FormData {
  email: string;
  password: string;
}

interface Props {
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
}

const Login: React.FC<Props> = ({ setIsAuthenticated }) => {
  const { register, handleSubmit } = useForm<FormData>();

  const navigate = useNavigate();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await api.post("session", data);
      const token = response.data.token;
      localStorage.setItem("authToken", JSON.stringify(token));
      setIsAuthenticated(true);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <Input type="text" placeholder="email" {...register("email")} />

        <Input type="password" placeholder="senha" {...register("password")} />

        <Button type="submit">Login</Button>

        <Link to="/register">
          <p>Não tem conta?</p>
        </Link>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
