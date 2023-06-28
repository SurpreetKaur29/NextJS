import { CustomImage } from "@/components/atoms/image";
import { AboutNavigation } from "@/components/molecules/aboutNav";
import { ClinicsNavigation } from "@/components/molecules/clinicNav";
import { ExistNavigation } from "@/components/molecules/existingNav";
import { LearnNavigation } from "@/components/molecules/learnNav";
import { NumiNavigation } from "@/components/molecules/numiverseNav";
import { ServiceNavigation } from "@/components/molecules/serviceNav";
import Link from "next/link";
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';

export const Footer = () => {
    return(
        <div className="footer bg-umber pt-16">
            <div className="container">
                <div className="grid grid-cols-6">
                    <AboutNavigation />
                    <ServiceNavigation />
                    <ClinicsNavigation />
                    <LearnNavigation />
                    <NumiNavigation />
                    <ExistNavigation />
                </div>
                <div className="flex justify-between items-end py-8">
                    <CustomImage src="/images/Numinus_Icon_Footer.svg" className="w-24 p-4" />
                    <ul className="flex justify-end gap-5 flex-row">
                        <li>
                            <Link href="/" className="text-sand text-xl">
                                <BsFacebook />
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="text-sand text-xl">
                                <BsInstagram />
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="text-sand text-xl">
                                <BsTwitter />
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="text-sand text-xl">
                                <FaLinkedinIn />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="flex justify-between border-mediumgray border-0 border-t py-5">
                    <p className="text-sand text-sm font-roboto">© 2023 Numinus. All rights reserved.</p>
                    <ul className="flex justify-end gap-5 flex-row">
                        <li>
                            <Link href="/" className="text-sand text-sm font-gtlight">
                                Privacy Policy  
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="text-sand text-sm font-gtlight">
                                Terms of Use
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="text-sand text-sm font-gtlight">
                                Forward Looking Statements
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};