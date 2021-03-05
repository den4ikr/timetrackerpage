import { useState } from "react"
import { connect } from "react-redux"
import { InputComponent } from "../Input"
import { ListItem } from "../ListItem"
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { addNote, removeNote, updateTime, setCounter } from '../../redux/actions/main-action'
import { IconButton, Paper } from "@material-ui/core";
import useStyles from "./ListStyle"


const List = (props) => {
    const style = useStyles ()

    const [query, setQuery] = useState ("")
    const createNote = () => {
        props.addNote (Date.now (), query, "00:00:00", 0)
        setQuery ("")
    }
    const onChangeHandler = (e) => {
        setQuery (e.target.value)
    }

    return (
        <div className = {style.mainRow} >
            <div className = {style.inputBlock} >
                <Paper component="form" className = {style.root} onSubmit={createNote} >
                    <div className={style.input}>
                        <InputComponent placeholder = "Enter your note" value = {query} onChange = {onChangeHandler} />
                    </div>
                    <IconButton className={style.iconButton} onClick = {createNote} >
                        <PlayArrowIcon />
                    </IconButton>
                </Paper>
            </div>

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