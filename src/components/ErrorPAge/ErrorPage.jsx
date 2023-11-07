import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from 'react-icons/hi';

const ErrorPage = () => {
    return (
        <div>
            <Link to='/'> <Button outline>
                <HiOutlineArrowLeft className="h-6 w-6" />
            </Button></Link>
            <img className="md:w-full md:h-[460px]" src="https://i.ibb.co/tPPyzBr/404-page.jpg" alt="Error Page" />
        </div>
    );
};

export default ErrorPage;