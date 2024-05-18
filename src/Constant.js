// ------------------Accessories-------------------------



const imageData = [
  {
    id: 1,
    title: "Hats & Caps",
    url: "https://i.etsystatic.com/6152829/c/1666/1666/185/0/il/98afe3/5999931827/il_300x300.5999931827_28br.jpg",
  },
  {
    id: 2,
    title: "Keychains & Lanyards",
    url: "https://i.etsystatic.com/6533658/r/il/80000b/823055428/il_300x300.823055428_q6vu.jpg",
  },
  {
    id: 3,
    title: "Scarves & Wraps",
    url: "https://i.etsystatic.com/5779765/r/il/8a6d0b/2149410663/il_300x300.2149410663_k17s.jpg",
  },
  {
    id: 4,
    title: "Sunglasses & Eyewear",
    url: "https://i.etsystatic.com/5491963/r/il/9fd474/461948355/il_300x300.461948355_64cm.jpg",
  },
  {
    id: 5,
    title: "Patches & Pins",
    url: "https://i.etsystatic.com/32861059/r/il/798b77/3983876348/il_300x300.3983876348_99xs.jpg",
  },
  {
    id: 6,
    title: "Hair Accessories",
    url: "https://i.etsystatic.com/5677341/r/il/5db964/5360747401/il_300x300.5360747401_phau.jpg",
  },
  {
    id: 7,
    title: "Belts & Braces",
    url: "https://i.etsystatic.com/9617243/c/1234/1234/559/1102/il/1118ec/3872142232/il_300x300.3872142232_8ln9.jpg",
  },
  {
    id: 8,
    title: "Costume Accessories",
    url: "https://i.etsystatic.com/5745600/c/662/662/169/15/il/10aa33/1273042987/il_300x300.1273042987_4zd1.jpg",
  },
  {
    id: 9,
    title: "Suit & Tie Accessories",
    url: "https://i.etsystatic.com/6667226/c/1367/1367/0/29/il/1f1413/3693597418/il_300x300.3693597418_k21e.jpg",
  },
  {
    id: 10,
    title: "Baby Accessories",
    url: "https://i.etsystatic.com/6780165/c/1753/1753/0/16/il/96b3c0/5154723432/il_300x300.5154723432_ava7.jpg",
  },
  {
    id: 11,
    title: "Umbrellas & Rain Accessories",
    url: "https://i.etsystatic.com/5247403/r/il/cfae20/5186407387/il_300x300.5186407387_knyk.jpg",
  },
  {
    id: 12,
    title: "Hand Fans",
    url: "https://i.etsystatic.com/14439636/c/745/745/0/178/il/98e618/4838909275/il_300x300.4838909275_ht7h.jpg",
  },
  {
    id: 13,
    title: "Bouquets & Corsages",
    url: "https://i.etsystatic.com/8532870/c/2250/2250/0/64/il/e4d0d2/5687029220/il_300x300.5687029220_pupf.jpg",
  },
  {
    id: 14,
    title: "Gloves & Mittens",
    url: "https://i.etsystatic.com/6373048/r/il/6efd1a/2683501411/il_300x300.2683501411_m6lj.jpg",
  },
  {
    id: 15,
    title: "Face Masks & Coverings",
    url: "https://i.etsystatic.com/22657642/r/il/886cf9/2494448014/il_300x300.2494448014_kbma.jpg",
  },
];



const cardData = [
  {
    id: 1,
    image: 'https://i.etsystatic.com/19999793/c/800/635/0/81/il/b50c3d/5103362867/il_340x270.5103362867_hews.jpg',
    title: 'Embroidered Hat Personalized Dad Cap',
    price: '₹855',
    originalPrice: '₹1,710',
    discount: '50% off',
    rating: 4.748,
    reviews: 4748,
    badge: 'Star Seller',
    adBy: 'tinyhandBabyblanket'
  },
  {
    id: 2,
    image: 'https://i.etsystatic.com/19446116/r/il/ca21cc/6041680691/il_300x300.6041680691_fevk.jpg',
    title: '18K White Gold and Palladium',
    price: '₹399,909',
    originalPrice: '',
    discount: '',
    rating: 4.4,
    reviews: 440,
    badge: '',
    adBy: 'JewelsbyKSBdesigns'
  },
  {
    id: 3,
    image: 'https://i.etsystatic.com/38214603/r/il/ac42f2/5838501897/il_340x270.5838501897_hdi7.jpg',
    title: 'Hair Vine For Bride Crystal Hairpiece',
    price: '₹2,902',
    originalPrice: '₹3,629',
    discount: '20% off',
    rating: 5.15,
    reviews: 515,
    badge: 'Star Seller',
    adBy: 'VivianDesignBtq'
  },
  {
    id: 4,
    image: 'https://i.etsystatic.com/37459069/c/2118/2118/27/153/il/70aa2b/5983359588/il_300x300.5983359588_mdrr.jpg',
    title: 'Custom Engraved Heart Couple Keychain Set',
    price: '₹1,674',
    originalPrice: '₹2,575',
    discount: '35% off',
    rating: 4.5,
    reviews: 1230,
    badge: '',
    adBy: 'OriginalBespokeGifts'
  },
  {
    id: 5,
    image: 'https://i.etsystatic.com/52051704/r/il/095b17/6036520649/il_340x270.6036520649_m7pd.jpg',
    title: 'Parada',
    price: '₹17',
    originalPrice: '',
    discount: '',
    rating: 4.2,
    reviews: 1689,
    badge: '',
    adBy: 'SeanSoloSabers'
  },
  {
    id: 6,
    image: 'https://i.etsystatic.com/27374473/r/il/0bbcaa/5987116174/il_340x270.5987116174_65ou.jpg',
    title: 'Customize Resin Flower Keychain',
    price: '₹60',
    originalPrice: '₹120',
    discount: '50% off',
    rating: 4.8,
    reviews: 128,
    badge: '',
    adBy: 'Qingsnursery'
  },
  {
    id: 7,
    image: 'https://i.etsystatic.com/51931935/r/il/49de2e/6026040711/il_340x270.6026040711_dibt.jpg',
    title: '3D Fairy Bat-Man Keychain',
    price: '₹153',
    originalPrice: '₹192',
    discount: '20% off',
    rating: 5.0,
    reviews: 2,
    badge: '',
    adBy: 'KeyKollective'
  },
  {
    id: 8,
    image: 'https://i.etsystatic.com/51687017/r/il/9a53a8/5986320496/il_340x270.5986320496_juch.jpg',
    title: 'Daddy\'s Team Fist Bump Personalized Acrylic Keychain',
    price: '₹1,287',
    originalPrice: '₹2192',
    discount: '40%',
    rating: 4.7,
    reviews: 1230,
    badge: 'Star Seller',
    adBy: 'IuLigen'
  }
];


// -----------------Art & Collectibles ---------------


const Art_CollectiblesData = [
  {
    id: 1,
    title: "Prints",
    url: "https://i.etsystatic.com/7923668/c/998/998/1/0/il/3e9953/1440705435/il_300x300.1440705435_ec5o.jpg",
  },
  {
    id: 2,
    title: "Painting",
    url: "https://i.etsystatic.com/6996104/c/1140/1140/92/38/il/2fd2b5/5532101087/il_300x300.5532101087_611q.jpg",
  },
  {
    id: 3,
    title: "Sculpture",
    url: "https://i.etsystatic.com/37142812/r/il/681104/4908658418/il_300x300.4908658418_53sz.jpg",
  },
  {
    id: 4,
    title: "Glass Art",
    url: "https://i.etsystatic.com/11991447/c/426/426/0/32/il/a3bd71/2751062303/il_300x300.2751062303_92dj.jpg",
  },
  {
    id: 5,
    title: "Drawing & Illustration",
    url: "https://i.etsystatic.com/14409281/r/il/e81b60/4651013203/il_300x300.4651013203_2j18.jpg",
  },
  {
    id: 6,
    title: "Collectibles",
    url: "https://i.etsystatic.com/28239647/r/il/7e7b9c/4316976210/il_300x300.4316976210_6hok.jpg",
  },
  {
    id: 7,
    title: "Photography",
    url: "https://i.etsystatic.com/28239647/r/il/7e7b9c/4316976210/il_300x300.4316976210_6hok.jpg",
  },
  {
    id: 8,
    title: "Fibre Arts",
    url: "https://i.etsystatic.com/15269997/r/il/193265/2839953956/il_300x300.2839953956_e608.jpg",
  },
  {
    id: 9,
    title: "Mixed Media & Collage",
    url: "https://i.etsystatic.com/13701209/c/2250/2250/0/298/il/cd5c4c/1378217145/il_300x300.1378217145_8xk8.jpg",
  },
  {
    id: 10,
    title: "Dolls & Miniatures",
    url: "https://i.etsystatic.com/19543961/r/il/de905a/5536239830/il_300x300.5536239830_skyn.jpg",
  },
  {
    id: 11,
    title: "Fine Art Ceramics",
    url: "https://i.etsystatic.com/14575056/c/727/727/71/0/il/3d184d/2376694449/il_300x300.2376694449_fwyg.jpg",
  },
  {
    id: 12,
    title: "Artist Trading Cards",
    url: "https://i.etsystatic.com/5926119/c/1275/1275/0/0/il/9d1b70/1931813040/il_300x300.1931813040_ihjr.jpg",
  }
]


const products = [
    {
        id: 1,
        image: 'https://i.etsystatic.com/50097294/r/il/027ffc/5930774136/il_794xN.5930774136_fh1p.jpg',
        title: "Set of Three Eucalyptus Botanical Prints, Watercolor Art in Soft Green, Digital Download Wall Art, Eucalyptus Botanical Art Prints Set",
        price: '₹1,287',
        originalPrice: '₹2,192',
        discount: '40%',
        rating: 4.7,
        reviews: 1230,
        badge: 'Star Seller',
        adBy: 'IuLigen'
    },
    {
        id: 2,
        image: 'https://i.etsystatic.com/19346590/r/il/ef14ad/3880477590/il_340x270.3880477590_j9lk.jpg',
        title: "Goldfinch in a summer meadow, retro midcentury 1960s Illustration print/poster - bird poster - nature",
        price: '₹586',
        originalPrice: '₹2,345',
        discount: '75%',
        rating: 4.8,
        reviews: 821,
        badge: 'Star Seller',
        adBy: 'SageWillowArtPrints'
    },
    {
        id: 3,
        image: 'https://i.etsystatic.com/26843029/c/1250/992/382/30/il/566e6e/5844778628/il_340x270.5844778628_m1fo.jpg',
        title: "Enchanting Rose Garden: Luxurious Floral Canvas Art, Lush Blooms in Rich Hues for Elegant Bedroom Decor, Sophisticated Large Wall Accent",
        price: '₹1,751',
        originalPrice: null,
        discount: null,
        rating: 5.0,
        reviews: 1807,
        badge: 'Star Seller',
        adBy: 'YvePrintCo'
    },
    {
        id: 4,
        image: 'https://i.etsystatic.com/44905843/r/il/908ccd/5479445843/il_340x270.5479445843_48t0.jpg',
        title: "Yoga PNG Bundle, Sublimation Designs, Trendy Yoga PNG, Meditation PNG, Chakra, Lotus Flower png, Spiritual Art, Zen Design png,",
        price: '₹691',
        originalPrice: '₹1,728',
        discount: '60%',
        rating: 4.5,
        reviews: 35,
        badge: 'FREE delivery',
        adBy: 'BettyPawtrait'
    },
    {
        id: 5,
        image: 'https://i.etsystatic.com/48529796/r/il/58e7c9/6038566783/il_340x270.6038566783_c50f.jpg',
        title: "VINTAGE MATCHBOX PRINT, Trendy Matches Poster, Retro Matchbook Wall Art, Funky Aesthetic Print Apartment, Instant Digital Download Poster",
        price: '₹5,072',
        originalPrice: '₹5,638',
        discount: '10%',
        rating: 5.0,
        reviews: 405,
        badge: 'FREE delivery',
        adBy: 'MSSCrafts'
    },
    {
        id: 6,
        image: 'https://i.etsystatic.com/43615263/c/2694/2139/0/536/il/a1cb83/6038081139/il_340x270.6038081139_fh2a.jpg',
        title: "Vinland Saga poster, Thorfinn, colored Manga Poster, Digital 4K Wall Print, Manga Van Gogh Style Painting, Japanese Wall Art, Forgiven",
        price: '₹775',
        originalPrice: null,
        discount: null,
        rating: null,
        reviews: null,
        badge: 'Digital Download',
        adBy: 'HaruNordDesign'
    },
    {
        id: 7,
        image: 'https://i.etsystatic.com/52127687/c/2016/1601/211/328/il/911a7e/6036964943/il_340x270.6036964943_g9c2.jpg',
        title: "Live Music Wall Art, Woman Jazz Vocalist, Vibrant Colours, Musician Portrait, Music Lover Gift, Inspirational Art",
        price: '₹505',
        originalPrice: null,
        discount: null,
        rating: 5.0,
        reviews: 121,
        badge: 'Star Seller',
        adBy: 'DGItalyYours'
    },
    {
        id: 8,
        image: 'https://i.etsystatic.com/52319732/r/il/aa3c8e/6038217503/il_794xN.6038217503_jxl1.jpg',
        title: "Flower Print, Japanese Wall Art, Digital Download, Beige, Pastel, Neutral Modern Wall Art, Minimalist Art Prints, Printable, Scandinavian",
        price: '₹800',
        originalPrice: null,
        discount: null,
        rating: 2.0,
        reviews: 1,
        badge: 'Digital Download',
        adBy: 'Sevilatricolor'
    },
  ]




  // ---------------------------Clothing----------------------------



  const ClothingData = [
    {
      id: 1,
      title: "Women's Western Clothing",
      url: "https://i.etsystatic.com/17774346/r/il/161ad5/2663702011/il_300x300.2663702011_otj1.jpg",
    },
    {
      id: 2,
      title: "Men's Western Clothing",
      url: "https://i.etsystatic.com/8920958/c/1369/1369/251/322/il/1fced6/4356189253/il_300x300.4356189253_5nk4.jpg",
    },
    {
      id: 3,
      title: "Gender-Neutral Adult Clothing",
      url: "https://i.etsystatic.com/32577737/r/il/c6cd43/4311517989/il_300x300.4311517989_7zqm.jpg",
    },
    {
      id: 4,
      title: "Girls' Western Clothing",
      url: "https://i.etsystatic.com/22053040/r/il/09d7af/3472967547/il_300x300.3472967547_iyso.jpg",
    },
    {
      id: 5,
      title: "Boys' Western Clothing",
      url: "https://i.etsystatic.com/5951669/r/il/99060e/4958255064/il_300x300.4958255064_g1rg.jpg",
    },
    {
      id: 6,
      title: "Gender-Neutral Kids' Clothing",
      url: "https://i.etsystatic.com/31350947/c/1334/1334/0/222/il/d26d30/4322348477/il_300x300.4322348477_f8se.jpg",
    },
    {
      id: 7,
      title: "Indian Ethnic Clothing",
      url: "https://i.etsystatic.com/34337042/r/il/0716fe/4584599546/il_300x300.4584599546_iszt.jpg",
    },
    {
      id: 8,
      title: "Indian Ethnic Clothing",
      url: "https://i.etsystatic.com/34337042/r/il/0716fe/4584599546/il_300x300.4584599546_iszt.jpg",
    },

  ];
  

  const Cloth_Product = [
    {
        id: 1,
        image: 'https://i.etsystatic.com/13008011/c/2000/1589/0/794/il/ba2144/2049808201/il_340x270.2049808201_48rq.jpg',
        title: "Mens linen shirt, Dress shirt, White shirt, Wedding linen shirt, Band collar shirt, Flax shirt, Gift for him, Beach shirt, Mens style",
        price: '₹1,287',
        originalPrice: '₹2,192',
        discount: '40%',
        rating: 4.7,
        reviews: 1230,
        badge: 'Star Seller',
        adBy: 'IuLigen'
    },
    {
        id: 2,
        image: 'https://i.etsystatic.com/44225587/c/2727/2167/244/0/il/717b4e/5882148834/il_340x270.5882148834_7lns.jpg',
        title: "Comfort Colors® Flower Bouquet Shirt, Flower T Shirt, Retro Floral Shirt, Watercolor Flower Shirt, Plant Ladies Shirt, Gift for Women",
        price: '₹586',
        originalPrice: '₹2,345',
        discount: '75%',
        rating: 4.8,
        reviews: 821,
        badge: 'Star Seller',
        adBy: 'SageWillowArtPrints'
    },
    {
        id: 3,
        image: 'https://i.etsystatic.com/51974077/r/il/000e52/5981904206/il_794xN.5981904206_k8ct.jpg',
        title: "Anime Embroidered Washed Tee - Streetwear Oversized T-shirt for Men, Manga Graphic Gojo Acid Washed, Vintage Baggy Fit",
        price: '₹1,751',
        originalPrice: null,
        discount: null,
        rating: 5.0,
        reviews: 1807,
        badge: 'Star Seller',
        adBy: 'YvePrintCo'
    },
    {
        id: 4,
        image: 'https://i.etsystatic.com/51885023/c/900/714/0/33/il/9df44f/6033077111/il_340x270.6033077111_i7xb.jpg',
        title: "Boho Romper Summer Jumpsuit: Flight Suit, Loungewear for Casual Techwear Style | Harem Jumpsuit, Kimono Wrap Dress, Hippie Lounge Wear",
        price: '₹691',
        originalPrice: '₹1,728',
        discount: '60%',
        rating: 4.5,
        reviews: 35,
        badge: 'FREE delivery',
        adBy: 'BettyPawtrait'
    },
    {
        id: 5,
        image: 'https://i.etsystatic.com/6822943/r/il/6aaf81/4883728721/il_794xN.4883728721_ho5r.jpg',
        title: "Mid-sleeved Maxi Dress with Inverted Pleat A92135",
        price: '₹5,072',
        originalPrice: '₹5,638',
        discount: '10%',
        rating: 5.0,
        reviews: 405,
        badge: 'FREE delivery',
        adBy: 'MSSCrafts'
    },
    {
        id: 6,
        image: 'https://i.etsystatic.com/51999307/r/il/4d6621/6031364543/il_794xN.6031364543_b4fz.jpg',
        title: "Men Black Banned Military Drummer Parade Jacket Goth Punk Adam Ant Style",
        price: '₹775',
        originalPrice: null,
        discount: null,
        rating: null,
        reviews: null,
        badge: 'Digital Download',
        adBy: 'HaruNordDesign'
    },
    {
        id: 7,
        image: 'https://i.etsystatic.com/51946387/r/il/fa9528/6022582339/il_794xN.6022582339_b1k9.jpg',
        title: "Natural linen pants, Summer pants, Womens pants, Latte pants, Pajama pants for woman, Linen jogger, Linen loungewear, Yoga pants linen  ",
        price: '₹505',
        originalPrice: null,
        discount: null,
        rating: 5.0,
        reviews: 121,
        badge: 'Star Seller',
        adBy: 'DGItalyYours'
    },
    {
        id: 8,
        image: 'https://i.etsystatic.com/51805665/r/il/1a28cd/6028912027/il_794xN.6028912027_ljpp.jpg',
        title: "WhiteFox Hoodie - White Fox Dupe, 8 Colours/Colors, Pullover, Bubbly Writing, 3D, Leisure Hoodie",
        price: '₹1800',
        originalPrice: null,
        discount: null,
        rating: 2.0,
        reviews: 6,
        badge: 'Digital Download',
        adBy: 'Sevilatricolor'
    },
  ]

export { imageData, cardData, Art_CollectiblesData, products, ClothingData, Cloth_Product };