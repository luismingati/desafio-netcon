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
          description="Após dois anos desde o surgimento do Batman, os criminosos de Gotham City têm muito o que temer. Com a ajuda do tenente James Gordon e do promotor público Harvey Dent, Batman luta contra o crime organizado. Acuados com o combate, os chefes do crime aceitam a proposta feita pelo Coringa e o contratam para combater o Homem-Morcego."
          imageUrl={batman}
        />
        <MovieCard 
          title="Django Livre"
          description="No sul dos Estados Unidos, o ex-escravo Django faz uma aliança inesperada com o caçador de recompensas Schultz para caçar os criminosos mais procurados do país e resgatar sua esposa de um fazendeiro que força seus escravos a participar de competições mortais."
          imageUrl={django}
        />
        <MovieCard 
          title="Homem Aranha no Aranhaverso"
          description="Após ser atingido por uma teia radioativa, Miles Morales, um jovem negro do Brooklyn, se torna o Homem-Aranha, inspirado no legado do já falecido Peter Parker. Entretanto, ao visitar o túmulo de seu ídolo em uma noite chuvosa, ele é surpreendido com a presença do próprio Peter, vestindo o traje do herói por baixo de um sobretudo. A surpresa fica ainda maior quando Miles descobre que ele veio de uma dimensão paralela, assim como outras versões do Homem-Aranha."
          imageUrl={homemAranha}
        />
        <MovieCard 
          title="Oldboy"
          description="Oh Dae-Su é raptado e mantido em cativeiro por 15 anos num quarto de hotel, sem qualquer contato com o mundo externo. Quando ele é inexplicavelmente solto, descobre que é acusado pelo assassinato da esposa e embarca numa missão obsessiva por vingança."
          imageUrl={oldboy}
        />
        <MovieCard 
          title="La La Land"
          description="O pianista Sebastian conhece a atriz Mia, e os dois se apaixonam perdidamente. Em busca de oportunidades para suas carreiras na competitiva Los Angeles, os jovens tentam fazer o relacionamento amoroso dar certo, enquanto perseguem fama e sucesso."
          imageUrl={lalaland}
        />
      </div>
    </div>
  );
};

export default Movies;