import {ButtonDelete} from "./ComponentsStyles";

const Inputs = ({arr, index, changeKeys, changeValues, deleteComponent}) => {

    return (
        <div>
            <input value={arr.key} onChange={changeKeys(index)}/>
            <input value={arr.value} onChange={changeValues(index)}/>
            <ButtonDelete onClick={() => deleteComponent(index)}>
                Delete
            </ButtonDelete>
        </div>
    )
}
export default Inputs