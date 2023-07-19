import {Link} from "react-router-dom";
import navlinks from "../data/navlinks.json";

export default function Footer() {
    return (
        <>
            <footer className="bg-gray-300 h-auto w-full pt-2">
                <div className="container flex items-center justify-between py-2">
                    <div className="logo">
                        <Link to={"/"} className="text-cyan-600 font-bold uppercase text-[20px]">
                            shop
                        </Link>
                    </div>
                    <div className="">
                        <ul className="flex items-center gap-4">
                            {navlinks.map((link) => {
                                return (<li key={link.id}>
                                    <Link
                                        to={link.path}
                                        className={"text-[16px] text-gray-600 font-medium py-1.5 capitalize"}
                                    >
                                        {link.title}
                                    </Link>
                                </li>)
                            })}
                        </ul>
                    </div>
                </div>
                <div className="flex items-center justify-center py-2 text-cyan-600 border-t-[1px] border-t-cyan-600">
                    <p className="text-[14px] font-medium capitalize">all right reserved.2023</p>
                </div>
            </footer>
        </>
    );
}