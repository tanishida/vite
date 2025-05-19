export interface Url {
    url: string;
};

export interface CategoryDetail  {
    name: string;
    value: string;
}

export interface Caterogires {
    categories: CategoryDetail[];
    selectedCategory?: CategoryDetail;
    selectedMultipleCategory?: CategoryDetail[];
};