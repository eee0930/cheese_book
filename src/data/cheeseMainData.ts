export const mainColors = [
  ['#F9CC73', '#AC4F98'],
  ['#F8C1BA', '#C94245'],
  ['#61609A', '#F9CC73'],
  ['#CBA7CC', '#F4ED36'],
  ['#61609A', '#F4ED36'],
];

export const cheesePaths = [
  {
    name: 'home',
    name_sm: 'home',
    name_kr: '홈',
    icon: 'fa-solid fa-house-chimney-window',
    path: '/',
  },
  {
    name: 'best sellers',
    name_sm: 'best',
    name_kr: '베스트셀러',
    icon: 'fa-solid fa-trophy',
    path: '/best',
  },
  {
    name: 'new books',
    name_sm: 'new',
    name_kr: '신작',
    icon: 'fa-solid fa-rocket',
    path: '/new',
  },
  {
    name: 'your taste',
    name_sm: 'taste',
    name_kr: '내취향추천',
    icon: 'fa-solid fa-flask',
    path: '/taste',
  },
  {
    name: 'my books',
    name_sm: 'my',
    name_kr: '좋아요',
    icon: 'fa-solid fa-heart',
    path: '/my',
  },
];

export const categoryList = [
  {
    nation: '국내',
    categories: [
      {
        id: 0,
        name: '전체',
      },
      {
        id: 1,
        name: '소설·시·문학',
      },
      {
        id: 50926,
        name: '탐정·추리',
      },
      {
        id: 50933,
        name: '액션',
      },
      {
        id: 987,
        name: '과학',
      },
      {
        id: 55889,
        name: '에세이',
      },
      {
        id: 336,
        name: '자기계발',
      },
    ],
  },
  {
    nation: '해외',
    categories: [
      {
        id: 97456,
        name: '소설',
      },
      {
        id: 90845,
        name: '에세이',
      },
      {
        id: 90846,
        name: '여행',
      },
      {
        id: 90854,
        name: '자기계발',
      },
      {
        id: 90859,
        name: '컴퓨터',
      },
    ],
  },
];

export const bannerMent = [
  ['CHEESE BOOK', '급상승_ 많이 보고 있는 책'],
  ['내 안의 흑염룡을 깨울', 'LOOK & BOOK VOL. 2'],
  ['이 책을 읽은 당신께 행운을', 'GOOD LUCK!'],
  ['Book Mate와 함께하는', 'CHEESE BOOK 이달의 신작'],
  ['이 책 한 권이면 충분하다', 'The Essential 뿡빵붕뻥'],
  ['알쓸Cheese잡', '나에게 혁신을 가져다줄 책'],
];

export const tasteQuestions = [
  {
    q: '새로운 독서 모임에 초대받았다. 어떤 생각이 드나요?',
    a: [
      [
        'I',
        '많은 사람들과의 대화라니 생각만 해도 지친다... 친구들과의 의견 공유로도 충분하다!',
      ],
      [
        'E',
        '여러 사람들과 만나서 다양한 의견을 나눌 수 있는 기회라니, 너무 좋다!',
      ],
    ],
  },
  {
    q: '당신은 어디에서 책을 읽는 것을 더 선호하나요?',
    a: [
      ['I', '조용한 집, 나만의 공간.'],
      ['E', '도서관이나 카페처럼 책 읽는 사람이 많고, 활기찬 곳.'],
    ],
  },
  {
    q: '당신은 다음 중 어떤 독서 유형인가요?',
    a: [
      [
        'E',
        '책을 읽고 사람들과 이야기를 나누며 보다 넓게 이해하고 에너지도 얻는다.',
      ],
      [
        'I',
        '책 내용을 혼자 깊이 사색하고 곱씹으며 깊이 이해하고 에너지도 얻는다.',
      ],
    ],
  },
  {
    q: '다음 중 끌리는 문장은?',
    a: [
      ['N', '우리가 대신할 수 있다고 믿는 건 어리석은 자만이에요.'],
      ['S', '방송 역시 강의와 비슷한 면이 있다. 이것 역시 한 편의 쇼다.'],
    ],
  },
  {
    q: '당신은 책을 읽을 때 어떤 문체를 더 선호하나요?',
    a: [
      ['S', '은유나 비유보다 직설적으로 설명하는 것이 좋다.'],
      ['N', '상상력을 자극할 수 있는 함축적인 문체가 좋다.'],
    ],
  },
  {
    q: '소설이 매우 흥미진진하다. 당신은 어떤 흐름으로 책을 읽나요?',
    a: [
      ['S', '지금 내가 읽고 있는 부분에 집중한다.'],
      ['N', '미리 뒷 내용을 상상하며 걱정하거나 기대한다.'],
    ],
  },
  {
    q: '책을 덮고 난 후 드는 생각은?',
    a: [
      [
        'F',
        '"그 장면에서 주인공의 감정이 너무 공감 돼." 주인공의 입장에 다시 한 번 생각해보게 된다.',
      ],
      [
        'T',
        '"이 책은 스토리가 정말 탄탄해." 책의 전반적인 스토리가 먼저 생각이 난다.',
      ],
    ],
  },
  {
    q: '소설을 읽을 때 슬프거나 감동적인 장면이 나왔다. 당신은 어떤 반응을 보이나요?',
    a: [
      [
        'T',
        '가끔 코끝이 찡할 때는 있지만, 허구의 이야기라는 전제가 있기에 눈물이 펑펑 나진 않더라!',
      ],
      ['F', '그 장면에 푹 빠져 책을 읽다가 눈물을 자주 흘린다.'],
    ],
  },
  {
    q: '소설 속 주인공이 특이한 행동을 할 때 당신은 이를 보며 어떻게 생각하나요?',
    a: [
      [
        'F',
        '"그래 그럴 수 있지..." 솔직히 책 주인공의 상황과 감정에 완전 공감하는 과몰입러다.',
      ],
      [
        'T',
        '"왜 저렇게 행동하지? 나였으면..." 주인공과 나는 별개의 인간이다. 이해할 수 없는 부분이 있다.',
      ],
    ],
  },
  {
    q: '오늘부터 책을 읽기로 결심을 했다! 당신은 언제 책을 읽을 건가요?',
    a: [
      ['P', '마음이 끌릴 때 아무때나 책을 읽는다.'],
      ['J', '일상에서 책을 읽을 시간을 따로 정해두고 읽는다.'],
    ],
  },
  {
    q: '서점에 가면 당신은?',
    a: [
      ['J', '사고 싶었던 책만 구매해 빠르게 나온다'],
      ['P', '간 김에 흥미 있는 분야의 책들과 주변을 둘러보고 나온다'],
    ],
  },
  {
    q: '목표했던 분량보다 많이 못 읽었는데 벌써 새벽 3시다. 당신은?',
    a: [
      ['J', '읽으려던 부분을 다 못 읽으면 잠이 안 온다.'],
      ['P', '오늘 다 못 읽었으면 내일 읽으면 되지!'],
    ],
  },
];