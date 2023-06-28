import { NavBar } from "@/components/atoms/nav";
import { ServiceData } from "@/constants/data";

export const ServiceNavigation = () => {
    return(
        <div>
            <h4 className="text-white uppercase mb-3 text-sm font-gt">Services</h4>
            <ul className="flex flex-col gap-2">
            {ServiceData.map((item, idx) => {
                return <NavBar className="text-sand text-sm font-gtlight" key={idx} link={item.menulink} name={item.menuitem} />
            })}
            </ul>
        </div>
    );
};