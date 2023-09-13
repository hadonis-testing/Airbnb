import EmtyWishList from "./emtyWishlist";
import WishItem from "./wishItem";
import { useDispatch, useSelector } from "react-redux";

export default function WishItems() {
  const wishIdArr = useSelector((s) => s.wishSlice.wishIdArr);

  return (
    <div
      className={`items  grid  7:grid-cols-3 11:grid-cols-4 
      gap-x-6 gap-y-c12 7:gap-y-6  11:gap-y-c30
      ${wishIdArr.length === 0 ? '':'grid-cols-2'}`}
    >
      {wishIdArr.length === 0 ? (
        <EmtyWishList />
      ) : (
        <>
          {wishIdArr.map((item, index) => {
            return <WishItem i={item} key={index} />;
          })}
        </>
      )}
    </div>
  );
}