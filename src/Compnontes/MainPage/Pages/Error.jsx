
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}>
            <div>
                <h1>SORRY THIS CONTENT NOT  AVAILABLE</h1>
                <div style={{display:'flex',justifyContent:'center'}}>
                    <Link to="/"> <button style={{ padding: '10px' }}>BACK HOME</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Error;