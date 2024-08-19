export default function Component() {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet the Team</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Get to know the talented individuals behind our company.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-2 md:gap-12 lg:gap-16">
            <div className="flex items-start gap-6">
              <img
                src="/placeholder.svg"
                width={120}
                height={120}
                alt="Team Member 1"
                className="rounded-full"
                style={{ aspectRatio: "120/120", objectFit: "cover" }}
              />
              <div className="grid gap-2">
                <h3 className="text-xl font-bold">John Doe</h3>
                <p className="text-muted-foreground">
                  John is our lead designer, responsible for crafting the visuals that bring our products to life. With a
                  keen eye for detail and a passion for user experience, he ensures our designs are not only beautiful,
                  but also highly functional.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <img
                src="/placeholder.svg"
                width={120}
                height={120}
                alt="Team Member 2"
                className="rounded-full"
                style={{ aspectRatio: "120/120", objectFit: "cover" }}
              />
              <div className="grid gap-2">
                <h3 className="text-xl font-bold">Jane Smith</h3>
                <p className="text-muted-foreground">
                  Jane is our lead developer, responsible for turning our designs into functional and scalable web
                  applications. With her expertise in modern web technologies and a passion for problem-solving, she
                  ensures our products are not only visually stunning, but also highly performant and user-friendly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }