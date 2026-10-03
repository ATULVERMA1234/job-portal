import { useNavigate } from "react-router-dom"; 
 
function Home() { 
  const navigate = useNavigate(); 
 
  const exploreJobs = () => { 
    navigate("/jobs"); 
  }; 
 
  return ( 
    <div className="home"> 
      <h1> 
        Find Your <span>Dream Job</span> 
      </h1> 
 
      <p> 
        Discover thousands of opportunities and build your career. 
      </p> 
 
      <button onClick={exploreJobs}> 
        Explore Jobs → 
      </button> 
    </div> 
  ); 
} 
 
export default Home; 