export class UserModel{
id:string;
name:string;
phNo:string;
token:string;
constructor({id,name,phNo,token}:IUser){
    this.id=id;
    this.name=name;
    this.phNo=phNo;
    this.token=token;
}
}
interface IUser{
    id:string;
    name:string;
    phNo:string;
    token:string; 
}