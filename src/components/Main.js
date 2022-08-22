
import heromobile from "../images/image-hero-mobile.png";
const Main=(props)=>{
    return (
        <main className="flex flex-wrap flex-col-reverse justify-center sm:justify-start sm:flex-row h-max pb-7">
            <div className="px-3 sm:px-0 sm:w-1/3 flex flex-col gap-10 sm:ml-auto flex-wrap mt-12 text-center sm:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Make remote work</h1>
                <p className="text-sm sm:text-base">Get your team in sync, no matter your location. Streamline processes,
                    create team rituals, and watch productivity soar.</p>
                <button className="btn-learn-more">Learn more</button>
                <div className="flex justify-evenly sm:justify-between gap-1 sm:gap-0 sm:mt-8 w-full flex-wrap">
                    <img src={require("../images/client-databiz.svg").default} alt="databix" className="w-16 sm:w-12  md:w-16 lg:w-20 h-5 sm:h-4"/>
                    <img src={require("../images/client-audiophile.svg").default} alt="audiophile" className="w-14 sm:w-12 md:w-16 lg:w-20 h-6 sm:h-5 md:h-6 lg:h-7"/>
                    <img src={require("../images/client-meet.svg").default} alt="meet" className="w-14 sm:w-12 md:w-16 lg:w-20 h-5 sm:h-4"/>
                    <img src={require("../images/client-maker.svg").default} alt="maker" className="w-14 sm:w-12 md:w-16 lg:w-20 h-5 sm:h-4"/>
                </div>
            </div>
            <img src={heromobile} className="sm:content-herodesktop  w-full h-1/4  sm:w-96 md:w-80 sm:h-auto sm:pb-4 mx-auto mt-3" alt="hero"/>
        </main>
    )
};

export default Main; 