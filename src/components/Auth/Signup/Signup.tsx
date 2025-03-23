import { useState } from "react";
import { useForm } from "react-hook-form";
import TextInput from "../../Reusable/TextInput/TextInput";
import BusinessInfoForm from "../BusinessInfoForm/BusinessInfoForm";
import { ICONS } from "../../../../public/assets";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";
import Modal from "../../Reusable/Modal/Modal";
import ActionButton from "../../Reusable/Button/Button";

type TFormData = {
    fullName: string;
    email: string;
    mobileNumber: string;
    password: string;
    shopName: string;
    businessType: string;
    country: string;
    streetAddress: string;
    pinCode: string;
    city: string;
}

type TSignup = {
    isModalOpen: boolean;
    setIsModalOpen: (isOpen: boolean) => void;
    step: "personal" | "business";
    setStep: (step: "personal" | "business") => void;
    modalType : string;
}

const Signup:React.FC<TSignup> = ({isModalOpen, setIsModalOpen, step, setStep, modalType}) => {
    const [formData, setFormData] = useState<Partial<TFormData>>({});
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TFormData>();

    const handleSignup = (data: TFormData) => {
        if (step === "personal") {
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
                setFormData((prev) => ({ ...prev, ...data }));
                setStep("business");
            }, 2000);
        } else {
            const finalData = { ...formData, ...data };
            console.log("Final Submission Data:", finalData);
        }
    };
    return (
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} step={step} setStep={setStep} modalType={modalType}>
            <form onSubmit={handleSubmit(handleSignup)} className="flex flex-col gap-5 mt-6">
                {/* Personal Info Fields */}
                {step === "personal" && (
                    <>
                        <TextInput
                            label="Full Name"
                            placeholder="Enter your full name"
                            error={errors.fullName}
                            {...register("fullName", { required: "Full name is required" })}
                        />
                        <TextInput
                            label="Email"
                            placeholder="Enter your email"
                            type="email"
                            error={errors.email}
                            {...register("email", { required: "Email is required" })}
                        />
                        <TextInput
                            label="Mobile Number"
                            placeholder="Enter your mobile number"
                            type="number"
                            error={errors.mobileNumber}
                            {...register("mobileNumber", { required: "Mobile number is required" })}
                        />
                        <TextInput
                            label="Password"
                            placeholder="Enter a strong password"
                            type="password"
                            error={errors.password}
                            {...register("password", { required: "Password is required" })}
                        />
                    </>
                )}

                {/* Business Info Fields (shown after personal info submission) */}
                {step === "business" && <BusinessInfoForm register={register} errors={errors} />}

                <div className="flex items-center justify-between border-t pt-4 border-neutral-10/10">
                    <div>
                        <p className="font-bold text-primary-10">Having trouble to sign up?</p>
                        <p className="text-neutral-10 mt-1 text-sm">
                            <a href="callto:918787544" className="font-bold">
                                Call Us
                            </a>{" "}
                            for any inquiry.
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        {
                            step === "business" &&
                            <ActionButton
  onClick={() => setStep("personal")}
  icon={ICONS.leftArrow}
  label="Back"
  variant="neutral"
/>
                        }
                        <button
                            className="bg-primary-10 rounded-[10px] text-white px-5 py-3 font-semibold border border-primary-10 cursor-pointer"
                            type="submit"
                            disabled={isLoading}
                        >
                            {isLoading ? <LoadingSpinner /> : step === "personal" ? "Next Step" : "Submit Details"}
                        </button>
                    </div>
                </div>
            </form>
        </Modal>
    );
};

export default Signup;