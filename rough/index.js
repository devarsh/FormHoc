const firstCall  = next => (action) => {
	console.log('first call start')
	next(arg)
	console.log('first call end')
} 

const secondcall = next => (action) => {
	console.log('second call start')
	next(arg)
	console.log('second call end')
}

const realfn = (arg) => {
	console.log('I was called',arg)
}

const MiddleWare = (middlewares) => (realfn) => {
	var middlewares_cnt = middlewares.length
	last = middlewares[middlewares_cnt -1]
	rest = middlewares.slice(0, middlewares_cnt-1)
	var dispatch = rest.reduceRight((compose,currentFn)=> currentFn(compose),last(realfn))
	return dispatch


}

var dispatch = MiddleWare([firstCall,secondcall])(realfn)

dispatch(45)