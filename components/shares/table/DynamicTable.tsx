"use client";

import * as React from "react";
import {
  TableContainer,
  Paper,
  Button,
  Box,
  Typography,
  Skeleton,
} from "@mui/material";
import { TTableProps } from "@/types/general-types";

import TablePagination from "./TablePagination";
import { DataGrid, GridSortModel } from '@mui/x-data-grid';

const getRowClassName = (params: any) => {

  if (String(params.id).includes("detail")) {
    return "details-row"
  }

  if (params.indexRelativeToCurrentPage % 2 === 0) {
    return 'even-row';
  }
  return 'odd-row';
};

function DynamicTable<T extends { id: number | string }>({
  columns,
  rows,
  paginateCount,
  page,
  setPage,


}: TTableProps<T>) {

  const [stateAfterFilter, setStateAfterFilter] = React.useState(rows);
  const [sortModel, setSortModel] = React.useState<GridSortModel>([]);


  const rowsPerPage = Number(process.env.NEXT_PUBLIC_DATA_GRID_PAGE_SIZE);


  return (
    <>

      {/* TABLE --------- */}
      {

        stateAfterFilter.length > 0
          ?
          <Paper
            elevation={0}
            sx={{
              width: "100%",
              overflow: "hidden",
              marginTop: "20px",
              marginBottom: "50px",
              boxShadow: "none",
            }}
          >
            <TableContainer  >


              <DataGrid
                rows={rows}
                columns={columns}
                disableColumnMenu={true}
                initialState={{
                  // pagination: {
                  //   paginationModel: { page: 0, pageSize: rowsPerPage },
                  // },
                }}
                // Enable client-side sorting
                sortingMode="client"
                sortModel={sortModel}
                onSortModelChange={setSortModel}
                getRowClassName={getRowClassName}

                localeText={{
                  // Tooltip دکمه سورت صعودی
                  columnHeaderSortIconLabel: 'مرتب‌سازی | صعودی و نزولی',

                }}

                hideFooter
                disableRowSelectionOnClick
                getRowHeight={(params) =>
                  params.model.isDetailRow ? "auto" : 52
                }

                sx={{
                  boxShadow: "nonne !important",
                  borderRadius: "10px",
                  outline: "none",
                  border: "none",
                  overflow: "auto",
                  "&>div": {
                    minWidth: "1000px"
                  }
                }}
                slotProps={{

                  footer: {
                    sx: {
                      '&': {
                        display: 'none'
                      },
                      '& .MuiTablePagination-actions': {
                        display: 'none',
                      },
                      '& .MuiDataGrid-pagination-right': {
                        display: 'none',
                      },

                    },
                  },
                }}

              />

            </TableContainer>

            {/* --- Pagination --- */}
            <TablePagination page={page} paginateCount={paginateCount} rowsPerPage={rowsPerPage} setPage={setPage} stateAfterFilter={stateAfterFilter} />

          </Paper>
          :
          <Box sx={{ marginTop: "100px" }}>
            <Box
              sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row-reverse", gap: "10px", fontSize: "22px", "&>span": { fontSize: "35px" } }}
            >داده‌ای برای نمایش وجود ندارد!  <span className="material-symbols-rounded">
                search_off    </span>
            </Box>
            {/* <Button onClick={handleClearFilter} sx={{ marginLeft: "36px", fontSize: "17px", color: "var(--Blue-500)", textDecoration: "underline" }}> تلاش مجدد</Button> */}
          </Box>
      }
    </>
  );
}
export default DynamicTable