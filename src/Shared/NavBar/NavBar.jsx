import { Avatar, Button, Navbar } from 'flowbite-react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log(user?.photoURL);
    const handleSignOut = () => {
        logOut()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => console.error(error))
    }

    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/addBlog'>Add Blog</Link></li>
        <li><Link to='/allBlogs'>All Blogs</Link></li>
        <li><Link to='/featuredBlog'>Featured Blog</Link></li>
        <li><Link to='/wishlist'>Wishlist</Link></li>
    </>
    return (
        <div>
            <Navbar fluid rounded>
                <div className='flex'>
                    <img src="https://i.ibb.co/FD0qMg8/B-removebg-preview.png" className="mr-3 h-16 sm:h-16" alt=" Logo" />
                    <span className="self-center text-amber-500 whitespace-nowrap text-4xl font-bold dark:text-white">Blog Universe</span>
                </div>
                <div className="flex md:order-2 gap-2 items-center">
                    {user ? <><><h2 className="pr-1">{user.displayName}</h2><div className=" mr-1">
                        <div className="flex flex-wrap gap-1">
                            <Avatar img={user?.photoURL} className='h-4' bordered rounded/>
                        </div>
                    </div></><Button onClick={handleSignOut} gradientDuoTone="tealToLime">Log Out</Button></> :
                        <><Link to='/login'><Button className='text-red-600 rounded-full font-semibold' gradientDuoTone="tealToLime">Login</Button></Link><Link to='/register'><Button className='text-red-600 rounded-full font-semibold' gradientDuoTone="tealToLime">Register</Button></Link><Navbar.Toggle /></>
                    }
                </div>
                <Navbar.Collapse className='text-amber-700'>
                    {navItems}
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;