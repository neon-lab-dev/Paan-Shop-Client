/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import TextInput from "../../../components/Reusable/TextInput/TextInput";
import { useState } from "react";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import { IMAGES } from "../../../../public/assets";

const MyProducts = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [qrValue, setQrValue] = useState<string>("");

    const sellerName = "Rahul Sutradhar";
    const shopName = "The Paan Mart";

    const handleAddProduct = (data: any) => {
        const productData = {
            productName: data.productName,
            buyValue: data.buyValue,
            getFreeValue: data.getFreeValue,
            shopName,
            sellerName,
        };

        setQrValue(JSON.stringify(productData));
    };
    return (
        <div className="font-Inter">
            <h1 className="text-neutral-10 font-bold text-2xl capitalize">My Available products</h1>
            <p className="text-neutral-10 text-sm mt-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, similique?</p>

            <div className="grid grid-cols-3 gap-7 mt-10">
                <form onSubmit={handleSubmit(handleAddProduct)} className="bg-neutral-light-20 shadow p-6 rounded-2xl flex flex-col gap-5 ">
                    <div className="flex justify-between gap-5">
                    <TextInput
                        label="Product Name"
                        placeholder="Enter your product name (ex: Paan, Salon, etc.)"
                        error={errors.productName}
                        {...register("productName", { required: "Full name is required" })}
                        isDisabled={qrValue ? true : false}
                        isRequired={false}
                    />
                    <img src={IMAGES.dummyQr} alt="qr-code" className="size-[90px]" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-neutral-10">Rule Set</label>

                        <div className="flex items-center gap-2">
                            <label className="text-neutral-10">Buy</label>
                            <input
                                type="number"
                                placeholder="ex: 4"
                                {...register("buyValue", { required: "Value is required" })}
                                className={`px-[18px] py-[14px] rounded-lg bg-neutral-70 border focus:outline-none focus:border-primary-10 transition duration-300 ${errors.buyValue ? "border-red-500" : "border-neutral-light-40 w-full"}`}
                                disabled={qrValue ? true : false}
                            />
                            {errors?.buyValue && (
                                <span className="text-red-500 text-sm">{String(errors.buyValue)}</span>
                            )}
                            <label className="text-neutral-10">Get</label>
                            <input
                                type="number"
                                placeholder="ex: 1"
                                {...register("getFreeValue", { required: "Value is required" })}
                                className={`px-[18px] py-[14px] rounded-lg bg-neutral-70 border focus:outline-none focus:border-primary-10 transition duration-300 ${errors.getFreeValue ? "border-red-500" : "border-neutral-light-40 w-full"}`}
                                disabled={qrValue ? true : false}
                            />
                            {errors?.getFreeValue && (
                                <span className="text-red-500 text-sm">{String(errors.getFreeValue)}</span>
                            )}
                            <label className="text-neutral-10">Free</label>
                        </div>
                    </div>

                        <button
                            className="bg-primary-10 rounded-[10px] text-white px-5 py-3 font-semibold border border-primary-10 cursor-pointer"
                            type="button"
                            disabled={isLoading}
                        >
                            {isLoading ? <LoadingSpinner /> : "Download QR Code"}
                        </button>

                </form>

            </div>
        </div>
    );
};

export default MyProducts;