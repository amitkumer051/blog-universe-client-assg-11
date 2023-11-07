import FeaturedBlogs from "../../FeaturedBlogs/FeaturedBlogs";
import NewsLetter from "../../NewsLetter/NewsLetter";
import Banner from "../Banner/Banner";


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <FeaturedBlogs></FeaturedBlogs>
          <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;