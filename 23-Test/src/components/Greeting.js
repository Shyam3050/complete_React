import React,{useState} from 'react'

const Greeting = () => {
    const [changedTest, setChangedTest] = useState(false)
    function changeTextHandler(){
        setChangedTest(true);
    }
  return (
    <div>
        {!changedTest && <p>Good to see you</p>}
        {changedTest && <p>Changed</p>}
        <button type="button" onClick={changeTextHandler}></button>
    </div>
  )
}

export default Greeting

//Set up the test data. test conditions and test environment
//Run Logic that should be tested
//compare exicution results with expected result