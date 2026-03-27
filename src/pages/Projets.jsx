import photo1 from "../assets/photo1.jpg"
import photo2 from "../assets/photo2.jpg"
import photo3 from "../assets/photo3.jpg"
import photo4 from "../assets/photo4.jpg"

function Projets() {
  return (
    <section className="projets">
      <h1>Mes Projects</h1>

      <div className="projets-container">

        <div className="projet-card">
            <img src={photo1} alt="Todo App" />
          <h3>Todo App</h3>
          <p>Application pour gérer les tâches avec React.</p>
          <button>Voir</button>
        </div>

        <div className="projet-card">
            <img src={photo2} alt="gestion d’articles" />
          <h3>Blog Laravel</h3>
          <p>Création et gestion d’articles avec Laravel.</p>
          <button>Voir</button>
        </div>

        <div className="projet-card">
          <img src={photo3} alt="App Météo" />
          <h3>App Météo</h3>
          <p>Application météo avec API en React.</p>
          <button>Voir</button>
        </div>
        
         <div className="projet-card">
          <img src={photo4} alt="App réservation hôtel" />
          <h3>App de resevation d'hotel</h3>
          <p>Application pour gerer la reservation d'hotel.</p>
          <button>Voir</button>
        </div>

         


      </div>
    </section>
  );
}

export default Projets;