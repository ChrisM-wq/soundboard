import Header from "./components/Header";
import Recent from "./components/Recent";
import Song from "./components/Song";
function App() {

  return (
    <>
      <Header />
      <Recent />
      <div>
      <iframe src="https://open.spotify.com/embed/track/75HBVc7kJLjC2LlPc4ScfH?utm_source=generator&theme=0" width="600" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <Song />
    </>
  )

}

export default App;