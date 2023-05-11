import { Link, NavLink } from "react-router-dom";

const DashNav = () => {
    return (
        <div className="relative h-full">
            <div className="flex text-xl flex-col absolute font-light top-60 left-1/2 transform -translate-x-1/2  ">
                <Link to={'/'} className="flex gap-x-2 border-b-[1px] pb-1 mb-2 border-white hover:border-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth=".8" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    Home</Link>
                <NavLink end className={({ isActive }) => isActive ? "text-blue-500" : " text-stone-800"} to={''}>Dashboard</NavLink>
                <NavLink className={({ isActive }) => isActive ? "text-blue-500" : " text-stone-800"} to={'courses'}>Courses</NavLink>
            </div>
        </div>
    );
}

export default DashNav;
