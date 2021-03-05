import { useState } from "react"
import { connect } from "react-redux"
import { InputComponent } from "../Input"
import { ListItem } from "../ListItem"
import { addNote, removeNote, updateTime, setCounter } from '../../redux/actions/main-action'


const List = (props) => {


    const [query, setQuery] = useState ("")
    const createNote = (e) => {
        if (e.key === "Enter") {
            props.addNote (Date.now (), query, "00:00:00", 0)
            setQuery ("")
        }
    }
    const onChangeHandler = (e) => {
        setQuery (e.target.value)
    }

    return (
        <div>
            <InputComponent createNote = {createNote} placeholder = "Enter your note" value = {query} onChange = {onChangeHandler} />
            {props.notes.map ((note) => {
                return (
                    <ListItem text = {note.text} key = {note.id} id = {note.id} time = {note.time} counter = {note.counter}
                    removeNote = {props.removeNote} updateTime = {props.updateTime} setCounter = {props.setCounter} />
                )
            })}
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        notes: state.main.notes,
    }
}

export default connect (mapStateToProps, {addNote, removeNote, updateTime, setCounter})(List)