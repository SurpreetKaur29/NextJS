import { NavBar } from "@/components/atoms/nav";
import { NavData } from "@/constants/data";

export const Navigation = () => {
    return(
        <ul className="flex items-center justify-between gap-10">
            {NavData.map((item, idx) => {
                return <NavBar className="px-5 py-3 text-lg text-white" key={idx} link={item.menulink} name={item.menuitem} />
            })}
        </ul>
    );
};