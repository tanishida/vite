export interface Cards {
    cards: {
        name: string;
        url: string;    
    }[];
    selectedCards?: {
        name: string;
        url: string;    
    }[];
};