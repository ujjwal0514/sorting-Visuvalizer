let ar	
let part
let speed 
sp()
function sp(x = 20) {
    speed = x
}

genarate()
	function genarate(len = 50) {
		enable()
	body = document.getElementById('box')
	let str = ''
	ar = []
	for (i=0;i<len;i++){
		x = random()
		ar.push(x)
		k  = `<div id = ${i} style = "width: 11px; 
		height:${x}px;
		postion : absolute;
		top:50%;
		background: blue;"></div>`
		str = str + k
	}
	body.innerHTML=str; 
	}


function random(){
	let x = Math.floor((Math.random() * 500) + 1);
	return x

}
let tr = 0
async function selectionsort(){
	disable()
	for (i=0;i<ar.length;i++){
		t = i
		min = i
		for(j=i+1;j<ar.length;j++){
			if(ar[min] > ar[j]){
				min = j
			}
			// console.log(ar[min])
			tx = document.getElementById(`${i}`)
			ty = document.getElementById(`${min}`)
			// console.log(ar[min],ar[i])
            
			temp = ar[i]
			ar[i] = ar[min]
			tx.style.height = `${ar[min]}px`
			tx.style.background = 'red'

			ar[min] = temp
			ty.style.height = `${temp}px`
			ty.style.background = 'green'
			await sleep(speed)
			ty.style.background = 'blue'
			tx.style.background = 'blue'


			
            



			

		}



	}
	
	// if(tr == 0){
	// await	selectionsort()
	// tr=1
	// }
	enable()
	console.log(ar)
}


function sleep(ms) {
  return new Promise(
    resolve => setTimeout(resolve, ms)
  );
}
async function bubble(){
	console.log("calling")
	disable()
	for(i=0;i<ar.length - 1;i++){
		for(j=0;j<ar.length-1;j++){
			if(ar[j] > ar[j+1]){
			tx = document.getElementById(`${j}`)
			ty = document.getElementById(`${j+1}`)
			tx.style.background = 'red'
			ty.style.background = 'green'
			temp = ar[j]
			xtemp = ar[j+1]
			ar[j]= xtemp
			tx.style.height = `${xtemp}px`
			ar[j + 1] = temp
			ty.style.height = `${temp}px`

			await sleep(speed)
			ty.style.background = 'blue'
			tx.style.background = 'blue'
			}
		}
	}
	enable()
}

part = async (a,start,end) => {
    index = start
    pivot = a[start]
    document.getElementById(`${index}`).style.background = 'pink'
    while (start < end){
        while (a[start] <= pivot && start < end){
            start = start + 1
        }
        while (a[end] > pivot){
            end = end - 1
        }
        if(start < end){
            tx = document.getElementById(`${start}`).style.background = 'red'
			ty = document.getElementById(`${end}`).style.background ='green'
            temp = a[start]
            temp1 = a[end]
            a[start] = temp1
            document.getElementById(`${start}`).style.height=  `${temp1}px`
            a[end] = temp
            document.getElementById(`${end}`).style.height =`${temp}px`
            // tx = document.getElementById(`${start}`).style.background = 'red'
			// ty = document.getElementById(`${end}`).style.background ='green'
          
            await sleep(speed)
            tx = document.getElementById(`${start}`).style.background = 'blue'
			ty = document.getElementById(`${end}`).style.background ='blue'
           

        }
        
    }
    temp = a[index]
    temp1 = a[end]
    a[index] = temp1
    a[end] = temp
    tx = document.getElementById(`${index}`).style.background = 'red'
    document.getElementById(`${index}`).style.height=  `${temp1}px`
	ty = document.getElementById(`${end}`).style.background ='green'
    document.getElementById(`${end}`).style.height =`${temp}px`
    await sleep(speed)
    document.getElementById(`${index}`).style.background = 'blue'
    tx = document.getElementById(`${index}`).style.background = 'blue'
    ty = document.getElementById(`${end}`).style.background ='blue'

    return end

}

quicksort = async (a,start,end) => {
	disable()
    if (start < end ){
        x =  await part(a,start,end)
        await quicksort(a,start,x-1)
       await  quicksort(a,x+1,end)

    }
	enable()
}
async function quick(){
await  quicksort(ar,0,ar.length - 1)
console.log(ar)
}




function disable(){
	document.getElementById('btn' ).disabled = true
	document.getElementById('gen' ).disabled = true
	document.getElementById('sele' ).disabled = true
	document.getElementById('bub' ).disabled = true



}

function enable(){
	document.getElementById('btn' ).disabled = false
	document.getElementById('gen' ).disabled = false
	document.getElementById('sele' ).disabled = false
	document.getElementById('bub' ).disabled = false

}
// console.log(ar)

