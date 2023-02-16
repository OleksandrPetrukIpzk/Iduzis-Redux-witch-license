import {useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeValue, changeKey, addElement, deleteElement} from "../redux/reducers/users";
import Inputs from "./Components/Inputs";
import {
    ButtonAdd,
    Header, HeaderText,
    InputsTable,
    MainPage,
    TableForText,
    TextOnTable, TriangleLowLeft, TriangleLowRight, TriangleMainLeft,
    TriangleMainRight
} from "./Components/ComponentsStyles";


const Jsonify = () => {
    const dispatch = useDispatch()
    const userCount = useSelector((s) => s.users.arrObj);
    const reducer = userCount.reduce((acc, prev) => {
        return {...acc, [String(prev.key)]: prev.value};
    }, {});
    const jsony = useMemo(() => JSON.stringify(reducer), [reducer]);
    const changeKeys = (index) => (e) => {
        dispatch(changeKey({key: e.target.value, index: index}))
    }
    const changeValues = (index) => (e) => {
        dispatch(changeValue({value: e.target.value, index: index}))
    }
    const deleteComponent = (index) => {
        dispatch(deleteElement({index: index}))
    }
    const addComponent = () => {
        dispatch(addElement())
    }
    return (
        <div>
            <Header>
                <TriangleMainLeft>
                    <TriangleLowLeft></TriangleLowLeft>
                </TriangleMainLeft>
                <TriangleMainRight>
                    <TriangleLowRight></TriangleLowRight>
                </TriangleMainRight>
                <HeaderText>JSONIFY REDUX</HeaderText>
            </Header>
            <MainPage>
                <div>
                    <InputsTable>
                        {userCount.map((arr, index) =>
                            <Inputs arr={arr} index={index} deleteComponent={deleteComponent} changeKeys={changeKeys}
                                    changeValues={changeValues}/>
                        )}
                        <ButtonAdd onClick={() => addComponent()}>ADD</ButtonAdd>
                    </InputsTable>
                </div>

                <TableForText>
                    <TextOnTable>{jsony}</TextOnTable>
                </TableForText>
            </MainPage>
        </div>
    )
}

export default Jsonify;