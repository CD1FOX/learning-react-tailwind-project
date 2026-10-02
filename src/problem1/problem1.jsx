import { useState } from "react"

function Problem1() {
    const [clicked, setClicked] = useState(false)

    return(
        <div className="bg-amber-50 flex h-screen justify-center items-center">
            <div className="bg-black h-100 w-70 rounded-3xl shadow-xl shadow-red-900 text-white flex items-center flex-col">
                <div className="bg-white rounded-full h-16 w-16 mt-5"></div>
                <div className="mt-5 font-bold text-2xl">Francis Leo T. Lusdoc</div>
                <div className="mt-2 text-md">Senior Web Developer</div>
                <div className="mt-2 text-sm text-gray-400">To live is to be alive - unkown</div>
                <div>
                    <button type="button" className="mt-5 bg-blue-600 py-2 px-10 rounded-2xl" 
                    onClick={()=>{
                        setClicked(!clicked)
                    }}
                    >{clicked ? "Following" : "Follow"}</button>
                </div>
            </div>
        </div>
    )
}

export default Problem1