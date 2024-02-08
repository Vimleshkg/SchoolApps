import React from 'react'

const Card = (data) => {
    console.log(data);
    const {Id,Name, Email, Contact,Address,City,State,ImageLink }=data.data;
  return (
    <div className="w-60 h-64 flex flex-col items-center  relative overflow-auto bg-slate-200 rounded-lg m-2 shadow-lg">
    <div className=' '>
      <img className="   w-screen object-cover h-28" src={ImageLink} />
     
      <div className='pl-2'>
      <h4 className=" text-sm text-blue-400 pt-4">{ City }</h4>
      <h3 className="font-bold text-lg  pt-2">{Name}</h3>
      
      <h4 className=" pt-1 text-gray-500">{Address} </h4>
       
      </div>
      
    </div>
    <div className='flex hover:bg-green-400 font-bold  justify-center text-sm mt-2 w-[100%] py-2  bg-green-500'> <button>Apply Now</button> </div>
    </div>
  )
}

export default Card