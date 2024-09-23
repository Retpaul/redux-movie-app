import CartItem from "./cartItem";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "./modalSlice";

const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((store) => store.cart);

  if (amount < 1) {
    return (
      <section className="min-h-[calc(100vh-120px)] w-[90vw] mx-auto mt-10 py-10 max-w-[50rem]">
        <header>
          <h2 className="uppercase text-center mb-12">your bag</h2>
          <h4 className="lowercase bg-[#617d98]">is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="min-h-[calc(100vh-120px)] w-[90vw] mx-auto mt-10 py-10 max-w-[50rem]">
      <header>
        <h2 className="uppercase text-center mb-12 ">your bag</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer className="mt-16 text-center">
        <hr className=" bg-gray-600 border-transparent border-[0.25px] " />
        <div>
          <h4 className="capitalize flex justify-between mt-4">
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button
          className="bg-transparent px-4 py-2 text-red-700 border border-red-700 mt-9 rounded uppercase bg-purple-500 inline-block font-bold transition-all ease-linear duration-300 cursor-pointer shadow-md hover:bg-red-400 hover:text-red-700"
          onClick={() => dispatch(openModal())}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};
export default CartContainer;
