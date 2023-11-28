import { useQuery } from "react-query";
import useAxousPublic from "../Hools/useAxousPublic";
import { useParams } from "react-router-dom";
import useAxousSecret from "../Hools/useAxousSecret";
import Swal from "sweetalert2";
import useAuth from "../Hools/useAuth";
import { useState } from "react";


const CardDetails = () => {
    const axospublic = useAxousPublic();
    const axousseret = useAxousSecret();
    const [close,setclose]=useState(true)
    const {user} = useAuth();
    const { id } = useParams();
    const { data } = useQuery({
        queryKey: ['advertisement', id],
        queryFn: async () => {
            const res = await axospublic.get(`/advertisement/${id}`);
            console.log(res.data)
            return res.data
        }
    })
    // const {title,dec,agent_name,price,image } = data;
    const hendlereview = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const dec = form.dec.value;
        const review = {
            title,
             dec,
             agentName:data.agent_name,
             date: new Date(),
             revieweremail:user?.email,
             reviewername:user?.displayName,
             reviewerimg:user?.photoURL,
             
        }
        console.log(review)
        axousseret.post('/review',review)
    .then(res=>{
        console.log(res.data)
        if(res.data.acknowledged){
            setclose(false)
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Review added Successfully ',
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
    .catch(error=>{
        console.log(error)
    })
    };
    const hendlecards = () => {
        const Cardsinfo = {
            title:data?.title,
            image:data?.image,
            agentName: data?.agent_name,
            location:data?.location_name,
            agentImage:data?.agent_img,
            status:data?.status,
            price:data?.price,
            email:user?.email,
            agentemail:data?.agent_email,
        }
        axousseret.post('/cards',Cardsinfo)
        .then(res=>{
            console.log(res.data)
            if(res.data.acknowledged){
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Card added Successfully ',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
        .catch(error=>{
            console.log(error)
        })
        
    }
console.log(close)
    return (
        <div className="mt-10 ">
            <div className="relative md:flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
                    <img
                        src={data?.image}
                        alt="image"
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="p-6">
                    <h6 className="block mb-4 text-green-700  text-2xl antialiased font-semibold leading-relaxed tracking-normal uppercase">
                        Name: {data?.title}
                    </h6>
                    <h4 className="block mb-2 font-sans text-green-600 text-lg antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">

                        Agant: {data?.agent_name}
                    </h4>
                    <h6 className="block mb-2 font-sans text-green-600 text-sm antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">

                        Price: {data?.price} tk
                    </h6>
                    <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-500">
                        {data?.dec}
                    </p>
                    <a className="inline-block" href="#">
                        <button onClick={hendlecards}
                            className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold bg-green-600 text-center text-white hover:text-black uppercase align-middle transition-all rounded-lg select-none hover:bg-green-500/10 active:bg-green-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            Add to wishlist

                        </button>

                    </a>
                </div>
            </div>
            <div className="mb-10 py-10 flex ">
                <div className="w-1/2">
                    <h1 className="text-2xl font-bold text-start ">Review:</h1>
                </div>
                <div className="w-1/2">
                    <button className="text-xl btn bg-green-200 border-b-green-700 hover:bg-green-400 " onClick={() => document.getElementById('my_modal_1').showModal()}>Add review</button>
                </div>
            </div>


            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <form onSubmit={hendlereview}>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input type="text" name='title' placeholder="Title" className="input input-bordered w-full" />

                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" name="dec" placeholder="Description" className="input input-bordered w-full" />

                        </div>
                        <input type="submit" value="Submit" className="btn mt-5 btn-success" />
                    </form>
                    <div className="modal-action">
                        <form method="dialog">
                            <button onClick={()=>setclose(false)} className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default CardDetails;