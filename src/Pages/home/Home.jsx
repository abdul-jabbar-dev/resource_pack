import { useState } from "react";
import SearchbarHome from "../../Components/Home/Searchbar.home";
import Courses from "../courses/Courses";
import { useGetCoursBySearchQuery} from "../../Redux/Api/course.api";
import Loading from "../../Components/Loading";


const Home = () => {
    const [count, setCount] = useState(6)
    const [searchString, setSearchString] = useState('')
    const { data, isLoading } = useGetCoursBySearchQuery({ searchString, count })
    console.log(data)
    return (
        <div>
            <SearchbarHome setSearchString={setSearchString} />
            {
                  isLoading ? <Loading /> : <><Courses courses={data}  ></Courses>
                    {searchString.length < 1&&(count <= data?.total)&& <button className="mx-auto hover:bg-gray-800 hover:text-white block border-gray-400 border mt-16 px-3 py-1 rounded-md " onClick={() => setCount(count + 6)}>
                        NEXT
                    </button>}</>}
        </div>
    );
}

export default Home;
