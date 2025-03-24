import { useForm } from "react-hook-form";
import { ICONS } from "../../../../public/assets";
import ActionButton from "../../../components/Reusable/Button/Button";
import TextInput from "../../../components/Reusable/TextInput/TextInput";

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
const Profile = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TFormData>();

    const handleEditProfile = (data: TFormData) => {
        console.log(data);
    }
    return (
        <div className="flex flex-col gap-10">


            {/* Info */}
            <div className="bg-gray-50 rounded-3xl border border-neutral-25/30">
                <div className="w-full h-20 bg-gradient-to-r from-green-200 to-blue-500 rounded-t-3xl"></div>

                <div className="p-7 flex flex-col gap-10">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="size-24 rounded-full flex items-center justify-center bg-neutral-25/10">
                                <img src={ICONS.dummyLogo} alt="logo" className="size-[90px] rounded-full" />
                            </div>
                            <div>
                                <h1 className="text-neutral-10 font-bold text-xl">
                                    Rahul Sutradhar
                                </h1>
                                <p className="text-neutral-10 mt-1 text-sm">
                                    rahul@gmail.com
                                </p>
                            </div>
                        </div>
                        <ActionButton
                            icon={ICONS.pen}
                            label="Edit Details"
                            variant="primary"
                        />
                    </div>

                    <form onSubmit={handleSubmit(handleEditProfile)}>
                        <div>
                            <h1 className="text-neutral-10 font-bold text-xl">
                                Personal Info
                            </h1>
                            <div className="grid grid-cols-2 gap-7 mt-4">
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
                                    label="Country"
                                    placeholder="Enter country name"
                                    error={errors.country}
                                    {...register("country", { required: "Country name is required" })}
                                />
                                <TextInput
                                    label="City"
                                    placeholder="Enter city name"
                                    error={errors.city}
                                    {...register("city", { required: "City name is required" })}
                                />
                                <TextInput
                                    label="Street Address"
                                    placeholder="Enter street address"
                                    error={errors.streetAddress}
                                    {...register("streetAddress", { required: "Street Address is required" })}
                                />
                                <TextInput
                                    label="PIN/ZIP Code"
                                    placeholder="Enter PIN code"
                                    error={errors.pinCode}
                                    {...register("pinCode", { required: "PIN code is required" })}
                                />
                            </div>
                        </div>

                        <div>
                            <h1 className="text-neutral-10 font-bold text-xl">
                                Business Info
                            </h1>
                            <div className="grid grid-cols-2 gap-10 mt-4">
                                <TextInput
                                    label="Shop Name"
                                    placeholder="Enter your shop name"
                                    error={errors.shopName}
                                    {...register("shopName", { required: "Shop name is required" })}
                                />
                                <TextInput
                                    label="Business Type"
                                    placeholder="e.g., grocery, salon, cigarette shop, etc."
                                    error={errors.businessType}
                                    {...register("businessType", { required: "Business type name is required" })}
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profile;