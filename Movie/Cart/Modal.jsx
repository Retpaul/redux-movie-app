import { useDispatch } from "react-redux";
import { clearCart } from "./cartSlice";
import { closeModal } from "./modalSlice";

const Modal = () => {
  const dispatch = useDispatch();
  return (
    <aside className="fixed top-0 left-0 w-full h-full bg-gray-300 opacity-90 z-10 flex items-center justify-center">
      <div className="bg-white w-[80vw] max-w-[400px] rounded-xl py-8 px-4 text-center">
        <h4 className="leading-6">remove all items from your shopping cart?</h4>
        <div className="flex justify-around">
          <button
            type="button"
            className="uppercase bg-purple-500 px-3 py-2 inline-block font-bold text-xs shadow-sm mt-4"
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
            }}
          >
            confirm
          </button>
          <button
            type="button"
            className="uppercase bg-purple-500 px-3 py-2 inline-block font-bold text-xs shadow-sm mt-4"
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
};
export default Modal;
