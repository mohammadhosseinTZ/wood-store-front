"use client"

import { useState } from "react";
import DynamicTable from "@/components/shares/table/DynamicTable";
import TitleWrapper from "@/components/shares/TitleWrapper"


export default function ListPrices() {


    const columns = [
        {
            field: "id", headerName: "ردیف", sortable: true, width: 80, align: 'center', headerAlign: 'center', excelWidth: 10
        },
        { field: "ip", headerName: "IP", sortable: true, flex: 1, align: 'center', headerAlign: 'center' },
        { field: "description", headerName: "علت بلاک شدن", sortable: true, flex: 1, align: 'center', headerAlign: 'center' },
        { field: "count", headerName: "دفعات بلاک شدن", sortable: true, flex: 1, align: 'center', headerAlign: 'center' },
        { field: "blockDate", headerName: " تاریخ بلاک شدن", sortable: true, flex: 1, align: 'center', headerAlign: 'center' },
        { field: "unBlockDate", headerName: "تاریخ خروج از بلاک", sortable: true, flex: 0.5, align: 'center', headerAlign: 'center' },

    ];

    const [page, setPage] = useState()

    return <div className="tagsContainer">
        <TitleWrapper title='لیست قیمت امروز' link='/' />


        <DynamicTable
            columns={columns}
            rows={[]}
            paginateCount={2}
            page={1}
            setPage={setPage as any}
        />
    </div>
}