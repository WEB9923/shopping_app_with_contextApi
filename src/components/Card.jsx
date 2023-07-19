import {Link} from "react-router-dom";
import {BsCart4} from "react-icons/bs";

export default function Card({data,handleAddToCart}) {
    return (
        <>
            <div className="w-[250px] min-h-[330px] rounded-md bg-gray-300 overflow-hidden">
                <div className="h-[200px] w-full">
                    <img
                        src={data.images[0]}
                        alt={data.title}
                        className="w-full h-full object-cover object-center"
                    />
                </div>
                <div className="p-1">
                    <div className="">
                        <Link
                            to={`/product/${data.id}`}
                            className="text-cyan-600 line-clamp-2 hover:underline"
                        >
                            {data.title}
                        </Link>
                    </div>
                    <div className="mt-1">
                        <h3 className="text-[18px] text-cyan-800 font-extrabold">${data.price}</h3>
                    </div>
                </div>
                <div className="h-8 flex items-center gap-3 px-1">
                    <button className="flex-1 bg-green-600 rounded-md py-1.5 text-gray-200 capitalize font-medium">buy now</button>
                    <button
                        onClick={() => handleAddToCart(data)}
                        className="flex-[0.3] bg-cyan-700 rounded-md py-1.5 text-gray-200 flex items-center justify-center"
                    >
                        <BsCart4 size={22}/>
                    </button>
                </div>
            </div>
        </>
    );
}
