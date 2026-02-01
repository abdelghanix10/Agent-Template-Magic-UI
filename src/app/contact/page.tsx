import { siteConfig } from "@/lib/config";

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-6 max-w-4xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-medium tracking-tighter italic">
          Get in Touch
        </h1>
        <p className="text-xl text-muted-foreground text-center">
          Have questions? We&apos;d love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold italic tracking-tighter">
              Support
            </h2>
            <p className="text-muted-foreground">
              Our support team is available 24/7 to help you with any technical
              issues or questions.
            </p>
            <p className="font-medium">
              {siteConfig.links?.email || "support@skyagent.ai"}
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold italic tracking-tighter">
              Sales
            </h2>
            <p className="text-muted-foreground">
              Interested in our enterprise plans? Let&apos;s talk about how we
              can help your team.
            </p>
            <p className="font-medium">sales@skyagent.ai</p>
          </div>
        </div>

        <form className="space-y-4 border border-border p-6 rounded-2xl bg-accent/50">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full bg-background border border-border rounded-md px-3 py-2 outline-none focus:border-primary"
              placeholder="Your name"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full bg-background border border-border rounded-md px-3 py-2 outline-none focus:border-primary"
              placeholder="Your email"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              className="w-full bg-background border border-border rounded-md px-3 py-2 outline-none focus:border-primary h-32"
              placeholder="How can we help?"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground font-medium py-2 rounded-md hover:bg-primary/90 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
