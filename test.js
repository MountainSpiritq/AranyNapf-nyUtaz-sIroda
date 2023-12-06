const showResult=(assert,result)=>{
    if(result){
        console.log(`létrejött a ${assert}`)
    }else{
        console.log(`nem jött létre a ${assert}`)
    }
}
let p = document.querySelector("p")
let assert='p-tag'
showResult(assert,p)
