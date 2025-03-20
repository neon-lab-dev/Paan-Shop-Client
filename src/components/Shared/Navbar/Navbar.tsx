import { Link } from "react-router-dom";
import { ICONS } from './../../../../public/assets/index';
import Container from "../../Reusable/Container/Container";
import { useState } from "react";
import PersonalInfoModal from "../../Auth/PersonalInfoModal/PersonalInfoModal";

const Navbar = () => {
    const navLinks = [
        { label: "Home", path: "/" },
        { label: "About Us", path: "/about" },
        { label: "FAQ", path: "/faq" },
        { label: "Pricing", path: "/pricing" },
        { label: "Contact Us", path: "/contact" },
    ];

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [step, setStep] = useState<"personal" | "business">("personal");

    return (
        <Container>
            <nav className="flex items-center justify-between font-Inter py-5">
                <Link to={"/"}>
                    <img src={ICONS.dummyLogo} alt="logo" className="size-16" />
                </Link>
                <div className="flex items-center gap-9">
                    <div className="flex items-center gap-9">
                        {navLinks.map((link, index) => (
                            <Link key={index} to={link.path} className="font-medium text-neutral-10 hover:text-primary-10">{link.label}</Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-5">
                        <Link to={""} className="bg-white rounded-[10px] text-primary-10 px-5 py-3 font-semibold border border-primary-10 hover:bg-primary-10/20 transition duration-300 flex items-center gap-3">
                            <img src={ICONS.call} alt="logo" className="size-4" />
                            Call Us
                        </Link>
                        <button onClick={() => {
                            setIsModalOpen(true);
                            setStep("personal");
                        }} className="bg-primary-10 rounded-[10px] text-white px-5 py-3 font-semibold border border-primary-10 cursor-pointer">
                            Sign Up For Free
                        </button>
                    </div>
                </div>
            </nav>

            <PersonalInfoModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} step={step} setStep={setStep} />
        </Container>
    );
};

export default Navbar;