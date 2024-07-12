#! /usr/bin/env/node
//RAMEEN RASHID PRESENTATION ON ARRAY METHODS
//08-JULY-2024
          /* *************************Array Methods*******************************
          1.PUSH   2.POP   3.SHIFT   4.UNSHIFT   5.SLICE    6.SPLICE   7.LENGTH   8.INDEXOF   */
          


/*1.Push() 
The push method adds one or more elements to the end of an array and returns the new length of the array.*/
// //                         0        1       2        3
// let fruits : string[]= ["Apple","Banana","Mango","Peach"]
// console.log(fruits,"Before push");                      //print original array ["Apple","Banana","Mango","Peach"]

// //             4            5
// fruits.push("Orange","Strawberry")                      //add elements in the end of an array ("Orange","Strawberry")
// console.log(fruits,"After push");                       //print array ["Apple","Banana","Mango","Peach","Orange","Strawberry"]





/*2.Pop()
The pop method removes the last element from an array and returns that element.*/
// let fruits : string[] = ["Apple","Banana","Mango","Peach"]
// console.log(fruits,"Before Pop");                    //print original array ["Apple","Banana","Mango","Peach"]

// let popElement = fruits.pop();                       // stores the poped (last) element "Peach"
// console.log("Pop Element = ",popElement);            //print pop element "Peach"

// fruits.pop();                                        //removed again  last element "Mango"
// console.log(fruits,"After Pop");                     //print array ["Apple","Banana"]




/*3.Shift()
The shift method removes the first element from an array and returns that element.*/
// let fruits : string[] = ["Apple","Banana","Mango","Peach"]
// console.log(fruits,"Before Shift");               //Print Original array

// fruits.shift();                                   //removes first element "Apple"
// console.log(fruits,"After Shift");                //print array  ["Banana","Mango","Peach"]
// fruits.shift();                                   //again remove first element "Banana"
// console.log(fruits,"Again Shift");                //print array  ["Mango","Peach"]




/*4.Unshift()
The unshift method adds one or more elements to the beginning of an array and returns the new length of an array.*/
// //                         3       4        5        6
// let fruits : string[] = ["Apple","Banana","Mango","Peach"];
// console.log(fruits,"Before Unshift")                         //print original array["Apple","Banana","Mango","Peach"]
// //                0         1           2
// fruits.unshift("Orange","Strawberry","Cherry")               //add elements to the beginning of an array
// console.log(fruits,"After Unshift");                        //print array ["Orange","Strawberry","Cherry","Apple","Banana","Mango","Peach"]




/*5.Slice()
The slice method returns a new array that contain a subset of the elements of the original array.The original array will not be modified.*/
// let fruits : string[] = ["Apple","Banana","Mango","Peach","Cherry","Orange"];
// console.log(fruits,"Original Array");                //print original array["Apple","Banana","Mango","Peach","Cherry","Orange"]
// let sliceArray : string[] = fruits.slice(1,3);       //creating new array  staring from index 1 and end on index 2 
// console.log(sliceArray,"Sliced Array");              //print new array ["Banana","Mango"]




/*6.Splice()
This method can be used to add or remove elements from anywhere in an array.
It removes elements from an array and optionally replaces them with new elements.*/
//               indexing:    0         1       2        3      4         5
// let fruits : string[] = ["Apple","Banana","Mango","Peach","Cherry","Orange"];
// console.log(fruits,"Original Array");                  //print original array
//  //starting index,removed elements,add elements
// fruits.splice(2,2,"Strawberry","kiwi")                //staring from index 2 "Mango",removed 2 elements  "Mango" and "Peach" , add 2 elements "Strawberry" and "Kiwi"
// console.log(fruits,"After splice");                   //new array ["Apple","Banana","Strawberry","kiwi","Cherry","Orange"]




/*7.length()
This method can be used to find out the number of elements in an array.*/
// //          length:        1         2       3       4       5      6
// let fruits : string[] = ["Apple","Banana","Mango","Peach","Cherry","Kiwi"];
// console.log("Length of an Array = ",fruits.length);                     // length = 6 




/*8.indexOf()
The indexOf method returns the first index at which a given element can be found in the array,if not found it returns -1.*/
// //          index:         0        1        2        3        4
// let fruits : string[] = ["Apple","Banana","Mango","Peach","Cherry"];
// let index = fruits.indexOf("Banana")                    // returns the index of banana 
// console.log("Index of Banana",index);                   //print "Index of Banana" = 1
// let index1 = fruits.indexOf("Kiwi")                     //  returns the index of kiwi 
// console.log("Index of kiwi",index1);                    //print "Index of Kiwi" = -1 because "Kiwi" is not in an array















