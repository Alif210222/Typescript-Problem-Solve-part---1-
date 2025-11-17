

function formatValue (value : string | number| boolean) : string | number | boolean {

    if(typeof value === "string"){
        return  value.toUpperCase();
    }
    else if(typeof value === "number"){
        return  value*10;
    }
    else if(typeof value === "boolean"){
        return !value;
    }

    return  value;
}





function getLength (value : string | any[] ) : number {

    if(typeof value === "string"){
           return value.length;
    }
    else if (Array.isArray(value)){
        return value.length;
    }

    return value ;
  
}





class Person {
    name: string ;
    age : number ;

    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }

    getDetails() : string{
        return ` 'Name: ${this.name}, Age: ${this.age}'`;
    }
}







type Item = {
    title : string;
    rating : number;
}

function filterByRating(items : Item[]): { title: string; rating: string }[] {

   const filteredItem =  items.filter(item => item.rating >= 4)
   const singleItem =  filteredItem.map(item => ({
      title: item.title,
      rating: item.rating.toFixed(1), 
    }));

    return singleItem;


}






type User = {
    id: number;
    name: string;
    email: string;
    isActive:boolean;
}

function filterActiveUsers (array : User[]): User[] {
         return array.filter(user => user.isActive === true )
}







interface Book {
    title : string;
    author : string;
    publishedYear: number;
    isAvailable: boolean;
}

function printBookDetails (book:Book){
         const availability = book.isAvailable ? "Yes" : "No"; 

    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability} `);
}








function getUniqueValues<T extends string | number>(arr1: T[],arr2: T[]): T[] {
  const newArray: T[] = [];

 //* check the value exists in newArray
  const exists = (value: T): boolean => {
    for (let i = 0; i < newArray.length; i++) {
      if (newArray[i] === value)  return true;
    }

    return false;
  };


  for (let i = 0; i < arr1.length; i++) {
    if (!exists(arr1[i])) {
      newArray[newArray.length] = arr1[i];
    }
  }


  for (let i = 0; i < arr2.length; i++) {
    if (!exists(arr2[i])) {
      newArray[newArray.length] = arr2[i];
    }
  }

  return newArray;
}







type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number; 
};

function calculateTotalPrice(products:Product[]){
    if (products.length === 0) return 0;

const totalProductPrice =  products.map((product) => {

      const productPrice = product.price * product.quantity;

      const discountAmount =product.discount ? (productPrice * product.discount) / 100 : 0 ;

     return productPrice - discountAmount;
    })

    return totalProductPrice.reduce((sum,value) => sum + value , 0);
}