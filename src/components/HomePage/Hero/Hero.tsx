import { Link } from "react-router-dom";
import { ICONS, IMAGES } from "../../../../public/assets";
import Container from "../../Reusable/Container/Container";

const Hero = () => {
    return (
        <Container>
            <div className="font-Inter mt-[100px]">
                <div className="flex flex-col items-center gap-10">
                    <div className="space-y-5">
                        <div className="border border-neutral-25 py-2 px-3 rounded-[100px] flex items-center gap-3 w-fit mx-auto">
                            <img src={ICONS.ai} alt="ai-logo" className="size-5" />
                            <p className="text-neutral-10 font-medium">Generative Business Intelligence for Analysts</p>
                        </div>

                        <h1 className="text-neutral-10 font-bold text-[48px] leading-[56px] max-w-[850px] mx-auto text-center">Revolutionizing Business Decisions with AI-Powered Analytics</h1>
                        <p className="text-neutral-10 leading-[25px] max-w-[700px] mx-auto text-center">Harnesses the power of artificial intelligence to transform your business data into actionable insights, propelling you to new heights of success</p>
                    </div>

                    <div className="flex items-center gap-5">
                        <Link to={""} className="bg-primary-10 rounded-[10px] text-white px-5 py-3 font-semibold border border-primary-10">
                            Get Started Today
                        </Link>
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
        </Container>
    );
};

export default Hero;