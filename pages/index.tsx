import Image from "next/image";

export default function Home() {
  return (
    <main className={"bg-slate-900 h-dvh"}>
      <div className={"w-max flex"}>
        <Image
          src={"/artsy_pfp.png"}
          className="h-[300px] w-[250px]"
          alt={""}
          height={300}
          width={250}
        />

        <Image
          src={"/artsy_pfp_v2.png"}
          className="h-[300px] w-[250px]"
          alt={""}
          height={300}
          width={250}
        />
      </div>
    </main>
  );
}
