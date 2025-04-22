
export default function Home() {
  return (
    <>
      <form className="flex items-start flex-col gap-2 w-[80%] max-w-[600px] mt-24 px-2 mx-auto">
        <input type="text" name="title" placeholder="Enter Title" className="px-3 py-2 border-2 border-gray-300 w-full"/>
        <textarea name="description" placeholder="Enter Description" className="px-3 py-2 border-2 border-gray-300 w-full" id=""></textarea>
        <button type="submit" className="bg-orange-600 py-3 px-11 text-white">Add Todo</button>
      </form>

      

      <div className="relative overflow-x-auto mt-24 w-[60%] mx-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      <th scope="col" className="px-6 py-3">
                          ID
                      </th>
                      <th scope="col" className="px-6 py-3">
                          TITLE
                      </th>
                      <th scope="col" className="px-6 py-3">
                          DESCRIPTION
                      </th>
                      <th scope="col" className="px-6 py-3">
                          STATUS
                      </th>
                      <th scope="col" className="px-6 py-3">
                          ACTION
                      </th>
                  </tr>
              </thead>
              <tbody>
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
              </tbody>
          </table>
      </div>

    </>
  );
}
