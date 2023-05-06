
import { Link } from "react-router-dom";
import { useGetCourseQuery, useDeleteACourseMutation } from "../../../../Redux/Api/course.api";
import ConfirmModal from "../../../../Components/Dashboard/ConfirmModal";
const AllCourse = () => {
    const { "0": deleteMutation, "1": { isLoading: deleteIsLoading, originalArgs } } = useDeleteACourseMutation()
    const { data, isSuccess } = useGetCourseQuery()

    return (
        <div className="">
            <div className="flex items-center mt-4 gap-3 ">

                <Link to={'create'} className="flex items-center w-8/12 justify-center gap-x-3 tracking-[.20em] ml-auto text-sm border text-gray-800 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 font-light rounded-lg py-2.5 duration-300 transition-colors focus:outline-none">
                    CREATE
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth=".5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3" />
                    </svg>
                </Link>

                <div className="relative w-4/12 border py-2 rounded-md">
                    <input type="text" className=" h-full outline-none pr-12 pl-3 w-full" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth=".8" stroke="currentColor" className="w-6 absolute top-2 right-3 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </div>
            </div>

            <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md  mt-2">
                <table className="w-full border-collapse bg-white text-left text-sm text-gray-500"><thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Name</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">State</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Courses</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Tages</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                        </th>
                    </tr>
                </thead>
                    <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                        {isSuccess && data.map((item, i) =>
                            <tr key={i} className="hover:bg-gray-50">
                                <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                                    <div className="relative h-10 w-10">
                                        <img className="h-full w-full rounded-md object-cover object-center" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                    </div>
                                    <div className="text-sm">
                                        <div className="font-medium text-gray-700">{item.name}</div>
                                        <div className="text-gray-400">{item.description}</div>
                                    </div>
                                </th>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center gap-1 rounded-md bg-green-50 px-2 py-1 text-xs font-semibold text-green-600" >
                                        <span className="h-1.5 w-1.5 rounded-md bg-green-600"></span>
                                        Active
                                    </span>
                                </td>
                                <td className="px-6 py-4">Product Designer</td>
                                <td className="px-6 py-4">
                                    <div className="flex gap-2">

                                        <span className="inline-flex items-center gap-1 rounded-md bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600" >  Design </span>

                                    </div>
                                </td>
                                <td className="px-6 py-4">

                                    <div className="flex justify-end gap-4">
                                        <ConfirmModal
                                            key={i + item._id }
                                            editOption={[item, deleteMutation, deleteIsLoading, originalArgs]} />
                                        <ConfirmModal
                                            key={i+item._id}
                                            deleteOption={[item]}
                                        />


                                    </div>
                                </td>
                            </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AllCourse;
