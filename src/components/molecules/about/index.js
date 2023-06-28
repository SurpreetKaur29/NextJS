import { CustomButton } from "@/components/atoms/button";

export const AboutLeft = () => {
    return(
        <div className="p-[52px]">
            <h3 className="font-nuckle text-xl mb-4">Who Are We at Numinus?</h3>
            <p className="font-gtlight text-sm my-5">Numinus is shaping a new path in psychedelic-assisted therapy. We feel compelled to address the mental health epidemic with a powerful blend of science and wellness.</p>
            <CustomButton buttonText="Learn More About Us" className="w-full text-[17px] py-3.5 px-6 text-white bg-sunstone font-gt" />
        </div>
    );
};