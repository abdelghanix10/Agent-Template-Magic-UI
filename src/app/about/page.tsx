import { siteConfig } from "@/lib/config";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-6 max-w-4xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-medium tracking-tighter">
          About {siteConfig.name}
        </h1>
        <p className="text-xl text-muted-foreground text-center">
          We are on a mission to revolutionize how teams work with AI-powered
          delegation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Our Vision</h2>
          <p className="text-muted-foreground">
            In a world where digital noise is constant, {siteConfig.name} aims
            to be the quiet force that organizes your life. We believe AI should
            not just answer questions, but actively manage the complex web of
            tasks that modern professionals face every day.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">The Team</h2>
          <p className="text-muted-foreground">
            Founded by a group of AI researchers and product designers, we’re
            passionate about building tools that feel like magic but work with
            rigorous precision. We’re located in San Francisco but work with a
            global mindset.
          </p>
        </div>
      </div>

      <div className="bg-accent rounded-3xl p-8 md:p-12 w-full text-center space-y-6 border border-border">
        <h2 className="text-3xl font-bold">Building for the future</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We’re constantly iterating and learning. Our users are at the center
          of everything we do, and we’re excited to show you what’s next on our
          roadmap.
        </p>
      </div>
    </div>
  );
}
