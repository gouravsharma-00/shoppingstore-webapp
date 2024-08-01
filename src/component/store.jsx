import Item from '../data/Item.json';

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
                        <div style={{
                            width: '220px',
                            height: '250px',
                            flexDirection: 'column',
                            backgroundColor: '#D9D9D9',
                            borderRadius: '10px'
                        }} className='flex' key={it.id}>
                            <img height='100px' width='100%' />
                            <p>{it.title}</p>
                            <span>{it.price}</span>
                            <button onClick={() => handleAdd(it)}>Add</button>
                        </div>
                    )
                })
            }
        </div>
    )
}