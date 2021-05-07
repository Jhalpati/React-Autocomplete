import React, { useState, useEffect } from "react";
// import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button, Typography } from "@material-ui/core";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Search(){
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;

  return(
  <div class="lla">
    <div>
    
      <Typography align="center" component="div">
        {/* Button and Search bar below */}
        <br></br>
        <form>
          <TextField
            // InputProps={{ pattern: "[^(0?[1-9]|[1][0-2])[0-9]+$]" }}
            id="standard-full-width"
            style={{ margin: 4 }}
            placeholder="Enter a date"
            helperText="Example: 12/25 (Month, Day)"
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            // value={search}
            // onChange={updateSearch}
          />
        </form>
        </Typography>
        </div>
        </div>
);

}