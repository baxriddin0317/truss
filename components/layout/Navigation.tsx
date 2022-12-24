import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useRouter } from 'next/router'
import { AiFillCloseCircle } from "react-icons/ai"

const menuList = [
    {
        name: "Schedule a Demo",
        href: "/demo",
    },
    {
        name: "Product",
        href: "/product",
    },
    {
        name: "Pricing",
        href: "/pricing",
    },
]

const menu = [
    {
        name: "Home",
        href: "/"
    },
    {
        name: "Solutions",
        href: "/solution",
    },
    {
        name: "Schedule a Demo",
        href: "/demo",
    },
    {
        name: "Product",
        href: "/product",
    },
    {
        name: "Pricing",
        href: "/pricing",
    },
]

interface Imenu {
    name: string;
    href: string;
}

const Navigation = () => {
    const route = useRouter();
    const [active, setActive] = useState<string>(route.pathname);
    const [menu, setMenu] = useState<boolean>();
    
    useEffect(() => {
        setActive(route.pathname)
    }, [route.pathname])

  return (
    <header className="py-7">
        <div className="costum-container">
            <div className="flex items-start justify-between">
                <Link href={'/'}>
                    <Image src={require("../../public/Assets/Logo.png")} alt="logo-site" />
                </Link>

                <nav>
                    <ul className="flex items-center gap-5">
                        {
                            menuList.map((item: Imenu) => (
                                <li key={item.name}>
                                    <Link href={item.href} legacyBehavior>
                                        <a className={`${active === item.href ? 'bg-brand-gray-primary/40 text-brand-blue-primary' : ''} nav-link `}>
                                            {item.name}
                                        </a>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>

                <button onClick={() => setMenu(!menu)}>
                    <Image src={require("../../public/Assets/menu.png")} alt="menu bnt" />
                </button>
            </div>
        </div>
        <Menu menuProps={menu} active={active} setMenu={setMenu}  />
    </header>
  )
}

const Menu = ({menuProps, active, setMenu}: any) => {
    return (
        <div className={`fixed w-full h-full duration-300 z-50 bg-black/60 top-0 ${menuProps ? 'right-0': '-right-full'}`}>
            <div className="w-1/3 p-7 ml-auto h-full bg-white rounded-tl-3xl rounded-bl-3xl">
                <div className="mb-20 flex justify-end">
                    <button onClick={() => setMenu(false)}>
                        <AiFillCloseCircle className="text-3xl text-brand-blue-primary" />
                    </button>
                </div>
                <nav className="">
                    <ul className="flex flex-col items-center justify-center gap-10">
                        {
                            menu.map((item: Imenu) => (
                                <li key={item.name}>
                                    <Link href={item.href} legacyBehavior>
                                        <a className={`${active === item.href ? 'bg-brand-gray-primary/40 text-brand-blue-primary' : ''} nav-link `}>
                                            {item.name}
                                        </a>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navigation