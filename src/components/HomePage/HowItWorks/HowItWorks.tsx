import { ICONS } from "../../../../public/assets";
import Container from "../../Reusable/Container/Container";

const HowItWorks = () => {
    const workProcess = [
        {
            "title": "Business Registration",
            "description": "Register your business, provide details, and create an account to start offering customer rewards and loyalty programs efficiently."
        },
        {
            "title": "Service Rule Setup",
            "description": "Set up customized reward rules like 'Buy 4, Get 1 Free' to encourage customer retention and increase repeat purchases effectively."
        },
        {
            "title": "QR Code Generation & Printing",
            "description": "Generate unique QR codes for your services, print them, and display them in your shop for easy customer access."
        },
        {
            "title": "Customers Scanning & Tracking",
            "description": "Customers scan QR codes, track purchases, and check progress toward earning their free reward."
        },
        {
            "title": "Rewarding Loyal Customers",
            "description": "Customers receive a free service after completing required purchases, boosting loyalty and engagement."
        },
        {
            "title": "Here You Go",
            "description": "Customers redeem their free reward, enhancing satisfaction, encouraging repeat visits, and strengthening brand trust."
        }
    ];

    return (
        <Container>
            <div className="mt-32 font-Inter">
                <h1 className="text-neutral-10 font-bold text-[48px] leading-[56px] max-w-[850px] mx-auto text-center">How It Works?</h1>
                <p className="text-neutral-10 leading-[25px] max-w-[700px] mx-auto text-center mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores odit magni aspernatur atque sapiente possimus fugit tenetur error a consequatur?</p>

                <div className="flex items-center gap-6 justify-center">
                    <div className="mt-10 flex flex-col gap-1 items-center justify-center">
                        {
                            workProcess?.slice(0, 3).map((item, index) =>
                                <>
                                    <div className="flex gap-5 bg-primary-10/10 p-6 rounded-2xl">
                                        <div className="bg-primary-10 text-white font-bold text-2xl size-12 rounded-full text-center flex items-center justify-center">
                                            {index + 1}
                                        </div>
                                        <div>
                                            <h1 className="text-neutral-10 font-bold text-xl">{item?.title}</h1>
                                            <p className="text-neutral-10 leading-[25px] mt-1 max-w-[300px] text-sm">{item?.description}</p>
                                        </div>
                                    </div>
                                    {
                                        index === 2 || index === 5 ? null : <img src={ICONS.downArrow} alt="ai-logo" className="size-9" />
                                    }
                                </>
                            )
                        }
                    </div>

                    <div className="mt-10 flex flex-col gap-1 items-center justify-center">
                        {
                            workProcess?.slice(3, 6).map((item, index) =>
                                <>
                                    <div className="flex gap-5 bg-primary-10/10 p-6 rounded-2xl">
                                        <div className="bg-primary-10 text-white font-bold text-2xl size-12 rounded-full text-center flex items-center justify-center">
                                            {index + 4}
                                        </div>
                                        <div>
                                            <h1 className="text-neutral-10 font-bold text-xl">{item?.title}</h1>
                                            <p className="text-neutral-10 leading-[25px] mt-1 max-w-[300px] text-sm">{item?.description}</p>
                                        </div>
                                    </div>
                                    {
                                        index === 2 || index === 5 ? null : <img src={ICONS.downArrow} alt="ai-logo" className="size-9" />
                                    }
                                </>
                            )
                        }
                    </div>

                </div>
            </div>
        </Container>
    );
};

export default HowItWorks;