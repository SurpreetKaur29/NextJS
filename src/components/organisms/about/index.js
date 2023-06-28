import { CustomImage } from "@/components/atoms/image";
import { AboutLeft } from "@/components/molecules/about";
import Image from "next/image";

export const AboutSection = () => {
    return(
        <div className="py-10 bg-sandlight">
            <div className="container">
                <div className="flex items-center">
                    <div className="w-3/5">
                        <Image src="/images/abt.png" width={998} height={711} />
                    </div>
                    <div className="w-2/5">
                        <AboutLeft />
                    </div>
                </div>
            </div>
        </div>
    );
};