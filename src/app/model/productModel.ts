export class ProductModel {
    id: string;
    name: string;
    rate: number;
    imageUrl:string;
    constructor({ id, name, rate ,imageUrl}: Iproduct) {
        this.id = "";
        this.name = name;
        this.rate = rate;
        this.imageUrl=imageUrl
    }
}
export interface Iproduct {
    id: string,
    name: string,
    rate: number,
    imageUrl:string

}