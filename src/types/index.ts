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

// 3. ჯავშნის/კონტაქტის ფორმა (მორგებული რესტორანზე)
export interface ReservationForm {
    name: string;           // სტუმრის სახელი
    email: string;
    phone: string;          // ტელეფონის ნომერი აუცილებელია ჯავშნისთვის
    date: string;           // ჯავშნის თარიღი
    time: string;           // ჯავშნის დრო
    guestsCount: number;    // სტუმრების რაოდენობა
}