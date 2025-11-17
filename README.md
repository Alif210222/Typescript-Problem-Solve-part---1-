 
 # 1) What are some differences between interfaces and types in TypeScript?

 => TypeScript-এ interface এবং type এ দুটিই টাইপ নির্ধারণ করতে ব্যবহার করি । এদের মধ্যে কিছু             পার্থক্য আছে। 
   ## Interface : 
   -  Interface মূলত অবজেক্টের স্ট্রাকচার নির্ধারণ করতে ব্যবহৃত হয়। 
   -  Interface  union, tuple, primitive define করতে পারে না।     
   -  Interfaces এ খুব সহজে extend করা যায় । 

   ## type :
   - একটা ভ্যারিয়েবল একাধিক ধরনের value যায় type ব্যবহার করে । 
   - type union, tuple, primitive define করতে পারে ।
   - type এ extend করা যায়,কিন্তু syntax আলাদা। ।



# 2) What is the use of the keyof keyword in TypeScript? Provide an example.

=> keyof দিয়ে কোনো object type-এর key গুলোকে পাওয়া যায় । keyof keyword কোনো object type-এর সব key-কে একটি union type হিসেবে রিটার্ন করে। 
## Example : 
interface Person {
  name: string;
  age: number;
  email: string;
}
type PersonKeys = keyof Person;

এখন  "name" | "age" | "email" এই key গুলো হবে PersonKeys এর type .



# 5) Provide an example of using union and intersection types in TypeScript.
=> Union এর মাধ্যমে আমরা একটি variable কে বিভিন্ন type দিয়ে define করতে পারি or operator এর মাধ্যমে।

 ## Example: 
   - let value: string | number | boolean ;

 আর Intersection type দিয়ে এক বা একাধিক type কে একসাথে করে নতুন আরেকটি data type তৈরী করার মাধ্যম।
 ## Example:
- type Person = {
   name: string;
  };

  type Employee = {
   employeeId: number;
  };

 type Staff = Person & Employee; ==> এখানে Staff হলো Person + Employee এর কম্বিনেশন। 