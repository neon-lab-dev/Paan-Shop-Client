import { ICONS, IMAGES } from "../../../../public/assets";
import Container from "../../Reusable/Container/Container";
import { useState } from "react";
import Signup from "../../Auth/Signup/Signup";

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState<string>("");
    const [step, setStep] = useState<"personal" | "business">("personal");
    return (
        <Container>
            <div className="font-Inter mt-[100px]">
                <div className="flex flex-col items-center gap-10">
                    <div className="space-y-5">
                        <div className="border border-neutral-25 py-2 px-3 rounded-[100px] flex items-center gap-3 w-fit mx-auto">
                            <img src={ICONS.ai} alt="ai-logo" className="size-5" />
                            <p className="text-neutral-10 font-medium">Generative Business Intelligence for Analysts</p>
                        </div>

                        <h1 className="text-neutral-10 font-bold text-[48px] leading-[56px] max-w-[850px] mx-auto text-center">Grow Your Business with Effortless Rewards – Just One Scan</h1>
                        <p className="text-neutral-10 leading-[25px] max-w-[700px] mx-auto text-center">Enhance customer loyalty and accelerate growth with simple, scan-based rewards that drive repeat business and engagement.</p>
                    </div>

                    {/* <button className="group relative overflow-hidden rounded-full bg-purple-950 px-14 py-4 text-lg transition-all">
                        <span className="absolute bottom-0 left-0 h-48 w-full origin-bottom translate-y-full transform overflow-hidden rounded-full bg-white/15 transition-all duration-300 ease-out group-hover:translate-y-14"></span>
                        <span className="font-semibold text-purple-200">Work with us</span>
                    </button> */}

                    <div className="flex items-center gap-5">
                        <button onClick={() => {
                            setModalType("Signup");
                            setIsModalOpen(true);
                            setStep("personal");
                        }} className="bg-primary-10 rounded-[10px] text-white px-5 py-3 font-semibold border border-primary-10 cursor-pointer">
                            Get Started Today
                        </button>
                        <button className="bg-white rounded-[10px] text-neutral-10 px-5 py-3 font-semibold border border-neutral-10 hover:bg-primary-10/20 transition duration-300 flex items-center gap-3 cursor-pointer">
                            <img src={ICONS.play} alt="logo" className="size-4" />
                            Watch Video
                        </button>
                    </div>

                    <div className="bg-primary-10 rounded-4xl h-[480px] w-full relative flex items-center justify-center">
                        <img src={IMAGES.heroBg} alt="hero-image" className="absolute w-full h-full rounded-4xl z-0 flex items-center justify-center" />
                        {/* Play button */}
                        <button className="bg-gray-100/30 rounded-[100px] w-fit px-4 py-3 flex items-center justify-center z-50 shadow-lg cursor-pointer">
                            <div className="bg-white rounded-[48px] px-4 py-3 flex items-center gap-3 w-fit text-start">
                                <img src={ICONS.playBlue} alt="logo" className="size-7" />
                                <div>
                                    <p className="font-semibold">Watch introduce video</p>
                                    <p className="mt-[2px]">5 min | <span className="text-primary-10">Play Video</span></p>
                                </div>
                            </div>
                        </button>

                    </div>
                </div>
            </div>

            {
                modalType === "Signup" &&
                <Signup isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} step={step} setStep={setStep} modalType={modalType} />
            }
        </Container>
    );
};

export default Hero;