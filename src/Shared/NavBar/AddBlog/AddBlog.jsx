import { Button, Label, TextInput } from 'flowbite-react';
import { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Provider/AuthProvider';

const AddBlog = () => {
    const {user}=useContext(AuthContext);
    const handleAddBlog = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const photo = form.photo.value;
        const category = form.category.value;
        const userEmail = user?.email;
        const shortDes = form.shortDes.value;
        const longDes = form.longDes.value;

        const blog = { title, photo, category, shortDes, longDes,userEmail}
        console.log(blog);

        fetch('http://localhost:5000/addBlog', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(blog)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Blog Added Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })

    }
    return (
        <div className='bg-red-100 my-10  max-w-3xl mx-auto rounded-lg'>
            <form onSubmit={handleAddBlog} className="flex  flex-col gap-4 p-10">
                <h2 className='text-2xl font-bold text-center mb-3'>Add Blog</h2>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-5 '>
                    <div className='space-y-2'>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="Title" value="Blog Title" />
                            </div>
                            <TextInput id="Title" type="Title" placeholder="Title" name='title' required shadow />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="image" value="Blog Image" />
                            </div>
                            <TextInput id="image" placeholder="image URL" name='photo' required shadow />
                        </div>
                        <div>
                            <div className="mb-2 block py-3 ">
                                <Label htmlFor="Category" value="Blog Category" />
                                <select className='rounded-lg ml-14' name="category">
                                    <option name="category" value="Travel">Travel</option>
                                    <option name="category" value="Education">Education</option>
                                    <option name="category" value="Technology">Technology</option>
                                    <option name="category" value="Fashion">Fashion</option>
                                    <option name="category" value="Fitness And Health">Fitness And Health</option>
                                    <option name="category" value="Food And Cooking">Food And Cooking</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='space-y-2'>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="Description" value="Short Description" />
                            </div>
                            <textarea name="shortDes" id="" placeholder="Description" cols="39" rows="1"></textarea>
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="Description" value="Long Description" />
                            </div>
                            <textarea name="longDes" id="" placeholder="Description" cols="39" rows="3"></textarea>
                        </div>
                    </div>
                </div>
                <Button gradientDuoTone="tealToLime" type="submit">Submit</Button>
            </form>
        </div>
    );
};

export default AddBlog;