import { NavBar } from "@/components/atoms/nav";
import { ExistData } from "@/constants/data";

export const ExistNavigation = () => {
    return(
        <div>
            <h4 className="text-white uppercase mb-3 text-sm font-gt">Existing Clients</h4>
            <ul className="flex flex-col gap-2">
            {ExistData.map((item, idx) => {
                return <NavBar className="text-sand text-sm font-gtlight" key={idx} link={item.menulink} name={item.menuitem} />
            })}
            </ul>
        </div>
    );
};