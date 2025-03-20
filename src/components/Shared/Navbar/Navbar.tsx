import { Link } from "react-router-dom";
import { ICONS } from './../../../../public/assets/index';
import Container from "../../Reusable/Container/Container";

const Navbar = () => {
    const navLinks = [
        { label: "Home", path: "/" },
        { label: "About Us", path: "/about" },
        { label: "FAQ", path: "/faq" },
        { label: "Pricing", path: "/pricing" },
        { label: "Contact Us", path: "/contact" },
    ];

    return (
        <Container>
            <nav className="flex items-center justify-between font-Inter">
                <Link to={"/"}>
                    <img src={ICONS.dummyLogo} alt="logo" className="size-16" />
                </Link>
                <div className="flex items-center gap-9">
                    <div className="flex items-center gap-9">
                        {navLinks.map((link, index) => (
                            <Link key={index} to={link.path} className="font-Inter font-medium text-neutral-10 hover:text-primary-10">{link.label}</Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-5">
                        <Link to={""} className="bg-white rounded-lg text-primary-10 px-5 py-3 font-semibold border border-primary-10 hover:bg-primary-10/20 transition duration-300 flex items-center gap-3">
                            <img src={ICONS.call} alt="logo" className="size-4" />
                            Call Us
                        </Link>
                        <Link to={""} className="bg-primary-10 rounded-lg text-white px-5 py-3 font-semibold border border-primary-10">
                            Sign Up For Free
                        </Link>
                    </div>
                </div>


            </nav>
        </Container>
    );
};

export default Navbar;