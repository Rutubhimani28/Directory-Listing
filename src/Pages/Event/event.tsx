import { useState } from "react";
import Container from "@mui/material/Container";
import { Stack, Typography } from "@mui/material";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const Event = () => {
  const [data, setData] = useState([]);
  const [openTask, setOpenTask] = useState(false);

  // open task model
  const handleOpenTask = () => setOpenTask(true);

  const handleDateSelect = () => {
    handleOpenTask();
  };
  const handleEventClick = (clickInfo: any) => {};
  const handleEvents = (events: any) => {};

  const renderEventContent = (eventInfo: any) => (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );

  return (
    <div>
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4">Calendar</Typography>
        </Stack>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          // minHeight="400px"
          height="600px"
          events={data}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          eventClick={handleEventClick}
          eventsSet={handleEvents}
          select={handleDateSelect}
          eventContent={renderEventContent}
          views={{
            listWeek: { buttonText: "List" },
            multiMonthFourMonth: {
              type: "multiMonth",
              buttonText: "multiMonth",
              duration: { months: 4 },
            },
          }}
          buttonText={{
            today: "Today",
            dayGridMonth: "Month",
            timeGridWeek: "Week",
            timeGridDay: "Day",
          }}
          eventClassNames="custom-fullcalendar"
        />
      </Container>
    </div>
  );
};

export default Event;
