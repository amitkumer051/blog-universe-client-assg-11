
const Banner = () => {
    return (
        <div>
            <div className="relative h-[500px]">
            <img className="h-[500px] w-full " src="https://i.ibb.co/Jc2cnLR/original-banner-blog.jpg" alt="banner" />
            <div className="absolute inset-0 bg-gray-900  h-[500px] bg-opacity-70"></div>
            <div className="absolute top-0.5 left-0.5 lg:h-[500px] space-y-4 text-center w-full mx-auto mt-36 ">
                <h2 className="text-5xl font-bold text-white">Where will you go next?</h2>
                <h2 className="text-xl font-semibold text-white">Welcome to our blog where we delve into <br />the exciting world  content creation.</h2>
            </div>
        </div>
        </div>
    );
};

export default Banner;