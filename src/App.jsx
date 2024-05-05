import { useState } from "react";
import Sidebar from "./components/Sidebar";

const App = () => {
  // //state
  // const [age, setAge] = useState(30);

  // //variable
  // const name = "John";

  // const [age, setAge] = useState(0);

  // let thisYear = new Date().getFullYear();
  // let bornYear = 1994;

  // const handleCalculate = () => {
  //   setAge(thisYear - bornYear);
  // };

  const [showSidebar, setShowSidebar] = useState(false);
  // const[showSidebar2, setShowSidebar2] = useState(false);

  const handleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  // const handleSidebar2 = () => {
  //   setShowSidebar2(!showSidebar2);
  // };

  // if (showSidebar) {
  //   return (
  //     <div>
  //       <button
  //         onClick={handleSidebar}
  //         style={{ transform: "rotate(90deg)", marginBottom: "40px" }}
  //       >
  //         |||
  //       </button>
  //     </div>
  //   );
  // }

  // if (showSidebar2) {
  //   return (
  //     <div>
  //       <button onClick={handleSidebar}>X</button>
  //       <p>home</p>
  //       <p>contact</p>
  //       <p>profile</p>
  //     </div>
  //   );
  // }

  return (
    // <div>
    //   <h1>{age}</h1>
    //   <button onClick={handleCalculate}>calculate my age</button>
    // </div>
    <div>
      {/* untuk 1 kondisi bisa menggunakan operator && */}
      {!showSidebar && (
        <button
          onClick={handleSidebar}
          style={{ transform: "rotate(90deg)", marginBottom: "40px" }}
        >
          |||
        </button>
      )}

      {showSidebar && <Sidebar handleSidebar={handleSidebar} />}
    </div>
  );
};

export default App;
