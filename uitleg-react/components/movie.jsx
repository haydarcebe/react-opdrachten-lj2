import './App.css'
import Movie from './components/Movie'


const Movie = ({title, author}) => {


    return (  
        <section>
        <h1>${title}</h1>
        <h2>${author}</h2>
        </section>
    );
}
 
export default Movie;
