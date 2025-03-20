import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Dashboard/Sidebar/Sidebar";
import DashboardHeader from "../../components/Dashboard/DashboardHeader/DashboardHeader";

const DashboardLayout = () => {
    return (
        <div className="flex">
            <Sidebar/>
            <div>
            <DashboardHeader/>
            <Outlet/>
            </div>
        </div>
    );
};

export default DashboardLayout;