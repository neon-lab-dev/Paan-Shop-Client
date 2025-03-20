/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import TextInput from "../../../components/Reusable/TextInput/TextInput";
import { ICONS, IMAGES } from "../../../../public/assets";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import { useRef, useState } from "react";
import { QRCodeCanvas } from 'qrcode.react';
import { Link } from "react-router-dom";
import { PDFDownloadLink } from "@react-pdf/renderer";
import QRCodePDF from "../../../components/QRCodePDF/QRCodePDF";

type TFormData = {
    productName: string;
    buyValue: number;
    getFreeValue: number;
}
const AddNewProduct = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const qrRef = useRef<any>(null);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TFormData>();

    const [qrValue, setQrValue] = useState<string>("");
    const [productName, setProductName] = useState<string>("");
    const [buyValue, setBuyValue] = useState<number>(0);
    const [getFreeValue, setGetFreeValue] = useState<number>(0);
    console.log(qrValue);
    const [qrImageUrl, setQrImageUrl] = useState<string>("");
    console.log(qrImageUrl);

    const sellerName = "Rahul Sutradhar";
    const shopName = "The Paan Mart";

    const generateQRCode = () => {
        return new Promise<void>((resolve) => {
            setIsLoading(true);
            setTimeout(() => {
                const canvas = qrRef.current;
                if (canvas) {
                    const dataUrl = canvas.toDataURL("image/png");
                    setQrImageUrl(dataUrl);
                    setIsLoading(false);
                    resolve();
                }
            }, 500);
        });
    };

    const handleAddProduct = async (data: TFormData) => {
        setIsLoading(true);

        const productData = {
            productName: data.productName,
            buyValue: data.buyValue,
            getFreeValue: data.getFreeValue,
            shopName,
            sellerName,
        };
        setProductName(data.productName);
        setBuyValue(data.buyValue);
        setGetFreeValue(data.getFreeValue);

        setQrValue(JSON.stringify(productData));

        await generateQRCode();

        setIsLoading(false);
    };





    const steps = [
        "Fill the required details related to your product.",
        "Click on Generate QR Code.",
        "Then Your QR Code will be ready to download.",
        "Click on Save & Download QR Code to save and download the QR Code in your device and print.",
        "You can also add more products by following the same steps.",
        "Now you can share this QR Code with your customers to avail the offer.",

    ]

    return (
        <div className="font-Inter">
            <h1 className="text-neutral-10 font-bold text-2xl capitalize">Add new product</h1>
            <p className="text-neutral-10 text-sm mt-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, similique?</p>


            <div className="flex gap-7 mt-10">
                <form onSubmit={handleSubmit(handleAddProduct)} className="bg-neutral-light-20 shadow p-6 rounded-2xl flex flex-col gap-5 ">
                    {
                        qrValue &&
                        <div className="">
                            <h1 className="font-bold text-lg capitalize mb-3 text-green-600">Your QR Code is ready</h1>
                            <QRCodeCanvas value={qrValue} size={200} ref={qrRef} />

                        </div>
                    }

                    <TextInput
                        label="Product Name"
                        placeholder="Enter your product name (ex: Paan, Salon, etc.)"
                        error={errors.productName}
                        {...register("productName", { required: "Full name is required" })}
                        isDisabled={qrValue ? true : false}
                    />

                    <div className="flex flex-col gap-2">
                        <label className="text-neutral-10">Set Your Rule <span className="text-red-600"> *</span></label>

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

                    <div className="flex items-center justify-end gap-3">
                        <Link
                            to={"/dashboard/owner"}
                            className="bg-white rounded-[10px] text-neutral-10 px-5 py-3 font-semibold border border-neutral-10/30 hover:bg-primary-10/20 transition duration-300 flex items-center gap-2 cursor-pointer"
                        >
                            <img src={ICONS.leftArrow} alt="left-arrow" className="size-3" />
                            Cancel
                        </Link>
                        {qrImageUrl ? (
                            <PDFDownloadLink
                                document={
                                    <QRCodePDF
                                        productName={productName}
                                        sellerName={sellerName}
                                        shopName={shopName}
                                        buyValue={buyValue}
                                        qrImageUrl={qrImageUrl}
                                        getFreeValue={getFreeValue}
                                    />
                                }
                                fileName={`${productName}_QR.pdf`}
                                className="bg-primary-10 rounded-[10px] text-white px-5 py-3 font-semibold border border-primary-10 cursor-pointer"
                            >
                                {({ loading }) => (loading ? <LoadingSpinner /> : "Save & Download QR Code")}
                            </PDFDownloadLink>
                        ) : (
                            <button
                                className="bg-primary-10 rounded-[10px] text-white px-5 py-3 font-semibold border border-primary-10 cursor-pointer"
                                type="submit"
                                disabled={isLoading}
                            >
                                {isLoading ? <LoadingSpinner /> : "Generate QR Code"}
                            </button>
                        )}
                    </div>

                </form>

                {/* Steps to add product */}
                <div className="bg-primary-10 rounded-2xl relative flex justify-center">
                    <img src={IMAGES.heroBg} alt="hero-image" className="absolute w-full h-full rounded-2xl z-0 opacity-60 object-cover" />
                    <div className="z-50 p-5 text-white">
                        <h1 className="font-bold text-lg capitalize">Steps to add product</h1>
                        <div className="flex flex-col gap-3 mt-3">
                            {
                                steps?.map((step: string) =>
                                    <div key={step} className="flex gap-3">
                                        <img src={ICONS.tickMark} alt="tick-mark" className="size-6" />
                                        <p className="text-sm">{step}</p>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddNewProduct;