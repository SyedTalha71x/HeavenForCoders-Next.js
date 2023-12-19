import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'
const fs = require('node:fs');

const Slug = () => {

    const [blog, setblog] = useState();

    // const router = useRouter();
    // useEffect(() => {

    //     if (!router.isReady) return;

    //     const { slug } = router.query;

    //     fetch(`http://localhost:3000/api/getblogs?slug=${slug}`).then((response) => {
    //         return response.json();
    //     }).then((parsedata) => {
    //         console.log(parsedata);
    //         setblog(parsedata);
    //     }).catch((error) => {
    //         console.log(error);
    //     });
    // }, [router.isReady])

    return <div className={styles.container}>
        <main className={styles.main}>
            <h1>{blog && blog.title}</h1>
            <hr />
            <p>
                {blog && blog.description}
            </p>
        </main>
    </div>;
};

export async function getStaticProps(context) {

    const { slug } = context.params;
    let myblog = await fs.promises.readFile(`jsondata/${slug}.json`, "utf-8");
    return {
        props: {
            myblog: JSON.parse(myblog)
        },
    }
}

export async function getStaticPaths() {

    return {
        paths: [
            { params: { slug: "howtolearnangular" } },
            { params: { slug: "howtolearnnextjs" } },
            { params: { slug: "howtolearnreact" } }
        ]
        , fallback: false
    }
}


export default Slug;