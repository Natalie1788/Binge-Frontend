import { Link } from "@radix-ui/themes"


export default function SideBar() {

    return(
        <div className="container w-40 h-50 border border-gray-500 p-4">
            <ul>
            <li className="mb-2">Smakpreferenser</li>
            <li className="mb-2"><Link href="/Swipe">Svepa</Link></li>
            <li className="mb-2"><Link href="/kokbook">Kokbook</Link></li>
            </ul>
        </div>
    )
}