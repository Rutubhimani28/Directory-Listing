import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import { Button, Stack, Typography } from '@mui/material';
import moment from 'moment';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
// import Iconify from '../../components/iconify/Iconify';
// import AddTask from '../../components/task/AddTask';
// import { apidelete, apiget } from '../../service/api';
// import ViewEdit from '../../components/task/Edit'
// import AddMeeting from '../../components/meeting/Addmeetings'
// import AddCall from '../../components/call/Addcalls'

const Event =()=> {
      const [userAction, setUserAction] = useState(null)
    const [data, setData] = useState([]);
    const [taskId, setTaskId] = useState('')
    const [openTask, setOpenTask] = useState(false);
    const [openMeeting, setOpenMeeting] = useState(false);
    const [openCall, setOpenCall] = useState(false);
    const [openViewEdit, setOpenViewEdit] = useState(false)

    const userid = localStorage.getItem('user_id')
    const userRole = localStorage.getItem("userRole")

    // open task model
    const handleOpenTask = () => setOpenTask(true);
    const handleCloseTask = () => setOpenTask(false);

    // open meeting model
    const handleOpenMeeting = () => setOpenMeeting(true);
    const handleCloseMeeting = () => setOpenMeeting(false);

    // open call model
    const handleOpenCall = () => setOpenCall(true);
    const handleCloseCall = () => setOpenCall(false);

    const handleOpenViewEdit = () => setOpenViewEdit(true)
    const handleCloseViewEdit = () => setOpenViewEdit(false)

    const handleDateSelect = () => {
        handleCloseTask();
    };

    const handleEventClick = (clickInfo:any) => {
        setTaskId(clickInfo?.event?._def?.extendedProps?._id)
        console.log(clickInfo)
        handleOpenViewEdit()
        if (clickInfo.event.url) {
            clickInfo.jsEvent.preventDefault();
            window.open(clickInfo.event.url);
        }

    };
    const handleEvents = (events:any) => {
    };

    const renderEventContent = (eventInfo:any) => (
        <>
            <b>{eventInfo.timeText}</b>
            <i>{eventInfo.event.title}</i>
        </>
    );

   

  return (
     <div>
          
            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4">
                        Calendar
                    </Typography>
                  
                </Stack>
                <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
// minHeight="400px"
                    height="600px"
                    events={data}
                    headerToolbar={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay'
                    }}
                    eventClick={handleEventClick}
                    eventsSet={handleEvents}
                    select={handleDateSelect}
                    eventContent={renderEventContent}
                    views={{
                        listWeek: { buttonText: 'List' },
                        multiMonthFourMonth: {
                            type: 'multiMonth',
                            buttonText: 'multiMonth',
                            duration: { months: 4 },
                        }
                    }}
                    buttonText={{
                        today: 'Today',
                        dayGridMonth: 'Month',
                        timeGridWeek: 'Week',
                        timeGridDay: 'Day',
                    }}
                    eventClassNames="custom-fullcalendar"
                />
            </Container>
        </div>
  )
}

export default Event

  

function apidelete(arg0: string) {
    throw new Error('Function not implemented.');
}

function apiget(arg0: string) {
    throw new Error('Function not implemented.');
}
  

