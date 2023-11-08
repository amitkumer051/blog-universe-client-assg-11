/* eslint-disable react/prop-types */
import { Button, Card } from 'flowbite-react';
import { Link } from 'react-router-dom';

const WishListCard = ({ wishList }) => {
    const { _id, title, photo, category, shortDes } = wishList;
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
                    <Link to={`/wistListDetails/${_id}`}> <Button gradientMonochrome="info">Details</Button></Link>
                    <Button outline gradientMonochrome="failure">Remove Wish List</Button>
                </div>
            </Card>
        </div>
    );
};

export default WishListCard;