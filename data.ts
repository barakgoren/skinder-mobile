import { images } from "./constants"

export const data = [
    {
        id: 1,
        resortName: "ואל טורנס",
        country: "צרפת",
        description: "ואל טורנס הוא אתר סקי בעמק טרנטז, סבואה, האלפים הצרפתיים, בגובה של 2,300 מטרים (7,500 רגל). זהו אתר הסקי הגבוה ביותר באירופה, הנקודה הגבוהה ביותר באזור הסקי של 3 העמקים. הוא ממוקם בקומונה של סן-מרטן-דה-בלוויל במחוז סבואה. האתר הוא חלק מעמק בלוויל, שמחובר לעמקים של מריבל וקורשבל. עמק בלוויל הוא יעד סקי מרכזי באלפים, אזור הסקי המחובר הגדול ביותר בעולם.",
        coverImage: require("./assets/images/covers/vt-cover.jpg"),
        logo: require("./assets/images/logos/vt-logo.png"),
    },
    {
        id: 2,
        resortName: "אישגל",
        country: "אוסטריה",
        description: "אישגל הוא עיירה בעמק פזנאון במדינת טירול האוסטרית. אתר הסקי שלה, סילברטה ארנה אישגל-סמנהון, מחובר לאתר הסקי של סמנהון מעבר לגבול בשווייץ. יחד, אזור הסקי הזה שייך לאתרי הסקי הגדולים ביותר באלפים. יש בו 238 קמ של מסלולים מטופחים המשרתים מעל 45 מעליות מכניות כולל רכבלים, גונדולות, מעליות כיסא ניתקות וכמה מעליות T.",
        coverImage: require("./assets/images/covers/ischglcover.jpg"),
        logo: require("./assets/images/logos/Ischgllogo.png"),
    },
    {
        id: 3,
        resortName: "ויסלר",
        country: "קנדה",
        description: "ויסלר בלקומב הוא אתר סקי מרכזי הממוקם 121 קמ צפונית לוונקובר, בקולומביה הבריטית, קנדה. לפי מדדים רבים, זהו אתר הסקי הגדול ביותר בצפון אמריקה ויש לו את קיבולת ההרמה הגדולה ביותר. הוא כולל את גונדולת פיק 2 פיק למעבר בין הר ויסלר להר בלקומב בפסגה.",
        coverImage: require("./assets/images/covers/isch-cover.jpeg"),
        logo: require("./assets/images/logos/whistlerlogo.png"),
    },
    {
        id: 4,
        resortName: "בנסקו",
        country: "בולגריה",
        description: "בנסקו היא עיירה בדרום מערב בולגריה, הממוקמת למרגלות הרי פירין בגובה של 927 מטרים מעל פני הים. זהו אתר סקי פופולרי.",
        coverImage: require("./assets/images/covers/banskocover.jpg"),
        logo: require("./assets/images/logos/banskologo.png"),
    }
]

export const schools = [
    {
        id: 1,
        name: "אקדמית סקי וואל טורנס",
        description: "אקדמית סקי וואל טורנס היא אקדמיה ללימודי סקי בוואל טורנס, צרפת. האקדמיה מציעה קורסים לכל הרמות, מהמתחילים ועד לרמות המתקדמות ביותר.",
        coverImage: images.SC1,
    },
    {
        id: 2,
        name: "אקדמית סקי אישגל",
        description: "אקדמית סקי אישגל היא אקדמיה ללימודי סקי באישגל, אוסטריה. האקדמיה מציעה קורסים לכל הרמות, מהמתחילים ועד לרמות המתקדמות ביותר.",
        coverImage: images.SC2,
    },
    {
        id: 3,
        name: "אקדמית סקי ויסלר",
        description: "אקדמית סקי ויסלר היא אקדמיה ללימודי סקי בויסלר, קנדה. האקדמיה מציעה קורסים לכל הרמות, מהמתחילים ועד לרמות המתקדמות ביותר.",
        coverImage: images.SC3,
    },
    {
        id: 4,
        name: "אקדמית סקי בנסקו",
        description: "אקדמית סקי בנסקו היא אקדמיה ללימודי סקי בבנסקו, בולגריה. האקדמיה מציעה קורסים לכל הרמות, מהמתחילים ועד לרמות המתקדמות ביותר.",
        coverImage: images.SC4,
    }
]

export const countries = [
    {
        isoCode: "FR",
        name: "צרפת",
    },
    {
        isoCode: "AT",
        name: "אוסטריה",
    },
    {
        isoCode: "CA",
        name: "קנדה",
    },
    {
        isoCode: "BG",
        name: "בולגריה",
    },
    {
        isoCode: "IT",
        name: "איטליה",
    },
    {
        isoCode: "CH",
        name: "שוויץ",
    },
    {
        isoCode: "US",
        name: "ארצות הברית",
    },
    {
        isoCode: "JP",
        name: "יפן",
    },
    {
        isoCode: "RU",
        name: "רוסיה",
    },
    {
        isoCode: "DE",
        name: "גרמניה",
    },
    {
        isoCode: "SE",
        name: "שוודיה",
    },
    {
        isoCode: "FI",
        name: "פינלנד",
    },
    {
        isoCode: "NO",
        name: "נורווגיה",
    },
    {
        isoCode: "KR",
        name: "קוריאה",
    },
    {
        isoCode: "AU",
        name: "אוסטרליה",
    },
    {
        isoCode: "NZ",
        name: "ניו זילנד",
    },
    {
        isoCode: "CL",
        name: "צ'ילה",
    },
    {
        isoCode: "AR",
        name: "ארגנטינה",
    },
    {
        isoCode: "ZA",
        name: "דרום אפריקה",
    },
    {
        isoCode: "BR",
        name: "ברזיל",
    },
    {
        isoCode: "MX",
        name: "מקסיקו",
    },
    {
        isoCode: "TH",
        name: "תאילנד",
    },
]