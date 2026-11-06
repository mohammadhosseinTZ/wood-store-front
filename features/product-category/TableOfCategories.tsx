"use client";

import { useState } from "react";
import DynamicTable from "@/components/shares/table/DynamicTable";
import { GridColDef } from "@mui/x-data-grid";

const products = [
    {
        id: 1,
        name: "تخته چوب روسی",
        category: "چوب روسی",
        price: 1250000,
        unit: "متر مکعب",
        status: "موجود",
    },
    {
        id: 2,
        name: "تخته چوب راش",
        category: "چوب راش",
        price: 2800000,
        unit: "متر مکعب",
        status: "موجود",
    },
    {
        id: 3,
        name: "چوب بلوط",
        category: "چوب بلوط",
        price: 3500000,
        unit: "متر مکعب",
        status: "ناموجود",
    },
    {
        id: 4,
        name: "چوب گردو",
        category: "چوب گردو",
        price: 4200000,
        unit: "متر مکعب",
        status: "موجود",
    },
    {
        id: 5,
        name: "تخته چندلایی",
        category: "چندلایی",
        price: 950000,
        unit: "ورق",
        status: "موجود",
    },
    {
        id: 6,
        name: "MDF خام",
        category: "MDF",
        price: 1100000,
        unit: "ورق",
        status: "موجود",
    },
];

const columns: GridColDef[] = [
    {
        field: "id",
        headerName: "شناسه",
        width: 90,
    },
    {
        field: "name",
        headerName: "نام محصول",
        flex: 1,
        minWidth: 150,
    },
    {
        field: "category",
        headerName: "دسته‌بندی",
        flex: 1,
        minWidth: 130,
    },
    {
        field: "price",
        headerName: "قیمت",
        flex: 1,
        minWidth: 130,
        valueFormatter: (value) =>
            `${Number(value).toLocaleString("fa-IR")} تومان`,
    },
    {
        field: "unit",
        headerName: "واحد",
        width: 120,
    },
    {
        field: "status",
        headerName: "وضعیت",
        width: 120,
    },
];

export default function TableOfCategories() {
    const [page, setPage] = useState(1);

    return (
        <DynamicTable
            columns={columns}
            rows={products}
            paginateCount={Math.ceil(products.length / 10)}
            page={page}
            setPage={setPage as any}
        />
    );
}