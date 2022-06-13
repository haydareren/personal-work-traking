import React from "react";
import WorkList from "./components/WorkList";
import WorkContextProvider from "./context/WorkContext";
function App() {
    return (
        <div className="App">
            <div className="container-xl">
                <div className="table-responsive">
                    <div className="table-wrapper">
                        <WorkContextProvider>
                            <WorkList/>
                        </WorkContextProvider>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
