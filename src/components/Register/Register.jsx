import { Button, Label, TextInput } from 'flowbite-react';

const Register = () => {

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const user = {name,photo,email,password};
        console.log(user);
    }

    return (
        <div className='m-10'>
            <form onSubmit={handleRegister} className="flex max-w-xl  rounded-xl mx-auto p-10 bg-red-100 flex-col gap-4">
                <h2 className='text-center font-bold text-3xl'>Please Register</h2>
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
                <Button gradientDuoTone="greenToBlue" type="submit">Register new account</Button>
            </form>
        </div>
    );
};

export default Register;