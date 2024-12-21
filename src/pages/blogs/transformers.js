import Head from 'next/head';
import { Detail } from '../../components/Detail';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import fs from 'fs';
import path from 'path';

export async function getStaticProps() {
  let blogContent = fs.readFileSync(
    path.join(process.cwd(), 'public/static/content/transformers-blog.html'),
    'utf8'
  );

  // Add loading="lazy" and centering styles to all images
  blogContent = blogContent.replace(
    /<img/g, 
    '<img style="margin: 0 auto; display: block; max-width: 600px;" loading="lazy"'
  );

  // Center-align figure elements
  blogContent = blogContent.replace(
    /<figure/g,
    '<figure style="text-align: center; margin: 1.5em auto;"'
  );

  return {
    props: {
      blogContent,
    },
  };
}

export default function TransformersBlog({ blogContent }) {
  return (
    <>
      <Head>
        <title>transformers</title>
        <meta property='og:title' content='mathematical intuition for transformers • marmik' key='title' />
      </Head>
      <Detail.Container>
        <Detail.ContentContainer>
          <article 
            className='prose prose-lg dark:prose-invert max-w-none px-8
              prose-pre:bg-gray-100 prose-pre:dark:bg-gray-800
              prose-code:text-gray-800 prose-code:dark:text-gray-200
              prose-code:before:content-none prose-code:after:content-none
              prose-headings:scroll-mt-24
              prose-a:text-blue-600 prose-a:dark:text-blue-400
              prose-a:no-underline hover:prose-a:text-blue-800 hover:prose-a:dark:text-blue-200
              prose-img:rounded-lg
              prose-hr:border-gray-200 prose-hr:dark:border-gray-800'
            dangerouslySetInnerHTML={{ __html: blogContent }}
          />
        </Detail.ContentContainer>
      </Detail.Container>
    </>
  );
} 