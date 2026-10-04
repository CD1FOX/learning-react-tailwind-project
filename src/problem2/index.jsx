import { useState } from "react"

function index() {
    const [count, setCount] = useState(0)

    const addCount = () => {
        setCount(prev => prev + 1)
    }

    const subCount = () => {
        setCount(prev => prev - 1)
    }

    const resetCount = () => {
        setCount(0)
    }

    const countColor =
        count > 0 ? "text-green-500":
        count < 0 ? "text-red-500":
        "text-gray-500"

    return (
        <div className="flex justify-center h-screen items-center flex-col gap-10">
            <span className={`text-8xl font-extrabold ${countColor}`}>{count}</span>
            <div className="gap-10 flex">
                <button type="button" className="bg-black text-white py-2 px-10 rounded-2xl" onClick={addCount}>+</button>
                <button type="button" className="bg-black text-white py-2 px-10 rounded-2xl" onClick={subCount}>-</button>
                <button type="button" className="bg-black text-white py-2 px-10 rounded-2xl" onClick={resetCount}>Reset</button>
            </div>
        </div>
    )
}

export default index