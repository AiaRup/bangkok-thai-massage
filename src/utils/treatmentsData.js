import oilImage from '../images/oil-image.jpg';
import footImage from '../images/treatments/foot-massage.jpg';
import stonesImage from '../images/treatments/stones-massage.jpg';
import backImage from '../images/back-image.jpg';

export const treatments = [
  {
    enName: 'Oil / Thai Massage',
    heName: 'עיסוי שמנים/ עיסוי תאילנדי מסורתי',
    treatData:
      'העיסוי התאילנדי כולל מתיחות ולחיצות ברקמות השונות ונועד בעיקר לאנשים שמרגישים שהגוף שלהם תפוס, זקוק למתיחות/שחרור השרירים באיזורים שונים בגוף או למי שסובל מכאבים שונים. עיסוי שמנים נועד לשחרור הגוף והרפייתו, הוא יותר עדין מהעיסוי התאילנדי ונועד לאנשים שרוצים להירגע. ניתן לבקש עיסוי משולב עם אלמנטים   שונים מהעיסוי התאילנדי ועיסוי השמנים ',
    prices: [
      { min: '50 min', price: '220' },
      { min: '60 min', price: '250' },
      { min: '75 min', price: '290' },
      { min: '90 min', price: '330' },
      { min: '120 min', price: '440' }
    ],
    image: oilImage
  },
  {
    enName: 'Foot Massage',
    heName: 'עיסוי כפות רגליים',
    treatData:
      'עיסוי כפות רגליים מסייע לשחרור מתחים והרגעת הגוף שיכולים להביא לשינה טובה יותר ותחושה של חידוש אנרגיות. שחרור המתחים יכול להביא לזרימת דם טובה יותר, ובכך הזרמת חמצן לאיברים, סילוק רעלים מהגוף ולחיזוק המערכת החיסונית',
    prices: [
      { min: '30 min', price: '120' },
      { min: '50 min', price: '190' },
      { min: '60 min', price: '220' }
    ],
    image: footImage
  },
  {
    enName: 'Neck | Sholders | Back',
    heName: 'עיסוי גב | כתפיים | צוואר',
    treatData:
      'עיסוי משולב המתרכז באיזור הגוף העליון- גב, כתפיים וצוואר. מיועד לאנשים שיושבים הרבה במסגרת עבודתם או לאנשים עם כאבים ומתחים באיזור זה. העיסוי מאפשר שחרור השרירים, הפגת כאבים והרפייה',
    prices: [
      { min: '30 min', price: '150' },
      { min: '50 min', price: '200' },
      { min: '60 min', price: '230' }
    ],
    image: backImage
  },
  {
    enName: 'Hot Stones & Herbs Massage',
    heName: 'עיסוי אבנים חמות וצמחי מרפא',
    treatData:
      'עיסוי אבנים חמות משמש להרגעת הגוף, שחרור השרירים וטיפול ברקמות שונות בגוף. במהלך העיסוי משתמשים באבני בזלת חמות, אותם מניחים באיזורים ספציפיים בגוף כמו מרכזי האנרגיה. בעיסוי זה משלבים צמחי מרפא הנמצאים בשקיקים מחוממים העשויים מבד, המאפשרים לסייע עם בעיות עור, להפיג מתחים ולטפל בכאבים ובדלקות',
    prices: [
      { min: '60 min', price: '280' },
      { min: '75 min', price: '330' },
      { min: '90 min', price: '380' }
    ],
    image: stonesImage
  }
];
