import About from "../../About/About";
import FeaturedBlogs from "../../FeaturedBlogs/FeaturedBlogs";
import NewsLetter from "../../NewsLetter/NewsLetter";
import Banner from "../Banner/Banner";


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <FeaturedBlogs></FeaturedBlogs>
          <NewsLetter></NewsLetter>
          <About></About>
        </div>
    );
};

export default Home;