import Image from "next/image";
import DashboardImage from "../app/public/home-images/dashboard-image.png";
import Dashboard from "../app/public/home-images/dashboard.png";
import IntregationImage from "../app/public/home-images/image (4).png";
import Dashboard2 from "../app/public/home-images/dashboard-2.png";
import Button from "@/components/landing-page/button";
import Vos from "../app/public/home-images/vos.png";
import Reporting from "../app/public/home-images/reporting.png";
import Task from "../app/public/home-images/task.png";
import FeatureIcon from "../app/public/home-images/feature-icon-1.png";
import FeatureBox from "@/components/landing-page/feature-box";
import Navbar from "@/components/landing-page/navbar";
import Advantages from "@/components/landing-page/advantages";
import Blog from "@/components/landing-page/blog";
import BlogImageOne from "../app/public/home-images/blog-1.png";
import BlogImageTwo from "../app/public/home-images/blog-2.png";
import BlogImageThree from "../app/public/home-images/blog-3.png";
import { TbMathGreater } from "react-icons/tb";
import Avtar from "../app/public/home-images/avtar.png";
import AvtarTwo from "../app/public/home-images/avtar-2.png";
import AvtarThree from "../app/public/home-images/avtar-3.png";
import Testimnoials from "@/components/landing-page/testimonial";
import FreeTrials from "@/components/landing-page/free-trials";
import Footer from "@/components/landing-page/footer";
import Faq from "@/components/landing-page/faq";
import PaymentSubscription from "@/components/landing-page/payment-subscription";
async function getData() {
  const res = await fetch(`${process.env.BACKEND_BASE_URL}/api/plans`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
const Home = async () => {
  const paymentData = await getData();
  const payment = paymentData?.data
  return (
    <>
      <div className="au-base bg-white text-black">
        <div className="bg-[#5236FF] pb-72  relative">
          <Navbar />

          <div className="py-5  text-center">
            <div className="bg-white text-[#5236FF] inline-block text-xs px-2 py-[2px] rounded-xl font-semibold">
              CRM Systen
            </div>
            <div className="max-w-[700px] m-auto mt-4 text-white">
              <h1 className="font-bold text-5xl  text-white">
                CRM system for car rental business
              </h1>
              <div className="text-sm text-white mt-2 lg:mx-0 mx-3">
                Increase efficiency and improve your customer experience with HQ
                Rental Software.
              </div>
              <div className="my-3">
                <Button buttonTitle="Get Started" buttonRoute={"/"} />
              </div>
            </div>
            <div className="pb-5">
              <div className="image absolute flex justify-center w-full">
                <Image src={DashboardImage} width={800} alt="DashboardImage" />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:pt-48 md:pt-48 pt-32 lg:mx-28 mx-8">
          <div className="text-center pb-5">
            <div>
              <div className=" bg-[#ebecff] text-[#5236ff] inline-block text-sx rounded-xl px-3 font-semibold">
                Features
              </div>
              <div className="mt-2 text-4xl font-bold text-black">
                <span>Explore our</span>{" "}
                <span className="text-[#5236ff]"> Amazing</span>{" "}
                <span>features</span>
              </div>
              <div className="text-gray-400 mt-2">
                Discover a world of incredible possibilities with our
                extraordinary features, designed to enhance your experience and
                simplify your life
              </div>
            </div>
            <div className="mt-5 lg:flex  grid md:grid-cols-2  space-x-3mx-8 md:text-center lg:space-y-0 ">
              <FeatureBox
                featureBoxTitle="Cloud CRM System"
                featureBoxIcon={FeatureIcon}
                fetureBoxExplaination="Cloud CRM system for all types of car rental business"
              />

              <FeatureBox
                featureBoxIcon={Vos}
                featureBoxTitle="VOS System"
                fetureBoxExplaination="Full vehicle control with Telematics"
              />
              <FeatureBox
                featureBoxIcon={Task}
                featureBoxTitle="Task Manager"
                fetureBoxExplaination="Improved planner for efficient operation of your company"
              />
              <FeatureBox
                featureBoxIcon={Reporting}
                featureBoxTitle="Reporting Management"
                fetureBoxExplaination="Detailed reporting and document management in one place"
              />
            </div>
          </div>
        </div>

        <div className="lg:mx-28 mx-8">
          <div className="text-center pt-5 ">
            <div className=" bg-[#ebecff] text-[#5236ff] inline-block text-sx rounded-xl px-3 font-semibold">
              Advantages
            </div>
            <div className="mt-2 text-4xl font-bold text-black">
              <span>Auto UpScale Advantages</span>
            </div>
            <div className="text-gray-400 mt-2">
              Enhance productivity with seamless integrations
            </div>
          </div>
          <Advantages
            advantagesExplaination=" Our car rental software allows you to fully control the entire process, monitor the loading of each car and provide the best service for your clients. With RentSyst, you can manage reservations for any vehicle directly from your smartphone. If you are not sure if this car rental system is right for you, please try the demo version."
            advantagesTitle=" Car Rental Software"
            advantagesImage={Dashboard}
            advantagesTag="Latest Tech"
          />

          <Advantages
            className="flex-row-reverse"
            advantagesExplaination=" Cloud-based car rental management software unlocks new opportunities for your company. With it, you can control your car rental business, plan work, streamline routine operations and receive detailed reports. Install the CRM system and get all the functionality in one place for vehicle rental management. Managing your reservations has never been easier."
            advantagesImage={Dashboard2}
            advantagesTag="Team Work"
          />

          <Advantages
            advantagesExplaination="We listen to your wishes and are constantly improving our cloud solution for auto business. To date, RentSyst contains all the necessary functionality, so that you can successfully manage car sharing, private car fleet, car rental and taxi fleet."
            advantagesTitle=" Auto Business Software"
            advantagesImage={Dashboard}
            advantagesTag="Team Work"
          />
        </div>
        <div className="text-center pt-28 lg:mx-0 mx-8">
          <div className=" bg-[#ebecff] text-[#5236ff] inline-block text-sx rounded-xl px-3 font-bold">
            INTEGRATIONS
          </div>
          <div className="mt-2 lg:text-4xl text-2xl font-bold text-black">
            <span>Seamless Harmony: Integrating with Top Tools</span>
          </div>
          <div className="text-gray-400 mt-2">
            Enhance productivity with seamless integrations
          </div>
          <Image src={IntregationImage} alt="" className="w-full" />
          <button className="text-gray-500 p-2 px-4 border border-gray-400 rounded-3xl font-semibold">
            All Intregtions{" "}
            <TbMathGreater className="inline-block text-xs mx-3 text-gray-600 mb-1" />
          </button>
        </div>

        <div className="lg:mx-28 mx-8">
          <div className="text-center pt-28">
            <div className=" bg-[#ebecff] text-[#5236ff] inline-block text-sx rounded-xl px-3 font-semibold">
              TESTIMONIALS
            </div>
            <div className="mt-2 text-4xl font-bold text-black">
              <span>Hear What Others Say</span>
            </div>
            <div className="text-gray-400 mt-2">
              Discover what our valued clients and partners have to say about
              their experiences working with us.
            </div>
          </div>

          <div className=" lg:flex lg:space-x-6  mt-5 grid grid-cols-1">
            <Testimnoials
              TestimnoialImage={Avtar}
              TestimnoialHeading="Demetria Gills"
              TestimnoialSubHeading="@Demetria "
              TestimonialComment="Playing around with @Optimind I’m back logging key thoughts, and details and soundbites from and episodes, books, meetings, articles, etc from the past week. So far, it’s a knowledge worker’s dream come true."
            />
            <Testimnoials
              TestimnoialImage={AvtarTwo}
              TestimnoialHeading="Fabrizio Reandi"
              TestimnoialSubHeading="@Fabrizio"
              TestimonialComment="Really, really liking @OptiMind so far. It's just the right amount of simple/fast for a personal note taking app and does most of the hard work of organizing in the background."
            />
            <Testimnoials
              TestimnoialImage={AvtarThree}
              TestimnoialHeading="Thomas Rose"
              TestimnoialSubHeading="@Thomas "
              TestimonialComment="All righty. I have to give a massive shout-out to @maccaw for and pioneering @OptiMind. It has already matured to a point where it
            is a daily driver for me.  (especially perfect bits of structured data) is superb."
            />
          </div>
        </div>
        <PaymentSubscription payment={payment} />

        <div className="lg:mx-28 mx-8 pt-28">
          <div className="lg:flex grid justify-between items-end lg:space-y-0 space-y-7">
            <div className="text-left ">
              <div className="mt-2 text-4xl font-bold text-black">
                <span>News from our team</span>
              </div>
              <div className="text-gray-400 mt-2">
                We are currently working on the features below.
              </div>
            </div>
            <div>
              <button className="text-gray-500 p-2 px-4 border border-gray-400 rounded-3xl font-semibold">
                Check Our Blog
                <TbMathGreater className="inline-block text-xs mx-3 text-gray-600 mb-1" />
              </button>
            </div>
          </div>

          <div className=" lg:flex grid grid-cols-1 lg:space-x-6 space-y-6 lg:space-y-0 mt-5">
            <Blog
              blogImage={BlogImageOne}
              blogTitle="Enhanging Your Audio Experience "
              blogDate="Jul 7, 2023"
            />
            <Blog
              blogImage={BlogImageTwo}
              blogTitle="Amplify Your Podcast with Saturation: Streamline & Enhance "
              blogDate="Jul 3, 2023"
            />
            <Blog
              blogImage={BlogImageThree}
              blogTitle="A Beginner's Guide to Starting Your Own Podcast"
              blogDate="Jul 3, 2023"
            />
          </div>
        </div>

        <Faq />
        <div className="lg:mx-28 pt-28 mx-8">
          <FreeTrials />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
