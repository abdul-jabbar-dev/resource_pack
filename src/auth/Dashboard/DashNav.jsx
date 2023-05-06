import { NavLink } from "react-router-dom";

const DashNav = () => {
    return (
        <div className="relative h-full">
            <div className="flex text-xl flex-col absolute font-light top-60 left-1/2 transform -translate-x-1/2  ">
                <NavLink end className={({ isActive }) => isActive ? "text-blue-500" : " text-stone-800"} to={''}>Dashboard</NavLink>
                <NavLink className={({ isActive }) => isActive ? "text-blue-500" : " text-stone-800"} to={'courses'}>Courses</NavLink>
            </div>
        </div>
    );
}

export default DashNav;
