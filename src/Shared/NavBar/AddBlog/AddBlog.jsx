import { Button, Label, TextInput } from 'flowbite-react';

const AddBlog = () => {
    return (
        <div className='bg-red-200 my-10  max-w-3xl mx-auto rounded-lg'>
            <form className="flex  flex-col gap-4 p-10">
                <h2 className='text-2xl font-bold text-center mb-3'>Add Blog</h2>
                <div className='grid grid-cols-2 gap-5 '>
                    <div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="Title" value="Blog Title" />
                            </div>
                            <TextInput id="Title" type="Title" placeholder="Blog Title" required shadow />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="image" value="Blog Image" />
                            </div>
                            <TextInput id="image" placeholder="image URL" required shadow />
                        </div>
                        <div>
                            <div className="mb-2 block py-3">
                                <Label htmlFor="Category" value="Blog Category" />
                                <select name="Category" id="">
                                    <option value="">Travel</option>
                                    <option value="">Education</option>
                                    <option value="">Technology</option>
                                    <option value="">Fashion</option>
                                    <option value="">Fitness And Health</option>
                                    <option value="">Food And Cooking</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="Description" value="Short Description" />
                            </div>
                            <TextInput id="Description" type="Description" placeholder="Description" required shadow />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="Description" value="Long Description" />
                            </div>
                            <textarea name="" id="" placeholder="Description" cols="39" rows="3"></textarea>
                        </div>
                    </div>
                </div>
                <Button type="submit">Submit</Button>
            </form>
        </div>
    );
};

export default AddBlog;