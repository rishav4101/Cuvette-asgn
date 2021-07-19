import React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { useStyles } from "./Styles";

export default function DataModal({ data, open, handleClose }) {
  const classes = useStyles();

  var p1 = data.p1 ? JSON.parse(data.p1) : {};
  var p2 = data.p2 ? JSON.parse(data.p2) : {};
  
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <h2>Job Details</h2>
          <div>
            {data !== undefined ? (
              <>
                <div className={classes.dRow}>
                  <div className={classes.dCol1}>Job Title: </div>
                  <div className={classes.dCol2}>{p1.jobTitle}</div>
                </div>
                <div className={classes.dRow}>
                  <div className={classes.dCol1}>Job Location: </div>
                  <div className={classes.dCol2}>{p1.jobLocation}</div>
                </div>
                <div className={classes.dRow}>
                  <div className={classes.dCol1}>Remote: </div>
                  <div className={classes.dCol2}>{p1.isRemote ? "Yes" : "No"}</div>
                </div>
                <div className={classes.dRow}>
                  <div className={classes.dCol1}>Mode: </div>
                  <div className={classes.dCol2}>{p2.mode}</div>
                </div>
                <div className={classes.dRow}>
                  <div className={classes.dCol1}>Start date: </div>
                  <div className={classes.dCol2}>{p2.date}</div>
                </div>
                <div className={classes.dRow}>
                  <div className={classes.dCol1}>Duration: </div>
                  <div className={classes.dCol2}>{p2.duration}</div>
                </div>
                <div className={classes.dRow}>
                  <div className={classes.dCol1}>Skills: </div>
                  <div className={classes.dCol2}>{p2.skills ? p2.skills.map((sk)=> sk.name + " " ) : "None"}</div>
                </div>
                <div className={classes.dRow}>
                  <div className={classes.dCol1}>Description: </div>
                  <div className={classes.dCol2}>{p2.descp}</div>
                </div>
                <div className={classes.dRow}>
                  <div className={classes.dCol1}>Salary: </div>
                  <div className={classes.dCol2}>{p2.range ? p2.range[0] + "k - " + p2.range[0] + "k" : ""}</div>
                </div>
              </>
            ) : (
              <> </>
            )}
          </div>
        </div>
      </Fade>
    </Modal>
  );
}