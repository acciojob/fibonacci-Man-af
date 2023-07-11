function fibonacci(num) {
// your code here
	let a=0;
	let b=1;
	let c=0;
	for(let i=0; i<num; i++)
		{
			if (i==0)
				console.log(a);
			if (i==1)
				console.log(b);
			else
			{
				c=a+b;
				console.log(c);
				a=b;
				b=c;
			}
		}
}

module.exports = fibonacci;
