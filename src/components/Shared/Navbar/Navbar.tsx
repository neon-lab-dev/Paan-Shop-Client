import { Link } from "react-router-dom";
import { ICONS } from './../../../../public/assets/index';
import Container from "../../Reusable/Container/Container";
import { useState } from "react";
import Signup from "../../Auth/Signup/Signup";
import Login from "../../Auth/Login/Login";
import ForgotPassword from "../../Auth/ForgotPassword/ForgotPassword";
import ResetPassword from "../../Auth/ResetPassword/ResetPassword";
import ActionButton from "../../Reusable/Button/Button";

const Navbar = () => {
    const navLinks = [
        { label: "Home", path: "/" },
        { label: "About Us", path: "/about" },
        { label: "FAQ", path: "/faq" },
        { label: "Pricing", path: "/pricing" },
        { label: "Contact Us", path: "/contact" },
    ];

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState<string>("");
    const [step, setStep] = useState<"personal" | "business">("personal");

    return (
        <Container>
            <nav className="flex items-center justify-between font-Inter py-5">
                <Link to={"/"} className="flex items-center gap-3">
                    <img src={ICONS.dummyLogo} alt="logo" className="size-16" />
                    <h1 className="text-neutral-10 font-bold text-xl">
                        Website Name
                    </h1>
                </Link>
                <div className="flex items-center gap-9">
                    <div className="flex items-center gap-9">
                        {navLinks.map((link, index) => (
                            <Link key={index} to={link.path} className="font-medium text-neutral-10 hover:text-primary-10">{link.label}</Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-5">
                    <ActionButton
  onClick={() => {
    setIsModalOpen(true);
    setModalType("Login");
  }}
  icon={ICONS.login}
  label="Login"
  variant="secondary"
/>
<ActionButton
  onClick={() => {
    setModalType("Signup");
    setIsModalOpen(true);
    setStep("personal");
  }}
  label="Sign Up For Free"
  variant="primary"
/>

                       
                    </div>
                </div>
            </nav>

            {
                modalType === "Signup" &&
                <Signup isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} step={step} setStep={setStep} modalType={modalType} />
            }
            {
                modalType === "Login" &&
                <Login isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} step={step} setStep={setStep} modalType={modalType} setModalType={setModalType} />
            }
            {
                modalType === "ForgotPassword" &&
                <ForgotPassword isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} modalType={modalType} setModalType={setModalType} />
            }
            {
                modalType === "ResetPassword" &&
                <ResetPassword isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} modalType={modalType} setModalType={setModalType} />
            }
        </Container>
    );
};

export default Navbar;