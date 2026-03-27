
import Hero from "./Hero";
import Projets from "./Projets";
import Contact from "./Contact";

function Home() {
    return(
        <div className="main">
            <Hero/>
            <Projets/>
            <Contact/>
        </div>
    );
}
export default Home;