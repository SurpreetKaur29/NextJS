import { NavBar } from "@/components/atoms/nav";
import { NumiverseData } from "@/constants/data";

export const NumiNavigation = () => {
    return(
        <div>
            <h4 className="text-white uppercase mb-3 text-sm font-gt">Numiverse</h4>
            <ul className="flex flex-col gap-2">
            {NumiverseData.map((item, idx) => {
                return <NavBar className="text-sand text-sm font-gtlight" key={idx} link={item.menulink} name={item.menuitem} />
            })}
            </ul>
        </div>
    );
};