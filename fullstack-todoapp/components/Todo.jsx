
const Todo = ({complete,title,description,id,mongoId,deleteTodo,updateTodo}) => {
  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
        <th scope="row" className="px-3 py-2 sm:px-6 sm:py-3 font-medium text-[10px] sm:text-[12px] text-gray-900 whitespace-nowrap dark:text-white">
            {id}
        </th>
        <td className={` ${complete? "line-through":""}  pl-4 py-2 text-[10px] sm:text-[11px] lg:text-[13px] sm:py-3`}>
            {title}
        </td>
        <td className={` ${complete? "line-through":""}  pl-4 py-2 text-[10px] sm:text-[11px] lg:text-[13px] sm:py-3`}>
            {description}
        </td>
        <td className="px-3 py-2 text-[10px] sm:text-[11px] lg:text-[13px]  sm:py-3">
            {complete? "Completed":"Pending"}
        </td>
        <td className="px-3 py-2 sm:px-6 sm:py-3 ">
          <div className="flex gap-1 text-[9px] sm:text-[12px] lg:text-[13px]">
            <button onClick={()=>deleteTodo(mongoId)} className="bg-red-500 text-white sm:px-4 px-2 py-1 sm:py-2 cursor-pointer">Delete</button>
            {complete? "":<button onClick={()=>updateTodo(mongoId)} className="bg-green-500 text-white sm:px-4 px-2 py-1 sm:py-2 cursor-pointer">Done</button>}
          </div>   
        </td>
      </tr>
    </>
  )
}

export default Todo