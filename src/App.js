import {createContext, useReducer} from "react";
import FirstComponent from "./components/FirstComponent";

export const MyContext = createContext()

function reducer(state, action) {
    switch (action.type) {
        case 'setActive':
            return {...state, active: !state.active}
        case 'setColor':
            return {...state, color: action.color}
        default:
            return state
    }
}

function App() {

    // const [active, setActive] = useState(false)
    // const [color, setColor] = useState('white')

    const [state, dispatch] = useReducer(reducer, {
        color: 'white',
        active: false
    })

    function toggleModal() {
        // setActive(prev => !prev)
        dispatch({
            type: 'setActive'
        })
    }

    function changeColor(color) {
        dispatch({type: 'setColor', color: color})
    }

    return (
        <MyContext.Provider value={{
            active: state.active, color: state.color, setColor: changeColor
        }}>
            <div className={'container mt-5'}>
                <button className="btn btn-success mb-5" onClick={toggleModal}>Toggle modal</button>
                <div className="col-md-6">
                    <FirstComponent/>
                </div>
            </div>
        </MyContext.Provider>
    );
}

export default App;
