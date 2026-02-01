import { siteConfig } from "@/lib/config";

export default function StoryPage() {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-6 max-w-4xl mx-auto space-y-16">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-medium tracking-tighter italic">
          Our Story
        </h1>
        <p className="text-xl text-muted-foreground text-center">
          How a simple script turned into an AI-powered delegation platform.
        </p>
      </div>

      <div className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold italic tracking-tighter">
            The Spark
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            It started in a small apartment in late 2023. Our founder was
            overwhelmed by scheduling emails, data entry, and project tracking.
            They realized that while AI was great at talking, it hadn&apos;t yet
            learned how to *act* effectively on behalf of people.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-bold italic tracking-tighter">
            The Journey
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We spent months developing a core engine that could understand
            context and execute tasks with high reliability. After hundreds of
            beta testers and late-night debugging sessions, {siteConfig.name}{" "}
            was born.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-bold italic tracking-tighter">
            The Future
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Today, we help thousands of professionals reclaim their time. But
            we&apos;re just getting started. Our goal is to make AI agents as
            commonplace and as useful as the smartphone.
          </p>
        </div>
      </div>
    </div>
  );
}
