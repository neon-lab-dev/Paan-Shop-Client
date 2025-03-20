import { useForm } from "react-hook-form";
import TextInput from "../../../components/Reusable/TextInput/TextInput";
import { ICONS, IMAGES } from "../../../../public/assets";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import { useState } from "react";
import {QRCodeCanvas} from 'qrcode.react';

type TFormData = {
    productName: string;
    buyValue: number;
    getFreeValue: number;
}
const AddNewProduct = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TFormData>();

    const handleAddProduct = () => {
        console.log("object");
    };

    return (
        <div className="font-Inter">
            <h1 className="text-neutral-10 font-bold text-2xl capitalize">Add new product</h1>
            <p className="text-neutral-10 text-sm mt-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, similique?</p>

            <QRCodeCanvas value="https://reactjs.org/" />

            <div className="flex gap-7 mt-10">
                <form onSubmit={handleSubmit(handleAddProduct)} className="flex flex-col gap-5 bg-neutral-light-20 shadow p-6 rounded-2xl">
                    <TextInput
                        label="Product Name"
                        placeholder="Enter your product name (ex: Paan, Salon, etc.)"
                        error={errors.productName}
                        {...register("productName", { required: "Full name is required" })}
                    />

                    <div className="flex flex-col gap-2">
                        <label className="text-neutral-10">Set Your Rule <span className="text-red-600"> *</span></label>

                        <div className="flex items-center gap-2">
                            <label className="text-neutral-10">Buy</label>
                            <input
                                type="number"
                                placeholder="ex: 4"
                                {...register("buyValue", { required: "Value is required" })}
                                className={`px-[18px] py-[14px] rounded-lg bg-neutral-70 border focus:outline-none focus:border-primary-10 transition duration-300 ${errors.buyValue ? "border-red-500" : "border-neutral-light-40 w-full"
                                    }`}
                            />
                            {errors?.buyValue && (
                                <span className="text-red-500 text-sm">{String(errors.buyValue)}</span>
                            )}
                            <label className="text-neutral-10">Get</label>
                            <input
                                type="number"
                                placeholder="ex: 1"
                                {...register("getFreeValue", { required: "Value is required" })}
                                className={`px-[18px] py-[14px] rounded-lg bg-neutral-70 border focus:outline-none focus:border-primary-10 transition duration-300 ${errors.getFreeValue ? "border-red-500" : "border-neutral-light-40 w-full"
                                    }`}
                            />
                            {errors?.getFreeValue && (
                                <span className="text-red-500 text-sm">{String(errors.getFreeValue)}</span>
                            )}
                            <label className="text-neutral-10">Free</label>
                        </div>
                    </div>

                    <div className="flex items-center justify-end gap-3">
                        <button className="bg-white rounded-[10px] text-neutral-10 px-5 py-3 font-semibold border border-neutral-10/30 hover:bg-primary-10/20 transition duration-300 flex items-center gap-2 cursor-pointer">
                            <img src={ICONS.leftArrow} alt="left-arrow" className="size-3" />
                            Cancel
                        </button>
                        <button
                            className="bg-primary-10 rounded-[10px] text-white px-5 py-3 font-semibold border border-primary-10 cursor-pointer"
                            type="submit"
                            disabled={isLoading}
                        >
                            {isLoading ? <LoadingSpinner /> : "Submit Details"}
                        </button>
                    </div>

                </form>

                <div className="bg-primary-10 rounded-2xl relative flex justify-center">
                    <img src={IMAGES.heroBg} alt="hero-image" className="absolute w-full h-full rounded-2xl z-0 opacity-60" />
                    <div className="z-50 p-5 text-white">
                        <h1 className="font-bold text-lg capitalize">Steps to add product</h1>
                        <div className="flex flex-col gap-3 mt-3">
                            <div className="flex gap-3">
                                <img src={ICONS.tickMark} alt="tick-mark" className="size-6" />
                                <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, similique?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddNewProduct;