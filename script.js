function fibonacci(num) {
// your code here
	let a=0;
	let b=1;
	let c=0;
	for(let i=0; i<num; i++)
		{
			if (i===0)
			{
				return a;
			}
			if (i===1)
			{
	            return b;
			}
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
