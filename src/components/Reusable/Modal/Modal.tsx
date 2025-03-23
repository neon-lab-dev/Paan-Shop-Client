import { Link } from "react-router-dom";
import { ICONS } from "../../../../public/assets";
import { ReactNode } from "react";

type TPersonalInfoModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
  step?: "personal" | "business";
  setStep?: (step: "personal" | "business") => void;
  children: ReactNode;
  modalType: string;
};

const Modal: React.FC<TPersonalInfoModalProps> = ({
  isModalOpen,
  setIsModalOpen,
  modalType,
  children,
}) => {
  return (
    <div
      className={`${
        isModalOpen ? " visible" : " invisible"
      } w-full h-screen fixed top-0 left-0 z-[200000000] bg-[#0000002a] transition-all duration-300 flex items-center justify-center font-Inter`}
    >
      <div
        className={`${
          isModalOpen ? " scale-[1] opacity-100" : " scale-[0] opacity-0"
        } ${
          modalType === "Video" ? "max-w-[750px]" : "max-w-[550px]"
        } w-full bg-white rounded-2xl transition-all duration-300 mx-auto mt-8 max-h-[590px] 2xl:max-h-[690px] overflow-y-auto`}
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center gap-5">
            {modalType !== "Video" && (
              <Link onClick={() => setIsModalOpen(false)} to={"/"}>
                <img src={ICONS.dummyLogo} alt="logo" className="size-20" />
              </Link>
            )}
            <div className="flex-1">
              <div className="flex items-center justify-between w-full">
                {modalType !== "Video" ? (
                  <h1 className="text-neutral-10 font-bold text-xl">
                    {modalType === "Signup"
                      ? "Signup To Website Name"
                      : modalType === "Login"
                      ? "Login To Your Account"
                      : modalType === "ForgotPassword"
                      ? "Forgot Your Password?"
                      : "Reset Your Password"}
                  </h1>
                ) : (
                  <h1 className="text-neutral-10 font-bold text-xl">
                    Learn how your business will grow with us.
                  </h1>
                )}
                <div className={`flex justify-end`}>
                  <img
                    onClick={() => setIsModalOpen(false)}
                    src={ICONS.cross}
                    alt="cross-icon"
                    className="size-5 cursor-pointer"
                  />
                </div>
              </div>
              {modalType !== "Video" && (
                <p className="text-neutral-10 leading-[25px] mt-1 max-w-[420px] text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing.
                </p>
              )}
            </div>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
