import AnimeList from '../components/AnimeList';
import Header from '@/components/AnimeList/Header';
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from '../libs/api-libs';

const Page = async () => {
  // const response = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  // );
  // const topAnime = await response.json();

  const topAnime = await getAnimeResponse('top/anime', 'limit=8');
  let recomendedAnime = await getNestedAnimeResponse(
    'recommendations/anime',
    'entry'
  );
  recomendedAnime = reproduce(recomendedAnime, 5);

  return (
    <>
      {/* Anime terpopuler */}
      <section>
        <Header
          title="Paling Populer"
          linkTitle="Lihat Semua"
          linkHref="/populer"
        />
        <AnimeList api={topAnime} />
      </section>

      {/* Anime Rekomendasi */}
      <section>
        <Header title="Rekomendasi" />
        <AnimeList api={recomendedAnime} />
      </section>
    </>
  );
};

export default Page;
