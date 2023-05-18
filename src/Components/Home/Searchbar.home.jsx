
const SearchbarHome = ({ setSearchString }) => {
    const getSearch = (word) => {
        setSearchString(word) 
    }
    return (
        <div>
            <header className="mx-auto max-w-screen-2xl my-6 sm:px-6 lg:px-8">
                <div className='w-full py-3'>

                    <h1 className="text-4xl">Unlock Your Potential with Free Skill Development Courses</h1>

                    <p className="text-2xl mt-6 mb-6 font-extralight lg:w-2/3 xl:w-4/5 text-slate-600 ">Empowering individuals worldwide through accessible and comprehensive free skill development courses to foster personal and professional growth.</p>


                    {/* search bar */}

                    <div className=" relative mx-auto w-1/3 h-min  text-gray-600">

                        <input onChange={e => getSearch(e.target.value)}
                            className=" text-xl border-2 border-gray-300 w-full bg-white  h-14 px-5 pr-16 rounded-full  focus:outline-none"
                            type="search" name="search" placeholder="Search" >
                        </input>

                        <button type="submit" className="absolute right-4 top-0  h-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </button>

                    </div>


                    <div>
                    </div>

                </div>
            </header>
        </div>
    );
}

export default SearchbarHome;
