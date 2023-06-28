import { NavBar } from "@/components/atoms/nav";
import { AboutData } from "@/constants/data";

export const AboutNavigation = () => {
    return(
        <div>
            <h4 className="text-white uppercase mb-3 text-sm font-gt">About</h4>
            <ul className="flex flex-col gap-2">
            {AboutData.map((item, idx) => {
                return <NavBar className="text-sand text-sm font-gtlight" key={idx} link={item.menulink} name={item.menuitem} />
            })}
            </ul>
        </div>
    );
};