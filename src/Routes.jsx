import Courses from "./Pages/courses/Courses";
import Home from "./Pages/home/Home";
import RootLayout from "./RootLayout";
import DashNav from "./auth/Dashboard/DashNav";
import Dashboard from "./auth/dashboard/Dashboard";

const Routes = () => {
    return [
        {
            path: "/",
            element: (<RootLayout />),
            children: [
                {
                    path: "",
                    element: (<Home />),
                }, {
                    path: "/courses",
                    element: (<Courses />),
                },
            ]
        },
        {
            path: "/dashboard",
            element: (<DashNav />),
            children: [
                {
                    path: "",
                    element: (<Dashboard />),
                },
            ]

        }
    ]
}

export default Routes;

