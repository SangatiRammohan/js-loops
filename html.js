/*  For loop , While loop*/
 
//    1.Use switch case and take Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday as cases and any expression related to case 
var day=prompt("Enter the day")
switch(day){
    case "monday":
        console.log("thi is" `${day}` )
        break
    case "tuesday":
        console.log("thi is" `${day}` )
    break
    case "wednesday":
        console.log("thi is" `${day}` )
        break
    case "thurday":
        console.log("thi is" `${day}` )
        break
    case "friday":
        console.log("thi is" `${day}` )
        break 
    case "saturday":
        console.log("thi is" `${day}` )
        break

    default:
        console.log("thi is" `${day}`)
  }


//2. For of loop:-- iterate array of elements having number 1  to 5

var array=[1,2,3,4,5]
for( var items of array){
    console.log(items)
}

var array=[1,2,3,4,5]
var result =[]
for( var items of array){
    console.log(items)
    result += items
    console.log(result)
}

var array=[1,2,3,4,5]
var result =0
for( var items of array){
    console.log(items)
    result += items
    console.log(result)
}

var array=[1,2,3,4,5]
var result =0
for( var items of array){
    result += items
}
console.log(result)




//3. For of loop:-- take string Nd iterate characters

var string="Laptop"
for( var char of string){
    console.log(char)
}

var string="laptop"
var num=[]
for(var char of string){
    num += char
    console.log(num)
}

var string="laptop"
var num=[]
for(var char of string){
    num -= char
    console.log(num)
}

var string="laptop"
var num=[]
for(var char of string){
    num == char
    console.log(num)
}

var string="laptop"
var num=0
for(var char of string){
    num == char
    console.log(num)
}

var string="laptop"
var num=0
for(var char of string){
    num += char
    console.log(num)
}