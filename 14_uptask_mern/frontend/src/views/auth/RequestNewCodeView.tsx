import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import ErrorMessage from "@/components/ErrorMessage";
import { requestConfirmationCode } from "@/api/AuthAPI";
import { toast } from "react-toastify";
import { RequestConfirmationCodeForm } from "@/types/index";

export default function RegisterView() {
    const initialValues: RequestConfirmationCodeForm = {
        email: "",
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ defaultValues: initialValues });

    const { mutate } = useMutation({
        mutationFn: requestConfirmationCode,
        onError: (error) => {
            toast.error(error.message);
        },
        onSuccess: (data) => {
            toast.success(data);
        },
    });

    const handleRequestCode = (formData: RequestConfirmationCodeForm) =>
        mutate(formData);

    return (
        <>
            <h1 className="text-5xl font-black text-white">
                Solicitar Código de Confirmación
            </h1>
            <p className="text-2xl font-light text-white mt-5">
                Coloca tu e-mail para recibir {""}
                <span className=" text-fuchsia-500 font-bold">
                    {" "}
                    un nuevo código
                </span>
            </p>

            <form
                onSubmit={handleSubmit(handleRequestCode)}
                className="space-y-8 p-10 rounded-lg bg-white mt-10"
                noValidate
            >
                <div className="flex flex-col gap-5">
                    <label className="font-normal text-2xl" htmlFor="email">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email de Registro"
                        className="w-full p-3 rounded-lg border-gray-300 border"
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
                    value="Enviar Código"
                    className="bg-fuchsia-600 hover:bg-fuchsia-700 w-full p-3 rounded-lg text-white font-black  text-xl cursor-pointer"
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
                    <span className="text-gray-300">
                        ¿Olvidaste tu contraseña?{" "}
                    </span>
                    <Link
                        to={"/auth/forgot-password"}
                        className="text-fuchsia-500 hover:text-fuchsia-600"
                    >
                        Reestablecer
                    </Link>
                </div>
            </nav>
        </>
    );
}
