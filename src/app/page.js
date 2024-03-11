"use client";
import ServiceCard from "./componets/cards/services";
import HomeBanner from "./componets/banners/homebanner";
import { homeData } from "./data/homeData";
export default function Home() {
  return (
    <main className="text-center mx-auto">
      <section id="home-banner" className=" mb-2">
        <HomeBanner />
      </section>
      <section
        id="about-us"
        className="p-2 md:container mx-auto md:max-w-4xl my-2"
      >
        <h3 className="font-bold">About Us</h3>
        <p>
          Roll on the floor purring your whiskers off hate dogs. Show belly put
          toy mouse in food bowl run out of litter box at full speed cough
          furball leave hair on owners clothes intrigued by the shower, for
          kitty loves pigs. Lick butt instantly break out into full speed gallop
          across the house for no reason and claws in the eye of the beholder
          yet your pillow is now my pet bed cat meoooow i iz master of hoomaan,
        </p>
      </section>
      <section id="services" className="bg-gray-800 my-2 p-2">
        <div className="md:container mx-auto md:max-w-4xl">
          <h3 className="font-bold text-orange-500">Services</h3>
          <div className="sm:flex sm:justify-around">
            {homeData.serviceCards.map((data) => {
              return (
                <ServiceCard
                  key={data.id}
                  title={data.title}
                  content={data.content}
                  logo={data.logo}
                />
              );
            })}
          </div>
        </div>
      </section>
      <section id="quote" className="my-2">
        <h3 className="font-bold">Get a Quote</h3>
      </section>
    </main>
  );
}
