import p1 from '../../../assets/Teams/man3.jpeg';
import p2 from '../../../assets/Teams/man2.jpeg';
import p3 from '../../../assets/Teams/man1.jpeg';

const OurTeams = () => {
    return (
        <div className='py-10'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                <a href="https://www.linkedin.com/in/hassan-ali-604934244/" target="_blank" rel="noopener noreferrer">
                    <div className="card card-compact  bg-base-100 shadow-xl mb-2" >
                        <figure><img src={p2} className="rounded-lg" alt="" /></figure>
                        <div className=" ml-12 py-2 md:ml-[70px] md:py-3">
                            <h2 className="text-3xl font-bold text-green-300">Rashod Khan</h2>
                            <p className="text-lg font-bold py-2 text-black"> CEO</p>
                        </div>
                    </div>
                </a>
                <a href="https://www.facebook.com/hassan4np" target="_blank" rel="noopener noreferrer">
                    <div className="card card-compact  bg-base-100 shadow-xl mb-2">
                        <figure><img src={p1
                        } className="rounded-lg" alt="" /></figure>
                        <div className=" ml-12 py-2 md:ml-[70px] md:py-3">
                            <h2 className="text-3xl font-bold text-green-300">Asadul Islam</h2>
                            <p className="text-lg py-2 font-bold text-black">Manager</p>
                        </div>
                    </div>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100082599271315" target="_blank" rel="noopener noreferrer">
                    <div className="card card-compact  bg-base-100 shadow-xl mb-2">
                        <figure><img src={p3} className="rounded-lg" alt="" /></figure>
                        <div className=" ml-12 py-2 md:ml-[70px] md:py-3">
                            <h2 className="text-3xl font-bold text-green-300">Agent Persons</h2>
                            <p className="text-lg font-bold  py-2 text-black">Agent</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default OurTeams;