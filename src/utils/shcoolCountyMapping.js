const schoolCountyMapping = {
    "國立政治大學": "臺北市",
    "國立清華大學": "新竹市",
    "國立臺灣大學": "臺北市",
    "國立臺灣師範大學": "臺北市",
    "國立成功大學": "臺南市",
    "國立中興大學": "臺中市",
    "國立中央大學": "桃園市",
    "國立中山大學": "高雄市",
    "國立臺灣海洋大學": "基隆市",
    "國立中正大學": "嘉義縣",
    "國立高雄師範大學": "高雄市",
    "國立彰化師範大學": "彰化縣",
    "國立陽明大學": "臺北市",
    "國立臺北大學": "新北市",
    "國立嘉義大學": "嘉義市",
    "國立高雄大學": "高雄市",
    "國立東華大學": "花蓮縣",
    "國立暨南國際大學": "南投縣",
    "國立臺灣科技大學": "臺北市",
    "國立雲林科技大學": "雲林縣",
    "國立屏東科技大學": "屏東縣",
    "國立臺北科技大學": "臺北市",
    "國立臺北藝術大學": "臺北市",
    "國立臺灣藝術大學": "新北市",
    "國立臺東大學": "臺東縣",
    "國立宜蘭大學": "宜蘭縣",
    "國立聯合大學": "苗栗縣",
    "國立虎尾科技大學": "雲林縣",
    "國立臺南藝術大學": "臺南市",
    "國立臺南大學": "臺南市",
    "國立臺北教育大學": "臺北市",
    "國立臺中教育大學": "臺中市",
    "國立澎湖科技大學": "澎湖縣",
    "國立勤益科技大學": "臺中市",
    "國立體育大學": "桃園市",
    "國立臺北護理健康大學": "臺北市",
    "國立高雄餐旅大學": "高雄市",
    "國立金門大學": "金門縣",
    "國立臺灣體育運動大學": "臺中市",
    "國立臺中科技大學": "臺中市",
    "國立臺北商業大學": "臺北市",
    "國立屏東大學": "屏東縣",
    "國立高雄科技大學": "高雄市",
    "國立臺灣戲曲學院": "臺北市",
    "國立臺南護理專科學校": "臺南市",
    "國立臺東專科學校": "臺東縣",
    "國立空中大學": "新北市",
    "東海大學": "臺中市",
    "輔仁大學": "新北市",
    "東吳大學": "臺北市",
    "中原大學": "桃園市",
    "淡江大學": "新北市",
    "中國文化大學": "臺北市",
    "逢甲大學": "臺中市",
    "靜宜大學": "臺中市",
    "長庚大學": "桃園市",
    "元智大學": "桃園市",
    "中華大學": "新竹市",
    "國立陽明交通大學": "新竹市",
    "大葉大學": "彰化縣",
    "華梵大學": "新北市",
    "義守大學": "高雄市",
    "世新大學": "臺北市",
    "銘傳大學": "臺北市",
    "實踐大學": "臺北市",
    "朝陽科技大學": "臺中市",
    "高雄醫學大學": "高雄市",
    "南華大學": "嘉義縣",
    "真理大學": "新北市",
    "大同大學": "臺北市",
    "南臺科技大學": "臺南市",
    "崑山科技大學": "臺南市",
    "嘉南藥理大學": "臺南市",
    "樹德科技大學": "高雄市",
    "慈濟大學": "花蓮縣",
    "臺北醫學大學": "臺北市",
    "中山醫學大學": "臺中市",
    "龍華科技大學": "桃園市",
    "輔英科技大學": "高雄市",
    "明新科技大學": "新竹縣",
    "長榮大學": "臺南市",
    "弘光科技大學": "臺中市",
    "中國醫藥大學": "臺中市",
    "健行科技大學": "桃園市",
    "正修科技大學": "高雄市",
    "萬能科技大學": "桃園市",
    "玄奘大學": "新竹市",
    "建國科技大學": "彰化縣",
    "明志科技大學": "新北市",
    "高苑科技大學": "高雄市",
    "大仁科技大學": "屏東縣",
    "聖約翰科技大學": "新北市",
    "嶺東科技大學": "臺中市",
    "中國科技大學": "臺北市",
    "中臺科技大學": "臺中市",
    "亞洲大學": "臺中市",
    "開南大學": "桃園市",
    "佛光大學": "宜蘭縣",
    "台南應用科技大學": "臺南市",
    "遠東科技大學": "臺南市",
    "元培醫事科技大學": "新竹市",
    "景文科技大學": "新北市",
    "中華醫事科技大學": "臺南市",
    "東南科技大學": "新北市",
    "德明財經科技大學": "臺北市",
    "明道大學": "彰化縣",
    "南開科技大學": "南投縣",
    "中華科技大學": "臺北市",
    "僑光科技大學": "臺中市",
    "育達科技大學": "苗栗縣",
    "美和科技大學": "屏東縣",
    "吳鳳科技大學": "嘉義縣",
    "環球科技大學": "雲林縣",
    "台灣首府大學": "臺南市",
    "中州科技大學": "彰化縣",
    "修平科技大學": "臺中市",
    "長庚科技大學": "桃園市",
    "臺北城市科技大學": "臺北市",
    "大華科技大學": "新竹縣",
    "醒吾科技大學": "新北市",
    "文藻外語大學": "高雄市",
    "華夏科技大學": "新北市",
    "慈濟科技大學": "花蓮縣",
    "致理科技大學": "新北市",
    "康寧大學": "臺北市",
    "宏國德霖科技大學": "新北市",
    "東方設計大學": "高雄市",
    "崇右影藝科技大學": "基隆市",
    "台北海洋科技大學": "新北市",
    "中信金融管理學院": "臺南市",
    "大漢技術學院": "花蓮縣",
    "和春技術學院": "高雄市",
    "亞東技術學院": "新北市",
    "南亞技術學院": "桃園市",
    "稻江科技暨管理學院": "嘉義縣",
    "蘭陽技術學院": "宜蘭縣",
    "黎明技術學院": "新北市",
    "經國管理暨健康學院": "基隆市",
    "大同技術學院": "嘉義市",
    "臺灣觀光學院": "花蓮縣",
    "馬偕醫學院": "新北市",
    "法鼓文理學院": "新北市",
    "馬偕醫護管理專科學校": "新北市",
    "仁德醫護管理專科學校": "苗栗縣",
    "樹人醫護管理專科學校": "高雄市",
    "慈惠醫護管理專科學校": "屏東縣",
    "耕莘健康管理專科學校": "新北市",
    "敏惠醫護管理專科學校": "臺南市",
    "育英醫護管理專科學校": "高雄市",
    "聖母醫護管理專科學校": "宜蘭縣",
    "新生醫護管理專科學校": "桃園市",
    "崇仁醫護管理專科學校": "嘉義縣",
    "中華浸信會基督教台灣浸會神學院": "臺北市",
    "臺北基督學院": "新北市",
    "財團法人一貫道天皇基金會一貫道天皇學院": "高雄市",
    "台灣神學研究學院": "臺北市",
    "一貫道崇德學院": "南投縣",
    "台灣基督長老教會南神神學院": "臺南市",
    "臺北市立大學": "臺北市",
    "高雄市立空中大學": "高雄市",
    "國立清華大學-南大校區":"臺南市",
    "國立交通大學":"新竹市",
};
export default schoolCountyMapping