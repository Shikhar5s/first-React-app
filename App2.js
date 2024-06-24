import React from "react"
import ReactDOM from "react-dom/client"


const Title=[
    {names:"Shikhar"
    },
    {profession:"Software devloper"
    }


]

const Rendering=()=>{
    return(
        <div>
            {Title[0].names}

            <h1>
                I think its rendered now
            </h1>

        </div>

    )  

}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Rendering/>)
