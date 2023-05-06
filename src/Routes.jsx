import Courses from "./Pages/courses/Courses";
import Home from "./Pages/home/Home";
import RootLayout from "./RootLayout";
import AllCourse from "./auth/Dashboard/Pages/AllCourse";
import CreateCourse from "./auth/Dashboard/Pages/CreateCourse";
import DashLayout from "./auth/Dashboard/Pages/DashLayout";
import Dashboard from "./auth/Dashboard/Pages/Dashboard";

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
            element: (<DashLayout />),
            children: [
                {
                    path: "",
                    element: (<Dashboard />),
                }, {
                    path: "create_course",
                    element: (<CreateCourse />),
                }, {
                    path: "courses",
                    element: (<AllCourse />),
                },
                {
                    path: "courses/create",
                    element: (<CreateCourse />)
                }
            ]

        }
    ]
}

export default Routes;

