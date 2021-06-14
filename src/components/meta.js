import Head from 'next/head'

export function Meta ({ title }) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <title>{title}</title>
    </Head>    
  )
}