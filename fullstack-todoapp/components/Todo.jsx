
const Todo = () => {
  return (
    <div>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            2314
        </th>
        <td className="px-6 py-4">
            Walk the dogs
        </td>
        <td className="px-6 py-4">
            My day to day task
        </td>
        <td className="px-6 py-4">
            Pending
        </td>
        <td className="px-6 py-4">
          <div className="flex gap-1">
            <button className="bg-red-500 text-white px-4 py-2 cursor-pointer">Delete</button>
            <button className="bg-green-500 text-white px-4 py-2 cursor-pointer">Done</button>
          </div>   
        </td>
      </tr>
    </div>
  )
}

export default Todo