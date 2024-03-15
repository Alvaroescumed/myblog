import Head from "next/head";

export default function  Home(){
  return(
    <>
      <Head>
        <title>Home - MyBlog</title>
        <meta name="description" content="Welcome to my blog" />
      </Head>
      <main>
        <h1>Welcome to my blog</h1>
        <p>This is a blog where you can read about many interesting topics.</p>
      </main>
    </>
  );
}