import { useParams } from "react-router-dom";
import { useRecoilValue  } from "recoil";
import productsState from "../src/stores/products";


const Produkt = () => {
    const produkter = useRecoilValue(productsState)

    
    const { id } = useParams()
    console.log(id)
    return (   
        <div className="produkt-lista">
            
        {produkter && produkter.filter((data) => data.id === id).map((data) => (
            <div className="single-produkt" key={data.id}>
                <div><img className="product-images" src={data.image} alt={data.title}/></div>
                <div className="produkt-text"><h2>{data.title}</h2>
                <p>{data.description}</p>
                <p>{data.price}kr</p></div>
            </div>
        ))}

    </div>
     );
}
 
export default Produkt;
