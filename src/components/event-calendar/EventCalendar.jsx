import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './EventCalendar.css';

function EventCalendar() {
  const [value, onChange] = useState(new Date());
  const [hoveredEvent, setHoveredEvent] = useState(''); // Para mostrar el evento al hacer hover
  const [eventDescription, setEventDescription] = useState(''); // Para mostrar el evento al hacer clic

  // Dates & descriptions events
  const events = {
    '2025-04-05': 'Evento 1 de prueba ahi de puta madre socio deluxe defenitive edition New Funky mode & Knuckles',
    '2025-04-10': 'Torneo de Tekken 8 | 11:00 - 20:00 | Premio desde top 8',
    '2025-04-07': 'Oferta 3x2 en bebidas'
  };

  // Función para agregar clase a la fecha específica
  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const dateStr = date.toLocaleDateString("en-CA");
      if (events[dateStr]) {
        return 'highlight'; // Clase CSS para fechas con eventos
      }
    }
    return null;
  };

  // Función para manejar el clic en una fecha
  const handleDateClick = (date) => {
    const dateStr = date.toLocaleDateString("en-CA");
    if (events[dateStr]) {
      setEventDescription(events[dateStr]); // Mostrar el evento asociado al hacer clic
    } else {
      setEventDescription(''); // Si no hay evento, no mostrar nada
    }
    onChange(date);
  };

  // Función para manejar el hover sobre una fecha
  const handleDateHover = (date) => {
    const dateStr = date.toISOString().split('T')[0];
    if (events[dateStr]) {
      setHoveredEvent(events[dateStr]); // Mostrar el evento al hacer hover
    } else {
      setHoveredEvent('');
    }
  };

  return (
    <div className='calendar-code'>
      <div className='calendar'>
        <Calendar
          onChange={handleDateClick}
          value={value}
          tileClassName={tileClassName}
          tileContent={({ date, view }) => (
            view === 'month' && events[date.toISOString().split('T')[0]] ? (
              <div
                onMouseEnter={() => handleDateHover(date)}
                onMouseLeave={() => setHoveredEvent('')}
              />
            ) : null
          )}
        />
      </div>
      <div className='events'>
        <h2 className='events-panel'>Eventos:</h2>
        {eventDescription && (
          <div className="event-description">
            <h3>{eventDescription}</h3>
          </div>
        )}
      </div>
      {hoveredEvent && (
        <div className="event-hover">
          <p>{hoveredEvent}</p>
        </div>
      )}
    </div>
  );
}

export default EventCalendar;