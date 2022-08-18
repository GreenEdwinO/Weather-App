const Time = () => {
  const date = new Date();
  const day = date.getDate();
  const month= date.toLocaleString('En', {month: 'short'});
  const year = date.getFullYear();
  const hours = date.getHours();

  let sup;
  if (day === 1 || 21 || 31) {
    sup = "st";
  }
  if (
    day === 4 ||
    5 ||
    6 ||
    7 ||
    8 ||
    9 ||
    10 ||
    11 ||
    12 ||
    13 ||
    14 ||
    15 ||
    16 ||
    17 ||
    18 ||
    19 ||
    20 ||
    24 ||
    25 ||
    26 ||
    27 ||
    28 ||
    29 ||
    30
  ) {
    sup = "th";
  } else if (day === 2 || 22) {
    sup = "nd";
  } else if (day === 3 || 23) {
    sup = "rd";
  }

  let timeOfDay;
  if (hours < 12) {
    timeOfDay = "morning";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "evening";
  }

  return (
    <div>
      Today, {day}
      <sup>
        <small>{sup} </small>
      </sup>
        {month}, {year}. Good{timeOfDay} 🙂
    </div>
  );
};

export default Time;
