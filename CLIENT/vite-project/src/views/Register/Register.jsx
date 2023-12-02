export default function Register() {
    return (
        <>
            <div className="Line3 w-96 h-px left-0 top-[140px] absolute justify-center items-center inline-flex">
                <div className="Line3 w-96 h-px origin-top-left rotate-180 opacity-30 border border-black"></div>
            </div>
            <div className="Frame760 left-0 top-[200px] absolute justify-start items-center gap-32 inline-flex">
                <div className="SideImage pl-4 pr-5 pt-20 pb-16 bg-sky-50 rounded-tr rounded-br justify-center items-center flex">
                    <img className="DlBeatsnoop1 w-96 h-96" src="https://via.placeholder.com/770x640" />
                </div>
                <div className="Frame759 flex-col justify-start items-start gap-12 inline-flex">
                    <div className="Frame753 flex-col justify-start items-start gap-6 flex">
                        <div className="CreateAnAccount text-black text-4xl font-medium font-['Inter'] leading-loose tracking-wider">Create an account</div>
                        <div className="EnterYourDetailsBelow text-black text-base font-normal font-['Poppins'] leading-normal">Enter your details below</div>
                    </div>
                    <div className="Frame758 flex-col justify-start items-center gap-10 flex">
                        <div className="Frame757 flex-col justify-start items-start gap-10 flex">
                            <div className="Frame754 flex-col justify-start items-start gap-2 flex">
                                <div className="Name opacity-40 text-black text-base font-normal font-['Poppins'] leading-normal">Name</div>
                                <div className="Underline w-96 h-px opacity-50 justify-center items-center inline-flex">
                                    <div className="Line1 w-96 h-px border border-black"></div>
                                </div>
                            </div>
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
                        <div className="Frame752 flex-col justify-start items-start gap-4 flex">
                            <div className="Button px-32 py-4 bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
                                <div className="VerTodosLosProductos text-neutral-50 text-base font-medium font-['Poppins'] leading-normal">Create Account</div>
                            </div>
                            <div className="Frame751 flex-col justify-start items-center gap-8 flex">
                                <div className="GoogleSignUp px-20 py-4 rounded border border-black border-opacity-40 flex-col justify-start items-start gap-2.5 flex">
                                    <div className="Frame748 justify-start items-start gap-4 inline-flex">
                                        <div className="IconGoogle w-6 h-6 relative" />
                                        <div className="SignUpWithGoogle text-black text-base font-normal font-['Poppins'] leading-normal">Sign up with Google</div>
                                    </div>
                                </div>
                                <div className="Frame750 justify-start items-center gap-4 inline-flex">
                                    <div className="AlreadyHaveAccount opacity-70 text-black text-base font-normal font-['Poppins'] leading-normal">Already have account?</div>
                                    <div className="Frame749 flex-col justify-start items-start gap-1 inline-flex">
                                        <div className="LogIn opacity-70 text-black text-base font-medium font-['Poppins'] leading-normal">Log in</div>
                                        <div className="Underline w-12 h-px relative opacity-50">
                                            <div className="Line1 w-12 h-px left-0 top-0 absolute border border-black"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}