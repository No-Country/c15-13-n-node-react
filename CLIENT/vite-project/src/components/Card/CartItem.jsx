import AddBoxIcon from '@mui/icons-material/AddBox';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';

export default function CartItem(data) {
    const { price, name, quantity, addToCart, discountOneProduct, removeFromCart } = data;
    return (
        <li className=' w-full flex justify-between'>
            <div>
                {/* <img className=' w-20' src={image} alt={name} /> */}
                <div className='flex items-center'>
                    <strong className=' text-white'>{name}</strong>
                </div>
            </div>
            <div className='flex items-center gap-6'>
                <small className='text-white w-10 text-lg'>
                    {quantity}
                </small>
                <div className="flex flex-col w-10 ">
                    <button className='flex p-1 justify-center items-center' onClick={addToCart}>
                        <AddBoxIcon />
                    </button>
                    <button className='flex p-1 justify-center items-center' onClick={discountOneProduct}>
                        <RemoveIcon />
                    </button>
                </div>
                <button onClick={removeFromCart} className="text-white h-3/4 py-4 rounded border bg-red-500 border-black border-opacity-50 justify-center items-center flex text-base font-medium font-['Poppins'] leading-normal">
                    <DeleteIcon />
                </button>
            </div>
            <div className='text-white flex items-center'>
                ${price}
            </div>
        </li>
    )
}