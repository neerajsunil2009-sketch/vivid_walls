const KEYS = {
    unsplash: 'yr1wxgn6oZ2XeIZcbZwBPpsImtrY6Ah8ZIn0DJ6cqiE',
    pexels: 'o1X7PyrGxEiaDgdyxq6j2ewlQsU8wBGg6ZIENUBThf4yudD59NiE2QUc',
    pixabay: '55660755-90f69456cc2ac320284d8b998',
};
const manualPhotos = [
    {
    type: 'image',
    preview: 'images/@aryan_lanjhewar_threadsmate.com_1779352882.jpg',
    download: 'images/@aryan_lanjhewar_threadsmate.com_1779352882.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['anime wallpaper', '4k wallpaper', 'mobile wallpaper', 'anime', 'trending', 'demon slayer'],
    isTrending: true
  },
  {
    type: 'image',
    preview: 'images/@aryan_lanjhewar_threadsmate.com_1779352877.jpg',
    download: 'images/@aryan_lanjhewar_threadsmate.com_1779352877.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['marvel wallpaper', '4k wallpaper', 'anime', 'phone wallpaper', 'trending', 'demon slayer'],
    isTrending: true
  },
  {
    type: 'image',
    preview: 'images/@aryan_lanjhewar_threadsmate.com_1779352875.jpg',
    download: 'images/@aryan_lanjhewar_threadsmate.com_1779352875.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['live wallpaper', '4k wallpaper', 'amoled wallpaper', 'inosuke', 'trending', 'anime','demon slayer'],
    isTrending: true
  },
  {
    type: 'image',
    preview: 'images/@aryan_lanjhewar_threadsmate.com_1779352872.jpg',
    download: 'images/@aryan_lanjhewar_threadsmate.com_1779352872.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['anime wallpaper', '4k wallpaper', 'cool wallpaper', 'hd graphics', 'trending', 'anime'],
    isTrending: true
  },
  {
    type: 'image',
    preview: 'images/@aryan_lanjhewar_threadsmate.com_1779352869.jpg',
    download: 'images/@aryan_lanjhewar_threadsmate.com_1779352869.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['girl', 'live wallpaper', 'phone theme', '4k background', 'trending', 'anime'],
    isTrending: true
  },
  {
    type: 'image',
    preview: 'images/@aryan_lanjhewar_threadsmate.com_1779352867.jpg',
    download: 'images/@aryan_lanjhewar_threadsmate.com_1779352867.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['demon slayer', 'anime wallpaper', 'minimalist aesthetic', 'mobile setup', 'trending', 'asime'],
    isTrending: true
  },
  {
    type: 'image',
    preview: 'images/@aryan_lanjhewar_threadsmate.com_1779352864.jpg',
    download: 'images/@aryan_lanjhewar_threadsmate.com_1779352864.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['demon slayer', '4k wallpaper', 'gaming background', 'hd lockscreen', 'trending', 'anime'],
    isTrending: true
  },
  {
    type: 'image',
    preview: 'images/@aryan_lanjhewar_threadsmate.com_1779352861.jpg',
    download: 'images/@aryan_lanjhewar_threadsmate.com_1779352861.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['anime', 'demon slayer', '4k resolution', 'premium background', 'trending', ''],
    isTrending: true
  },
  {
    type: 'image',
    preview: 'images/@aryan_lanjhewar_threadsmate.com_1779352858.jpg',
    download: 'images/@aryan_lanjhewar_threadsmate.com_1779352858.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['4k wallpaper', '', 'desktop layout', 'phone home screen', 'trending', 'anime'],
    isTrending: true
  },
  {
    type: 'image',
    preview: 'images/@aryan_lanjhewar_threadsmate.com_1779352760.jpg',
    download: 'images/@aryan_lanjhewar_threadsmate.com_1779352760.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['anime wallpaper', 'live wallpaper', '4k wallpaper', 'naruto', 'anime', 'all'],
    isTrending: true
  },
     
  {
    id: 'custom_anime_01', // 👈 Add this line right here
    type: 'image',
    preview: 'images/@fusionwallvibe_threadsmate.com_1779209094.jpg',
    download: 'images/@fusionwallvibe_threadsmate.com_1779209094.jpg',
    aspect: 'pc',
    author: 'Akshay',
    tags: ['deamon slayer', 'anime', 'superman', 'trending', 'all'],
    isTrending: true
  },
  {
    id: 'custom_superman_02', // 👈 Add this line right here
    type: 'image',
    preview: 'images/superman.webp',
    download: 'images/superman.webp',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['superhero', 'dc', 'superman', 'trending', 'all'],
    isTrending: true
  },
  {
    id: 'custom_spiderman_03', // 👈 Add this line right here
    type: 'image',
    preview: 'images/spiderman.jpg',
    download: 'images/spiderman.jpg',
    author: 'Akshay',
    aspect: 'mobile',
    tags: ['superhero', 'marvel', 'spiderman', 'trending', 'all'],
    isTrending: true
  },
     {
        type: 'image',
        preview: 'images/@aidigital_sensei_threadsmate.com_1778321455.jpg',// Correct: No / at the start
        download: 'images/@aidigital_sensei_threadsmate.com_1778321455.jpg',
        author: 'Akshay',
        aspect:'mobile',
        tags: ['onepiece', 'anime', 'luffy','trending','all'],
        isTrending: true
        
    },
    {
        type: 'image',
        preview: 'images/@aidigital_sensei_threadsmate.com_1778321458.jpg',// Correct: No / at the start
        download: 'images/@aidigital_sensei_threadsmate.com_1778321458.jpg',
        author: 'Akshay',
        aspect:'mobile',
        tags: ['onepiece', 'anime', 'luffy','trending','all'],
        isTrending: true
        
    },
    {
    type: 'image',
    preview: 'images/@dyslove.design_threadsmate.com_1779355676.jpg',
    download: 'images/@dyslove.design_threadsmate.com_1779355676.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['sports', 'ronaldihno', '4k wallpaper', 'football', 'trending', 'brazil'],
    isTrending: true
  },
  {
    type: 'image',
    preview: 'images/@dyslove.design_threadsmate.com_1779355685.jpg',
    download: 'images/@dyslove.design_threadsmate.com_1779355685.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['sports', 'sports wallpaper', '4k wallpaper', 'football', 'trending', ,'messi','argentina'],
    isTrending: true
  },
  {
    type: 'image',
    preview: 'images/@dyslove.design_threadsmate.com_1779355687.jpg',
    download: 'images/@dyslove.design_threadsmate.com_1779355687.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['sports', 'sports wallpaper', '4k wallpaper', 'football', 'trending', 'ronaldo'],
    isTrending: true
  },
  {
    type: 'image',
    preview: 'images/@dyslove.design_threadsmate.com_1779355689.jpg',
    download: 'images/@dyslove.design_threadsmate.com_1779355689.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['sports', 'sports wallpaper', '4k wallpaper', 'football', 'trending', 'acm'],
    isTrending: true
  },
  {
    type: 'image',
    preview: 'images/@dyslove.design_threadsmate.com_1779355691.jpg',
    download: 'images/@dyslove.design_threadsmate.com_1779355691.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['sports', 'sports wallpaper', '4k wallpaper', 'foootball', 'trending', 'pedri'],
    isTrending: true
  },

  // 📋 REMAINING 15 REGULAR SPORTS WALLPAPERS
  {
    type: 'image',
    preview: 'images/@dyslove.design_threadsmate.com_1779355692.jpg',
    download: 'images/@dyslove.design_threadsmate.com_1779355692.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['sports', 'sports wallpaper', '4k wallpaper', 'football', 'beckham'],
    isTrending: false
  },
  {
    type: 'image',
    preview: 'images/@dyslove.design_threadsmate.com_1779355695.jpg',
    download: 'images/@dyslove.design_threadsmate.com_1779355695.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['sports', 'sports wallpaper', 'football', 'athletes', 'yamal'],
    isTrending: false
  },
  {
    type: 'image',
    preview: 'images/@dyslove.design_threadsmate.com_1779355697.jpg',
    download: 'images/@dyslove.design_threadsmate.com_1779355697.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['sports', 'sports wallpaper', '4k wallpaper', 'football ', 'yamal'],
    isTrending: false
  },
  {
    type: 'image',
    preview: 'images/@dyslove.design_threadsmate.com_1779355699.jpg',
    download: 'images/@dyslove.design_threadsmate.com_1779355699.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['sports', 'sports wallpaper', '4k wallpaper', 'football', 'real madrid','modric'],
    isTrending: false
  },
  {
    type: 'image',
    preview: 'images/@dyslove.design_threadsmate.com_1779355701.jpg',
    download: 'images/@dyslove.design_threadsmate.com_1779355701.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['sports', 'sports wallpaper', '4k wallpaper', 'football', 'brazil','ronaldo'],
    isTrending: false
  },
  {
    type: 'image',
    preview: 'images/@dyslove.design_threadsmate.com_1779355703.jpg',
    download: 'images/@dyslove.design_threadsmate.com_1779355703.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['sports', 'sports wallpaper', '4k wallpaper', 'football', 'acm'],
    isTrending: false
  },
  {
    type: 'image',
    preview: 'images/@dyslove.design_threadsmate.com_1779355705.jpg',
    download: 'images/@dyslove.design_threadsmate.com_1779355705.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['sports', 'sports wallpaper', '4k wallpaper', 'football', 'mbappe'],
    isTrending: false
  },
  {
    type: 'image',
    preview: 'images/@dyslove.design_threadsmate.com_1779355708.jpg',
    download: 'images/@dyslove.design_threadsmate.com_1779355708.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['sports', 'sports wallpaper', '4k wallpaper', 'football', 'all'],
    isTrending: false
  },
  {
    type: 'image',
    preview: 'images/@dyslove.design_threadsmate.com_1779355710.jpg',
    download: 'images/@dyslove.design_threadsmate.com_1779355710.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['sports', 'sports wallpaper', '4k wallpaper', 'football', 'all'],
    isTrending: false
  },
  {
    type: 'image',
    preview: 'images/@dyslove.design_threadsmate.com_1779355712.jpg',
    download: 'images/@dyslove.design_threadsmate.com_1779355712.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['sports', 'sports wallpaper', '4k wallpaper', 'neon courts', 'manchester city'],
    isTrending: false
  },
  {
    type: 'image',
    preview: 'images/@dyslove.design_threadsmate.com_1779355714.jpg',
    download: 'images/@dyslove.design_threadsmate.com_1779355714.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['sports', 'sports wallpaper', '4k wallpaper', 'football', 'ronaldo'],
    isTrending: false
  },
  {
    type: 'image',
    preview: 'images/@dyslove.design_threadsmate.com_1779355715.jpg',
    download: 'images/@dyslove.design_threadsmate.com_1779355715.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['sports', 'sports wallpaper', '4k wallpaper', 'football', 'modric'],
    isTrending: false
  },
  {
    type: 'image',
    preview: 'images/@dyslove.design_threadsmate.com_1779355717.jpg',
    download: 'images/@dyslove.design_threadsmate.com_1779355717.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['sports', 'sports wallpaper', '4k wallpaper', 'football', 'messi'],
    isTrending: false
  },
  {
    type: 'image',
    preview: 'images/@dyslove.design_threadsmate.com_1779355719.jpg',
    download: 'images/@dyslove.design_threadsmate.com_1779355719.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['sports', 'sports wallpaper', '4k wallpaper', 'football', 'messi'],
    isTrending: false
  },
  {
    type: 'image',
    preview: 'images/@dyslove.design_threadsmate.com_1779355721.jpg',
    download: 'images/@dyslove.design_threadsmate.com_1779355721.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['sports', 'sports wallpaper', '4k wallpaper', 'football', 'ronaldo'],
    isTrending: false
  },
  
  {
    type: 'image',
    preview: 'images/@glow.grid0_threadsmate.com_1779362129.jpg',
    download: 'images/@glow.grid0_threadsmate.com_1779362129.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['anime', 'trending', 'naruto', 'kakashi', '4k wallpaper', 'all'],
    isTrending: true
  },
  {
    type: 'image',
    preview: 'images/@glow.grid0_threadsmate.com_1779362128.jpg',
    download: 'images/@glow.grid0_threadsmate.com_1779362128.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['anime', 'trending', 'naruto', 'madara', '4k wallpaper', 'all'],
    isTrending: true
  },
  {
    type: 'image',
    preview: 'images/@glow.grid0_threadsmate.com_1779362118.jpg',
    download: 'images/@glow.grid0_threadsmate.com_1779362118.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['anime', 'naruto', 'minato', 'trending', '4k wallpaper', 'all'],
    isTrending: true
  },
  {
    type: 'image',
    preview: 'images/@glow.grid0_threadsmate.com_1779362116.jpg',
    download: 'images/@glow.grid0_threadsmate.com_1779362116.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['anime', 'naruto', 'sasuke', 'trending', '4k wallpaper', 'all'],
    isTrending: true
  },
  {
    type: 'image',
    preview: 'images/@glow.grid0_threadsmate.com_1779362114.jpg',
    download: 'images/@glow.grid0_threadsmate.com_1779362114.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['anime', 'naruto', 'trending', '4k wallpaper', 'all'],
    isTrending: true
  },
  {
    type: 'image',
    preview: 'images/@glow.grid0_threadsmate.com_1779362131.jpg',
    download: 'images/@glow.grid0_threadsmate.com_1779362131.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['anime', 'itachi', 'trending', 'naruto', '4k wallpaper', 'all'],
    isTrending: true
  },
  {
    type: 'image',
    preview: 'images/@glow.grid0_threadsmate.com_1779362134.jpg',
    download: 'images/@glow.grid0_threadsmate.com_1779362134.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['anime', 'obito', 'naruto', 'trending', '4k wallpaper', 'all'],
    isTrending: true
  },
  {
    type: 'image',
    preview: 'images/705947874_17927507430307703_7387215288807994970_n.jpg',
    download: 'images/705947874_17927507430307703_7387215288807994970_n.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['sports', 'football', 'trending', 'sports wallpaper', '4k wallpaper', 'all'],
    isTrending: true
  },
  {
    type: 'image',
    preview: 'images/705547348_17927507526307703_5962647623038935783_n.jpg',
    download: 'images/705547348_17927507526307703_5962647623038935783_n.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['sports', 'football', 'trending', 'sports wallpaper', '4k wallpaper', 'all'],
    isTrending: true
  },
  {
    type: 'image',
    preview: 'images/705705816_17927507481307703_4750432269521556448_n.jpg',
    download: 'images/705705816_17927507481307703_4750432269521556448_n.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['sports', 'football', 'trending', 'sports wallpaper', '4k wallpaper', 'all'],
    isTrending: true
  },
  {
    type: 'image',
    preview: 'images/706089356_17927507505307703_7046041766369253689_n.jpg',
    download: 'images/706089356_17927507505307703_7046041766369253689_n.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['sports', 'football', 'trending', 'sports wallpaper', '4k wallpaper', 'all'],
    isTrending: true
  },
  {
    type: 'image',
    preview: 'images/705411579_17927507502307703_1062898232276320150_n.jpg',
    download: 'images/705411579_17927507502307703_1062898232276320150_n.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['sports', 'football', 'trending', 'sports wallpaper', '4k wallpaper', 'all'],
    isTrending: true
  },

  // 📋 REMAINING 6 REGULAR FOOTBALL WALLPAPERS
  {
    type: 'image',
    preview: 'images/705968788_17927507520307703_6104956002683395593_n.jpg',
    download: 'images/705968788_17927507520307703_6104956002683395593_n.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['sports', 'football', 'sports wallpaper', '4k wallpaper', 'all'],
    isTrending: false
  },
  {
    type: 'image',
    preview: 'images/705968350_17927507463307703_2141334297810331427_n.jpg',
    download: 'images/705968350_17927507463307703_2141334297810331427_n.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['sports', 'football', 'sports wallpaper', '4k wallpaper', 'all'],
    isTrending: false
  },
  {
    type: 'image',
    preview: 'images/705428848_17927507514307703_4766240041584511846_n.jpg',
    download: 'images/705428848_17927507514307703_4766240041584511846_n.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['sports', 'football', 'sports wallpaper', '4k wallpaper', 'all'],
    isTrending: false
  },
  {
    type: 'image',
    preview: 'images/705907417_17927507454307703_1096438382365743811_n.jpg',
    download: 'images/705907417_17927507454307703_1096438382365743811_n.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['sports', 'football', 'sports wallpaper', '4k wallpaper', 'all'],
    isTrending: false
  },
  {
    type: 'image',
    preview: 'images/706154853_17927507478307703_916297327551254777_n.jpg',
    download: 'images/706154853_17927507478307703_916297327551254777_n.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['sports', 'football', 'sports wallpaper', '4k wallpaper', 'all'],
    isTrending: false
  },
  {
    type: 'image',
    preview: 'images/705842406_17927507523307703_4058218369107129371_n.jpg',
    download: 'images/705842406_17927507523307703_4058218369107129371_n.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['sports', 'football', 'sports wallpaper', '4k wallpaper', 'all'],
    isTrending: false
  },
  {
    type: 'image',
    preview: 'images/707188486_18075056351404498_2355728803971453872_n.jpg',
    download: 'images/707188486_18075056351404498_2355728803971453872_n.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['anime', 'trending', 'cool', '4k wallpaper', 'all'],
    isTrending: true
  },
  {
    type: 'image',
    preview: 'images/705320462_18075056315404498_44815302352151727_n.jpg',
    download: 'images/705320462_18075056315404498_44815302352151727_n.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['anime', 'trending', 'aesthetic', '4k wallpaper', 'all'],
    isTrending: true
  },
  {
    type: 'image',
    preview: 'images/706839600_18075056324404498_3816577762375908360_n.jpg',
    download: 'images/706839600_18075056324404498_3816577762375908360_n.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['anime', 'trending', 'dark', '4k wallpaper', 'all'],
    isTrending: true
  },

  // 📋 REMAINING 3 REGULAR ANIME WALLPAPERS
  {
    type: 'image',
    preview: 'images/705320217_18075056333404498_2580082520107551811_n.jpg',
    download: 'images/705320217_18075056333404498_2580082520107551811_n.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['anime', 'cool', '4k wallpaper', 'all'],
    isTrending: false
  },
  {
    type: 'image',
    preview: 'images/707445769_18075056342404498_6287185971199722827_n.jpg',
    download: 'images/707445769_18075056342404498_6287185971199722827_n.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['anime', 'aesthetic', '4k wallpaper', 'all','demon slayer'],
    isTrending: false
  },
  {
    type: 'image',
    preview: 'images/705399768_18075056306404498_2227378974928130107_n.jpg',
    download: 'images/705399768_18075056306404498_2227378974928130107_n.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['anime', 'art', '4k wallpaper', 'all','goku'],
    isTrending: false
  },
  {
    type: 'image',
    preview: 'images/706028752_18105165082856296_746937656786347186_n.jpg',
    download: 'images/706028752_18105165082856296_746937656786347186_n.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['anime', 'jujutsu kaisen', 'gojo', 'trending', '4k wallpaper', 'all'],
    isTrending: true
  },
  {
    type: 'image',
    preview: 'images/705018794_18105165055856296_8072736958927149336_n.jpg',
    download: 'images/705018794_18105165055856296_8072736958927149336_n.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['anime', 'jujutsu kaisen', 'sukuna', 'trending', '4k wallpaper', 'all'],
    isTrending: true
  },
  {
    type: 'image',
    preview: 'images/706028752_18105165109856296_3095300187899950749_n.jpg',
    download: 'images/706028752_18105165109856296_3095300187899950749_n.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['anime', 'jujutsu kaisen', 'sukuna', 'trending', '4k wallpaper', 'all'],
    isTrending: true
  },

  // 📋 REMAINING 7 REGULAR JJK WALLPAPERS
  {
    type: 'image',
    preview: 'images/706744853_18105165046856296_3257492604659384275_n.jpg',
    download: 'images/706744853_18105165046856296_3257492604659384275_n.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['anime', 'jujutsu kaisen', 'cool', '4k wallpaper', 'all'],
    isTrending: false
  },
  {
    type: 'image',
    preview: 'images/705270134_18105165079856296_935923926582612140_n.jpg',
    download: 'images/705270134_18105165079856296_935923926582612140_n.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['anime', 'jujutsu kaisen', 'aesthetic', '4k wallpaper', 'all'],
    isTrending: false
  },
  {
    type: 'image',
    preview: 'images/706417448_18105165100856296_217636687246969443_n.jpg',
    download: 'images/706417448_18105165100856296_217636687246969443_n.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['anime', 'jujutsu kaisen', 'dark', '4k wallpaper', 'all'],
    isTrending: false
  },
  {
    type: 'image',
    preview: 'images/705528429_18105165037856296_7958701561116729926_n.jpg',
    download: 'images/705528429_18105165037856296_7958701561116729926_n.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['anime', 'jujutsu kaisen', 'art', '4k wallpaper', 'all'],
    isTrending: false
  },
  {
    type: 'image',
    preview: 'images/705387983_18105165091856296_7898819039817448622_n.jpg',
    download: 'images/705387983_18105165091856296_7898819039817448622_n.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['anime', 'jujutsu kaisen', 'cool', '4k wallpaper', 'all'],
    isTrending: false
  },
  {
    type: 'image',
    preview: 'images/706028759_18105165028856296_272631225059686156_n.jpg',
    download: 'images/706028759_18105165028856296_272631225059686156_n.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['anime', 'jujutsu kaisen', 'aesthetic', '4k wallpaper', 'all'],
    isTrending: false
  },
  {
    type: 'image',
    preview: 'images/ 704041749_17928839397318799_8395697110865817792_n.jpg.',
    download: 'images/704041749_17928839397318799_8395697110865817792_n.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['anime', 'one piece', 'monsters', 'trending', '4k wallpaper', 'all'],
    isTrending: true
  },
  {
    type: 'image',
    preview: 'images/705306231_17928839406318799_3628458130831476015_n.jpg',
    download: 'images/705306231_17928839406318799_3628458130831476015_n.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['anime', 'one piece', 'monsters', 'trending', 'cool', '4k wallpaper', 'all'],
    isTrending: true
  },
  {
    type: 'image',
    preview: 'images/706595084_17928839424318799_6719612333090439539_n.jpg',
    download: 'images/706595084_17928839424318799_6719612333090439539_n.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['anime', 'one piece', 'monsters', 'trending', 'dark', '4k wallpaper', 'all'],
    isTrending: true
  },

  // 📋 REMAINING 6 REGULAR ASSETS
  {
    type: 'image',
    preview: 'images/706610916_17928839352318799_4534062396696578224_n.jpg',
    download: 'images/706610916_17928839352318799_4534062396696578224_n.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['anime', 'one piece', 'monsters', 'cool', '4k wallpaper', 'all'],
    isTrending: false
  },
  {
    type: 'image',
    preview: 'images/706417319_17928839415318799_8301239656987074787_n.jpg',
    download: 'images/706417319_17928839415318799_8301239656987074787_n.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['anime', 'one piece', 'monsters', 'aesthetic', '4k wallpaper', 'all'],
    isTrending: false
  },
  {
    type: 'image',
    preview: 'images/706155142_17928839373318799_5267717860168338820_n.jpg',
    download: 'images/706155142_17928839373318799_5267717860168338820_n.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['anime', 'one piece', 'monsters', 'power', '4k wallpaper', 'all'],
    isTrending: false
  },
  {
    type: 'image',
    preview: 'images/706483503_17928839394318799_86467049974750583_n.jpg',
    download: 'images/706483503_17928839394318799_86467049974750583_n.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['anime', 'one piece', 'monsters', 'art', '4k wallpaper', 'all'],
    isTrending: false
  },
  {
    type: 'image',
    preview: 'images/706704349_17928839382318799_2004684201787200059_n.jpg',
    download: 'images/706704349_17928839382318799_2004684201787200059_n.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['anime', 'one piece', 'monsters', 'cool', '4k wallpaper', 'all'],
    isTrending: false
  },
  {
    type: 'image',
    preview: 'images/706583232_17928839376318799_7651163147844994783_n.jpg',
    download: 'images/706583232_17928839376318799_7651163147844994783_n.jpg',
    aspect: 'mobile',
    author: 'Akshay',
    tags: ['anime', 'one piece', 'monsters', 'aesthetic', '4k wallpaper', 'all'],
    isTrending: false
  },

    {
        preview: 'images/@call_me_baba5161_threadsmate.com_1778322805.jpg',
        download: 'images/@call_me_baba5161_threadsmate.com_1778322805.jpg',
        author: 'Akshay',
        tags: ['marvel', 'trending', 'spiderman','all'],
        aspect: 'pc',
        isTrending: true
    },
    {
        preview: 'images/@call_me_baba5161_threadsmate.com_1778322789.jpg',
        download: 'images/@call_me_baba5161_threadsmate.com_1778322789.jpg',
        author: 'Akshay',
        tags: ['marvel', 'trending', 'spiderman','all'],
        aspect: 'pc',
         isTrending: true
    },
    {
        preview: 'images/@call_me_baba5161_threadsmate.com_1778322780.jpg',
        download: 'images/@call_me_baba5161_threadsmate.com_1778322780.jpg',
        author: 'Akshay',
        tags: ['trending', 'marvel', 'deadpool','all'],
        aspect: 'pc',
         isTrending: true
    },
    {
        preview: 'images/@getgreenthumb_threadsmate.com_1778322659.jpg',
        download: 'images/@getgreenthumb_threadsmate.com_1778322659.jpg',
        author: 'Akshay',
        tags: ['car&bike', 'trending', 'bmw', 'm4 competition','all'],
        aspect: 'pc',
         isTrending: true
    },
    {
        preview: 'images/@getgreenthumb_threadsmate.com_1778322653.jpg',
        download: 'images/@getgreenthumb_threadsmate.com_1778322653.jpg',
        author: 'Akshay',
        tags: ['car&bike', 'trending', 'bmw', 'm4 competition','all'],
        aspect: 'pc',
         isTrending: true
    },
    {
    type: 'image',
    preview: 'images/@krunalpatel.man_threadsmate.com_1779357936.jpg',
    download: 'images/@krunalpatel.man_threadsmate.com_1779357936.jpg',
    aspect: 'pc',
    author: 'Akshay',
    // 🌟 Car & Bike target filter matching
    tags: ['car bike', 'car aesthetic', 'cool', 'trending', '4k wallpaper', 'all'],
    isTrending: true
  },
  {
    type: 'image',
    preview: 'images/@krunalpatel.man_threadsmate.com_1779357940.jpg',
    download: 'images/@krunalpatel.man_threadsmate.com_1779357940.jpg',
    aspect: 'pc',
    author: 'Akshay',
    // 🌟 Cartoon & Pikachu target filter matching
    tags: ['cartoon', 'trending', 'cool', 'pikachu', 'aesthetic', '4k wallpaper', 'all'],
    isTrending: true
  },
  {
    type: 'image',
    preview: 'images/@krunalpatel.man_threadsmate.com_1779357943.jpg',
    download: 'images/@krunalpatel.man_threadsmate.com_1779357943.jpg',
    aspect: 'pc',
    author: 'Akshay',
    // 🌟 General trending aesthetic matching
    tags: ['trending', 'cool', 'cat', 'aesthetic', 'animals', '4k wallpaper', 'all'],
    isTrending: true
  },
  {
    type: 'image',
    preview: 'images/@cars.wallpaper13_threadsmate.com_1779358001.jpg',
    download: 'images/@cars.wallpaper13_threadsmate.com_1779358001.jpg',
    aspect: 'pc',
    author: 'Akshay',
    // 🌟 Set as trending matching your lightning mcqueen cartoon theme
    tags: ['car bike', 'car cartoon', 'mcqueen', 'trending', 'cool', '4k wallpaper', 'all'],
    isTrending: true
  },
  {
    type: 'image',
    preview: 'images/@cars.wallpaper13_threadsmate.com_1779358005.jpg',
    download: 'images/@cars.wallpaper13_threadsmate.com_1779358005.jpg',
    aspect: 'pc',
    author: 'Akshay',
    tags: ['car bike', 'bmw', 'car aesthetic', 'cool', '4k wallpaper', 'all'],
    isTrending: false
  },
  {
    type: 'image',
    preview: 'images/@cars.wallpaper13_threadsmate.com_1779358007.jpg',
    download: 'images/@cars.wallpaper13_threadsmate.com_1779358007.jpg',
    aspect: 'pc',
    author: 'Akshay',
    tags: ['car bike', 'car cartoon', 'cartoon', 'aesthetic', '4k wallpaper', 'all'],
    isTrending: false
  },
  {
    type: 'image',
    preview: 'images/@cars.wallpaper13_threadsmate.com_1779358009.jpg',
    download: 'images/@cars.wallpaper13_threadsmate.com_1779358009.jpg',
    aspect: 'pc',
    author: 'Akshay',
    tags: ['car bike', 'bmw', 'sports car', 'cool', '4k wallpaper', 'all'],
    isTrending: false
  },
  {
    type: 'image',
    preview: 'images/706483386_17920149552357359_4833297422857452475_n.jpg',
    download: 'images/706483386_17920149552357359_4833297422857452475_n.jpg',
    aspect: 'pc',
    author: 'Akshay',
    tags: ['anime', 'jujutsu kaisen', 'trending', 'pc wallpaper', '4k wallpaper', 'all'],
    isTrending: true
  },
  {
    type: 'image',
    preview: 'images/706559653_17920149534357359_8174136154498249306_n.jpg',
    download: 'images/706559653_17920149534357359_8174136154498249306_n.jpg',
    aspect: 'pc',
    author: 'Akshay',
    tags: ['anime', 'jujutsu kaisen', 'sukuna', 'trending', 'pc wallpaper', '4k wallpaper', 'all'],
    isTrending: true
  },
  {
    type: 'image',
    preview: 'images/706568644_17920149525357359_3701538589347176786_n.jpg',
    download: 'images/706568644_17920149525357359_3701538589347176786_n.jpg',
    aspect: 'pc',
    author: 'Akshay',
    tags: ['anime', 'jujutsu kaisen', 'mickey', 'trending', 'pc wallpaper', '4k wallpaper', 'all'],
    isTrending: true
  },
  {
    type: 'image',
    preview: 'images/706581297_17920149516357359_5356546212842720972_n.jpg',
    download: 'images/706581297_17920149516357359_5356546212842720972_n.jpg',
    aspect: 'pc',
    author: 'Akshay',
    tags: ['anime', 'jujutsu kaisen', 'trending', 'pc wallpaper', '4k wallpaper', 'all'],
    isTrending: true
  },
  {
    type: 'image',
    preview: 'images/706919117_17920149543357359_5275027800366576917_n.jpg',
    download: 'images/706919117_17920149543357359_5275027800366576917_n.jpg',
    aspect: 'pc',
    author: 'Akshay',
    tags: ['anime', 'jujutsu kaisen', 'gojo', 'trending', 'pc wallpaper', '4k wallpaper', 'all'],
    isTrending: true
  },
  {
    type: 'image',
    preview: 'images/707030087_17920149507357359_2621128272380771498_n.jpg',
    download: 'images/707030087_17920149507357359_2621128272380771498_n.jpg',
    aspect: 'pc',
    author: 'Akshay',
    tags: ['anime', 'jujutsu kaisen', 'trending', 'pc wallpaper', '4k wallpaper', 'all'],
    isTrending: true
  },
  {
    type: 'image',
    preview: 'images/706813417_17926743534318518_2000954884606088765_n.jpg',
    download: 'images/706813417_179267435343185182000954884606088765_n.jpg',
    aspect: 'pc',
    author: 'Akshay',
    tags: ['cartoon', 'benten', 'trending', 'pc wallpaper', '4k wallpaper', 'all'],
    isTrending: true
  },
  {
    type: 'image',
    preview: 'images/707393502_17926743462318518_2680102197820893471_n.jpg',
    download: 'images/707393502_17926743462318518_2680102197820893471_n.jpg',
    aspect: 'pc',
    author: 'Akshay',
    tags: ['cartoon', 'benten', 'trending', 'pc wallpaper', '4k wallpaper', 'all'],
    isTrending: true
  },
  {
    type: 'image',
    preview: 'images/707445642_17926743471318518_3575695097578858190_n.jpg',
    download: 'images/707445642_17926743471318518_3575695097578858190_n.jpg',
    aspect: 'pc',
    author: 'Akshay',
    tags: ['cartoon', 'benten', 'trending', 'pc wallpaper', '4k wallpaper', 'all'],
    isTrending: true
  },
  {
    type: 'image',
    preview: 'images/707510212_17926743453318518_6175227409942330927_n.jpg',
    download: 'images/707510212_17926743453318518_6175227409942330927_n.jpg',
    aspect: 'pc',
    author: 'Akshay',
    tags: ['cartoon', 'benten', 'trending', 'pc wallpaper', '4k wallpaper', 'all'],
    isTrending: true
  },
  {
    type: 'image',
    preview: 'images/707561175_17926743480318518_4442654822719767598_n.jpg',
    download: 'images/707561175_17926743480318518_4442654822719767598_n.jpg',
    aspect: 'pc',
    author: 'Akshay',
    tags: ['cartoon', 'benten', 'trending', 'pc wallpaper', '4k wallpaper', 'all'],
    isTrending: true
  },
  {
    type: 'image',
    preview: 'images/708016306_17926743489318518_4269226150540340680_n.jpg',
    download: 'images/708016306_17926743489318518_4269226150540340680_n.jpg',
    aspect: 'pc',
    author: 'Akshay',
    tags: ['cartoon', 'benten', 'trending', 'pc wallpaper', '4k wallpaper', 'all'],
    isTrending: true
  },
  {
    type: 'image',
    preview: 'images/708442208_17926743498318518_1589763069092152251_n.jpg',
    download: 'images/708442208_17926743498318518_1589763069092152251_n.jpg',
    aspect: 'pc',
    author: 'Akshay',
    tags: ['cartoon', 'benten', 'trending', 'pc wallpaper', '4k wallpaper', 'all'],
    isTrending: true
  },
  {
    type: 'image',
    preview: 'images/708595496_17926743444318518_8928663010824992449_n.jpg',
    download: 'images/708595496_17926743444318518_8928663010824992449_n.jpg',
    aspect: 'pc',
    author: 'Akshay',
    tags: ['cartoon', 'benten', 'trending', 'pc wallpaper', '4k wallpaper', 'all'],
    isTrending: true
  },
  {
    type: 'image',
    preview: 'images/589010038_17871438234471631_1029934302243398933_n.jpg',
    download: 'images/589010038_17871438234471631_1029934302243398933_n.jpg',
    aspect: 'pc',
    author: 'Akshay',
    tags: ['anime', 'one piece', 'zoro', 'trending', 'pc wallpaper', '4k wallpaper', 'all'],
    isTrending: true
  },
  {
    type: 'image',
    preview: 'images/588410306_17871438351471631_7048562348864206257_n.jpg',
    download: 'images/588410306_17871438351471631_7048562348864206257_n.jpg',
    aspect: 'pc',
    author: 'Akshay',
    tags: ['anime', 'one piece', 'zoro', 'trending', 'pc wallpaper', '4k wallpaper', 'all'],
    isTrending: true
  },
  {
    type: 'image',
    preview: 'images/590480490_17871438321471631_4057706487198140782_n.jpg',
    download: 'images/590480490_17871438321471631_4057706487198140782_n.jpg',
    aspect: 'pc',
    author: 'Akshay',
    tags: ['anime', 'one piece', 'zoro', 'trending', 'pc wallpaper', '4k wallpaper', 'all'],
    isTrending: true
  },
  
  {
    type: 'image',
    preview: 'images/589785896_17871438459471631_2723303519840437175_n.jpg',
    download: 'images/589785896_17871438459471631_2723303519840437175_n.jpg',
    aspect: 'pc',
    author: 'Akshay',
    tags: ['anime', 'one piece', 'zoro', 'trending', 'pc wallpaper', '4k wallpaper', 'all'],
    isTrending: true
  },
  
  {
    type: 'image',
    preview: 'images/598673881_17871438468471631_105703393159937968_n.jpg',
    download: 'images/598673881_17871438468471631_105703393159937968_n.jpg',
    aspect: 'pc',
    author: 'Akshay',
    tags: ['anime', 'one piece', 'zoro', 'trending', 'pc wallpaper', '4k wallpaper', 'all'],
    isTrending: true
  },
  {
    type: 'image',
    preview: 'images/586804508_17903930760285337_1902815889450813405_n.jpg',
    download: 'images/586804508_17903930760285337_1902815889450813405_n.jpg',
    aspect: 'pc',
    author: 'Akshay',
    tags: ['cartoon', 'trending', 'pc wallpaper', '4k wallpaper', 'all'],
    isTrending: true
  },
  {
    type: 'image',
    preview: 'images/587268262_17903930787285337_6400905904047300015_n.jpg',
    download: 'images/587268262_17903930787285337_6400905904047300015_n.jpg',
    aspect: 'pc',
    author: 'Akshay',
    tags: ['cartoon', 'kungfu panda', 'trending', 'pc wallpaper', '4k wallpaper', 'all'],
    isTrending: true
  },
  {
    type: 'image',
    preview: 'images/584843937_17903930784285337_4204925817665626538_n.jpg',
    download: 'images/584843937_17903930784285337_4204925817665626538_n.jpg',
    aspect: 'pc',
    author: 'Akshay',
    tags: ['cartoon', 'trending', 'pc wallpaper', '4k wallpaper', 'all'],
    isTrending: true
  },
  {
    type: 'image',
    preview: 'images/587017726_17903930775285337_6195788346546355336_n.jpg',
    download: 'images/587017726_17903930775285337_6195788346546355336_n.jpg',
    aspect: 'pc',
    author: 'Akshay',
    tags: ['cartoon', 'trending', 'pc wallpaper', '4k wallpaper', 'all'],
    isTrending: true
  },{
    type: 'image',
    preview: 'images/673035383_17922152685320048_20340702592002570_n.jpg',
    download: 'images/673035383_17922152685320048_20340702592002570_n.jpg',
    aspect: 'pc',
    author: 'Akshay',
    tags: ['cartoon', 'trending', 'pc wallpaper', 'aesthetic', 'girl'],
    isTrending: true
  }
    
];
const manualVideos = [
  {
        type: 'video', // Essential for the displayItems logic
        preview: 'videos/threadsdownloader.com_b5a024.mp4', // Path to your local video
        download: 'videos/threadsdownloader.com_b5a024.mp4',
        author: 'Akshay',
        tags: ['trending', 'anime', 'live', 'trending','deamon slayer'],
        aspect: 'mobile', 
        isTrending: true
    },
  
    {
        type: 'video', // Essential for the displayItems logic
        preview: 'videos/sukuna-live.mp4', // Path to your local video
        download: 'videos/sukuna-live.mp4',
        author: 'Akshay',
        tags: ['sukuna', 'anime', 'live', 'trending','jujutsu kaisen'],
        aspect: 'mobile', 
        isTrending: true
    },
    {
        type: 'video',
        preview: 'videos/nature-loop.mp4',
        download: 'videos/nature-loop.mp4',
        author: 'Akshay',
        tags: ['nature', 'waterfall', 'live'],
        aspect: 'mobile',
        isTrending: true
    },
    {
        type: 'video',
        type: 'video',
        preview: 'videos/crimson-blind-faith.3840x2160.mp4',
        download: 'videos/crimson-blind-faith.3840x2160.mp4',
        author: 'Akshay',
        tags: ['anime', 'trending', 'aesthetic', 'all','crimson blind faith'],
        aspect: 'pc',
        isTrending: true
    },
    {
        type: 'video',
        type: 'video',
        preview: 'videos/threadsdownloader.com_d5e4e7 (4).mp4',
        download: 'videos/threadsdownloader.com_d5e4e7 (4).mp4',
        author: 'Akshay',
        tags: ['anime', 'trending', 'aesthetic', 'all',],
        aspect: 'pc',
        isTrending: true
    },
    {
        type: 'video',
        preview: 'videos/threadsdownloader.com_f863a1 (3).mp4',
        download: 'videos/threadsdownloader.com_f863a1 (3).mp4',
        author: 'Akshay',
        tags: ['anime', 'goku', 'trending', 'aesthetic', 'all'],
        aspect: 'pc',
        isTrending: true
    },
    {
        type: 'video',
        preview: 'videos/threadsdownloader.com_f863a1 (2).mp4',
        download: 'videos/threadsdownloader.com_f863a1 (2).mp4',
        author: 'Akshay',
        tags: ['trending', 'marvel', 'spiderman', 'all'],
        aspect: 'pc',
        isTrending: true
    },
    {
        type: 'video',
        preview: 'videos/threadsdownloader.com_f863a1 (1).mp4',
        download: 'videos/threadsdownloader.com_f863a1 (1).mp4',
        author: 'Akshay',
        tags: ['luffy', 'onepiece', 'anime', 'trending', 'all'],
        aspect: 'pc',
        isTrending: true
    },
    {
        type: 'video',
        preview: 'videos/threadsdownloader.com_f863a1.mp4',
        download: 'videos/threadsdownloader.com_f863a1.mp4',
        author: 'Akshay',
        tags: ['anime', 'goku', 'trending', 'aesthetic', 'all'],
        aspect: 'pc',
        isTrending: true
    },
    {
        type: 'video',
        preview: 'videos/threadsdownloader.com_d5e4e7 (3).mp4',
        download: 'videos/threadsdownloader.com_d5e4e7 (3).mp4',
        author: 'Akshay',
        tags: ['anime', 'mountain', 'cool', 'nature', 'aesthetic', 'trending', 'all'],
        aspect: 'pc',
        isTrending: true
    },
    { 
        type: 'video',
        preview: 'videos/threadsdownloader.com_d5e4e7 (2).mp4',
        download: 'videos/threadsdownloader.com_d5e4e7 (2).mp4',
        author: 'Akshay',
        tags: ['anime', 'girl', 'trending', 'all'],
        aspect: 'pc',
        isTrending: true
    },
    {
        type: 'video',
        preview: 'videos/threadsdownloader.com_d5e4e7 (1).mp4',
        download: 'videos/threadsdownloader.com_d5e4e7 (1).mp4',
        author: 'Akshay',
        tags: ['anime', 'girl', 'trending', 'all', 'night'],
        aspect: 'pc',
        isTrending: true
    },
    {
        type: 'video',
        preview: 'videos/threadsdownloader.com_d5e4e7.mp4',
        download: 'videos/threadsdownloader.com_d5e4e7.mp4',
        author: 'Akshay',
        tags: ['anime', 'trending', 'all', 'aesthetic', 'ninja', 'warrior'],
        aspect: 'pc',
        isTrending: true
    },
    {
        type: 'video',
        preview: 'videos/threadsdownloader.com_fabdab.mp4',
        download: 'videos/threadsdownloader.com_fabdab.mp4',
        author: 'Akshay',
        tags: ['anime', 'trending', 'all', 'demon slayer', 'ninja', 'evening'],
        aspect: 'pc',
        isTrending: true
    },
    {
    type: 'video', // 🌟 Set to video for .mp4 playback
    preview: 'videos/@galidatorotaku_threadsmate.com_1779361061.mp4',
    download: 'videos/@galidatorotaku_threadsmate.com_1779361061.mp4',
    aspect: 'pc',
    author: 'Akshay',
    tags: ['anime', 'trending', 'cool', 'live wallpaper', '4k video', 'all'],
    isTrending: true
  },
  {
    type: 'video', // 🌟 Set to video for .mp4 playback
    preview: 'videos/@official_anime_artist_threadsmate.com_1779361101.mp4',
    download: 'videos/@official_anime_artist_threadsmate.com_1779361101.mp4',
    aspect: 'pc',
    author: 'Akshay',
    tags: ['anime', 'trending', 'cool', 'live wallpaper', '4k video', 'all'],
    isTrending: true
  },
  {
    type: 'video', // 🌟 Set to video for .mp4 playback
    preview: 'videos/@4k_sahaj_threadsmate.com_1779361178.mp4',
    download: 'videos/@4k_sahaj_threadsmate.com_1779361178.mp4',
    aspect: 'pc',
    author: 'Akshay',
    tags: ['anime', 'trending', 'cool', 'live wallpaper', '4k video', 'all'],
    isTrending: true
  }
];
// REPLACE THESE WITH YOUR ACTUAL API KEYS

let currentMain = ''; 
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
const orientation = isMobile ? 'portrait' : 'landscape';
const pixabayOrientation = isMobile ? 'vertical' : 'horizontal';

// --- 2. THE MAIN ENGINE ---
async function fetchGallery(query = '') {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '<div class="loader">Curating Trending Walls...</div>';

    const lowerQuery = query.toLowerCase();
    const userDevice = window.innerWidth < 768 ? 'mobile' : 'pc';
    const mode = (typeof currentMain !== 'undefined') ? currentMain : 'home';

    try {
        let combinedResults = [];

        if (mode === 'live') {
            // --- LIVE VIDEO LOGIC ---
            const matchedManualVideos = (typeof manualVideos !== 'undefined') ? manualVideos.filter(vid => {
                const deviceMatch = vid.aspect === 'all' || vid.aspect === userDevice;
                if (!deviceMatch) return false;
                if (query === 'trending') return vid.isTrending;
                if (!query || query === 'popular' || query === '') return true;
                return vid.tags.some(tag => tag.toLowerCase().includes(lowerQuery));
            }) : [];

            // PRIORITY 1: Show your edits immediately
            displayItems(matchedManualVideos);

            try {
                const apiQuery = (query === 'trending') ? 'popular' : query;
                const [pVideos, pixVideos] = await Promise.all([
                    getPexelsVideos(apiQuery),
                    getPixabayVideos(apiQuery)
                ]);
                combinedResults = [...matchedManualVideos, ...pVideos, ...pixVideos];
            } catch (e) { console.warn("Video APIs slow/failed"); combinedResults = matchedManualVideos; }

        } else {
            // --- PHOTO LOGIC ---
            const matchedManualPhotos = (typeof manualPhotos !== 'undefined') ? manualPhotos.filter(photo => {
                const deviceMatch = photo.aspect === 'all' || photo.aspect === userDevice;
                if (!deviceMatch) return false;
                if (query === 'trending') return photo.isTrending;
                if (!query || query === 'popular' || query === '') return true;
                return photo.tags.some(tag => tag.toLowerCase().includes(lowerQuery));
            }) : [];

            // PRIORITY 1: Show your photos immediately
            displayItems(matchedManualPhotos);

            try {
                const apiQuery = (query === 'trending') ? 'nature aesthetic' : query;
                const [u, p, pix] = await Promise.all([
                    getUnsplashPhotos(apiQuery),
                    getPexelsPhotos(apiQuery),
                    getPixabayPhotos(apiQuery)
                ]);
                combinedResults = [...matchedManualPhotos, ...u, ...p, ...pix];
            } catch (e) { console.warn("Photo APIs slow/failed"); combinedResults = matchedManualPhotos; }
        }

        // Final update with everything combined
        if (combinedResults.length > 0) {
            displayItems(combinedResults);
        } else if (gallery.innerHTML.includes('loader')) {
            gallery.innerHTML = '<p class="no-results">No wallpapers found.</p>';
        }

    } catch (error) {
        console.error("Critical error:", error);
        gallery.innerHTML = '<p class="error">System error. Please check your manual data arrays.</p>';
    }
}
// --- 3. API FETCHERS (PHOTOS) ---

async function getUnsplashPhotos(query) {
    const res = await fetch(`https://api.unsplash.com/search/photos?query=${query}&orientation=${orientation}&per_page=15&client_id=${KEYS.unsplash}`);
    const data = await res.json();
    return (data.results || []).map(img => ({
        type: 'image',
        preview: img.urls.regular,
        download: img.urls.full,
        author: img.user.name
    }));
}

async function getPexelsPhotos(query) {
    const res = await fetch(`https://api.pexels.com/v1/search?query=${query}&orientation=${orientation}&per_page=15`, {
        headers: { Authorization: KEYS.pexels }
    });
    const data = await res.json();
    return (data.photos || []).map(img => ({
        type: 'image',
        preview: img.src.large,
        download: img.src.original,
        author: img.photographer
    }));
}

async function getPixabayPhotos(query) {
    const res = await fetch(`https://pixabay.com/api/?key=${KEYS.pixabay}&q=${encodeURIComponent(query)}&orientation=${pixabayOrientation}&per_page=15`);
    const data = await res.json();
    return (data.hits || []).map(img => ({
        type: 'image',
        preview: img.largeImageURL,
        download: img.largeImageURL,
        author: img.user
    }));
}

// --- 4. API FETCHERS (VIDEOS / LIVE) ---

async function getPexelsVideos(query) {
    // If the query is too specific (like Marvel), Pexels might have 0 videos. 
    // We fall back to "abstract" if the main "popular" search is triggered.
    const q = (query === 'popular' || query === 'all') ? 'abstract loop' : query;
    const res = await fetch(`https://api.pexels.com/videos/search?query=${q}&orientation=${orientation}&per_page=15`, {
        headers: { Authorization: KEYS.pexels }
    });
    const data = await res.json();
    return (data.videos || []).map(vid => ({
        type: 'video',
        preview: vid.video_files[0].link,
        download: vid.video_files[0].link,
        author: vid.user.name
    }));
}

async function getPixabayVideos(query) {
    const q = (query === 'popular' || query === 'all') ? 'nature' : query;
    const res = await fetch(`https://pixabay.com/api/videos/?key=${KEYS.pixabay}&q=${encodeURIComponent(q)}&orientation=${pixabayOrientation}&per_page=15`);
    const data = await res.json();
    return (data.hits || []).map(vid => ({
        type: 'video',
        preview: vid.videos.medium.url,
        download: vid.videos.large.url,
        author: vid.user
    }));
}

// --- 5. DISPLAY & INTERFACE LOGIC ---

function displayItems(items, query = '') {
    const gallery = document.getElementById('gallery');
    if (!items || items.length === 0) return;

    gallery.innerHTML = ''; 

    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'wall-card';

        // Combine all tags into a clean comma-separated string for Google bots to read
        const searchKeywords = item.tags ? item.tags.join(', ') : 'wallpaper';
        // Create a SEO friendly title string
        const seoTitle = `${item.tags && item.tags[0] ? item.tags[0] : 'aesthetic'} wallpaper - Vivid Walls`;

        // Apply tags as data attributes to the card element container for crawling accessibility
        card.setAttribute('data-keywords', searchKeywords);

        // 1. Setup Priority/Trending badge
        const trendingBadge = (item.author === 'ashik' && query === 'trending')
            ? `<div class="trending-badge">★ Priority</div>`
            : '';

        // 2. Build media content tags with explicit descriptive keywords embedded 
        const isVideo = item.type === 'video' || (item.download && item.download.endsWith('.mp4'));
        const content = isVideo
            ? `<video src="${item.preview}" title="${seoTitle} (${searchKeywords})" aria-label="${seoTitle}" loop muted onmouseover="this.play()" onmouseout="this.pause()"></video>`
            : `<img src="${item.preview}" alt="${seoTitle} - ${searchKeywords}" title="${seoTitle}" loading="lazy">`; 

        const extension = isVideo ? '.mp4' : '.jpg';
        
        // Use the first tag keyword for file naming
        let tagKeyword = 'wallpaper';
        if (item.tags && item.tags.length > 0) {
            tagKeyword = item.tags[0].trim().toLowerCase().replace(/\s+/g, '_');
        }
        const fileName = `${tagKeyword}${extension}`;

        // 3. Render the card element layout structure
        card.innerHTML = `
            ${trendingBadge}
            ${content}
            <div class="card-info">
                <span>By ${item.author || 'Akshay'}</span>
                <button 
                    onclick="startDirectDownload('${item.download || item.preview}', '${fileName}')" 
                    class="download-btn"
                    aria-label="Download ${seoTitle}">
                    Download
                </button>
            </div>
        `;
        
        gallery.appendChild(card);
    });
}
// Navigation Logic
function setMainCategory(type) {
    currentMain = type;
    document.querySelectorAll('.main-btn').forEach(btn => btn.classList.remove('active'));
    // We use event.currentTarget to be safer
    if (event) event.currentTarget.classList.add('active');
    fetchGallery('popular');
}

function filter(query) {
    document.querySelectorAll('.sub-btn').forEach(btn => btn.classList.remove('active'));
    if (event) event.currentTarget.classList.add('active');
    fetchGallery(query);
}

// --- 6. SEARCH BAR LOGIC ---
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

function performSearch() {
    const query = searchInput.value.trim();
    if (query !== "") {
        fetchGallery(query);
    }
}

searchBtn.addEventListener('click', performSearch);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') performSearch();
});

// Initial Load
window.onload = () => {
    fetchGallery(isMobile ? 'mobile wallpaper' : 'desktop wallpaper');
};
// Ensure 'item' is NOT written anywhere inside this global function block!
function startDirectDownload(url, filename) {
    if (!url || url === 'undefined') {
        alert("Error: This wallpaper has no valid download link.");
        return;
    }

    // 🌟 CHECK IF IT'S A LOCAL IMAGE (Starts with 'images/')
   // 🌟 CHECK IF IT'S A LOCAL IMAGE OR VIDEO FOLDER
    if (url.startsWith("images/") || url.startsWith("videos/")) {
        const link = document.createElement('a');
        link.href = url;
        
        // 1. Clean up the messy filename string if it's passed in
        let cleanName = filename ? filename.replace(/['"()]/g, '').trim() : 'wallpaper';
        
        // 2. Force it to start with your brand name!
        link.download = `Vivid_Walls_${cleanName}`; 
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        return; // Bypasses the Render server completely!
    }
    // 🌐 OTHERWISE, USE YOUR RENDER PROXY SERVER FOR API WALLPAPERS
    // 🌐 2. OTHERWISE, USE YOUR RENDER PROXY SERVER FOR EXTERNAL API WALLPAPERS
    const encodedUrl = encodeURIComponent(url);
    
    // Clean up the filename variable on the frontend first
    let cleanName = filename ? filename.replace(/['"()]/g, '').trim().replace(/\s+/g, '_') : 'wallpaper';
    
    // Add the name parameter to the end of the server link!
    const serverUrl = `https://vividwalls-backend.onrender.com/download?url=${encodedUrl}&name=${encodeURIComponent(cleanName)}`;
    window.location.href = serverUrl;
}
// Inside your displayItems loop, add this check:

   
   

function getDeviceType() {
    // 768px is the standard cutoff for tablets/phones
    return window.innerWidth < 768 ? 'mobile' : 'pc';
}
