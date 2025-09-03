# ⚖️ המרת משקלות - Weight Converter

> **פרויקט מעוצב מחדש** - ממיר משקלים מודרני עם עיצוב Glass Morphism

## 🌟 תכונות עיקריות

### 💫 עיצוב מודרני
- **Glass Morphism Design** - עיצוב זכוכית מודרני עם שקיפות ו-blur effects
- **גרדיאנט צבעוני** - רקע מעורר השראה עם מעברי צבעים חלקים
- **אנימציות חלקות** - מעברים ואפקטים חזותיים מרהיבים
- **רספונסיבי מלא** - מתאים לכל הגדלי מסכים

### 🔧 פונקציונליות משופרת
- המרה אוטומטית בזמן אמת בין יחידות משקל
- תמיכה במספרים עשרוניים עד 3 ספרות אחרי הנקודה
- בדיקת שגיאות וולידציה של נתונים
- אפקטים חזותיים בעת עדכון ערכים

### 🌍 נגישות
- תמיכה בעברית ובכיווניות RTL
- תוויות נגישות לקוראי מסך
- Placeholder טקסט מנחה למשתמש

## 🛠️ טכנולוגיות

- **HTML5** - מבנה סמנטי ונגיש
- **CSS3** - עיצוב מתקדם עם Glass Morphism
- **Vanilla JavaScript** - לוגיקה נקייה ומהירה

## 📱 תמיכה רספונסיבית

```css
@media screen and (max-width: 768px) {
  .container {
    margin: 10px;
    padding: 2rem;
    max-width: 100%;
  }
}
```

## ⚙️ כיצד זה עובד

```javascript
const convertFromKg = () => {
  const kg = parseFloat(kgRef.value);
  
  if (isNaN(kg) || kg < 0) {
    lbRef.value = "";
    ozRef.value = "";
    return;
  }
  
  // המרה מדויקת עם 3 ספרות עשרוניות
  lbRef.value = (kg * 2.20462).toFixed(3);
  ozRef.value = (kg * 35.274).toFixed(3);
};
```

## 🎨 פלטת הצבעים

- **Primary Gradient**: `#667eea` → `#764ba2`
- **Glass Effect**: `rgba(255, 255, 255, 0.95)`
- **Shadow**: `rgba(102, 126, 234, 0.25)`

## 🚀 השקה מקומית

פתח את `weightConverter.html` בדפדפן לחוויית השימוש המלאה.

---

**פותח על ידי Aviv Elany** | במסגרת קורס FullStack במכללת האקריה