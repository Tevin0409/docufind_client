import { Shield, FileSearch } from "lucide-react";
import Image from "next/image";

export default function ContentSection() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">
          Our recovery solutions bring your documents back to life.
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <div className="relative space-y-4">
            <p className="text-muted-foreground">
              Docufind is more than just a recovery tool.{" "}
              <span className="text-muted-foreground font-bold">
                We offer a complete restoration ecosystem
              </span>
              — from emergency recovery to long-term data protection.
            </p>
            <p className="text-muted-foreground">
              Our comprehensive platform supports all file types and devices —
              helping individuals and businesses recover what matters most when
              disaster strikes.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <FileSearch className="size-4" />
                  <h3 className="text-sm font-medium">Fast Recovery</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Advanced algorithms recover your documents in minutes, not
                  days.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Shield className="size-4" />
                  <h3 className="text-sm font-medium">Secure Process</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  End-to-end encryption keeps your recovered documents safe and
                  private.
                </p>
              </div>
            </div>
          </div>
          <div className="relative mt-6 sm:mt-0">
            <div className="bg-linear-to-b aspect-67/34 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
              {/* image with document recovery visualization */}

              <Image
                src="/images/found.png"
                className="rounded-[15px] shadow dark:hidden"
                alt="document recovery illustration"
                width={1206}
                height={612}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
