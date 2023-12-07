export const datepicker = () => ({
  MONTH_NAMES: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  MONTH_SHORT_NAMES: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  DAYS: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  showDatepicker: false,
  datepickerValue: null,
  selectedDate: "",
  dateFormat: "MM-DD-YYYY",
  today: null,
  month: null,
  year: null,
  no_of_days: [],
  blankdays: [],
  init() {
    this.initDate();
    this.getNoOfDays();
  },
  initDate() {
    if (this.selectedDate) {
      this.today = new Date(Date.parse(this.selectedDate));
    } else {
      this.today = new Date();
    }
    this.month = this.today.getMonth();
    this.year = this.today.getFullYear();
  },
  formatDateForDisplay(date) {
    let formattedDay = this.DAYS[date.getDay()];
    let formattedDate = ("0" + date.getDate()).slice(-2); // appends 0 (zero) in single digit date
    let formattedMonth = this.MONTH_NAMES[date.getMonth()];
    let formattedMonthShortName = this.MONTH_SHORT_NAMES[date.getMonth()];
    let formattedMonthInNumber = ("0" + (parseInt(date.getMonth()) + 1)).slice(
      -2
    );
    let formattedYear = date.getFullYear();
    if (this.dateFormat === "MM-DD-YYYY") {
      return `${formattedMonthInNumber}-${formattedDate}-${formattedYear}`;
    }
    if (this.dateFormat === "YYYY-MM-DD") {
      return `${formattedYear}-${formattedMonthInNumber}-${formattedDate}`;
    }
    if (this.dateFormat === "D d M, Y") {
      return `${formattedDay} ${formattedDate} ${formattedMonthShortName} ${formattedYear}`;
    }
    return `${formattedDay} ${formattedDate} ${formattedMonth} ${formattedYear}`;
  },
  isSelectedDate(date) {
    const d = new Date(this.year, this.month, date);
    return this.datepickerValue === this.formatDateForDisplay(d);
  },
  isToday(date) {
    const today = new Date();
    const d = new Date(this.year, this.month, date);
    return today.toDateString() === d.toDateString();
  },
  getDateValue(date) {
    let selectedDate = new Date(this.year, this.month, date);
    this.datepickerValue = this.formatDateForDisplay(selectedDate);
    this.isSelectedDate(date);
    this.showDatepicker = false;
  },
  isOlderOrFree(date) {
    let selectedDate = new Date(this.year, this.month, date);
    let dayName = selectedDate.toLocaleDateString("en-US", {
      weekday: "short",
    });
    return selectedDate < this.today || dayName === "Sun" || dayName === "Sat";
  },
  getNoOfDays() {
    let daysInMonth = new Date(this.year, this.month + 1, 0).getDate();
    // find where to start calendar day of week
    let dayOfWeek = new Date(this.year, this.month).getDay();
    let blankdaysArray = [];
    for (let i = 1; i <= dayOfWeek; i++) {
      blankdaysArray.push(i);
    }
    let daysArray = [];
    for (let i = 1; i <= daysInMonth; i++) {
      daysArray.push(i);
    }
    this.blankdays = blankdaysArray;
    this.no_of_days = daysArray;
  },
});
