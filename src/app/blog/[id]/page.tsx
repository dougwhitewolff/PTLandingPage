import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { blogs } from '@/lib/blog-data';
import { Navbar } from '@/components/navigation/navbar';
import { ArrowLeft } from 'lucide-react';

export default function BlogDetailPage({ params }: { params: { id: string } }) {
  const blog = blogs.find((b) => b.id === params.id);
  if (!blog) return notFound();

  // Split content into paragraphs and remove empty strings
  const paragraphs = blog.content.split('\n\n').filter(Boolean);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="max-w-3xl mx-auto w-full px-4 pt-24 pb-8 flex-1">
        {/* Hero Image */}
        <Image
          src={blog.images[0]}
          alt={blog.title}
          width={900}
          height={400}
          className="rounded-xl object-cover w-full h-64 sm:h-80 md:h-96 mb-8 shadow-md"
          priority
        />
        
        {/* Title and Description */}
        <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4">{blog.title}</h1>
        <p className="text-lg text-foreground/80 mb-8">{blog.description}</p>
        
        {/* Content with Dynamic Second Image */}
        <div className="prose prose-invert max-w-none text-foreground mb-8">
          {paragraphs.map((paragraph, index) => (
            <div key={index}>
              <p className="mb-4">{paragraph}</p>
              {/* Insert second image after specified paragraph */}
              {blog.images[1] && index === blog.secondImageAfterParagraph && (
                <div key={`image-${index}`} className="my-8">
                  <Image
                    src={blog.images[1]}
                    alt={`${blog.title} illustration`}
                    width={900}
                    height={400}
                    className="rounded-xl object-cover w-full h-64 sm:h-80 md:h-96 shadow-md"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Back to Blog Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 border border-primary text-primary px-4 py-1.5 rounded-md font-medium text-sm hover:bg-primary/10 transition"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>
      </div>
    </div>
  );
}
