import SearchbarHome from "../../Components/Home/Searchbar.home";
import { useGetCourseQuery } from "../../Redux/Api/course.api";
import Courses from "../courses/Courses";


const Home = () => {
    const { data } = useGetCourseQuery()
    return (
        <div>
            <SearchbarHome />
            <Courses courses={data}></Courses>
        </div>
    );
}

export default Home;
