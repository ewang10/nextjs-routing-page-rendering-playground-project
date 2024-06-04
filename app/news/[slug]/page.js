import Link from "next/link";
import { notFound } from "next/navigation";
import { DUMMY_NEWS } from "@/dummy-news";

function NewsDetailPage({ params }) {
    const newsSlug = params.slug;
    const newsItem = DUMMY_NEWS.find(({ slug }) => slug === newsSlug);

    if (!newsItem) {
        notFound();
    }

    const { image, title, date, content } = newsItem;

    return (
        <article className="news-article">
            <header>
                <Link href={`/news/${newsItem.slug}/image`}>
                    <img src={`/images/news/${image}`} />
                </Link>
                <h1>{title}</h1>
                <time dateTime={date}>{date}</time>
            </header>
            <p>{content}</p>
        </article>
    );
}

export default NewsDetailPage;
