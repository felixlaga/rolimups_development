import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">rolimups development</div>
                  <h1 className="text-5xl font-bold tracking-tighter">Crafting exceptional digital experiences</h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    At rolimups development, we are passionate about creating innovative and user-centric web solutions
                    that help our clients achieve their goals.
                  </p>
                </div>
              </div>
              <img
                src="/placeholder.svg"
                width="400"
                height="400"
                alt="rolimups development"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-contain"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet the Founders</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Felix Laga and Guust Goossens, the co-founders of rolimups development, bring a wealth of experience
                    and expertise to the table.
                  </p>
                </div>
              </div>
              <div className="grid gap-6">
                <div className="flex items-start gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>GG</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-bold">Guust Goossens</h3>
                    <p className="text-muted-foreground">Co-founder and Lead Developer</p>
                    <p className="text-sm text-muted-foreground">
                      Guust is a seasoned web developer with over 10 years of experience in building scalable and
                      performant applications. He is passionate about staying up-to-date with the latest technologies
                      and best practices.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>FL</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-bold">Felix Laga</h3>
                    <p className="text-muted-foreground">Co-founder and Creative Director</p>
                    <p className="text-sm text-muted-foreground">
                      Felix is a talented designer with a keen eye for aesthetics and user experience. He has a proven
                      track record of creating visually stunning and user-friendly designs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Expertise</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    With years of experience in the web development industry, we have honed our skills in a wide range
                    of technologies and frameworks.
                  </p>
                </div>
                <ul className="grid gap-4">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5 text-primary" />
                    <span>React.js and Next.js</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5 text-primary" />
                    <span>Node.js and Express</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5 text-primary" />
                    <span>Tailwind CSS and Styled Components</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5 text-primary" />
                    <span>Serverless and Cloud Deployment</span>
                  </li>
                </ul>
              </div>
              <div className="grid gap-6">
                <div className="grid grid-cols-2 gap-4">
                  <img
                    src="/placeholder.svg"
                    width="300"
                    height="200"
                    alt="Project 1"
                    className="rounded-lg object-cover"
                    style={{ aspectRatio: "300/200", objectFit: "cover" }}
                  />
                  <img
                    src="/placeholder.svg"
                    width="300"
                    height="200"
                    alt="Project 2"
                    className="rounded-lg object-cover"
                    style={{ aspectRatio: "300/200", objectFit: "cover" }}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <img
                    src="/placeholder.svg"
                    width="300"
                    height="200"
                    alt="Project 3"
                    className="rounded-lg object-cover"
                    style={{ aspectRatio: "300/200", objectFit: "cover" }}
                  />
                  <img
                    src="/placeholder.svg"
                    width="300"
                    height="200"
                    alt="Project 4"
                    className="rounded-lg object-cover"
                    style={{ aspectRatio: "300/200", objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Clients</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We have had the privilege of working with a diverse range of clients, from startups to established
                    enterprises, helping them achieve their digital goals.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <img
                  src="/placeholder.svg"
                  width="150"
                  height="50"
                  alt="Client 1"
                  className="mx-auto w-full max-w-[150px] object-contain"
                  style={{ aspectRatio: "150/50", objectFit: "cover" }}
                />
                <img
                  src="/placeholder.svg"
                  width="150"
                  height="50"
                  alt="Client 2"
                  className="mx-auto w-full max-w-[150px] object-contain"
                  style={{ aspectRatio: "150/50", objectFit: "cover" }}
                />
                <img
                  src="/placeholder.svg"
                  width="150"
                  height="50"
                  alt="Client 3"
                  className="mx-auto w-full max-w-[150px] object-contain"
                  style={{ aspectRatio: "150/50", objectFit: "cover" }}
                />
                <img
                  src="/placeholder.svg"
                  width="150"
                  height="50"
                  alt="Client 4"
                  className="mx-auto w-full max-w-[150px] object-contain"
                  style={{ aspectRatio: "150/50", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}