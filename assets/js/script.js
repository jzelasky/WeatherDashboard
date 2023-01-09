$(function (){
    $('#currentDay').text(dayjs().format('M/D/YYYY'));
    $('#day1').text(dayjs().add(1,'day').format('M/D/YYYY'));
    $('#day2').text(dayjs().add(2,'day').format('M/D/YYYY'));
    $('#day3').text(dayjs().add(3,'day').format('M/D/YYYY'));
    $('#day4').text(dayjs().add(4,'day').format('M/D/YYYY'));
    $('#day5').text(dayjs().add(5,'day').format('M/D/YYYY'));
});