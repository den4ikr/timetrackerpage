import { Card, CardContent, IconButton, Typography } from "@material-ui/core"
import useStyles from "./ListItemStyle"
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import DeleteIcon from '@material-ui/icons/Delete';
import PauseIcon from '@material-ui/icons/Pause';
import {moment} from "moment"

export const ListItem = (props) => {
    const style = useStyles ()
    const deleteNote = () => {
        props.removeNote (props.id)
    }
    const startTimer = () => {
        var startTimestamp = moment().startOf("day");
        setInterval(function() {
            startTimestamp.add(1, 'second');
            
        }, 1000);
    }

    return (
        <Card className={style.card} >
            <CardContent>
                <div className={style.mainRow} >
                    <Typography>
                        {props.text}
                    </Typography>
                    <div className={style.subRow} >
                        <div>
                            {props.time}
                        </div>
                        <IconButton>
                            <PlayArrowIcon color="primary" />
                        </IconButton>
                        <IconButton onClick = {deleteNote} >
                            <DeleteIcon color="secondary" />
                        </IconButton>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}