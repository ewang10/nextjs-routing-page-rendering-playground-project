import Link from "next/link";
import { DUMMY_NEWS } from "@/dummy-news";

function NewsPage() {
    return (
        <>
            <h1>News Page</h1>
            <ul className="news-list">
                {
                    DUMMY_NEWS.map(({ id, slug, title, image}) => (
                        <li key={id}>
                            <Link href={`/news/${slug}`}>
                                <img src={`/images/news/${image}`} alt={title} />
                                <span>{title}</span>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </>
    );
}

export default NewsPage;
