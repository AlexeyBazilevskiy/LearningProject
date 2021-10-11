export const isEmailValid = (name) => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  if(reg.test(name) === false) {
    return true
  } else {
    return false
  }
}