import React from 'react'


import './Main.css'

const Main = ({ addThing, signOut }) => {
    return (
    <div>
        <button className="AddThingButton" onClick={addThing}>
            Add Thing
        </button>
        <button className="SignOut" onClick={signOut}>
            Sign Out
        </button>
    </div>
    )
}

export default Main