import { useState } from "react";

const Alert = (props) => {
    const { title, massage, err = true } = props
    const [isOpen, setIsOpen] = useState((title || massage) ? true : false)
    if (isOpen) {
        setTimeout(() => {
            setIsOpen(false)
        }, 3000)
    }
    const classes = err ? " text-green-100 bg-green-700 border border-green-700 " : " text-red-100 bg-red-700 border border-red-700 "
    return (
        <>{isOpen ? <div className={(" flex fixed top-6 right-7 justify-center items-center m-1 font-medium py-1 px-2  rounded-md ").concat(classes)}>
            <div slot="avatar">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check-circle w-5 h-5 mx-2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
            </div><div className="text-xl font-normal  max-w-full flex-initial">
                <div className="py-2">{title}
                    <div className="text-sm font-base">{massage}</div>
                </div>
            </div>
        </div > : ""}
        </>
    );
}

export default Alert;
