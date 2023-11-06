import { Button } from 'flowbite-react';
import { HiOutlineArrowRight } from 'react-icons/hi';
const Banner = () => {
    return (
        <div>
            <div className="relative h-[510px]">
                <img className="h-[510px] w-full " src="https://i.ibb.co/Jc2cnLR/original-banner-blog.jpg" alt="banner" />
                <div className="absolute inset-0 bg-gray-900  h-[510px] bg-opacity-70"></div>
                <div className="absolute top-0.5 left-0.5 lg:h-[510px] space-y-4 text-center w-full mx-auto mt-36 ">
                    <h2 className="text-5xl font-bold text-white">Where will you go next?</h2>
                    <h2 className="text-xl font-semibold text-white">Welcome to our blog where we delve into <br />the exciting world  content creation.</h2>
                    <Button gradientDuoTone="greenToBlue" className='text-center mx-auto justify-center'>
                        Lets Explore
                        <HiOutlineArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Banner;