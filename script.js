function fibonacci(num) {
// your code here
	let a=0;
	let b=1;
	let c=0;
	for(let i=1; i<=num; i++)
		{
			if (num===1)
				return a;
			
			if (num===2)
	            return b;
			else
			{
				c=a+b;
				a=b;
				b=c;
			}
		}
	return c;
}

module.exports = fibonacci;
