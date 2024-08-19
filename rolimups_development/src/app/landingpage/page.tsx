import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="bg-muted py-12 md:py-24 lg:py-32 flex items-center justify-center">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Unleash Your Digital Potential with Rolimups Development
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl">
              We are a team of passionate developers dedicated to crafting exceptional digital experiences. Let us help
              you transform your ideas into reality.
            </p>
            <div>
              <Button size="lg">Get Started</Button>
            </div>
          </div>
        </section>
        
        <section className="bg-background py-12 md:py-24 lg:py-32">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-muted rounded-lg p-6 shadow-sm">
                <h3 className="text-2xl font-bold mb-4">Web Development</h3>
                <p className="text-muted-foreground">
                  Our team of experienced web developers can help you build custom, responsive websites that are
                  optimized for performance and user experience.
                </p>
                <Link href="#" className="text-primary hover:underline mt-4 inline-block" prefetch={false}>
                  Learn More
                </Link>
              </div>
              <div className="bg-muted rounded-lg p-6 shadow-sm">
                <h3 className="text-2xl font-bold mb-4">Mobile Development</h3>
                <p className="text-muted-foreground">
                  We specialize in building high-quality mobile apps for both iOS and Android platforms, ensuring your
                  users have a seamless experience on any device.
                </p>
                <Link href="#" className="text-primary hover:underline mt-4 inline-block" prefetch={false}>
                  Learn More
                </Link>
              </div>
              <div className="bg-muted rounded-lg p-6 shadow-sm">
                <h3 className="text-2xl font-bold mb-4">UX/UI Design</h3>
                <p className="text-muted-foreground">
                  Our talented designers create visually stunning and user-friendly interfaces that enhance the overall
                  experience of your digital products.
                </p>
                <Link href="#" className="text-primary hover:underline mt-4 inline-block" prefetch={false}>
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-background py-12 md:py-24 lg:py-32">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Why Choose Rolimups?</h2>
                <p className="text-muted-foreground mb-8">
                  We are a team of passionate and experienced developers who are dedicated to delivering exceptional
                  digital solutions that exceed our clients' expectations.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted rounded-lg p-4 shadow-sm">
                    <RocketIcon className="h-8 w-8 text-primary mb-4" />
                    <h4 className="text-lg font-bold mb-2">Innovative Solutions</h4>
                    <p className="text-muted-foreground">
                      We stay up-to-date with the latest technologies and trends to provide innovative solutions that
                      drive business growth.
                    </p>
                  </div>
                  <div className="bg-muted rounded-lg p-4 shadow-sm">
                    <ThumbsUpIcon className="h-8 w-8 text-primary mb-4" />
                    <h4 className="text-lg font-bold mb-2">Exceptional Service</h4>
                    <p className="text-muted-foreground">
                      Our team is dedicated to providing exceptional service and support throughout the entire project
                      lifecycle.
                    </p>
                  </div>
                  <div className="bg-muted rounded-lg p-4 shadow-sm">
                    <BoltIcon className="h-8 w-8 text-primary mb-4" />
                    <h4 className="text-lg font-bold mb-2">Rapid Delivery</h4>
                    <p className="text-muted-foreground">
                      We use agile methodologies to ensure fast and efficient delivery of your project, without
                      compromising quality.
                    </p>
                  </div>
                  <div className="bg-muted rounded-lg p-4 shadow-sm">
                    <SparkleIcon className="h-8 w-8 text-primary mb-4" />
                    <h4 className="text-lg font-bold mb-2">Attention to Detail</h4>
                    <p className="text-muted-foreground">
                      Our team pays meticulous attention to every aspect of your project, ensuring a polished and
                      high-quality final product.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="/placeholder.svg"
                  width="600"
                  height="400"
                  alt="Why Choose Rolimups"
                  className="rounded-lg object-cover"
                  style={{ aspectRatio: "600/400", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function BoltIcon(props) {
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
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  )
}


function RocketIcon(props) {
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
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}


function SparkleIcon(props) {
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
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    </svg>
  )
}


function ThumbsUpIcon(props) {
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
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  )
}