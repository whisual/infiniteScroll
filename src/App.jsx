import { useEffect, useState } from 'react'
import './App.css'
import Infinite from './components/infinitescroll'

function App() {

  const [response, setResponse] = useState([])
  const [page, setPage] = useState(0)
  const [loading, setLoading] = useState(false)

  const getData = async() =>{
     const res = await fetch(`https://jsonplaceholder.typicode.com/posts?` + new URLSearchParams({
      _limit: 9,
      _page: page,
     }))
     const data = await res.json()
     console.log(data);
     setResponse((oldData)=> [...oldData ,...data])
     setLoading(false)
  }

  useEffect(()=>{
    getData()
  },[page])

  const handleInfiniteScroll = async () =>{
    if(window.innerHeight + document.documentElement.scrollTop + 2 >= document.documentElement.scrollHeight){
          setLoading(true)
          setPage((prev) => prev + 1)
    }
  }
    useEffect(()=>{
      window.addEventListener('scroll', handleInfiniteScroll)
      return () => window.removeEventListener('scroll', handleInfiniteScroll)
    },[])
 

  return (
    <>
     <Infinite response={response}/>
    </>
  )
}

export default App
