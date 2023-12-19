import React, { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import '../styles/Home.module.css'
import Link from 'next/link'
const fs = require('node:fs');


const Blog = (props) => {

    const [blogs, setblogs] = useState(props.allBlogs);

    // useEffect(() => {
    //     fetch("http://localhost:3000/api/blogs").then((a) => {
    //         return a.json();
    //     }).then((parsed) => {
    //         console.log(parsed);
    //         setblogs(parsed);
    //     })
    // }, [])


    return (
        <>
            <div className={styles.container1}>
                <div>
                    <h1 className={styles.headingprimary}>Learn Programming Languages in 2023</h1>
                    <hr className='my-4 h-1 bg-black' />
                    <div className="blogcontainer my-8">
                        {blogs.map((blogitem) => {
                            return <div key={blogitem.slug}>
                                <Link href={`/Blogpost/${blogitem.slug}`}>
                                    <h3 className={styles.blogheading}>{blogitem.title}</h3>
                                </Link>
                                <p className={styles.blogpara}>{blogitem.description.substr(0, 200)}</p>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

// Server side rendering in next js 

// export async function getServerSideProps() {
//     let data = await fetch("http://localhost:3000/api/blogs");
//     let allBlogs = await data.json();

//     return {
//         props: { allBlogs },
//     }
// }

export async function getStaticProps() {

    let data = await fs.promises.readdir("jsondata");
    let myfile;
    let allBlogs = [];
    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        myfile = await fs.promises.readFile(("jsondata/" + item), 'utf8');
        allBlogs.push(JSON.parse(myfile));
    }
    return {
        props: {
            allBlogs
        },
    }
}
export default Blog;