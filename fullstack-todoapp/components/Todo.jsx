
const Todo = () => {
  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
        <th scope="row" className="px-3 py-2 sm:px-6 sm:py-3 font-medium text-[10px] sm:text-[12px] text-gray-900 whitespace-nowrap dark:text-white">
            2314
        </th>
        <td className=" py-2 text-[10px] sm:text-[11px] lg:text-[13px]  sm:py-3">
            Walk the dogs
        </td>
        <td className="pl-4 py-2 text-[10px] sm:text-[11px] lg:text-[13px] sm:py-3">
            My day to day task
        </td>
        <td className="px-3 py-2 text-[10px] sm:text-[11px] lg:text-[13px]  sm:py-3">
            Pending
        </td>
        <td className="px-3 py-2 sm:px-6 sm:py-3 ">
          <div className="flex gap-1 text-[9px] sm:text-[12px] lg:text-[13px]">
            <button className="bg-red-500 text-white sm:px-4 px-2 py-1 sm:py-2 cursor-pointer">Delete</button>
            <button className="bg-green-500 text-white sm:px-4 px-2 py-1 sm:py-2 cursor-pointer">Done</button>
          </div>   
        </td>
      </tr>
    </>
  )
}

export default Todo