import { useNavigate } from "react-router-dom";
import image from "../assets/photo0.jpg";
import Apropos from "./Apropos";


function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Bienvenue sur mon portfolio</h1>
        <p>Je suis développeuse React passionnée par la création de sites web modernes.</p>
      </div>  
      <div className="hero-image"> 
        <img src={image} alt="nogaye yacine" />
      </div>
      
    </section>
    
    
    
  );
}

export default Hero;