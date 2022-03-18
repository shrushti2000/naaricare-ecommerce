export const getPriceRangedData = (data, priceRange) => {
    const [startValue, endValue] = priceRange.toString().split('-')
    if (priceRange !== 0) {
        if (startValue !== undefined && endValue !== undefined) {
            return data.filter(item => item.price >= parseInt(startValue) && item.price < parseInt(endValue))
        } else {
            return data.filter(item => item.price > parseInt(startValue))
        }
    }
    return data;
}

export const getSortedData=(data,sortType)=>{
    if(sortType==="low-to-high"){
        return data.sort((a,b)=>a['price']-b['price'])
    }else if(sortType==="high-to-low"){
        return data.sort((a,b)=>b['price']-a['price'])
    }
    return data;
}

export const getFilteredData = (data, state) => {
    console.log('filter data')
    let filteredData = data;
    return filteredData;
}