function makeid(l) {
  // write your code here
		const arr=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',1,2,3,4,5,6,7,8,9,0]
	let ans= ""
	for(let i=0;i<l;i++){
		const num = Math.floor(Math.random()*l+1)
		ans+=arr[num]
	} 
	return ans;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));     
