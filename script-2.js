var choice=prompt("welcome to area calclutor. \n please enter ur choice \n1 area of a rectangle.\n2 area of a triangle.\n3 area of circle.\n4 area of parallelogram")
if(choice=="1"){
  var l=prompt("enter the length")
   var b=prompt("enter the breadth")
   var result=Number(l)*Number(b)
   alert("the area is "+ result)
}
if(choice=="2"){
  var h=prompt("enter the height")
   var b=prompt("enter the base")
   var result=Number(h)*Number(b)/2
   alert("the area is "+ result)
}
if (choice=="3"){
  var r=prompt("enter the radius")
  var result=3.14*Number(r)*Number(r)
  alert("the area is "+ result)
}
if(choice=="4"){
  var h=prompt("enter the height")
  var cb=prompt("enter the corresponding base")
  var result=Number(h)*Number(cb)
  alert("the area is "+ result)
}