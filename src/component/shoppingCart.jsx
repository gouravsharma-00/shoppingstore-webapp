
export default function ShoppingCart({handleOpen, shoppingCartisOpen, state, dispatch}) {
    const shoppingCartStyle = {
        position: 'fixed',
        right : '0px',
        height: '100%',
        width : shoppingCartisOpen? '350px': '0px',
        backgroundColor: '#D9D9D9',
        borderLeft: '1px solid black',
        transition: 'all 0.5s',
        zIndex: '2',overflowY: 'auto'
    }
    const handleRemove = (item) => {
        dispatch({type: "remove", item: item})
    }
    const handleAdd = (item) => {
        dispatch({type: "add", item: item})
    }
    const handlesubtract = (item) => {
        if(item.quantity > 1){
            dispatch({type: "subtract", item: item});
        }else{
            dispatch({type: "remove", item: item});
        }
 
    }
    return(
        <div style={shoppingCartStyle} >
            <button onClick={handleOpen}>Close</button>
            <h1 style={{textAlign: 'center', margin: '0'}}>Cart</h1>
            <hr/>
            <div className="flex" style={{flexDirection: 'column', overflowY: 'auto', height: '70%', justifyContent: 'start'}}>
            {
                state.map((item) => {
                    return(
                        <div key={item.id} className='flex' style={{gap: '1rem', padding: '5px', marginBottom: '5px', backgroundColor: 'white', width:'80%', borderRadius: '10px'}}>
                            <div style={{height: '50px', width: '50px', background: item.color}}></div>
                            <div>
                                <p className="info-title">{item.title}</p>
                                <p className="info-title">💰 ${item.price * item.quantity}</p>
                                {item.quantity > 1 && <span style={{marginRight: '2px', fontSize: '13px'}}>x{item.quantity}</span>}
                                <button className="small add" onClick={() => handleAdd(item)}>➕</button>
                                <button className="info-company" onClick={() => handleRemove(item)}>Remove</button>
                                <button className="small subtract" onClick={() => handlesubtract(item)}>➖</button>
                            </div>
                        </div>
                    )
                })
            }
            </div>
            <hr/>
            <span className="info-title" style={{margin: '5px'}}>💰 Total: ${state.reduce((acc, item) => {
                return acc + ( item.price * item.quantity )
            }, 0)}</span>
            <button className="info-company">Buy 🛒</button>
        </div>
    )
}