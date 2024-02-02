import { IoMdSearch } from "react-icons/io";

export default function SearchBox() {
    return (
        <div className="relative w-full sm:max-w-xs">
            <input 
                type="text" 
                placeholder="Type here..." 
                className="input input-bordered input-primary w-full" 
            />
            <button className="btn btn-ghost absolute top-0 right-0">
                <IoMdSearch size={20} className="text-primary"/>
            </button>
        </div>
    )
}
