import { siteConfig } from "@/lib/config";

export default function BlogPage() {
  const posts = [
    {
      title: "The Future of AI Agents in the Workplace",
      date: "May 12, 2025",
      description:
        "How autonomous agents are shifting the paradigm of productivity.",
      category: "Trends",
    },
    {
      title: "Best Practices for Prompt Engineering",
      date: "June 2, 2025",
      description:
        "Getting the most out of your AI assistant with the right instructions.",
      category: "Guides",
    },
    {
      title: "Announcing our $10M Series A",
      date: "July 20, 2025",
      description:
        "We're expanding our team and building more powerful automations.",
      category: "News",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-20 px-6 max-w-5xl mx-auto space-y-16">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-medium tracking-tighter italic">
          Blog
        </h1>
        <p className="text-xl text-muted-foreground text-center">
          Insights, updates, and stories from the {siteConfig.name} team.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {posts.map((post, idx) => (
          <div
            key={idx}
            className="group cursor-pointer border border-border rounded-2xl p-6 hover:bg-accent transition-colors duration-200"
          >
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-primary/60">
                {post.category}
              </span>
              <h3 className="text-xl font-bold group-hover:underline">
                {post.title}
              </h3>
              <p className="text-muted-foreground line-clamp-3">
                {post.description}
              </p>
              <div className="pt-4 text-sm font-medium">{post.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
