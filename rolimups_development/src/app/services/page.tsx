import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col">
      <section className="bg-primary py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl space-y-6 text-center">
          <h1 className="text-4xl font-bold text-primary-foreground sm:text-5xl">Our Approach to Web Development</h1>
          <p className="text-lg text-primary-foreground">
            At Rolimups, we believe in crafting exceptional web experiences that drive your business forward. Our team
            of experts combines cutting-edge design, robust front-end, and scalable back-end development to deliver
            tailored solutions that meet your unique needs.
          </p>
          <p className="text-primary-foreground">
            From stunning UI/UX to seamless integration of front-end and back-end technologies, we're dedicated to
            transforming your web presence and helping you achieve your goals.
          </p>
        </div>
      </section>
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-card p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary">
              <BrushIcon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">UI/UX Design</h3>
            <p className="text-muted-foreground">
              Crafting visually stunning and user-friendly interfaces that captivate your audience.
            </p>
          </div>
          <div className="rounded-lg bg-card p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary">
              <CodeIcon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Front-end Development</h3>
            <p className="text-muted-foreground">
              Bringing your designs to life with clean, responsive, and performant front-end code.
            </p>
          </div>
          <div className="rounded-lg bg-card p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary">
              <ServerIcon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Back-end Development</h3>
            <p className="text-muted-foreground">
              Crafting robust and scalable server-side solutions to power your web applications.
            </p>
          </div>
          <div className="rounded-lg bg-card p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary">
              <CodeIcon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Full-stack Development</h3>
            <p className="text-muted-foreground">
              Delivering end-to-end web solutions that seamlessly integrate front-end and back-end technologies.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-muted py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready to transform your web presence?</h2>
          <p className="mb-8 text-muted-foreground">
            Contact our team of experts to discuss your web development needs and how we can help you achieve your
            goals.
          </p>
          <Link
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}

function BrushIcon(props) {
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
      <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
      <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" />
    </svg>
  )
}


function CodeIcon(props) {
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
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}


function ServerIcon(props) {
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
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
      <line x1="6" x2="6.01" y1="6" y2="6" />
      <line x1="6" x2="6.01" y1="18" y2="18" />
    </svg>
  )
}