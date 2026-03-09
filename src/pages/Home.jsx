/** Home page: default route (/). Rendered when user visits root or clicks "Home" in nav. */
const Home = () => {
  return (
    <section className="page">
      <h1 className="page-title">Home</h1>
      <p className="page-text">
        Welcome! This is the home page. Use the navbar links to try client-side
        routing — each link loads a different page without a full browser refresh
        (demo for educational purposes).
      </p>
    </section>
  );
};

export default Home;
