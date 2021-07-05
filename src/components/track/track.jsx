import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import Mood from '@material-ui/icons/Mood'
import Adb from '@material-ui/icons/Adb'
import AttachMoney from '@material-ui/icons/AttachMoney'
import FilterHdr from '@material-ui/icons/FilterHdr'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './track.scss'

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '6px 16px',
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
}));

export default function CustomizedTimeline() {
    const classes = useStyles();

    return (
        <div className='track'>
            <Timeline align="alternate">
            <TimelineItem>
                <TimelineOppositeContent>
                    <a href='https://www.pluralsight.com/search?q=devops&categories=course&sort=displayDate' style={{
                        color:'white'
                    }}>Train yourself</a>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color='secondary'>
                        <FilterHdr/>
                    </TimelineDot>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                            Vibranium
                        </Typography>
                        <Typography>You are invincible</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    <a href='https://www.pluralsight.com/search?q=devops&categories=course&sort=displayDate' style={{
                        color:'white'
                    }}>Train yourself</a>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="primary">
                        <LaptopMacIcon/>
                    </TimelineDot>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                            Platinum
                        </Typography>
                        <Typography>Quite impressive! !</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    <a href='https://www.pluralsight.com/search?q=devops&categories=course&sort=displayDate' style={{
                        color:'white'
                    }}>Train yourself</a>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="grey">
                        <AttachMoney/>
                    </TimelineDot>
                    <TimelineConnector className={classes.secondaryTail}/>
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                            Gold
                        </Typography>
                        <Typography>Not too shabby</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    <a href='https://www.pluralsight.com/search?q=devops&categories=course&sort=displayDate' style={{
                        color:'white'
                    }}>Train yourself</a>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="primary" >
                        <Adb/>
                    </TimelineDot>
                    <TimelineConnector className={classes.secondaryTail}/>
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                            Silver
                        </Typography>
                        <Typography>Congrats, you are no longer a novice!</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    <a href='https://www.pluralsight.com/search?q=devops&categories=course&sort=displayDate' style={{
                        color:'white'
                    }}>Train yourself</a>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="secondary">
                        <Mood/>
                    </TimelineDot>
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                            Novice
                        </Typography>
                        <Typography>Every journey starts with the first step!</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
        </Timeline></div>
    );
}