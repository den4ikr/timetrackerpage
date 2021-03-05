import { useState, useRef, useEffect } from "react";
import { Card, CardContent, IconButton, Typography } from "@material-ui/core";
import useStyles from "./ListItemStyle";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import DeleteIcon from "@material-ui/icons/Delete";
import PauseIcon from "@material-ui/icons/Pause";
import moment from "moment";

export const ListItem = (props) => {
  const [showPause, setShowPause] = useState(false);
  const [started, setStarted] = useState(true);
  let intervalId = useRef(null);
  const style = useStyles();

  useEffect(() => {
    startTimer();
  }, []);

  const deleteNote = () => {
    props.removeNote(props.id);
  };

  function startTimer() {
    let stateSeconds = props.time.slice(-2);
    let stateMinutes = props.time.substring(3, 5);
    let stateHours = props.time.substring(0, 2);
    let startTimestamp = moment()
      .hours(stateHours)
      .minutes(stateMinutes)
      .seconds(stateSeconds);
    intervalId.current = setInterval(function () {
      startTimestamp.add(1, "second");
      props.updateTime(props.id, startTimestamp.format("HH:mm:ss"));
    }, 1000);
    setShowPause(true);
    setStarted(true);
  }

  function stopTimer() {
    clearInterval(intervalId.current);
    setShowPause(false);
    setStarted(false);
  }

  return (
    <Card
      className={style.card}
      style={{ backgroundColor: started ? "#FDFDF6" : "#fff" }}
    >
      <CardContent>
        <div className={style.mainRow}>
          <Typography style={{ color: started ? "#3FAF6C" : "#000" }}>
            {props.text}
          </Typography>
          <div className={style.subRow}>
            <div>{props.time}</div>
            {showPause ? (
              <IconButton onClick={stopTimer}>
                <PauseIcon color="primary" />
              </IconButton>
            ) : (
              <IconButton onClick={startTimer}>
                <PlayArrowIcon color="primary" />
              </IconButton>
            )}
            <IconButton onClick={deleteNote}>
              <DeleteIcon color="secondary" />
            </IconButton>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
