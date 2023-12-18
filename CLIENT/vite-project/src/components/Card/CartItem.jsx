import AddBoxIcon from '@mui/icons-material/AddBox';
import RemoveIcon from '@mui/icons-material/Remove';

export default function CartItem(data) {
    const { price, name, quantity, addToCart, discountOneProduct } = data;
    return (
        <li className=' w-full flex justify-between'>
            <div>
                {/* <img className=' w-20' src={image} alt={name} /> */}
                <div className='flex items-center'>
                    <strong className=' text-white'>{name}</strong>
                </div>
            </div>
            <div className='flex items-center'>
                <small className='text-white w-10 text-lg'>
                    {quantity}
                </small>
                <div className="flex flex-col w-10">
                    <button className='flex p-1 justify-center items-center' onClick={addToCart}>
                        <AddBoxIcon />
                    </button>
                    <button className='flex p-1 justify-center items-center' onClick={discountOneProduct}>
                        <RemoveIcon />
                    </button>
                </div>
            </div>
            <div className='text-white flex items-center'>
                ${price}
            </div>
        </li>
    )
}