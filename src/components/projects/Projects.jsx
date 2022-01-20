import "./projects.css"

const Projects = () => {
  return (
    <div className="p">
        <a href="https://github.com/MinionaH/react45pokemon" target='_blank'>
        <div className="p-left">
            <div>
            <h4>React Project PokemonsApi</h4>
            </div>
            <div>
            <img src="https://static.13.cl/7/sites/default/files/espectaculos/field-imagen/pokemones.jpg" alt="pokemon" />
            </div>
        </div>
        </a>
        <a href="https://github.com/MinionaH/ReactIncrementDecrement" target='_blank'>
        <div className="p-left">
            <div>
            <h4>React Project Increment Decrement</h4>
            </div>
            <div>
            <img src="https://logicalmaster.com/wp-content/uploads/2021/07/Webp.net-resizeimage-15.jpg" alt="incermentdecrement" />
            </div>
        </div>
        </a>
        <a href="https://github.com/MinionaH/MovieApiReact" target='_blank'>
        <div className="p-left">
            <div>
            <h4>React Project MoviesApi</h4>
            </div>
            <div>
            <img src="https://www.indiewire.com/wp-content/uploads/2021/11/best-film-2.jpg?w=780" alt="movieapi" />
            </div>
        </div>
        </a>
    </div>
    );
};

export default Projects;
