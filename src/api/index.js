


export const getApi= async(name)=>{
    console.log('=========',name)
    //https://randomuser.me/api?results=50&name=${name}
    
    // const res = await fetch('https://randomuser.me/api?results=50')
    const res = await fetch(`https://randomuser.me/api?results=50&name=${name}`)
    const ans = await res.json()
    // console.log(ans.results)
    return ans.results
}