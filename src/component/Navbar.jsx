import { MdMenu } from "react-icons/md";
import {NavbarData} from "../data/MockData";
import { FaApple, FaRegUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="text-white py-5">
      <div className="container flex justify-between items-center">
          <div className="flex items-center gap-2 text-3xl font-semibold">
            <FaApple />
            AirPods Max 
          </div>

          <div className="hidden md:block">
            <ul className="flex items-end gap-4"> 
              {
                NavbarData.map((item) => {
                  return (
                    <li key={item.id}>
                      <a 
                        href={item.link}
                        className="inline-block text-base py-2 px-3 uppercase"
                      >
                        {item.title}
                      </a>
                    </li>
                  )
                })
              }
              <button className="text-xl ps-14">
                <FaRegUser/>
              </button>
            </ul>
          </div>

          <div className="md:hidden">
            <MdMenu  className="text-4xl"/>
          </div>
      </div>
    </nav>
  )
}

export default Navbar
