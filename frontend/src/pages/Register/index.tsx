import { useForm } from "react-hook-form";
import api from "../../services/api";
import { Button, Input, RegisterContainer, RegisterForm } from "./styles";
import { Link, useNavigate } from "react-router-dom";

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
}

const Register: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const navigate = useNavigate();

  const onSubmit = async (data: FormData) => {
    try {
      const { name, email, password, phone } = data;
      await api.post("clients", { name, email, password, phone });
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <RegisterContainer>
      <RegisterForm onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          placeholder="nome"
          {...register("name", { required: true, minLength: 2 })}
        />
        {errors.name && <span>Nome deve ter no mínimo 2 caracteres</span>}

        <Input
          type="text"
          placeholder="email"
          {...register("email", { required: true, pattern: /^\S+@\S+\.\S+$/ })}
        />
        {errors.email && <span>Email inválido</span>}

        <Input
          type="password"
          placeholder="senha"
          {...register("password", { required: true, minLength: 6 })}
        />
        {errors.password && <span>Senha deve ter no mínimo 6 caracteres</span>}

        <Input
          type="password"
          placeholder="confirmar senha"
          {...register("confirmPassword", {
            required: true,
            validate: (value) => value === watch("password"),
          })}
        />
        {errors.confirmPassword && <span>As senhas não coincidem</span>}

        <Input
          type="text"
          placeholder="telefone"
          {...register("phone", { required: true, minLength: 8 })}
        />
        {errors.phone && <span>Telefone deve ter no mínimo 8 caracteres</span>}
        <Button type="submit">Registrar</Button>
        <Link to="/login">
          <span>Voltar</span>
        </Link>
      </RegisterForm>
    </RegisterContainer>
  );
};

export default Register;
