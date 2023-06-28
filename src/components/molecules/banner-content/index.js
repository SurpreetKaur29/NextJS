export const BannerContent = () => {
 return(
    <div className="grid grid-cols-2 gap-10">
        <div className="bg-black bg-opacity-80 border-b-[12px] px-6 py-7 border-sand">
            <h3 className="font-nuckle text-2xl text-sand">I’m experiencing...</h3>
        </div>
        <div className="bg-black bg-opacity-80 border-b-[12px] px-6 py-7 border-sunstone">
            <h3 className="font-nuckle text-2xl text-sand">I’m looking for...</h3>
        </div>
    </div>
 );
};