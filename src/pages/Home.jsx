import premisImg from '../assets/premis.webp'; 
import mespremisImg from '../assets/mespremis.webp';
const Home = () => (
  <div>
    <section className="parallax">
      <div style={{ padding: '2rem', backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <h2>Benvingut a Elden Ring</h2>
        <p>Explora el món de les Terres Intermèdies.</p>
      </div>
    </section>
    <section className="main-content">
      <h2>Sobre el Joc</h2>
      <p>Aventura, misteri i desafiaments t'esperen...</p>
    </section>
    <section>
      <h2 class="goldenorder">The Golden Order is broken.</h2>
      <p>Rise, Tarnished, and may grace guide you to embrace the power of the Elden Circle and rise as lord of the Circle in the Lands Between.<br/><br/>
In the Lands Between, ruled by Queen Márika, the Eternal, the Elden Circle, source of the Golden Tree, has been destroyed.<br/><br/>
Márika's descendants, demigods all, claimed the fragments of the Elden Circle known as the Great Runes. It was then that the insane corruption of their renewed strength sparked a war: the Searing.<br/><br/>
A war that resulted in the abandonment of the Greater Will. And now, the grace that guides us will fall upon the Lightless, spurned by the grace of gold and exiled from the Lands Between. You who have died, yet live, with your grace time has lost, walk the path to the Middle Lands beyond the misty sea to bow before the Circle of Elden.<br/><br/>
And become the lord of the Circle.</p>
    </section>
    <img class="premis" src={premisImg}/> <br/>
    <img class="premis2" src={mespremisImg}/> <br/>
  </div>
);

export default Home;
