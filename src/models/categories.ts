export interface Url {
    url: string;
};

export interface Caterogires {
    categories: {
        name: string;
        value: string;
    }[];
    selectedCategory?: string;
};