import Image from 'next/image'
import { Detail } from './Detail'
import Link from 'next/link'

function SectionTitle(props) {
  return (
    <h4
      className='col-span-2 text-lg font-semibold text-primary md:text-right md:text-base md:font-normal md:text-opacity-40 font-palatino'
      {...props}
    />
  )
}

function SectionContent(props) {
  return <div className='col-span-10' {...props} />
}

function TableRow({ href, title, subtitle, date }) {
  return (
    <a
      href={href}
      className='flex items-center space-x-4 group'
    >
      <strong className='flex-none font-medium text-gray-900 group-hover:text-indigo-600 dark:text-gray-100 dark:group-hover:text-indigo-500 font-palatino'>
        {title}
      </strong>
      <span className='w-full border-t border-gray-300 border-dashed shrink dark:border-gray-800' />
      {subtitle && <span className='flex-none text-tertiary text-sm md:text-base font-palatino'>{subtitle}</span>}
      {date && <span className='flex-none font-mono text-quaternary hidden md:flex font-palatino'>{date}</span>}
    </a>
  )
}

function SectionContainer(props) {
  return (
    <div
      className='grid items-start grid-cols-1 md:grid-cols-12 gap-3 md:gap-6'
      {...props}
    />
  )
}

export function Home() {
  return (
    <Detail.Container>
      <Detail.ContentContainer>

        {/* Avatar */}
        <div className='justify-center flex mb-6 md:ml-20 dark:hidden'>
          <Image
            src='/static/img/home.JPG'
            alt='marmik'
            width={200}
            height={200}
            quality={75}
            className='rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl filter-image'
          />
        </div>

        <div className='pb-24 md:pb-4 space-y-12 md:space-y-16 dark:mt-8'>
          {/* Bio */}
          <SectionContainer>
          <SectionTitle>about</SectionTitle>
            <SectionContent>
              <div className='prose -mb-8'>
                <p>
                  hey, i&apos;m marmik. i&apos;m a 19 yo cs + math major at penn state university. i spend most of my time understanding deep learning, working on neural nets, building cool things with them for fun and exploring math.
                  apart from this i love watching movies and have also been painting since a long time and still enjoy doing it in free time.
                </p>
                <p className='-mb-2'>
                  things i&apos;ve worked on in the past or am currently working on :
                </p>
                <ul>
                  <li>inference and compound ai systems @ groq</li>
                  <li>tinkering with chain of thought in reasoning models</li>
                  <li>research on interpreting Mixture of Experts (MoEs) for domain specialization. (paper published at ICLR&apos;25 Workshop on Sparsity in LLMs)</li>
                  <li>created a very fast and efficient model for image2latex for math equations using CNNs and transformers with my friends during summer</li>
                  <li>ml developer at a startup working on ocr using vision transformers</li>
                  <li>computer vision algorithms for a fully autonomous robot for <Link href='https://www.robomaster.com/en-US' target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200'>robomaster</Link> league team @ penn state</li>
                </ul>
              </div>
            </SectionContent>
          </SectionContainer>

          {/* Socials */}
          <SectionContainer>
            <SectionTitle>online</SectionTitle>
            <SectionContent>
              <div className='flex flex-col space-y-3'>
                <TableRow
                  href={'mailto:marmik@psu.edu'}
                  title={'email'}
                  subtitle={'mail'}
                  date={''}
                />
                <TableRow
                  href={'https://github.com/MarmikChaudhari'}
                  title={'github'}
                  subtitle={'follow'}
                  date={''}
                />
                <TableRow
                  href={'https://x.com/marmikch'}
                  title={'twitter/𝕏'}
                  subtitle={'follow'}
                  date={''}
                />
                <TableRow
                href={'https://scholar.google.com/citations?view_op=list_works&hl=en&user=YD3uM-4AAAAJ&gmla=ANZ5fUMO-b7o2UG733m8wLvuvn9mtxQFcbUPnEW177iA_VF-6ZhDwb6PzU6fwXSFxXE58cbKqHmOL5ed6HxSbMeG7c-wfNiIM_4'}
                title={'google scholar'}
                subtitle={'papers'}
                date={''}
                />
              </div>
            </SectionContent>
          </SectionContainer>

          {/* Spotify Widget */}
          {/* <SectionContainer>
            <SectionTitle>music</SectionTitle>
            <SectionContent>
            {/* <iframe className='border-radius:12px' src='https://open.spotify.com/embed/playlist/1wu9NQCwZEDS3jJNvvalCZ?utm_source=generator&theme=0' width='100%' height='352' frameBorder='0' allowFullScreen='' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'></iframe> */}
            {/* </SectionContent> */}
          {/* </SectionContainer> */} 

          {/* :) */}
          
        </div>
      </Detail.ContentContainer>
    </Detail.Container>
  )
}
