import React from 'react'

const AcceptTask = ({data}) => {
  // console.log("data",data)
  
  return (
   
    <div className='flex-shrink-0 h-full w-[400px] bg-blue-400 rounded-xl p-5'>
    <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 text-sm px-3 rounded'>{data.task_category}</h3>
        <h4 className='text-sm'>{data.task_date}</h4>
    </div>
    <h4 className='mt-5 text-2xl font-semibold'>{data.task_title}</h4>
    <p className='text-sm mt-2'>
        {data.task_description}
    </p>
    <div className='flex justify-between mt-4'>
        <button className='bg-red-500  px-1 py-2 text-sm'>Mark as Failed</button>
        <button className='bg-green-500  px-1 py-2 text-sm'>Mark As Completed</button>
   
    </div>

</div>
  
 
  )
  
  
}

export default AcceptTask