import { DUMMY_NEWS } from "@/dummy-news";

function NewsDetailPage({ params }) {
    const newsSlug = params.slug;
    const { image, title, date, content } = DUMMY_NEWS.find(({ slug }) => slug === newsSlug);

    return (
        <article className="news-article">
            <header>
                <img src={`/images/news/${image}`} />
                <h1>{title}</h1>
                <time dateTime={date}>{date}</time>
            </header>
            <p>{content}</p>
        </article>
    );
}

export default NewsDetailPage;
