
import { Link, useLoaderData, useParams } from "react-router-dom";
import { Button } from 'flowbite-react';
import { HiOutlineArrowLeft } from 'react-icons/hi';


const ViewDetails = () => {
    const blogs = useLoaderData();
    const { id } = useParams();
    const blogsData = blogs?.find(blog => blog._id == id);
    console.log(blogsData);
    return (
        <div className="p-5 space-y-4 shadow-2xl">
            <>
                <img className="w-full h-[500px]" src={blogsData?.photo} alt="photo" />
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {blogsData?.title}
                </h5>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <span className="text-2xl font-bold">Category: </span> {blogsData?.category}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    <span className="text-xl font-bold">Short Description: </span> {blogsData?.shortDes}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    <span className="text-xl font-bold">Long Description: </span> {blogsData?.longDes}
                </p>
                <div className="flex justify-between">
                    <Link to='/'>
                        <Button>
                            <HiOutlineArrowLeft className="ml-2 h-5 w-5" />
                        </Button></Link>
                    <Button gradientDuoTone="pinkToOrange">Update</Button>
                </div>
            </>
        </div>
    );
};

export default ViewDetails;