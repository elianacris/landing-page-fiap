import Navbar from '../../components/layouts/Navbar/Navbar';

function HomePage() {
  return (
    <div>
      <Navbar />
      <main className="container">
        <h1>Bem-vinda, Eliana!</h1>
        <p>Esse layout é 100% responsivo e escalável com SCSS e rem.</p>
      </main>
    </div>
  );
}
export default HomePage;
