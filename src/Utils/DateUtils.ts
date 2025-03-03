export const formatDateString = (dateString: string): string => {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  const weekdays = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];
  const weekday = weekdays[date.getDay()];

  return `${year}년 ${month}월 ${day}일 ${weekday}`;
};

// 원래 날짜 형식:"2025-02-19 14:30:00", 여기서 날짜만 추출
export const getDateOnly = (dateString: string): string => {
  return dateString.split(" ")[0];
};

// "2025-02-19 14:30" 까지만 추출
export const getNotSeconds = (dateString: string): string => {
  const date = dateString.split(" ")[0];
  const time = dateString.split(" ")[1];
  const hour=time.split(":")[0];
  const minute = time.split(":")[1];
  
  return `${date} ${hour}:${minute}`;
};

// 시간만 추출
export const getTimeOnly = (dateString: string): string => {
  const time = dateString.split(" ")[1];
  const hour = parseInt(time.split(":")[0], 10);
  const minute = time.split(":")[1];

  if (hour > 12) {
    return `오후 ${hour - 12}:${minute}`;
  } else if (hour === 12) {
    return `오후 ${hour}:${minute}`;
  } else if (hour === 0) {
    return `오전 12:${minute}`;
  } else {
    return `오전 ${hour}:${minute}`;
  }
};
