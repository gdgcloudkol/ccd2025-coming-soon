import { MainNav } from "@/components/main-nav";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative bg-background">
      {/* Header */}

      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <Image
          src="/city-map.png"
          alt="Map Background"
          fill
          className="object-cover w-full h-full opacity-[0.05] dark:opacity-[0.05]"
          style={{ zIndex: 0 }}
        />
      </div>

      <header className="relative z-10">
        <MainNav />
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 pt-8 pb-8 flex-1 flex flex-col justify-center">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight dark:text-white">
            Cloud Community
            <span className="block mt-2 flex items-center justify-center gap-3">
              <Image
                src="/google-cloud.svg"
                alt="Google Cloud"
                width={64}
                height={64}
                className="h-16 w-16 inline-block align-middle dark:brightness-0 dark:invert"
                priority
              />
              <span className="text-5xl md:text-7xl font-bold inline-block align-middle dark:text-white">
                Days
              </span>
              <span className="text-2xl md:text-4xl font-medium text-blue-500 border-2 border-blue-500 rounded-full px-6 py-1 bg-white/70 dark:bg-black/70 backdrop-blur-sm ml-3 align-middle dark:text-white">
                2025
              </span>
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 mt-4 dark:text-white">
            19th July 2025 – Taj Taal Kutir, Kolkata
          </p>
          <Button
            size="lg"
            className="rounded-full px-10 py-6 font-semibold text-lg bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90 shadow-lg"
          >
            <span className="mx-1">✦</span> Coming Soon{" "}
            <span className="mx-1">✦</span>
          </Button>
        </div>
        {/* Faint map background effect */}
      </main>

      {/* City Skyline Illustration */}
      {/* <div className="w-full absolute left-0 bottom-0 z-0 pointer-events-none select-none opacity-[0.05]">
        <Image
          src="/city-map.png"
          alt="Kolkata City Skyline"
          width={1600}
          height={300}
          className="w-full h-auto object-cover opacity-90 dark:opacity-80"
          priority
        />
      </div> */}
    </div>
  );
}
