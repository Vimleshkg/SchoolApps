'use client'
import useSWR from 'swr';
import Card from './Card'
const ShowSchool = () => {
  
  const fetcher = async () => {
    const response = await fetch('/api/users');
    const data = await response.json();
    return data;
  };

  const { data, error } = useSWR('/api/users/route', fetcher);

  if (error) return <div>Error fetching data</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className='place-items-center pt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1'>
      {data.map((dt, ind) => (
        <Card data={dt}/>
      ))}
    </div>
  );
};

export default ShowSchool;
