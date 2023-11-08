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
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-6">
                {
                    allBlogs?.map(allBlog => <AllBlogCard key={allBlog._id} allBlog={allBlog}></AllBlogCard>)
                }
            </div>
        </div>
    );
};

export default AllBlogs;