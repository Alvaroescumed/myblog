import Head from "next/head";
import Link from "next/link";
import styles from "./Posts.module.css"

export async function getStaticProps(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    return {
        props: {
            posts,
        }
    }
}

export default function Posts({posts}){
    return(
        <>
        <Head>
            <title>Posts - MyBlog</title>
            <meta name="description" content="Read my latest posts"/>
        </Head>
        <main>
            <h1>Posts</h1>
            <p>Read my latest posts</p>
            <ul className={styles.list}>
                {posts.map((post => (
                    <li className={styles.item} key={post.id}>
                        <Link className={styles.link} href={`/posts/${post.id}`}>{post.title}</Link>
                    </li>
                )))}
            </ul>
        </main>
        </>
    )

}