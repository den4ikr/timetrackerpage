import {useState, useRef, useEffect} from "react"
import { Card, CardContent, IconButton, Typography } from "@material-ui/core"
import useStyles from "./ListItemStyle"
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import DeleteIcon from '@material-ui/icons/Delete';
import PauseIcon from '@material-ui/icons/Pause';
import moment from "moment"

export const ListItem = (props) => {

    const [showPause, setShowPause] = useState (false)
    const style = useStyles ()
    const deleteNote = () => {
        props.removeNote (props.id)
    }

    useEffect (() => {
        startTimer ()
    }, [])

    var intervalId = useRef (null);
    function startTimer()
    {
        var startTimestamp = moment().startOf ("day")
        intervalId.current = setInterval(function() {
            startTimestamp.add(1, 'second');
            props.updateTime (props.id, startTimestamp.format('HH:mm:ss'))
        }, 1000);
        setShowPause (true)
    }

    function stopTimer () {
        clearInterval (intervalId.current)
        setShowPause (false)
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
                        {showPause
                            ? <IconButton onClick = {stopTimer} >
                                <PauseIcon color="primary" />
                            </IconButton>
                            : <IconButton onClick = {startTimer}  >
                            <PlayArrowIcon color="primary"/>
                            </IconButton>
                        }
                        <IconButton onClick = {deleteNote} >
                            <DeleteIcon color="secondary" />
                        </IconButton>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}