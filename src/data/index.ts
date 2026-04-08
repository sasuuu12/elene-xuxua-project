// src/data/content.ts

// 1. რესტორნის ძირითადი ინფორმაცია
export const restaurantInfo = {
  name: "MOUVELINE",
  slogan: "Authentic Georgian Wine & Dine Experience",
  address: "1233 Main Street, Tbilisi, Georgia",
  phone: "+995 555 123 456",
  email: "info@mouveline.com",
  openingHours: "ყოველდღე: 12:00 - 23:00",
  socialMedia: {
    facebook: "https://facebook.com/mouveline",
    instagram: "https://instagram.com/mouveline",
    twitter: "https://twitter.com/mouveline"
  }
};

// 2. ნავიგაციის ლინკები (Header და Footer-ისთვის)
export const navLinks = [
  { label: "Home", path: "/" },
  { label: "Menu", path: "/menu" },
  { label: "Reservation", path: "/reservation" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" }
];

// 3. ჩვენს შესახებ (Homepage-ის "Our Philosophy" სექციისთვის)
export const aboutContent = {
  title: "Crafting Georgian Flavors Since 2024",
  description: "Mouveline აერთიანებს ქართულ ტრადიციულ გემოებსა და თანამედროვე კულინარიულ ხედვას. ჩვენი მიზანია, თითოეულ სტუმარს შევუქმნათ დაუვიწყარი გამოცდილება, სადაც უმაღლესი ხარისხის კერძები და საუკეთესო ღვინო ერთმანეთს ჰარმონიულად ერწყმის.",
  imageUrl: "https://placehold.co/600x400/C3B1E1/4A0E4E?text=Mouveline+Interior"
};

// 4. მენიუს კატალოგი (შენი ახალი ინტერფეისის მიხედვით)
export const menuItems = [
  // სტარტერები
  {
    id: 1,
    name: "იმერული ხაჭაპური",
    description: "ტრადიციული ქართული ყველიანი პური, გამომცხვარი თიხის კეცზე.",
    price: 15.00,
    category: "Starters",
    imageUrl: "https://placehold.co/400x300/C3B1E1/4A0E4E?text=Khachapuri",
    isVegetarian: true
  },
  {
    id: 2,
    name: "ფხალის დაფა",
    description: "ისპანახის, ჭარხლისა და ნიგვზის ფხალი ბროწეულით.",
    price: 18.00,
    category: "Starters",
    imageUrl: "https://placehold.co/400x300/C3B1E1/4A0E4E?text=Pkhali+Board",
    isVegetarian: true
  },
  
  // მთავარი კერძები
  {
    id: 3,
    name: "ხინკალი (ქალაქური)",
    description: "ტრადიციული ხინკალი შერეული ხორცითა და მწვანილით (5 ცალი).",
    price: 12.00,
    category: "Main Courses",
    imageUrl: "https://placehold.co/400x300/C3B1E1/4A0E4E?text=Khinkali",
    isVegetarian: false
  },
  {
    id: 4,
    name: "მწვადი",
    description: "შამფურზე შემწვარი ღორის ხორცი ტყემლითა და ხახვით.",
    price: 22.00,
    category: "Main Courses",
    imageUrl: "https://placehold.co/400x300/C3B1E1/4A0E4E?text=Mtsvadi",
    isVegetarian: false
  },

  // დესერტები
  {
    id: 5,
    name: "ფელამუში",
    description: "ბადაგისა და სიმინდის ფქვილისგან დამზადებული ტკბილეული ნიგვზით.",
    price: 9.00,
    category: "Desserts",
    imageUrl: "https://placehold.co/400x300/C3B1E1/4A0E4E?text=Pelamushi",
    isVegetarian: true
  },

  // სასმელები (ღვინო)
  {
    id: 6,
    name: "საფერავი (Mouveline Reserve)",
    description: "პრემიუმ ხარისხის მშრალი წითელი ღვინო.",
    price: 45.00,
    category: "Drinks",
    imageUrl: "https://placehold.co/400x300/C3B1E1/4A0E4E?text=Saperavi+Wine",
    isVegetarian: true
  },
  {
    id: 7,
    name: "წინანდალი",
    description: "მშრალი თეთრი ღვინო ხილის არომატით.",
    price: 35.00,
    category: "Drinks",
    imageUrl: "https://placehold.co/400x300/C3B1E1/4A0E4E?text=Tsinandali+Wine",
    isVegetarian: true
  }
];