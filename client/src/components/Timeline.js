import TimelineSeparator from '@mui/lab/TimelineSeparator';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
//all icons images sourced from www.flaticon.com

export default function BrewTimeline() {
    return (
        <Timeline position="alternate">
            <h2>The Brewing Journey</h2>
            <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                    <img src="%PUBLIC_URL%/../img/water.png" alt='water' width={100} height={100} />
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent></TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                    <img src="%PUBLIC_URL%/../img/barley.png" alt='barley' width={100} height={100} />
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Water</TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                    <img src="%PUBLIC_URL%/../img/hop.png" alt='hop' width={100} height={100} />
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Barley</TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                    <img src='%PUBLIC_URL%/../img/yeast.png' alt='yeast' width={100} height={100} />
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Hops</TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                    <img src='%PUBLIC_URL%/../img/brewtank.png' alt='brewtank' width={100} height={100} />
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Yeast</TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                    <img src='%PUBLIC_URL%/../img/barrel.png' alt='barrel' width={100} height={100} />
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
    )
}
