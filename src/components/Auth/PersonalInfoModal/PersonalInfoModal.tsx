import { Link } from "react-router-dom";
import { ICONS } from "../../../../public/assets";
import TextInput from "../../Reusable/TextInput/TextInput";
import { useForm } from "react-hook-form";
import BusinessInfoForm from "../BusinessInfoForm/BusinessInfoForm";
import { useState } from "react";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";

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

const PersonalInfoModal = ({ isModalOpen, setIsModalOpen, step, setStep }) => {
    const [formData, setFormData] = useState<Partial<TFormData>>({});
    const [isLoading, setIsLoading] = useState<boolean>(false);


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TFormData>();

    const handleSignup = (data: TFormData) => {
        if (step === "personal") {
            // Store personal data and move to business step
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
                setFormData((prev) => ({ ...prev, ...data }));
                setStep("business");
            }, 2000);
        } else {
            // Submit full data (personal + business)
            const finalData = { ...formData, ...data };
            console.log("Final Submission Data:", finalData);

            // Call API Here
            // Example: await axios.post("/api/signup", finalData);
        }
    };

    return (
        <div
            className={`${isModalOpen ? " visible" : " invisible"
                } w-full h-screen fixed top-0 left-0 z-[200000000] bg-[#0000002a] transition-all duration-300 flex items-center justify-center font-Inter`}
        >
            <div
                className={`${isModalOpen
                    ? " scale-[1] opacity-100"
                    : " scale-[0] opacity-0"
                    } max-w-[550px] w-full bg-[#fff] rounded-2xl transition-all duration-300 mx-auto mt-8`}
            >
                <div className="p-6">
                    {/* Header */}
                    <div className="flex items-center gap-5">
                        <Link onClick={() => setIsModalOpen(false)} to={"/"}>
                            <img src={ICONS.dummyLogo} alt="logo" className="size-20" />
                        </Link>
                        <div className="flex-1">
                            <div className="flex items-center justify-between w-full">
                                <h1 className="text-neutral-10 font-bold text-xl">
                                    {step === "personal" ? "Sign Up For Free" : "Business Info"}
                                </h1>
                                <img
                                    onClick={() => setIsModalOpen(false)}
                                    src={ICONS.cross}
                                    alt="cross-icon"
                                    className="size-5 cursor-pointer"
                                />
                            </div>
                            <p className="text-neutral-10 leading-[25px] mt-1 max-w-[420px] text-sm">
                                Lorem ipsum dolor sit amet, consectetur adipisicing.
                            </p>
                        </div>
                    </div>

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
                                <p className="font-bold text-primary-10">Having trouble signing up?</p>
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
                                    <button onClick={() => setStep("personal")} className="bg-white rounded-[10px] text-neutral-10 px-5 py-3 font-semibold border border-neutral-10/30 hover:bg-primary-10/20 transition duration-300 flex items-center gap-2 cursor-pointer">
                                        <img src={ICONS.leftArrow} alt="left-arrow" className="size-3" />
                                        Back
                                    </button>
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
                </div>
            </div>
        </div>
    );
};

export default PersonalInfoModal;
