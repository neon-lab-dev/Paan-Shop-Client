import { Link } from "react-router-dom";
import { ICONS } from "../../../../public/assets";

const PersonalInfoModal = ({ isModalOpen, setIsModalOpen }) => {
    return (
        <div
            className={`${isModalOpen ? " visible" : " invisible"
                } w-full h-screen fixed top-0 left-0 z-[200000000] bg-[#0000002a] transition-all duration-300 flex items-center justify-center font-Inter`}
        >
            <div
                className={`${isModalOpen
                    ? " scale-[1] opacity-100"
                    : " scale-[0] opacity-0"
                    } w-[90%] sm:w-[80%] md:w-[35%] bg-[#fff] rounded-2xl transition-all duration-300 mx-auto mt-8`}>
                <div className="p-6">
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

                </div>
            </div>
        </div>
    );
};

export default PersonalInfoModal;