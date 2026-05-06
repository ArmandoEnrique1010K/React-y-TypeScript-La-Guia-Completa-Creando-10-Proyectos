import { Fragment } from "react";
import {
    Popover,
    PopoverButton,
    PopoverPanel,
    Transition,
} from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { Link, useNavigate } from "react-router-dom";
import { User } from "../types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logoutcurrentSesion } from "@/api/AuthAPI";
import { toast } from "react-toastify";

type NavMenuProps = {
    name: User["name"];
};

export default function NavMenu({ name }: NavMenuProps) {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const { mutate } = useMutation({
        mutationFn: logoutcurrentSesion,
        onError: (error) => {
            toast.error(error.message);
        },
        onSuccess: (data) => {
            toast.success(data);
        },
    });

    const logout = () => {
        // localStorage.removeItem("AUTH_TOKEN")
        mutate();
        navigate("/auth/login");
        queryClient.invalidateQueries({ queryKey: ["user"] });
    };

    return (
        <Popover className="relative">
            <PopoverButton className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 p-1 rounded-lg bg-purple-400 cursor-pointer">
                <Bars3Icon className="w-12 h-12 text-white" />
            </PopoverButton>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
            >
                <PopoverPanel className="absolute left-1/2 z-10 mt-5 flex w-screen md:max-w-min -translate-x-1/2 md:-translate-x-48">
                    <div className="w-full md:w-56 shrink rounded-xl bg-white p-4 text-md font-semibold leading-6 text-gray-900 shadow-lg ring-1 ring-gray-900/5">
                        <p className="text-center text-xl pb-4">
                            Bienvenido {name}
                        </p>
                        <Link
                            to="/profile"
                            className="block p-2 hover:text-purple-800"
                        >
                            Mi Perfil
                        </Link>
                        <Link
                            to="/"
                            className="block p-2 hover:text-purple-800"
                        >
                            Mis Proyectos
                        </Link>
                        <button
                            className="block p-2 hover:text-purple-800 cursor-pointer w-full text-left"
                            type="button"
                            onClick={logout}
                        >
                            Cerrar Sesión
                        </button>
                    </div>
                </PopoverPanel>
            </Transition>
        </Popover>
    );
}
