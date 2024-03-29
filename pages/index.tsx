import Head from 'next/head'
import { useRecoilValue } from 'recoil'
import { modalState } from '../atom/modalAtom'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Modal from '../components/Modal'
import Row from '../components/Row'
import useAuth from '../hooks/useAuth'
import { Movie } from '../TypeScript-types'
import requests from '../utilities/request'

interface Props {
  netflixOriginals: Movie[]
  trendingNow: Movie[]
  topRated: Movie[]
  actionMovies: Movie[]
  comedyMovies: Movie[]
  horrorMovies: Movie[]
  romanceMovies: Movie[]
  documentaries: Movie[]
}

// server side rendering
export const getServerSideProps = async () => {
  // put in an array and map over --alternative
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries
    // promise.all to replace individual await
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json())
  ])

  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results
    }
  }
}

const Home = ({ netflixOriginals, actionMovies, comedyMovies, documentaries, horrorMovies, romanceMovies, topRated, trendingNow } : Props) => {
  //console.log(netflixOriginals)
  const {loading} = useAuth()
  const showModal = useRecoilValue(modalState)
  if (loading) return null

  return (
    <div className={`relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh] ${showModal && '!h-screen overflow-hidden'}`}>
      <Head>
        <title>myFlix</title>
        <link rel="icon" href="https://rb.gy/ulxxee"/>
      </Head>

      <Header/>
      <main className='relative pl-4 pb-24 lg:space-y-24 lg:pl-16'>
        <Banner netflixOriginals={netflixOriginals}/>

        <section className='md:space-y-20'>
          <Row title="Trending Now" movies={trendingNow}/>
          <Row title="Top Rated" movies={topRated}/>
          <Row title="Action Thrillers" movies={actionMovies}/>
          {/* My List */}
          <Row title="Comedies" movies={comedyMovies}/>
          <Row title="Scary Movies" movies={horrorMovies}/>
          <Row title="Romance Movies" movies={romanceMovies}/>
          <Row title="Documentaries" movies={documentaries}/>
        </section>
      </main>
      {showModal && <Modal/>}
    </div>
  )
}

export default Home