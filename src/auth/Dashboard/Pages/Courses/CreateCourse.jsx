import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { usePostCourseMutation } from "../../../../Redux/Api/course.api";
import getFormData from "../../../../utils/objectToFormData"; 
import Loading from "../../../../Components/Loading";
import { useRef, useState } from "react";
import Alert from "../../../../Components/Alert";
const CreateCourse = () => {
    const linksInput = useRef(null);
    const tagsInput = useRef(null);
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm();
    const { "0": courseMutation, "1": courseMutationState } = usePostCourseMutation()
    const { isError, isLoading, isSuccess, error } = courseMutationState
    const [allLinks, setAllLinks] = useState([])
    const [alltags, setAlltags] = useState([])
    const onSubmit = (data) => {
        courseMutation(getFormData({ ...data, courseLink: allLinks, tags: alltags, thumbnail: data.thumbnail[0] }))
        console.log({ ...data, courseLink: allLinks, tags: alltags, thumbnail: data.thumbnail[0] })
    };

    const getLinks = () => {
        if ((linksInput.current.value).length > 1) {
            setAllLinks([...allLinks, linksInput.current.value])
        }
    }
    const getTags = () => {
        if ((tagsInput.current.value).length > 1) {
            setAlltags([...alltags, tagsInput.current.value])
        }
    }
    let alerts;
    if (isLoading) {
        return <Loading></Loading>
    }
    if (isSuccess) {
        alerts = <Alert title={"Successfully post"} massage={"Course create successfully"}></Alert>
    }
    if (isError) {
        alerts = <Alert title={"Unsuccessfully post"} massage={error?.message}></Alert>
    }
    return (
        <div>
            {(true || isError) && alerts}
            <div className="w-full mx-auto bg-white  ">
                <button
                    onClick={() => navigate('/dashboard/courses')}
                    className=" flex mt-4 gap-2 items-center text-center tracking-[.20em]  px-5 text-sm border  mb-3 text-gray-800 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 font-light rounded-md py-2.5 duration-300 transition-colors focus:outline-none"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth=".6" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                    </svg>
                    CREATE
                </button>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid gap-6 mb-6 lg:grid-cols-2">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                            <input {...register("name", { required: true })} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Cse" required />
                        </div>
                        <div>
                            <label htmlFor="language" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Language</label>
                            <input {...register("language", { required: true })} type="text" name="language" id="language" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="English" required />
                        </div>
                        <div>
                            <label htmlFor="rating" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Rating</label>
                            <input {...register("rating", { required: true })} type="number" name="rating" id="rating" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="5" max={5} min={0} required />
                        </div>
                        <div>
                            <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Category</label>
                            <input {...register("category", { required: true })} type="text" name="category" id="rating" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Cse" required />
                        </div>
                        <div>
                            <label htmlFor="createat" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Create At</label>
                            <input {...register("create_at", { required: true })} type="text" name="create_at" id="createat" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mr. Doe" required />
                        </div>
                        <div>
                            <label htmlFor="duration" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Total course duration </label>
                            <input {...register("duration",)} type="text" name="duration" id="duration" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="5h" required />
                        </div>
                        <div>
                            <label htmlFor="total_lectures" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Total course lectures </label>
                            <input {...register("total_lectures")} type="text" name="total_lectures" id="total_lectures" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="25" />
                        </div>
                        <div>
                            <label htmlFor="tags" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Add tags </label>
                            <input ref={tagsInput} type="text" name="tags" id="tags" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" Add tags" />
                            <div onClick={getTags} className="  rounded px-2 text-white cursor-pointer w-6 h-8 bg-orange-700 inline" >Add Tags</div>
                            {
                                alltags.map((aTag, i) => <li key={i} className="flex">{aTag}
                                    <svg onClick={() => setAlltags(alltags.filter(olL => olL !== aTag))} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </li>)
                            }
                        </div>

                    </div>
                    <div className="my-9 border py-3 px-2 rounded-lg">
                        <p className="font-semibold uppercase">Links</p>
                        <div className="my-2">
                            <label htmlFor="courseMainLink" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Main Course Link</label>
                            <input {...register("courseMainLink",)} type="text" name="courseMainLink" id="courseMainLink" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Course sourse link" />
                        </div>
                        <div className="my-2">
                            <label htmlFor="courseLink" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Free Course Link</label>

                            <input type="text" name="courseLink" id="courseLink" className="bg-gray-50 border mb-1 border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Free course link" ref={linksInput} />

                            <div onClick={getLinks} className="  rounded px-2 text-white cursor-pointer w-6 h-8 bg-orange-700 inline" >Add</div>
                            {
                                allLinks.map((aLinks, i) => <li key={i} className="flex">{aLinks}
                                    <svg onClick={() => setAllLinks(allLinks.filter(olL => olL !== aLinks))} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </li>)
                            }
                        </div>


                    </div>
                    <div className="mb-6">
                        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Course Description</label>
                        <textarea {...register("description", { required: true })} name="description" id="Description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@rating.com" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="requirements" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Requirements</label>
                        <textarea  {...register("requirements", { required: true })} name="requirements" id="requirements" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div>

                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="thumbnail">Upload file</label>
                        <input multiple={false} {...register("thumbnail", { required: true })} name="thumbnail" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required id="thumbnail" type="file" />

                    </div>
                    {isLoading ? <div className="w-6 h-6  rounded-3xl animate-spin  border-x-2"></div> : <button type="submit" className="mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    }
                </form>

            </div>
        </div>
    );
}

export default CreateCourse;
