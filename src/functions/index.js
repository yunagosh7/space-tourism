export const fetchData = async (setData, info ) => {
    const res = await fetch('https://api-space-tourism.vercel.app')
    const data = await res.json()
    setData(data[info])
}