import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import { Button, Stack, Typography } from "@mui/material";
import moment from "moment";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Event = () => {
  const [userAction, setUserAction] = useState(null);
  const [data, setData] = useState([]);
  const [taskId, setTaskId] = useState("");
  const [openTask, setOpenTask] = useState(false);
  const [openMeeting, setOpenMeeting] = useState(false);
  const [openCall, setOpenCall] = useState(false);
  const [openViewEdit, setOpenViewEdit] = useState(false);

  const userid = localStorage.getItem("user_id");
  const userRole = localStorage.getItem("userRole");

  // open task model
  const handleOpenTask = () => setOpenTask(true);
  const handleCloseTask = () => setOpenTask(false);

  const handleOpenViewEdit = () => setOpenViewEdit(true);
  const handleCloseViewEdit = () => setOpenViewEdit(false);

  const handleDateSelect = () => {
    handleOpenTask();
  };
 const handleEventClick = (clickInfo: any) => {
    setTaskId(clickInfo?.event?._def?.extendedProps?._id);
    console.log(clickInfo);
    handleOpenViewEdit();
    if (clickInfo.event.url) {
      clickInfo.jsEvent.preventDefault();
      window.open(clickInfo.event.url);
    }
  };
  const handleEvents = (events: any) => {};



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


