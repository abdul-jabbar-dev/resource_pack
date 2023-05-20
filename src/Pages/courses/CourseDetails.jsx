
import { useParams } from 'react-router-dom';
import { useGetASingleCourseQuery } from '../../Redux/Api/course.api';
import Loading from '../../Components/Loading';

const CourseDetails = () => {
    const params = useParams()
    const { data, isLoading } = useGetASingleCourseQuery(params.id)
    console.log(data)
    if (isLoading) return <Loading></Loading>
    return (
        <div className=''>

            <div className='flex gap-x-3 lg:flex-row flex-col'>
                <div className='md:w-2/5 w-full '>
                    <img className='max-h-[40rem]' src={"http://resoursehack.api.abduljabbardev.xyz/" + data?.thumbnail} alt={data?.name} />
                </div>

                <div className='md:w-3/5 w-full'>
                    <div>
                        <h2 className='text-3xl'>{data?.name}</h2>
                    </div>
                    <div className='flex md:block gap-x-4 justify-center my-3 md:my-0 '>
                        <div>
                            <div className='my-3'>
                                <h2 className='text-xl  inline' >Category: </h2>
                                <p className='text-lg inline font-semibold'>{data?.category}</p>
                            </div>
                            <div className='my-3'>
                                <h2 className='text-xl  inline' >rating: </h2>
                                <p className='text-lg inline font-semibold'>{data?.rating}</p>
                            </div>
                            <div className='my-3'>
                                <h2 className='text-xl  inline' >create_at: </h2>
                                <p className='text-lg inline font-semibold'>{data?.create_at}</p>
                            </div>
                        </div>

                        <div className=' '>
                            <div className='my-3'>
                                <h2 className='text-xl  inline' >language: </h2>
                                <p className='text-lg inline font-semibold'>{data?.language}</p>
                            </div>
                            <div className='my-3'>
                                <h2 className='text-xl  inline' >duration: </h2>
                                <p className='text-lg inline font-semibold'>{data?.duration}</p>
                            </div>
                            <div className='my-3'>
                                <h2 className='text-xl  inline' >total_lectures: </h2>
                                <p className='text-lg inline font-semibold'>{data?.total_lectures}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='my-8'>
                <h2 className='text-xl  font-semibold border-slate-300 border p-3 rounded-md' >Links:

                    {
                        (data.courseLink).filter(sl => sl.length > 0).map((sLink, i) => <a key={i} target='_blank' href={sLink} className=' text-blue-950 text-md hover:underline font-normal inline' rel="noreferrer"> Click here to download </a>)
                    }

                </h2>

            </div>
            <div className='my-8'>
                <h2 className='text-xl  font-semibold border-slate-300 border p-3 rounded-md' >Requirements: </h2>
                <p className='text-lg p-6'>{data.requirements}</p>
            </div>
            <div className='my-8'>
                <h2 className='text-xl  font-semibold border-slate-300 border p-3 rounded-md' >Description: </h2>
                <p className='text-lg p-6'>{data.description}</p>
            </div>


        </div>
    );
}

export default CourseDetails;
