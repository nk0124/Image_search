
import {Outlet,Link} from "react-router-dom"
function App() {

  return (
    <>
    <p className="text-end py-2 bg-warning-subtle mb-0"> 
    <Link to="" className="btn btn-light btn-sm me-3">Images</Link>
    <Link to="/videos" className="btn btn-light btn-sm me-3">Videos</Link>

    
    </p>
    <Outlet/>
          </>
  )
}

export default App
