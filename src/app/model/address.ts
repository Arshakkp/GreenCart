export class AddressModel {
    name?: string;
    detail?: string;
    landmark?: string;
    zipcode?: string
    constructor({ name, detail, landmark, zipcode }: IAdress) {
        this.name = name;
        this.detail = detail;
        this.landmark = landmark;
        this.zipcode = zipcode;
    }
}
interface IAdress {
    name: string;
    detail: string;
    landmark: string;
    zipcode: string;
}