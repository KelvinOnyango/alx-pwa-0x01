import Button from "@/components/commons/Button";
import { useRouter } from "next/router";

const Home: React.FC = () => {
  const router = useRouter();

  return (
    <div className="bg-[#171D22] text-white">
      {/* Hero Section */}
      <section
        className="min-h-screen bg-cover bg-center relative"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.7), url("https://themebeyond.com/html/movflx/img/bg/breadcrumb_bg.jpg")',
        }}
      >
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8">
            Discover Your Next Favorite{" "}
            <span className="text-[#E2D609]">Movie</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl leading-relaxed">
            Explore the latest blockbuster movies, critically acclaimed films,
            and your personal favorites – all in one place.
          </p>
          <Button title="Browse Movies" action={() => router.push("/movies")} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-16 lg:px-44 bg-[#121018] text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 md:mb-8">
            Join CineSeek Now!
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 leading-relaxed">
            Sign up today to get access to the latest movies, exclusive content,
            and personalized movie recommendations.
          </p>
          <Button
            title="Get Started"
            action={() => console.log("Get Started clicked")}
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
