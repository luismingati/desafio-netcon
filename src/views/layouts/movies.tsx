import MovieCard from "../components/movie-card";
import batman from "../../assets/batman.jpeg";
import django from "../../assets/django.jpeg";
import homemAranha from "../../assets/homemaranha.webp";
import oldboy from "../../assets/oldboy.jpeg";
import lalaland from "../../assets/lalaland.png";

const Movies: React.FC = () => {
  return (
    <div className="mx-10 pt-10 max-w-full">
      <h1 className="text-3xl font-bold mb-5">Meus filmes favoritos!</h1>
      <div className="flex flex-nowrap min-w-[1024px] max-w-[1440px] gap-4 w-full overflow-x-scroll">
        <MovieCard 
          title="The Dark Knight"
          description="Batman fights crime in Gotham City"
          imageUrl={batman}
        />
        <MovieCard 
          title="Django Livre"
          description="With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner."
          imageUrl={django}
        />
        <MovieCard 
          title="Homem Aranha no Aranhaverso"
          description="Teen Miles Morales"
          imageUrl={homemAranha}
        />
        <MovieCard 
          title="Oldboy"
          description="After being kidnapped and imprisoned for fifteen years, Oh Dae-Su is released, only to find that he must find his captor in five days."
          imageUrl={oldboy}
        />
        <MovieCard 
          title="La La Land"
          description="While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future."
          imageUrl={lalaland}
        />
      </div>
    </div>
  );
};

export default Movies;