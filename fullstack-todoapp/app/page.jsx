
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
                  
              </tbody>
          </table>
      </div>

    </>
  );
}
