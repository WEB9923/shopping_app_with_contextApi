import {Link} from "react-router-dom";
import {FaMinus, FaPlus, FaTrashAlt} from "react-icons/fa";


export default function CartItem({data,handleDeleteFromCart}) {
    const {images,title,price,id} = data;
    return (
        <>
            <div className="p-2 md:px-3 w-full h-32 my-2 rounded-md bg-gray-300 flex items-center justify-between">
                <div className="flex md:gap-5 gap-2">
                    <div className="w-28 h-28 overflow-hidden">
                        <img
                            src={images[0]}
                            alt={title}
                            className="object-center object-contain w-full h-full pointer-events-none"
                        />
                    </div>
                    <div className="flex flex-col justify-between">
                        <Link
                            to={`/product/${id}`}
                            className="text-cyan-600 font-bold capitalize underline line-clamp-2 md:text-[18px] text-[13px]"
                        >
                            {title}
                        </Link>
                        <div className="flex items-center gap-4 bg-gray-300 py-0.5 border-[1px] border-gray-400 w-fit rounded-md">
                            <button className="w-8 h-6 flex items-center justify-center cursor-pointer border-r border-gray-400">
                                <FaMinus size={20} className="text-gray-500"/>
                            </button>
                            <h2 className="text-gray-600">5</h2>
                            <button className="w-8 h-6 flex items-center justify-center cursor-pointer border-l border-gray-400">
                                <FaPlus size={20} className="text-gray-500"/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col h-full justify-between items-end w-fit">
                    <span
                        onClick={() => handleDeleteFromCart(id)}
                        className="cursor-pointer w-8 h-8 flex items-center justify-center bg-gray-200 rounded-md"
                    >
                        <FaTrashAlt size={22} className="text-red-400"/>
                    </span>
                    <h1 className="text-cyan-600 font-extrabold text-[16px]">${price}</h1>
                </div>
            </div>
        </>
    );
}