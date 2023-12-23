import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Contacto() {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handlerSubmit = () => {
        alert("Su mensaje fue enviado exitosamente");
        navigate('/');
    }

    return (
        < >
            <div className="w-full h-full flex flex-row-reverse justify-center flex-wrap bg-white" >

                <div className="px-8 py-10 bg-white rounded shadow justify-center items-center inline-flex">
                    <form onSubmit={handlerSubmit} className=" self-stretch flex-col justify-start items-end gap-4 inline-flex">
                        <label htmlFor="nombre" className='flex self-start'>Nombre</label>
                        <input name='nombre' value={name} required onChange={(event) => setName(event.target.value)} type="text" className='flex w-full bg-slate-200' />
                        <label htmlFor="correo" className='flex self-start'>Email</label>
                        <input name='correo' value={email} required onChange={(event) => setEmail(event.target.value)} type="email" className='flex w-full bg-slate-200' />
                        <textarea name="message" cols="30" rows="10" className=' bg-gray-300'></textarea>

                        <div className="Button px-12 py-4 bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
                            <button className=" bg-transparent text-neutral-50 text-base font-medium font-['Poppins'] leading-normal">Send Massage</button>
                        </div>
                    </form>
                </div>
                <div className="px-9 pt-10 pb-12 bg-white rounded shadow flex-col justify-around items-center inline-flex">
                    <div className="self-stretch flex flex-col justify-evenly items-center gap-8">
                        <div className="flex-col justify-start items-start gap-6 flex">
                            <div className="justify-start items-center gap-4 inline-flex">
                                <div className="IconsPhone w-10 h-10 flex items-center justify-center bg-red-500 rounded-3xl">
                                    <LocalPhoneIcon />
                                </div>
                                <div className="CallToUs text-black text-base font-medium font-['Poppins'] leading-normal">Llamanos</div>
                            </div>
                            <div className="Frame859 flex-col justify-start items-start gap-4 flex">
                                <div className="WeAreAvailable2477DaysAWeek w-64 text-black text-sm font-normal font-['Poppins'] leading-tight">Nosotros estamos disponible 24/7, 7 dias a la semana.</div>
                                <div className="Phone8801611112222 text-black text-sm font-normal font-['Poppins'] leading-tight">Phone: +8801611112222</div>
                            </div>
                        </div>
                        <div className="Underline w-64 h-px opacity-50 justify-center items-center inline-flex">
                            <div className="Line1 w-64 h-px border border-black"></div>
                        </div>
                        <div className="Frame862 flex-col justify-start items-start gap-6 flex">
                            <div className="Frame857 justify-start items-center gap-4 inline-flex">
                                <div className="IconsMail w-10 h-10 flex items-center justify-center bg-red-500 rounded-3xl">
                                    <MailOutlineIcon />
                                </div>
                                <div className=" text-black text-base font-medium font-['Poppins'] leading-normal">Escribenos un correo</div>
                            </div>
                            <div className="flex-col justify-start items-start gap-4 flex">
                                <span>Emails: customer@exclusive.com</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </ >
    )
}