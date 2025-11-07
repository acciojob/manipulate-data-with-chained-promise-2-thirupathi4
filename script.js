//your JS code here. If required.
function processArray(){
	let output=document.getElementById("output");
	new Promise((resolve)=>{
		setTimeout(()=>{
			resolve([1,2,3,4])
		},3000)
	})
	.then((arr)=>{
		const evens=arr.filter(num=>num%2===0);
		setTimeout(()=>{
			output.textContent=evens;
		},1000);
		return evens;
	})
	.then((evens)=>{
		const double=evens.map(n=>n*2);
		setTimeout(()=>{
			output.textContent=double;
		},2000);
	});
}