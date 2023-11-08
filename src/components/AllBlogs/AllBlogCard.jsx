/* eslint-disable react/prop-types */
import { Button, Card } from 'flowbite-react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';

const AllBlogCard = ({allBlog}) => {
    const { _id,title, photo, category, shortDes } = allBlog;
    
    const { user } = useContext(AuthContext);
    const handleWishList = e => {
        e.preventDefault();
        const userEmail = user?.email;
        const photo = allBlog?.photo;
        const title = allBlog?.title;
        const category = allBlog?.category;
        const shortDes = allBlog?.shortDes;

        const blogInfo = {userEmail, photo, title, category, shortDes};
        console.log(blogInfo);

        fetch('http://localhost:5000/wishList', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(blogInfo)
        })
            .then(result => result.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Blog Added in Wish List",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    return (
        <div className='mx-auto justify-center'>
        <Card className="max-w-sm h-[520px]" >
            <img className='h-[200px] rounded-lg w-full' src={photo} alt="image 1" />
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                Title: {title}
            </h5>
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                Category: {category}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                {shortDes}
            </p>
            <div className='flex justify-between'>
                <Link to={`/viewDetails/${_id}`}><Button gradientMonochrome="info">Details</Button></Link>
                <Button onClick={handleWishList} outline gradientDuoTone="greenToBlue">Wish List</Button>
            </div>
        </Card>
    </div>
    );
};

export default AllBlogCard;