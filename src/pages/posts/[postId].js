export async function getStaticPaths(){ //Iteramos un array de objetos con una propiedad params
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    const paths = posts.map((post) => ({
        params: {postId: post.id.toString()},
    }))

    return{
        paths,
        fallback: false,
    };
}

export async function getStaticProps({params}){
    const {postId} = params;
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    const post = await response.json();

    return{
        props: {
            post,
        }
    }; // se puede crear una funcion a parte para realizar el fetching ya que se repite. Esto mejorara la optimizacion del codigo
}

export default function Post({post}){
    return(
        <article>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </article>
    )
}