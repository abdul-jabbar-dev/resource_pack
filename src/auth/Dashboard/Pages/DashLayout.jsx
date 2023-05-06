import { Outlet } from "react-router-dom";
import DashNav from "../DashNav";

const DashLayout = () => {
    return (
        <div className="container mx-auto">
            <div className="w-full bg-slate-500 h-7">

            </div>
            <div className="flex w-full" >
                <div className="w-1/4  ">
                    <DashNav />
                </div>
                <div className="w-3/4  ">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default DashLayout;
