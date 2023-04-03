import { DateTime } from './luxon.js';

const displayDate = () => {
  const date = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
  document.getElementById('datetime').innerHTML = date;
};

export default displayDate;