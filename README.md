# ממיר משקלים

### במסגרת קורס פולסטאק במכללת האקריו ולימודי הנדסה בעברי בניתי פרויקט אישי זה 
- הפרויקט כתוב ב-HTML, CSS ו-JavaScript
- את מידות ההמרה למדתי בעברי ולוידוא בדקתי בגוגל
- המידות מדויקות עד שתי ספרות אחרי הנקודה, אנחנו פיזיקאים ולא מתמטיקאים ;-)

weightConverter.js
```js
let convertFromKg = () => {
  let kg = kgRef.value;
  //toFixed(2) limits the decimals to 2 digits.
  lbRef.value = (kg * 2.205).toFixed(2);
  ozRef.value = (kg * 35.274).toFixed(2);
};
```

## עיצוב
- העיצוב הינו של טופס מעוצב בצורה חלקה, כותרת מעל לכל שדה הצבה, ממורכז במרכז המסך, צבוע בצבעי בסיס - שחור ולבן אך מאוד אינטואטיבי למטרת האפליקציה
- החישוב מתבצע באופן אוטומטי לכל שדה חיפוש.
- 
## פונקציונליות 
הדרישה מהמשתמש הינה לכתוב בשורת הכתיבה לכל מידה התחלתית רצויה ערך מספרי רצוי<BR>
לאחר מכן יוצגו שתי המרות האחרות בין קילוגרם פאונד ואונקייה<BR>
מצד מפתח הפרונט בניתי את העיצוב מבחינת html&css ואת הפונקציונליות בניתי בקובץ הJavaScript בעצמי