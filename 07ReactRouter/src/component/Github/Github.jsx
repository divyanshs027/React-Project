import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'



function Github() {
  const data = useLoaderData()
    // const[data, setData] = useState([])
    // useEffect(() => {
    //   fetch('https://api.github.com/users/divyanshs027')
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data);
    //     setData(data);
    //   })
    // }, [])
  return (
    <div className='text-center m-4 bg-gray-600 text-white text-3xl'>Github Followers: {data.followers}
     <img 
     src={data.avatar_url} alt="Git profile" width={300} />
    </div>
  )
}

export default Github

export const GithubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/divyanshs027')
  return response.json()
}