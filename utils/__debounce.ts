


export function __debounce(cb:(...args:any[])=>void,delay:number){
    let timer:any

    return function(...args:any[]){
        clearTimeout(timer)
        timer=setTimeout(()=>cb(args),delay)
    }
}