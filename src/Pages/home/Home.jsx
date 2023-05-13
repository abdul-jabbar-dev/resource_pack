import { useState } from "react";
import SearchbarHome from "../../Components/Home/Searchbar.home";
import Courses from "../courses/Courses";
import { useGetCourseQuery } from "../../Redux/Api/course.api";


const Home = () => {
    const { data } = useGetCourseQuery()
    const [searchString, setSearchString] = useState('')  
    return (
        <div>
            <SearchbarHome item={searchString} setSearchString={setSearchString} />
            <Courses courses={data} searchWord={searchString}></Courses>
        </div>
    );
}

export default Home;
