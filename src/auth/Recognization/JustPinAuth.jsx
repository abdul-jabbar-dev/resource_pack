import { useEffect, useState } from "react";
import cryptoJs from "crypto-js";
import { useNavigate } from "react-router-dom";


const JustPinAuth = ({ children }) => {
    const Navigate = useNavigate()
    const [pin, setPin] = useState('')
    const [salt, setSalt] = useState('')

    useEffect(() => {
        fetch('/pin.csv')
            .then(Res => Res.text())
            .then(pins => {
                setPin(pins.split("\r\n")[0].split(',')[1])
                setSalt(pins.split("\r\n")[1].split(',')[1])
            })
    }, [])

    try {
 
        var bytes = cryptoJs.AES.decrypt((localStorage.getItem('user')).toString(), salt);
    var  decryptedData  = bytes.toString(cryptoJs.enc.Utf8);
    // const decryptedData = JSON.parse(info2);
        console.log(decryptedData)
        if (decryptedData.toString() === pin.toString()) {
            return children
        }else{
            return Navigate('/login')
        }
    } catch (error) { 
        localStorage.removeItem('user')
        return Navigate('/login')
    }
    



}

export default JustPinAuth;
