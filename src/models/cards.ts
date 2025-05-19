export interface CardsDetail {
    name: string;
    url: string;
    categoryId: string;
    categoryName: string;
}
export interface Cards {
    cards: CardsDetail[];
    isLoading: boolean;
    isOpen: boolean;
    selectedCards?: CardsDetail[];
    outImageDialog?: boolean;
};