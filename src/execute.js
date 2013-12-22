(function(){
    var q = document.querySelectorAll.bind(document);
    var details = document.URL;
    var waypoints = q('.first-line');
    var text = waypoints[0].innerText + ' → ' + waypoints[waypoints.length-3].innerText;
    var z = function(x) { return ('00'+x).slice(-2);};
    var t = function(year, month, day, hours, minutes) {var d = new Date(year, month - 1, day, hours, minutes, 0, 0); return d.getUTCFullYear()+z(d.getUTCMonth()+1)+z(d.getUTCDate())+'T'+z(d.getUTCHours())+z(d.getUTCMinutes())+'00Z';};
    var month_date = q('.date-picker>span')[0].innerText.split(/[月日]/);
    var today = new Date();
    var year = today.getFullYear();
    if (month_date[0] < today.getMonth() + 1) { year += 1;}
    var b = q('.trip.selected .transit-time');
    var start_hours_minute = b[0].innerText.split(':');
    var end_hours_minute = b[1].innerText.split(':');
    var dates = t(year, month_date[0], month_date[1], start_hours_minute[0], start_hours_minute[1]) + '/' + t(year, month_date[0], month_date[1], end_hours_minute[0], end_hours_minute[1]);
    var e = encodeURIComponent;
    var href = 'http://www.google.com/calendar/event?action=TEMPLATE&text='+e(text)+'&dates='+dates+'&details='+e(details)+'&location=&trp=true';
    window.open(href);
}());
