import {useContext} from "react";
import {MyContext} from "../App";

export default function ThirdComponent() {

    const value = useContext(MyContext)
    const colors = ['white', 'green', 'blue', 'red', 'cyan']
    const modalStyle = {backgroundColor: value.color}

    function changeColor(color) {
        value.setColor(color)
    }

    return (
        <div>
            {value.active ?
                <div className={'card'} style={modalStyle}>
                    <div className="card-header">
                        <h1>Active</h1>
                    </div>
                    <div className="card-body">
                        <h3>modal ...</h3>
                    </div>
                </div>
                : 'Active is false !'}
            <br/>
            <hr/>
            {colors.map((item, index) => <button className={'btn btn-dark mx-1'}
                                                 key={index.toString()}
                                                 onClick={() => changeColor(item)}>{item}</button>)}
        </div>
    )
}