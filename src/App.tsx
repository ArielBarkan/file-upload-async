import { clear } from 'console';
import React, { ChangeEventHandler } from 'react';


function App() {


  const validateIcon = async (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      resolve("hello world")
    })

  }
  const handleConfigureAppBasicData = async (event: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    console.log("---------BEFORE------------------START----------------")
    console.log("1 - event.target.name = ", event.target.name);
    console.log("2 - event.target.files = ", event.target.files);
    console.log("3 - event.target.files![0] = ", event.target.files![0]);
    console.log("4 - event.target.files![0].size = ", event.target.files![0].size);
    console.log("---------BEFORE------------------END----------------")

    const someVar: any = await validateIcon()
    console.log(someVar)

    console.log("---------AFTER------------------START----------------")
    console.log("1 - event.target.name = ", event.target.name);
    console.log("2 - event.target.files = ", event.target.files);
    console.log("3 - event.target.files![0] = ", event.target.files![0]);
    console.log("4 - event.target.files![0].size = ", event.target.files![0].size);
    console.log("---------AFTER------------------END----------------")

  }



  return (
    <div className="App">
      <form>

        <input type="file" id="icon" name="icon" onChange={handleConfigureAppBasicData} />
      </form>

    </div>
  );
}

export default App;
