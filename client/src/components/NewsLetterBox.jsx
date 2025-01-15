import React from "react";

const NewsLetterBox = () => {
  const onSubmitHandler = (e)=>{
    e.preventDefault();
  }
  return (
    <>
      <div className="text-center ">
        <p className="text-2xl font-medium text-gray-800">
          Subscribe now & Get 20% off
        </p>
        <p className="text-gray-600  mt-3">
          Subscribe and get instant 20% discount using
        </p>
        
        <form onSubmit={onSubmitHandler} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3">
            <input className="w-full sm:flex-1 outline-none" type="email" placeholder="Enter your Email" required/>
            <button className="bg-third text-white text-xs px-10 py-4" type="submit">Subscribe</button>
        </form>
      </div>
    </>
  );
};

export default NewsLetterBox;
