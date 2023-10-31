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
        ``
    // delete api
    // const deletedata = async () => {
    //     await apidelete(`task/delete/${taskId}`)
    //     handleCloseViewEdit()
    // }

    // const fetchApiTask = async () => {
    //     const result = await apiget(userRole === "admin" ? `task/list` : `task/list/?createdBy=${userid}`);
    //     return result.data.result.map((item: { subject: any; startDate: any; endDate: any; textColor: any; backgroundColor: any; }) => ({
    //         title: item.subject,
    //         start: item.startDate,
    //         end: item.endDate,
    //         textColor:item.textColor,
    //         backgroundColor: item.backgroundColor
    //     }));
    // };

    // const fetchApiMeeting = async () => {
    //     const result = await apiget(userRole === "admin" ? `meeting/list` : `meeting/list/?createdBy=${userid}`);
    //     return result.data.result.map(item => ({
    //         title: item.subject,
    //         start: item.startDate,
    //         end: item.endDate,
    //     }));
    // };

    // const fetchApiCall = async () => {
    //     const result = await apiget(userRole === "admin" ? `call/list` : `call/list/?createdBy=${userid}`);
    //     return result.data.result.map(item => ({
    //         title: item.subject,
    //         start: item.startDateTime,
    //     }));
    // };

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const taskApiData = await fetchApiTask();
    //         const meetingApiData = await fetchApiMeeting();
    //         const callApiData = await fetchApiCall();
    //         const combinedData = [...taskApiData, ...meetingApiData, ...callApiData];
    //         setData(combinedData[]);
    //     };

    //     fetchData();
    // }, [openTask, openViewEdit, userAction])

  return (
     <div>
            {/* <AddTask open={openTask} handleClose={handleCloseTask} setUserAction={setUserAction} lead='lead' contact='contact' />


            <AddMeeting open={openMeeting} handleClose={handleCloseMeeting} setUserAction={setUserAction} />

            <AddCall open={openCall} handleClose={handleCloseCall} setUserAction={setUserAction} /> */}

            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4">
                        Calendar
                    </Typography>
                    {/* <ActionButtonTwo
                        handleOpenTask={handleOpenTask}
                        handleOpenMeeting={handleOpenMeeting}
                        handleOpenCall={handleOpenCall}
                    /> */}
                </Stack>
                <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
// minHeight="400px"
                    height="600px"
                    // dateClick={handleDateClick}
                    // events={calendarDataCalendar}
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
  

// import React from 'react'
// import FullCalendar, {  } from '@fullcalendar/react'
// import dayGridPlugin from '@fullcalendar/daygrid'
// import timeGridPlugin from '@fullcalendar/timegrid'
// import interactionPlugin from '@fullcalendar/interaction'
// import { INITIAL_EVENTS, createEventId } from './eventUtils'

// export default class DemoApp extends React.Component {

//   state = {
//     weekendsVisible: true,
//     currentEvents: []
//   }

//   render() {
//     return (
//       <div className='demo-app'>
//         {this.renderSidebar()}
//         <div className='demo-app-main'>
//           <FullCalendar
//             plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
//             headerToolbar={{
//               left: 'prev,next today',
//               center: 'title',
//               right: 'dayGridMonth,timeGridWeek,timeGridDay'
//             }}
//             initialView='dayGridMonth'
//             editable={true}
//             selectable={true}
//             selectMirror={true}
//             dayMaxEvents={true}
//             weekends={this.state.weekendsVisible}
//             initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
//             select={this.handleDateSelect}
//             eventContent={renderEventContent} // custom render function
//             eventClick={this.handleEventClick}
//             eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
//             /* you can update a remote database when these fire:
//             eventAdd={function(){}}
//             eventChange={function(){}}
//             eventRemove={function(){}}
//             */
//           />
//         </div>
//       </div>
//     )
//   }

//   renderSidebar() {
//     return (
//       <div className='demo-app-sidebar'>
//         <div className='demo-app-sidebar-section'>
//           <h2>Instructions</h2>
//           <ul>
//             <li>Select dates and you will be prompted to create a new event</li>
//             <li>Drag, drop, and resize events</li>
//             <li>Click an event to delete it</li>
//           </ul>
//         </div>
//         <div className='demo-app-sidebar-section'>
//           <label>
//             <input
//               type='checkbox'
//               checked={this.state.weekendsVisible}
//               onChange={this.handleWeekendsToggle}
//             ></input>
//             toggle weekends
//           </label>
//         </div>
//         <div className='demo-app-sidebar-section'>
//           <h2>All Events ({this.state.currentEvents.length})</h2>
//           <ul>
//             {this.state.currentEvents.map(renderSidebarEvent)}
//           </ul>
//         </div>
//       </div>
//     )
//   }

//   handleWeekendsToggle = () => {
//     this.setState({
//       weekendsVisible: !this.state.weekendsVisible
//     })
//   }

//   handleDateSelect = (selectInfo:any) => {
//     let title = prompt('Please enter a new title for your event')
//     let calendarApi = selectInfo.view.calendar

//     calendarApi.unselect() // clear date selection

//     if (title) {
//       calendarApi.addEvent({
//         id: createEventId(),
//         title,
//         start: selectInfo.startStr,
//         end: selectInfo.endStr,
//         allDay: selectInfo.allDay
//       })
//     }
//   }

//   handleEventClick = (clickInfo:any) => {
//     if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
//       clickInfo.event.remove()
//     }
//   }

//   handleEvents = (events:any) => {
//     this.setState({
//       currentEvents: events
//     })
//   }

// }

// function renderEventContent(eventInfo:any) {
//   return (
//     <>
//       <b>{eventInfo.timeText}</b>
//       <i>{eventInfo.event.title}</i>
//     </>
//   )
// }

// function renderSidebarEvent(event:any) {
//   return (
//     <li key={event.id}>
//       {/* <b>{formatDate(event.start, {year: 'numeric', month: 'short', day: 'numeric'})}</b> */}
//       <i>{event.title}</i>
//     </li>
//   )
// }
