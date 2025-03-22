import { useForm } from "react-hook-form";
import Modal from "../../Reusable/Modal/Modal";
import TextInput from "../../Reusable/TextInput/TextInput";
import { useState } from "react";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";

type TFormData = {
    newPassword: string;
    confirmPassword: string;
}
type TResetPassword = {
    isModalOpen: boolean;
    setIsModalOpen: (isOpen: boolean) => void;
    modalType: string;
    setModalType: (modalType: string) => void;
}

const ResetPassword: React.FC<TResetPassword> = ({ isModalOpen, setIsModalOpen, modalType, setModalType }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TFormData>();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleResetPassword = (data: TFormData) => {
        setIsLoading(true);
        console.log(data);
    }
    return (
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} modalType={modalType}>
            <form onSubmit={handleSubmit(handleResetPassword)} className="flex flex-col gap-5 mt-6">
                <TextInput
                    label="Password"
                    placeholder="Enter new password"
                    type="password"
                    error={errors.newPassword}
                    {...register("newPassword", { required: "Password is required" })} />

                <TextInput
                    label="Password"
                    placeholder="Re-enter the password"
                    type="password"
                    error={errors.confirmPassword}
                    {...register("confirmPassword", { required: "Password is required" })} />

                <button
                    className="bg-primary-10 rounded-[10px] text-white px-5 py-3 font-semibold border border-primary-10 cursor-pointer w-full"
                    type="submit"
                    disabled={isLoading}>
                    {isLoading ? <LoadingSpinner /> : "Submit"}
                </button>

                <button onClick={() => setModalType("Login")} className="text-primary-10 font-medium cursor-pointer">Back to Login</button>
            </form>
        </Modal>
    );
};

export default ResetPassword;