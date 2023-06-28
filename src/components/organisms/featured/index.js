import { FeaturedTerm } from "@/components/molecules/featured";
import Image from "next/image";

export const Featured = () => {
    return(
        <div className="py-20">
            <div className="container">
                <div className="block">
                    <h2 className="font-nuckle text-5xl mb-16 border-b-2 border-sunstone w-fit mx-auto">Psychedelics & Numinus</h2>
                    <div className="relative w-full h-[978px]">
                        <Image src="/images/testimonial.png"  fill style={{objectFit:"cover"}} alt="image" />
                        <div className="absolute top-[36px] left-[36px] z-[8]">
                            <FeaturedTerm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};