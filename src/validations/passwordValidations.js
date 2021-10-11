export const isPassLong = (value) => {
  if(value.length > 6){
    return true
  }
  else{
    return false
  }
}
export const isHaveUpCase = (value) => {
  if(/[A-Z]/.test(value)) {
    return true
  }
  else{
    return false
  }
}
export const isHaveLowCase = (value) => {
  if(/[a-z]/.test(value)){
    return true
  }
  else{
    return false
  }
}
export const isHaveNumber = (value) => {
  if(/\d/.test(value)){
    return true
  }
  else{
    return false
  }
}
export const isHaveSymbol = (value) => {
  if(/[\W_]/.test(value)){
    return true
  }
  else{
    return false
  }
}
export const isHaveNotRepeat = (value) => {
  const lastSymbol = value.length - 1;
  if(lastSymbol > 1){
    if (value[lastSymbol] === value[lastSymbol - 1] &&
      value[lastSymbol] === value[lastSymbol - 2]) {
      return false
    }
    else{
      return true
    }
  }
  else{
    return true
  }
}