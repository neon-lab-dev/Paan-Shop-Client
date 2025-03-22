import { Link } from "react-router-dom";
import Container from "../../Reusable/Container/Container";
import { footerLinks } from "./footerLinks";
import { ICONS } from "../../../../public/assets";


const Footer = () => {
    return (
        <div className="bg-white py-10 font-Inter border-t-2 border-neutral-10/10 mt-32">
            <Container>

                <div className="flex justify-between">
                    <div>
                        <Link to={"/"} className="font-extrabold text-neutral-10 text-2xl">
                            Website Name
                        </Link>
                        <p className="text-gray-20 leading-5 max-w-[267px] my-5">
                            123, XYZ Street, PQR Area
                            Maharastra, India.
                        </p>
                        <a href="callto:+91 12345 67890" className="text-gray-20 leading-5 hover:underline">+91 12345 67890</a>
                    </div>

                    {/* Links */}
                    <div className="flex gap-[50px]">
                        {
                            footerLinks?.map(item =>
                                <div key={item.title} className="flex flex-col gap-[10px]">
                                    <h1 className="text-neutral-10 font-bold leading-5">Product</h1>
                                    {
                                        item.links?.map(link =>
                                            <Link to={link.path} key={link.label} className="text-gray-20 leading-5 hover:underline">
                                                {link.label}
                                            </Link>
                                        )
                                    }
                                </div>
                            )
                        }
                    </div>
                </div>

                <hr className="border border-neutral-40 w-full my-8" />

                {/* Copyright & Social Media Icons */}
                <div className="flex items-center justify-between">
                    <p className="text-gray-35 leading-5">©2025 Website Name. All rights reserved</p>
                    <div className="flex items-center gap-4">
                        <a href="" target="_blank">
                            <img src={ICONS.linkedin} alt="linkedin" className="size-5" />
                        </a>
                        <a href="" target="_blank">
                            <img src={ICONS.instagram} alt="instagram" className="size-5" />
                        </a>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;