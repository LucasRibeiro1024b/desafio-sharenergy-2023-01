import PageLogin from '../Components/Entidades/Login';
import LayoutGeral from '../Components/Layout';

function Home() {
  return (
    <LayoutGeral header="none">
      <PageLogin />
    </LayoutGeral>
  );
}

export default Home;
