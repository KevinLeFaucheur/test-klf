import React, { useState } from 'react'
import DatePicker from 'test-klf'
import 'test-klf/dist/index.css'

const App = () => {
  const [startValue, setStartValue] = useState(null);

  console.log(startValue);

  return <DatePicker id='birth' onChange={(value) => setStartValue(value)}/>
}

export default App
