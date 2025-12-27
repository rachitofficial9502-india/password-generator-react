import { useCallback, useEffect, useState } from 'react'
import './App.css'

function PassGenerator() {

    const [lenth, setLenth] = useState(8)
    const [password, setPassword] = useState("A")
    const [charAllowed, setCharAllowed] = useState(false)
    const [numAllowed, setNumAllowed] = useState(false)

    let pass = ""
    let str = "ABCDEFGHIJKabcdefghijVWXYZklmnopqrstuvwLMNOPQRSTUxyz"

    const generatePassword = useCallback(() => {
            if (charAllowed) {
            str += "!@#$%^&*()_+-={}[]|\:;'<>,.?/\"~"
        }
        if (numAllowed) {
            str += "0123456789"
        }

        let strLen = str.length

        for (let i = 1; i <= lenth; i++) {

            let index = Math.floor((Math.random()*strLen))
            pass += str[index]

        } 

    }, [lenth, charAllowed, numAllowed]) 

    let newPassword = useEffect(() => {
        generatePassword()
        setPassword(pass)
    }, [lenth, charAllowed, numAllowed])

    return (
        <>
            <div className='bg-gray-500 flex flex-col  w-100 rounded-lg'>
                <div className='p-2 rounded-lg text-black'>
                    <input type="text" placeholder='Password' className='p-2 rounded-lg border-1 border-black' value={password}/>
                    <button className='text-white bg-blue-500 p-2 rounded-lg ml-1'>Copy</button>
                </div>
                <div className='flex flex-row p-1 mx-auto mt-auto'>
                    <div className='flex flex-row'>
                        <input type="range" min={1} max={20} id='range' className='mr-1'
                        onChange={(e) => {
                            setLenth(e.target.value)
                        }}
                        value={lenth}
                        /><label htmlFor="range" >{lenth}</label>
                    </div>
                    <div className='p-1 flex flex-row mx-2'>
                        <input type="checkbox" name="checkbox" id="number"
                        onChange={(e) => {
                            let isChecked = e.target.checked
                            setNumAllowed(isChecked)
                        }}
                        /><label htmlFor="number">Number</label>
                    </div>
                    <div className='p-1 flex flex-row'>
                        <input type="checkbox" name="checkbox" id="char"
                        onChange={(e) => {
                            let isChecked = e.target.checked
                            setCharAllowed(isChecked)
                        }}
                        /><label htmlFor="char">Character</label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PassGenerator