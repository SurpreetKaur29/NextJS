import { CustomImage } from "@/components/atoms/image";
import { Navigation } from "@/components/molecules/navigation";
import { BsSearch } from 'react-icons/bs';
import { MdOutlineLocationOn } from 'react-icons/md';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { ModalBooking } from "@/components/organisms/modal";

export const Header = () => {
  return (
    <div className="header py-2 bg-transparent fixed top-0 w-full bg-gradient-to-r from-cyan-500 to-blue-500 z-[9]">
        <div className="container">
            <div className="flex items-center justify-between">
                <div className="left-side">
                    <CustomImage
                    src="/images/MicrosoftTeams-image-6.png"
                    className="custom-logo w-40"
                    />
                </div>
                <div className="middle-side">
                    <Navigation />
                </div>
                <div className="flex gap-8 items-center border-sand border-0 border-s ps-8">
                    <BsSearch color="white" fontSize="18px" />
                    <p className="text-white text-lg font-roboto">EN</p>
                    <MdOutlineLocationOn color="white" fontSize="24px" />
                    <HiOutlineUserCircle color="white" fontSize="24px" />
                    <ModalBooking />
                </div>
            </div>
      </div>
    </div>
  );
};