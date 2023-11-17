import { useState } from "react";
import Container from "@mui/material/Container";
import { Autocomplete, Button, FormControl, InputAdornment, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, TextField, Typography } from "@mui/material";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import { GridSearchIcon } from "@mui/x-data-grid";

const Event = () => {
  const [data, setData] = useState([]);
  const [openTask, setOpenTask] = useState(false);

  // open task model
  const handleOpenTask = () => setOpenTask(true);

  const handleDateSelect = () => {
    handleOpenTask();
  };
  const handleEventClick = (clickInfo: any) => { };
  const handleEvents = (events: any) => { };

  const renderEventContent = (eventInfo: any) => (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
  const [value, setValue] = useState(null);

  const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  const top100Films = [
    { label: 'kgThe Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
  ];
  const top100Film = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
  ];
  return (
    <div>
      <Container>
        {/* <Stack
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
        /> */}

        <div style={{ display: "flex", alignItems: "center" }}>
          <div>
            <Autocomplete
              id="combo-box-demo"
              options={top100Films}
              sx={{ width: 300 }}
              value={value}
              getOptionLabel={(option) => option.label}

              renderInput={(params) => (
                <TextField {...params} placeholder="Ex:food,service,barber,hotel" InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <>
                      <span style={{ fontWeight: "bold" }}>what</span>
                      {params.InputProps.startAdornment}
                    </>
                  ),
                }} />
              )}
            />
          </div>
          <div>
            <Autocomplete
              id="combo-box-demo"
              options={top100Film}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} placeholder="Your City..." InputProps={{
                ...params.InputProps,
                startAdornment: (
                  <>
                    <span style={{ fontWeight: "bold" }}>Where</span>
                    {params.InputProps.startAdornment}
                  </>
                ),
              }} />}
            />
          </div>
          <div>
            <Button variant="contained" color="primary">
              <SearchOutlined />
            </Button>
          </div>
        </div>

      </Container>
    </div>
  );
};

export default Event;
