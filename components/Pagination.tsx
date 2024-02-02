import { IoChevronBack, IoChevronForward } from "react-icons/io5";

interface PaginationProps {
    page: number,
    onNext: () => void,
    onPrev: () => void
}

export default function Pagination({
    page,
    onNext,
    onPrev
}: PaginationProps) {
    const disablePrev = page === 1;
    return (
        <div className="join py-10">
            <button
                className="join-item btn"
                onClick={onPrev}
                disabled={disablePrev}
            >
                <IoChevronBack/>
            </button>
            <button className="join-item btn">Page {page}</button>
            <button
                className="join-item btn"
                onClick={onNext}
            >
                <IoChevronForward/>
            </button>
        </div>
    )
}
