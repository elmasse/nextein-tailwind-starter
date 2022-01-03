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
        <Navigation className="text-white border-b-2 border-pink-500 absolute inset-x-0 top-0"/>
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
      <main className="my-10 mx-auto p-4 prose md:prose-lg xl:prose-2xl">
        <Content {...post} />
      </main>
      <Footer />
    </div>
  )
}
