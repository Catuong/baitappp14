import { useState } from "react";
import { Menu} from "lucide-react";



export default function Modal() {
  
  const [isOpen, setIsOpen] = useState(false);

  function onClick() {
    
    const nextIsOpen = !isOpen;

   
    setIsOpen(nextIsOpen);
  }

  return (
    <div
      className={`md:hidden flex-end py-5 ${
        isOpen === true ? "" : ""
      }`}
    >
      <button
        className=""
        onClick={onClick}
      >
         <Menu />
      </button>
     

      {/* {isOpen === true ? <p className="p-4">Hello</p> : ""} */}
      {isOpen === true && 
      <div className="md:hidden">
      <div className="bg-white pb-5 md:text-sm md:static md:block absolute z-20 top-2 inset-x-4 shadow-lg rounded-xl border md:shadow-none md:border-none">
        <div className=" gap-x-20 items-center md:flex">
            <div className="flex items-center justify-between py-5 md:block">
          <a href="/">
              <img src="https://split-xi.vercel.app/split.svg" alt="" />
            </a>
            <div className="md:hidden">
              <button>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" class="h-6 w-6"><path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
              </button>

            </div>
            </div>
          <div className="flex-1 items-center mt-8 text-gray-600 md:font-medium md:mt-0 md:flex block ">
          <ul className="justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
              <li className="hover:text-gray-900">
                <a href="" className="block">
                  Features
                </a>
              </li>
              <li className="hover:text-gray-900">
              <a href="" className="block">
                  Pricing
                </a>
              </li>
              <li className="hover:text-gray-900">
              <a href="" className="block">
                  FAQs
                </a>
              </li>
            </ul>
            <div className="flex-1 gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
            <a
              href="/"
              className="block hover:text-gray-900"
            >Sign in</a>
            <a
              href="/"
              className="py-2.5 px-4 text-center rounded-full duration-150 flex items-center justify-center gap-x-1 text-sm text-white font-medium bg-gray-800 hover:bg-gray-600 active:bg-gray-900 md:inline-flex"
            >
              Get started
            </a>
          </div>
          </div>
          </div>
        </div>
        </div>
        }
    </div>
  );
}
  

