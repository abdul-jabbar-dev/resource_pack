import { useEffect, useState } from "react"; 
import cryptoJs from "crypto-js";

const Login = () => {


    const [pin, setPin] = useState('')
    const [getSicretPin, setGetSicretPin] = useState('')
    const [salt, setSalt] = useState('')
    useEffect(() => {
        fetch('/pin.csv')
            .then(res => res.text())
            .then(pins => {
                setGetSicretPin(pins.split("\r\n")[0].split(',')[1])
                setSalt(pins.split("\r\n")[1].split(',')[1])
            })
    }, [])
    const loginSubmit = async () => { 
        if (getSicretPin === undefined) {
            alert('someting is wrong!! try again or cheack pin. as a admin')
        }
        if (pin.toString() === getSicretPin.toString()) {
            const encdata = cryptoJs.AES.encrypt((getSicretPin).toString() , salt.toString()).toString();
 
            localStorage.setItem('user', encdata)
        }

    }
    return (
        <div className="">
            <div className="min-h-screen overflow-x-hidden relative flex justify-center items-center">
                <div className="absolute w-60 h-60 rounded-xl bg-gray-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block">
                </div>
                <div className="absolute w-48 h-48 rounded-xl bg-gray-300 -bottom-6 -right-10 transform rotate-12 hidden md:block">
                </div>
                <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
                    <div>
                        <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">Enter your information</h1>
                        <p className="w-80 text-center text-sm mb-12 font-semibold text-gray-700 tracking-wide cursor-pointer"> </p>
                    </div>
                    <div className="space-y-4">
                        {/* <input type="text" placeholder="Email Addres" className="block text-sm py-3 px-4 rounded-lg w-full border outline-none" /> */}
                        <input onChange={(e) => setPin(e.target.value)} type="text" placeholder="Pin" name="pin" className="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
                    </div>
                    <div className="text-center mt-6">
                        <button onClick={loginSubmit} className="py-3 w-64 text-xl text-white bg-gray-400 rounded-2xl">Login</button>
                        {/* <p className="mt-4 text-sm">You don't have any Account? <span className="underline cursor-pointer"> Sign Up</span>
                        </p> */}
                    </div>
                </div>
                <div className="w-40 h-40 absolute bg-gray-300 rounded-full top-0 right-12 hidden md:block"></div>
                <div
                    className="w-20 h-40 absolute bg-gray-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block">
                </div>
            </div>
        </div>
    );
}

export default Login;
