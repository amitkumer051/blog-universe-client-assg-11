import { useContext, useEffect, useState } from "react";
import WishListCard from "./WishListCard";
import { AuthContext } from "../../Provider/AuthProvider";

const WishList = () => {
    const { user } = useContext(AuthContext);
    const currentUser = user?.email;
    const [wishLists, setWishList] = useState();
    console.log(wishLists);

    const individualdWishList = wishLists?.filter(wishlist => wishlist?.userEmail == currentUser)
    useEffect(() => {
        fetch('https://blog-universe-server-assg-11.vercel.app/wishList')
            .then(res => res.json())
            .then(data => setWishList(data))
    }, [])
    return (
        <div>
            <h2 className="text-2xl font-bold text-center text-amber-600 my-6">Wish List</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 ">
                {
                    individualdWishList?.map(wishList => <WishListCard key={wishList._id} wishList={wishList}></WishListCard>)
                }
            </div>
        </div>
    );
};

export default WishList;