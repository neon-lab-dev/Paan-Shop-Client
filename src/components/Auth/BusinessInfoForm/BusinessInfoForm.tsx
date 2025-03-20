import { useState } from 'react';
import TextInput from '../../Reusable/TextInput/TextInput';

const BusinessInfoForm = ({ register, errors }) => {
    const [isChecked, setIsChecked] = useState<boolean>(false);
    return (
        <div className="flex flex-col gap-5">
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
            <div className='flex items-center gap-5 w-full'>
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
            </div>

            <div className='flex items-center gap-5 w-full'>
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

            <div className="flex items-center gap-3">
                <input id="confirmationCheckbox" type="checkbox" checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)} />
                <label htmlFor="confirmationCheckbox" className="text-neutral-10 cursor-pointer">I've read and agree to the website <strong>Terms & Conditions</strong></label>
            </div>

        </div>
    );
};

export default BusinessInfoForm;