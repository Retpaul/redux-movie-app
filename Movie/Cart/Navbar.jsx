import { CartIcon } from "./icons";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { amount } = useSelector((store) => store.cart);
  return (
    <>
      <nav className="bg-[#645cff] py-5 px-8 ">
        <div className="max-w-[50rem] w-full mx-auto flex justify-between items-center">
          <h3 className="mb-0 text-white">redux toolkit</h3>
          <div className="block relative">
            <CartIcon />
            <div className="absolute -top-[0.6rem] -right-[0.6rem] w-7 h-7 rounded-[50%] bg-[#a29dff] flex items-center justify-center">
              <p className="text-white mb-0 text-xl">{amount}</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
