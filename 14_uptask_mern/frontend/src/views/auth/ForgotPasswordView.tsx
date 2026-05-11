import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { ForgotPasswordForm } from "../../types";
import ErrorMessage from "@/components/ErrorMessage";
import { forgotPassword } from "@/api/AuthAPI";
import { toast } from "react-toastify";

export default function ForgotPasswordView() {
    const initialValues: ForgotPasswordForm = {
        email: "",
    };
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({ defaultValues: initialValues });

    const { mutate } = useMutation({
        mutationFn: forgotPassword,
        onError: (error) => {
            toast.error(error.message);
        },
        onSuccess: (data) => {
            toast.success(data);
            reset();
        },
    });

    const handleForgotPassword = (formData: ForgotPasswordForm) =>
        mutate(formData);

    return (
        <>
            <h1 className="text-4xl sm:text-5xl font-black text-white">
                Reestablecer Password
            </h1>
            <p className="text-2xl font-light text-white mt-5">
                ¿Olvidaste tu password? coloca tu email {""}
                <span className=" text-fuchsia-500 font-bold">
                    {" "}
                    y reestablece tu password
                </span>
            </p>

            <form
                onSubmit={handleSubmit(handleForgotPassword)}
                className="space-y-8 sm:p-10 p-5 mt-10 bg-white"
                noValidate
                autoComplete="off"
            >
                <div className="flex flex-col gap-5">
                    <label className="font-normal text-2xl" htmlFor="email">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email de Registro"
                        className="w-full p-3  border-gray-300 border"
                        {...register("email", {
                            required: "El Email de registro es obligatorio",
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "E-mail no válido",
                            },
                        })}
                    />
                    {errors.email && (
                        <ErrorMessage>{errors.email.message}</ErrorMessage>
                    )}
                </div>

                <input
                    type="submit"
                    value="Enviar Instrucciones"
                    className="bg-fuchsia-600 hover:bg-fuchsia-700 w-full p-3  text-white font-black  text-xl cursor-pointer"
                />
            </form>

            <nav className="mt-10 flex flex-col space-y-4">
                <div className="text-center font-normal">
                    <span className="text-gray-300">¿Ya tienes cuenta? </span>
                    <Link
                        to={"/auth/login"}
                        className="text-fuchsia-500 hover:text-fuchsia-600"
                    >
                        Iniciar Sesión
                    </Link>
                </div>

                <div className="text-center font-normal">
                    <span className="text-gray-300">¿No tienes cuenta? </span>
                    <Link
                        to={"/auth/register"}
                        className="text-fuchsia-500 hover:text-fuchsia-600"
                    >
                        Crear Una
                    </Link>
                </div>
            </nav>
        </>
    );
}
