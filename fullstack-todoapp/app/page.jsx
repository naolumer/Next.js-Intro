"use client"
import Todo from "@/components/Todo";
import { useState } from "react";
import toast,{Toaster} from "react-hot-toast";
import axios from "axios";

export default function Home() {

    const [formData, setFormData] = useState({
        title:"",
        description:"",
    });

    const onChangeHandler = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setFormData(form => ({...form, [name]:value}))
        console.log(formData)
    }

    const onSumbitHandler = async (e)=>{
        e.preventDefault();

        try {
            // api code
            const response = await axios.post("/api",formData)
            toast.success(response.data.msg);

            setFormData({
                title:"",
                description:""
            })

        } catch (error){
            toast.error("Error")
        }
    }
  return (
    <>
      <form onSubmit={onSumbitHandler} className="flex items-start flex-col gap-2 w-[80%] max-w-[600px] mt-24 px-2 mx-auto">
        <input value={formData.title} onChange={onChangeHandler} type="text" name="title" placeholder="Enter Title" className="px-3 py-2 border-2 border-gray-300 w-full"/>
        <textarea value={formData.description} onChange={onChangeHandler} name="description" placeholder="Enter Description" className="px-3 py-2 border-2 border-gray-300 w-full" id=""></textarea>
        <button type="submit" className="bg-orange-600 py-3 px-11 cursor-pointer text-white">Add Todo</button>
      </form>

      

      <div className="relative overflow-x-auto mt-24 w-[90%] lg:w-[85%] xl:w-[65%] mx-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-[10px] text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                <Todo/>
                <Todo/>
                <Todo/>
              </tbody>
          </table>
          <Toaster/>
      </div>

    </>
  );
}
