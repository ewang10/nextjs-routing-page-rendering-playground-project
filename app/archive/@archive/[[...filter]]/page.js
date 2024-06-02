import Link from "next/link";
import NewsList from "@/components/news-list";
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from "@/lib/news";

export default function FilteredNewsPage({ params }) {
    const filter = params.filter || [];
    const [selectedYear, selectedMonth] = filter;
    let news;
    let links = getAvailableNewsYears();
    let newsContent = <p>No news found for the selected period.</p>;

    if (selectedYear && !selectedMonth) {
        news = getNewsForYear(selectedYear);
        links = getAvailableNewsMonths(selectedYear);
    }

    if (selectedYear && selectedMonth) {
        news = getNewsForYearAndMonth(selectedYear, selectedMonth);
        links = [];
    }

    if (news && news.length > 0) {
        newsContent = <NewsList news={news} />;
    }

    if (
        selectedYear && !getAvailableNewsYears().includes(+selectedYear) ||
        selectedMonth && !getAvailableNewsMonths(selectedYear).includes(+selectedMonth)
    ) {
        throw new Error('Invalid filter.');
    }

    return (
        <>
            <header id="archive-header">
                <nav>
                    <ul>
                        {
                            links.map(link => {
                                const href = `/archive/${selectedYear ? `${selectedYear}/` : ''}${link}`;
                                
                                return (
                                    <li key={link}>
                                        <Link href={href}>{link}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </header>
            {newsContent}
        </>
    );
}