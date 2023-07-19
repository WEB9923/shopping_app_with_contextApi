import {Link} from "react-router-dom";
import banner from "../assets/banner3.png";

export default function Header() {
    return (
        <>
            <header className="h-[calc(100vh-4rem)] bg-gray-200">
                <div
                    className="container w-full h-full flex gap-10 flex-col-reverse md:flex-row items-center py-10 md:justify-evenly justify-center">
                    <div className="flex-1">
                        <div className="w-full flex flex-col gap-4">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet ducimus
                                exercitationem facilis quam qui quisquam!</p>
                            <Link to={"/products"}
                                  className="py-2 px-4 bg-cyan-600 rounded-md w-fit text-gray-200">
                                go products page
                            </Link>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="w-full">
                            <img src={banner} alt="banner image"/>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
