import Image from "next/image"

const MenuItem = () => {
    return (
        <>
        <div className="bg-gray-200 p-4 rounded-lg text-center group hover:bg-white hover:shadow-2xl hover:shadow-black transition-all">
                <img src="/pizza.png" alt="pizza"/>
                <h4 className="font-semibold my-4">Pepperoni Pizza</h4>
                <p className="text-gray-500 text-sm">xxx</p>
                <button className="bg-primary text-white rounded-full px-6 py-2">Add to cart $12</button>
            </div>
        </>
    )
}
export default MenuItem