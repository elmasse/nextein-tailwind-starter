import { getData, getPost } from 'nextein/fetcher'
import Content from 'nextein/content'

import site from '../site'
import { Meta } from '../components/meta'
import { Navigation } from '../components/navigation'
import { Header } from '../components/header'
import { Footer } from '../components/footer'

export async function getStaticPaths () {
  const data = await getData()

  return {
    paths: data.map(({ year, month, day, slug }) => ({ params: { blog:[year, month, day, slug] }})),
    fallback: false
  }
}

export async function getStaticProps ({ params }) {
  const post = await getPost({ slug: params.blog[3] })

  return {
    props: {
      post
    }
  }
}

export default function Post ({ post }) {  
  const author = site.authors[post.data.author]
  const source = site.authors[post.data.source]
  return (
    <div>
      <Meta title={`${site.name} - ${post.data.title}`} />
      <Header>
        <Navigation className="absolute inset-0 text-white"/>
        <div className="my-0 mx-auto p-4 max-w-7xl">
          <h1 className="text-6xl text-white sm:text-7xl md:text-8xl">{post.data.title}</h1>
          <div className="w-full mt-0.5 font-medium text-purple-100">
            <dt className="inline">
            {author && 'Written by '}
            {source && 'From '}
            </dt>{' '}
            <dd className="inline text-white font-semibold">{(author || source).name}</dd>
          </div>
        </div>
      </Header>
      <main className="my-10 mx-auto p-4 max-w-7xl prose lg:prose-lg xl:prose-xl">
        <Content {...post} />
      </main>
      <Footer />
    </div>
  )
}