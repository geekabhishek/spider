import Head from 'next/head'
import Link from "next/link";
import Image from "next/image";

import {getDate} from "../utils/utils";

export default function Post({post, featuredMedia}) {

    return (
        <>
        <Head>
        <title>{post.title.rendered}</title>
        </Head>
        <div className="card mb-3" style={{maxWidth: "540px"}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <Link href={`/posts/${post.slug}`}>
                        <a>
                            <Image src={featuredMedia["media_details"].sizes.medium["source_url"]} width={180} height={120} alt={featuredMedia["alt_text"]}/>
                        </a>
                    </Link>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{post.title.rendered}</h5>
                        <div className="card-text" dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}></div>
                        <p className="card-text"><small className="text-muted">On {getDate(post.modified)}</small></p>
                        <Link href={`/posts/${post.slug}`}>
                            <a className="btn btn-primary">See more</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )

}