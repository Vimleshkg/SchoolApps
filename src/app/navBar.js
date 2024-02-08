import Link from 'next/link';


const navBar = () => {

    
  return (
    <div className='bg-black p-1 shadow-xl p flex justify-between items-center border-b-2'>
    <Link href='/'>
      <img className='w-10 sm:w-12 ml-4 sm:ml-12 shadow-lg  bg-white rounded-full'  src="https://png.pngtree.com/png-clipart/20211017/original/pngtree-school-logo-png-image_6851480.png" alt="School Logo"/>
    </Link>
    <ul className='flex mr-4 sm:mr-10'>
      <li className='px-1 font-bold text-xs sm:px-4 bg-gray-700 sm:text-base py-2 m-1 sm:m-2 text-white rounded-md  hover:bg-gray-500'><Link href='/showSchool'>Show Schools</Link></li>
      <li className='px-1 font-bold text-xs sm:px-4 sm:text-base py-2 m-1 sm:m-2 text-white rounded-md hover:bg-gray-600'>Addmission</li>
      <li className='px-1 font-bold text-xs sm:px-4 sm:text-base py-2 m-1 sm:m-2 text-white rounded-md  hover:bg-gray-600'>About Us</li>
      <li className='px-1 font-bold text-xs sm:px-4 sm:text-base py-2 m-1 sm:m-2 text-white rounded-md  hover:bg-gray-600'>More</li>
    </ul>
  </div>

  )
}


export default navBar