import { useState } from "react";
const DeleteCourseModal = ({ item, deleteMutation, deleteIsLoading, originalArgs }) => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            {(deleteIsLoading && (item?._id === originalArgs) ?
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 animate-spin">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
                : <button onClick={() => setOpen(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6 hover:text-orange-500 active:scale-110 selection:scale-100" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                </button>)

            }
            {open ? <div className="z-40 absolute inset-0 flex min-h-screen mx-auto flex-col items-center justify-center  ">
                <div className="fixed inset-0 blur-3xl drop-shadow-2xl bg-white bg-opacity-50  transition-opacity"></div>

                <div className="fixed overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg" >
                            <div className="p-4 sm:p-10 text-center overflow-y-auto">
                                {/* <DeleteModalInfo key={item._id} course={item} deleteMutation={deleteMutation} setOpen={setOpen} /> */}
                                <div>
                                    {/* <!-- Icon --> */}
                                    <span className="mb-4 inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-yellow-50 bg-yellow-100 text-yellow-500">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                                        </svg>
                                    </span>
                                    {/* <!-- End Icon --> */}

                                    <h3 className="mb-2 text-2xl font-bold text-gray-800">
                                        Let&#39;s Delete
                                    </h3>
                                    <p className="text-gray-500">
                                        Are you sure you would like to delete <b>{item?.name} ?</b>
                                    </p>

                                    <div className="mt-6 flex justify-center gap-x-4">
                                        <a className="py-2.5 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-red-600 text-white shadow-sm align-middle hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red focus:ring-red-600 transition-all text-sm"
                                            onClick={() => { deleteMutation(item?._id); setOpen(false) }}  >
                                            Delete
                                        </a>
                                        <button type="button" onClick={() => setOpen(false)} className="py-2.5 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm">
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div> : null}
        </div>
    );
}

export default DeleteCourseModal;
