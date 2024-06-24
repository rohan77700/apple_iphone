import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between w-full py-5 sm:px-10 px-5">
        <nav className="flex screen-max-width w-full">
            <img src={appleImg} alt="Apple" width={14} height={18} />

            <div className="flex flex-1 justify-center max-sm:hidden">
                {navLists.map((nav) => (
                    <div 
                    key={nav} 
                    className="px-5 text-sm text-gray hover:text-white transition-all cursor-pointer">
                        {nav}
                    </div>
                ))}
            </div>

            <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1 cursor-pointer">
                <img src={searchImg} alt="search" width={18} height={18} />
                <img src={bagImg} alt="bag" width={18} height={18} />
            </div>
        </nav>
    </header>
  );
}

export default Navbar;
