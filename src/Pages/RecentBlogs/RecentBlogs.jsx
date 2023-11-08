import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

const FeaturedBlogs = () => {
    const [blogs, setBlogs] = useState()
    
    useEffect(() => {
        fetch('http://localhost:5000/addBlog')
            .then(res => res.json())
            .then(data => {
                const silceData = data.slice(0,6);
                setBlogs(silceData)
            })
    }, [setBlogs])
    return (
        <div>
            <h2 className="text-3xl font-bold text-center text-amber-600 mt-8">Recent Blogs</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-6">
                {
                    blogs?.map(blog => <BlogCard key={blog._id} blog={blog}></BlogCard>)
                }
            </div>
        </div>
    );
};

export default FeaturedBlogs;