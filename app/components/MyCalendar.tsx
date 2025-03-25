import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import '@fullcalendar/core/locales/es';  // Import Spanish locale


const MyCalendar = () => {
    
    
    console.log(process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_ID)
    console.log(process.env.NEXT_PUBLIC_GOOGLE_API_KEY)

 /*  useEffect(() => {
    const fetchCalendarEvents = async () => {
      try {
        const url = `https://www.googleapis.com/calendar/v3/calendars/${process.env.GOOGLE_CALENDAR_ID}/events?key=${process.env.GOOGLE_API_KEY}`;
        
        const response = await fetch(url);
        const data = await response.json();
    
        if (data.items) {
          data.items.forEach((event: any) => {
            console.log(`Event: ${event.summary}, Description: ${event.description}`);
          });
        } else {
          console.log("No events found.");
        }
      } catch (error) {
        console.error("Error fetching Google Calendar events:", error);
      }
    };
    fetchCalendarEvents();
  }, []); */

  return (
    <>
      <div >
        <FullCalendar
          plugins={[timeGridPlugin, googleCalendarPlugin]}
          initialView="timeGridWeek"
          googleCalendarApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
          events={{
            googleCalendarId: process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_ID,
            className: "my-custom-event",
          }}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "timeGridWeek",
          }}
          locale="es"
          slotMinTime="00:00:00"
          slotMaxTime="23:59:59"
          allDaySlot={false}
            eventBackgroundColor="green" // Set background color for all events
            eventBorderColor="blue"
          businessHours={[
            {
              daysOfWeek: [1, 2, 3, 4],  // Monday to Thursday
              startTime: "18:00",
              endTime: "22:00",
            },
            {
              daysOfWeek: [0],  // Sunday
              startTime: "15:00",
              endTime: "20:00",
            },
          ]}
          weekNumbers={true}
          dayHeaders={true}
          weekNumberCalculation="local"
          firstDay={1}
          height="auto"
          validRange={{ start: new Date() }}  // Disable past days
          eventContent={(eventInfo) => {
            return (
              <>
                <b>{eventInfo.event.title}</b>
                <p>{eventInfo.event.extendedProps.description || 'No description available'}</p>
              </>
            );
          }}
        />
      </div>
    </>
  );
};

export default MyCalendar;