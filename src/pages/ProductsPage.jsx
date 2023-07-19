import {useFetcher} from "../hooks/useFetcher.jsx";
import Card from "../components/Card.jsx";
import Loader from "../components/Loader.jsx";
import {useCartContext} from "../store/CartContext.jsx";

export default function ProductsPage() {
    const {
        data,
        loading,
        error
    } = useFetcher(`https://dummyjson.com/products`);
    const {handleAddToCart} = useCartContext();

    return (
        <>
            <section className="section">
                <div className="container">
                    <h1 className="title">products</h1>
                    <div className="flex justify-center flex-wrap gap-3">
                        {loading ? <Loader/> : data?.products?.map((pr) => {
                            return (
                                <Card
                                    key={pr.id}
                                    data={pr}
                                    handleAddToCart={handleAddToCart}
                                />
                            )
                        })}
                        {error && <p>{error}</p>}
                    </div>
                </div>
            </section>
        </>
    );
}
