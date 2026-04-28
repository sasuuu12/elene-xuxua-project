export interface MenuItem {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
    imageUrl: string;
    isVegetarian?: boolean;
}

export interface Navlink {
    label: string;
    path: string;
}
