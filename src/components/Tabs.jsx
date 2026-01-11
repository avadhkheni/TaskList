export function Tabs(props) {// props are coming from App.jsx

    const{ todos, selectedTab, setSelectedTab} = props  // destructuring the props

    const tabs =["All","Open","Complete"] 
    return(
        <nav>
            {tabs.map((tab,tabIndex)=>{
                const numOfTask = tab === "All"?
                todos.length :
                tab === "Open" ?
                     todos.filter(val => !val.complete).
                    length :
                    todos.filter(val => val.complete).length

                return(
                    <button
                    onClick={()=>{
                        setSelectedTab(tab) // it cams from App.jsx
                    }}
                     key={tabIndex} 
                    className={"tab-button "+(tab === 
                    selectedTab ?"tab-selected" :"")
                    }>
                        <h4>{tab}<span>({numOfTask})</span></h4>
                    </button>
                )
            })}
            <hr />
        </nav>
    )
}