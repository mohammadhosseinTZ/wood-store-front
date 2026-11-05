import { Dispatch, SetStateAction } from "react";

export type TTableProps<T> = {
    // columns: GridColDef[];
    columns: any[];
    rows: T[];
    paginateCount: number;
    page: number,
    setPage: Dispatch<SetStateAction<number | string>>,

};
