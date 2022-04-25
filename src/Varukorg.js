const Varukorg = ({varukorg, handleAdd, handleRemove}) => {
    return ( 
        <div className="Varukorg">
            {varukorg.length === 0 && <div>Varukorgen är tom</div>}
    <div>
        {varukorg.map((item) =>(
            <div className="produkt" key={item.id}>
                
                <div className="bild-namn"><div><img className="small-img" src={item.image} alt={item.title}/></div>{item.namn}</div>
                <div className="add-remove">
                    <button className="add-remove-btn" onClick={() => handleAdd(item)}>+</button>
                    <button className="add-remove-btn" onClick={() => handleRemove(item)}>-</button>
                </div>
              
                <div className="varukorgs-pris">
                    Antal: {item.quantity} * {item.price} kr/st 
                </div>

                <div className="total-pris">Total pris: {item.quantity * item.price}</div>
            </div>
            
        ))}
    </div>
        
        </div>
     );
}
 
export default Varukorg;