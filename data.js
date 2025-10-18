// 這是一個共用的動畫資料庫

const animeData = {
    '2025-fall': [
        { 
            id: 'spy-family-s3',
            title: 'SPY×FAMILY 間諜家家酒 Season 3', 
            originalTitle: 'SPY×FAMILY Season 3',
            image: 'SPY.jpg',
            banner: 'SPY.jpg',
            sourceTag: '漫畫改編',
            broadcastInfo: '電視播出 / 10月4日起 / 每週六 / 23點00分',
            episodes: '編作 / 共13話內容',
            synopsis: '每一個人，都有不能展現給任何人看的一面──這是個世界各國都在檯面下進行激烈情報戰的時代。<br><br>東國與西國，兩國之間已持續冷戰了十多年。隸屬於西國情報局對東課〈WISE〉的幹練間諜〈黃昏〉，被指派一項極機密任務，奉命接近威脅東西和平的危險人物，要刺探出東國國家統一黨黨魁──唐納文‧戴斯蒙德的戰爭計畫。其任務名為──行動代號〈梟〉。任務內容是：「在一週內組好家庭，並潛入戴斯蒙德兒子所就讀的名校。」<br><br>於是〈黃昏〉扮起精神科醫生──洛伊德‧佛傑，開始組織家庭。然而，他找到的女兒‧安妮亞是會讀心的超能力者，妻子‧約兒則是位暗殺者！由於利害一致，三人便互相隱瞞真實身分，並展開共同生活。世界的和平，就這樣被託付給狀況百出的臨時家庭──',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>版權由木棉花取得，10月4日起，每週六，23點00分後，於各串流平台更新</p>
            `,
            platforms: [
                '巴哈姆特動畫瘋', 'CATCHPLAY+', 'Crunchyroll(繁中字幕)', 'Disney+', 'friDay影音',
                'Hami Video', '愛奇藝', 'KKTV', 'LiTV線上影視', 'LINE TV', 'Muse木棉花-TW YouTube',
                '亂搭！租書網', 'MyVideo', 'Netflix', 'ofiii 歐飛'
            ],
            animationStudios: ['Wit Studio ✕ CloverWorks'],
            broadcastDay: 6, // 星期六
            broadcastTime: '23:00',
            promoVideos: [
                { title: '洛伊德PV', url: 'https://www.youtube.com/embed/BCtYVbCOsUg' },
                { title: '正式預告PV', url: 'https://www.youtube.com/embed/9-JreaprnO0' },
                { title: '正式預告PV2', url: 'https://www.youtube.com/embed/mdB4IDEHFYk' }
            ]
        },
        { 
            id: 'campfire-cooking-s2',
            title: '擁有超常技能的異世界流浪美食家 第二季',
            originalTitle: 'とんでもスキルで異世界放浪メシ 第2期',
            image: 'eat.jpg',
            banner: 'eat.jpg',
            sourceTag: '輕小說改編',
            broadcastInfo: '電視播出 / 10月8日起 / 每週三 / 0點0分',
            episodes: '編作 / 共12話內容',
            synopsis: '某天突然被召喚到異世界的普通上班族，向田剛志。他憑藉固有技能「網路超市」買來現代調味料，做料理來吃，與傳說魔獸緋爾和史萊姆史伊一起享受異世界生活。<br><br>隨著新夥伴的加入，美味之旅再度啟程！！',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>版權由木棉花取得，10月7日起，每週二 23:30 後，於下列各平台陸續更新</p>
            `,
            platforms: ['巴哈姆特動畫瘋','CATCHPLAY+','friDay影音','Hami Video','愛奇藝','KKTV','LiTV線上影視','LINE TV','Muse木棉花-TW YouTube','亂搭！租書網','MyVideo','ofiii 歐飛'],
            animationStudios: ['MAPPA'],
            broadcastDay: 2, 
            broadcastTime: '23:30',
            promoVideos: [
                { title: '預熱PV', url: 'https://www.youtube.com/embed/mJ1M8RyVFp4' },
                { title: '正式預告PV', url: 'https://www.youtube.com/embed/MASBS6qbE44' },
                { title: '正式預告PV2', url: 'https://www.youtube.com/embed/HJvcmhXYHMM' }
            ]
        },
        { 
            id: 'one-punch-man-s3',
            title: '一拳超人 第三季',
            originalTitle: 'ワンパンマン 第3期',
            image: 'one.jpg',
            banner: 'one.jpg',
            sourceTag: '漫畫改編',
            broadcastInfo: '電視播出 / 10月12日起 / 每週日 / 23點45分',
            episodes: '編作 / 共12話內容',
            synopsis: '在這樣的某一天，英雄協會遭到一群自稱「怪人協會」的怪人們襲擊，幹部的孩子被他們挾持為人質。S級英雄們集結，為了救回人質，制定了對怪人協會據點的突擊作戰。<br><br>另一方面，正值與英雄們交戰時，被怪人協會帶走的『人類怪人』餓狼，在據點中也醒來過來。',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>版權由木棉花取得，10月12日起，每週日 23:15 後，於下列各平台陸續更新</p>
            `,
            platforms: ['巴哈姆特動畫瘋','CATCHPLAY+','friDay影音','Hami Video','愛奇藝','KKTV','LiTV線上影視','LINE TV','Muse木棉花-TW YouTube','亂搭！租書網','MyVideo','Netflix','ofiii 歐飛'],
            animationStudios: ['J.C.STAFF'],
            broadcastDay: 7,
            broadcastTime: '23:15',
            promoVideos: [
                { title: '正式預告PV', url: 'https://www.youtube.com/embed/j1hqIrLqOso' },
                { title: '正式預告PV2', url: 'https://www.youtube.com/embed/uutwYXxAB2c' },
            ]
        },
        { 
            id: 'sighing-spectre-s2',
            title: '嘆氣的亡靈想隱退 第二季度',
            originalTitle: '嘆きの亡霊は引退したい 第2クール',
            image: 'Oni.jpeg',
            banner: 'Oni.jpeg',
            sourceTag: '輕小說改編',
            broadcastInfo: '電視播出 / 10月6日起 / 每週一 / 23點30分',
            episodes: '編作 / 共11話內容',
            synopsis: '身經世界正處於寶藏獵人的黃金時期，為了尋求財富、名譽以及力量，獵人們不顧自身危險想飛黃騰達，前往世界各地的寶藏殿展開探索。「讓我們一起成為寶藏獵人吧──」克萊‧安東黎西與兒時玩伴們的這段誓言，理應無法順利實現才對。原因是，克萊完全沒有成為寶藏獵人的才能……但不知為何，周遭人對克萊的期待與日俱增，導致他送命的風險不斷攀升。每當實力異於常人的兒時玩伴們大顯身手，克萊向人磕頭道歉的技能就跟著提升……！這是一部關於一名青年想開心退休養老的故事。百戰的寶藏獵人克萊伊，今天也想盡辦法要從各種傳說級的任務中平安隱退！',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>版權由木棉花取得，10月4日起，每週六 23:30後，於下列各流平台陸續更新</p>
            `,
            platforms: ['巴哈姆特動畫瘋','CATCHPLAY+','friDay影音','Hami Video','愛奇藝','KKTV','LiTV線上影視','LINE TV','Muse木棉花-TW YouTube','亂搭！租書網','MyVideo','ofiii 歐飛'],
            animationStudios: ['ゼロジー'],
            broadcastDay: 1,
            broadcastTime: '23:30',
            promoVideos: [
                { title: '製作確定PV', url: 'https://www.youtube.com/embed/kwLmKdefuBo' },
                { title: '正式預告PV', url: 'https://www.youtube.com/embed/h6jYBptsJFk' },
                { title: '正式預告PV2', url: 'https://www.youtube.com/embed/f9iNG9he4bg' },
            ]
        },
        { 
            id: 'non-human-girl',
            title: '對我垂涎欲滴的非人少女',
            originalTitle: '私を喰べたい、ひとでなし',
            image: 'girl.jpeg',
            banner: 'girl.jpeg',
            sourceTag: '漫畫改編',
            broadcastInfo: '電視播出 / 10月2日起 / 每週四 / 22點30分',
            episodes: '編作 / 共13話內容',
            synopsis: '「我來找妳，是為了吃掉妳。」突然出現的人魚少女‧汐莉，溫柔地牽起在靠海城鎮獨居的女高中生‧比名子的手，對她這麼說。比名子的血肉特殊，具有會招惹妖怪的特質。為了尋求她而出現的少女決意保護比名子，等待她成熟、成為最棒的可食狀態時再將她吃乾抹淨。被告知即將發生於不久將來的蠻橫死訊，旋繞於比名子心中的想法是「如果是這個人，或許就能為我帶來....」',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>版權由羚邦取得，10月2日起，每週四 22:30 後，於下列各平台陸續更新</p>
            `,
            platforms: ['巴哈姆特動畫瘋','Ani-One Asia YouTube','Ani-One中文 YouTube','CATCHPLAY+','Crunchyroll','friDay影音','Hami Video','KKTV','LiTV線上影視','LINE TV','MyVideo','ofiii 歐飛'],
            animationStudios: ['スタジオリングス'],
            broadcastDay: 4,
            broadcastTime: '22:30',
            promoVideos: [
                { title: '宣傳PV', url: 'https://www.youtube.com/embed/sGCfgvjn4CU' },
                { title: 'PV', url: 'https://www.youtube.com/embed/LOFvOkqkTYs' },
                { title: 'PV2', url: 'https://www.youtube.com/embed/f9iNG9he4bg' },
            ]
        },
        { 
            id: 'one-final-thing',
            title: '最後可以再拜託您一件事嗎？',
            originalTitle: '最後にひとつだけお願いしてもよろしいでしょうか',
            image: 'last.jpeg',
            banner: 'last.jpeg',
            sourceTag: '漫畫改編',
            broadcastInfo: '電視播出 / 10月4日起 / 每週六 / 0點30分',
            episodes: '編作 / 共13話內容',
            synopsis: '舞會中，史卡蕾特被第二王子凱爾宣告解除婚約，更被加諸莫須有的罪名以及「惡役千金」的稱號，陷入遭眾多貴族譴責的窘境。至今為止不斷忍耐著的她，已經受夠和愚蠢的凱爾繼續交往了！怒上心頭的史卡蕾特說出自己的請託：『請問方便讓我在最後將各位打得落花流水嗎？』',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>版權由木棉花取得，10月4日，星期六 00:30 後，於下列平台陸續更新</p>
            `,
            platforms: ['巴哈姆特動畫瘋','CATCHPLAY+','Crunchyroll','friDay影音','Hami Video','愛奇藝','KKTV','LiTV線上影視','LINE TV','Muse木棉花-TW YouTube','亂搭！租書網','MyVideo','ofiii 歐飛'],
            animationStudios: ['ゼロジー'],
            broadcastDay: 6,
            broadcastTime: '00:30',
            promoVideos: [
                { title: 'PV', url: 'https://www.youtube.com/embed/MoudGf8SP2Y' },
                { title: 'PV2', url: 'https://www.youtube.com/embed/weINAnwuyT8' },
            ]
        },
        {
            id: 'chitose-kun-wa-ramune-bin-no-naka',
            title: '彈珠汽水瓶裡的千歲同學',
            originalTitle: '千歳くんはラムネ瓶のなか',
            image: 'seito.jpeg',
            banner: 'seito.jpeg',
            sourceTag: '輕小說改編',
            broadcastInfo: '電視播出 / 10月15日起 / 每週三 / 0點30分',
            episodes: '編作 / 共13話內容',
            synopsis: '「五班的千歲朔是亂玩女人的渣男」就算在學校匿名網站備受攻擊，依然君臨藤志高中階級制度頂層的現充，千歲朔。他身邊總是圍繞著外表內在都很優秀的一群朋友，像是公主氣場滿點的正宮位‧柊夕湖、努力的後天型現充‧內田優空，以及活力十足的籃球社主將‧青海陽、朔和朋友們在新班級裡的快樂日子才開始沒多久，便有人拜託朔幫助一位把自己關在家裡的學生。本書是他的現充後宮傳，還是？宣告新時代來臨的「現充視角」青春愛情故事，在此堂堂開幕！....」',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>版權由羚邦取得，10月15日起，每週三 00:30 後 ，於下列各平台陸續更新</p>
            `,
            platforms: ['巴哈姆特動畫瘋','Ani-One Asia YouTube','Ani-One中文 YouTube','CATCHPLAY+','Crunchyroll','friDay影音','Hami Video','KKTV','LiTV線上影視','LINE TV','MyVideo','ofiii 歐飛'],
            animationStudios: ['feel.'],
            broadcastDay: 3,
            broadcastTime: '00:30',
            promoVideos: [
                { title: 'PV', url: 'https://www.youtube.com/embed/5FT2xcSvEAQ' },
                { title: 'PV2', url: 'https://www.youtube.com/embed/g39p59JtDfw' },
                { title: 'PV3', url: 'https://www.youtube.com/embed/wC7FYPFHLeQ' },
            ]
        },
        {
            id: 'uma-musume-cinderella-gray-s2',
            title: '賽馬娘 灰髮灰姑娘 第二季度',
            originalTitle: 'ウマ娘 シンデレラグレイ 第2期',
            image: 'hores.jpeg',
            banner: 'hores.jpeg',
            sourceTag: '漫畫改編',
            broadcastInfo: '電視播出 / 10月5日起 / 每週日 / 16點30分',
            episodes: '編作 / 共10話內容',
            synopsis: '本作品是以電子遊戲「賽馬娘 Pretty Derby」為基礎所創作的漫畫，改編自1980年代末期傳奇賽馬小栗帽的競賽生涯。作者為 久住太陽，劇本由 杉浦理史 負責，並由 伊藤隼之介 企畫統籌。而自漫畫第九集單行本開始劇本再加入一人為 Pita。....」',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>版權由Netflix取得，10月5日起，每週日 16:30 後，於下列各平台陸續更新</p>
            `,
            platforms: ['Netflix'],
            animationStudios: ['CygamesPictures'],
            broadcastDay: 7,
            broadcastTime: '16:30',
            promoVideos: [
                { title: 'PV', url: 'https://www.youtube.com/embed/9xGGAYRtDAA' },
            ]
        },
        {
            id: 'my-hero-academia-final-season',
            title: '我的英雄學院 FINAL SEASON',
            originalTitle: '僕のヒーローアカデミア FINAL SEASON',
            image: 'hero.jpg',
            banner: 'hero.jpg',
            sourceTag: '漫畫改編',
            broadcastInfo: '電視播出 / 10月4日起 / 每週六 / 17點30分',
            episodes: '',
            synopsis: '終於將ONE FOR ALL完全解放的出久，對上了本應被奪取身體、如今卻反被吸收意識而徹底覺醒的死柄木。同時，透過年齡逆轉奪回全盛之力的ALL FOR ONE本體，與雖是「無個性」卻身披強化裝甲的「裝甲歐爾麥特」，也迎來了最終對決。....」',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>版權由羚邦取得，10月4日起，每週六 17:30 後，於下列各平台陸續更新</p>
            `,
            platforms: ['巴哈姆特動畫瘋','Ani-One Asia YouTube','Ani-One中文 YouTube','CATCHPLAY+','friDay影音','Hami Video','KKTV','LiTV線上影視','LINE TV','MyVideo','ofiii 歐飛'],
            animationStudios: ['ボンズフィルム'],
            broadcastDay: 6,
            broadcastTime: '17:30',
            promoVideos: [
                { title: 'PV', url: 'https://www.youtube.com/embed/boHnf68mxwk' },
                { title: 'PV2', url: 'https://www.youtube.com/embed/ZKKCpQZjjbI' },
                { title: 'PV3', url: 'https://www.youtube.com/embed/wQgQij8Ry4g' },
            ]
        },
        {
            id: 'gintama-3z-gimpachi-sensei',
            title: '銀魂 3年Z班銀八老師',
            originalTitle: '銀魂 3年Z組銀八先生',
            image: 'gintama.jpeg',
            banner: 'gintama.jpeg',
            sourceTag: '漫畫改編',
            broadcastInfo: '電視播出 / 10月7日起 / 每週二 / 0點0分',
            episodes: '',
            synopsis: '以人氣漫畫《銀魂》番外篇《銀魂 3年Z組銀八先生》衍生小說為基礎製作的動畫<br><br>每天都充斥著亂七八糟的麻煩，但銀八才不會抱著頭煩惱──只是掛著一副裝傻的臉，有時候解決問題，有時候又乾脆放著不管。本以為會透過各種經歷逐漸團結一致──這種事才不會發生呢，大家照樣各自任性妄為，胡鬧亂搞！',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>版權由羚邦取得，10月7日起，每週二 00:00 後，於下列平台陸續更新</p>
            `,
            platforms: ['巴哈姆特動畫瘋','Ani-One Asia YouTube','Ani-One中文 YouTube','CATCHPLAY+','friDay影音','Hami Video','KKTV','LiTV線上影視','LINE TV','MyVideo','ofiii 歐飛'],
            animationStudios: ['BN Pictures'],
            broadcastDay: 2,
            broadcastTime: '00:00',
            promoVideos: [
                { title: 'PV', url: 'https://www.youtube.com/embed/2JPLqGnM9IA' },
                { title: 'PV2', url: 'https://www.youtube.com/embed/CL_qrNqvKHk' },
                { title: 'PV3', url: 'https://www.youtube.com/embed/UXf-WAfTiJw' },
            ]
        },
        {
            id: 'meido-no-mary',
            title: '機械女僕‧瑪麗',
            originalTitle: 'メイドのメリー',
            image: 'meido.jpeg',
            banner: 'meido.jpeg',
            sourceTag: '漫畫改編',
            broadcastInfo: '電視播出 / 10月5日起 / 每週日 / 22點0分',
            episodes: '編作 / 共12話內容',
            synopsis: '作為「機械女僕」，瑪麗發揮自己無表情的特點，全力履行職務，並奮力保護亞瑟免受暗殺者的襲擊。然而，也面臨著溺愛她的亞瑟發現她人類身份的危機，日復一日地驚險刺激、令人心跳不已！以謊言開始的主僕關係，最終發展成意想不到的愛情！？',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>版權由羚邦取得，10月5日起，每週日 22:00 後，於下列平台陸續更新</p>
            `,
            platforms: ['巴哈姆特動畫瘋','Ani-One Asia YouTube','Ani-One中文 YouTube','CATCHPLAY+','friDay影音','Hami Video','KKTV','LiTV線上影視','LINE TV','MyVideo','ofiii 歐飛'],
            animationStudios: ['ゼロジー ✕ リーベル'],
            broadcastDay: 7,
            broadcastTime: '22:00',
            promoVideos: [
                { title: 'PV', url: 'https://www.youtube.com/embed/ai2lFZTq9d0' },
                { title: 'PV2', url: 'https://www.youtube.com/embed/X0um7anNddA' },
            ]
        },
        {
            id: 'assassin-stronger-than-hero',
            title: '身為暗殺者的我明顯比勇者還強',
            originalTitle: '暗殺者の僕が勇者より強いのはどう考えてもおかしい',
            image: 'assassin.jpeg',
            banner: 'assassin.jpeg',
            sourceTag: '輕小說改編',
            broadcastInfo: '電視播出 / 10月7日起 / 每週二 / 1點30分',
            episodes: '',
            synopsis: '織田晶是與同班同學一同被召喚到異世界的高中生。所有同班同學皆因召喚被賦予了外掛能力，而他生來存在感稀薄，獲得了平凡的「暗殺者」能力。',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>版權由木棉花取得，10月7日，每週二 00:30 後，於下列各平台陸續更新</p>
            `,
            platforms: ['巴哈姆特動畫瘋','CATCHPLAY+','Crunchyroll','friDay影音','Hami Video','愛奇藝','KKTV','LiTV線上影視','LINE TV','Muse木棉花-TW YouTube','亂搭！租書網','MyVideo','ofiii 歐飛'],
            animationStudios: ['サンライズ'],
            broadcastDay: 2,
            broadcastTime: '01:30',
            promoVideos: [
                { title: 'PV', url: 'https://www.youtube.com/embed/TPHB6cJw0ZE' },
            ]
        },
        {
            id: 'imouto-sae-ireba-ii',
            title: '朋友的妹妹只纏著我',
            originalTitle: '友達の妹が俺にだけウザい',
            image: 'imouto.jpg',
            banner: 'meido.jpg',
            sourceTag: '輕小說改編',
            broadcastInfo: '電視播出 / 10月5日起 / 每週日 / 1點30分',
            episodes: '編作 / 共12話內容',
            synopsis: '無須結夥，不要女友，朋友唯獨真正有價值的一人。我‧大星明照割捨了「沒效率」的青春，然而有個人卻老是窩在我房間。那傢伙並非我妹，更不是朋友，而是極其煩人的學妹──朋友的妹妹‧小日向彩羽。「學長，來約會吧──！……你以為我會這麼說嗎？」彷彿血管裡流著能量補給飲料的這傢伙老愛纏著我，不時霸佔我的床，還用看得到吃不到的方法色誘我。可是不曉得為什麼，每個人都對我露出一臉羨慕的表情。原來彩羽這傢伙，在外似乎因活潑清純的優等生形象而大受歡迎。喂喂喂……既然如此，妳幹嘛只纏著我啊？',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>版權由羚邦取得，10月5日起，每週日 01:30 後，於下列各平台陸續更新</p>
            `,
            platforms: ['巴哈姆特動畫瘋','Ani-One Asia YouTube','Ani-One中文 YouTube','CATCHPLAY+','friDay影音','Hami Video','KKTV','LiTV線上影視','LINE TV','MyVideo','ofiii 歐飛'],
            animationStudios: ['BLADE'],
            broadcastDay: 7,
            broadcastTime: '01:30',
            promoVideos: [
                { title: 'PV', url: 'https://www.youtube.com/embed/4H35YOILCe4' },
                { title: 'PV2', url: 'https://www.youtube.com/embed/a-OBXNOq58o' },
            ]
        },
        {
            id: 'sanda',
            title: 'SANDA 變身聖誕老人',
            originalTitle: 'SANDA',
            image: 'sanda.jpg',
            banner: 'sanda.jpg',
            sourceTag: '漫畫改編',
            broadcastInfo: '電視播出 / 10月4日起 / 每週六 / 1點53分',
            episodes: '編作 / 共12話內容',
            synopsis: '故事描述，在極端少子化的近未來，有一間以保護為數不多的孩童為名，強迫所有學生住校的學園。某一天，校內發生了一位名叫小野的女學生莫名失蹤，校方卻草率斷定女學生已死的事件。小野的好朋友．冬村四織對此感到疑惑，便決定自行展開調查。但她做的第一件事卻是找同班同學．三田一重的麻煩。只因她知道三田一重其實就是傳說中的聖誕老人。',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>版權由Amazon Prime Video取得，10月4日起，每週六 01:53 後，於下列平台獨家播出</p>
            `,
            platforms: ['Amazon Prime Video'],
            animationStudios: ['サイエンスSARU'],
            broadcastDay: 6,
            broadcastTime: '01:53',
            promoVideos: [
                { title: 'PV', url: 'https://www.youtube.com/embed/S4dwQ3nqU6M' },
                { title: 'PV2', url: 'https://www.youtube.com/embed/X2VRYMWbaes' },
            ]
        },
        {
            id: 'vampire-chan-cant-suck-properly',
            title: '不擅吸血的吸血鬼',
            originalTitle: 'ちゃんと吸えない吸血鬼ちゃん',
            image: 'vampire.jpg',
            banner: 'vampire.jpg',
            sourceTag: '漫畫改編',
            broadcastInfo: '電視播出 / 10月12日起 / 每週日 / 21點30分',
            episodes: '編作 / 共12話內容',
            synopsis: '為<b>二式恭介</b>所創作的漫畫，於 KADOKAWA 的 「月刊ドラゴンエイジ」雜誌連載，載至2025年2月4日為止，已出版七卷單行本。',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>版權由Aniplus取得，10月12日起，每週日 21:30 後，於下列各串流平台陸續更新</p>
            `,
            platforms: ['巴哈姆特動畫瘋','Crunchyroll','friDay影音','Hami Video','KKTV','MyVideo'],
            animationStudios: ['feel.'],
            broadcastDay: 7,
            broadcastTime: '21:30',
            promoVideos: [
                { title: 'PV', url: 'https://www.youtube.com/embed/IQYLQsqO6Vw' },
                { title: 'PV2', url: 'https://www.youtube.com/embed/y9e0wTKaAXI' },
            ]
        },
        {
            id: 'kashiwada-san-and-ota-kun',
            title: '不動聲色的柏田與喜形於色的太田',
            originalTitle: '顔に出ない柏田さんと顔に出る太田君',
            image: 'kashiwada.jpg',
            banner: 'kashiwada.jpg',
            sourceTag: '漫畫改編',
            broadcastInfo: '電視播出 / 10月4日起 / 每週六 / 21點0分',
            episodes: '',
            synopsis: '故事描述，柏田是個不管被怎麼捉弄 都不會把感情顯露在臉上的國中女生。 面對這樣的柏田，太田反而越來越喜歡找她碴， 而且每每都將喜怒哀樂顯露無遺…！？個性相反的兩人之間所發生的競爭？與曖昧的戀愛喜劇？',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>版權由Crunchyroll取得，10月4日起，每週六 21:00 後，於下列各串流平台陸續更新</p>
            `,
            platforms: ['Crunchyroll'],
            animationStudios: ['STUDIO POLON'],
            broadcastDay: 6,
            broadcastTime: '21:00',
            promoVideos: [
                { title: 'PV', url: 'https://www.youtube.com/embed/f4gkeOeiQTQ' },
                { title: 'PV2', url: 'https://www.youtube.com/embed/ZfWsw9daBy8' },
            ]
        },
        {
            id: 'eternal-dusk',
            title: '永遠的黃昏',
            originalTitle: '永久のユウグレ',
            image: 'yugure.jpg',
            banner: 'yugure.jpg',
            sourceTag: '原創動畫',
            broadcastInfo: '電視播出 / 9月26日起 / 每週四 / 23點56分',
            episodes: '編作 / 共13話內容',
            synopsis: '以 AI 技術盛行的未來世界為舞台，所展開的正統愛情故事。故事描述主角姬神晃（姫神アキラ）自長年凍眠甦醒的那刻，等待著他的卻是因戰爭而荒廢的城市。國家早已不復存在這個地方，人們被名為 OWEL 的統一機構管理，婚姻也被名為「ELSI」的機制所取代。在無法接受現實的晃面前，出現了一位與他締結真愛誓言的戀人［王真樹托瓦莎（王真樹トワサ）］神似的機器人「黃昏（ユウグレ）」。不僅如此，面對初次見面的晃，黃昏開口就是向他求婚？！感到困惑的晃，依舊相信著他的戀人還在世界某處活著，因此便與黃昏踏上了尋人之旅。在這趟旅途中，他們將會見識到在這時代下各種愛的形式，並且逐步思考屬於自己的愛是什麼。',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>版權由回歸線娛樂取得，9月26日起，每週四 23:56 後，於下列各平台陸續播出</p>
            `,
            platforms: ['巴哈姆特動畫瘋','CATCHPLAY+','friDay影音','Hami Video','愛奇藝','KKTV','LiTV線上影視','LINE TV','MyVideo','ofiii 歐飛','回歸線娛樂 YouTube'],
            animationStudios: ['P.A.WORKS'],
            broadcastDay: 4,
            broadcastTime: '23:56',
            promoVideos: [
                { title: 'PV', url: 'https://www.youtube.com/embed/iSzAu-ou44Y' },
                { title: 'PV2', url: 'https://www.youtube.com/embed/f02Yho-c-Pw' },
            ]
        },
        {
            id: 'smiling-workplace',
            title: '這裡是充滿笑容的職場。',
            originalTitle: 'ここは笑顔の絶えない職場です。',
            image: 'smiling.jpeg',
            banner: 'smiling.jpeg',
            sourceTag: '漫畫改編',
            broadcastInfo: '電視播出 / 10月6日起 / 每週一 / 22點00分',
            episodes: '編作 / 共13話內容',
            synopsis: '本作中的雙見是個在少女雜誌上連載將棋漫畫的奇特漫畫家。出於職業病，常常會有奇怪的妄想，總是讓助手間不知如何應對。像是一下擔心該不該在深夜把好不容易完成的分鏡傳過去讓責編過目，一下又擔心責編太久沒有回覆分鏡能否過關。此外，因為助手間的畫功很強，因此她很擔心間會離職。但是當間說自己不想當漫畫家時，她又感到可惜……她與助手們的歡樂日常就此展開。',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>版權由曼迪取得，10月6日起，每週一 22:00 後，於下列各平台陸續更新</p>
            `,
            platforms: ['巴哈姆特動畫瘋','friDay影音','Hami Video','愛奇藝','KKTV','MyVideo'],
            animationStudios: ['Voil'],
            broadcastDay: 1,
            broadcastTime: '22:00',
            promoVideos: [
                { title: 'PV', url: 'https://www.youtube.com/embed/RV9zf3K_HkU' },
                { title: 'PV2', url: 'https://www.youtube.com/embed/B3oDeY86E9Q' },
            ]
        },
        {
            id: 'to-your-eternity-s3',
            title: '給不滅的你 第三季',
            originalTitle: '不滅のあなたへ 第3期',
            image: 'eternity.jpeg',
            banner: 'eternity.jpeg',
            sourceTag: '漫畫改編',
            broadcastInfo: '電視播出 / 10月6日起 / 每週一 / 12點00分',
            episodes: '',
            synopsis: '故事進展到現世篇，現世篇是在不死化為聖樹開始紮根後過了約五百年後的時代，文明進程約等於現代，隨著他經過一次次的相遇和一次次的別離，在那無限的時光中，它究竟是否能尋找到生命的意義呢？',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>版權由羚邦取得，10月6日起，每週一 12:00 後，於下列各串流平台陸續更新</p>
            `,
            platforms: ['巴哈姆特動畫瘋','Ani-One Asia YouTube','Ani-One中文 YouTube','CATCHPLAY+','friDay影音','Hami Video','KKTV','LiTV線上影視','LINE TV','MyVideo','ofiii 歐飛'],
            animationStudios: ['ドライブ ✕ STUDIO MASSKET'],
            broadcastDay: 1,
            broadcastTime: '12:00',
            promoVideos: [
                { title: 'PV', url: 'https://www.youtube.com/embed/xc4XlXAbSEQ' },
                { title: 'PV2', url: 'https://www.youtube.com/embed/JmT51BjIJ5w' },
            ]
        },
        {
            id: 'shumatsu-touring',
            title: '末世二輪之旅',
            originalTitle: '終末ツーリング',
            image: 'shumatsu.jpeg',
            banner: 'shumatsu.jpeg',
            sourceTag: '漫畫改編',
            broadcastInfo: '電視播出 / 10月5日起 / 每週日 / 00點00分',
            episodes: '編作 / 共12話內容',
            synopsis: '故事進展到現世篇，現世篇是在不死化為聖樹開始紮根後過了約五百年後的時代，文明進程約等於現代，隨著他經過一次次的相遇和一次次的別離，在那無限的時光中，它究竟是否能尋找到生命的意義呢？',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>版權由羚邦取得，10月6日起，每週一 12:00 後，於下列各串流平台陸續更新</p>
            `,
            platforms: ['巴哈姆特動畫瘋','CATCHPLAY+','friDay影音','Hami Video','KKTV','LiTV線上影視','LINE TV','MyVideo','ofiii 歐飛'],
            animationStudios: ['Nexus'],
            broadcastDay: 7,
            broadcastTime: '00:00',
            promoVideos: [
                { title: 'PV', url: 'https://www.youtube.com/embed/-dC7gzY9pa4' },
                { title: 'PV2', url: 'https://www.youtube.com/embed/H6tlbeQ5rzA' },
            ]
        },
        {
            id: 'bukiyou-na-senpai',
            title: '不中用的前輩。',
            originalTitle: '不器用な先輩。',
            image: 'senpai.jpeg',
            banner: 'senpai.jpeg',
            sourceTag: '漫畫改編',
            broadcastInfo: '電視播出 / 10月2日起 / 每週四 / 22點00分',
            episodes: '編作 / 共12話內容',
            synopsis: '在公司內部風評並不是太好的鐵輪，第一次擔起指導後輩的責任，教育直屬的新進員工龜川。儘管鐵輪嘴上說得嚴厲，不過龜川知道這其實是她笨拙的表達方式。她還是有溫柔的一面，會關心他吃得如何，時時注意他是不是需要幫助，也會適時為部下站出來。無論是工作上，還是私底下，龜川漸漸接觸到隱藏在鐵輪嚴厲態度下的真實樣貌……',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>版權由羚邦取得，10月2日起，每週四，22點00分後，於下列各平台陸續更新</p>
            `,
            platforms: ['巴哈姆特動畫瘋','CATCHPLAY+','friDay影音','Hami Video','KKTV','LiTV線上影視','LINE TV','MyVideo','ofiii 歐飛'],
            animationStudios: ['スタジオエル'],
            broadcastDay: 4,
            broadcastTime: '22:00',
            promoVideos: [
                { title: 'PV', url: 'https://www.youtube.com/embed/o4x8neAoGBs' },
                { title: 'PV2', url: 'https://www.youtube.com/embed/qXfwtywmeQA' },
            ]
        },
        {
            id: 'yano-kun-no-futsuu-no-hibi',
            title: '矢野同學的普通日常',
            originalTitle: '矢野くんの普通の日々',
            image: 'yano.jpeg',
            banner: 'yano.jpeg',
            sourceTag: '漫畫改編',
            broadcastInfo: '電視播出 / 10月1日起 / 每週三 / 01點35分',
            episodes: '編作 / 共12話內容',
            synopsis: '清子被選為班長，而矢野同學姍姍來遲還帶著傷來到學校，兩人的座位被老師安排在隔壁。然而每天都帶著傷來上學的矢野逐漸引起清子的好奇，於是她決定放學後跟蹤，搞懂究竟是怎麼一回事……結果反倒是被對方發現。不過之後雙方開始有了互動，而清子在好友的提醒下才發現自己似乎已經喜歡上矢野。清子為了避免矢野繼續受傷做了許多努力，不過似乎比不上矢野動不動就會受傷的特異體質…。',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>版權由回歸線娛樂取得，10月1日起，每週三 01:35 後，於下列各串流平台陸續更新</p>
            `,
            platforms: ['巴哈姆特動畫瘋','CATCHPLAY+','friDay影音','Hami Video','愛奇藝','KKTV','LiTV線上影視','LINE TV','MyVideo','ofiii 歐飛','回歸線娛樂 YouTube'],
            animationStudios: ['亜細亜堂'],
            broadcastDay: 3,
            broadcastTime: '01:35',
            promoVideos: [
                { title: 'PV', url: 'https://www.youtube.com/embed/m1CHIKyqVCE' },
                { title: 'PV2', url: 'https://www.youtube.com/embed/AVcXFW1fqAk' },
            ]
        },
        {
            id: 'kakuriyo-no-yadomeshi-2',
            title: '妖怪旅館營業中 貳',
            originalTitle: 'かくりよの宿飯 弐',
            image: 'kakuriyo.jpg',
            banner: 'kakuriyo.jpg',
            sourceTag: '輕小說改編',
            broadcastInfo: '電視播出 / 10月1日起 / 每週三 / 23點00分',
            episodes: '編作 / 共12話內容',
            synopsis: '大學生津場木葵繼承能看見妖怪的能力，意外被帶往妖怪旅館「天神屋」，得知祖父留下巨債與「嫁給大老闆抵債」的承諾。拒絕命運的她選擇靠自己工作還債，溫暖又奇幻的生活，即將再度開張',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>版權由回歸線娛樂取得，10月1日起，每週三 23:00 後，於下列各平台播出</p>
            `,
            platforms: ['巴哈姆特動畫瘋','CATCHPLAY+','friDay影音','Hami Video','愛奇藝','KKTV','LiTV線上影視','LINE TV','MyVideo','ofiii 歐飛','回歸線娛樂 YouTube'],
            animationStudios: ['GONZO ✕ マカリア'],
            broadcastDay: 3,
            broadcastTime: '23:00',
            promoVideos: [
                { title: 'PV', url: 'https://www.youtube.com/embed/l90zXY5rJ1c' },
            ]
        },
        {
            id: 'alma-chan-wants-to-be-a-family',
            title: '阿爾瑪醬想成為家人',
            originalTitle: 'アルマちゃんは家族になりたい',
            image: 'alma.jpg',
            banner: 'alma.jpg',
            sourceTag: '漫畫改編',
            broadcastInfo: '電視播出 / 10月5日起 / 每週日 / 23點0分',
            episodes: '編作 / 共11話內容',
            synopsis: '是一部以又強大又可愛的少女型兵器小阿爾瑪及創造她的兩位科學家為主角的喜劇漫畫',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>版權由Crunchyroll取得，10月5日起，每週日 23:00 後，於下列各串流平台陸續更新</p>
            `,
            platforms: ['Hami Video','MyVideo'],
            animationStudios: ['スタジオフラッド'],
            broadcastDay: 7,
            broadcastTime: '23:00',
            promoVideos: [
                { title: 'PV', url: 'https://www.youtube.com/embed/PXecgOZ0o9o' },
            ]
        },
        {
            id: 'wondance',
            title: 'WONDANCE—熱舞青春—',
            originalTitle: 'ワンダンス',
            image: 'wondance.jpeg',
            banner: 'wondance.jpeg',
            sourceTag: '漫畫改編',
            broadcastInfo: '電視播出 / 10月8日起 / 每週三 / 23點45分',
            episodes: '',
            synopsis: '以街舞為題材，刻劃酷勁十足、熱血沸騰的青春物語！！',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>版權由Disney+取得，10月8日起，每週三 23:45 後，於下列各串流平台陸續更新</p>
            `,
            platforms: ['Disney+'],
            animationStudios: ['マッドハウス ✕ サイクロングラフィックス'],
            broadcastDay: 3,
            broadcastTime: '23:45',
            promoVideos: [
                { title: 'PV', url: 'https://www.youtube.com/embed/QqLA-04V_uw' },
                { title: 'PV', url: 'https://www.youtube.com/embed/-0SudgDzshc' },
            ]
        },
        {
            id: 'akujiki-reijou-to-kyouketsu-koushaku',
            title: '惡食千金與狂血公爵',
            originalTitle: '悪食令嬢と狂血公爵',
            image: 'akujiki.jpeg',
            banner: 'akujiki.jpeg',
            sourceTag: '輕小說改編',
            broadcastInfo: '電視播出 / 10月3日起 / 每週五 / 1點00分',
            episodes: '編作 / 共12話內容',
            synopsis: '伯爵千金梅爾菲耶拉因某項「特殊嗜好」而遭其他貴族疏遠，為尋覓婚約者參加宴會的她，竟在宴會中遭魔獸襲擊，被號稱「狂血公爵」的加爾布雷斯公爵所救。對毫無畏懼的梅爾菲耶拉產生興趣的狂血公爵，更對這位被傳言稱為「惡食千金」的少女，那不為人知的「嗜好」展現出好奇心⋯⋯',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>版權由羚邦取得，10月3日起，每週五凌晨1點00分後，於各串流平台陸續更新</p>
            `,
            platforms: ['巴哈姆特動畫瘋','CATCHPLAY+','friDay影音','Hami Video','KKTV','LiTV線上影視','LINE TV','MyVideo','ofiii 歐飛'],
            animationStudios: ['スタジオエル'],
            broadcastDay: 5,
            broadcastTime: '01:00',
            promoVideos: [
                { title: 'PV', url: 'https://www.youtube.com/embed/N0UExdHDozU' },
                { title: 'PV2', url: 'https://www.youtube.com/embed/wvutMIYKa2g' },
            ]
        },
        {
            id: 'court-magician-banished',
            title: '貫徹輔助魔法支援弱小隊友的宮廷魔法師',
            originalTitle: '「弱小パーティ」と馬鹿にされた宮廷魔法師、追放されて最強の冒険者になる',
            image: 'court.jpg',
            banner: 'court.jpg',
            sourceTag: '輕小說改編',
            broadcastInfo: '電視播出 / 10月4日起 / 每週六 / 23點00分',
            episodes: '編作 / 共12話內容',
            synopsis: '一直在幕後支持太子的宮廷魔術師亞列克，因為身份是平民而被開除黨籍並被驅逐隊伍。被驅逐隊伍後，亞列克拜訪了他曾經待過的王立魔法學院，在那裡遇見曾一起組隊的天才輔助魔法師尤爾哈，並被她邀請參加組隊。',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>版權由羚邦取得，10月4日起，每週六 23:00 後，於下列各平台陸續更新</p>
            `,
            platforms: ['巴哈姆特動畫瘋','CATCHPLAY+','friDay影音','Hami Video','KKTV','LiTV線上影視','LINE TV','MyVideo','ofiii 歐飛'],
            animationStudios: ['月虹'],
            broadcastDay: 6,
            broadcastTime: '23:00',
            promoVideos: [
                { title: 'PV', url: 'https://www.youtube.com/embed/XfBW0JjPyt8' },
            ]
        },
        {
            id: 'nohara-hiroshi-hirumeshi-no-ryugi',
            title: '野原廣志 午餐的流派',
            originalTitle: '野原ひろし 昼メシの流儀',
            image: 'nohara.jpeg',
            banner: 'nohara.jpeg',
            sourceTag: '漫畫改編',
            broadcastInfo: '電視播出 / 10月3日起 / 每週五 / 23點30分',
            episodes: '',
            synopsis: '以小新的爸爸、35歲的上班族野原廣志作為主角，講述他對「午餐」的極致講究，在有限的零用錢與午休時間內，他如何精挑細選美食，展現獨特的「午餐之道」。故事不僅描寫廣志享受美食的場景，還穿插料理知識、烹飪方式，甚至包括職場人際關係，例如「請後輩吃飯的苦惱」、「業務工作之間的速食選擇」、「對上司的抱怨」等，對於上班族來說相當有共鳴的職場情境貫穿全作。',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>版權由羚邦取得，10月3日起，每週五 23:30 後，於下列各平台陸續更新</p>
            `,
            platforms: ['巴哈姆特動畫瘋','friDay影音','Hami Video','愛奇藝','KKTV','MyVideo',],
            animationStudios: ['DLE'],
            broadcastDay: 5,
            broadcastTime: '23:30',
            promoVideos: [
            ]
        },
        {
            id: 'hero-papa-elf-mama-musume',
            title: '轉生後的我成了英雄爸爸和精靈媽媽的女兒',
            originalTitle: '転生したら英雄の父と精霊の母の娘になりました。',
            image: 'tensei.jpg',
            banner: 'tensei.jpg',
            sourceTag: '輕小說改編',
            broadcastInfo: '電視播出 / 10月5日起 / 每週日 / 23點30分',
            episodes: '編作 / 共12話內容',
            synopsis: '當王國遭到人稱「魔物風暴」的大量魔物襲擊時，與精靈締結契約的青年英雄挺身而出，解決了危機，卻也因此喪命被帶到精靈界。一晃眼過了十年，英雄再度回到這個國家……並且帶著他的精靈女兒！而誰也不知道，這個天生具有操控元素技能、名叫「艾倫」的可愛小女孩，竟是埋首於研究工作的研究員轉生的！究竟艾倫要如何暗中幫助爸爸，解決家族與國家的危機？精靈艾倫，運用前世的知識和精靈的力量，守護重要的家人！',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>版權由羚邦取得，10月5日起，每週日 23:30 後，於下各平台陸續更新</p>
            `,
            platforms: ['巴哈姆特動畫瘋','CATCHPLAY+','friDay影音','Hami Video','KKTV','LiTV線上影視','LINE TV','MyVideo','ofiii 歐飛'],
            animationStudios: ['J.C.STAFF'],
            broadcastDay: 7,
            broadcastTime: '23:30',
            promoVideos: [
                { title: 'PV', url: 'https://www.youtube.com/embed/32q8bJCuY1s' },
            ]
        },
        {
            id: 'yasei-no-last-boss-ga-arawareta',
            title: '野生的大魔王出現了！',
            originalTitle: '野生のラスボスが現れた！',
            image: 'yasei.jpeg',
            banner: 'yasei.jpeg',
            sourceTag: '輕小說改編',
            broadcastInfo: '電視播出 / 9月27日起 / 每週六 / 22點00分 ',
            episodes: '',
            synopsis: '大學生津場木葵繼承能看見妖怪的能力，意外被帶往妖怪旅館「天神屋」，得知祖父留下巨債與「嫁給大老闆抵債」的承諾。拒絕命運的她選擇靠自己工作還債，溫暖又奇幻的生活，即將再度開張',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>版權由回歸線娛樂取得，9月27日起，每週六 22點00分後，於下列各平台陸續更新</p>
            `,
            platforms: ['巴哈姆特動畫瘋','CATCHPLAY+','friDay影音','Hami Video','愛奇藝','KKTV','LiTV線上影視','LINE TV','MyVideo','回歸線娛樂 YouTube'],
            animationStudios: ['ワオワールド'],
            broadcastDay: 6,
            broadcastTime: '22:00',
            promoVideos: [
                { title: 'PV', url: 'https://www.youtube.com/embed/ceqtf56Pm1w' },
                { title: 'PV', url: 'https://www.youtube.com/embed/bdEWrmyDw0w' },
                { title: 'PV', url: 'https://www.youtube.com/embed/KVT_ODZn9Ys' },
            ]
        },
        {
            id: 'ranma-remake-s2',
            title: '亂馬1/2（重製版）第二季',
            originalTitle: 'らんま1/2 (2024) 第2期',
            image: 'ranma.jpg',
            banner: 'ranma.jpg',
            sourceTag: '漫畫改編',
            broadcastInfo: '電視播出 / 10月5日起 / 每週日 / 0點55分',
            episodes: '',
            synopsis: '早乙女亂馬是一名修習武學的少年，來到中國青海省咒泉鄉（虛構的地點）修行，不慎落入「女溺泉」（又稱娘溺泉），因而遇到冷水會變成女孩，遇到熱水又恢復成男孩。亂馬的父親、朋友等也因為掉到不同的泉水裡會變身為熊貓、小黑豬、貓、鴨子等。這種變身的本領給他們造成了不少麻煩，搞出不少笑料。',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>版權由Netflix取得，10月5日起，每週日 00:55 後，於下列各平台陸續更新</p>
            `,
            platforms: ['Netflix'],
            animationStudios: ['MAPPA'],
            broadcastDay: 7,
            broadcastTime: '00:55',
            promoVideos: [
                { title: 'PV', url: 'https://www.youtube.com/embed/7hJcGMrhurc' },
                { title: 'PV', url: 'https://www.youtube.com/embed/ltuVlsFkEjk' },
            ]
        },
        {
            id: 'mugen-gacha',
            title: '「無限扭蛋」獲得等級9999的夥伴',
            originalTitle: '信じていた仲間達にダンジョン奥地で殺されかけたがギフト『無限ガチャ』でレベル9999の仲間達を手に入れて元パーティーメンバーと世界に復讐&『ざまぁ!』します!',
            image: 'mugen.jpg',
            banner: 'mugen.jpg',
            sourceTag: '輕小說改編',
            broadcastInfo: '電視播出 / 10月3日起 / 每週五 / 23點00分',
            episodes: '編作 / 共12話內容',
            synopsis: '由九個不同種族組成的冒險者隊伍「種族集會」中，在所有能力上都遜色於其他種族的主人公萊特被他信任的同伴背叛，並在最殘酷的地下城「深淵」中被殺死。在萊特存活後決定利用自己認為沒用的技能「無限扭蛋」獲得9999級的同伴，並向欺騙自己的小隊成員展開報復。',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>版權由木棉花取得，10月3日起，每週五 23:00 後，於下列各平台陸續更新</p>
            `,
            platforms: ['巴哈姆特動畫瘋','CATCHPLAY+','friDay影音','Hami Video','愛奇藝','KKTV','LiTV線上影視','LINE TV','Muse木棉花-TW YouTube','亂搭！租書網','MyVideo','Netflix','ofiii 歐飛'],
            animationStudios: ['J.C.STAFF'],
            broadcastDay: 5,
            broadcastTime: '23:00',
            promoVideos: [
                { title: 'PV', url: 'https://www.youtube.com/embed/tQGnDh4YuH4' },
            ]
        },
        {
            id: 'ganso-bang-dream-chan',
            title: '元祖！BanG Dream Chan',
            originalTitle: '元祖！バンドリちゃん',
            image: 'bandori.jpeg',
            banner: 'bandori.jpeg',
            sourceTag: '輕小說改編',
            broadcastInfo: '網路播出 / 10月2日起 / 每週四 / 22點0分',
            episodes: '編作 / 共12話內容 / 每集兩分鐘',
            synopsis: 'BanDream系列短篇Q版動畫',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>暫無資訊</p>
            `,
            platforms: [],
            animationStudios: ['株式会社AtoriE'],
            promoVideos: [
            ]
        },
        {
            id: 'isekai-quartet-3',
            title: '異世界四重奏3',
            originalTitle: '異世界かるてっと3',
            image: 'isekai.jpg',
            banner: 'isekai.jpg',
            sourceTag: '原創動畫',
            broadcastInfo: '電視播出 / 10月13日起 / 每週一 / 22點30分',
            episodes: '編作 / 共11話內容',
            synopsis: '《異世界四重奏》是由多部轉生異世界輕小說結合而成的Q版動畫，故事從在某天出現一個神秘的按鈕。按下按鈕後，就被召喚到另一個異世界，與其他異世界召喚來的人聚集在一起。<br><br>第三季將加入《我想成為影之強者！》，整部作品的登場角色則多達到70名以上。',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>暫無資訊</p>
            `,
            platforms: [],
            animationStudios: ['スタジオぷYUKAI'],
            promoVideos: [
                { title: 'PV', url: 'https://www.youtube.com/embed/yRKG0QKz514' },
            ]
        },
        {
            id: 'koi-suru-isyuzoku',
            title: '跨越種族與你相戀',
            originalTitle: '種族を超えて君を愛する',
            image: 'isyuzoku.jpeg',
            banner: 'isyuzoku.jpeg',
            sourceTag: '漫畫改編',
            broadcastInfo: '電視播出 / 10月14日起 / 每週二 / 23點30分',
            episodes: '',
            synopsis: '20XX年，獸人逐漸融入人類世界。主人公朝霞萬里就住在人類與獸人共同生存的小鎮上。某日，作為特招生的獸人飛高繫與朝霞萬里相遇。在與飛高繫的相處中，朝霞萬里逐漸被飛高繫的溫柔所吸引。',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>版權由Crunchyroll取得，10月14日起，每週二 23:30 後，於下列各串流平台陸續更新</p>
            `,
            platforms: ['Crunchyroll'],
            animationStudios: ['ミルパンセ'],
            broadcastDay: 2,
            broadcastTime: '23:30',
            promoVideos: [
                { title: 'PV', url: 'https://www.youtube.com/embed/9asZ1Y37YUs' },
                { title: 'PV2', url: 'https://www.youtube.com/embed/NmmfDtxCWeQ' },
            ]
        },
        {
            id: 'mushoku-eiyuu',
            title: '無職英雄：技能什麼的毫無用處',
            originalTitle: '無職の英雄 別にスキルなんか要らなかったんだが',
            image: 'mushoku.jpg',
            banner: 'mushoku.jpg',
            sourceTag: '輕小說改編',
            broadcastInfo: '電視播出 / 10月1日起 / 每週三 / 22點0分',
            episodes: '編作 / 共12話內容',
            synopsis: '在這個世界，每當成長到了 10 歲的時候就可以在教會看到自己的天職；由女神所賜福的職業，讓被祝福的受職者能夠使用各式各樣強力的技能，越是上位的職業所能使用的技能自然更加優異，也因此上位職業者更加能獲得他人的崇拜、尊重的目光，獲得更高的社會地位。<br><br>然則歡欣鼓舞的在亞雷爾 10 歲生日來到神殿，卻收到神殿祭司相當於被女神放棄，近乎死刑的宣判…亞雷爾的神諭畫面上一片漆黑，是不能誕生任何技能的「無職者」',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>版權由羚邦取得，9月24日起，每週三，21點00分後，於下列平台陸續更新</p>
            `,
            platforms: ['巴哈姆特動畫瘋','CATCHPLAY+','friDay影音','Hami Video','KKTV','LiTV線上影視','LINE TV','MyVideo','ofiii 歐飛'],
            animationStudios: ['studio A-CAT'],
            broadcastDay: 3,
            broadcastTime: '21:00',
            promoVideos: [
                { title: 'PV', url: 'https://www.youtube.com/embed/0pwdLZbLOjU' },
            ]
        },
        {
            id: 'digimon-beatbreak',
            title: '數碼寶貝 BEATBREAK',
            originalTitle: 'デジモンビートブレイク',
            image: 'digimon.jpg',
            banner: 'digimon.jpg',
            sourceTag: '原創動畫',
            broadcastInfo: '電視播出 / 10月5日起 / 每週日 / 9點0分',
            episodes: '',
            synopsis: '本作故事是個透過「情緒能量」發展的世界，然而當中卻也有著潛伏在黑暗中吞噬情緒的數碼生命體。主角天馬明日，在某日邂逅月光獸後，變捲了了一串非日常的世界中。',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>暫無資訊</p>
            `,
            platforms: [],
            animationStudios: ['東映アニメーション'],
            promoVideos: [
                { title: 'PV', url: 'https://www.youtube.com/embed/WgCglA2Twnw' },
            ]
        },
        {
            id: 'hyakusho-kizoku-s3',
            title: '百姓貴族 第三季',
            originalTitle: '百姓貴族 3rd Season',
            image: 'hyakusho.jpeg',
            banner: 'hyakusho.jpeg',
            sourceTag: '漫畫改編',
            broadcastInfo: '電視播出 / 10月3日起 / 每週五 / 21點54分',
            episodes: '編作 / 共12話內容',
            synopsis: '作者以自己作為主角，描述她在成為漫畫家之前，曾經在日本的糧食倉庫北海道務農七年故事。在這七年的時間裡，她跟著家人養牛、擠奶、耕田，小時候甚至還唸過農業高中，資歷非常的奇特。作品透過她特有且超爆笑的創作手法介紹鄉下務農生活的日常。',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>暫無資訊</p>
            `,
            platforms: [],
            animationStudios: ['Pie in the sky'],
            promoVideos: [
                { title: 'PV', url: 'https://www.youtube.com/embed/2wh9yN8lVW0' },
            ]
        },
        {
            id: 'sozai-saishuka-no-isekai-ryokouki',
            title: '素材採集家的異世界旅行記',
            originalTitle: '素材採取家の異世界旅行記',
            image: 'sozai.jpg',
            banner: 'sozai.jpg',
            sourceTag: '輕小說改編',
            broadcastInfo: '電視播出 / 10月7日起 / 每週二 / 0點0分',
            episodes: '編作 / 共12話內容',
            synopsis: '一位普通上班族神城武，被轉生到了劍與魔法的異世界。而神明為了讓他能在異世界好好生活，給了他多種不同的能力。包含身體強化、超強魔力、以及能夠幾乎不設限發掘素材，外掛般的「探查技能」。而本作就是描述他利用這些能力，在異世界展開一段悠閒冒險的經過。',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>版權由木棉花取得，9月29日起，每週一 23:30後於下列各平台陸續更新</p>
            `,
            platforms: ['巴哈姆特動畫瘋','CATCHPLAY+','friDay影音','Hami Video','愛奇藝','KKTV','LiTV線上影視','LINE TV','Muse木棉花-TW YouTube','亂搭！租書網','MyVideo','Netflix','ofiii 歐飛'],
            animationStudios: ['タツノコプロ ✕ SynergySP'],
            broadcastDay: 1,
            broadcastTime: '23:30',
            promoVideos: [
                { title: 'PV', url: 'https://www.youtube.com/embed/https://youtu.be/hHwaVf9L72Q' },
                { title: 'PV2', url: 'https://www.youtube.com/embed/gzr-d0k_AsU' },
            ]
        },
        {
            id: 'gnosia-anime',
            title: 'GNOSIA',
            originalTitle: 'グノーシア',
            image: 'gnosia.jpg',
            banner: 'gnosia.jpg',
            sourceTag: '遊戲改編',
            broadcastInfo: '電視播出 / 10月12日起 / 每週日 / 0點0分',
            episodes: '',
            synopsis: '是以日式狼人殺為主要玩法的SCI-FI（科幻）角色扮演遊戲，玩家扮演的主角需要在約15分鐘一盤的狼人殺遊戲中，經歷輪迴，認識其他角色，尋找這艘宇宙飛船上隱藏的真相。',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>版權由曼迪取得，10月12日起，每週日 00:30 後，於下列各平台陸續更新</p>
            `,
            platforms: ['巴哈姆特動畫瘋','friDay影音','Hami Video','愛奇藝','KKTV','MyVideo'],
            animationStudios: ['domerica'],
            broadcastDay: 7,
            broadcastTime: '00:30',
            promoVideos: [
                { title: 'PV', url: 'https://www.youtube.com/embed/xHowIeFWKqk' },
            ]
        },
        {
            id: 'tensei-akujo-no-black-history',
            title: '轉生惡女的黑歷史',
            originalTitle: '転生悪女の黒歴史',
            image: 'akujo.jpeg',
            banner: 'akujo.jpeg',
            sourceTag: '遊戲改編',
            broadcastInfo: '電視播出 / 10月9日起 / 每週四 / 0點0分',
            episodes: '編作 / 共12話內容',
            synopsis: '佐藤心晴有一本「黑歷史」。那是耗上整個國中時期所寫出來的一部轉生為伯爵千金心晴與騎士相愛的故事！10年後，正當媽媽即將發現「黑歷史」的存在時，焦急的心晴卻遭逢車禍身亡，而當她再次睜開眼時｜她已轉生為「黑歷史」故事中的最強惡女．依雅娜！！依雅娜是一名想要暗殺姊姊．心晴的角色。總而言之現在得快點想起「黑歷史」的內容，才能避免被插上死亡旗幟啊！？',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>版權由曼迪取得，10月9日起，每週四 00:00 後，於各下列平台陸續更新</p>
            `,
            platforms: ['巴哈姆特動畫瘋','friDay影音','Hami Video','愛奇藝','KKTV','MyVideo'],
            animationStudios: ['スタジオディーン'],
            broadcastDay: 4,
            broadcastTime: '00:00',
            promoVideos: [
                { title: 'PV', url: 'https://www.youtube.com/embed/cVdJg0zGPsA' },
                { title: 'PV', url: 'https://www.youtube.com/embed/1b0qYen6jUU' },
            ]
        },
        {
            id: 'ao-no-orchestra-s2',
            title: '藍色管弦樂 第二季',
            originalTitle: '青のオーケストラ 第2期',
            image: 'orchestra.jpeg',
            banner: 'orchestra.jpeg',
            sourceTag: '漫畫改編',
            broadcastInfo: '電視播出 / 10月5日起 / 每週日 / 17點0分',
            episodes: '編作 / 共21話內容',
            synopsis: '為<b>二式恭介</b>所創作的漫畫，於 KADOKAWA 的 「月刊ドラゴンエイジ」雜誌連載，載至2025年2月4日為止，已出版七卷單行本。',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>版權由Aniplus取得，10月5日起，每週日 17:00 後，於下列各串流平台陸續更新</p>
            `,
            platforms: ['巴哈姆特動畫瘋','friDay影音','Hami Video','KKTV','MyVideo'],
            animationStudios: ['日本アニメーション'],
            broadcastDay: 7,
            broadcastTime: '17:00',
            promoVideos: [
                { title: 'PV', url: 'https://www.youtube.com/embed/rJtAcgpJEwI' },
            ]
        },
        {
            id: 'record-of-ragnarok-s3',
            title: '終末的女武神 第三季',
            originalTitle: '終末のワルキューレ III',
            image: 'hores.jpeg',
            banner: 'hores.jpeg',
            sourceTag: '漫畫改編',
            broadcastInfo: '網路播出 / 2025-12 首播',
            episodes: '編作 / 共10話內容',
            synopsis: '眾神在天界每千年就會舉辦一次的「人類存亡會議」當中決定要消滅掉人類，為了推翻這個命運，人類史上最強的 13 人挺身而出，而迎戰他們的則是天界最強的 13 位神明。賭上人類存亡的戰爭，現在即將展開。 久住太陽，劇本由 杉浦理史 負責，並由 伊藤隼之介 企畫統籌。而自漫畫第九集單行本開始劇本再加入一人為 Pita。....」',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>版權由Netflix取得，網路播出 2025-12 首播，於下列各平台陸續更新</p>
            `,
            platforms: ['Netflix'],
            animationStudios: ['ゆめ太カンパニー ✕ MARU'],
            promoVideos: [
                { title: 'PV', url: 'https://www.youtube.com/embed/4a2sDVdHuFU' },
                { title: 'PV', url: 'https://www.youtube.com/embed/Cl5afD9sHXw' },
            ]
        },
        {
            id: 'higashijima-tanzaburou-kamen-rider-ni-naritai',
            title: '東島丹三郎想成為假面騎士',
            originalTitle: '東島丹三郎は仮面ライダーになりたい',
            image: 'mushoku.jpg',
            banner: 'mushoku.jpg',
            sourceTag: '漫畫改編',
            broadcastInfo: '電視播出 / 10月5日起 / 每週日 / 0點30分',
            episodes: '',
            synopsis: '如同作品標題所描述，故事是以東島丹三郎作為主角，描述熱愛特攝影集《假面騎士》系列的他，縱使邁入知天命之年仍不忘鍛鍊自己。然而就在某日，在路上偶然碰到裝扮成邪惡組織「修卡」戰鬥員的銀行搶匪，他選擇戴上了假面騎士 1 號的面具挺身而出？！',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>版權由羚邦取得，10月5日起，每週日凌晨1點00分後，於各串流平台陸續更新</p>
            `,
            platforms: ['巴哈姆特動畫瘋','CATCHPLAY+','friDay影音','Hami Video','KKTV','LiTV線上影視','LINE TV','MyVideo','ofiii 歐飛'],
            animationStudios: ['ライデンフィルム'],
            broadcastDay: 7,
            broadcastTime: '01:00',
            promoVideos: [
                { title: 'PV', url: 'https://www.youtube.com/embed/Tz6Rj6OD7QA' },
            ]
        },
        {
            id: 'mahou-no-okusuri-choudai',
            title: '魔法藥水救救我',
            originalTitle: '魔法のおくすりちょうだい',
            image: 'mahou.jpeg',
            banner: 'mahou.jpeg',
            sourceTag: '輕小說改編',
            broadcastInfo: '電視播出 / 10月3日起 / 每週五 / 1點0分',
            episodes: '',
            synopsis: '描述平凡的高中女生小楓，闖進了有著獸人、精靈和龍的異世界。小楓發現自己帶的背包裡，有一本從來沒看過的書，書裡記載的是魔法藥水的調製方法，而且還只要唸一句「生成」即可。小楓半信半疑地試了一下，竟然真的成功了。對於突然被丟進異世界的小楓而言，這些藥水便成了維繫她生活的糧食。因為她做出來的這些魔法藥水，可以賣個很漂亮的價錢。小楓一邊期待著有朝一日能夠返回原本的世界，一邊在有魔法藥水維生的情況下，在異世界努力奮鬥著。',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>版權由羚邦取得，10月3日起，每週日凌晨1點00分後，於各串流平台陸續更新</p>
            `,
            platforms: ['巴哈姆特動畫瘋','CATCHPLAY+','friDay影音','Hami Video','KKTV','LiTV線上影視','LINE TV','MyVideo','ofiii 歐飛'],
            animationStudios: ['Imagica Infos ✕ Imageworks Studio'],
            broadcastDay: 5,
            broadcastTime: '01:00',
            promoVideos: [
                { title: 'PV', url: 'https://www.youtube.com/embed/B8-jCAksIF4' },
            ]
        },
        {
            id: 'cats-eye-2025',
            title: 'CAT’S EYE – 貓眼',
            originalTitle: 'CAT’S♥EYE',
            image: 'cat.jpg',
            banner: 'cat.jpg',
            sourceTag: '漫畫改編',
            broadcastInfo: '網路播出 / 9月26日起 / 每週五 / 15點0分',
            episodes: '編作 / 共12話內容',
            synopsis: '貓眼是一個神秘的藝術品怪盜三人組，刑警俊夫一直鍥而不捨的追捕她們。但他不知道的是，怪盜三人組的二姐正是他的女朋友瞳。',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>版權由Disney+取得，9月26日起，每週五 15:00 後，於下列各串流平台陸續更新</p>
            `,
            platforms: ['Disney+'],
            animationStudios: ['LIDEN FILMS'],
            broadcastDay: 5,
            broadcastTime: '15:00',
            promoVideos: [
                { title: 'PV', url: 'https://www.youtube.com/embed/HZSNpLPNX-o' },
            ]
        },
        {
            id: 'hoshi-yori-mo-taiyou-yori-mo',
            title: '星辰光輝更勝太陽',
            originalTitle: '星よりも太陽よりも',
            image: 'hoshi.jpg',
            banner: 'hoshi.jpg',
            sourceTag: '漫畫改編',
            broadcastInfo: '電視播出 / 10月2日起 / 每週四 / 23點56分',
            episodes: '',
            synopsis: '本作故事描述，岩田朔英是個健壯度大於平均值的女孩。她暗戀著弱小又常受到自己幫助的神城光輝，但他長高，變成了萬人迷後，已是遙遠的存在。在這樣的情況下，他們國中最後一場運動會同組，初戀會就此開始轉動嗎…？',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>版權由Amazon Prime Video取得，10月2日起，每週四 23:56 後，於下列平台獨家播出</p>
            `,
            platforms: ['Amazon Prime Video'],
            animationStudios: ['サイエンスSARU'],
            broadcastDay: 4,
            broadcastTime: '23:56',
            promoVideos: [
                { title: 'PV', url: 'https://www.youtube.com/embed/ppuYtzTg83Y' },
                { title: 'PV2', url: 'https://www.youtube.com/embed/ASdWWKeNBlI' },
            ]
        },
        {
            id: 'tales-of-wedding-rings-s2',
            title: '婚戒物語 第二季',
            originalTitle: '婚戒物語 第2期',
            image: 'tales.jpg',
            banner: 'tales.jpg',
            sourceTag: '輕小說改編',
            broadcastInfo: '電視播出 / 10月4日起 / 每週六 / 21點30分',
            episodes: '編作 / 共13話內容',
            synopsis: '十年之前，少女野中姬乃在一陣光芒中走進少年佐藤的生活；十年之後，聽到青梅竹馬親口向自己道別，佐藤忍不住就追隨了她的腳步，衝進了光芒之中……一睜開眼，只見自己進入了奇幻故事般的世界中。還搞不清楚狀況的他，在被稱為公主的姬乃一吻之下，便成為了那個世界眾所期盼的傳說勇者‧戒王！全新異世界新婚愛情喜劇就此展開。',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>版權由羚邦取得，10月4日起，每週六 20:30 後，於下列各平台陸續更新</p>
            `,
            platforms: ['巴哈姆特動畫瘋','CATCHPLAY+','friDay影音','Hami Video','KKTV','LiTV線上影視','LINE TV','MyVideo','ofiii 歐飛'],
            animationStudios: ['Staple Entertainment'],
            broadcastDay: 6,
            broadcastTime: '21:30',
            promoVideos: [
                { title: 'PV', url: 'https://www.youtube.com/embed/MGyhnSJWt2I' },
            ]
        },
        {
            id: 'twisted-wonderland-anime',
            title: '迪士尼 扭曲仙境',
            originalTitle: 'ディズニー ツイステッドワンダーランド',
            image: 'twisted.jpg',
            banner: 'twisted.jpg',
            sourceTag: '遊戲改編',
            broadcastInfo: '網路播出 / 10月29日起 / 每週三',
            episodes: '',
            synopsis: '原作手機遊戲是由 Aniplex 與日本迪士尼合力打造，以迪士尼中登場的反派角色為靈感編織而成，是一款結合節奏與戰鬥的壞蛋學園冒險遊戲。故事描述受魔法鏡子引導而召喚至異世界「扭曲仙境」的主角，誤打誤撞來到名門魔法士養成學校「暗夜渡鴉學園」，在這裡與一群問題兒童合作，找出回到原本世界的方法。',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>版權由Disney+取得，10月29日起，每週三，於下列各串流平台陸續更新</p>
            `,
            platforms: ['Disney+'],
            animationStudios: ['ゆめ太カンパニー ✕ グラフィニカ'],
            promoVideos: [
                { title: 'PV', url: 'https://www.youtube.com/embed/gvvakdu1qzI' },
            ]
        },
        {
            id: 'ninja-to-gokudo',
            title: '忍者和極道',
            originalTitle: '忍者と極道',
            image: 'ninja.jpeg',
            banner: 'ninja.jpeg',
            sourceTag: '漫畫改編',
            broadcastInfo: '電視播出 / 10月8日起 / 每週三 / 1點59分',
            episodes: '',
            synopsis: '忍者在暗中驅除邪惡。極道聚集孤獨的邊緣人，犯下罪行。幾個世紀前結下的怨恨，如今重新點燃。忍者邂逅了擁有商人外表的極道。在彼此不知對方真實身分的情況下，兩人因動漫而結緣，但忍者與極道之間的戰爭愈演愈烈。忍者與極道，誰能生還，誰將滅亡？',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>版權由Amazon Prime Video取得，10月8日起，每週三，凌晨1點30分後</p>
            `,
            platforms: ['Amazon Prime Video'],
            animationStudios: ['スタジオディーン'],
            broadcastDay: 3,
            broadcastTime: '01:30',
            promoVideos: [
                { title: 'PV', url: 'https://www.youtube.com/embed/CQgWUYsmbrE' },
            ]
        },
        {
            id: 'kingdom-s6',
            title: '王者天下 第六季',
            originalTitle: 'キングダム 第6シリーズ',
            image: 'kingdom.jpg',
            banner: 'kingdom.jpg',
            sourceTag: '漫畫改編',
            broadcastInfo: '電視播出 / 10月5日起 / 每週日 / 0點10分',
            episodes: '',
            synopsis: '在第六季的故事中，秦國將面對與趙國的全面戰爭，為了對抗趙國天才軍師李牧，由王翦、桓騎、楊端和所率領的三軍組成聯合軍。信所率領的飛信隊、蒙恬率領的樂華隊、王賁率領的玉鳳隊，也將加入戰局。主視覺中登場的是肩負新時代的信、蒙恬、王賁，以及在鄴攻略戰中擔任總大將、同時也是王賁之父的軍略家王翦。畫面中，信手握王騎的長矛，與其他三人一同迎向即將與趙展開的激烈戰鬥。',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>版權由曼迪取得，10月7日起，每週二 00:00 後，於下列各平台陸續更新</p>
            `,
            platforms: ['巴哈姆特動畫瘋','friDay影音','Hami Video','愛奇藝','KKTV','MyVideo'],
            animationStudios: ['ぴえろ ✕ スタジオ サインポスト'],
            broadcastDay: 2,
            broadcastTime: '00:00',
            promoVideos: [
                { title: 'PV', url: 'https://www.youtube.com/embed/IT5EyilwgoQ' },
            ]
        },
        {
            id: 'lets-play-quest-darake-no-mylife',
            title: 'Let\'s Play 充滿挑戰的人生',
            originalTitle: 'Let\'s Play クエストだらけのマイライフ',
            image: 'let.jpg',
            banner: 'imageslet.jpg',
            sourceTag: '漫畫改編',
            broadcastInfo: '電視播出 / 10月2日起 / 每週四 / 0點45分',
            episodes: '',
            synopsis: ' 22歲的軟體設計師珊姆・楊，從小就是遊戲迷，學生時代完全沉浸在遊戲設計中，最終充滿自信地上架了冒險解謎遊戲「RUMINATE」。但是，超人氣遊戲直播主馬歇爾・羅卻對這款遊戲給予嚴厲批評，讓珊姆作為遊戲開發者的未來蒙上陰影。更麻煩的是，馬歇爾竟然搬到了珊姆的隔壁！以跟馬歇爾認識為契機，珊姆和公司的上司查爾斯・瓊斯，還有青梅竹馬、也是常去的咖啡店店員林克・哈德森等人的關係開始慢慢產生變化。 從小被父母過度保護，戀愛經驗為零的珊姆，雖然對男性們的突然接近感到困惑，但也漸漸地敞開心房。',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>版權由回歸線娛樂取得，10月2日起，每週四 01:15 後，於下列各平台陸續更新</p>
            `,
            platforms: ['巴哈姆特動畫瘋','CATCHPLAY+','friDay影音','Hami Video','愛奇藝','KKTV','LiTV線上影視','LINE TV','MyVideo','回歸線娛樂 YouTube'],
            animationStudios: ['OLM'],
            broadcastDay: 6,
            broadcastTime: '22:00',
            promoVideos: [
                { title: 'PV', url: 'https://www.youtube.com/embed/UQNzUCyYxLM' },
                { title: 'PV', url: 'https://www.youtube.com/embed/Z3kar5RWSXM' },
            ]
        },
        {
            id: 'debu-to-koi-to-ayamachi-to',
            title: '胖子與愛情以及過錯！',
            originalTitle: 'デブとラブと過ちと！',
            image: 'debu.jpg',
            banner: 'debu.jpg',
            sourceTag: '漫畫改編',
            broadcastInfo: '電視播出 / 10月6日起 / 每週一 / 23點0分',
            episodes: '',
            synopsis: '故事描述，內心非常自卑的夢子有一天發生了重大意外。好不容易撿回一條命，然而醒過來的她卻變得簡直判若兩人！？「這是…我…！？超可愛的！」面對跟以前有了 180 度大轉變的她，周圍的人隱藏不住驚訝與困惑…。但是，環境因為想法變得超正面的夢子而大幅改變起來──每個人都有煩惱與自卑之處，不同人物所隱藏的這些心結，夢子將會一一擊破！',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>版權由曼迪取得，10月6日起，每週一 23:00 後，於下各平台陸續更新</p>
            `,
            platforms: ['巴哈姆特動畫瘋','friDay影音','Hami Video','愛奇藝','KKTV','MyVideo'],
            animationStudios: ['Marvy Jack'],
            broadcastDay: 1,
            broadcastTime: '23:00',
            promoVideos: [
                { title: 'PV', url: 'https://www.youtube.com/embed/7n3BS4ZxXpA' },
                { title: 'PV2', url: 'https://www.youtube.com/embed/B0OmSeYS46w' },
            ]
        },
        {
            id: 'shabake',
            title: '娑婆氣',
            originalTitle: 'しゃばけ',
            image: 'shabake.jpeg',
            banner: 'shabake.jpeg',
            sourceTag: '小說改編',
            broadcastInfo: '電視播出 / 10月3日起 / 每週五 / 23點30分',
            episodes: '編作 / 共13話內容',
            synopsis: '江戶時代，富商小開一太郎自小便有來歷不明的妖怪仁吉與佐助忠心耿耿守護到大，年已17歲，容貌秀氣，卻體弱多病，時常纏綿病榻與生死搏鬥，導致父母相當溺愛，兩位妖怪守護者照料得是滴水不漏。由於兩名護衛的緣故，一太郎從小就對妖怪習以為常，關係良好。只是江戶時代的街頭雖然繁華熱鬧，卻也存在晦暗的一面。天真無邪、養在深閨初長成的少主，想偷偷逃離過於嚴密的保護網，獨自探索安全堡壘之外的世界，越常常不巧捲入黑暗的懸疑事件中，鬧得兩名護衛得想盡辦法救助少主脫離險境。',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>版權由羚邦取得，10月4日起，每週六 00:00 後，於下列平台陸續更新</p>
            `,
            platforms: ['巴哈姆特動畫瘋','CATCHPLAY+','friDay影音','Hami Video','KKTV','LiTV線上影視','LINE TV','MyVideo','ofiii 歐飛'],
            animationStudios: ['BN Pictures'],
            broadcastDay: 6,
            broadcastTime: '00:00',
            promoVideos: [
                { title: 'PV', url: 'https://www.youtube.com/embed/ZF1XOUZyTLE' },
                { title: 'PV2', url: 'https://www.youtube.com/embed/KwaHYiTO9Ec' },
            ]
        },
        {
            id: 'si-vis-the-sound-of-heroes',
            title: 'SI-VIS：英雄之聲',
            originalTitle: 'SI-VIS: The Sound of Heroes',
            image: 'sivis.jpeg',
            banner: 'sivis.jpeg',
            sourceTag: '原創動畫',
            broadcastInfo: '電視播出 / 10月5日起 / 每週日 / 9點30分 /',
            episodes: '',
            synopsis: '由男女共同組成，以隊長YOSUKE為中心的音樂團體「SI-VIS」。他們壓倒性的歌唱實力與表演魅力，席捲國內外的音樂舞臺。 然而──他們的真實身分，是對抗足以毀滅世界的神祕災害的「英雄」。透過現場表演激發群眾的狂熱，並蒐集那股力量來戰鬥。由於表面上看起來只是單純的現場表演，因此世人並不曉得他們其實是英雄！',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>版權由木棉花取得，10月5日起，每週日 10:00後，於下列平台陸續更新</p>
            `,
            platforms: ['巴哈姆特動畫瘋','CATCHPLAY+','friDay影音','Hami Video','愛奇藝','KKTV','LiTV線上影視','LINE TV','Muse木棉花-TW YouTube','亂搭！租書網','MyVideo','Netflix','ofiii 歐飛'],
            animationStudios: ['スタジオヴォルン'],
            broadcastDay: 7,
            broadcastTime: '10:00',
            promoVideos: [
                { title: 'PV', url: 'https://www.youtube.com/embed/ssg6MbJ9Ejo' },
            ]
        },
        {
            id: 'kagaku-adventure-survival-s2',
            title: '科學×冒險生存！第二季',
            originalTitle: '科学×冒険サバイバル！ 第2期',
            image: 'kagaku.jpg',
            banner: 'kagaku.jpg',
            sourceTag: '漫畫改編',
            broadcastInfo: '電視播出 / 10月4日起 / 每週六 / 18點25分 ',
            episodes: '',
            synopsis: '',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>暫無資訊</p>
            `,
            platforms: [],
            animationStudios: ['ぎゃろっぷ'],
            promoVideos: [
                { title: 'PV', url: 'https://www.youtube.com/embed/bC397gK4QCI' },
            ]
        }
    ],
    '2026-winter': [
        { 
            id: 'Soso-no-Furiren-s3',
            title: '葬送的芙莉蓮 第二季',
            originalTitle: '葬送のフリーレン 2期',
            image: 'furiren.jpeg',
            banner: 'furiren.jpeg',
            sourceTag: '漫畫改編',
            broadcastInfo: '電視播出 / 2026年1月16日起 / 每週五 / 23點0分 ',
            episodes: '',
            synopsis: '身為精靈族的芙莉蓮與同伴欣梅爾、艾冉、海塔花了 10 年打倒了魔王凱旋回到王都，眾人接受了國王接見與表揚。正值每隔 50 年出現一次的半世紀流星雨，芙莉蓮還天真地說下次要帶大家去一個很棒的地方欣賞流星。然而 50 年對於身為精靈的她根本不算什麼，然而下次見面時欣梅爾已經成了老頭子，還自嘲這是最後一次跟大家相聚。後來欣梅爾的離世讓芙莉蓮開始思考時間與生命的意義…。身為精靈的主角‧芙莉蓮對於時間的概念有別於常人，透過老友的相繼離世讓她反省過去的自己，開始試著去關心身邊的人事物。藉由她的冒險之旅來探討生命的意義。',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>版權由木棉花取得</p>
            `,
            platforms: [],
            animationStudios: ['MADHOUSE'],
            promoVideos: [
                { title: '宣傳影片', url: 'https://www.youtube.com/embed/DknvOzqQCTo' },
                { title: 'PV', url: 'https://www.youtube.com/embed/P-YPtYkViKM' },

            ]
        },
        { 
            id: 'jujutsu-kaisen-culling-game-zenpen',
            title: '咒術迴戰 死滅迴游 前篇',
            originalTitle: '呪術廻戦 死滅回游 前編',
            image: 'jujutsu.jpg',
            banner: 'jujutsu.jpg',
            sourceTag: '漫畫改編',
            broadcastInfo: '電視播出 / 2026-01 首播 ',
            episodes: '',
            synopsis: '在「澀谷事變」後，由羂索開啟了一個名為「死滅迴游」的殘酷遊戲(下水餃大戰，五條老師即將變成2.5條的鋪陳)，咒術師們被迫進行互相殘殺的生死戰鬥。故事承接前篇，主要內容是參與的咒術師們必須根據規則參與這場生存戰。此階段的特色是遊戲規則眾多，以及多位新角色陸續登場。 ',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>版權由鈴邦取得</p>
            `,
            platforms: [],
            animationStudios: ['MAPPA'],
            promoVideos: [
                { title: '宣傳影片', url: 'https://www.youtube.com/embed/ACFg5XX9XQw' },
                { title: 'PV', url: 'https://www.youtube.com/embed/MePL_vS-G9Q' },

            ]
        },
        { 
            id: 'jigokuraku-s2',
            title: '地獄樂 第二季',
            originalTitle: '地獄楽 第2期',
            image: 'jigokuraku.jpg',
            banner: 'jigokuraku.jpg',
            sourceTag: '漫畫改編',
            broadcastInfo: '電視播出 / 2026-01 首播 ',
            episodes: '',
            synopsis: '敘述死囚畫眉丸與處刑人山田淺右衛門佐切，去有如極樂淨土的島上獲取不老不死的仙藥。才能無罪釋放。並與同樣有此使命的眾死囚在島上展開爭奪。',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>版權由Netflix取得</p>
            `,
            platforms: [],
            animationStudios: ['MAPPA'],
            promoVideos: [
                { title: '宣傳影片', url: 'https://www.youtube.com/embed/QyEDvQFWH3E' },
                { title: 'PV', url: 'https://www.youtube.com/embed/5QUyhQsXXtw' },

            ]
        },
        { 
            id: 'himesama-goumon-s2',
            title: '公主殿下，「拷問」的時間到了 第二季',
            originalTitle: '姫様“拷問”の時間です 第2期',
            image: 'himesama.jpeg',
            banner: 'himesama.jpeg',
            sourceTag: '漫畫改編',
            broadcastInfo: '電視播出 / 2026-01 首播 ',
            episodes: '',
            synopsis: '敘述了國王軍的公主被魔王軍囚禁，並以拷問的名義優厚對待以揭露國王軍機密的溫馨的禁閉生活。美味的食物、遊戲、可愛的動物、溫泉等…一位在無數「酷刑」下痛苦翻滾的公主和個性豐富的拷問官出現。',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>暫無資訊</p>
            `,
            platforms: [],
            animationStudios: ['PINE JAM'],
            promoVideos: [
                { title: '宣傳影片', url: 'https://www.youtube.com/embed/Ddu4vARk3u0' },
                { title: 'PV', url: 'https://www.youtube.com/embed/LbWi3L8utQo' },

            ]
        },
        { 
            id: 'oshi-no-ko-s3',
            title: '【我推的孩子】第三季',
            originalTitle: '【推しの子】第3期',
            image: 'oshi.jpg',
            banner: 'oshi.jpg',
            sourceTag: '漫畫改編',
            broadcastInfo: '電視播出 / 2026-01 首播 ',
            episodes: '',
            synopsis: '第三季持續推進了尋找兇手的劇情，男主後續變成水鬼的故事鋪陳',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>版權由羚邦取得</p>
            `,
            platforms: [],
            animationStudios: ['動画工房'],
            promoVideos: [
                { title: '宣傳影片', url: 'https://www.youtube.com/embed/YMsDROPoe1o' },
            ]
        },
        { 
            id: 'death-game-de-meshi',
            title: '靠死亡遊戲混飯吃。',
            originalTitle: 'デストピア・ゲームで飯は食えるか。',
            image: 'death.jpg',
            banner: 'death.jpg',
            sourceTag: '漫畫改編',
            broadcastInfo: '電視播出 / 2026-01 首播 ',
            episodes: '',
            synopsis: '醒來以後，發現自己人在陌生的洋樓，身上穿著不知何時換上的女僕裝，而有同樣遭遇的少女還有五人。「遊戲」開始了，我們必須逃出這個充滿殺人陷阱的洋樓「GHOST HOUSE」。涉入死亡遊戲的事實，使少女們面色凝重──除了我以外。我的玩家名稱是幽鬼，今年十七歲，死亡遊戲專家。也就是穿女僕裝逃離死亡之屋，穿兔女郎裝殺人，領獎金過活的人。覺得我有病？我也是這麼想。不過，世界上就是有這種人──靠死亡遊戲混飯吃的少女',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>版權由羚邦取得</p>
            `,
            platforms: [],
            animationStudios: ['スタジオディーン'],
            promoVideos: [
                { title: '宣傳影片', url: 'https://www.youtube.com/embed/YMsDROPoe1o' },
            ]
        },
        { 
            id: 'mato-seihei-no-slave-s2',
            title: '魔都精兵的奴隸 第二季',
            originalTitle: '魔都精兵のスレイブ 第2期',
            image: 'mato.jpeg',
            banner: 'mato.jpeg',
            sourceTag: '漫畫改編',
            broadcastInfo: '電視播出 / 2026-01 首播 ',
            episodes: '',
            synopsis: '述日本各地出現了異空間「魔都」，由於只有女性能從魔都的「桃」得到特異的能力，因此由女兵組成了「魔防隊」。在某一天男高中生和倉優希遭到魔都的醜鬼襲擊，在那遇到「魔防隊」第七組的隊長羽前京香，而她向優希說要當我的奴隸。',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>版權由木棉花取得</p>
            `,
            platforms: [],
            animationStudios: ['パッショーネ ✕ ハヤブサフィルム'],
            promoVideos: [
                { title: '宣傳影片', url: 'https://www.youtube.com/embed/HV5DcLBjN2I' },
            ]
        },
        { 
            id: 'seihantai-na-kimi-to-boku',
            title: '相反的你和我',
            originalTitle: '正反対な君と僕',
            image: 'seihantai.jpeg',
            banner: 'seihantai.jpeg',
            sourceTag: '漫畫改編',
            broadcastInfo: '電視播出 / 2026-01 首播 ',
            episodes: '',
            synopsis: '故事描述，活力充沛但在意周遭目光的鈴木，正在單戀勇於表達自己意見的文靜男子・谷同學。可是鈴木因為太在意周遭的目光，無法用平常心跟谷同學相處，總是亂搭話…某天鈴木終於鼓起勇氣，試著約谷同學一起回家，結果…！？',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>版權由羚邦取得</p>
            `,
            platforms: [],
            animationStudios: ['ラパントラック'],
            promoVideos: [
                { title: 'PV', url: 'https://www.youtube.com/embed/U38d2Gz3vqQ' },
                { title: 'PV2', url: 'https://www.youtube.com/embed/40f2xzb7N4U' },
            ]
        },
        { 
            id: 'fire-force-s3-part2',
            title: '炎炎消防隊 參之章 第二季度',
            originalTitle: '炎炎ノ消防隊 参ノ章 第2クール',
            image: 'fire.jpeg',
            banner: 'fire.jpeg',
            sourceTag: '漫畫改編',
            broadcastInfo: '電視播出 / 1月10日起 / 每週六 / 1點53分 ',
            episodes: '',
            synopsis: '由火焰引導的灼熱黑暗奇幻故事，最終章開始──經歷了圍繞著「柱」所展開的激烈戰鬥，以及「地下」調查作戰後，森羅等人又更加接近了這個世界的重大祕密。',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>版權由Aniplus取得</p>
            `,
            platforms: [],
            animationStudios: ['David production'],
            promoVideos: [
                { title: '宣傳影片', url: 'https://www.youtube.com/embed/ujuWb92FFAs' },
            ]
        },
        { 
            id: 'yuusha-kei-ni-shosu',
            title: '判處勇者刑 懲罰勇者9004隊刑務紀錄',
            originalTitle: '勇者刑に処す 懲罰勇者9004隊刑務記録',
            image: 'yuusha.jpg',
            banner: 'yuusha.jpg',
            sourceTag: '輕小說改編',
            broadcastInfo: '電視播出 / 2026-01 首播 ',
            episodes: '',
            synopsis: '故事中所謂的勇者刑是極為重大的刑罰。犯下大罪而遭判勇者刑的犯人，將會被處以成為勇者的刑罰。受刑人必須在魔王現象所引起，突然出現魔王軍的最前線持續著即使被怪物殺死也會復活並且繼續下去的戰鬥。持續戰鬥數百年的狂戰士、史上最惡劣的小偷、擅長詐騙的政治犯、自稱國王的恐怖分子、成功率為零的暗殺者等，全部由性格有嚴重缺陷者所組成的懲罰勇者部隊。這群人的隊長，自身同時也因為「弒殺女神」之罪而遭判勇者刑的前聖騎士團長賽羅，在戰鬥中遇見至今為止存在受到隱藏的「劍之女神」泰奧莉塔──當兩人訂下契約時，原本籠罩在絕望中的世界，就因為這個脆弱又熾熱的英雄物語揭開序幕而有了改變。',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>暫無資訊</p>
            `,
            platforms: [],
            animationStudios: ['スタジオKAI'],
            promoVideos: [
                { title: 'PV', url: 'https://www.youtube.com/embed/B6Y_7_EFvBw' },
                { title: 'PV2', url: 'https://www.youtube.com/embed/B6Y_7_EFvBw' },
            ]
        },
        { 
            id: 'medalist-s2',
            title: '金牌得主 第二季',
            originalTitle: 'メダリスト 第2期',
            image: 'medalist.jpg',
            banner: 'medalist.jpg',
            sourceTag: '漫畫改編',
            broadcastInfo: '電視播出 / 2026-01 首播 ',
            episodes: '',
            synopsis: '故事中所謂的勇者刑是極為重大的刑罰。犯下大罪而遭判勇者刑的犯人，將會被處以成為勇者的刑罰。受刑人必須在魔王現象所引起，突然出現魔王軍的最前線持續著即使被怪物殺死也會復活並且繼續下去的戰鬥。持續戰鬥數百年的狂戰士、史上最惡劣的小偷、擅長詐騙的政治犯、自稱國王的恐怖分子、成功率為零的暗殺者等，全部由性格有嚴重缺陷者所組成的懲罰勇者部隊。這群人的隊長，自身同時也因為「弒殺女神」之罪而遭判勇者刑的前聖騎士團長賽羅，在戰鬥中遇見至今為止存在受到隱藏的「劍之女神」泰奧莉塔──當兩人訂下契約時，原本籠罩在絕望中的世界，就因為這個脆弱又熾熱的英雄物語揭開序幕而有了改變。',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>暫無資訊</p>
            `,
            platforms: [],
            animationStudios: ['ENGI'],
            promoVideos: [
                { title: '宣傳影片', url: 'https://www.youtube.com/embed/G-0X-y_WzVo' },
            ]
        },
        { 
            id: 'eris-no-seihai',
            title: '厄里斯的聖杯',
            originalTitle: 'エリスの聖杯',
            image: 'eris.jpg',
            banner: 'eris.jpg',
            sourceTag: '漫畫改編',
            broadcastInfo: '電視播出 / 2026-01 首播 ',
            episodes: '',
            synopsis: '敘述康斯坦絲·葛萊爾是個平凡普通的子爵女兒，卻因被陷害而陷入困境。突然出現10年前被處刑的絕代惡女史嘉蕾．卡斯提奧的亡靈救了她。為了換取她的幫助，開始尋找將史嘉莉送上刑台的罪魁禍首。當她進行臥底調查、假訂婚，甚至與大貴族攤牌時，一個意想不到的巨大陰謀開始浮出水面',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>暫無資訊</p>
            `,
            platforms: [],
            animationStudios: ['葦プロダクション'],
            promoVideos: [
                { title: 'PV', url: 'https://www.youtube.com/embed/h1SlIBhRHlg' },
                { title: 'PV2', url: 'https://www.youtube.com/embed/XmSYw13Ukfc' },
            ]
        },
        { 
            id: 'darwin-jihen',
            title: '達爾文事變',
            originalTitle: 'ダーウィン事変',
            image: 'darwin.jpeg',
            banner: 'darwin.jpeg',
            sourceTag: '漫畫改編',
            broadcastInfo: '電視播出 / 2026-01 首播 ',
            episodes: '',
            synopsis: '故事講述人類和母猩猩產下的新物主「猩猩人」查理作為主角，闡述種族、人權等主題，進而深度探討多樣延伸的現代議題，透過漫畫方式呈現眾多全新觀點予以讀者省思。',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>暫無資訊</p>
            `,
            platforms: [],
            animationStudios: ['ベルノックスフィルムズ'],
            promoVideos: [
                { title: 'PV', url: 'https://www.youtube.com/embed/Ipa3mD_WOKA' },
            ]
        },
        { 
            id: 'ima-no-watashi-wa-dono-tamon',
            title: '現在的是哪一個多聞！?',
            originalTitle: '多聞くん今どっち！？',
            image: 'ima.jpeg',
            banner: 'ima.jpeg',
            sourceTag: '漫畫改編',
            broadcastInfo: '電視播出 / 2026-01 首播 ',
            episodes: '',
            synopsis: '故事描述，高中生木下歌夏的推是當紅偶像 F／ACE 的福原多聞，某一天她去打工的時候，發現地點居然是多聞的家。而且多聞的偶像設定是性感＆狂野，本性卻完全相反，屬於陰沉黑暗屬性…？無論什麼模樣，多聞就是多聞。歌夏決定全力支持自我價值感極低的他。可是她對陰沉的多聞也怦然心動…？人格超分裂×過於嶄新的追星活動愛情喜劇，正式開幕。',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>暫無資訊</p>
            `,
            platforms: [],
            animationStudios: ['J.C.STAFF'],
            promoVideos: [
                { title: 'PV', url: 'https://www.youtube.com/embed/WM3fJbNObSA' },
            ]
        },
        { 
            id: 'yagate-kimi-ni-naru-s2',
            title: '終究，與你相戀。第二季',
            originalTitle: 'やがて君になる 第2期',
            image: 'yagate.jpeg',
            banner: 'yagate.jpeg',
            sourceTag: '漫畫改編',
            broadcastInfo: '電視播出 / 2026-01 首播 ',
            episodes: '',
            synopsis: '故事描述，高中生木下歌夏的推是當紅偶像 F／ACE 故事描述，2020 年 7 月 1 日，高中二年級的水帆，度過了最糟糕的 17 歲生日…不只失去與愛慕的學長接近的機會，父母也徹底忘記自己的生日。更慘的是，因為爆發不明原因的傳染病，社團的比賽和畢業旅行也被取消，讓水帆覺得自己根本沒有閃耀的青春！就在這時候，青梅竹馬的輝月突然說要成為水帆的男朋友候補？！這是描寫女主角西野水帆與一起長大的 4 位青梅竹馬，彼此之間的校園青春戀愛故事',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>版權由羚邦取得</p>
            `,
            platforms: [],
            animationStudios: ['颱風グラフィックス'],
            promoVideos: [
                { title: 'PV', url: 'https://www.youtube.com/embed/YmP3yzXe6ZM' },
            ]
        },
        { 
            id: 'kinoko-majo',
            title: '蘑菇魔女',
            originalTitle: 'きのこ魔女',
            image: 'kinoko.jpg',
            banner: 'kinoko.jpg',
            sourceTag: '漫畫改編',
            broadcastInfo: '電視播出 / 2026-01 首播 ',
            episodes: '',
            synopsis: '黑魔女露娜碰過的地方會長出毒菇，吐出的氣息帶有毒菇孢子，因此沒有人敢接近她，這位孤獨的魔女如今卻有了如美夢一般的邂逅？「蘑菇魔女」的故事即將展開。',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>暫無資訊</p>
            `,
            platforms: [],
            animationStudios: ['颱風グラフィックス ✕ Qzil.la'],
            promoVideos: [
                { title: 'PV', url: 'https://www.youtube.com/embed/lBLpNveNxRY' },
            ]
        },
        { 
            id: 'ikoku-nikki',
            title: '異國日記',
            originalTitle: '違国日記',
            image: 'ikoku.jpeg',
            banner: 'ikoku.jpeg',
            sourceTag: '漫畫改編',
            broadcastInfo: '電視播出 / 2026-01 首播 ',
            episodes: '',
            synopsis: '黑魔女露娜碰過的地方會長出毒菇，吐出的氣息帶有毒菇孢子，因此沒有人敢接近她，這位孤獨的魔女如今卻有了如美夢一般的邂逅？「蘑菇魔女」的故事即將展開。',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>暫無資訊</p>
            `,
            platforms: [],
            animationStudios: ['朱夏'],
            promoVideos: [
                { title: 'PV', url: 'https://www.youtube.com/embed/m1LtPWp8BbM' },
            ]
        },
        { 
            id: 'hell-mode-game-player',
            title: '地獄模式 ～喜歡挑戰特殊成就的玩家在廢設定的異世界成為無雙～',
            originalTitle: '地獄モード 〜やり込み好きのゲーマーは廃設定の異世界で無双する〜',
            image: 'hell.jpeg',
            banner: 'hell.jpeg',
            sourceTag: '輕小說改編',
            broadcastInfo: '電視播出 / 2026-01 首播 ',
            episodes: '',
            synopsis: '故事講述，主角發現了一款沒有標題的謎之網路遊戲。在設定難易度時，他毫不猶豫地選擇了最高難度。沒想到當他按下『地獄模式』之後，竟然轉生成了異世界的農奴！轉生成少年「亞蓮」的健一，一邊掌握著「召喚士」這個充滿謎團的職業，在沒有攻略也沒有討論區的異世界裡，尋找成為最強的道路。',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>暫無資訊</p>
            `,
            platforms: [],
            animationStudios: ['横浜アニメーションラボ'],
            promoVideos: [
                { title: 'PV', url: 'https://www.youtube.com/embed/aTvv9bZIoWY' },
            ]
        },
        { 
            id: 'golden-kamuy-final-chapter',
            title: '黃金神威 最終章',
            originalTitle: 'ゴールデンカムイ 最終章',
            image: 'golden.jpg',
            banner: 'golden.jpg',
            sourceTag: '漫畫改編',
            broadcastInfo: '電視播出 / 2026-01 首播 ',
            episodes: '',
            synopsis: '經典歷史冒險動畫《黃金神威》正式進入尾聲，由野田智（野田サトル）創作的原作漫畫改編而成的《黃金神威 最終章》，宣布將於 2026 年 1 月開播。而作為動畫收尾前的重要序章，全新製作的劇場先行版《黃金神威 札幌啤酒工廠篇》將搶先於 2025 年 10 月在日本限定上映，採上下兩部曲形式推出，帶領觀眾提前進入黃金傳說的最終戰場。',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>版權由木棉花取得</p>
            `,
            platforms: [],
            animationStudios: ['Brains Base'],
            promoVideos: [
                { title: 'PV', url: 'https://www.youtube.com/embed/qBlwZkE8EFM' },
            ]
        },
        { 
            id: 'fate-strange-fake',
            title: 'Fate/strange Fake',
            originalTitle: 'Fate/strange Fake',
            image: 'fate.jpg',
            banner: 'fate.jpg',
            sourceTag: '輕小說改編',
            broadcastInfo: '電視播出 / 2026年1月3日起 / 每週六',
            episodes: '',
            synopsis: '於日本這片土地舉行的第五次聖杯戰爭終結後數年，美國西部史諾菲爾德出現下一場鬥爭。──那是充滿虛偽的聖杯戰爭。聚集於虛偽台座的魔術師與英靈們。即使深知這是場虛偽的聖杯戰爭──他們仍舊在此之上不斷舞動。真偽即在遙遠的彼岸。並非為了聖杯──也非為其他任何事物，而是為貫徹他們自身的信念。',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>暫無資訊</p>
            `,
            platforms: [],
            animationStudios: ['A-1 Pictures'],
            promoVideos: [
                { title: 'PV', url: 'https://www.youtube.com/embed/k1G8EvZg_BY' },
            ]
        },
        { 
            id: 'toumei-otoko-to-ningen-onna',
            title: '透明男子與人類女孩～兩人遲早會成為夫妻～',
            originalTitle: '透明男と人間女～そのうち夫婦になるふたり～',
            image: 'toumei.jpg',
            banner: 'toumei.jpg',
            sourceTag: '漫畫改編',
            broadcastInfo: '電視播出 / 2026年1月8日起 / 每週四 / 23點30分',
            episodes: '',
            synopsis: '故事主角夜香小姐上班的偵探事務所，老闆是帥氣溫柔的「透明人」──透乃眼先生。即使隱形，失明的夜香小姐還是能很神奇地知道他在哪裡。透乃眼先生被她那「看不見」的魅力吸引，開始想要主動護送有點遲鈍的夜香小姐…？在特色十足的同事的守望下，今天也會是讓人臉紅心跳的辦公室生活。',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>暫無資訊</p>
            `,
            platforms: [],
            animationStudios: ['Project No.9'],
            promoVideos: [
                { title: 'PV', url: 'https://www.youtube.com/embed/x_z8qrjh5t0' },
            ]
        },
        { 
            id: 'dead-account',
            title: 'DEAD ACCOUNT 死亡帳號',
            originalTitle: 'デッドアカウント',
            image: 'dead.jpeg',
            banner: 'dead.jpeg',
            sourceTag: '漫畫改編',
            broadcastInfo: '電視播出 / 2026-01 首播',
            episodes: '',
            synopsis: '故事講述，炎上系實況主緣城蒼吏為主角的「現代式除靈戰鬥動作作品」。現代幽靈寄宿在「手機」之中，靠著極盡暴虐之能事的影片企劃大賺一筆的炎上系直播主「煽火蘋果」＝ 15 歲的緣城蒼吏，在大眾認知是麻煩精的化身，但實際是最喜歡妹妹與甜點的溫柔哥哥。爭議影片也只不過是為了幫體弱多病的妹妹籌措龐大醫藥費的手段，即使被全人類討厭，只要妹妹健康就是幸福。直到最愛的妹妹發生變異祓除電子化的幽靈，並與靈媒師學校的夥伴們並肩作戰。',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>暫無資訊</p>
            `,
            platforms: [],
            animationStudios: ['Synergy SP'],
            promoVideos: [
                { title: 'PV', url: 'https://www.youtube.com/embed/6Lv4RyUqmYc' },
                { title: 'PV2', url: 'https://www.youtube.com/embed/EH1JldvB4po' },
            ]
        },
        { 
            id: 'Uruwashi no Yoi no Tsuki',
            title: '皎潔深宵之月',
            originalTitle: 'うるわしの宵の月',
            image: 'uruwashi.jpeg',
            banner: 'uruwashi.jpeg',
            sourceTag: '漫畫改編',
            broadcastInfo: '電視播出 / 2026-01 首播',
            episodes: '',
            synopsis: '瀧口宵雖然是個女生，但是她長相俊美，舉止也很瀟灑帥氣，所以被同學們稱為「王子」，雖然宵也想像漫畫裡的女主角談場戀愛，但是男生們都因為宵長得太帥氣，所以沒把她當成女生，所以宵很早就放棄談戀愛了，可是有一天，宵認識了一個帥氣的男生市村琥珀，琥珀是大了宵一歲的學長，他因為家裡有錢，而且長得很帥，所以也被大家稱為「王子」，琥珀第一眼見到宵就被她吸引，後來也常常找機會接近宵，宵一開始很討厭這個舉止輕浮的學長，但是後來漸漸發現琥珀的優點…',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>暫無資訊</p>
            `,
            platforms: [],
            animationStudios: ['イーストフィッシュスタジオ'],
            promoVideos: [

            ]
        },
        { 
            id: 'isekai-no-shochi-wa-shachiku-shidai',
            title: '異世界的處置依社畜而定',
            originalTitle: '異世界の沙汰は社畜次第',
            image: 'bl.jpg',
            banner: 'bl.jpg',
            sourceTag: '輕小說改編',
            broadcastInfo: '電視播出 / 2026-01 首播',
            episodes: '',
            synopsis: '社畜上班族，近藤誠一郎被捲入聖女召喚儀式，來到異世界。由於他對異世界的「魔素」沒有耐受性，原本就不健康的身體變得更加脆弱，甚至有生命危險。只有「習慣魔力」才能令誠一郎活下去，誠一郎因此委身於外號「冰之貴公子」的第三騎士團長亞雷斯……。然而越是工作，戀愛旗標就插得越滿？身為效率廚的社畜，在異世界一面拼命工作，一遍狂插戀愛旗標的異色奇妙 BL 故事登場。',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>暫無資訊</p>
            `,
            platforms: [],
            animationStudios: ['スタジオディーン'],
            promoVideos: [
                { title: 'PV', url: 'https://www.youtube.com/embed/r1CXRVLbPG0' },
            ]
        },
        { 
            id: 'yuuga-na-kizoku-no-kyuuka-no-susume',
            title: '優雅貴族的休假指南',
            originalTitle: '優雅な貴族の休暇のすすめ。',
            image: 'yuuga.jpeg',
            banner: 'yuuga.jpeg',
            sourceTag: '輕小說改編',
            broadcastInfo: '電視播出 / 2026-01 首播',
            episodes: '',
            synopsis: '故事講述幻想世界的青年宰相利澤爾，某天意外轉移到另一個異世界。他透過才智和話術與上級冒險者-吉爾搭檔，讓自己也華麗轉職成冒險者。既然回不去原本世界，那就當成休假好好享受吧，',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>暫無資訊</p>
            `,
            platforms: [],
            animationStudios: ['Synergy SP'],
            promoVideos: [
                { title: '宣傳影片', url: 'https://www.youtube.com/embed/wqymf-Se6Mc' },
            ]
        },
        { 
            id: 'arne-no-jikenbo',
            title: '阿爾涅事件簿',
            originalTitle: 'アルネの事件簿',
            image: 'arne.jpg',
            banner: 'arne.jpg',
            sourceTag: '遊戲改編',
            broadcastInfo: '電視播出 / 2026-01 首播',
            episodes: '',
            synopsis: '原作故事描述，有著操縱異能力量的吸血鬼偵探阿爾涅·尼塔特與熱愛吸血鬼的名門貴族千金琳‧萊茵維斯，在絕對不會交集的兩個世界中生存的二人，為了解開被血染的謎題而聯手。被黑夜籠罩的夜晚，琳迷失在妖魔棲息的謎之城鎮。在那裡與被稱作「最兇惡」吸血鬼阿爾涅的相遇，少女所生活的世界發生了翻天覆地的變化。',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>暫無資訊</p>
            `,
            platforms: [],
            animationStudios: ['SILVER LINK.'],
            promoVideos: [
                { title: '宣傳影片', url: 'https://www.youtube.com/embed/Vi1CYkgkTrw' },
            ]
        },
        { 
            id: 'aratte-kuremasu-ka',
            title: '可以幫忙洗乾淨嗎？',
            originalTitle: '洗ってくれませんか？',
            image: 'aratte.jpg',
            banner: 'aratte.jpg',
            sourceTag: '漫畫改編',
            broadcastInfo: '電視播出 / 2026-01 首播',
            episodes: '',
            synopsis: '故事描述，在那個以溫泉聞名的城鎮，經營一家小小洗衣店的金目綿花奈，開朗又樂觀的她，卻沒有人知道她失去了兩年前的記憶。藉由故事中她與其他人的往來，交織出溫馨有趣，洗衣知識又相當實用的故事情節，如果衣服有任何疑難雜症，都請放心交給金目吧。',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>暫無資訊</p>
            `,
            platforms: [],
            animationStudios: ['オクルトノボル'],
            promoVideos: [
                { title: '宣傳影片', url: 'https://www.youtube.com/embed/aTG30psUIBc' },
            ]
        },
        { 
            id: 'arbeit-no-goumon-nichijou',
            title: '打工仔的拷問日常',
            originalTitle: 'バイトの拷問日常',
            image: 'arbeit.jpeg',
            banner: 'arbeit.jpeg',
            sourceTag: '漫畫改編',
            broadcastInfo: '電視播出 / 2026-01 首播',
            episodes: '',
            synopsis: '這裡是殺人與拷問皆被合法化的世界，在拷問公司打工的賽羅與前輩時宇，迎來新人米克與休，度過快樂又忙碌的拷問日常，溫馨悠閒的日常與驚悚拷問的反差將相繼使人中毒！觸動您的怪癖、帶點黑色幽默的職場喜劇',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>暫無資訊</p>
            `,
            platforms: [],
            promoVideos: [
                { title: '宣傳影片', url: 'https://www.youtube.com/embed/RTevzaviDws' },
            ]
        },
        { 
            id: 'conan-episode-zero-aquarium-case',
            title: '名偵探柯南 Episode"ZERO" 工藤新一水族館事件',
            originalTitle: '名探偵コナン エピソード"ZERO" 工藤新一水族館事件',
            image: 'conan.jpg',
            banner: 'conan.jpg',
            sourceTag: '漫畫改編',
            broadcastInfo: '電視播出 / 2026-01 首播',
            episodes: '',
            synopsis: '動畫系列自 1996 年開播至今，已累計超過 1100 集，而即將在 2026 年迎來開播 30 週年，配合值得紀念的這一刻，官方將以動畫特別篇《名偵探柯南 episode "ZERO" 工藤新一水族館事件簿》揭開序幕。在這次的特別篇中，新一與小蘭為了讓分居中的毛利小五郎與妃英理和好，特別策劃了作戰計畫，為此他們兩人來到水族館，豈知居然在那邊碰到了殺人事件？！',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>暫無資訊</p>
            `,
            platforms: [],
            animationStudios: ['TMS Entertainmen'],
            promoVideos: [
                { title: '宣傳影片', url: 'https://www.youtube.com/embed/ZcDATwzYhgg' },
            ]
        },
        { 
            id: 'mf-ghost-s3',
            title: 'MF Ghost 燃油車鬥魂 第三季',
            originalTitle: 'MFゴースト 第3期',
            image: 'car.jpg',
            banner: 'car.jpg',
            sourceTag: '漫畫改編',
            broadcastInfo: '電視播出 / 2026-01 首播',
            episodes: '',
            synopsis: '以 202X 年電動車當道的世界為舞台，並停止生產了原本使用汽油為燃料的汽車。在這樣的環境下，在日本舉辦的公路賽事「MFG」透過網路的傳播而大受歡迎，來自英國知名賽車學校畢業的 19 歲主角夏向，為了個人某個目的也來到日本參加了該場賽事。',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>暫無資訊</p>
            `,
            platforms: [],
            animationStudios: ['FelixFilm'],
            promoVideos: [
                { title: '宣傳影片', url: 'https://www.youtube.com/embed/sIfyZINA5cE' },
            ]
        },
        { 
            id: 'osananajimi-no-love-comedy-ga-seiritsu-shinai',
            title: '青梅竹馬的戀愛喜劇無法成立',
            originalTitle: '幼なじみのラブコメが成立しない',
            image: 'osananajimi.jpeg',
            banner: 'osananajimi.jpeg',
            sourceTag: '漫畫改編',
            broadcastInfo: '電視播出 / 2026-01 首播',
            episodes: '',
            synopsis: '高中男主角的煩惱。那就是兩個青梅竹馬「汐」與「灯」太可愛了！對方並沒有那個意思，但如果只有我用色色的眼光看她們這件事穿幫了…那就太丟臉了！另一方面，其實她們也對英雄…？令人看不下去！令人感到糾纏不清！但是青梅竹馬超棒的！',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>暫無資訊</p>
            `,
            platforms: [],
            animationStudios: ['手塚製作'],
            promoVideos: [
                { title: '宣傳影片', url: 'https://www.youtube.com/embed/CAdmmZ5Bu3w' },
            ]
        },
        { 
            id: 'hikuitori',
            title: '火喰鳥',
            originalTitle: '火喰鳥',
            image: 'bird.jpeg',
            banner: 'bird.jpeg',
            sourceTag: '輕小說改編',
            broadcastInfo: '電視播出 / 2026-01 首播',
            episodes: '',
            synopsis: '本作以歷史上的「明和大火」為背景，描繪了江戶最強的消防武士松永源吾，以及他率領的一眾個性鮮明、經驗各異的消防團隊「破鳶組」，如何拯救被火災威脅的江戶百姓。',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>暫無資訊</p>
            `,
            platforms: [],
            animationStudios: ['SynergySP'],
            promoVideos: [
                { title: '宣傳影片', url: 'https://www.youtube.com/embed/uzh1Iv8kjr0' },
            ]
        },
        { 
            id: 'kiyou-binbou-no-ore-ga-yuusha-party-wo-tsuihou-sareta',
            title: '泛而不精的我被逐出了勇者隊伍',
            originalTitle: '器用貧乏、聖女様に拾われる～万能さに磨きをかけて聖女様の右腕として無双する～',
            image: 'kiyou.jpeg',
            banner: 'kiyou.jpeg',
            sourceTag: '輕小說改編',
            broadcastInfo: '電視播出 / 2026-01 首播',
            episodes: '',
            synopsis: '身為賦予術士的主角歐倫，某天突然被所屬的勇者隊伍以他「泛而不精」的理由逐出小隊，失落的他下定決心總有一天要成為「萬能者」讓瞧不起他的人刮目相看。',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>暫無資訊</p>
            `,
            platforms: [],
            animationStudios: ['animation studio42'],
            promoVideos: [
                { title: '宣傳影片', url: 'https://www.youtube.com/embed/vqjdwcCazgM' },
            ]
        },
        { 
            id: 'ao-no-miburou-serizawa-ansatsu-hen',
            title: '青之壬生浪 芹澤暗殺篇',
            originalTitle: '青のミブロ 芹沢鴨暗殺編',
            image: 'miburou.jpg',
            banner: 'miburou.jpg',
            sourceTag: '漫畫改編',
            broadcastInfo: '電視播出 / 12月20日起 / 每週六 / 17點30分',
            episodes: '',
            synopsis: '永倉新八是一位年長的前新選組成員，他在江戶時代幕末的動盪中倖存下來，並成為劍道場的教練，他教導的孩子們一直纏著他談論新選組。因此，他決定透露一些他從未告訴過任何人的特別故事',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>暫無資訊</p>
            `,
            platforms: [],
            animationStudios: ['MAHO FILM'],
            promoVideos: [
                { title: '宣傳影片', url: 'https://www.youtube.com/embed/U7yh7_7jVJ4' },
            ]
        },
        { 
            id: 'gaishinden',
            title: '鎧真傳',
            originalTitle: '鎧真伝',
            image: 'gaishinden.jpg',
            banner: 'gaishinden.jpg',
            sourceTag: '原創動畫',
            broadcastInfo: '電視播出 / 2026-01 首播',
            episodes: '',
            synopsis: '故事描述數千年前，由人類內心的軟弱和陰暗誕生的妖邪界，誕生了妖邪帝王「阿羅醐」並且試圖進攻人類世界。就在人類看似無法阻止阿羅醐，即將潰敗之際，出現了一名武者將其野望粉碎，並將阿羅醐留下的鎧甲以人類九種美德「仁義禮智信忠孝悌忍」分別打造成九件鎧甲。',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>暫無資訊</p>
            `,
            platforms: [],
            animationStudios: ['サンライズ'],
            promoVideos: [
                { title: '宣傳影片', url: 'https://www.youtube.com/embed/mJ5dOSMYhtM' },
            ]
        },
        { 
            id: 'hanazakari-no-kimitachi-e',
            title: '花樣少年少女',
            originalTitle: '花ざかりの君たちへ',
            image: 'hanazakari.jpg',
            banner: 'hanazakari.jpg',
            sourceTag: '漫畫改編',
            broadcastInfo: '電視播出 / 2026-01 首播',
            episodes: '',
            synopsis: '故事描述原本在美國念書的少女蘆屋瑞稀，因為憧憬跳高選手佐野泉為了而轉入私立男校櫻咲學園，然而佐野泉卻已經放棄了跳高。瑞稀為了鼓勵佐野泉重新跳高，一方面不能暴露自己是女生的身份，一方面卻被佐野泉吸引……。',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>暫無資訊</p>
            `,
            platforms: [],
            animationStudios: ['SIGNAL.MD'],
            promoVideos: [
                { title: '宣傳影片', url: 'https://www.youtube.com/embed/QSPgWx5cNYo' },
            ]
        },
        { 
            id: 'dark-moon-tsuki-no-saidan',
            title: 'DARK MOON: 月之神壇',
            originalTitle: 'DARK MOON: 月の祭壇',
            image: 'dark.jpg',
            banner: 'dark.jpg',
            sourceTag: '漫畫改編',
            broadcastInfo: '電視播出 / 2026-01 首播',
            episodes: '',
            synopsis: '故事描述，無法愛上任何人的吸血鬼，與只能愛著某個人的狼人。 足以被稱為利物飛德地區兩大高峰的兩所學校，在一群人氣高超的男學生群裡，轉來了一位神祕少女後，竟發生一連串駭人事件… 吸血鬼與狼人都將矛頭指向對方，並開始對彼此提高戒心，但他們同時也從這位微妙的轉學生— 秀荷身上嗅出一股強烈的吸引力，並且越陷越深。 這群少年們與這位少女，因為前世的一場偉大命運而糾纏在一起，隨著彼此的身份一一揭露，他們的世界也開始徹底走樣… 「等到妳相信我是真的相信妳的時候，等到妳願意相信自己的時候，到時候就咬我的脖子吧。」 透過命運的聯結而發現真相，一群逐步成長的少年們以及他們偉大的敘事詩。',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>暫無資訊</p>
            `,
            platforms: [],
            animationStudios: ['TROYCA'],
            promoVideos: [
                { title: '宣傳影片', url: 'https://www.youtube.com/embed/0AXrNPEbU7A' },
            ]
        },
        { 
            id: 'ringoku-no-outaishi-ni-dekiai-sareru-akuyaku-reijou',
            title: '被鄰國王子溺愛的反派千金',
            originalTitle: '隣国の皇太子に溺愛される悪役令嬢',
            image: 'ringoku.jpg',
            banner: 'ringoku.jpg',
            sourceTag: '輕小說改編',
            broadcastInfo: '電視播出 / 2026-01 首播',
            episodes: '',
            synopsis: '作品主角轉生成了自己前世所玩遊戲的反派千金「緹婭菈蘿茲」，被取消婚約的她，本以為將迎接的是壞結局，卻被鄰國王子求婚，捲入劇本之外的發展。',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>暫無資訊</p>
            `,
            platforms: [],
            animationStudios: ['スタジオディーン'],
            promoVideos: [
                { title: '宣傳影片', url: 'https://www.youtube.com/embed/AjdcecmWb9I' },
            ]
        },
        { 
            id: 'hito-naranu-gakusei-to-monou-ge-na-sensei',
            title: '非人學生與厭世教師',
            originalTitle: '人ならぬ生徒とものうげな先生',
            image: 'naranu.jpg',
            banner: 'naranu.jpg',
            sourceTag: '輕小說改編',
            broadcastInfo: '電視播出 / 2026-01 首播',
            episodes: '',
            synopsis: '故事舞台位於座森林裡的女校不知火高中，主角「人間零」，是個責任感很強的教師，在前一個職場受到嚴重心理創傷後變得厭世，討厭人類，從而繭居在家，某天莫名受到這所高中的可疑徵才廣告吸引，便按下應徵鍵，順利成為該校社會科老師。到職後，他才發現這所學校教育的並非一般學生，而是各個充滿魅力的非人種族。人間老師必須對這些非人少女們傳授有關人類的一切，讓她們順利畢業；而帶有陰影的他，也同時向學生們學習她們所憧憬的「人類」。',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>暫無資訊</p>
            `,
            platforms: [],
            animationStudios: ['asread.'],
            promoVideos: [
                { title: '宣傳影片', url: 'https://www.youtube.com/embed/2ePbPaguNY4' },
            ]
        },
        { 
            id: 'kizoku-tensei',
            title: '貴族轉生～得天眷顧一出生就獲得最強力量～',
            originalTitle: '貴族転生 ～恵まれた生まれから最強の力を得る～',
            image: 'kizoku.jpeg',
            banner: 'kizoku.jpeg',
            sourceTag: '輕小說改編',
            broadcastInfo: '電視播出 / 2026-01 首播',
            episodes: '',
            synopsis: '世界最強的六歲小孩．諾亞，生來便是人生勝利組的皇帝第十三子， 加上與生俱來就擁有等級無上限，還能將追隨者的能力加到自身能力之上的作弊級技能。 因為王位繼承順位排得相當後面，諾亞向來也是在自己的領地悠哉生活。 然而他為人公正又具備聰明才智，年僅六歲便幫助了差點被賣掉的女僕、 受到脅迫的歌手，更成功收服了水之魔劍利維坦。 在每天自由自在的生活中，將最強的力量、最強的部下收於麾下。 而就在此時，王位的繼承人選卻改為無關原先繼承順位與排名， 由皇子彼此公平競爭。 身懷最強力量，足智多謀又有夥伴的諾亞， 能否勝過其他皇子，最終坐上擁有世上至高權力的皇帝寶座!?',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>暫無資訊</p>
            `,
            platforms: [],
            animationStudios: ['CompTown'],
            promoVideos: [
                { title: 'PV', url: 'https://www.youtube.com/embed/lg3xU4D4Wvs' },
                { title: 'PV2', url: 'https://www.youtube.com/embed/oRAWj73-Spk' },
            ]
        },
        { 
            id: 'yuusha-no-haikibutsu',
            title: '勇者的廢棄物',
            originalTitle: '勇者の廃棄物',
            image: 'haikibutsu.jpeg',
            banner: 'haikibutsu.jpeg',
            sourceTag: '輕小說改編',
            broadcastInfo: '電視播出 / 2026-01 首播',
            episodes: '',
            synopsis: '世界最強的六歲小孩．諾亞，生來便是人生勝利組的皇帝第十三子， 加上與生俱來就擁有等級無上限，還能將追隨者的能力加到自身能力之上的作弊級技能。 因為王位繼承順位排得相當後面，諾亞向來也是在自己的領地悠哉生活。 然而他為人公正又具備聰明才智，年僅六歲便幫助了差點被賣掉的女僕、 受到脅迫的歌手，更成功收服了水之魔劍利維坦。 在每天自由自在的生活中，將最強的力量、最強的部下收於麾下。 而就在此時，王位的繼承人選卻改為無關原先繼承順位與排名， 由皇子彼此公平競爭。 身懷最強力量，足智多謀又有夥伴的諾亞， 能否勝過其他皇子，最終坐上擁有世上至高權力的皇帝寶座!?',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>暫無資訊</p>
            `,
            platforms: [],
            animationStudios: ['OLM'],
            promoVideos: [
                { title: '宣傳影片', url: 'https://www.youtube.com/embed/imVWTDOncAQ' },
            ]
        },
        { 
            id: '29-sai-dokushin-chuuken-boukensha-no-nichijou',
            title: '29歲單身中堅冒險家的日常',
            originalTitle: '29歳独身中堅冒険者の日常',
            image: 'chuuken.jpg',
            banner: 'chuuken.jpg',
            sourceTag: '漫畫改編',
            broadcastInfo: '電視播出 / 2026-01 首播',
            episodes: '',
            synopsis: '本作故事描述，因為工作需要而潛入魔宮的冒險家‧阿始，遇見了肚子餓的少女‧莉露。不忍心丟下遭到父母親拋棄、無依無靠的她，兩人於是開始一起生活。但是莉露她並不是「單純的」少女……？一段奇幻冒險故事就此展開。',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>暫無資訊</p>
            `,
            platforms: [],
            animationStudios: ['HORNETS'],
            promoVideos: [
                { title: '宣傳影片', url: 'https://www.youtube.com/embed/_htCsAG0hUo' },
            ]
        },
        { 
            id: 'vigilante-my-hero-academia-illegals-s2',
            title: '正義使者 -我的英雄學院之非法英雄- 第二季',
            originalTitle: 'ヴィジランテ -僕のヒーローアカデミア ILLEGALS- 第2期',
            image: 'bokuhero.jpeg',
            banner: 'bokuhero.jpeg',
            sourceTag: '漫畫改編',
            broadcastInfo: '電視播出 / 2026-01 首播',
            episodes: '',
            synopsis: '我的英雄學院外傳，故事描述，大學生灰迴航一是個在學校遭到誤會排擠的邊緣人，「個性」也不出眾的他，最大的休閒活動就是晚上扮裝出外幫助路人──人稱「親切俠」！某一天他與地下偶像 POP☆STEP 遭到小混混糾纏，此時從天而降的不是 NO.1 英雄歐爾麥特，而是一個不知名的大叔‧鐵拳清道夫「手指虎」──從此航一便踏入了遊走於灰色地帶的「非法英雄業」',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>版權由羚邦取得</p>
            `,
            platforms: [],
            animationStudios: ['BONES'],
            promoVideos: [
                { title: '宣傳影片', url: 'https://www.youtube.com/embed/ToTE6AjvmLA' },
            ]
        },
        { 
            id: 'saiai-no-gikei-no-tame-ni-nagaku-ikiru',
            title: '為了疼愛最推的義兄，我要長久活下去！',
            originalTitle: '最愛の義兄に尽くすため、長生きします！',
            image: 'saiai.jpg',
            banner: 'saiai.jpg',
            sourceTag: '輕小說改編',
            broadcastInfo: '電視播出 / 2026-01 首播',
            episodes: '',
            synopsis: 'BL輕小說，改編為<b>輕動畫</b>(類似有聲書)',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>暫無資訊</p>
            `,
            platforms: [],
            animationStudios: ['Imagica Infos ✕ Imageworks Studio'],
            promoVideos: [

            ]
        },
        { 
            id: 'hokuto-no-ken-kenoh-gun-zakotachi-no-banka',
            title: '北斗之拳：拳王軍雜魚們的輓歌',
            originalTitle: '北斗の拳 拳王軍ザコたちの挽歌',
            image: 'hokuto.jpeg',
            banner: 'hokuto.jpeg',
            sourceTag: '輕小說改編',
            broadcastInfo: '電視播出 / 2026-01 首播',
            episodes: '',
            synopsis: '故事講的是末日廢土中，一個普通村民諾布誤信了「包吃住、人人可做」的徵才廣告，結果直接就職到拉歐帶領的拳王軍。看似弱雞的他，卻要在各種恐怖前輩、奇怪同僚之間努力活下去。',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>暫無資訊</p>
            `,
            platforms: [],
            promoVideos: [
                { title: '宣傳影片', url: 'https://www.youtube.com/embed/0wPR_-NPgQo' },
            ]
        },
        { 
            id: 'trigun-stargaze',
            title: 'TRIGUN STARGAZE',
            originalTitle: 'トライガン・スターゲイズ',
            image: 'trigun.jpg',
            banner: 'trigun.jpg',
            sourceTag: '輕小說改編',
            broadcastInfo: '電視播出 / 2026-01 首播',
            episodes: '',
            synopsis: '系列作品的背景舞台是在未來世界中某個人類遷徙居住的荒涼星球，並以遭到重金懸賞的不法之徒、被稱作「人間颱風」的威席·史坦畢特作為中心所展開的動作冒險故事。而動畫續作《TRIGUN STARGAZE》是以前作 2 年半後的荒漠之星作為故事舞台，不殺的威席·史坦畢特，與誓言殺光人類的密利歐・奈布茲最終一戰即將展開。',
            copyrightInfo: `
                <h3>版權資訊</h3>
                <p>暫無資訊</p>
            `,
            platforms: [],
            animationStudios: ['オレンジ'],
            promoVideos: [
                { title: '宣傳影片', url: 'https://www.youtube.com/embed/1pr_uEqKJ74' },
            ]
        },
    ]
};