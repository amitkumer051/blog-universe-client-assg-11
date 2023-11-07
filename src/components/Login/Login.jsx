import { Button, Label, TextInput } from 'flowbite-react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { AiFillGoogleCircle } from 'react-icons/ai';


const Login = () => {
    const { loginUser,signInWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = { email, password };
        console.log(user);

        loginUser(email, password)
            .then(result => {
                console.log(result);
                Swal.fire('Login Successfull')
                form.reset();
                navigate(location?.state ? location.state : '/')
            })
            .then(error => {
                console.log(error);
                Swal.fire(error?.message)
                form.reset();
            })
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result?.user);
            })
            .catch(error => console.error(error))
    }

    return (
        <div className='m-10'>
            <form onSubmit={handleLogin} className="flex max-w-xl  rounded-xl mx-auto p-10 bg-red-100 flex-col gap-4">
                <h2 className='text-center font-bold text-amber-600 text-3xl'>Please Login</h2>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email" value="Your email" />
                    </div>
                    <TextInput id="email" type="email" name='email' placeholder="email" required shadow />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password" value="Your password" />
                    </div>
                    <TextInput id="password" type="password" name='password' placeholder="password" required shadow />
                </div>
                <Button gradientDuoTone="greenToBlue" type="submit">Login</Button>
                <div className="text-center">
                    <h2>Do not have an account? Please <Link to='/register'><span className="text-blue-700 font-semibold underline">Register</span></Link></h2>
                </div>
                <div className='mx-auto'>
                    <Button  onClick={handleGoogleSignIn} gradientMonochrome="purple"><AiFillGoogleCircle className='text-2xl mr-1'></AiFillGoogleCircle>Sign In with Google</Button>
                </div>
            </form>
        </div>
    );
};

export default Login;