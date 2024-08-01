
export default function ShoppingCart({handleOpen, shoppingCartisOpen, state, dispatch}) {
    const shoppingCartStyle = {
        position: 'fixed',
        right : '0px',
        height: '100%',
        overflowY: 'scroll',
        width : shoppingCartisOpen? '300px': '0px',
        backgroundColor: '#D9D9D9',
        borderLeft: '1px solid black',
        transition: 'all 0.4s',
        zIndex: '2'
    }
    const handleRemove = (item) => {
        dispatch({type: "remove", item: item})
    }
    return(
        <div style={shoppingCartStyle}>
            <button onClick={handleOpen}>Close</button>
            <h1 style={{textAlign: 'center', margin: '0'}}>Cart</h1>
            <hr/>
            {
                state.map((item) => {
                    return(
                        <div key={item.id}>
                            <img height='50px' width='50px' />
                            <p>{item.title}</p>
                            <span>{item.price}</span>
                            {item.quantity > 0 && <p>{item.quantity}</p>}
                            <button onClick={() => handleRemove(item)}>Remove</button>
                        </div>
                    )
                })
            }
        </div>
    )
}