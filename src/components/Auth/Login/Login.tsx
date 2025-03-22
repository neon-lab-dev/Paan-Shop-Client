import { useForm } from "react-hook-form";
import TextInput from "../../Reusable/TextInput/TextInput";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";
import { useState } from "react";
import Modal from "../../Reusable/Modal/Modal";

type TFormData = {
    email: string;
    password: string;
}

type TLogin = {
    isModalOpen: boolean;
    setIsModalOpen: (isOpen: boolean) => void;
    step: "personal" | "business";
    setStep: (step: "personal" | "business") => void;
    modalType : string;
}
const Login:React.FC<TLogin> = ({isModalOpen, setIsModalOpen, modalType}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TFormData>();

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleLogin = (data: TFormData) => {
        setIsLoading(true);
        console.log(data);
    };

    return (
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} modalType={modalType}>
            <form onSubmit={handleSubmit(handleLogin)} className="flex flex-col gap-5 mt-6">
                <TextInput
                    label="Email"
                    placeholder="Enter your email"
                    type="email"
                    error={errors.email}
                    {...register("email", { required: "Email is required" })}
                />
                <TextInput
                    label="Password"
                    placeholder="Enter a strong password"
                    type="password"
                    error={errors.password}
                    {...register("password", { required: "Password is required" })}/>

                    <div className="flex justify-end">
                        <button
                            className="bg-primary-10 rounded-[10px] text-white px-5 py-3 font-semibold border border-primary-10 cursor-pointer"
                            type="submit"
                            disabled={isLoading}>
                            {isLoading ? <LoadingSpinner /> : "Login"}
                        </button>
                    </div>
            </form>
        </Modal>
    );
};

export default Login;