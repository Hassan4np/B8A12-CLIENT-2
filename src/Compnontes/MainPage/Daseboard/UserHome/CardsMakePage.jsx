import { useLoaderData } from "react-router-dom";
import Heading from "../../GoolebalSecton/Heading";
import { useForm } from "react-hook-form";
import useAxousSecret from "../../Hools/useAxousSecret";
import Swal from "sweetalert2";
import useAuth from "../../Hools/useAuth";


const CardsMakePage = () => {
    const data = useLoaderData();
    const { title, price, location, agentName,image} = data;
    const { register, handleSubmit, reset } = useForm();
    const axioussecret = useAxousSecret();
    const { user } = useAuth();
    console.log(data)

    console.log(price)
    const preprce = parseInt(price?.split('-')[0]);
    const preprcee = parseInt(price?.split('-')[1]);
    const onSubmit = async (data) => {
        // console.log(data)
       
        const recprice = data.price;
        if (preprce > recprice || preprcee < recprice) {
         Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Sorry your price range is not valided",
            });
            return;

        }
        const menuitem = {
            title: data.title,
            price: recprice,
            location: location,
            buyerName: data.buyerName,
            buyerEmail: data.buyerEmail,
            AgentName: data.AgentName,
            date: data.date,
            image:image,
            status: 'pending'
        }
        console.log(menuitem)
        const menures = await axioussecret.post('/boughts', menuitem);
        console.log(menures.data)
        if(menures.data.insertedId){
            reset()
            //todo
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Item add Successfully ',
                showConfirmButton: false,
                timer: 1500
            })
        }
    }
    return (
        <div>
            <Heading title="user form"></Heading>
            <div className="px-10">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input type="text" {...register("title", { required: true })} defaultValue={title} readOnly placeholder="Title" className="input input-bordered w-full" />

                    </div>
                    <div className="flex gap-5">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input type="text" {...register("loction", { required: true })} defaultValue={location} readOnly placeholder="Location" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Agant Name</span>
                            </label>
                            <input type="text" {...register("AgentName", { required: true })} defaultValue={agentName} readOnly placeholder="Agent name" className="input input-bordered w-full" />

                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">price</span>
                            </label>
                            <input type="number" {...register("price", { required: true })} className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">buyer Name</span>
                            </label>
                            <input type="text" {...register("buyerName", { required: true })} defaultValue={user?.displayName} readOnly placeholder="Name" className="input input-bordered w-full" />

                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">buyer email</span>
                            </label>
                            <input type="text" {...register("buyerEmail", { required: true })} defaultValue={user.email} readOnly placeholder="email" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">date</span>
                            </label>
                            <input type="date" {...register("date", { required: true })} placeholder="date" className="input input-bordered w-full" />

                        </div>
                    </div>

                    <button className="btn btn-success mt-3">Offer</button>
                </form>
            </div>
        </div>
    );
};

export default CardsMakePage;