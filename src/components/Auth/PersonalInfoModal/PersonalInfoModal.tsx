import { Link } from "react-router-dom";
import { ICONS } from "../../../../public/assets";
import TextInput from "../../Reusable/TextInput/TextInput";
import { useForm } from "react-hook-form";
import { useState } from "react";

type TFormData = {
    fullName : string;
    email : string;
    mobileNumber : string;
    password : string;
}
const PersonalInfoModal = ({ isModalOpen, setIsModalOpen }) => {
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TFormData>();

    const handleSignup = () => {
        console.log("Sign up");
    }
    return (
        <div
            className={`${isModalOpen ? " visible" : " invisible"
                } w-full h-screen fixed top-0 left-0 z-[200000000] bg-[#0000002a] transition-all duration-300 flex items-center justify-center font-Inter`}
        >
            <div
                className={`${isModalOpen
                    ? " scale-[1] opacity-100"
                    : " scale-[0] opacity-0"
                    } max-w-[550px] w-full bg-[#fff] rounded-2xl transition-all duration-300 mx-auto mt-8`}>
                <div className="p-6">
                    {/* Header */}
                    <div className="flex items-center gap-5">
                        <Link onClick={() => setIsModalOpen(false)} to={"/"}>
                            <img src={ICONS.dummyLogo} alt="logo" className="size-20" />
                        </Link>
                        <div className="flex-1">
                            <div className="flex items-center justify-between w-full">
                                <h1 className="text-neutral-10 font-bold text-xl">Sign Up For Free</h1>
                                <img onClick={() => setIsModalOpen(false)} src={ICONS.cross} alt="cross-icon" className="size-5 cursor-pointer" />
                            </div>
                            <p className="text-neutral-10 leading-[25px] mt-1 max-w-[420px] text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit(handleSignup)} className="flex flex-col gap-5 mt-6">
                        <TextInput
                            label="Full Name"
                            placeholder="Enter your full name"
                            type="fullName"
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
                            type="mobileNumber"
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
                         {/* <div className="flex items-center gap-3">
                        <input id="confirmationCheckbox" type="checkbox" checked={isChecked}
                            onChange={(e) => setIsChecked(e.target.checked)} />
                        <label htmlFor="confirmationCheckbox" className="text-neutral-10 cursor-pointer">I've read and agree to the website <Link to={"/terms-and-conditions"} className="text-primary-10 underline">Terms & Conditions</Link></label>
                    </div> */}

                       <div className="flex items-center justify-between border-t pt-4 border-neutral-10/10">
                       <div>
                       <p className="font-bold text-primary-10">Having trouble to signup?</p>
                       <p className="text-neutral-10 mt-1 text-sm"><a href="callto:918787544" className="font-bold">Call Us</a> for any inquiry.</p>
                       </div>
                       <button className="bg-primary-10 rounded-[10px] text-white px-5 py-3 font-semibold border border-primary-10 cursor-pointer">
                            Get Started Today
                        </button>
                       </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default PersonalInfoModal;