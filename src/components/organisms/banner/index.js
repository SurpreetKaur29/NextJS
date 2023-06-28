import { BannerContent } from "@/components/molecules/banner-content";

export const Banner = () => {
    return(
       <div className="py-24 h-screen flex items-center bg-hero bg-no-repeat bg-center bg-cover">
           <div className="container">
                <div className="w-1/2">
                    <h1 className="text-[60px] text-white uppercase mb-10 font-arizona">Connect.<br/> Heal.<br/> Thrive.</h1>
                    <BannerContent />
                </div>
           </div>
       </div>
    );
   };