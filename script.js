let input = document.getElementsByTagName('input')
console.log(input[0])

window.addEventListener('keydown',function(e){
  if (e.key==="Enter"){
    console.log('ok')
    let value = input[0].value;
    let arr = value.split(',')
    console.log(arr)
    input[0].value=''
    highestRank(arr)
    let result = document.body.querySelector('.result')
    result.innerHTML=`
    <div> Entered array:<span> ${arr}</span> </div>
    <div>Most repeated number:<span class='result-number'>${highestRank(arr)}</div>
    `
  }
})



function highestRank(arr){
  let object={}
  for (let element of arr){
    if (!object[element]){
      object[element] =1
    } else {
    object[element] +=1
    }
  }
  
  let sortArr=[]
  for (property in object){
    sortArr.push([property,object[property]])
  }

 sortArr.sort(function(a,b){
   return b[1]-a[1]
 })

 if (sortArr[0][1]===sortArr[1][1]){
   if (sortArr[0]>sortArr[1]){
     return parseInt(sortArr[0][0])
   } else {
     return parseInt(sortArr[1][0])
   }
 }
 


return parseInt(sortArr[0][0])

}

highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12])