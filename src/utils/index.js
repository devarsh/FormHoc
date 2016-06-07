export const setField = (store={},field=[],value={}) => {
  if(typeof value !== 'object' || typeof store!== 'object') {
    throw new Error('store and Value property of the type Object')
  } 
  /** Lodash PathToString function regex modified to allow empty brackets */
  let rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(\[\])/g
  /** Used to match backslashes in property paths. */
  let reEscapeChar = /\\(\\)?/g
  let fields = []
  field.replace(rePropName, (match, number, quote, string) => {
    if(match=='[]') {
        match ='0'
    }
    fields.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  })
  let length = fields.length
  fields.reduce((acc,key)=> {
    length--;
    if(acc[key]==undefined && length>0) {
      acc[key]={}
      return acc[key]
    }
    else if(acc[key]==undefined && length==0) {
      acc[key]= {name:field,...value}
      return acc
    }
    else if(acc[key]!==undefined && length==0) {
      acc[key] = {...acc[key],...value}
      return acc
    }
    else {
      return acc[key]
    }
  },store)
  return store
}


