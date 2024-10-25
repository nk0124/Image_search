
import { useState } from "react"
import axios from "axios"

export default function Videos() {
  let key="44888749-fa2600c9592604e999796ff3e"
  let url="https://pixabay.com/api/videos/?key="+key
  const [q,setQ]=useState("")
  const [videos,setVideos] =useState([])

  function handleSearch(e){
    e.preventDefault();
    let u=url+"&q="+q
    axios.get(u).then((res)=>{setVideos(res.data.hits);})
  }


  return (
    
    <>
    
    <div className="banner text-white text-capitalize">
     <p className="display-5 fw-bold" >Stunning royality-free Videos</p>
     <p className="fs-5">high quality stock images for Your Website/App</p>
     <form className="w-50 m-auto">
      <div className="input-group">
        <input type="text" placeholder="Type Keyword" className="form-control"
        onChange={(e)=>setQ(e.target.value)}/>
         <button className="btn btn-light" onClick={handleSearch}>Search</button>
      </div>

     </form>
    </div>
    <div className="container mt-5"> 
      <div className="row">
        {videos.map((video)=>(
         <div className="col-md-4" key={video.id}>
           <video src={video.videos.large.url}  className="w-100" style={{"height":"250px"}} controls="controls"></video>
           
         </div>
          ))
        }
      </div>

    </div>
   </>

  )
}
