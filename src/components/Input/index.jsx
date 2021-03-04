import Input from '@material-ui/core/Input';
import useStyles from "./InputStyle"

export const InputComponent = (props) => {
    const style = useStyles()

    return (
        <div className={style.inputBlock} >
            <Input onKeyPress = {props.createNote} onChange = {props.onChange} fullWidth placeholder = {props.placeholder} value = {props.value} />
        </div>
    )
}
