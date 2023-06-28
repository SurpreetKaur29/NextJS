import Link from "next/link";

export const NavBar = ({name, link, className}) => {
    return (
        <li className="inline-block">
            <Link href={link}  className={`${className ? className : ""} font-roboto`}>{name}</Link>
        </li>
    );
};