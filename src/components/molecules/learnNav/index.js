import { NavBar } from "@/components/atoms/nav";
import { LearnData } from "@/constants/data";

export const LearnNavigation = () => {
    return(
        <div>
            <h4 className="text-white uppercase mb-3 text-sm font-gt">Learn</h4>
            <ul className="flex flex-col gap-2">
            {LearnData.map((item, idx) => {
                return <NavBar className="text-sand text-sm font-gtlight" key={idx} link={item.menulink} name={item.menuitem} />
            })}
            </ul>
        </div>
    );
};