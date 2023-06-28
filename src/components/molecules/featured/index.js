import { CustomButton } from "@/components/atoms/button";

export const FeaturedTerm = () => {
    return(
        <div className="bg-black bg-opacity-60 w-[612px] px-[30px] py-[22px]">
            <h4 className="font-nuckle text-xl text-white mb-5">What Are Psychedelics?</h4>
            <p className="text-sm font-gtlight mb-8 text-white">Psychedelics is an umbrella term for certain types of drugs that are known for their psychoactive effects, and increasingly for their vast therapeutic potential. They include certain types of plants and fungi, as well as synthetic compounds.</p>
            <CustomButton className="w-full text-[17px] py-3.5 px-6 text-white bg-sunstone font-gt" buttonText="Learn More About Psychedelics" />
        </div>
    );
};