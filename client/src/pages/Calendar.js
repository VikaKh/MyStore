import DatePicker from 'sassy-datepicker';

function Calendar() {
    const onChange = (date) => {
        console.log(date.toString());
    };

    return (
        <DatePicker onChange={onChange} />
    );
}
export default Calendar;