export interface Product {

    productId: string;
    name: string;
    stock: number;
    price: number;
    description: string;
    ingredient: string;
    category: string;
    filepdf: File;
    createdAt: number;
    status: string;
}
