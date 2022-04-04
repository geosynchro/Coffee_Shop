import { useEffect , useState} from "react"
import BlogTitleCards from "./BlogTitleCards"

function BlogContainer({viewBlogPage}){
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('/blogs')
        .then((res) => res.json())
        .then(setBlogs)
    }, [])
    

    const blogsToDisplay = blogs.map(blog => <BlogTitleCards key={blog.id} id={blog.id} user={blog.user} title={blog.title} viewBlogPage={viewBlogPage}/>)


    return(
        <div>

        <div className="flex justify-center bg-coffee7 bg-auto h-screen overflow-auto">   
            <div className=" justify-center w-1/3 mt-6" >
                <h1 className="text-center mt-2 mb-6 font-lobster text-3xl">The Coffee Supply Blog</h1>
                {blogsToDisplay}
            </div>
        </div>

            <footer className="bg-amber-500 text-center lg:text-left ">
                <div className="text-gray-700 text-center p-4">
                    © 2022 Copyright:
                    <a className="text-white ml-2 hover:text-amber-700" href="https://nicks-coffee-shop.herokuapp.com/">The Coffee Supply</a>
                    <span className='ml-10'> Developed by Nicholas Fagner</span>
                    <a className="text-white ml-2 hover:text-amber-700" href="https://www.linkedin.com/in/nicholas-fagner/">Linkedin</a>
                    <a className="text-white ml-2 hover:text-amber-700" href="https://github.com/geosynchro">Github</a>
                </div>
            </footer>
        </div>
    )
}

export default BlogContainer