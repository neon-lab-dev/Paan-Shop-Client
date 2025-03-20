import { Link, useLocation } from "react-router-dom";
import { ICONS } from "../../../../public/assets";

const Sidebar: React.FC = () => {
//   const navigate = useNavigate();
  const location = useLocation();

  // Helper function to check if the link is active
  const isActive = (path: string): boolean => location.pathname === path;

  // Objects to store the menus and their links
  const ownerMenus = [
    { name: "Dashboard", link: "/dashboard" },
    { name: "My Profile", link: "/dashboard/my-profile"},
    { name: "My Products", link: "/dashboard/my-products"},
    { name: "Add New Product", link: "/dashboard/add-new-product" },
    // { name: "My Orders", link: "/dashboard/my-orders" },
  ];

  const adminMenus = [
    { name: "Dashboard", link: "/admin/dashboard" },
    { name: "Referrals & Payouts", link: "/admin/referrals-and-payouts" },
    { name: "Registered Users", link: "/admin/registered-users" },
    { name: "Affiliates", link: "/admin/affiliates" },
    { name: "Courses", link: "/admin/courses" },
    { name: "Payouts", link: "/admin/payouts" },
    // { name: "Talent List", link: "/admin/talent-list" },
    { name: "Purchase History", link: "/admin/purchase-history" },
  ];

//   const handleLogout = async () => {
//     try {
//       const response = await fetch(
//         "https://pmgurkulbackend.vercel.app/api/v1/logout"
//       );

//       if (response.ok) {
//         dispatch(logout());
//         toast.success("Logged out successfully.");
//         navigate("/");
//       } else {
//         toast.error("Logout failed");
//       }
//     } catch (err) {
//       toast.error("Failed to log out. Please try again.");
//     }
//   };

  const menus = location.pathname.startsWith("/dashboard/owner") ? ownerMenus : adminMenus;

  return (
    <div className="w-[270px] h-screen px-4 pt-14 pb-6 font-Inter flex flex-col justify-between sticky left-0 top-0 bg-primary-10/5">
      <div>
        <Link to="/" className="flex items-center gap-2 w-full pb-4 mb-2">
          <img src={ICONS.dummyLogo} alt="logo" className="w-40" />
        </Link>
        <div>
          <ul className="flex flex-col gap-2">
            {menus.map((menu) => (
              <li
                key={menu.link}
                className={`px-3 py-2 ${isActive(menu.link)
                  ? "bg-neutral-60 text-primary-10 rounded-lg"
                  : "text-neutral-85"
                  }`}
              >
                <Link to={menu.link}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
        <button className="bg-neutral-60 border border-neutral-55 py-[10px] px-4 text-primary-10 text-sm leading-5 font-semibold w-full rounded-lg text-center flex items-center gap-2 justify-center">
          <img src={ICONS.ai} alt="logout-icon" className="size-[18px]" />
          Logout
        </button>
    </div>
  );
};

export default Sidebar;
