import {
    Pagination,
    PaginationItem,
} from "@mui/material";
import {
    FirstPage,
    LastPage,
    NavigateBefore,
    NavigateNext,
} from "@mui/icons-material";
import { Dispatch, SetStateAction } from "react";

interface TProps {
    paginateCount: number, page: number, rowsPerPage: number, stateAfterFilter: any, setPage: Dispatch<SetStateAction<number | string>>
}
export default function TablePagination({ paginateCount, page, rowsPerPage, stateAfterFilter, setPage }: TProps) {
    return <Pagination
        count={paginateCount || Math.ceil(stateAfterFilter.length / rowsPerPage)}
        page={page + 1}
        onChange={(e, value) => {
            setPage(value - 1)
        }}
        sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
            marginBottom: "20px",
        }}
        renderItem={(item) => (
            <PaginationItem
                slots={{
                    first: FirstPage,
                    previous: NavigateBefore,
                    next: NavigateNext,
                    last: LastPage,
                }}
                {...item}
                sx={{
                    borderRadius: "50%",
                    width: 40,
                    height: 40,
                    border: "1px solid var(--ColorBrand-300)",
                    "&.Mui-selected": {
                        backgroundColor: "var(--ColorBrand-100)",
                    },
                }}
            />
        )}
        showFirstButton
        showLastButton
    />
}