// eslint-disable-next-line react/prop-types
const Courses = ({ courses }) => {
    // const courses = [
    //     {
    //         img: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    //         title: "How to use sticky note for problem solving",
    //         descreption: "Comboboxes are the foundation of accessible autocompletes and command palettes for your app, complete with robust support for keyboard navigation.",
    //         postDate: "On: 20 October 2019"
    //     },{
    //         img: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    //         title: "How to use sticky note for problem solving",
    //         descreption: "Comboboxes are the foundation of accessible autocompletes and command palettes for your app, complete with robust support for keyboard navigation.",
    //         postDate: "On: 20 October 2019"
    //     },
    // ]


    return (
        <section className="bg-white  ">
            <div className="container px-6 mx-auto">

                <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
                    {courses?.map((cours, i) => <div key={i} className="lg:flex">
                        <img className="object-cover w-full h-56 rounded-lg lg:w-64" src={"http://localhost:4000/" + cours.thumbnail} alt="" />

                        <div className="flex flex-col justify-between py-6 lg:mx-6">
                            <a href="#" className="text-xl font-semibold text-gray-800 hover:underline ">
                                {cours.name}
                            </a>
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
