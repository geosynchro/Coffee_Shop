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
        <div className="flex justify-center bg-coffee7 bg-auto h-screen overflow-auto">   
            <div className=" justify-center w-1/3 mt-6" >
                <h1 className="text-center mt-2 mb-6 font-lobster text-3xl">The Coffee Supply Blog</h1>
                {blogsToDisplay}
            </div>
        </div>
    )
}

export default BlogContainer