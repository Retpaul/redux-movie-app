import { ChevronDown, ChevronUp } from "./icons";
import { removeItem, increase, decrease } from "./cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <article className="grid items-center grid-cols-3 gap-6 my-6">
      <img src={img} alt={title} className="w-20 h-20 object-cover" />
      <div>
        <h4 className="mb-2 font-medium leading-[2px]">{title}</h4>
        <h4 className="text-gray-600">${price}</h4>
        <button
          className="text-purple-500 cursor-pointer text-sm bg-transparent mt-2 transition-all ease-linear duration-300 hover:text-purple-400"
          onClick={() => {
            dispatch(removeItem(id));
          }}
        >
          remove
        </button>
      </div>
      <div>
        <button
          className="w-6 bg-transparent cursor-pointer"
          onClick={() => {
            dispatch(increase({ id }));
          }}
        >
          <ChevronUp />
        </button>
        <p className="text-center text-xl ">{amount}</p>
        <button
          className="w-6 bg-transparent cursor-pointer"
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decrease({ id }));
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};
export default CartItem;
