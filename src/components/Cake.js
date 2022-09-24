import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "../redux/features/cakeSlice";

function Cake() {

    const dispatch = useDispatch();
    //récupérer le store
    const numOfcake = useSelector(state => state.cake.numOfCake);

    const handleOrdredClick = () => {
        console.log( "handleOrdredClick");
        dispatch (ordered());
    }
    const handleRestockedClick = () => {
        console.log( "handleRestockedClick");
        dispatch(restocked(10));
    }
    return (
        <div>
            <h2>Number of cakes:{numOfcake} </h2>
            <button onClick = {handleOrdredClick}> Ordered</button>
            <button onClick = {handleRestockedClick}> Restocked</button>
        </div>
    )
}

export default Cake
