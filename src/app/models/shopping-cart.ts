import { ShoppingCartItem } from "./shopping-cart-item";
import { Product } from "./product";

export class ShoppingCart{
    items:ShoppingCartItem[]=[];
    constructor(private itemsMap:{[key:string]:ShoppingCartItem}){
                this.itemsMap=itemsMap||{};
            for(let productId in itemsMap){
                let item=itemsMap[productId];

                this.items.push(new ShoppingCartItem({ ...item ,$key:productId}));

            }

}    
get productIds(){
    return Object.keys(this.items);
} 


getQuantity(product:Product){
    
    let item=this.itemsMap[product.$key];
    return item ? item.quantity : 0;
  }

get totalPrice(){
    let sum=0;
    for(let productId in this.items)
        sum+=this.items[productId].totalPrice;
        return sum;
    
}
get totalItemsCount(){
        let count=0;  
        for(let productId in this.items)
          count+=this.items[productId].quantity;
        return count;
    }
}