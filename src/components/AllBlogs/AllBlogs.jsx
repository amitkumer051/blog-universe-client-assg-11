import { useEffect, useState } from "react";
import AllBlogCard from "./AllBlogCard";


const AllBlogs = () => {
    const [allBlogs, setAllBlogs] = useState();
    useEffect(() => {
        fetch('http://localhost:5000/addBlog')
            .then(res => res.json())
            .then(data => setAllBlogs(data))
    }, [])
    return (
        <div>
            <h2 className='text-2xl font-bold text-amber-600 text-center my-6'>All Blogs</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {
                    allBlogs?.map(allBlog => <AllBlogCard key={allBlog._id} allBlog={allBlog}></AllBlogCard>)
                }
            </div>
        </div>
    );
};

export default AllBlogs;