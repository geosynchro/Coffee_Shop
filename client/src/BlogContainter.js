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
        <div className="w-1/2" >
            {blogsToDisplay}
        </div>
    )
}

export default BlogContainer