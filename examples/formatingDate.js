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
