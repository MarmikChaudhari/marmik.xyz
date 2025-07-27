import Head from 'next/head';
import { Detail } from '../../components/Detail';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import { useState, useEffect } from 'react';

export default function SuperpositionBlog() {
  const [blogContent, setBlogContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadBlogContent = async () => {
      try {
        const response = await fetch('/static/content/superposition.html');
        let content = await response.text();

        // Fix image paths to point to the correct static directory
        content = content.replace(
          /how%20neural%20networks%20think%20at%20scale%2022a6feef359d80d6b26cea4709d08d61\//g,
          '/static/content/superposition-assets/'
        );

        // Add loading="lazy" and full-width styles to all images
        content = content.replace(
          /<img/g, 
          '<img style="width: 100%; height: auto; display: block;" loading="lazy"'
        );

        // Center-align figure elements
        content = content.replace(
          /<figure/g,
          '<figure style="text-align: center; margin: 1.5em auto;"'
        );

        setBlogContent(content);
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading blog content:', error);
        setIsLoading(false);
      }
    };

    loadBlogContent();
  }, []);

  if (isLoading) {
    return (
      <>
        <Head>
          <title>how neural networks think at scale</title>
          <meta property='og:title' content='how neural networks think at scale' key='title' />
        </Head>
        <Detail.Container>
          <Detail.ContentContainer>
            <div className='pb-24 md:pb-4 space-y-12 md:space-y-16'>
              <div className='text-center font-source-serif-4'>
                Loading...
              </div>
            </div>
          </Detail.ContentContainer>
        </Detail.Container>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>how neural networks think at scale</title>
        <meta property='og:title' content='how neural networks think at scale' key='title' />
      </Head>
      <Detail.Container>
        <Detail.ContentContainer>
          <div className='pb-24 md:pb-4 space-y-12 md:space-y-16'>
            <article 
              className='prose prose-lg dark:prose-invert !max-w-none -mb-8 font-source-serif-4
                prose-pre:bg-gray-100 prose-pre:dark:bg-gray-800
                prose-code:text-gray-800 prose-code:dark:text-gray-200
                prose-code:before:content-none prose-code:after:content-none
                prose-headings:scroll-mt-24 prose-headings:font-source-serif-4
                prose-p:font-source-serif-4 prose-li:font-source-serif-4
                prose-blockquote:font-source-serif-4 prose-strong:font-source-serif-4
                prose-a:text-blue-600 prose-a:dark:text-blue-400 prose-a:font-source-serif-4
                prose-a:no-underline hover:prose-a:text-blue-800 hover:prose-a:dark:text-blue-200
                prose-img:rounded-lg
                prose-hr:border-gray-200 prose-hr:dark:border-gray-800
                [&_.page-title]:font-source-serif-4
                [&_h3]:!font-source-serif-4 [&_h3]:!font-bold [&_h3]:!text-gray-900 [&_h3]:dark:!text-gray-100
                [&_h3#11e6feef-359d-804c-8e76-f29bfae0ddeb]:!font-source-serif-4 [&_h3#11e6feef-359d-804c-8e76-f29bfae0ddeb]:!font-bold'
              dangerouslySetInnerHTML={{ __html: blogContent }}
            />
          </div>
        </Detail.ContentContainer>
      </Detail.Container>
    </>
  );
}
