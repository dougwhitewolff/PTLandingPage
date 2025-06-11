import Image from 'next/image';
import Link from 'next/link';
import { blogs } from '@/lib/blog-data';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export default function BlogPage() {
  const featured = blogs[0];
  const rest = blogs.slice(1);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Featured Blog */}
      <div className="flex flex-col lg:flex-row items-center gap-8 mb-12 mt-16">
        <div className="w-full lg:w-1/2">
          <Image
            src={featured.cardImage}
            alt={featured.title}
            width={600}
            height={400}
            className="rounded-xl object-cover w-full h-72 lg:h-96 shadow-md"
            priority
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium w-fit mb-2">Featured</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground leading-tight">{featured.title}</h2>
          <p className="text-base text-foreground/80 mb-4">{featured.description}</p>
          <Link
            href={`/blog/${featured.id}`}
            target="_blank"
            className="inline-flex items-center gap-2 text-primary px-4 py-1.5 rounded-md font-medium text-sm transition hover:text-primary-hover"
          >
            Read More <ArrowRight className="w-2 h-2" />
          </Link>
        </div>
      </div>

      {/* Blog Grid */}
      <h3 className="text-xl font-semibold mb-6 text-foreground">Our Recent Articles</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {rest.map((blog) => (
          <Card key={blog.id} className="h-full flex flex-col overflow-hidden !py-0">
            <CardContent className="p-0 flex flex-col flex-1">
              <Image
                src={blog.cardImage}
                alt={blog.title}
                width={400}
                height={220}
                className="rounded-t-xl object-cover w-full h-48"
              />
              <div className="p-4 flex flex-col flex-1">
                <CardTitle className="text-lg font-semibold mb-2">{blog.title}</CardTitle>
                <CardDescription className="mb-3 text-foreground/80">{blog.description}</CardDescription>
                <Link
                  href={`/blog/${blog.id}`}
                  target="_blank"
                  className="mt-auto inline-flex items-center gap-2 text-primary px-3 py-1.5 rounded-md font-medium text-sm transition hover:text-primary-hover"
                >
                  Read More <ArrowRight className="w-2 h-2" />
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
