import AddBoxIcon from '@mui/icons-material/AddBox';
import RemoveIcon from '@mui/icons-material/Remove';

export default function CartItem(data) {
    const { image, price, name, quantity, addToCart, removeFromCart } = data;
    console.log("aca llega");
    return (
        <li className=' w-full flex justify-between'>
            <img className=' w-20' src={image} alt={name} />
            <div className='flex items-center'>
                <strong className=' text-white'>{name}</strong>
            </div>
            <div>
                <small>
                    {quantity}
                </small>
                <div className="flex flex-col w-10">
                    <button className='flex p-1 justify-center items-center' onClick={addToCart}>
                        <AddBoxIcon />
                    </button>
                    <button className='flex p-1 justify-center items-center' onClick={removeFromCart}>
                        <RemoveIcon />
                    </button>
                </div>
            </div>
            <div>
                ${price}
            </div>
        </li>
    )
}