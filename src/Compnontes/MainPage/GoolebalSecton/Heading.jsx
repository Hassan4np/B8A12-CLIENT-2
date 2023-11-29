

const Heading = ({title,subtitle}) => {
    return (
       <div >
         <div className="py-10">
            <h1 className="text-center text-2xl md:text-4xl font-bold uppercase">{title}</h1>
            <h5 className="text-center text-base md:text-lg font-normal lowercase mt-2 text-gray-500">{subtitle}</h5>
            
        </div>
       </div>
    );
};

export default Heading;