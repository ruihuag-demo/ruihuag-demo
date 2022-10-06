let data = [
  {
    "||" :[
      1 || 2 ,// 1
      true || 2 ,// true
      false || 2 , // 2
      4 || true, // 4
      5 || false, // 5
      false || false,// false
      undefined || undefined,// undefined
      false || undefined,// undefined
      false || NaN, // NaN
      0 || false, // false
      0 || NaN, // NaN
      undefined || NaN, // NaN
      undefined || 2 ,// 2
      undefined || null ,// null
      null || undefined, // undefined
      NaN || 0, // 0
      NaN || 2 ,// 2
      0 || 2 ,// 2
    ],
    "&&": [
      1 && 2 ,// 2
      true && 2 ,// 2
      false && 2 , // false
      4 && true, // true
      5 && false, // false
      false && false,// false
      undefined && undefined,// undefined 
      false && undefined,//  false
      false && NaN, // false
      0 && false, // 0
      0 && NaN, // 0
      undefined && NaN, // undefined 
      undefined && 2 ,// undefined
      undefined && null ,// undefined
      null && undefined, // null
      NaN && 0, // NaN
      NaN && 2 ,// NaN
      0 && 2 ,// 0
    ],
    "|" :[
      1 | 2 ,// 3
      true | 2 ,// 3
      false | 2 , // 2
      4 | true, // 5
      5 | false, // 5
      false | false,// 0 
      undefined | undefined,// 0
      false | undefined,// 0
      false | NaN, // 0
      0 | false, // 0
      0 | NaN, // 0
      undefined | NaN, // 0
      undefined | 2 ,// 2
      undefined | null ,// 0
      null | undefined, // 0
      NaN | 0, // 0
      NaN | 2 ,// 2
      0 | 2 ,// 2
    ],
    "&": [
      1 & 2 ,// 
      true & 2 ,// 
      false & 2 , // 
      4 & true, // 
      5 & false, // 
      false & false,// 
      undefined & undefined,// 
      false & undefined,//  
      false & NaN, // 
      0 & false, // 
      0 & NaN, // 
      undefined & NaN, // 
      undefined & 2 ,// 
      undefined & null ,// 
      null & undefined, // 
      NaN & 0, // 
      NaN & 2 ,// 
      0 & 2 ,// 
      3 & 1, // 1
    ],
  }
]

data.map(item=>{
  item['&&'].map(item=>{
    console.log(item)
  })
  item['&'].map(item=>{
    console.log(item)
  })
  item['||'].map(item=>{
    console.log(item)
  })
  item['|'].map(item=>{
    console.log(item)
  })
})



