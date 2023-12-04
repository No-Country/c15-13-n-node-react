export default function Login() {
    return (
        <>

            <div className="Line3 w-96 h-px left-0 top-[140px] absolute justify-center items-center inline-flex">
                <div className="Line3 w-96 h-px origin-top-left rotate-180 opacity-30 border border-black"></div>
            </div>
            <div className="Frame767 left-0 top-[200px] absolute justify-start items-center gap-32 inline-flex">
                <div className="SideImage h-96 px-9 pt-16 pb-28 bg-slate-50 rounded-tr rounded-br justify-center items-center flex">
                    <img className="DlBeatsnoop1 w-96 h-96" src="https://via.placeholder.com/729x599" />
                </div>
                <div className="Frame766 flex-col justify-start items-start gap-10 inline-flex">
                    <div className="Frame764 flex-col justify-start items-start gap-12 flex">
                        <div className="Frame753 flex-col justify-start items-start gap-6 flex">
                            <div className="LogInToExclusive text-black text-4xl font-medium font-['Inter'] leading-loose tracking-wider">Log in to Exclusive</div>
                            <div className="EnterYourDetailsBelow text-black text-base font-normal font-['Poppins'] leading-normal">Enter your details below</div>
                        </div>
                        <div className="Frame757 flex-col justify-start items-start gap-10 flex">
                            <div className="Frame755 flex-col justify-start items-start gap-2 flex">
                                <div className="EmailOrPhoneNumber opacity-40 text-black text-base font-normal font-['Poppins'] leading-normal">Email or Phone Number</div>
                                <div className="Underline w-96 h-px opacity-50 justify-center items-center inline-flex">
                                    <div className="Line1 w-96 h-px border border-black"></div>
                                </div>
                            </div>
                            <div className="Frame756 flex-col justify-start items-start gap-2 flex">
                                <div className="Password opacity-40 text-black text-base font-normal font-['Poppins'] leading-normal">Password</div>
                                <div className="Underline w-96 h-px opacity-50 justify-center items-center inline-flex">
                                    <div className="Line1 w-96 h-px border border-black"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Frame765 justify-start items-center gap-20 inline-flex">
                        <div className="Frame752 flex-col justify-start items-start gap-4 inline-flex">
                            <div className="Button px-12 py-4 bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
                                <div className="VerTodosLosProductos text-neutral-50 text-base font-medium font-['Poppins'] leading-normal">Log In</div>
                            </div>
                        </div>
                        <div className="ForgetPassword text-red-500 text-base font-normal font-['Poppins'] leading-normal">Forget Password?</div>
                    </div>
                </div>
            </div>
        </>
    );
}