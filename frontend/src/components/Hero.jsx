import HeroImg from '../assets/HeroImg.jpg'

const HeroSection = () => {

    return (
        <div className="w-full h-screen">
            <div className=" sm:px-10 bg-[#e1dae4] rounded-md relative">

                {/* header */}
                <header
                    className="flex lg:flex-row flex-col items-center gap-12 lg:gap-0 justify-between px-8 mt-10">

                    <div className="w-full lg:w-[45%] p-10">

                        <h1 className="text-[40px] sm:text-[60px] font-semibold leading-[45px] sm:leading-[70px] text-slate-600">
                            <span className="text-[#01dc76]">Elevate Fitness</span> is here to help you achieve your fitness goals</h1>
                        <p className="mt-2 text-[1rem] text-slate-500">We are dedicated to providing you with the best fitness programs and resources.</p>
                    </div>

                    <div className="w-full lg:w-[55%]">
                        <img src={HeroImg} alt="Fitness illustration" className="rounded-2xl" />
                    </div>
                </header>

                <section className="px-8 pb-[30px]">
                    <h1 className="text-[1.3rem] font-semibold text-slate-600">Our Services</h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-10 w-[70%] text-slate-600">
                        <div>
                            <img src="https://i.ibb.co/z721j8b/Vector.png" alt="Personal Training icon" className="w-[30px]" />
                            <h4 className="text-[1.1rem] mt-3">Personal Training</h4>
                            <p className="text-[0.9rem] text-gray-500 mt-1">Get personalized training programs tailored to your needs.</p>
                        </div>
                        <div>
                            <img src="https://i.ibb.co/Qn78BRJ/Ui-Design.png" alt="Nutrition Plans icon" className="w-[30px]" />
                            <h4 className="text-[1.1rem] mt-3">Nutrition Plans</h4>
                            <p className="text-[0.9rem] text-gray-500 mt-1">Receive customized nutrition plans to complement your fitness routine.</p>
                        </div>
                        <div>
                            <img src="https://i.ibb.co/GcsvXxk/Product.png" alt="Group Classes icon" className="w-[30px]" />
                            <h4 className="text-[1.1rem] mt-3">Group Classes</h4>
                            <p className="text-[0.9rem] text-gray-500 mt-1">Join our group classes and stay motivated with others.</p>
                        </div>
                    </div>
                </section>

                {/* right blur shadow */}
                <div className="w-[100px] h-[100px] bg-[#DC0155] blur-[90px] absolute bottom-[80px] right-[80px]"></div>
            </div>
        </div>
    );
};

export default HeroSection;