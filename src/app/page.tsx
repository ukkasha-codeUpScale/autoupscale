import {
  Advantages,
  Blog,
  Faq,
  Feature,
  Footer,
  FreeTrials,
  HeroSection,
  Intregations,
  PaymentSubscription,
  Testimnoials,
} from "@/components/landing-page";

async function getData() {
  const res = await fetch(`${process.env.BACKEND_BASE_URL}/api/plans`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
const Home = async () => {
  const paymentData = await getData();
  const payment = paymentData?.data;
  return (
    <>
      <HeroSection />
      <Feature />
      <Advantages />
      <Intregations />
      <Testimnoials />
      <PaymentSubscription payment={payment} />
      <Blog />
      <Faq />
      <FreeTrials />
      <Footer />
    </>
  );
};

export default Home;
