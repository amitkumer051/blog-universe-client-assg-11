import { Button, Label, TextInput } from 'flowbite-react';
import Swal from 'sweetalert2';

const NewsLetter = () => {

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const user = { email };
        console.log(user);
        Swal.fire('Thank you for subscribing to our newsletter')
        form.reset();
    }
    return (
        <div className='m-10'>
             <h2 className="text-3xl font-bold text-center text-amber-600">News Letter</h2>
            <form onSubmit={handleLogin} className="flex max-w-xl  rounded-xl mx-auto p-10 flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email" value="Email" />
                    </div>
                    <TextInput id="email" type="email" name='email' placeholder="example@gmail.com" required shadow />
                </div>
                <Button gradientDuoTone="tealToLime" type="submit">Submit</Button>
            </form>
        </div>
    );
};

export default NewsLetter;