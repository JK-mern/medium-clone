import { BACKEND_URL } from "@/config"
import { Blogposts } from "@/types/types"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const useFetchBlogDetails = () =>{
    let {id} = useParams()
    const [data, setData] = useState<Blogposts>() 
    console.log(id)
    useEffect(() => {
        async function getBlogDetails()
        {
            const res = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
                headers : {
                    'Authorization' : 'Bearer '+localStorage.getItem("token")
                }
            })
            if(res.data.status)
            {
                setData(res.data.post)
            }
        }

        getBlogDetails()
    }, [])

    return data
}
