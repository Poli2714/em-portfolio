import Link from 'next/link';

type BlogPostLinkprops = {
  blogPostLink: string;
};

function BlogPostLink({ blogPostLink }: BlogPostLinkprops) {
  return (
    <p>
      Read my detailed blog post on how I implemented this solution{' '}
      <Link className='font-semibold' href={blogPostLink}>
        here.
      </Link>
    </p>
  );
}

export default BlogPostLink;
