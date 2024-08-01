import Item from '../data/Item.json';
import '../style/store.css';
export default function Store({ dispatch }) {
    const storeStyle = {
        position: 'absolute',
        height: '100%',
        width: '100%',
        zIndex: '1',
        gap: '1rem',
        flexWrap: 'wrap'
    }
    const handleAdd = (item) => {
        dispatch({type: "add", item: item})
    }
    return(
        <div style={storeStyle} className='flex'>
            {
                Item.map((it) => {
                    return(
                        <div className="card-container" key={it.id}>
                            <div className="img-container" style={{backgroundColor: it.color}}></div>
                            <div className="info-container">
                                <button className="info-company">🌎 Earth</button>
                                <span className="info-title">{it.title}</span>
                                <span className="info-title">💰 ${it.price}</span><br/>
                                <button className="info-company action" onClick={() => handleAdd(it)}>Add ➕</button>
                                <button className="info-company action">Buy 🛒</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}