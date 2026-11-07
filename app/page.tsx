
import Galaxy from "./Galaxy";
import Image from "next/image";

export default function Home() {
  return (
    <main
      className="flex min-h-screen w-full items-center justify-center bg-black"
    >
      <div className="absolute ali">
        <Image
          src={'/logo.png'}
          alt="logo"
          width={100}
          height={100}
        />
        <h1 className="text-white text-center text-3xl font-bold">
          عمر حاتم
        </h1>
      </div>
      <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
        <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
          <Galaxy
            density={1}
            glowIntensity={0.3}
            flareIntensity={1}
            starSpeed={0.5}
            mouseRepulsion
            clickWarp
            starColors={[]}
            hueShift={140}
            saturation={0}
            starSize={1}
            twinkleIntensity={0.3}
            speed={1}
            rotationSpeed={0.1}
            layers={4}
            direction="forward"
            repulsionStrength={2}
            mouseInteraction
            intro
            lightMode={false}
          />
        </div>
      </div>
    </main>
  );
}
