import Articles from './Articles';

function Hero() {
  return (
    <main>
      {/* <section className="hero align-item-center">
        <img
          src="https://images.unsplash.com/photo-1541362036326-097742faf412?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym9vayUyMCUyMGdvbGRlbiUyMGJhY2tncm91bmR8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=600&q=60"
          alt="hero"
        />
      </section> */}
      <section className="articles container">
        <h2 className="center padding">Articles</h2>
        <Articles />
      </section>
    </main>
  );
}

export default Hero;
