
"use client";

import { useMemo, useState } from "react";

import {
    Box,
    Tabs,
    Tab,
    Typography,
    Chip,
    Breadcrumbs,
} from "@mui/material";

import DynamicTable from "@/components/shares/table/DynamicTable";
import TitleWrapper from "@/components/shares/TitleWrapper";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

type Product = {
    id: number;
    name: string;
    size: string;
    thickness: string;
    sheetPrice: number;
    khavaranPalletPrice: number | null;
    factoryPalletPrice: number | null;
};

type Category = {
    id: number;
    title: string;
    children?: Category[];
    products?: Product[];
};

// Mock Data
const categories: Category[] = [
    {
        id: 1,
        title: "هایگلاس",
        children: [
            {
                id: 11,
                title: "پانوتک",
                products: [
                    {
                        id: 1,
                        name: "گروه A پانوتک",
                        size: "122 × 280",
                        thickness: "16 میل",
                        sheetPrice: 15500000,
                        khavaranPalletPrice: 14850000,
                        factoryPalletPrice: null,
                    },
                    {
                        id: 2,
                        name: "گروه B پانوتک",
                        size: "122 × 280",
                        thickness: "16 میل",
                        sheetPrice: 16300000,
                        khavaranPalletPrice: 15650000,
                        factoryPalletPrice: null,
                    },
                ],
            },
            {
                id: 12,
                title: "ایزوفام",
                products: [
                    {
                        id: 3,
                        name: "سفید براق",
                        size: "122 × 280",
                        thickness: "16 میل",
                        sheetPrice: 14500000,
                        khavaranPalletPrice: 14000000,
                        factoryPalletPrice: null,
                    },
                ],
            },
            {
                id: 13,
                title: "AGT",
                products: [],
            },
            {
                id: 14,
                title: "پاک چوب",
                products: [],
            },
        ],
    },
    {
        id: 2,
        title: "MDF",
        children: [
            {
                id: 21,
                title: "ام دی اف خام",
                products: [
                    {
                        id: 4,
                        name: "MDF خام",
                        size: "183 × 366",
                        thickness: "16 میل",
                        sheetPrice: 8200000,
                        khavaranPalletPrice: 7900000,
                        factoryPalletPrice: null,
                    },
                ],
            },
            {
                id: 22,
                title: "ام دی اف سفید",
                products: [],
            },
            {
                id: 23,
                title: "ام دی اف ملامینه",
                products: [],
            },
        ],
    },
    {
        id: 3,
        title: "نئوپان",
        children: [
            {
                id: 31,
                title: "نئوپان خام",
                products: [],
            },
            {
                id: 32,
                title: "نئوپان ملامینه",
                products: [],
            },
        ],
    },
    {
        id: 4,
        title: "صفحه کابینت",
        products: [
            {
                id: 5,
                name: "صفحه کابینت 60 سانتی",
                size: "60 × 410",
                thickness: "32 میل",
                sheetPrice: 4500000,
                khavaranPalletPrice: null,
                factoryPalletPrice: null,
            },
        ],
    },
    {
        id: 5,
        title: "PVC",
        products: [],
    },
];

const formatPrice = (price: number | null) => {
    if (price === null) return "-";

    return new Intl.NumberFormat("fa-IR").format(price) + " تومان";
};

export default function ListPrices() {
    const [selectedCategory, setSelectedCategory] = useState<number>(1);
    const [selectedSubCategory, setSelectedSubCategory] = useState<number>(11);
    const [page, setPage] = useState(1);

    // Selected main category
    const activeCategory = useMemo(
        () => categories.find((item) => item.id === selectedCategory),
        [selectedCategory]
    );

    // Selected subcategory
    const activeSubCategory = useMemo(
        () =>
            activeCategory?.children?.find(
                (item) => item.id === selectedSubCategory
            ),
        [activeCategory, selectedSubCategory]
    );

    // Products of selected category
    const products = useMemo(() => {
        if (activeCategory?.children?.length) {
            return activeSubCategory?.products ?? [];
        }

        return activeCategory?.products ?? [];
    }, [activeCategory, activeSubCategory]);

    // Table columns
    const columns = [
        {
            field: "id",
            headerName: "ردیف",
            width: 80,
            sortable: true,
            align: "center",
            headerAlign: "center",
        },
        {
            field: "name",
            headerName: "نام محصول",
            flex: 1.5,
            sortable: true,
            align: "center",
            headerAlign: "center",
        },
        {
            field: "size",
            headerName: "ابعاد",
            flex: 1,
            align: "center",
            headerAlign: "center",
        },
        {
            field: "thickness",
            headerName: "ضخامت",
            flex: 0.8,
            align: "center",
            headerAlign: "center",
        },
        {
            field: "sheetPrice",
            headerName: "قیمت هر ورق",
            flex: 1.2,
            align: "center",
            headerAlign: "center",
            renderCell: (params: any) => formatPrice(params.value),
        },
        {
            field: "khavaranPalletPrice",
            headerName: "قیمت پالتی خاوران",
            flex: 1.2,
            align: "center",
            headerAlign: "center",
            renderCell: (params: any) => formatPrice(params.value),
        },
        {
            field: "factoryPalletPrice",
            headerName: "قیمت پالتی کارخانه",
            flex: 1.2,
            align: "center",
            headerAlign: "center",
            renderCell: (params: any) => formatPrice(params.value),
        },
    ];

    // Change main category
    const handleCategoryChange = (
        _: React.SyntheticEvent,
        newValue: number
    ) => {
        const category = categories.find((item) => item.id === newValue);

        setSelectedCategory(newValue);

        // Select first subcategory automatically
        setSelectedSubCategory(category?.children?.[0]?.id ?? 0);

        setPage(1);
    };

    // Change subcategory
    const handleSubCategoryChange = (
        _: React.SyntheticEvent,
        newValue: number
    ) => {
        setSelectedSubCategory(newValue);
        setPage(1);
    };

    return (
        <Box className="tagsContainer">

            <TitleWrapper title="لیست قیمت امروز" link="/" />

            <Box sx={{ mt: 3 }}>


                <Box sx={{
                    background: "#fff",
                    padding: "15px ",
                    borderRadius: "var(--radius--card)",
                    boxShadow: "0 8px 32px #0000001a"
                }}>
                    <Tabs
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                        variant="scrollable"
                        scrollButtons="auto"
                        allowScrollButtonsMobile
                        sx={{
                            borderBottom: 1,
                            borderColor: "divider",
                            "& .MuiTab-root": {
                                minWidth: 100,
                                fontWeight: 600,
                            },
                            "& .MuiTabScrollButton-root svg": {
                                transform: "rotate(180deg)",
                            }
                        }}
                    >
                        {categories.map((category) => (
                            <Tab
                                key={category.id}
                                label={category.title}
                                value={category.id}
                            />
                        ))}
                    </Tabs>

                    {/* Sub Categories */}
                    {activeCategory?.children &&
                        activeCategory.children.length > 0 && (
                            <Box
                                sx={{
                                    mt: 2,
                                    borderRadius: "var(--radius--card)",
                                    "& .MuiTabScrollButton-root svg": {
                                        transform: "rotate(180deg)",
                                    }
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: {
                                            lg: "20px",
                                            xs: "14px"
                                        },
                                        padding: "5px 10px",
                                        marginBottom: "10px"
                                    }}
                                >
                                    انتخاب برند / زیر دسته‌بندی
                                </Typography>

                                <Tabs
                                    value={selectedSubCategory}
                                    onChange={handleSubCategoryChange}
                                    variant="scrollable"
                                    scrollButtons="auto"
                                    allowScrollButtonsMobile
                                    sx={{
                                        minHeight: 40,
                                        "& .MuiTab-root": {
                                            minHeight: 40,
                                            minWidth: 90,
                                            fontSize: 13,
                                            fontWeight: 500,
                                        },
                                    }}
                                >
                                    {activeCategory.children.map((sub) => (
                                        <Tab
                                            key={sub.id}
                                            label={sub.title}
                                            value={sub.id}
                                        />
                                    ))}
                                </Tabs>
                            </Box>
                        )}
                </Box>

                {/* Products Header */}
                <Box
                    sx={{
                        display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 2, mt: 4, mb: 2
                    }}

                >
                    <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 5 }}>


                        <Breadcrumbs
                            separator="/"

                        >
                            <Typography sx={{
                                fontSize: {
                                    lg: "20px",
                                    xs: "14px"
                                }
                            }}>
                                {activeCategory?.title}
                            </Typography>

                            {activeSubCategory && (
                                <Typography
                                    sx={{
                                        fontSize: {
                                            lg: "20px",
                                            xs: "14px"
                                        }
                                    }}
                                >
                                    {activeSubCategory.title}
                                </Typography>
                            )}
                        </Breadcrumbs>


                        <Chip
                            label={`${products.length.toLocaleString("fa-IR")} محصول`}
                            color="primary"
                            variant="filled"
                            sx={{
                                fontFamily: '"YekanBakh", Tahoma, Arial, sans-serif',
                                fontSize: {
                                    lg: "20px",
                                    xs: "14px"
                                }
                            }}
                        />

                    </Box>

                </Box>

                {/* Products Table */}
                {products.length > 0 ? (

                    <Box sx={{
                        background: "#fff",
                        borderRadius: "var(--radius--card)",
                        boxShadow: "0 8px 32px #0000001a"

                    }}>
                        <DynamicTable
                            columns={columns}
                            rows={products}
                            paginateCount={Math.ceil(products.length / 10)}
                            page={page}
                            setPage={setPage as any}
                        />
                    </Box>
                ) : (
                    <Box
                        sx={{
                            py: 7,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: 1,
                            bgcolor: "action.hover",
                            borderRadius: 2,
                        }}
                    >
                        <Typography >
                            محصولی برای این دسته‌بندی ثبت نشده است.
                        </Typography>

                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                            به‌زودی قیمت محصولات این بخش اضافه خواهد شد.
                        </Typography>
                    </Box>
                )}

            </Box>
        </Box >
    );
}
