import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import Plan from './component/Plans/Plan';
import { useEffect, useState } from 'react';
function App() {

  let lists = [];

  const [values, setValues] = useState("");
  const handelChange = e => {
    setValues(e.target.value)
  }

  const clickHandel = () => {
    lists.push(values);
  }

  useEffect(()=>{
    App()
  },[values])

  return (
    <div className="container-fluid my-5">
      <div className='row'>
        <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
          <h1 className='text-center'>Today's Plan</h1>
          <div className="row">
            <div className="col-9">
              <input type="text" className='form-control' placeholder='write Plan Hear' value={values} onChange={handelChange} />
            </div>
            <div className="col-2">
              <button className="btn btn-warning px-5 fw-bold" onClick={clickHandel}>Add</button>
            </div>
            <div className="container-fluid">
              <ul className="list-unstyled row m-5">
                {
                  lists.map(list=>console.log(list))
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
