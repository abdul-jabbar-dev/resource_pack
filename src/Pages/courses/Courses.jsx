import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types 
const Courses = ({ courses, searchWord }) => {

    const [allCourse, setAllCourse] = useState([])

    useEffect(() => {
        if (searchWord) {
            let searchingCourse = courses.filter(crs => (crs.name).toLowerCase().includes(searchWord.toLowerCase()))
            setAllCourse(searchingCourse)
        } else {
            setAllCourse(courses)
        }
    }, [courses, searchWord]);

    return (
        <section className="bg-white">
            <div className="container px-6 mx-auto">

                <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
                    {allCourse?.map((cours, i) => <div key={i} className="lg:flex">
                        <img className="object-cover w-full h-56 rounded-lg lg:w-64" src={"http://localhost:4000/" + cours.thumbnail} alt={cours.name} />

                        <div className="flex flex-col justify-between py-6 lg:mx-6">
                            <Link to={'course/'+cours._id} className="text-xl font-semibold text-gray-800 hover:underline ">
                                {cours.name}
                            </Link>
                            <div>
                                <h4>
                                    {cours.descreption}
                                </h4>
                            </div>

                            <span className="text-sm text-gray-500">{cours.postDate}</span>
                        </div>
                    </div>)
                    }
                </div>
            </div>
        </section>
    );
}

export default Courses;
