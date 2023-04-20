import TimelineSeparator from '@mui/lab/TimelineSeparator';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
//all icons images sourced from www.flaticon.com
import './styling/Home.css'

export default function BrewTimeline() {
    const water = require("../img/water.png");
    const barley = require("../img/barley.png");
    const hop = require("../img/hop.png");
    const yeast = require("../img/yeast.png");
    const brewtank = require("../img/brewtank.png");
    const barrel = require("../img/barrel.png");

    return (
        <div className='timeline'>
            <Timeline position="alternate" >
                <h3 className='timeline-title'>The Brewing Journey</h3>
                <TimelineItem>
                    <TimelineOppositeContent color="text.warning">
                        <img src={water} alt='water' width={100} height={100} />
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot variant='' />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent></TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent color="text.secondary">
                        <img src={barley} alt='barley' width={100} height={100} />
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Water</TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent color="text.secondary">
                        <img src={hop} alt='hop' width={100} height={100} />
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Barley</TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent color="text.secondary">
                        <img src={yeast} alt='yeast' width={100} height={100} />
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Hops</TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent color="text.secondary">
                        <img src={brewtank} alt='brewtank' width={100} height={100} />
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Yeast</TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent color="text.secondary">
                        <img src={barrel} alt='barrel' width={100} height={100} />
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Brewing</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent color="text.secondary">
                    </TimelineOppositeContent>
                    <TimelineDot />
                    <TimelineContent>Delicious Beer</TimelineContent>
                </TimelineItem>

            </Timeline>
        </div>
    )
}
