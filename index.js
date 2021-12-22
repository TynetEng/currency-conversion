let a = []
let b = {}
b.a =b
console.log(b );
        
let getvalue=(a)=>{
let b = 410
let c = a/b;

let convert = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
    }).format(c)
                
    document.getElementById('conv').value = convert
}