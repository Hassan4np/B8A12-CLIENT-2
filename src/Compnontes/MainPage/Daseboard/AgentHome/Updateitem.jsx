import {  useParams } from "react-router-dom";
import Heading from "../../GoolebalSecton/Heading";
import useAuth from "../../Hools/useAuth";
import useAxousPublic from "../../Hools/useAxousPublic";
import useAxousSecret from "../../Hools/useAxousSecret";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useQuery } from "react-query";



// import Swal from "sweetalert2";
const img_hosting_key = 'b877f7b6b89626ad96ae8c7d071095de'
// const image_hosting_key= import.env.VITE_IMAGE_HOSTING_KEY;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`
const Updateitem = () => {
    const {id} = useParams();
    const axoussec = useAxousSecret();

    const { data:updateinfo} = useQuery({
        queryKey: ['cards',id],
        queryFn: async () => {
            const res = await axoussec.get(`/advertisement/${id}`);
            console.log(res.data)
            return res.data
        }
    });
    console.log(updateinfo)
  

    const { register, handleSubmit, reset } = useForm();
    const axouspublic = useAxousPublic();
    const axioussecret = useAxousSecret();
    const {user} = useAuth();
    const onSubmit = async (data) => {
        console.log(data)
        const imgfile = { image: data.image[0] };
        console.log(imgfile)
        const res = await axouspublic.post(img_hosting_api, imgfile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        console.log(res.data.display_url)
        if (res.data.success) {
            const menuitem = {
                title: data.title,
                location_name: data.location,
                price:data.price,
                dec:data.dec,
                image: res?.data?.data?.display_url,
                agent_name: data.AgentName,
                agent_img: updateinfo?.agent_img ,
                agent_email: user.email,
                status:updateinfo?.status
            };
            console.log(menuitem)
            const menures = await axioussecret.patch(`/advertisement/${updateinfo?._id}`, menuitem);
            console.log(menures.data)
            if (menures.data.modifiedCount>0) {
                reset()
                //todo
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Item update Successfully ',
                    showConfirmButton: false,
                    timer: 1500
                })
            }

        }
    }
    return (
        <div>
            <Heading title="Update item"></Heading>
            <div className="px-10">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input type="text" {...register("title", { required: true })} placeholder="Title" defaultValue={updateinfo?.title} className="input input-bordered w-full" />

                    </div>
                    <div className="flex gap-5">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input type="text" {...register("location", { required: true })} placeholder="Location" defaultValue={updateinfo?.location_name} className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Agant Name</span>
                            </label>
                            <input type="text" {...register("AgentName", { required: true })}defaultValue={updateinfo?.agent_name} readOnly placeholder="Agent name" className="input input-bordered w-full" />

                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">price</span>
                            </label>
                            <input type="text" {...register("price", { required: true })} placeholder="give me price" defaultValue={updateinfo?.price} className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Agenet Email</span>
                            </label>
                            <input type="text" {...register("agentemail", { required: true })} defaultValue={updateinfo?.agent_email} readOnly placeholder="Email" className="input input-bordered w-full" />

                        </div>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea {...register('dec')} className="textarea textarea-bordered" defaultValue={updateinfo?.dec} placeholder="Description"></textarea>
                    </div>
                    
                    <div className="form-control w-full mt-3">

                        <input type="file" {...register('image', { required: true })} className="file-input w-full max-w-xs" />
                    </div>

                    <button className="btn btn-success mt-3">Update item</button>
                </form>
            </div>
        </div>
    );
};

export default Updateitem;