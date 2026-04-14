// 1. მენიუს კერძის ინტერფეისი (Project-ის ნაცვლად)
export interface MenuItem {
    id: number;
    name: string;           // კერძის სახელი (მაგ. "ხაჭაპური")
    description: string;    // კერძის აღწერა ინგრედიენტებით
    price: number;          // ფასი
    category: string;       // კატეგორია (მაგ. 'Starter', 'Main Course', 'Dessert')
    imageUrl: string;       // კერძის ფოტოს ლინკი
    isVegetarian?: boolean; // არასავალდებულო ველი ვეგეტარიანული კერძებისთვის
}

// 2. ნავიგაციის ინტერფეისი (უცვლელი)
export interface Navlink {
    label: string;
    path: string;
}

