import Link from "next/link";

const Navbar = () =>{
    return (<nav className="h-[50px]">
        <p>Navbar</p>
        <Link href="/activities">
            Activity
        </Link>
    </nav>)
}

export default Navbar;