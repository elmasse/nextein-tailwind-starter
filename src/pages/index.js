import { getPosts } from 'nextein/fetcher'
import Content from 'nextein/content'

import Link from 'next/link'

import site from '../site'
import { Meta } from '../components/meta'
import { Header } from '../components/header'
import { Footer } from '../components/footer'


export async function getStaticProps () {
  return {
    props: {
      posts: await getPosts()
    }
  }
}


export default function Index ({ posts }) {
  return (
    <div>
      <Meta title={site.name} />
      <Header>
        <div className="my-0 mx-auto p-4 max-w-7xl">
          <h1 className="text-6xl text-white sm:text-7xl md:text-8xl">{site.name}</h1>
        </div>
      </Header>
      <main className="my-16 mx-auto p-4 max-w-7xl flex flex-col">
        <section className="divide-y-2 divide-dotted space-y-12">
          {posts.map(post => {
            const author = site.authors[post.data.author]
            const source = site.authors[post.data.source]
            return (
              <article key={post.data.url} className="py-10 space-y-10">
                <header>
                  <h1 className="text-4xl tracking-tight font-semibold text-pink-500 sm:text-5xl md:text-6xl">
                    <Link as={`/${post.data.name}`} href='/[post]' ><a>{post.data.title}</a></Link>
                  </h1>
                  <div className="w-full mt-0.5 font-normal text-pink-500">
                    <dt className="inline">
                    {author && 'Written by '}
                    {source && 'From '}
                    </dt>{' '}
                    <dd className="inline text-purple-700 font-medium">{(author || source).name}</dd>
                  </div>
                </header>
                <Content className="prose lg:prose-lg xl:prose-xl" {...post} excerpt />
                <div>
                  <Link as={`/${post.data.name}`} href='/[post]'><a className="text-purple-500 font-medium">Read more</a></Link>
                </div>
              </article>
            )
          })}
        </section>
      </main>
      <Footer />
    </div>
  )
}
