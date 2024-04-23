let myh1 = document.getElementById('myh1')
let input1 = document.getElementById('input1')
let input2 = document.getElementById('input2')

function create() {
    myh1.innerHTML=""
   if (input1.value == "" && input2.value == "") {
       alert("This field can't be empty")
        return
   } else if(input1.value > input2.value){
        alert("input incorrect")
        return
   }else {
    for (let index = input1.value; index <= input2.value; index++) {
        for (let i = 0; i <= 12; i++) {
           myh1.innerHTML += `${index} * ${i} = ${index*i} <br>`
        }        
      }
   }
}
