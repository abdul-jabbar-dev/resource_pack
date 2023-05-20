import { useState } from "react";
import SearchbarHome from "../../Components/Home/Searchbar.home";
import Courses from "../courses/Courses";
import { useGetCourseQuery } from "../../Redux/Api/course.api";
import Loading from "../../Components/Loading";


const Home = () => {
    const [count, setCount] = useState(4)
    const { data, isLoading } = useGetCourseQuery(count)
    const [searchString, setSearchString] = useState('') 
    return (
        <div>
            <SearchbarHome item={searchString} setSearchString={setSearchString} />
            {
                isLoading ? <Loading /> : <><Courses courses={data} searchWord={searchString} setCount={setCount}></Courses>
                    {(count <= data?.total) && <button className="mx-auto block border-gray-400 border px-3 py-1 rounded-md " onClick={() => setCount(count + 4)}>
                        NEXT
                    </button>}</>} 
        </div>
    );
}

export default Home;
