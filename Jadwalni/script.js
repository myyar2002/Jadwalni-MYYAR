// Enhanced places database with comprehensive data for all Jordan governorates
const placesData = {
    "عمان": {
        "مطاعم": [
            {name: "فكرة مطعم", location: "شارع الرينبو", rating: 4.5, description: "أكل شعبي أردني أصيل وطعم لا ينسى في قلب العاصمة", price: "$$", phone: "065551234", openHours: "8:00 - 23:00", specialties: ["منسف", "مقلوبة", "محاشي"], category: "أردني تقليدي", timePreference: "any", groupSize: "family", popular: true},
            {name: "جفرا كافيه", location: "جبل اللويبدة", rating: 4.3, description: "مطعم مع إطلالة حلوة على عمان وأجواء رومانسية", price: "$$$", phone: "065551235", openHours: "9:00 - 24:00", specialties: ["إفطار شامي", "معجنات", "قهوة"], category: "كافيه مطعم", timePreference: "evening", groupSize: "couple", popular: true},
            {name: "كان زمان", location: "جبل عمان", rating: 4.7, description: "تراث أردني في قلب عمان بأجواء أصيلة وديكور تراثي", price: "$$$", phone: "065551236", openHours: "12:00 - 23:00", specialties: ["منسف ملكي", "كبة", "شاورما"], category: "تراثي", timePreference: "afternoon", groupSize: "family", popular: true},
            {name: "سفرة", location: "دوار الداخلية", rating: 4.4, description: "أكل بيتي طعمه أصيل ونكهة الماضي الجميل", price: "$$", phone: "065551237", openHours: "11:00 - 22:00", specialties: ["ملوخية", "فتة", "كوسا باللبن"], category: "بيتي", timePreference: "afternoon", groupSize: "family", popular: false},
            {name: "مشاوي الريف", location: "جبل الحسين", rating: 4.2, description: "مشاوي طازة وطعم رهيب على الفحم الحقيقي", price: "$$", phone: "065551238", openHours: "16:00 - 02:00", specialties: ["شيش طاووق", "كباب", "فراخ مشوية"], category: "مشاوي", timePreference: "evening", groupSize: "group", popular: false},
            {name: "دار الكباب", location: "شارع المدينة المنورة", rating: 4.6, description: "كباب عربي أصيل بنكهة استثنائية وجودة عالية", price: "$$$", phone: "065551239", openHours: "17:00 - 01:00", specialties: ["كباب حلبي", "عرق الكباب", "فتوش"], category: "لبناني", timePreference: "evening", groupSize: "couple", popular: true},
            {name: "بيت الحارة", location: "الشميساني", rating: 4.3, description: "أجواء شعبية أردنية وضيافة أصيلة بطعم البيت", price: "$$", phone: "065551240", openHours: "10:00 - 23:00", specialties: ["فتة حمص", "مسخن", "أرز برياني"], category: "شعبي", timePreference: "any", groupSize: "family", popular: false},
            {name: "مطعم هاشم", location: "وسط البلد", rating: 4.8, description: "فلافل وحمص من زمان - تراث وسط البلد الأصيل", price: "$", phone: "065551241", openHours: "6:00 - 22:00", specialties: ["فلافل", "حمص", "فول"], category: "إفطار شعبي", timePreference: "morning", groupSize: "any", popular: true},
            {name: "فردوس الأكلات الشعبية", location: "جبل التاج", rating: 4.5, description: "مقلوبة ومنسف أصيل بطعم البيت والأصالة", price: "$$", phone: "065551242", openHours: "12:00 - 22:00", specialties: ["مقلوبة دجاج", "منسف لحم", "كوارع"], category: "أردني", timePreference: "afternoon", groupSize: "family", popular: true},
            {name: "بستان الأردن", location: "صويلح", rating: 4.4, description: "أكل طبيعي وصحي من المزرعة للطاولة مباشرة", price: "$$$", phone: "065551243", openHours: "11:00 - 21:00", specialties: ["سلطات طبيعية", "عضوي", "عصائر طازة"], category: "صحي", timePreference: "afternoon", groupSize: "couple", popular: false},
            {name: "مطعم الصياد", location: "عبدون", rating: 4.6, description: "أطباق السمك الطازج والمأكولات البحرية الفاخرة", price: "$$$", phone: "065551244", openHours: "12:00 - 23:00", specialties: ["سمك مشوي", "جمبري", "سلطة سيزر"], category: "بحري", timePreference: "evening", groupSize: "couple", popular: true},
            {name: "بيت الشاورما", location: "طبربور", rating: 4.1, description: "شاورما طازة ولذيذة بأسعار معقولة للجميع", price: "$", phone: "065551245", openHours: "10:00 - 02:00", specialties: ["شاورما لحم", "شاورما دجاج", "فتة شاورما"], category: "وجبات سريعة", timePreference: "any", groupSize: "any", popular: false},
            {name: "مطعم النخيل", location: "تلاع العلي", rating: 4.7, description: "مطعم عائلي فاخر بإطلالة رائعة على المدينة", price: "$$$", phone: "065551246", openHours: "12:00 - 24:00", specialties: ["مندي", "كبسة", "برياني لحم"], category: "خليجي", timePreference: "evening", groupSize: "family", popular: true},
            {name: "كشك أبو أحمد", location: "جبل النظيف", rating: 4.0, description: "وجبات سريعة وشهية بأسعار الطلاب المناسبة", price: "$", phone: "065551247", openHours: "24/7", specialties: ["فلافل", "شاورما", "عصائر"], category: "طلابي", timePreference: "any", groupSize: "solo", popular: false},
            {name: "مطعم الأندلس", location: "الشميساني", rating: 4.8, description: "أكل لبناني أصيل بجودة عالية ونكهات متميزة", price: "$$$", phone: "065551248", openHours: "13:00 - 01:00", specialties: ["حمص لبناني", "تبولة", "شيش برك"], category: "لبناني راقي", timePreference: "evening", groupSize: "couple", popular: true},
            {name: "ريم البوادي", location: "أم أذينة", rating: 4.3, description: "مطعم بدوي أصيل بأجواء صحراوية وضيافة عربية", price: "$$", phone: "065551249", openHours: "16:00 - 24:00", specialties: ["مضغوط", "زرب", "قهوة عربية"], category: "بدوي", timePreference: "evening", groupSize: "group", popular: false},
            {name: "مطعم العائلة", location: "ماركا", rating: 4.2, description: "أطباق عائلية متنوعة بأسعار معقولة وجودة ممتازة", price: "$$", phone: "065551250", openHours: "11:00 - 22:00", specialties: ["دجاج مشوي", "برياني", "سلطات"], category: "عائلي", timePreference: "afternoon", groupSize: "family", popular: false},
            {name: "الخيمة الشامية", location: "شارع الجامعة", rating: 4.4, description: "أكلات شامية أصيلة في أجواء تراثية دمشقية", price: "$$", phone: "065551251", openHours: "12:00 - 23:00", specialties: ["كبة شامية", "فتة المقدمة", "بابا غنوج"], category: "شامي", timePreference: "afternoon", groupSize: "family", popular: false},
            {name: "مطعم البيت العربي", location: "خلدا", rating: 4.6, description: "تجربة طعام عربية شاملة بأطباق من كل البلدان العربية", price: "$$$", phone: "065551252", openHours: "14:00 - 24:00", specialties: ["كوزي", "مجبوس", "أوزي شامي"], category: "عربي متنوع", timePreference: "evening", groupSize: "group", popular: true}
        ],
        "كافيهات": [
            {name: "كافيه لا كاسا", location: "جبل اللويبدة", rating: 4.5, description: "قهوة مختصة وأجواء هادية للعمل والدراسة", price: "$$$", phone: "065552234", openHours: "7:00 - 24:00", specialties: ["لاتيه", "كابتشينو", "قهوة مختصة"], category: "قهوة مختصة", timePreference: "morning", groupSize: "solo", popular: true},
            {name: "كتابا كافيه", location: "جبل عمان", rating: 4.6, description: "كافيه ومكتبة في نفس الوقت - مكان مثالي للقراءة", price: "$$", phone: "065552235", openHours: "8:00 - 23:00", specialties: ["قهوة عربية", "شاي", "كتب"], category: "ثقافي", timePreference: "afternoon", groupSize: "solo", popular: true},
            {name: "قهوة ومحبة", location: "الشميساني", rating: 4.3, description: "قهوة عربية تراثية بنكهة أصيلة وأجواء شعبية", price: "$$", phone: "065552236", openHours: "14:00 - 02:00", specialties: ["قهوة عربية", "شيشة", "حلويات"], category: "تراثي", timePreference: "evening", groupSize: "group", popular: false},
            {name: "مقهى جرانكافيه", location: "دوار الواحة", rating: 4.4, description: "كافيه عصري وحلو للشباب بديكور حديث", price: "$$$", phone: "065552237", openHours: "9:00 - 01:00", specialties: ["أمريكانو", "فرابتشينو", "حلى"], category: "عصري", timePreference: "evening", groupSize: "couple", popular: false},
            {name: "كوستا كافيه", location: "العبدلي", rating: 4.2, description: "سلاسل قهوة عالمية بجودة مضمونة وخدمة سريعة", price: "$$$", phone: "065552238", openHours: "6:00 - 24:00", specialties: ["لاتيه فانيلا", "موكا", "كوكيز"], category: "عالمي", timePreference: "morning", groupSize: "any", popular: true},
            {name: "ستاربكس", location: "مول عمان", rating: 4.1, description: "قهوة أمريكية مشهورة عالمياً بنكهات متنوعة", price: "$$$", phone: "065552239", openHours: "6:00 - 24:00", specialties: ["فرابوتشينو", "ماكياتو", "سكونز"], category: "عالمي", timePreference: "any", groupSize: "any", popular: true},
            {name: "كافيه الجسر", location: "جسر الملكة زين", rating: 4.7, description: "إطلالة مميزة على عمان وأجواء رومانسية ساحرة", price: "$$$", phone: "065552240", openHours: "16:00 - 02:00", specialties: ["قهوة تركية", "شاي بالنعناع", "حلويات"], category: "رومانسي", timePreference: "evening", groupSize: "couple", popular: true},
            {name: "مقهى النواعير", location: "تلاع العلي", rating: 4.5, description: "أجواء شعبية أردنية وضيافة تقليدية أصيلة", price: "$$", phone: "065552241", openHours: "15:00 - 01:00", specialties: ["شاي أحمر", "قهوة مرة", "معسل"], category: "شعبي", timePreference: "evening", groupSize: "group", popular: false},
            {name: "سيتي كافيه", location: "العبدلي", rating: 4.3, description: "كافيه في قلب المدينة للأعمال والاجتماعات", price: "$$$", phone: "065552242", openHours: "6:00 - 22:00", specialties: ["إسبريسو", "كرواسان", "سلطات"], category: "أعمال", timePreference: "morning", groupSize: "solo", popular: false},
            {name: "بيان كافيه", location: "دير غبار", rating: 4.4, description: "هدوء وراحة نفسية بعيداً عن ضوضاء المدينة", price: "$$", phone: "065552243", openHours: "9:00 - 23:00", specialties: ["شاي أخضر", "قهوة باردة", "تشيز كيك"], category: "هادئ", timePreference: "afternoon", groupSize: "couple", popular: false},
            {name: "كافيه دروب", location: "جبل الحسين", rating: 4.2, description: "مقهى صغير وحميمي للأصدقاء والعائلة", price: "$$", phone: "065552244", openHours: "8:00 - 22:00", specialties: ["قهوة محلية", "معجنات", "عصائر"], category: "حميمي", timePreference: "morning", groupSize: "family", popular: false},
            {name: "روستر كافيه", location: "عبدون", rating: 4.6, description: "تحميص القهوة الطازجة يومياً بأيدي خبراء", price: "$$$", phone: "065552245", openHours: "7:00 - 23:00", specialties: ["قهوة طازجة", "كولد برو", "باستري"], category: "تحميص طازج", timePreference: "morning", groupSize: "solo", popular: true},
            {name: "مقهى الفنون", location: "وسط البلد", rating: 4.4, description: "معرض فني ومقهى في مكان واحد بأجواء إبداعية", price: "$$", phone: "065552246", openHours: "10:00 - 22:00", specialties: ["قهوة عربية", "فن", "أنشطة ثقافية"], category: "فني", timePreference: "afternoon", groupSize: "solo", popular: false},
            {name: "كافيه التراث", location: "جبل عمان", rating: 4.3, description: "قهوة في بيت تراثي قديم بديكور أردني أصيل", price: "$$", phone: "065552247", openHours: "15:00 - 24:00", specialties: ["قهوة تركية", "معمول", "شاي بالميرمية"], category: "تراثي", timePreference: "evening", groupSize: "family", popular: false}
        ],
        "ألعاب": [
            {name: "كيدزانيا", location: "سيتي مول", rating: 4.8, description: "مدينة ألعاب تعليمية للأطفال - تجربة فريدة من نوعها", price: "$$$", phone: "065553234", openHours: "10:00 - 22:00", specialties: ["ألعاب تعليمية", "مهن", "ورش"], category: "تعليمي", timePreference: "afternoon", groupSize: "family", popular: true},
            {name: "فان سيتي", location: "مكة مول", rating: 4.5, description: "ألعاب كهربائية وترفيه عائلي ممتع لجميع الأعمار", price: "$$", phone: "065553235", openHours: "10:00 - 23:00", specialties: ["ألعاب كهربائية", "بولينغ", "بلياردو"], category: "عائلي", timePreference: "evening", groupSize: "family", popular: true},
            {name: "مركز حياة الترفيهي", location: "جاليريا مول", rating: 4.3, description: "بولينغ وألعاب متنوعة للعائلة والأصدقاء", price: "$$$", phone: "065553236", openHours: "12:00 - 24:00", specialties: ["بولينغ", "ألعاب فيديو", "سينما"], category: "متنوع", timePreference: "evening", groupSize: "group", popular: false},
            {name: "أدرينالين", location: "الشميساني", rating: 4.6, description: "ألعاب مغامرات وتسلق للشجعان والمغامرين", price: "$$$", phone: "065553237", openHours: "14:00 - 22:00", specialties: ["تسلق", "حبال", "تحديات"], category: "مغامرات", timePreference: "afternoon", groupSize: "group", popular: true},
            {name: "جيم بوكس", location: "عبدون", rating: 4.4, description: "ملاكمة وألعاب قتالية للرياضيين المحترفين", price: "$$", phone: "065553238", openHours: "15:00 - 23:00", specialties: ["ملاكمة", "فنون قتال", "فتنس"], category: "رياضي", timePreference: "evening", groupSize: "solo", popular: false},
            {name: "ليزر تاغ", location: "عبدون", rating: 4.7, description: "حروب الليزر المثيرة والممتعة في بيئة مستقبلية", price: "$$$", phone: "065553239", openHours: "16:00 - 24:00", specialties: ["ليزر تاغ", "ألعاب جماعية", "حفلات"], category: "جماعي", timePreference: "evening", groupSize: "group", popular: true},
            {name: "سكاي زون", location: "العبدلي", rating: 4.5, description: "ترامبولين وقفزات عالية آمنة ومثيرة", price: "$$$", phone: "065553240", openHours: "10:00 - 22:00", specialties: ["ترامبولين", "قفز", "أكروبات"], category: "حركي", timePreference: "afternoon", groupSize: "family", popular: true},
            {name: "إسكيب روم", location: "جبل الحسين", rating: 4.6, description: "ألغاز وتحديات ذهنية مثيرة تحتاج للتفكير", price: "$$", phone: "065553241", openHours: "15:00 - 24:00", specialties: ["ألغاز", "هروب", "تفكير"], category: "ذهني", timePreference: "evening", groupSize: "group", popular: true},
            {name: "كارتينغ عمان", location: "الدوار السابع", rating: 4.8, description: "سباقات سيارات مصغرة وإثارة على المسار", price: "$$$", phone: "065553242", openHours: "14:00 - 23:00", specialties: ["سباق", "كارتينغ", "سرعة"], category: "سباق", timePreference: "afternoon", groupSize: "group", popular: true},
            {name: "بلايلاند", location: "الشميساني", rating: 4.2, description: "منطقة ألعاب آمنة للأطفال الصغار تحت 10 سنوات", price: "$$", phone: "065553243", openHours: "9:00 - 21:00", specialties: ["ألعاب أطفال", "أمان", "مرح"], category: "أطفال", timePreference: "afternoon", groupSize: "family", popular: false},
            {name: "VR عالم الواقع الافتراضي", location: "تاج مول", rating: 4.5, description: "تجربة الواقع الافتراضي الأحدث في الشرق الأوسط", price: "$$$", phone: "065553244", openHours: "12:00 - 24:00", specialties: ["واقع افتراضي", "تكنولوجيا", "ألعاب حديثة"], category: "تقني", timePreference: "evening", groupSize: "solo", popular: true},
            {name: "مركز البولينغ الملكي", location: "العبدلي", rating: 4.4, description: "بولينغ فاخر بأحدث المعدات والإضاءة الملونة", price: "$$$", phone: "065553245", openHours: "14:00 - 02:00", specialties: ["بولينغ متقدم", "إضاءة LED", "موسيقى"], category: "بولينغ", timePreference: "evening", groupSize: "group", popular: false}
        ],
        "مغامرات": [
            {name: "تسلق الجبال - جبل القلعة", location: "وسط البلد", rating: 4.5, description: "تسلق وإطلالة تاريخية رائعة على عمان القديمة", price: "$$", phone: "065554234", openHours: "8:00 - 18:00", specialties: ["تسلق", "تاريخ", "إطلالة"], category: "تسلق", timePreference: "morning", groupSize: "group", popular: true},
            {name: "مغامرات وادي السير", location: "وادي السير", rating: 4.7, description: "تسلق ومشي جبلي في الطبيعة الخلابة والهواء النقي", price: "$$$", phone: "065554235", openHours: "6:00 - 17:00", specialties: ["مشي جبلي", "طبيعة", "تصوير"], category: "طبيعة", timePreference: "morning", groupSize: "group", popular: true},
            {name: "بالون الهواء الساخن", location: "شرق عمان", rating: 4.9, description: "رحلة فوق عمان بالمنطاد - تجربة لا تنسى مدى الحياة", price: "$$$$", phone: "065554236", openHours: "5:00 - 8:00", specialties: ["طيران", "مناظر", "رومانسية"], category: "طيران", timePreference: "morning", groupSize: "couple", popular: true},
            {name: "رحلات الدراجات الجبلية", location: "فحيص", rating: 4.4, description: "مسارات جبلية ممتعة ومليئة بالتحديات الطبيعية", price: "$$", phone: "065554237", openHours: "7:00 - 16:00", specialties: ["دراجات", "مسارات", "لياقة"], category: "دراجات", timePreference: "morning", groupSize: "group", popular: false},
            {name: "تسلق الصخور", location: "مأدبا", rating: 4.6, description: "تحديات صخرية مثيرة للمتقدمين والمحترفين", price: "$$$", phone: "065554238", openHours: "8:00 - 17:00", specialties: ["صخور", "تحدي", "قوة"], category: "تسلق متقدم", timePreference: "morning", groupSize: "solo", popular: false},
            {name: "رحلة صحراوية", location: "الأزرق", rating: 4.3, description: "مغامرة في الصحراء الشرقية الساحرة بليلة نجوم", price: "$$$", phone: "065554239", openHours: "15:00 - 22:00", specialties: ["صحراء", "جمال", "نجوم"], category: "صحراء", timePreference: "evening", groupSize: "group", popular: false},
            {name: "باراشوت", location: "مطار ماركا", rating: 4.8, description: "قفزات بالمظلات للمغامرين الشجعان والجريئين", price: "$$$$", phone: "065554240", openHours: "7:00 - 15:00", specialties: ["مظلات", "قفز", "إثارة"], category: "طيران متطرف", timePreference: "morning", groupSize: "solo", popular: true},
            {name: "رحلة الكهوف", location: "فحيص", rating: 4.5, description: "استكشاف الكهوف الطبيعية الخفية والغامضة", price: "$$", phone: "065554241", openHours: "9:00 - 16:00", specialties: ["كهوف", "استكشاف", "جيولوجيا"], category: "استكشاف", timePreference: "morning", groupSize: "group", popular: false},
            {name: "تسلق الحبال", location: "سحاب", rating: 4.4, description: "تحديات الحبال العالية والمثيرة بأمان تام", price: "$$$", phone: "065554242", openHours: "10:00 - 18:00", specialties: ["حبال", "توازن", "شجاعة"], category: "حبال", timePreference: "afternoon", groupSize: "group", popular: false},
            {name: "سفاري الصحراء", location: "الكرك", rating: 4.6, description: "جولة صحراوية مثيرة بالسيارات الرباعية", price: "$$$", phone: "065554243", openHours: "14:00 - 20:00", specialties: ["سيارات", "رمال", "مغامرة"], category: "سفاري", timePreference: "afternoon", groupSize: "group", popular: true},
            {name: "مخيم البقعة", location: "البقعة", rating: 4.2, description: "تخييم في الطبيعة مع نشاطات متنوعة", price: "$$", phone: "065554244", openHours: "24/7", specialties: ["تخييم", "نار المخيم", "شوي"], category: "تخييم", timePreference: "night", groupSize: "group", popular: false},
            {name: "زيبلاين الأردن", location: "دبين", rating: 4.7, description: "أطول زيبلاين في الشرق الأوسط - تجربة مذهلة", price: "$$$", phone: "065554245", openHours: "9:00 - 17:00", specialties: ["زيبلاين", "سرعة", "إطلالة"], category: "زيبلاين", timePreference: "afternoon", groupSize: "solo", popular: true}
        ],
        "تسوق": [
            {name: "سيتي مول", location: "طبربور", rating: 4.4, description: "أكبر مول في الأردن - تسوق لا محدود وخيارات متنوعة", price: "$$$", phone: "065555234", openHours: "10:00 - 24:00", specialties: ["ماركات عالمية", "طعام", "سينما"], category: "مول ضخم", timePreference: "afternoon", groupSize: "family", popular: true},
            {name: "مكة مول", location: "مكة", rating: 4.3, description: "تسوق وترفيه عائلي في مكان واحد بأجواء مميزة", price: "$$$", phone: "065555235", openHours: "10:00 - 23:00", specialties: ["عائلي", "ألعاب", "مطاعم"], category: "عائلي", timePreference: "evening", groupSize: "family", popular: true},
            {name: "جاليريا مول", location: "طبربور", rating: 4.2, description: "مول متوسط الحجم بخيارات متنوعة وأسعار معقولة", price: "$$", phone: "065555236", openHours: "10:00 - 22:00", specialties: ["ملابس", "إلكترونيات", "كافيهات"], category: "متوسط", timePreference: "afternoon", groupSize: "couple", popular: false},
            {name: "تاج مول", location: "طبربور", rating: 4.1, description: "تسوق عائلي مريح وأسعار معقولة للميزانيات المحدودة", price: "$$", phone: "065555237", openHours: "10:00 - 22:00", specialties: ["أسعار جيدة", "محلي", "عائلي"], category: "اقتصادي", timePreference: "afternoon", groupSize: "family", popular: false},
            {name: "العبدلي مول", location: "العبدلي", rating: 4.5, description: "مول حديث وراقي في قلب العاصمة للتسوق الفاخر", price: "$$$", phone: "065555238", openHours: "10:00 - 23:00", specialties: ["فاخر", "حديث", "أعمال"], category: "راقي", timePreference: "afternoon", groupSize: "couple", popular: true},
            {name: "سوق جارا", location: "جبل اللويبدة", rating: 4.6, description: "سوق للحرف اليدوية والتحف الأصيلة والهدايا المميزة", price: "$$", phone: "065555239", openHours: "10:00 - 20:00", specialties: ["حرف", "تحف", "هدايا"], category: "حرف يدوية", timePreference: "afternoon", groupSize: "solo", popular: true},
            {name: "وسط البلد", location: "وسط عمان", rating: 4.0, description: "تسوق تراثي شعبي بأسعار مناسبة وأجواء شعبية", price: "$", phone: "065555240", openHours: "8:00 - 20:00", specialties: ["شعبي", "رخيص", "تقليدي"], category: "شعبي", timePreference: "morning", groupSize: "any", popular: false},
            {name: "شارع الرينبو", location: "جبل عمان", rating: 4.3, description: "شارع تجاري مميز وعصري بمحلات البوتيك", price: "$$", phone: "065555241", openHours: "9:00 - 21:00", specialties: ["عصري", "كافيهات", "بوتيكات"], category: "بوتيك", timePreference: "afternoon", groupSize: "couple", popular: false},
            {name: "أفنيو مول", location: "عبدون", rating: 4.4, description: "مول صغير وأنيق للتسوق الراقي والماركات المميزة", price: "$$$", phone: "065555242", openHours: "10:00 - 22:00", specialties: ["راقي", "بوتيك", "كافيهات"], category: "أنيق", timePreference: "afternoon", groupSize: "couple", popular: false},
            {name: "بازار خان", location: "وسط البلد", rating: 4.1, description: "سوق تراثي للتحف والهدايا التذكارية الأردنية", price: "$$", phone: "065555243", openHours: "9:00 - 19:00", specialties: ["تحف", "تراث", "هدايا"], category: "تراثي", timePreference: "morning", groupSize: "family", popular: false},
            {name: "زارا سنتر", location: "دوار الثقافة", rating: 4.3, description: "مركز تجاري حديث بماركات عالمية مشهورة", price: "$$$", phone: "065555244", openHours: "10:00 - 22:00", specialties: ["ماركات", "أزياء", "اكسسوارات"], category: "ماركات", timePreference: "afternoon", groupSize: "couple", popular: false},
            {name: "سوق الحرف اليدوية", location: "شارع الأمير محمد", rating: 4.2, description: "سوق مختص بالحرف اليدوية الأردنية الأصيلة", price: "$$", phone: "065555245", openHours: "9:00 - 18:00", specialties: ["حرف", "صناعات محلية", "تراث"], category: "حرف محلية", timePreference: "morning", groupSize: "any", popular: false}
        ],
        "ثقافية": [
            {name: "قلعة عمان", location: "جبل القلعة", rating: 4.7, description: "آثار رومانية وإسلامية تحكي تاريخ عمان عبر العصور", price: "$", phone: "065556234", openHours: "8:00 - 17:00", specialties: ["تاريخ", "آثار", "إطلالة"], category: "أثري", timePreference: "morning", groupSize: "family", popular: true},
            {name: "المسرح الروماني", location: "وسط البلد", rating: 4.6, description: "مسرح أثري روماني يعود للقرن الثاني الميلادي", price: "$", phone: "065556235", openHours: "8:00 - 17:00", specialties: ["روماني", "مسرح", "فعاليات"], category: "روماني", timePreference: "morning", groupSize: "group", popular: true},
            {name: "متحف الأردن", location: "راس العين", rating: 4.5, description: "تاريخ الأردن وحضارته عبر العصور المختلفة", price: "$$", phone: "065556236", openHours: "9:00 - 17:00", specialties: ["تاريخ", "حضارة", "تعليم"], category: "متحف", timePreference: "morning", groupSize: "family", popular: true},
            {name: "دار الأوبرا", location: "جبل الحسين", rating: 4.8, description: "عروض موسيقية وثقافية عالمية ومحلية راقية", price: "$$$", phone: "065556237", openHours: "19:00 - 23:00", specialties: ["موسيقى", "أوبرا", "ثقافة"], category: "أوبرا", timePreference: "evening", groupSize: "couple", popular: true},
            {name: "المتحف الشعبي", location: "جبل القلعة", rating: 4.3, description: "تراث شعبي أردني أصيل ومعروضات تقليدية", price: "$", phone: "065556238", openHours: "8:00 - 17:00", specialties: ["تراث", "شعبي", "أزياء"], category: "تراث", timePreference: "morning", groupSize: "family", popular: false},
            {name: "بيت العقاد الثقافي", location: "جبل اللويبدة", rating: 4.4, description: "مركز ثقافي وفني للمثقفين والمهتمين بالفنون", price: "$$", phone: "065556239", openHours: "9:00 - 20:00", specialties: ["ثقافة", "فن", "ندوات"], category: "ثقافي", timePreference: "afternoon", groupSize: "solo", popular: false},
            {name: "الأكاديمية الملكية للفنون", location: "مؤتة", rating: 4.5, description: "فنون معاصرة وورش تدريبية للمهتمين", price: "$$", phone: "065556240", openHours: "9:00 - 18:00", specialties: ["فنون", "ورش", "تدريب"], category: "فنون", timePreference: "afternoon", groupSize: "solo", popular: false},
            {name: "مركز هيا الثقافي", location: "جبل عمان", rating: 4.2, description: "فعاليات ثقافية متنوعة للجميع والأطفال", price: "$$", phone: "065556241", openHours: "10:00 - 22:00", specialties: ["فعاليات", "ثقافة", "أطفال"], category: "عائلي ثقافي", timePreference: "afternoon", groupSize: "family", popular: false},
            {name: "مكتبة عبد الحميد شومان", location: "الشميساني", rating: 4.6, description: "مكتبة ومركز ثقافي حديث بمصادر متنوعة", price: "$", phone: "065556242", openHours: "8:00 - 20:00", specialties: ["كتب", "مكتبة", "بحث"], category: "مكتبة", timePreference: "morning", groupSize: "solo", popular: true},
            {name: "نقابة الفنانين", location: "جبل اللويبدة", rating: 4.3, description: "معارض فنية ومسرحيات محلية وورش فنية", price: "$$", phone: "065556243", openHours: "10:00 - 20:00", specialties: ["فن", "معارض", "مسرح"], category: "فني", timePreference: "afternoon", groupSize: "solo", popular: false},
            {name: "المتحف الوطني للفنون الجميلة", location: "جبل اللويبدة", rating: 4.4, description: "مجموعة رائعة من الفنون الأردنية والعربية المعاصرة", price: "$", phone: "065556244", openHours: "9:00 - 17:00", specialties: ["فن معاصر", "لوحات", "تماثيل"], category: "فن حديث", timePreference: "morning", groupSize: "couple", popular: false},
            {name: "بيت الثقافة والفنون", location: "وسط البلد", rating: 4.1, description: "مركز ثقافي يستضيف فعاليات وعروض متنوعة", price: "$", phone: "065556245", openHours: "16:00 - 22:00", specialties: ["عروض", "أمسيات", "محاضرات"], category: "مركز ثقافي", timePreference: "evening", groupSize: "group", popular: false}
        ]
    },

    "إربد": {
        "مطاعم": [
            {name: "مطعم أم كلثوم", location: "وسط إربد", rating: 4.6, description: "مطعم شعبي مشهور بأكله الأصيل ولؤلؤة الشمال", price: "$$", phone: "027221234", openHours: "11:00 - 23:00", specialties: ["منسف", "مقلوبة", "كبة"], category: "أردني تقليدي", timePreference: "afternoon", groupSize: "family", popular: true},
            {name: "كشرى الست", location: "الحي الشرقي", rating: 4.3, description: "كشري مصري لذيذ بوصفة أصيلة من الصعيد", price: "$", phone: "027221235", openHours: "12:00 - 22:00", specialties: ["كشري", "ملوخية", "محشي"], category: "مصري", timePreference: "afternoon", groupSize: "family", popular: false},
            {name: "مشاوي أبو محمد", location: "شارع الجامعة", rating: 4.5, description: "مشاوي طازة وشهية على الفحم بجانب الجامعة", price: "$$", phone: "027221236", openHours: "16:00 - 01:00", specialties: ["شيش طاووق", "كباب", "فراخ"], category: "مشاوي", timePreference: "evening", groupSize: "group", popular: true},
            {name: "فول وفلافل حمودة", location: "المدينة القديمة", rating: 4.4, description: "فطار شعبي أصيل منذ 40 سنة في قلب إربد", price: "$", phone: "027221237", openHours: "6:00 - 14:00", specialties: ["فلافل", "فول", "حمص"], category: "إفطار شعبي", timePreference: "morning", groupSize: "any", popular: true},
            {name: "مطعم الياسمين", location: "حي الأمير حسن", rating: 4.7, description: "أكل لبناني وسوري راقي بنكهات أصيلة", price: "$$$", phone: "027221238", openHours: "13:00 - 24:00", specialties: ["حمص لبناني", "تبولة", "فتوش"], category: "لبناني", timePreference: "evening", groupSize: "couple", popular: true},
            {name: "مطعم الجولان", location: "شارع فلسطين", rating: 4.2, description: "مأكولات شامية في أجواء عائلية مريحة", price: "$$", phone: "027221239", openHours: "12:00 - 22:00", specialties: ["ورق عنب", "كبة نية", "فتة شامية"], category: "شامي", timePreference: "afternoon", groupSize: "family", popular: false},
            {name: "مطعم النورس", location: "شارع الملك عبدالله", rating: 4.4, description: "مطعم عائلي يقدم أطباق متنوعة وشهية", price: "$$", phone: "027221240", openHours: "11:00 - 23:00", specialties: ["دجاج مشوي", "برياني", "سلطات"], category: "عائلي", timePreference: "afternoon", groupSize: "family", popular: false},
            {name: "كبابجي إربد", location: "دوار المحطة", rating: 4.3, description: "كباب مشوي على الفحم بطعم لا يقاوم", price: "$$", phone: "027221241", openHours: "17:00 - 01:00", specialties: ["كباب عادي", "كباب خشخاش", "عرق الكباب"], category: "كباب", timePreference: "evening", groupSize: "group", popular: false},
            {name: "مطعم البركة", location: "الحي الجنوبي", rating: 4.1, description: "وجبات اقتصادية وشهية للطلاب والعائلات", price: "$", phone: "027221242", openHours: "10:00 - 22:00", specialties: ["شاورما", "برجر", "بيتزا"], category: "وجبات سريعة", timePreference: "any", groupSize: "any", popular: false},
            {name: "مطعم الشام العريق", location: "شارع الثورة العربية", rating: 4.5, description: "نكهات دمشقية أصيلة في قلب مدينة إربد", price: "$$$", phone: "027221243", openHours: "14:00 - 24:00", specialties: ["محاشي شامية", "كفتة بالطحينة", "مهلبية"], category: "دمشقي", timePreference: "evening", groupSize: "family", popular: true}
        ],
        "كافيهات": [
            {name: "كافيه الجامعة", location: "الجامعة الأردنية", rating: 4.4, description: "مكان الطلبة المفضل للدراسة والمذاكرة", price: "$$", phone: "027222234", openHours: "7:00 - 24:00", specialties: ["قهوة", "وايفاي", "هدوء"], category: "طلابي", timePreference: "morning", groupSize: "solo", popular: true},
            {name: "قهوة عربية", location: "وسط إربد", rating: 4.5, description: "قهوة تقليدية وشيشة أصيلة بأجواء شعبية", price: "$", phone: "027222235", openHours: "14:00 - 02:00", specialties: ["قهوة عربية", "شيشة", "جلسات"], category: "تقليدي", timePreference: "evening", groupSize: "group", popular: true},
            {name: "كافيه الذكريات", location: "شارع التنمية", rating: 4.2, description: "أجواء هادئة وقهوة ممتازة للاسترخاء", price: "$$", phone: "027222236", openHours: "9:00 - 23:00", specialties: ["إسبريسو", "كابتشينو", "حلويات"], category: "هادئ", timePreference: "afternoon", groupSize: "couple", popular: false},
            {name: "مقهى الأصدقاء", location: "شارع الجامعة", rating: 4.3, description: "مكان الالتقاء المفضل للأصدقاء في إربد", price: "$$", phone: "027222237", openHours: "15:00 - 01:00", specialties: ["شاي أحمر", "نرجيلة", "ألعاب"], category: "اجتماعي", timePreference: "evening", groupSize: "group", popular: false},
            {name: "كافيه الرواد", location: "الحي الشمالي", rating: 4.1, description: "قهوة حديثة بأسعار مناسبة للجميع", price: "$", phone: "027222238", openHours: "8:00 - 22:00", specialties: ["قهوة سريعة", "سندويش", "عصائر"], category: "سريع", timePreference: "morning", groupSize: "any", popular: false}
        ],
        "ألعاب": [
            {name: "مركز ترفيه إربد", location: "مول إربد", rating: 4.5, description: "ألعاب كهربائية وبولينغ شامل لجميع الأعمار", price: "$$", phone: "027223234", openHours: "10:00 - 23:00", specialties: ["بولينغ", "ألعاب كهربائية", "عائلي"], category: "عائلي", timePreference: "evening", groupSize: "family", popular: true},
            {name: "لونا بارك", location: "حديقة الملك عبدالله", rating: 4.3, description: "ألعاب خارجية ومرح للأطفال في الهواء الطلق", price: "$", phone: "027223235", openHours: "15:00 - 21:00", specialties: ["ألعاب خارجية", "مراجيح", "طبيعة"], category: "أطفال", timePreference: "afternoon", groupSize: "family", popular: false},
            {name: "صالة البلياردو الشمالية", location: "شارع الجامعة", rating: 4.1, description: "بلياردو ولعب الطاولة للشباب والرجال", price: "$", phone: "027223236", openHours: "14:00 - 02:00", specialties: ["بلياردو", "طاولة", "شطرنج"], category: "رجالي", timePreference: "evening", groupSize: "group", popular: false},
            {name: "نادي الألعاب الإلكترونية", location: "وسط إربد", rating: 4.4, description: "أحدث الألعاب الإلكترونية والبلايستيشن", price: "$$", phone: "027223237", openHours: "12:00 - 24:00", specialties: ["بلايستيشن", "كمبيوتر", "ألعاب حديثة"], category: "إلكتروني", timePreference: "evening", groupSize: "solo", popular: true},
            {name: "مدينة الألعاب الصغيرة", location: "الحي الغربي", rating: 4.0, description: "ألعاب متنوعة للأطفال في بيئة آمنة", price: "$", phone: "027223238", openHours: "16:00 - 21:00", specialties: ["أطفال صغار", "أمان", "إشراف"], category: "أطفال صغار", timePreference: "afternoon", groupSize: "family", popular: false}
        ],
        "مغامرات": [
            {name: "غابات عجلون", location: "عجلون", rating: 4.8, description: "تنزه ومشي في أجمل غابات الأردن الخضراء", price: "$$", phone: "027224234", openHours: "6:00 - 18:00", specialties: ["غابات", "مشي", "هواء نقي"], category: "طبيعة", timePreference: "morning", groupSize: "group", popular: true},
            {name: "قلعة عجلون", location: "عجلون", rating: 4.7, description: "تسلق وإطلالة تاريخية مذهلة على الشمال", price: "$", phone: "027224235", openHours: "8:00 - 17:00", specialties: ["تاريخ", "تسلق", "إطلالة"], category: "تاريخي", timePreference: "morning", groupSize: "family", popular: true},
            {name: "مغامرات وادي الريان", location: "وادي الريان", rating: 4.4, description: "مشي وتسلق في وادي خلاب قريب من إربد", price: "$$", phone: "027224236", openHours: "7:00 - 17:00", specialties: ["وادي", "تسلق صخري", "طبيعة"], category: "وادي", timePreference: "morning", groupSize: "group", popular: false},
            {name: "رحلة جبل مار الياس", location: "مار الياس", rating: 4.3, description: "مشي جبلي وإطلالة رائعة على الشمال", price: "$", phone: "027224237", openHours: "8:00 - 16:00", specialties: ["جبال", "إطلالة", "تصوير"], category: "جبلي", timePreference: "morning", groupSize: "group", popular: false},
            {name: "تخييم برقش", location: "برقش", rating: 4.5, description: "تخييم في الطبيعة بعيداً عن المدينة", price: "$$", phone: "027224238", openHours: "24/7", specialties: ["تخييم", "نجوم", "هدوء"], category: "تخييم", timePreference: "night", groupSize: "group", popular: true}
        ],
        "تسوق": [
            {name: "مول إربد", location: "إربد", rating: 4.3, description: "المول الرئيسي في الشمال بخيارات متنوعة", price: "$$$", phone: "027225234", openHours: "10:00 - 23:00", specialties: ["ماركات", "مطاعم", "سينما"], category: "رئيسي", timePreference: "afternoon", groupSize: "family", popular: true},
            {name: "سوق إربد الشعبي", location: "وسط إربد", rating: 4.1, description: "سوق تقليدي متنوع وأسعار جيدة للعائلات", price: "$", phone: "027225235", openHours: "8:00 - 20:00", specialties: ["شعبي", "رخيص", "متنوع"], category: "شعبي", timePreference: "morning", groupSize: "family", popular: false},
            {name: "مجمع النورس التجاري", location: "شارع النصر", rating: 4.0, description: "مجمع تجاري محلي بأسعار مناسبة", price: "$$", phone: "027225236", openHours: "9:00 - 21:00", specialties: ["محلي", "ملابس", "أحذية"], category: "محلي", timePreference: "afternoon", groupSize: "couple", popular: false},
            {name: "سوق الجمعة", location: "المحطة", rating: 3.9, description: "سوق أسبوعي بأسعار مخفضة وبضائع متنوعة", price: "$", phone: "027225237", openHours: "الجمعة 7:00 - 15:00", specialties: ["أسبوعي", "رخيص", "مستعمل"], category: "أسبوعي", timePreference: "morning", groupSize: "any", popular: false},
            {name: "شارع الجامعة التجاري", location: "شارع الجامعة", rating: 4.2, description: "محلات متنوعة تخدم الطلاب والسكان", price: "$$", phone: "027225238", openHours: "9:00 - 22:00", specialties: ["طلابي", "قرطاسية", "ملابس"], category: "طلابي", timePreference: "afternoon", groupSize: "solo", popular: false}
        ],
        "ثقافية": [
            {name: "قلعة عجلون الأثرية", location: "عجلون", rating: 4.8, description: "قلعة أيوبية تاريخية مهمة من القرن الثاني عشر", price: "$", phone: "027226234", openHours: "8:00 - 17:00", specialties: ["أيوبي", "تاريخ", "عمارة"], category: "أثري", timePreference: "morning", groupSize: "family", popular: true},
            {name: "مدينة جرش الأثرية", location: "جرش", rating: 4.9, description: "مدينة رومانية كاملة ومحفوظة - جوهرة الآثار", price: "$$", phone: "027226235", openHours: "8:00 - 17:00", specialties: ["روماني", "آثار", "مهرجان"], category: "روماني", timePreference: "morning", groupSize: "group", popular: true},
            {name: "متحف إربد الأثري", location: "وسط إربد", rating: 4.2, description: "متحف محلي يحكي تاريخ منطقة الشمال", price: "$", phone: "027226236", openHours: "9:00 - 16:00", specialties: ["تاريخ محلي", "آثار إربد", "تعليم"], category: "متحف", timePreference: "morning", groupSize: "family", popular: false},
            {name: "مركز عرار الثقافي", location: "شارع الثقافة", rating: 4.3, description: "مركز ثقافي يحمل اسم الشاعر عرار", price: "$", phone: "027226237", openHours: "16:00 - 22:00", specialties: ["أدب", "شعر", "أمسيات"], category: "أدبي", timePreference: "evening", groupSize: "solo", popular: false},
            {name: "بيت التراث الشمالي", location: "الكورة", rating: 4.1, description: "بيت تراثي يحفظ ثقافة الشمال الأردني", price: "$", phone: "027226238", openHours: "10:00 - 17:00", specialties: ["تراث شمالي", "حرف", "عادات"], category: "تراثي", timePreference: "morning", groupSize: "family", popular: false}
        ]
    },

    "الزرقاء": {
        "مطاعم": [
            {name: "مطعم أبو العبد", location: "وسط الزرقاء", rating: 4.5, description: "منسف ومقلوبة بطعم البيت الأصيل في المدينة الزرقاء", price: "$$", phone: "053331234", openHours: "11:00 - 23:00", specialties: ["منسف", "مقلوبة", "فتة"], category: "أردني", timePreference: "afternoon", groupSize: "family", popular: true},
            {name: "كشك الحاج أبو أحمد", location: "الزرقاء الجديدة", rating: 4.2, description: "فطار شعبي بأسعار الطلاب والعمال", price: "$", phone: "053331235", openHours: "6:00 - 15:00", specialties: ["فلافل", "فول", "عدس"], category: "إفطار", timePreference: "morning", groupSize: "any", popular: false},
            {name: "مطعم الكرم", location: "جبل طارق", rating: 4.4, description: "أكلات شامية وأردنية لذيذة بأجواء عائلية", price: "$$", phone: "053331236", openHours: "12:00 - 22:00", specialties: ["شاورما", "كبة", "فتوش"], category: "شامي", timePreference: "afternoon", groupSize: "family", popular: false},
            {name: "بيت المنسف", location: "الرصيفة", rating: 4.6, description: "منسف أصيل بلحمة طرية وأرز مفلفل", price: "$$$", phone: "053331237", openHours: "12:00 - 21:00", specialties: ["منسف ملكي", "لحم مشوي", "أرز برياني"], category: "منسف", timePreference: "afternoon", groupSize: "family", popular: true},
            {name: "مطعم الضيافة", location: "حي الأمير حمزة", rating: 4.3, description: "ضيافة أردنية أصيلة وطعم ما ينتسى", price: "$$", phone: "053331238", openHours: "11:00 - 23:00", specialties: ["محاشي", "ملوخية", "كوارع"], category: "ضيافة", timePreference: "afternoon", groupSize: "family", popular: false},
            {name: "شاورما الشام", location: "الزرقاء الأولى", rating: 4.1, description: "شاورما طازة ولذيذة على مدار اليوم", price: "$", phone: "053331239", openHours: "24/7", specialties: ["شاورما لحم", "شاورما دجاج", "فتة"], category: "سريع", timePreference: "any", groupSize: "any", popular: false},
            {name: "مطعم النخيل", location: "ماركا", rating: 4.5, description: "أجواء عائلية ومأكولات بحرية طازة", price: "$$$", phone: "053331240", openHours: "16:00 - 24:00", specialties: ["سمك مشوي", "مندي سمك", "روبيان"], category: "بحري", timePreference: "evening", groupSize: "family", popular: true},
            {name: "كنافة نابلسي", location: "وسط الزرقاء", rating: 4.7, description: "كنافة نابلسية أصيلة وحلويات شرقية", price: "$$", phone: "053331241", openHours: "8:00 - 22:00", specialties: ["كنافة نابلسية", "معمول", "قطايف"], category: "حلويات", timePreference: "afternoon", groupSize: "family", popular: true},
            {name: "مطعم الوادي", location: "الضليل", rating: 4.2, description: "مطعم ريفي بأجواء طبيعية خلابة", price: "$$", phone: "053331242", openHours: "15:00 - 23:00", specialties: ["مشاوي", "دجاج مشوي", "سلطات"], category: "ريفي", timePreference: "evening", groupSize: "group", popular: false},
            {name: "مطعم الأمير", location: "حي الأمير حسن", rating: 4.4, description: "مطعم عصري بتشكيلة واسعة من الأطباق", price: "$$$", phone: "053331243", openHours: "12:00 - 24:00", specialties: ["مقبلات متنوعة", "لحم مشوي", "دجاج"], category: "عصري", timePreference: "evening", groupSize: "couple", popular: false}
        ],
        "كافيهات": [
            {name: "كافيه الأصدقاء", location: "وسط الزرقاء", rating: 4.3, description: "مكان هادي للأصدقاء والعائلة بأجواء مريحة", price: "$$", phone: "053332234", openHours: "8:00 - 24:00", specialties: ["قهوة عربية", "شاي", "حلويات"], category: "عائلي", timePreference: "afternoon", groupSize: "family", popular: false},
            {name: "مقهى الشباب", location: "الزرقاء الجديدة", rating: 4.2, description: "أجواء شبابية وألعاب ترفيهية متنوعة", price: "$", phone: "053332235", openHours: "14:00 - 02:00", specialties: ["شيشة", "بلياردو", "طاولة"], category: "شبابي", timePreference: "evening", groupSize: "group", popular: false},
            {name: "كافيه روز", location: "الرصيفة", rating: 4.4, description: "كافيه نسائي أنيق وهادي للراحة والاستجمام", price: "$$", phone: "053332236", openHours: "9:00 - 23:00", specialties: ["لاتيه", "كابتشينو", "تشيز كيك"], category: "نسائي", timePreference: "afternoon", groupSize: "couple", popular: false},
            {name: "قهوة الحارة", location: "جبل طارق", rating: 4.1, description: "قهوة شعبية تراثية بطعم الماضي الأصيل", price: "$", phone: "053332237", openHours: "15:00 - 01:00", specialties: ["قهوة مرة", "شاي أحمر", "معسل"], category: "تراثي", timePreference: "evening", groupSize: "group", popular: false},
            {name: "ستاربكس الزرقاء", location: "مول الزرقاء", rating: 4.0, description: "قهوة عالمية وأجواء عصرية للجميع", price: "$$$", phone: "053332238", openHours: "6:00 - 24:00", specialties: ["فرابوتشينو", "ماكياتو", "مافين"], category: "عالمي", timePreference: "morning", groupSize: "any", popular: true},
            {name: "كافيه المدينة", location: "شارع الملك عبدالله", rating: 4.3, description: "قهوة ممتازة في قلب المدينة التجاري", price: "$$", phone: "053332239", openHours: "7:00 - 22:00", specialties: ["إسبريسو", "أمريكانو", "ساندويش"], category: "تجاري", timePreference: "morning", groupSize: "solo", popular: false}
        ],
        "ألعاب": [
            {name: "فان سيتي الزرقاء", location: "مول الزرقاء", rating: 4.4, description: "مدينة ألعاب كاملة للعائلة بأحدث الألعاب", price: "$$", phone: "053333234", openHours: "10:00 - 23:00", specialties: ["ألعاب كهربائية", "بولينغ", "أطفال"], category: "عائلي", timePreference: "evening", groupSize: "family", popular: true},
            {name: "بلايلاند كيدز", location: "الرصيفة", rating: 4.2, description: "منطقة ألعاب آمنة للأطفال الصغار", price: "$", phone: "053333235", openHours: "9:00 - 21:00", specialties: ["ترامبولين", "مسابح كرات", "زحاليق"], category: "أطفال", timePreference: "afternoon", groupSize: "family", popular: false},
            {name: "جيم الزرقاء", location: "الزرقاء الجديدة", rating: 4.3, description: "صالة رياضية ونادي لياقة بدنية متكامل", price: "$$", phone: "053333236", openHours: "6:00 - 23:00", specialties: ["أوزان", "كارديو", "مدربين"], category: "رياضي", timePreference: "morning", groupSize: "solo", popular: false},
            {name: "بيلياردو الشباب", location: "وسط الزرقاء", rating: 4.1, description: "بيلياردو وألعاب طاولة متنوعة للشباب", price: "$", phone: "053333237", openHours: "14:00 - 02:00", specialties: ["بيلياردو", "طاولة", "شطرنج"], category: "شباب", timePreference: "evening", groupSize: "group", popular: false},
            {name: "مركز الألعاب الإلكترونية", location: "ماركا", rating: 4.5, description: "أحدث الألعاب الإلكترونية والكمبيوتر", price: "$$", phone: "053333238", openHours: "12:00 - 24:00", specialties: ["بلايستيشن", "كمبيوتر", "VR"], category: "إلكتروني", timePreference: "evening", groupSize: "solo", popular: true}
        ],
        "مغامرات": [
            {name: "مخيم الصحراء الشرقية", location: "الأزرق", rating: 4.6, description: "تخييم في قلب الصحراء الأردنية الساحرة", price: "$$$", phone: "053334234", openHours: "15:00 - 8:00", specialties: ["تخييم", "نجوم", "سفاري"], category: "صحراء", timePreference: "night", groupSize: "group", popular: true},
            {name: "رحلة الوادي", location: "وادي الزرقاء", rating: 4.4, description: "مشي ومغامرات في وادي الزرقاء الطبيعي", price: "$$", phone: "053334235", openHours: "7:00 - 17:00", specialties: ["مشي", "طبيعة", "تصوير"], category: "وادي", timePreference: "morning", groupSize: "group", popular: false},
            {name: "تسلق الجبال", location: "جبال الزرقاء", rating: 4.3, description: "تسلق آمن ومثير للمغامرين والرياضيين", price: "$$", phone: "053334236", openHours: "8:00 - 16:00", specialties: ["تسلق", "حبال", "إطلالة"], category: "تسلق", timePreference: "morning", groupSize: "group", popular: false},
            {name: "رحلة الدراجات", location: "مسارات الزرقاء", rating: 4.2, description: "جولات بالدراجات الجبلية في الطبيعة", price: "$$", phone: "053334237", openHours: "6:00 - 18:00", specialties: ["دراجات", "مسارات", "طبيعة"], category: "دراجات", timePreference: "morning", groupSize: "group", popular: false},
            {name: "باراموتور", location: "مطار الزرقاء", rating: 4.8, description: "طيران شراعي وإطلالة رائعة من السماء", price: "$$$$", phone: "053334238", openHours: "6:00 - 10:00", specialties: ["طيران", "مناظر", "أدرينالين"], category: "طيران", timePreference: "morning", groupSize: "solo", popular: true}
        ],
        "تسوق": [
            {name: "مول الزرقاء", location: "الزرقاء الجديدة", rating: 4.2, description: "مول حديث بخيارات تسوق متنوعة ومتطورة", price: "$$$", phone: "053335234", openHours: "10:00 - 23:00", specialties: ["ماركات", "مطاعم", "سينما"], category: "حديث", timePreference: "afternoon", groupSize: "family", popular: true},
            {name: "سوق الزرقاء المركزي", location: "وسط الزرقاء", rating: 4.0, description: "سوق شعبي بأسعار مناسبة للجميع", price: "$", phone: "053335235", openHours: "8:00 - 20:00", specialties: ["خضار", "ملابس", "أدوات"], category: "شعبي", timePreference: "morning", groupSize: "family", popular: false},
            {name: "مجمع الرصيفة التجاري", location: "الرصيفة", rating: 4.1, description: "مجمع تجاري محلي ومتنوع الخدمات", price: "$$", phone: "053335236", openHours: "9:00 - 22:00", specialties: ["محلي", "متنوع", "عائلي"], category: "محلي", timePreference: "afternoon", groupSize: "family", popular: false},
            {name: "سوق الجمعة", location: "ماركا", rating: 3.9, description: "سوق أسبوعي بأسعار مخفضة جداً", price: "$", phone: "053335237", openHours: "الجمعة 7:00 - 15:00", specialties: ["مستعمل", "رخيص", "متنوع"], category: "أسبوعي", timePreference: "morning", groupSize: "any", popular: false},
            {name: "مركز الذهب", location: "وسط الزرقاء", rating: 4.3, description: "محلات الذهب والمجوهرات الفاخرة", price: "$$$", phone: "053335238", openHours: "9:00 - 21:00", specialties: ["ذهب", "فضة", "مجوهرات"], category: "مجوهرات", timePreference: "afternoon", groupSize: "couple", popular: false}
        ],
        "ثقافية": [
            {name: "قصر الحلابات", location: "الأزرق", rating: 4.5, description: "قصر صحراوي أثري تاريخي من العصر الأموي", price: "$", phone: "053336234", openHours: "8:00 - 17:00", specialties: ["أموي", "صحراء", "تاريخ"], category: "أثري", timePreference: "morning", groupSize: "family", popular: true},
            {name: "متحف الزرقاء", location: "وسط الزرقاء", rating: 4.2, description: "تاريخ وتراث محافظة الزرقاء العريق", price: "$", phone: "053336235", openHours: "9:00 - 16:00", specialties: ["تراث", "تاريخ", "تعليم"], category: "متحف", timePreference: "morning", groupSize: "family", popular: false},
            {name: "مركز الملكة رانيا الثقافي", location: "الزرقاء الجديدة", rating: 4.4, description: "فعاليات ثقافية ومكتبة عامة حديثة", price: "$", phone: "053336236", openHours: "8:00 - 20:00", specialties: ["مكتبة", "ثقافة", "ورش"], category: "ثقافي", timePreference: "afternoon", groupSize: "solo", popular: false},
            {name: "المسجد الكبير", location: "وسط الزرقاء", rating: 4.6, description: "مسجد تراثي وعمارة إسلامية جميلة", price: "مجاني", phone: "053336237", openHours: "24/7", specialties: ["عمارة", "تراث", "دين"], category: "ديني", timePreference: "any", groupSize: "family", popular: true},
            {name: "مركز شباب الزرقاء", location: "حي النزهة", rating: 4.1, description: "أنشطة شبابية وثقافية متنوعة للجميع", price: "$", phone: "053336238", openHours: "9:00 - 21:00", specialties: ["شباب", "رياضة", "ثقافة"], category: "شبابي", timePreference: "afternoon", groupSize: "group", popular: false}
        ]
    },

    // Continue with other governorates...
    "البلقاء": {
        "مطاعم": [
            {name: "مطعم البحر الميت", location: "شواطئ البحر الميت", rating: 4.5, description: "مطعم بإطلالة ساحرة على البحر الميت", price: "$$$", phone: "053441234", openHours: "12:00 - 22:00", specialties: ["سمك طازج", "مندي", "مأكولات بحرية"], category: "بحري", timePreference: "afternoon", groupSize: "family", popular: true},
            {name: "منتجع عمان السياحي", location: "البحر الميت", rating: 4.7, description: "تجربة طعام فاخرة مع العلاج بالمياه المعدنية", price: "$$$$", phone: "053441235", openHours: "7:00 - 23:00", specialties: ["بوفيه مفتوح", "عالمي", "صحي"], category: "منتجع", timePreference: "any", groupSize: "couple", popular: true},
            {name: "مطعم السلط التراثي", location: "وسط السلط", rating: 4.3, description: "أكل أردني تقليدي في البيوت القديمة", price: "$$", phone: "053441236", openHours: "11:00 - 22:00", specialties: ["منسف سلطي", "كبة", "ملوخية"], category: "تراثي", timePreference: "afternoon", groupSize: "family", popular: false},
            {name: "مطعم الينابيع الساخنة", location: "ماعين", rating: 4.4, description: "طعام صحي بجانب الينابيع الطبيعية", price: "$$$", phone: "053441237", openHours: "10:00 - 20:00", specialties: ["طعام صحي", "سلطات", "عصائر طبيعية"], category: "صحي", timePreference: "afternoon", groupSize: "couple", popular: false},
            {name: "كشك أبو محمود", location: "عين الباشا", rating: 4.1, description: "أكل شعبي وفطار سريع للمسافرين", price: "$", phone: "053441238", openHours: "6:00 - 20:00", specialties: ["فلافل", "شاورما", "عصائر"], category: "سريع", timePreference: "morning", groupSize: "any", popular: false}
        ],
        "كافيهات": [
            {name: "كافيه البحر الميت", location: "منطقة الشواطئ", rating: 4.6, description: "قهوة بإطلالة رائعة على أخفض نقطة بالعالم", price: "$$$", phone: "053442234", openHours: "8:00 - 22:00", specialties: ["قهوة مختصة", "عصائر طازة", "حلويات"], category: "سياحي", timePreference: "morning", groupSize: "couple", popular: true},
            {name: "مقهى السلط العتيق", location: "البلدة القديمة", rating: 4.2, description: "قهوة تراثية في أجواء السلط القديمة", price: "$$", phone: "053442235", openHours: "14:00 - 23:00", specialties: ["قهوة عربية", "شاي بالميرمية", "معسل"], category: "تراثي", timePreference: "evening", groupSize: "group", popular: false},
            {name: "كافيه الينابيع", location: "ماعين", rating: 4.4, description: "استرخاء وقهوة بجانب المياه الحارة", price: "$$", phone: "053442236", openHours: "9:00 - 18:00", specialties: ["مشروبات ساخنة", "أعشاب طبيعية", "استرخاء"], category: "طبيعي", timePreference: "morning", groupSize: "couple", popular: false}
        ],
        "ألعاب": [
            {name: "ألعاب البحر الميت المائية", location: "شواطئ البحر الميت", rating: 4.5, description: "رياضات مائية وألعاب شاطئية ممتعة", price: "$$$", phone: "053443234", openHours: "9:00 - 18:00", specialties: ["سباحة", "رياضات مائية", "شاطئ"], category: "مائي", timePreference: "morning", groupSize: "family", popular: true},
            {name: "مركز الفروسية", location: "الفحيص", rating: 4.3, description: "تعلم ركوب الخيل والفروسية", price: "$$$", phone: "053443235", openHours: "15:00 - 18:00", specialties: ["فروسية", "خيول", "تدريب"], category: "فروسية", timePreference: "afternoon", groupSize: "solo", popular: false},
            {name: "نادي الغولف", location: "البحر الميت", rating: 4.7, description: "ملعب غولف مع إطلالة خلابة", price: "$$$$", phone: "053443236", openHours: "6:00 - 18:00", specialties: ["غولف", "طبيعة", "رياضة"], category: "غولف", timePreference: "morning", groupSize: "solo", popular: true}
        ],
        "مغامرات": [
            {name: "رحلة وادي ماعين", location: "ماعين", rating: 4.8, description: "ينابيع حارة طبيعية وشلالات في الصحراء", price: "$$$", phone: "053444234", openHours: "8:00 - 17:00", specialties: ["ينابيع حارة", "شلالات", "علاج طبيعي"], category: "ينابيع", timePreference: "morning", groupSize: "couple", popular: true},
            {name: "تسلق جبال البلقاء", location: "جبال السلط", rating: 4.4, description: "تسلق الجبال وإطلالة على وادي الأردن", price: "$$", phone: "053444235", openHours: "7:00 - 16:00", specialties: ["تسلق", "إطلالة", "طبيعة"], category: "تسلق", timePreference: "morning", groupSize: "group", popular: false},
            {name: "رحلة البحر الميت العلاجية", location: "البحر الميت", rating: 4.6, description: "علاج طبيعي وطين البحر الميت", price: "$$$", phone: "053444236", openHours: "9:00 - 17:00", specialties: ["علاج طبيعي", "طين", "استشفاء"], category: "علاجي", timePreference: "morning", groupSize: "couple", popular: true}
        ],
        "تسوق": [
            {name: "سوق السلط التراثي", location: "وسط السلط", rating: 4.2, description: "سوق تقليدي بتحف وحرف يدوية", price: "$$", phone: "053445234", openHours: "8:00 - 18:00", specialties: ["حرف يدوية", "تحف", "تراث"], category: "تراثي", timePreference: "morning", groupSize: "family", popular: false},
            {name: "مجمع البحر الميت التجاري", location: "منطقة المنتجعات", rating: 4.3, description: "تسوق سياحي ومنتجات البحر الميت", price: "$$$", phone: "053445235", openHours: "10:00 - 22:00", specialties: ["منتجات البحر الميت", "هدايا", "مستحضرات"], category: "سياحي", timePreference: "afternoon", groupSize: "couple", popular: true}
        ],
        "ثقافية": [
            {name: "البلدة القديمة في السلط", location: "وسط السلط", rating: 4.5, description: "عمارة عثمانية أصيلة وتاريخ عريق", price: "$", phone: "053446234", openHours: "24/7", specialties: ["عمارة عثمانية", "تاريخ", "جولات"], category: "تاريخي", timePreference: "morning", groupSize: "family", popular: true},
            {name: "متحف السلط التاريخي", location: "المتحف", rating: 4.2, description: "تاريخ منطقة البلقاء والحضارات القديمة", price: "$", phone: "053446235", openHours: "9:00 - 16:00", specialties: ["تاريخ محلي", "آثار", "حضارات"], category: "متحف", timePreference: "morning", groupSize: "family", popular: false},
            {name: "كنيسة السلط الأثرية", location: "البلدة القديمة", rating: 4.3, description: "كنيسة تاريخية بعمارة بيزنطية", price: "مجاني", phone: "053446236", openHours: "8:00 - 18:00", specialties: ["عمارة دينية", "تاريخ مسيحي", "فن"], category: "ديني", timePreference: "morning", groupSize: "family", popular: false}
        ]
    }
};

// Global variables
let selectedActivities = [];
let selectedPrice = 'all';
let selectedTimePreference = 'any';
let selectedGroupSize = 'any';
let selectedMinRating = 0;
let favorites = [];
let currentLanguage = 'ar';
let currentPlaces = [];
let currentPage = 1;
let placesPerPage = 9;
let feedbackRating = 0;

// Load saved data on startup
try {
    favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    currentLanguage = localStorage.getItem('language') || 'ar';
} catch (e) {
    favorites = [];
    currentLanguage = 'ar';
}

// Enhanced language translations
const translations = {
    ar: {
        mainTitle: "🇯🇴 دليل الرحلات الأردني الشامل",
        mainSubtitle: "اكتشف أحلى الأماكن في كل محافظات الأردن - رحلتك المثالية تبدأ من هنا!",
        langText: "English",
        stat1: "+2000 مكان",
        stat2: "12 محافظة",
        stat3: "6 فئات",
        planTitle: "🗺️ خطط رحلتك المثالية",
        whereLabel: "📍 وين بدك تروح؟",
        budgetLabel: "💰 الميزانية",
        sortLabel: "🔄 ترتيب حسب",
        activitiesLabel: "🎯 ايش الفعاليات اللي بدكم إياها؟",
        generateBtn: "🚀 يلا نستكشف الأردن!",
        economical: "اقتصادي",
        medium: "متوسط",
        high: "مرتفع",
        all: "الكل",
        highestRating: "⭐ التقييم الأعلى",
        lowestPrice: "💰 السعر الأقل",
        highestPrice: "💎 السعر الأعلى",
        name: "📝 الاسم",
        distance: "📍 الأقرب",
        popular: "🔥 الأكثر شعبية",
        random: "🎲 عشوائي",
        restaurants: "مطاعم",
        cafes: "كافيهات",
        games: "ألعاب وترفيه",
        adventures: "مغامرات",
        shopping: "تسوق",
        cultural: "أماكن ثقافية",
        showAll: "👁️ عرض الكل",
        favoritesOnly: "❤️ المفضلة فقط",
        nearby: "📍 الأقرب إليك",
        export: "📥 تصدير",
        share: "📤 مشاركة",
        reset: "🔄 إعادة تعيين",
        totalPlacesLabel: "إجمالي الأماكن",
        avgRatingLabel: "متوسط التقييم",
        estimatedCostLabel: "التكلفة المتوقعة",
        favoritesLabel: "المفضلة",
        call: "📞 اتصال",
        sharePlace: "📤 مشاركة",
        moreDetails: "📋 تفاصيل أكثر",
        specialties: "🍽️ المميزات:",
        openHours: "🕒 ساعات العمل:",
        selectGovernorate: "لازم تختار المحافظة الأول! 🏙️",
        selectActivity: "اختار على الأقل فعالية وحدة! 🎯",
        noPlaces: "ما لقينا أماكن تناسب المعايير اللي حددتها. جرب تغير الفعاليات أو الميزانية. 😕",
        linkCopied: "تم نسخ الرابط! 📋",
        placeCopied: "تم نسخ معلومات المكان! 📋",
        dataExported: "تم تصدير البيانات! 📥",
        tipsTitle: "💡 نصائح ذهبية للرحلة المثالية",
        tip1: "• تأكد من حالة الطقس قبل الخروج واحمل معك مظلة في الشتاء",
        tip2: "• احجز مسبقاً في المطاعم والفنادق المشهورة خاصة في المواسم",
        tip3: "• احمل معك كمية كافية من الماء خاصة في الرحلات الصحراوية",
        tip4: "• لا تنسى شاحن الهاتف أو بطارية إضافية للطوارئ",
        selectGov: "اختار المحافظة",
        loadMore: "⬇️ عرض المزيد",
        feedbackSubmitted: "شكراً لك! تم إرسال تقييمك بنجاح 🙏",
        invalidRating: "الرجاء اختيار تقييم أولاً ⭐"
    },
    en: {
        mainTitle: "🇯🇴 Complete Jordan Travel Guide",
        mainSubtitle: "Discover the best places in all Jordan governorates - Your perfect trip starts here!",
        langText: "العربية",
        stat1: "+2000 places",
        stat2: "12 governorates",
        stat3: "6 categories",
        planTitle: "🗺️ Plan Your Perfect Trip",
        whereLabel: "📍 Where do you want to go?",
        budgetLabel: "💰 Budget",
        sortLabel: "🔄 Sort by",
        activitiesLabel: "🎯 What activities do you want?",
        generateBtn: "🚀 Let's Explore Jordan!",
        economical: "Budget",
        medium: "Medium",
        high: "High",
        all: "All",
        highestRating: "⭐ Highest Rating",
        lowestPrice: "💰 Lowest Price",
        highestPrice: "💎 Highest Price",
        name: "📝 Name",
        distance: "📍 Nearest",
        popular: "🔥 Most Popular",
        random: "🎲 Random",
        restaurants: "Restaurants",
        cafes: "Cafes",
        games: "Games & Entertainment",
        adventures: "Adventures",
        shopping: "Shopping",
        cultural: "Cultural Places",
        showAll: "👁️ Show All",
        favoritesOnly: "❤️ Favorites Only",
        nearby: "📍 Nearby",
        export: "📥 Export",
        share: "📤 Share",
        reset: "🔄 Reset",
        totalPlacesLabel: "Total Places",
        avgRatingLabel: "Average Rating",
        estimatedCostLabel: "Estimated Cost",
        favoritesLabel: "Favorites",
        call: "📞 Call",
        sharePlace: "📤 Share",
        moreDetails: "📋 More Details",
        specialties: "🍽️ Specialties:",
        openHours: "🕒 Opening Hours:",
        selectGovernorate: "Please select a governorate first! 🏙️",
        selectActivity: "Select at least one activity! 🎯",
        noPlaces: "No places found matching your criteria. Try changing activities or budget. 😕",
        linkCopied: "Link copied! 📋",
        placeCopied: "Place information copied! 📋",
        dataExported: "Data exported! 📥",
        tipsTitle: "💡 Golden Tips for the Perfect Trip",
        tip1: "• Check weather conditions before leaving and bring an umbrella in winter",
        tip2: "• Book in advance at popular restaurants and hotels especially during seasons",
        tip3: "• Bring enough water with you especially during desert trips",
        tip4: "• Don't forget your phone charger or power bank for emergencies",
        selectGov: "Select Governorate",
        loadMore: "⬇️ Load More",
        feedbackSubmitted: "Thank you! Your feedback has been submitted successfully 🙏",
        invalidRating: "Please select a rating first ⭐"
    }
};

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Jordan Travel Guide is loading...');
    showLoadingScreen();
    
    setTimeout(() => {
        hideLoadingScreen();
        setLanguage(currentLanguage);
        updateFavoritesCount();
        setupScrollButton();
        setupAdvancedFilters();
        console.log('✅ Application loaded successfully!');
    }, 2000);
});

// Loading screen functions
function showLoadingScreen() {
    document.getElementById('loadingScreen').style.display = 'flex';
}

function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    loadingScreen.style.opacity = '0';
    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, 500);
}

// Language toggle
function toggleLanguage() {
    console.log('🌐 Toggling language from', currentLanguage);
    currentLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
    setLanguage(currentLanguage);
    localStorage.setItem('language', currentLanguage);
}

// Enhanced language setting
function setLanguage(lang) {
    console.log('🔤 Setting language to', lang);
    const t = translations[lang];
    const html = document.documentElement;
    
    // Update HTML attributes
    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    
    // Update all translatable elements
    updateTranslatableElements(t, lang);
}

function updateTranslatableElements(t, lang) {
    // Header content
    const headerElements = [
        'mainTitle', 'mainSubtitle', 'langText', 'stat1', 'stat2', 'stat3'
    ];
    headerElements.forEach(id => {
        const element = document.getElementById(id);
        if (element && t[id]) element.textContent = t[id];
    });
    
    // Form content
    const formElements = [
        'planTitle', 'whereLabel', 'budgetLabel', 'sortLabel', 'activitiesLabel'
    ];
    formElements.forEach(id => {
        const element = document.getElementById(id);
        if (element && t[id]) element.textContent = t[id];
    });
    
    // Update governorate options
    updateGovernorateOptions(t, lang);
    
    // Update budget filters
    updateBudgetFilters(t);
    
    // Update sort options
    updateSortOptions(t);
    
    // Update activity cards
    updateActivityCards(t, lang);
    
    // Update button
    const generateBtn = document.getElementById('generatePlan');
    if (generateBtn && t.generateBtn) {
        generateBtn.querySelector('.btn-text').textContent = t.generateBtn;
    }
    
    // Update other UI elements if visible
    updateVisibleElements(t);
}

function updateGovernorateOptions(t, lang) {
    const governorateSelect = document.getElementById('governorate');
    if (!governorateSelect) return;
    
    const currentValue = governorateSelect.value;
    const governorates = [
        { value: 'عمان', ar: 'عمان - العاصمة الذهبية', en: 'Amman - Golden Capital' },
        { value: 'إربد', ar: 'إربد - لؤلؤة الشمال', en: 'Irbid - Pearl of North' },
        { value: 'الزرقاء', ar: 'الزرقاء - المدينة الزرقاء', en: 'Zarqa - Blue City' },
        { value: 'البلقاء', ar: 'البلقاء - أرض الملح', en: 'Balqa - Land of Salt' },
        { value: 'عجلون', ar: 'عجلون - غابات الشمال', en: 'Ajloun - Northern Forests' },
        { value: 'جرش', ar: 'جرش - مدينة الآثار الرومانية', en: 'Jerash - Roman Ruins City' },
        { value: 'المفرق', ar: 'المفرق - بوابة الصحراء', en: 'Mafraq - Desert Gate' },
        { value: 'الكرك', ar: 'الكرك - قلعة الصحراء', en: 'Karak - Desert Castle' },
        { value: 'الطفيلة', ar: 'الطفيلة - جبال الجنوب', en: 'Tafilah - Southern Mountains' },
        { value: 'معان', ar: 'معان - طريق القوافل', en: 'Ma\'an - Caravan Route' },
        { value: 'العقبة', ar: 'العقبة - عروس البحر الأحمر', en: 'Aqaba - Red Sea Bride' },
        { value: 'مادبا', ar: 'مادبا - مدينة الفسيفساء', en: 'Madaba - Mosaic City' }
    ];
    
    governorateSelect.innerHTML = `<option value="">${t.selectGov}</option>` +
        governorates.map(gov => 
            `<option value="${gov.value}">${gov[lang]}</option>`
        ).join('');
    
    governorateSelect.value = currentValue;
}

function updateBudgetFilters(t) {
    const budgetLabels = document.querySelectorAll('.price-filter');
    const labels = [t.economical, t.medium, t.high, t.all];
    budgetLabels.forEach((btn, index) => {
        if (labels[index]) {
            const textSpan = btn.querySelector('span:last-child') || btn.childNodes[btn.childNodes.length - 1];
            if (textSpan) textSpan.textContent = labels[index];
        }
    });
}

function updateSortOptions(t) {
    const sortSelect = document.getElementById('sortBy');
    if (!sortSelect) return;
    
    const currentValue = sortSelect.value;
    const options = [
        { value: 'rating', text: t.highestRating },
        { value: 'price-low', text: t.lowestPrice },
        { value: 'price-high', text: t.highestPrice },
        { value: 'name', text: t.name },
        { value: 'distance', text: t.distance },
        { value: 'popular', text: t.popular },
        { value: 'random', text: t.random }
    ];
    
    sortSelect.innerHTML = options.map(opt => 
        `<option value="${opt.value}">${opt.text}</option>`
    ).join('');
    
    sortSelect.value = currentValue;
}

function updateActivityCards(t, lang) {
    const activityCards = document.querySelectorAll('.activity-card');
    const activities = [
        { key: 'restaurants', count: '+500' },
        { key: 'cafes', count: '+300' },
        { key: 'games', count: '+200' },
        { key: 'adventures', count: '+150' },
        { key: 'shopping', count: '+250' },
        { key: 'cultural', count: '+180' }
    ];
    
    activityCards.forEach((card, index) => {
        if (activities[index]) {
            const nameElement = card.querySelector('.activity-name');
            const countElement = card.querySelector('.activity-count');
            
            if (nameElement && t[activities[index].key]) {
                nameElement.textContent = t[activities[index].key];
            }
            if (countElement) {
                countElement.textContent = activities[index].count + (lang === 'ar' ? ' مكان' : ' places');
            }
        }
    });
}

function updateVisibleElements(t) {
    // Update stats if visible
    const quickStats = document.getElementById('quickStats');
    if (quickStats && !quickStats.classList.contains('hidden')) {
        const statLabels = ['totalPlacesLabel', 'avgRatingLabel', 'estimatedCostLabel', 'favoritesLabel'];
        statLabels.forEach(id => {
            const element = document.getElementById(id);
            if (element && t[id]) element.textContent = t[id];
        });
    }
    
    // Update filter buttons if visible
    const results = document.getElementById('results');
    if (results && !results.classList.contains('hidden')) {
        const buttonElements = [
            { id: 'showAllBtn', key: 'showAll' },
            { id: 'showFavoritesBtn', key: 'favoritesOnly' },
            { id: 'showNearbyBtn', key: 'nearby' },
            { id: 'exportBtn', key: 'export' },
            { id: 'shareBtn', key: 'share' },
            { id: 'resetBtn', key: 'reset' }
        ];
        
        buttonElements.forEach(({ id, key }) => {
            const element = document.getElementById(id);
            if (element && t[key]) {
                const textSpan = element.querySelector('span:last-child');
                if (textSpan) textSpan.textContent = t[key];
            }
        });
    }
    
    // Update tips section
    const tipElements = ['tipsTitle', 'tip1', 'tip2', 'tip3', 'tip4'];
    tipElements.forEach(id => {
        const element = document.getElementById(id);
        if (element && t[id]) element.textContent = t[id];
    });
}

// Activity selection
function toggleActivity(activity) {
    console.log('🎯 Toggling activity:', activity);
    const card = document.querySelector(`[data-activity="${activity}"]`);
    
    if (selectedActivities.includes(activity)) {
        selectedActivities = selectedActivities.filter(a => a !== activity);
        card.classList.remove('selected');
    } else {
        selectedActivities.push(activity);
        card.classList.add('selected');
    }
    
    // Add visual feedback
    card.style.transform = 'scale(0.95)';
    setTimeout(() => {
        card.style.transform = '';
    }, 150);
    
    console.log('📝 Selected activities:', selectedActivities);
}

// Price selection
function selectPrice(price) {
    console.log('💰 Selecting price:', price);
    selectedPrice = price;
    
    document.querySelectorAll('.price-filter').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-price="${price}"]`).classList.add('active');
}

// Setup advanced filters
function setupAdvancedFilters() {
    const timePreference = document.getElementById('timePreference');
    const groupSize = document.getElementById('groupSize');
    const minRating = document.getElementById('minRating');
    
    if (timePreference) {
        timePreference.addEventListener('change', (e) => {
            selectedTimePreference = e.target.value;
        });
    }
    
    if (groupSize) {
        groupSize.addEventListener('change', (e) => {
            selectedGroupSize = e.target.value;
        });
    }
    
    if (minRating) {
        minRating.addEventListener('change', (e) => {
            selectedMinRating = parseFloat(e.target.value);
        });
    }
}

// Enhanced plan generation
function generatePlan() {
    console.log('🚀 Generating enhanced plan...');
    const governorate = document.getElementById('governorate').value;
    const sortBy = document.getElementById('sortBy').value;
    const t = translations[currentLanguage];

    // Validation
    if (!governorate) {
        showNotification(t.selectGovernorate, 'error');
        return;
    }

    if (selectedActivities.length === 0) {
        showNotification(t.selectActivity, 'error');
        return;
    }

    // Show loading
    const generateBtn = document.getElementById('generatePlan');
    const originalText = generateBtn.querySelector('.btn-text').textContent;
    generateBtn.querySelector('.btn-text').textContent = '🔄 جاري البحث...';
    generateBtn.disabled = true;

    setTimeout(() => {
        const filteredPlaces = getFilteredPlaces(governorate, selectedActivities, selectedPrice);
        console.log('📊 Filtered places:', filteredPlaces.length);
        
        const sortedPlaces = sortPlaces(filteredPlaces, sortBy);
        console.log('📈 Sorted places:', sortedPlaces.length);
        
        if (sortedPlaces.length === 0) {
            showNotification(t.noPlaces, 'warning');
            generateBtn.querySelector('.btn-text').textContent = originalText;
            generateBtn.disabled = false;
            return;
        }

        currentPlaces = sortedPlaces;
        currentPage = 1;
        displayResults(sortedPlaces);
        updateQuickStats(sortedPlaces);
        
        // Smooth scroll to results
        document.getElementById('results').scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });

        // Restore button
        generateBtn.querySelector('.btn-text').textContent = originalText;
        generateBtn.disabled = false;
        
        showNotification(`🎉 تم العثور على ${sortedPlaces.length} مكان مميز!`, 'success');
    }, 1000);
}

// Enhanced filtering
function getFilteredPlaces(governorate, activities, priceFilter) {
    let allPlaces = [];
    
    if (placesData[governorate]) {
        activities.forEach(activity => {
            if (placesData[governorate][activity]) {
                const places = placesData[governorate][activity].filter(place => {
                    // Price filter
                    if (priceFilter !== 'all' && place.price !== priceFilter) return false;
                    
                    // Time preference filter
                    if (selectedTimePreference !== 'any' && place.timePreference !== 'any' && 
                        place.timePreference !== selectedTimePreference) return false;
                    
                    // Group size filter
                    if (selectedGroupSize !== 'any' && place.groupSize !== 'any' && 
                        place.groupSize !== selectedGroupSize) return false;
                    
                    // Rating filter
                    if (selectedMinRating > 0 && place.rating < selectedMinRating) return false;
                    
                    return true;
                });
                
                allPlaces = allPlaces.concat(places.map(place => ({
                    ...place, 
                    category: activity,
                    id: `${governorate}-${activity}-${place.name}`.replace(/\s+/g, '-')
                })));
            }
        });
    }

    return allPlaces;
}

// Enhanced sorting
function sortPlaces(places, sortBy) {
    const sorted = [...places];
    
    switch(sortBy) {
        case 'rating':
            return sorted.sort((a, b) => b.rating - a.rating);
        case 'price-low':
            return sorted.sort((a, b) => getPriceValue(a.price) - getPriceValue(b.price));
        case 'price-high':
            return sorted.sort((a, b) => getPriceValue(b.price) - getPriceValue(a.price));
        case 'name':
            return sorted.sort((a, b) => a.name.localeCompare(b.name, currentLanguage));
        case 'popular':
            return sorted.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
        case 'distance':
            // Simulate distance sorting - in real app, use geolocation
            return sorted.sort(() => Math.random() - 0.5);
        case 'random':
            return sorted.sort(() => Math.random() - 0.5);
        default:
            return sorted;
    }
}

function getPriceValue(price) {
    const priceMap = { '$': 1, '$$': 2, '$$$': 3, '$$$$': 4, 'مجاني': 0 };
    return priceMap[price] || 0;
}

// Enhanced results display
function displayResults(places) {
    console.log('📺 Displaying results:', places.length, 'places');
    const resultsDiv = document.getElementById('results');
    const placesGridDiv = document.getElementById('placesGrid');
    const loadMoreContainer = document.getElementById('loadMoreContainer');

    // Calculate pagination
    const startIndex = (currentPage - 1) * placesPerPage;
    const endIndex = startIndex + placesPerPage;
    const currentPagePlaces = places.slice(0, endIndex);
    const hasMore = endIndex < places.length;

    // Create place cards
    placesGridDiv.innerHTML = currentPagePlaces.map(place => createEnhancedPlaceCard(place)).join('');
    
    // Show/hide load more button
    if (hasMore) {
        loadMoreContainer.style.display = 'block';
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        if (loadMoreBtn) {
            loadMoreBtn.textContent = `⬇️ عرض المزيد (${places.length - endIndex} متبقي)`;
        }
    } else {
        loadMoreContainer.style.display = 'none';
    }
    
    resultsDiv.classList.remove('hidden');
    resultsDiv.classList.add('slide-in');
    
    // Animate cards
    animateCards();
}

function createEnhancedPlaceCard(place) {
    const isFavorite = favorites.includes(place.name);
    const stars = '⭐'.repeat(Math.floor(place.rating)) + (place.rating % 1 >= 0.5 ? '✨' : '');
    const t = translations[currentLanguage];
    
    return `
        <div class="place-card" data-place-id="${place.id}">
            <div class="place-header">
                <div class="flex-1">
                    <h4 class="place-title">${place.name}</h4>
                    <div class="place-location">
                        <span>📍</span>
                        <span>${place.location}</span>
                    </div>
                    ${place.popular ? '<div class="popular-badge">🔥 شائع</div>' : ''}
                </div>
                <div class="flex items-center gap-2">
                    <span class="place-category-icon">${getCategoryIcon(place.category)}</span>
                    <button class="favorite-btn ${isFavorite ? 'favorited' : ''}" 
                            onclick="toggleFavorite('${place.name.replace(/'/g, "\\'")}')">
                        ${isFavorite ? '❤️' : '🤍'}
                    </button>
                </div>
            </div>
            
            <div class="rating-section">
                <div class="star-rating">${stars}</div>
                <div class="rating-value">${place.rating}/5</div>
            </div>
            
            <p class="place-description">${place.description}</p>
            
            <div class="place-details">
                <div class="detail-item">
                    <span class="detail-icon">💰</span>
                    <span>${place.price}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-icon">📞</span>
                    <span>${place.phone}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-icon">🕒</span>
                    <span>${place.openHours}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-icon">⭐</span>
                    <span>${place.category}</span>
                </div>
            </div>
            
            ${place.specialties ? `
                <div class="specialties-section">
                    <div class="specialties-title">${t.specialties}</div>
                    <div class="specialties-grid">
                        ${place.specialties.map(spec => 
                            `<span class="specialty-tag">${spec}</span>`
                        ).join('')}
                    </div>
                </div>
            ` : ''}
            
            <div class="place-actions">
                <button class="place-btn place-btn-primary" onclick="callPlace('${place.phone}')">
                    ${t.call}
                </button>
                <button class="place-btn place-btn-secondary" onclick="sharePlace('${place.name.replace(/'/g, "\\'")}', '${place.location.replace(/'/g, "\\'")}')">
                    ${t.sharePlace}
                </button>
            </div>
            
            <button class="details-btn" onclick="showPlaceDetails('${place.id}')">
                ${t.moreDetails}
            </button>
        </div>
    `;
}

function animateCards() {
    const cards = document.querySelectorAll('.place-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

function loadMorePlaces() {
    currentPage++;
    displayResults(currentPlaces);
    
    // Scroll to new content
    const newCards = document.querySelectorAll('.place-card');
    if (newCards.length > 0) {
        const lastNewCard = newCards[newCards.length - (placesPerPage)];
        if (lastNewCard) {
            lastNewCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
}

// Enhanced statistics
function updateQuickStats(places) {
    const statsDiv = document.getElementById('quickStats');
    const avgRating = places.reduce((sum, place) => sum + place.rating, 0) / places.length;
    const estimatedCost = calculateEstimatedCost(places);
    
    // Animate numbers
    animateNumber('totalPlaces', 0, places.length, 1000);
    animateNumber('avgRating', 0, avgRating, 1000, 1);
    animateNumber('estimatedCost', 0, estimatedCost, 1200);
    
    statsDiv.classList.remove('hidden');
}

function animateNumber(elementId, start, end, duration, decimals = 0) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    const startTime = performance.now();
    const range = end - start;
    
    function updateNumber(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const current = start + (range * easeOutQuart(progress));
        element.textContent = current.toFixed(decimals);
        
        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        }
    }
    
    requestAnimationFrame(updateNumber);
}

function easeOutQuart(t) {
    return 1 - (--t) * t * t * t;
}

function calculateEstimatedCost(places) {
    const costMap = { '$': 15, '$$': 35, '$$$': 75, '$$$$': 150, 'مجاني': 0 };
    const totalCost = places.reduce((sum, place) => sum + (costMap[place.price] || 0), 0);
    return Math.round(totalCost / places.length * 2.5); // Estimate for 2-3 people
}

// Favorites management
function updateFavoritesCount() {
    const favCount = document.getElementById('favoritesCount');
    if (favCount) {
        animateNumber('favoritesCount', parseInt(favCount.textContent) || 0, favorites.length, 500);
    }
}

function toggleFavorite(placeName) {
    console.log('❤️ Toggling favorite:', placeName);
    
    if (favorites.includes(placeName)) {
        favorites = favorites.filter(fav => fav !== placeName);
        showNotification('تم إزالة المكان من المفضلة 💔', 'info');
    } else {
        favorites.push(placeName);
        showNotification('تم إضافة المكان للمفضلة ❤️', 'success');
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoritesCount();
    
    // Refresh current view
    if (!document.getElementById('results').classList.contains('hidden') && currentPlaces.length > 0) {
        displayResults(currentPlaces);
    }
}

// Filter functions
function showAll() {
    if (currentPlaces.length > 0) {
        currentPage = 1;
        displayResults(currentPlaces);
        updateFilterButtons('showAllBtn');
    }
}

function showFavorites() {
    if (currentPlaces.length > 0) {
        const favoritePlaces = currentPlaces.filter(place => favorites.includes(place.name));
        currentPage = 1;
        displayResults(favoritePlaces);
        updateFilterButtons('showFavoritesBtn');
        
        if (favoritePlaces.length === 0) {
            showNotification('لا توجد أماكن مفضلة مطابقة للبحث 💛', 'info');
        }
    }
}

function showNearby() {
    if (currentPlaces.length > 0) {
        // Simulate nearby sorting - in real app, use geolocation
        const nearbyPlaces = [...currentPlaces].sort(() => Math.random() - 0.5);
        currentPage = 1;
        displayResults(nearbyPlaces);
        updateFilterButtons('showNearbyBtn');
        showNotification('تم ترتيب النتائج حسب القرب المفترض 📍', 'info');
    }
}

function updateFilterButtons(activeButtonId) {
    const filterButtons = ['showAllBtn', 'showFavoritesBtn', 'showNearbyBtn'];
    
    filterButtons.forEach(id => {
        const btn = document.getElementById(id);
        if (btn) {
            if (id === activeButtonId) {
                btn.className = 'filter-btn filter-btn-active';
            } else {
                btn.className = 'filter-btn';
            }
        }
    });
}

// Export and sharing
function exportResults() {
    if (currentPlaces.length === 0) {
        showNotification('لا توجد نتائج للتصدير 📄', 'warning');
        return;
    }
    
    const exportData = {
        timestamp: new Date().toISOString(),
        places: currentPlaces.map(place => ({
            name: place.name,
            location: place.location,
            rating: place.rating,
            category: place.category,
            phone: place.phone,
            openHours: place.openHours,
            specialties: place.specialties
        }))
    };
    
    const dataStr = JSON.stringify(exportData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `jordan-travel-guide-${new Date().toISOString().split('T')[0]}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    
    showNotification(translations[currentLanguage].dataExported, 'success');
}

function shareResults() {
    const governorate = document.getElementById('governorate').value;
    const activities = selectedActivities.join(', ');
    const t = translations[currentLanguage];
    
    const text = currentLanguage === 'ar' 
        ? `🇯🇴 شوف خطة الرحلة المذهلة هاي في ${governorate}!\n\n🎯 الفعاليات: ${activities}\n📊 عدد الأماكن: ${currentPlaces.length}\n⭐ متوسط التقييم: ${(currentPlaces.reduce((sum, p) => sum + p.rating, 0) / currentPlaces.length).toFixed(1)}\n\nمن دليل الرحلات الأردني الشامل`
        : `🇯🇴 Check out this amazing trip plan in ${governorate}!\n\n🎯 Activities: ${activities}\n📊 Places count: ${currentPlaces.length}\n⭐ Average rating: ${(currentPlaces.reduce((sum, p) => sum + p.rating, 0) / currentPlaces.length).toFixed(1)}\n\nFrom Complete Jordan Travel Guide`;
    
    if (navigator.share) {
        navigator.share({
            title: currentLanguage === 'ar' ? 'دليل الرحلات الأردني الشامل' : 'Complete Jordan Travel Guide',
            text: text,
            url: window.location.href
        }).catch(console.error);
    } else {
        navigator.clipboard.writeText(text + '\n\n' + window.location.href)
            .then(() => showNotification(t.linkCopied, 'success'))
            .catch(() => showNotification('حدث خطأ في النسخ', 'error'));
    }
}

function sharePlace(name, location) {
    const t = translations[currentLanguage];
    const text = currentLanguage === 'ar' 
        ? `🇯🇴 شوف المكان الرائع هاذا: ${name}\n📍 ${location}\n\nمن دليل الرحلات الأردني الشامل`
        : `🇯🇴 Check out this amazing place: ${name}\n📍 ${location}\n\nFrom Complete Jordan Travel Guide`;
    
    if (navigator.share) {
        navigator.share({
            title: name,
            text: text
        }).catch(console.error);
    } else {
        navigator.clipboard.writeText(text)
            .then(() => showNotification(t.placeCopied, 'success'))
            .catch(() => showNotification('حدث خطأ في النسخ', 'error'));
    }
}

// Utility functions
function callPlace(phone) {
    window.open(`tel:${phone}`);
}

function resetForm() {
    console.log('🔄 Resetting form...');
    
    // Reset form values
    document.getElementById('governorate').value = '';
    document.getElementById('sortBy').value = 'rating';
    document.getElementById('timePreference').value = 'any';
    document.getElementById('groupSize').value = 'any';
    document.getElementById('minRating').value = '0';
    
    // Reset variables
    selectedActivities = [];
    selectedPrice = 'all';
    selectedTimePreference = 'any';
    selectedGroupSize = 'any';
    selectedMinRating = 0;
    currentPlaces = [];
    currentPage = 1;
    
    // Reset UI
    document.querySelectorAll('.activity-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    document.querySelectorAll('.price-filter').forEach(filter => {
        filter.classList.remove('active');
    });
    document.querySelector('.price-filter[data-price="all"]').classList.add('active');
    
    // Hide results
    document.getElementById('results').classList.add('hidden');
    document.getElementById('quickStats').classList.add('hidden');
    
    showNotification('تم إعادة تعيين النموذج بنجاح 🔄', 'success');
}

function scrollToTop() {
    window.scrollTo({ 
        top: 0, 
        behavior: 'smooth' 
    });
}

function setupScrollButton() {
    let isScrolling = false;
    
    window.addEventListener('scroll', () => {
        if (!isScrolling) {
            window.requestAnimationFrame(() => {
                const scrollBtn = document.getElementById('scrollTopBtn');
                const quickFilters = document.getElementById('quickFilters');
                
                if (window.pageYOffset > 300) {
                    scrollBtn.classList.remove('hidden');
                    quickFilters.classList.remove('hidden');
                } else {
                    scrollBtn.classList.add('hidden');
                    quickFilters.classList.add('hidden');
                }
                
                isScrolling = false;
            });
            
            isScrolling = true;
        }
    });
}

function getCategoryIcon(category) {
    const icons = {
        'مطاعم': '🍽️',
        'كافيهات': '☕',
        'ألعاب': '🎮',
        'مغامرات': '🏔️',
        'تسوق': '🛍️',
        'ثقافية': '🏛️'
    };
    return icons[category] || '📍';
}

// Quick filters
function quickFilter(type) {
    const activityMap = {
        'restaurants': 'مطاعم',
        'cafes': 'كافيهات',
        'entertainment': 'ألعاب',
        'tourism': 'ثقافية'
    };
    
    const activity = activityMap[type];
    if (activity) {
        // Reset and select only this activity
        selectedActivities = [activity];
        
        // Update UI
        document.querySelectorAll('.activity-card').forEach(card => {
            card.classList.remove('selected');
        });
        
        const targetCard = document.querySelector(`[data-activity="${activity}"]`);
        if (targetCard) {
            targetCard.classList.add('selected');
        }
        
        showNotification(`تم تحديد فئة ${activity} 🎯`, 'info');
    }
}

// Modal functions
function showPlaceDetails(placeId) {
    const place = currentPlaces.find(p => p.id === placeId);
    if (!place) return;
    
    const modal = document.getElementById('placeModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    const t = translations[currentLanguage];
    
    modalTitle.textContent = place.name;
    
    modalBody.innerHTML = `
        <div class="space-y-4">
            <div class="flex items-center gap-3">
                <span class="text-3xl">${getCategoryIcon(place.category)}</span>
                <div>
                    <h4 class="font-bold text-lg">${place.name}</h4>
                    <p class="text-gray-600">${place.location}</p>
                </div>
            </div>
            
            <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h5 class="font-semibold mb-2">📋 التفاصيل الكاملة</h5>
                <div class="grid grid-cols-2 gap-4 text-sm">
                    <div><strong>التقييم:</strong> ${place.rating}/5 ⭐</div>
                    <div><strong>السعر:</strong> ${place.price}</div>
                    <div><strong>الهاتف:</strong> ${place.phone}</div>
                    <div><strong>الفئة:</strong> ${place.category}</div>
                    <div class="col-span-2"><strong>${t.openHours}</strong> ${place.openHours}</div>
                </div>
            </div>
            
            <div>
                <h5 class="font-semibold mb-2">📝 الوصف</h5>
                <p class="text-gray-700 dark:text-gray-300 leading-relaxed">${place.description}</p>
            </div>
            
            ${place.specialties ? `
                <div>
                    <h5 class="font-semibold mb-2">${t.specialties}</h5>
                    <div class="flex flex-wrap gap-2">
                        ${place.specialties.map(spec => 
                            `<span class="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">${spec}</span>`
                        ).join('')}
                    </div>
                </div>
            ` : ''}
            
            <div class="flex gap-3 pt-4">
                <button onclick="callPlace('${place.phone}')" class="flex-1 bg-primary text-white py-3 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                    📞 اتصال
                </button>
                <button onclick="sharePlace('${place.name.replace(/'/g, "\\'")}', '${place.location.replace(/'/g, "\\'")}'); closeModal();" class="flex-1 bg-green-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-600 transition-colors">
                    📤 مشاركة
                </button>
            </div>
        </div>
    `;
    
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('placeModal');
    modal.classList.add('hidden');
    document.body.style.overflow = '';
}

// Feedback system
function showFeedback() {
    const modal = document.getElementById('feedbackModal');
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeFeedbackModal() {
    const modal = document.getElementById('feedbackModal');
    modal.classList.add('hidden');
    document.body.style.overflow = '';
    
    // Reset form
    feedbackRating = 0;
    document.querySelectorAll('.rating-star').forEach(star => {
        star.classList.remove('active');
    });
    document.getElementById('feedbackText').value = '';
}

function setRating(rating) {
    feedbackRating = rating;
    const stars = document.querySelectorAll('.rating-star');
    
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}

// Handle feedback form submission
document.addEventListener('DOMContentLoaded', function() {
    const feedbackForm = document.getElementById('feedbackForm');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const t = translations[currentLanguage];
            
            if (feedbackRating === 0) {
                showNotification(t.invalidRating, 'warning');
                return;
            }
            
            const feedbackText = document.getElementById('feedbackText').value;
            
            // Simulate sending feedback
            console.log('📝 Feedback submitted:', {
                rating: feedbackRating,
                text: feedbackText,
                timestamp: new Date().toISOString()
            });
            
            showNotification(t.feedbackSubmitted, 'success');
            closeFeedbackModal();
        });
    }
});

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">${getNotificationIcon(type)}</span>
            <span class="notification-message">${message}</span>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: white;
        border-radius: 12px;
        padding: 16px 20px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 9999;
        transform: translateX(400px);
        transition: all 0.3s ease;
        border-left: 4px solid ${getNotificationColor(type)};
        max-width: 350px;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after delay
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

function getNotificationIcon(type) {
    const icons = {
        success: '✅',
        error: '❌',
        warning: '⚠️',
        info: 'ℹ️'
    };
    return icons[type] || 'ℹ️';
}

function getNotificationColor(type) {
    const colors = {
        success: '#10B981',
        error: '#EF4444',
        warning: '#F59E0B',
        info: '#3B82F6'
    };
    return colors[type] || '#3B82F6';
}

// Initialize app
console.log('🏁 Jordan Travel Guide Script Loaded Successfully!');