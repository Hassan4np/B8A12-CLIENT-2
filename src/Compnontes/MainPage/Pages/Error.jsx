
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='flex justify-center items-center mt-10 bg-green-100 w-full h-[400px]'>
            <div>
                <h1 className='text-5xl'>SORRY THIS CONTENT NOT  AVAILABLE</h1>
                <div style={{display:'flex',justifyContent:'center'}}>
                    <Link to="/"> <button className='btn btn-success mt-10' style={{ padding: '10px' }}>BACK HOME</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Error;