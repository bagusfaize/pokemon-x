import { useState } from "react"

export const usePagination = () => {
    const [limit, setLimit] = useState<number>(9);
    const [offset, setOffset] = useState<number>(0);
    const [page, setPage] = useState(1);

    const handleNext = () => {
        setOffset(offset+limit);
        setPage(page+1);
    }

    const handlePrev = () => {
        setOffset(offset-limit);
        setPage(page-1)
    }

    return {
        limit,
        offset,
        page,
        handleNext,
        handlePrev
    }

}
