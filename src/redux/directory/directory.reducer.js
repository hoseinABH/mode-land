const INITIAL_STATE = {
  sections: [
    {
      title: 'کلاه ها',
      imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
      id: 1,
      linkUrl: 'shop/hats',
    },
    {
      title: 'ژاکت ها',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS3pkho38rJMc__6E-MMvoaN0BfiFeTbLJsEA&usqp=CAU',
      id: 2,
      linkUrl: 'shop/jackets',
    },
    {
      title: 'کفش ها',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT9G11rasOQukzbRCFdnqCzPaCJPjA6_3Ku8w&usqp=CAU',
      id: 3,
      linkUrl: 'shop/sneakers',
    },
    {
      title: 'بانوان',
      imageUrl:
        'https://chibepoosham.com/wp-content/uploads/2020/07/%D8%AE%D8%B1%DB%8C%D8%AF-%D9%85%D8%A7%D9%86%D8%AA%D9%88-%D9%85%D9%86%D8%A7%D8%B3%D8%A8.jpg',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens',
    },
    {
      title: 'آقایان',
      imageUrl: 'https://lc-man.com/wp-content/uploads/2020/01/kotsahlvar.jpg',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens',
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
