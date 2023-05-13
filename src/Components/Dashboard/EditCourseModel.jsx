import { useState } from "react";
import { useForm } from "react-hook-form";
import getFormData from "../../utils/objectToFormData";
import { useUpdateCourseMutation } from "../../Redux/Api/course.api";
import Alert from "../Alert";


const EditCourseModel = ({ item, deleteMutation, fromSD = false }) => {
    const [open, setOpen] = useState(false)
    const { register, handleSubmit } = useForm();
    const { "0": courseUpdateMutation, "1": { isLoading: uCIsLoading, isSuccess: uCIsSuccess } } = useUpdateCourseMutation()
    const [allTags, setAllTags] = useState([])





    const onSubmit = (data) => {
        if (data?.thumbnail[0]) {
            data.thumbnail = data?.thumbnail[0]
        } else {
            data.thumbnail = item?.thumbnail
        }
        courseUpdateMutation({ courseId: item._id, data: getFormData(data) })
    };

    const addTagsInPress = (value) => {

        if (allTags.find(i => i === value)) {
            return
        } else {
            setAllTags([...allTags, value])
        }
    }
    return (
        <div>
            {fromSD ? <div
                onClick={() => setOpen(true)}
                className="w-full flex flex-col  p-3 pl-4 items-start bg-white hover:bg-gray-300 rounded-lg cursor-pointer">
                <div className="font-semibold text-sm">{item.name}</div>
            </div>
                :
                <button onClick={() => setOpen(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6  hover:text-orange-500 active:scale-110 selection:scale-100">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                    </svg>
                </button>}

            {open ? <div className="z-40 absolute inset-0 flex min-h-screen mx-auto flex-col items-center justify-center  ">
                <div className="fixed inset-0 blur-3xl drop-shadow-2xl bg-white bg-opacity-50  transition-opacity"></div>

                <div className="fixed inset-0  overflow-y-auto">
                    <div className="flex mx-auto min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 xl:max-w-[1200px] lg:max-w-[800px] md:max-w-[700px] ">
                        <div className="relative transform  rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full " >
                            <div className="p-4 sm:p-10 text-center overflow-y-auto">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="grid gap-6 mb-6 sm:grid-cols-3">
                                        <div className="sm:col-span-2">
                                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                                            <input defaultValue={item?.name} {...register("name", { required: true })} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Cse" required />
                                        </div>
                                        <div className=" col-span-full sm:col-span-1">
                                            <label htmlFor="language" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Language</label>
                                            <input defaultValue={item?.language}  {...register("language", { required: true })} type="text" name="language" id="language" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="English" required />
                                        </div>

                                    </div>
                                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                                        <div>
                                            <label htmlFor="rating" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Rating</label>
                                            <input defaultValue={item?.rating} {...register("rating", { required: true })} type="number" name="rating" id="rating" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="5" max={5} min={0} required />
                                        </div>
                                        <div>
                                            <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Category</label>
                                            <input defaultValue={item?.category}   {...register("category", { required: true })} type="text" name="category" id="rating" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Cse" required />
                                        </div>
                                    </div>
                                    <div className="grid gap-6 mb-6 md:grid-cols-3">
                                        <div>
                                            <label htmlFor="createat" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Create At</label>
                                            <input defaultValue={item?.create_at}  {...register("create_at", { required: true })} type="text" name="create_at" id="createat" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mr. Doe" required />
                                        </div>
                                        <div>
                                            <label htmlFor="duration" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Total course duration </label>
                                            <input defaultValue={item?.duration}   {...register("duration", { required: true })} type="text" name="duration" id="duration" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="5h" required />
                                        </div>
                                        <div>
                                            <label htmlFor="total_lectures" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Total course lectures </label>
                                            <input defaultValue={item?.total_lectures}  {...register("total_lectures", { required: true })} type="text" name="total_lectures" id="total_lectures" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="20" required />
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Course Description</label>
                                        <textarea defaultValue={item?.description} {...register("description", { required: true })} name="description" id="Description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@rating.com" required />
                                    </div>

                                    <div className="mb-6">
                                        <label htmlFor="requirements" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Requirements</label>
                                        <textarea defaultValue={item?.requirements} {...register("requirements", { required: true })} name="requirements" id="requirements" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                    </div>
                                    <div className="grid gap-6 mb-6 md:grid-cols-3">
                                        <div className="col-span-1">

                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="thumbnail">Upload file</label>

                                            <div className="flex w-full  ">
                                                <img className="w-32  " src={"http://localhost:4000/" + item.thumbnail} alt={item.name} />
                                                <input multiple={false}  {...register("thumbnail")} name="thumbnail"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="thumbnail" type="file" />
                                            </div>
                                        </div>
                                        <div className="col-span-2 ">
                                            <div className=" ">
                                                <label htmlFor="tags" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Add tags</label>
                                                <div className="relative ">
                                                    <input
                                                        type="text" name="tags" id="tags"
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        placeholder="Add Tags" />
                                                    <button onClick={e => addTagsInPress(e.target.previousElementSibling.value)} className="absolute right-0 top-0 text-white rounded-md py-3 px-4 bg-orange-500">Add</button>
                                                </div>
                                            </div>
                                            <div className="w-full min-h-[130px] rounded-md bg-slate-300">
                                                {
                                                    allTags.map(ite=><li key={ite}>{ite}</li>)
                                                }
                                            </div>
                                        </div>

                                    </div>
                                    <div className="mt-6 flex justify-center gap-x-4">
                                        {uCIsLoading ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 animate-spin">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                                        </svg> : <button type="submit" className="py-2.5 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-red-600 text-white shadow-sm align-middle hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red focus:ring-red-600 transition-all text-sm">Update</button>
                                        }
                                        {uCIsSuccess && <Alert title="Successful process" massage="Course update successfully completed"></Alert>}
                                        <button type="button" onClick={() => setOpen(false)} className="py-2.5 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"> Cancel </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div> : null}
        </div>
    );
}
export default EditCourseModel;
