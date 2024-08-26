import { Photos } from "./Photo";

export const Rowtwo = () => {
  return (
    <div className="w-full h-auto grid grid-rows-1 grid-cols-1 md:grid-rows-1 md:grid-cols-2 justify-items-center gap-12">
      <div className="w-full h-auto flex items-start gap-12 self-stretch flex-wrap">
        <div className="w-full h-auto flex min-w-auto flex-col items-start self-stretch">
          <div className="flex w-full h-auto">
            <Photos />
          </div>
        </div>
      </div>
      <div className="flex w-full h-auto text-[#111827] flex-col gap-[24px]">
        <h1 className="w-full h-auto text-[30px] font-semibold">
          Curious about me? Here you have it:
        </h1>
        <div className="flex flex-col gap-4 w-full h-auto ">
          <p className="w-full h-auto text-[16px] text-[#4B5563] ">
            I'm a designer turned full stack developer, passionate about
            React.js and Node.js. I excel in blending technical and visual
            aspects to craft exceptional digital products, prioritizing user
            experience, precise design, and optimized code.
          </p>
          <p className="w-full h-auto text-[#4B5563]">
            Since starting my web development journey in 2015, I've embraced
            challenges and kept up with the latest tech trends. Now in my early
            thirties, seven years in, I'm building cutting-edge web apps using
            Next.js, TypeScript, Nestjs, Tailwindcss, Supabase, and more.
          </p>
          <p className="w-full h-auto text-[#4B5563]">
            With a progressive mindset, I enjoy the entire product development
            process, from ideation to execution. Off duty, you'll find me on
            Twitter, tracking startup journeys, or unwinding. Follow me for tech
            insights and public project updates on Twitter or GitHub.
          </p>
          <p className="w-full h-auto text-[#4B5563]">
            Finally, some quick bits about me.
          </p>
          <div className="flex w-full h-auto">
            <p className="w-full h-auto text-[#4B5563]">
              <li className="w-full h-auto text-[#4B5563]">
                B.E. in Computer Engineering
              </li>
              <li className="w-full h-auto text-[#4B5563]">
                Full time freelancer
              </li>
            </p>
            <li className="w-full h-auto text-[#4B5563]">Avid learner</li>
          </div>
          <p className="w-full h-auto text-[#4B5563]">
            One last thing, I'm available for freelance work, so feel free to
            reach out and say hello! I promise I don't bite 😉
          </p>
        </div>
      </div>
    </div>
  );
};
