import { useEffect, useRef, useCallback, useState } from 'react';

const routerColor = "lightblue";
export function useRouter() {
    const [router,setRouter] = useState({x:1200,degree:0,color:routerColor});
    const moveRouter = ()=>{
        setRouter({x:router.x-20});
    }
    const rotateRouter = ()=>{
        setRouter({degree:router.degree-30});
    }
    return [router,setRouter,moveRouter,rotateRouter];

}