
'use client'
import useSWR, { mutate } from 'swr';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddSchoolForm = () => {
  const [iSubmitted,setSubmited]=useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const fetcher = async (url, data) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    setSubmited(true);
    return response.json();
};

  const onSubmit = async (data) => {
    data && console.log(data);
    try {
      const { dat, error } = await fetcher('/api/users', data);
      if (error) {
          console.error('Failed to post data:', error);
          return;
      }
      mutate('/api/users/route');
      console.log('Data posted successfully:', dat);
  } catch (error) {
      console.error('Error posting data:', error);
  }
  };

  return (
   <div className='pt-[2%]  '>

    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md rounded-lg shadow-lg bg-slate-200 p-2 px-16 mx-auto flex flex-col  py-4 ">
       <div className='flex justify-center mb-3'><h2 className=' font-bold text-xl'>Add School</h2></div>
      <div className="mb-2">
        <label htmlFor="name" className="block font-bold text-gray-700">School Name</label>
        <input type="text" id="name" {...register('name', { required: true })} className="mt-1 block w-full rounded border-gray-300" />
        {errors.name && <span className="text-red-500">School Name is required</span>}
      </div>

      <div className="mb-2">
        <label htmlFor="email" className="block font-bold text-gray-700">Email</label>
        <input type="email" id="email" {...register('email', { required: true, pattern: /^\S+@\S+$/i })} className="mt-1 block w-full rounded border-gray-300" />
        {errors.email && <span className="text-red-500">Email is required and must be valid</span>}
      </div>

      <div className="mb-2">
        <label htmlFor="contact" className="block font-bold text-gray-700">Contact</label>
        <input type="text" id="contact" {...register('contact', { required: true, pattern: /^[0-9]+$/ })} className="mt-1 block w-full rounded border-gray-300" />
        {errors.contact && <span className="text-red-500">Contact is required and must contain only numbers</span>}
      </div>

      <div className="mb-2">
        <label htmlFor="address" className="block font-bold text-gray-700">Address</label>
        <input type="text" id="address" {...register('address', { required: true })} className="mt-1 block w-full rounded border-gray-300" />
        {errors.address && <span className="text-red-500">Address is required</span>}
      </div>

      <div className="mb-2">
        <label htmlFor="city" className="block font-bold text-gray-700">City</label>
        <input type="text" id="city" {...register('city', { required: true })} className="mt-1 block w-full rounded border-gray-300" />
        {errors.city && <span className="text-red-500">City is required</span>}
      </div>

      <div className="mb-2">
        <label htmlFor="state" className="block font-bold text-gray-700">State</label>
        <input type="text" id="state" {...register('state', { required: true })} className="mt-1 block w-full rounded border-gray-300" />
        {errors.state && <span className="text-red-500">State is required</span>}
      </div>

      <div className="mb-2">
        <label htmlFor="image" className="block font-bold text-gray-700">Image Link</label>
        <input type="text" id="image" {...register('image', { required: true })} className="mt-1 block w-full rounded border-gray-300" />
        {errors.image && <span className="text-red-500">Image Link is required</span>}
      </div>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-700">{ iSubmitted ? 'Submited...' : 'Submit'}</button>
    </form>
    </div>
  );
};

export default AddSchoolForm;
