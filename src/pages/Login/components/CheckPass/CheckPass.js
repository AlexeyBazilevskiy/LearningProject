import React, {useEffect, useState} from 'react'
import StyledView from "../../../../commonComponents/lowLevelComponents/styledView";
import CheckPassElem from "../CheckPassElem/CheckPassElem";
import {
  isHaveLowCase, isHaveNotRepeat,
  isHaveNumber,
  isHaveSymbol,
  isHaveUpCase,
  isPassLong
} from "../../../../validations/passwordValidations";

const listOfCriterias = [
  'The password must be at least 7 characters long.',
  'At least 1 uppercase letter.',
  'At least 1 lowercase letter.',
  'Minimum 1 digit.',
  'At least 1 character.',
  'No more than 2 reps.'
]

const CheckPass = ({pass}) => {
  const [validArr, setValidArr] = useState([])

  useEffect(() => {
    setValidArr([
      isPassLong(pass),
      isHaveUpCase(pass),
      isHaveLowCase(pass),
      isHaveNumber(pass),
      isHaveSymbol(pass),
      isHaveNotRepeat(pass),
    ])
  }, [pass])

  return(
    <StyledView>
      {listOfCriterias.map((item, index) => (
        <CheckPassElem text={item} key={item} isTrue={validArr[index]} />
      ))}
    </StyledView>
  )
}

export default CheckPass