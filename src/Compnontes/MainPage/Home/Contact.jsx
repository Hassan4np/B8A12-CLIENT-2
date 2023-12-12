
import { MdEmail, MdPhone } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import  { useState } from 'react';
import emailjs from 'emailjs-com';
import Swal from "sweetalert2";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        sub:'',
        phone:'',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
console.log(formData)
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.target.name;
        console.log(name)

        emailjs.send('service_2i8r1qo', 'template_balxbyh', formData, 'q5hEQScNdzbQaZxRh',formData)
            .then((response) => {
                console.log('Email sent successfully!', response);
                console.log(response.text)
                if(response.text==='OK'){
                    Swal.fire({
                      position: "top-center",
                      icon: "success",
                      title: "Your info successfully submited",
                      showConfirmButton: false,
                      timer: 1500
                    });
                }
                // Additional logic after successful email submission
            })
            .catch((error) => {
                console.error('Error sending email:', error);
            });
    };
    return (
        <div className=" bg-[#EDF2EE]" id="contact">
            <h1 className='text-5xl font-bold text-center  text-green-300 py-5'>Contact us</h1>
            <div className="lg:flex ">
                <form onSubmit={handleSubmit} className="p-10 w-full lg:w-1/2 flex-1 " data-aos="flip-left">
                    <div className="bg-gradient-to-r  to-green-500 from-green-300 rounded-md p-5">
                        <h1 className="text-center text-2xl font-bold">Feel free to write</h1>
                        <div className="md:flex lg:space-x-4 gap-1">
                            <div className="form-control md:w-1/2 ">
                                <label className="label">
                                    <span className="label-text text-xl lg:text-2xl">Enter Name</span>
                                </label>
                                <label className="input-group ">
                                    <input
                                        type="text"
                                        placeholder="name"
                                        required name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="input input-bordered w-full" />

                                </label>
                            </div>
                            <div className="form-control md:w-1/2 ">
                                <label className="label">
                                    <span className="label-text text-xl lg:text-2xl">Enter email</span>
                                </label>
                                <label className="input-group">
                                    <input
                                        type="emai"
                                        placeholder="Email"
                                        required name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        <div className="md:flex lg:space-x-4 gap-1">
                            <div className="form-control md:w-1/2 ">
                                <label className="label">
                                    <span className="label-text  text-xl lg:text-2xl">Enter Subject</span>
                                </label>
                                <label className="input-group ">
                                    <input
                                        type="text"
                                        placeholder="Subject"
                                        name="sub"
                                        value={formData.sub}
                                        onChange={handleChange}
                                        className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 ">
                                <label className="label">
                                    <span className="label-text text-xl lg:text-2xl">Enter Phone</span>
                                </label>
                                <label className="input-group">
                                    <input
                                        type="text"
                                        placeholder="Phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        <div className="form-control md:full ">
                            <label className="label">
                                <span className="label-text text-xl  lg:text-2xl">Write massage</span>
                            </label>
                            <label className="input-group">
                                <textarea className="textarea textarea-bordered w-full"
                                 name="message"
                                 value={formData.message}
                                 onChange={handleChange}
                                  placeholder="Enter massage"></textarea>
                            </label>
                        </div>
                        <input type="submit" value="Send message" className="w-full mt-5 p-3 rounded-lg font-bold text-xl text-gradient bg-gradient-to-r  from-green-500 to-green-300" />
                    </div>
                </form>
                <div className='flex-1 ' data-aos="flip-right ">
                    <div className=' mt-5   lg:mt-20 justify-center items-center ml-10 '>
                        <h1 className="text-3xl font-bold">Get in touch with us</h1>
                        <div className="mt-5 flex border-2 rounded-lg p-3 ">
                            <MdEmail className="text-4xl mt-3  text-green-300" />
                            <div className="px-4">
                                <h1 className="text-2xl font-bold">Write email</h1>
                                <h5 className="text-lg font-medium">hassan4np@gmail.com</h5>
                            </div>
                        </div>
                        <div className="mt-5 flex border-2 rounded-lg p-3 ">
                            <MdPhone className="text-4xl mt-3 text-green-300" />
                            <div className="px-4">
                                <h1 className="text-2xl font-bold">Have any question?</h1>
                                <h5 className="text-lg font-medium">+8801723461543</h5>
                            </div>
                        </div>
                        <div className="mt-5 flex border-2 rounded-lg p-3 ">
                            <IoLogoWhatsapp className="text-4xl mt-3 text-green-300" />
                            <div className="px-4">
                                <h1 className="text-2xl font-bold">Whatsapp</h1>
                                <h5 className="text-lg font-medium">+8801723461543</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;