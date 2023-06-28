export const ServiceBanner = ({title, image}) => {
    console.log('image', image)
    return(
       <div className="py-[250px] flex items-center bg-no-repeat bg-center bg-cover" style={{ backgroundImage: `url(${image})` }}>
           <div className="container">
                <div className="w-1/2">
                    <h1 className="text-[60px] text-white uppercase font-arizona">{title}</h1>
                </div>
           </div>
       </div>
    );
   };

  