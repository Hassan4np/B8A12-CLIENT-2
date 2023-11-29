

const Bannar = () => {
    return (
        <div className="pb-10">
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/FzB79pV/oine.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-gray-300 text-2xl md:text-5xl font-bold">WELLCOME</h1>
                        <p className="mb-5 text-gray-300 text-[14px] md:text-base">Feel free to expand on these sections and elaborate on specific examples or case studies within each category of advancements.</p>
                        <button className="btn bg-green-300">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bannar;