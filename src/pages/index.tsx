import Layout from '../components/ui/layout/Layout';
import { Banner } from '../components/banner/Banner';
import Everyone from '../components/everyone/Everyone';
import { SnowContainer } from '../components/ui/particles/SnowContainer';
import Control from '../components/control/Control';
import Region from '../components/region/Region';

export default function Home() {
  return (
    <Layout>
      <SnowContainer />
      <section id="home">
        <Banner />
      </section>
      <section id="everyone">
        <Everyone />
      </section>
      <section id="control">
        <Control />
      </section>
      <section id="region">
        <Region />
      </section>
    </Layout>
  );
}
