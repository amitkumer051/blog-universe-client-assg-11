import { Button, Label, TextInput } from 'flowbite-react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
    const { registerUser } = useContext(AuthContext)
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const displayName = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const user = { displayName, photo, email, password };
        console.log(user);

        if (password.length < 6) {
            Swal.fire('Password should be at least 6 Characters')
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            Swal.fire('Your Password need one Upper Case Characters.')
            return;
        }
        else if (!/[#$%&?]/.test(password)) {
            Swal.fire('Your Password need one Special Characters.')
            return;
        }

        registerUser(email, password, displayName, photo)
            .then(result => {
                console.log(result.user);
                Swal.fire('Registration Successfull')
                form.reset();
            })
            .then(error => {
                console.log(error);
                return Swal.fire(error.message);
            })
    }
    return (
        <div className='m-10'>
            <form onSubmit={handleRegister} className="flex max-w-xl  rounded-xl mx-auto p-10 bg-red-100 flex-col gap-4">
                <h2 className=' text-amber-600 text-center font-bold text-3xl'>Please Register</h2>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="Name" value="Name" />
                    </div>
                    <TextInput id="Name" type="name" name='name' placeholder="Name" required shadow />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="Photo URL" value="Photo URL" />
                    </div>
                    <TextInput id="Photo Url" type="photo url" name='photo' placeholder="Photo URL" required shadow />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email" value="Your email" />
                    </div>
                    <TextInput id="email" type="email" name='email' placeholder="email" required shadow />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password2" value="Your password" />
                    </div>
                    <TextInput id="password2" type="password" name='password' placeholder="password" required shadow />
                </div>
                <Button gradientDuoTone="purpleToBlue" type="submit">Register new account</Button>
                <div className="text-center">
                    <h2>Already have an account? Please <Link to='/login'><span className="text-blue-700 font-semibold underline">Login</span></Link></h2>
                </div>
            </form>
        </div>
    );
};

export default Register;