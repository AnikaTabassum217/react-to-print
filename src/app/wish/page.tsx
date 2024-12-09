"use client"
import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import WishList from "@/components/wish/WishList";
import WishTable from "@/components/wish/WishTable";


const Page=()=>{
    const componentRef = useRef(null);
    console.log(WishList); 

return(
    <>
     
    {/* <WishList/>
    <WishTable/> */}

    <WishList/>
      <div>
        <div ref={componentRef}>
          <WishTable/>
        </div>
        <ReactToPrint
          trigger={() => (
            <button className="bg-blue-500 text-white px-4 py-2 mt-4">
              Print Wishlist Table
            </button>
          )}
          content={() => componentRef.current}
        />
      </div>
    </>
)
}
export default Page