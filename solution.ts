

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
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}





type Item = {
    title : string;
    rating : number;
}

function filterByRating(items : Item[]):Item[] {

    return (items.filter( item => item.rating >= 4 ));
}

const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];






type User = {
    id: number;
    name: string;
    email: string;
    isActive:boolean;
}

function filterActiveUsers (array : User[]): User[] {
         return array.filter(user => user.isActive === true )
}

const users = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];






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

const myBook:Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};

printBookDetails(myBook);