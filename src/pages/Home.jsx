const Home = () => (
  <div>
    <section style={{ backgroundImage: "url('/assets/images/hero.jpg')", height: '80vh', backgroundSize: 'cover' }}>
      <div style={{ padding: '2rem', backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <h2>Benvingut a Elden Ring</h2>
        <p>Explora el món de les Terres Intermèdies.</p>
      </div>
    </section>
    <section className="main-content">
      <h2>Sobre el Joc</h2>
      <p>Aventura, misteri i desafiaments t'esperen...</p>
    </section>
  </div>
);

export default Home;
