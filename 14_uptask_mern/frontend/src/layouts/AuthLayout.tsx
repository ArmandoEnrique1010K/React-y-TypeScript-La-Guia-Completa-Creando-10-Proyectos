import Logo from "@/components/Logo";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

export default function AuthLayout() {
    return (
        <>
            <div className="bg-gray-800 min-h-screen">
                {/* sm:w-[450px] w-[320px] */}
                <div className="py-10 lg:py-20 mx-auto sm:w-[420px] w-[300px]">
                    <Logo />
                    <div className="mt-10">
                        <Outlet />
                    </div>
                </div>
            </div>
            <ToastContainer pauseOnHover={false} pauseOnFocusLoss={false} />
        </>
    );
}
