//convert 12 hour time to 24 hour format

function convertTime12to24(s) {
  s = (!s) ? '' : s?.toLowerCase();
  // Write your code here
 const arr = s.split(":");
 if(!arr[1].includes("am")) {
  return s;
 }
 const isAM = arr[1].includes("am")
 if (isAM) {
    arr[0]=arr[0].padStart(2, '0');
    arr[1]=arr[1].replace("am","");
      if(arr[0]==="12")  arr[0] ="00"

  } else{
      arr[0]=(+arr[0]+12).toString();
      arr[1]=arr[1].replace("pm","");
      if(arr[0] === "24")  arr[0] = "12"
  }
  return(arr.join(":"))
}

//convert 24 hour format to 12 hour format

function convertTime24to12(time24h) {
  let time = time24h
    .toString()
    .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time24h];

  if (time.length > 1) {
    time = time.slice(1, -1);
    time[5] = +time[0] < 12 ? ' am' : ' pm';
    time[0] = +time[0] % 12 || 12;
  }
  return time.join('');
}

//date in DD/MM/YYYY format

function getDate() {
  const date = (new Date()).toISOString().slice(0, 10).split("-").reverse().join("/");
  return date;
}

//format date from DD/MM/YYYY to YYYY-MM-DD

const formatDate = date => {
  const d = new Date(date)
  let month = (d.getMonth() + 1).toString()
  let day = d.getDate().toString()
  const year = d.getFullYear()
  if (month.length < 2) {
      month = '0' + month
  }
  if (day.length < 2) {
      day = '0' + day
  }
  return [ year, month, day ].join('-')
}

const new_format = formatDate('01/07/2022');
console.log('new_format', new_format);
