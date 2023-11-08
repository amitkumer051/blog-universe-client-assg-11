import About from "../../About/About";
import FeaturedBlogs from "../../RecentBlogs/RecentBlogs";
import NewsLetter from "../../NewsLetter/NewsLetter";
import Banner from "../Banner/Banner";
import Support from "../../Support/Support";


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <FeaturedBlogs></FeaturedBlogs>
          <NewsLetter></NewsLetter>
          <About></About>
          <Support></Support>
        </div>
    );
};

export default Home;