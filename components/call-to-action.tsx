import { Button } from "@/components/ui/button";

interface CTAProps {
  reportLostHandler: () => void;
  reportFoundHandler: () => void;
}
export default function CallToAction(props: CTAProps) {
  const { reportLostHandler, reportFoundHandler } = props;
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Need Help With Documents?
          </h2>
          <p className="mt-4">
            Whether you&apos;ve lost important files or found someone
            else&apos;s documents, we can help.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" onClick={reportLostHandler}>
              <span>Find My Documents</span>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              onClick={reportFoundHandler}
            >
              <span>Report Found Documents</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
