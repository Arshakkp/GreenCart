import { AddressModel } from "./address";
import { UserModel } from "./userModel";

export class UserDetil{
   static userAccount:UserModel=new UserModel({id:"123",name:"Arshak",phNo:"9544167017",token:"4484848444"})
   static userAddressList:AddressModel[]=[
      new AddressModel({name:"Home",landmark:"Kt9",detail:"kattayattuparmb",zipcode:"678541"}),
      new AddressModel({name:"Hostel",landmark:"Kt9",detail:"kattayattuparmb",zipcode:"678541"}),
      new AddressModel({name:"MOMS home",landmark:"Kt9",detail:"kattayattuparmb",zipcode:"678541"}),
   ]
}