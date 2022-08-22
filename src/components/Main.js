
import heromobile from "../images/image-hero-mobile.png";
const Main=(props)=>{
    return (
        <main className="flex flex-wrap sm-l:flex-col-reverse justify-center sm-lmin:justify-start sm-lmin:flex-row h-max pb-7">
            <div className="px-3 sm-lmin:px-0 sm-lmin:w-1/3 flex flex-col gap-10 sm-lmin:ml-20 flex-wrap mt-12 text-center sm-lmin:text-left">
                <h1 className="text-4xl md:text-5xl font-bold">Make remote work</h1>
                <p className="px-10 text-sm sm-lmin:text-base sm-lmin:px-0">Get your team in sync, no matter your location. Streamline processes,
                    create team rituals, and watch productivity soar.</p>
                <button className="btn-learn-more">Learn more</button>
                <div className="flex justify-evenly sm-lmin:justify-between gap-1 sm-lmin:gap-0 sm-lmin:mt-5 md:mt-3 w-full flex-wrap">
                    <img src={require("../images/client-databiz.svg").default} alt="databix" className="w-16 sm-lmin:w-12  md:w-16 lg:w-20 h-5 sm-lmin:h-4 md:h-7"/>
                    <img src={require("../images/client-audiophile.svg").default} alt="audiophile" className="w-14 sm-lmin:w-12 md:w-16 lg:w-20 h-6 sm-lmin:h-5 md:h-6 lg:h-7"/>
                    <img src={require("../images/client-meet.svg").default} alt="meet" className="w-14 sm-lmin:w-12 md:w-16 lg:w-20 h-5 sm-lmin:h-4"/>
                    <img src={require("../images/client-maker.svg").default} alt="maker" className="w-14 sm-lmin:w-12 md:w-16 lg:w-20 h-5 sm-lmin:h-4"/>
                </div>
            </div>
            <img src={heromobile} className="sm-lmin:content-herodesktop  w-full h-1/4  sm-lmin:w-80 sm-lmin:pb-4 mx-auto mt-auto" alt="hero"/>
        </main>
    )
};

export default Main; 