import Image from "next/image";
import Link from "next/link";

export const ServiceBox = ({src, service, desc, id}) => {
    return(
        <div className="serviceBox relative border-b-[12px] border-sunstone w-[560px] h-[500px] mb-10">
            <Link href={`/service/${id}`}>
                <Image src={`${src}`} alt="image" fill style={{objectFit:"cover"}} />
                <div className="overlay absolute bottom-0 top-0 left-0 right-0 z-[8]"></div>
                <div className="absolute bottom-0 w-full p-5 pt-6 text-white text-[29px] font-nuckle z-10">
                    <h3>{service}</h3>
                    <p className="text-base text-white mt-4">{desc}</p>
                </div>
            </Link>
        </div>
    );
};