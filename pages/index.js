import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import {benefitOne, benefitTwo} from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

const Home = () => {
  return (
    <>
      <Head>
        <title>Nextly - Free Nextjs & TailwindCSS Landing Page Template</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle pretitle="Milou Benefits" title=" Why should you use Milou">
        Our family pet tracker app offers a range of benefits to simplify and
        enhance your pet ownership experience. With our app, you can
        effortlessly keep track of your dog's outings, including when they went
        number one or number two. Say goodbye to guesswork and enjoy peace of
        mind knowing that you have a reliable record of your pet's bathroom
        habits. Additionally, our app promotes family involvement by enabling
        multiple family members to stay connected and updated on your pet's
        activities. Enhance your pet care routine, improve communication, and
        strengthen the bond with your furry friend. Experience the convenience
        and joy of tracking your pet's adventures with Milou today.
      </SectionTitle>
      {/* <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle> */}
      {/* <Faq /> */}
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
};

export default Home;
