import React from 'react';

const dawoodImg = '/assets/tekken8/Dawood.png';
const khanImg = '/assets/tekken8/Khan.png';
const alisaImg = '/assets/tekken8/Alisa.png';
const kumaImg = '/assets/tekken8/Kuma.png';
const fengImg = '/assets/tekken8/FENG.png';
const esharibImg = '/assets/tekken8/Esharib.png';
const jonImg = '/assets/tekken8/JON.png';
const kingImg = '/assets/tekken8/King.png';
const kazuyaImg = '/assets/tekken8/Kazuya.png';
const farzeenImg = '/assets/tekken8/FARZEEN.png';
const shaheenImg = '/assets/tekken8/Shaheen.png';
const usamaImg = '/assets/tekken8/USAMA.png';

export const TEAM = [
  {
    id: 'dawood',
    name: 'Dawood Sikandar',
    nickname: 'Dawood Sikandar',
    role: 'Professional Tekken Player',
    image: dawoodImg,
    achievements: {
      wins: [
        { year: '2025', name: 'Pak vs Saudia', rank: '1st' },
        { year: '2025', name: 'Iqra University Tournament', rank: '1st' },
        { year: '2024', name: 'Mooring 2024', rank: '1st' },
        { year: '2023', name: 'Fast daira23', rank: '1st' },
        { year: '2022', name: 'Thaiger Uppercut 2022', rank: '1st' },
        { year: '2021', name: 'UGP SIALKOT', rank: '1st' },
        { year: '2018', name: '7CG CUP', rank: '1st' },
        { year: '2017', name: 'PGA Cup S2', rank: '1st' },
      ],
      runnerUps: [
        { year: '2025', name: 'The Baaz Gauntlet 2 Karachi Qualifier', rank: '2nd' },
        { year: '2024', name: 'Thaiger Uppercut 2024 - T8 3v3', rank: '2nd' },
        { year: '2024', name: "Khan's Power Crusher #1", rank: '2nd' },
        { year: '2023', name: 'Daska Championship Tekken 7', rank: '2nd' },
        { year: '2021', name: 'PPG - Battle of Champions S2', rank: '2nd' },
      ],
      notable: [
        { year: '2025', name: 'Esports World Cup 2025 LCQ', rank: '17th' },
        { year: '2025', name: 'EVO 2025', rank: '17th' },
        { year: '2024', name: 'Gamers Galaxy Pakistan', rank: '9th' },
        { year: '2022', name: 'WeRTitan Cup', rank: '3rd' },
        { year: '2016', name: 'D Generation X', rank: '3rd' },
      ],
    },
    stats: {
      yearsActive: '10+',
      majorTitles: '9',
    },
    bio: {
      gamingTag: 'Dawood Sikandar',
      startedPlaying: '2012',
      rank: 'Top 5 in Pakistan',
      location: 'Faisalabad, Pakistan',
      born: '24-06-1995',
      influence: 'Chanel',
    },
    socials: {
      youtube: { link: 'https://www.youtube.com/@dawoodsikandar-tk' },
      twitter: { link: 'https://x.com/DawoodSikandar' },
      instagram: { link: 'https://www.instagram.com/dawood.sikandar/' },
      twitch: { link: 'https://www.twitch.tv/dawood_sikandar77' },
    },
    characters: [
      { name: 'Alisa', img: alisaImg },
      { name: 'Kuma', img: kumaImg },
    ],
    heroTitle: {
      top: 'Pakistani Esports Icon',
      namePart1: 'Dawood',
      namePart2: 'Sikandar',
    },
    badges: ['THIAGER UPPERCUT 2022 CHAMPION', 'MOORING 2024 CHAMPION'],
    highlight: {
      title: 'Breakthrough Player of the Year 2022',
      description: <>One of the historic Tekken 7v7 exhibition match in Riyadh, Team Pakistan secured a dominant <strong className="text-white">15-8 victory</strong> over Saudi Arabia. My standout performance in this international clash led to me being honored with this prestigious award, cementing my rise on the global stage.</>,
    },
    sponsorships: [
      { year: '2017', name: 'PGA', fullName: 'Pakistan Gaming Arena', description: 'PGA is an independent organization for the COMMUNITY and support players all around Pakstan.' },
      { year: '2018', name: '7CG', fullName: '7 Cities Gaming League', description: '7 Cities is a gaming league and pro team from the mid Atlantic Region' },
      { year: '2019', name: 'V SLASH', fullName: 'vSlash Esports', description: 'vSlash Esports is an esports organization in the UAE that focuses on games such as CS:GO, DragonBall FighterZ, Street Fighter V, Super Smash Bros. Ultimate, and Tekken 7.' },
      { year: '2019-2022', name: 'ASHES GAMING', fullName: 'Ashes Gaming', description: 'Ashes Gaming is a Pakistani esports organization founded by Arslan Ash, with the goal of promoting and unearthing new talents in Pakistan.' },
      { year: '2023-2024', name: 'M5HOST', fullName: 'M5Host Digital Solutions', description: 'M5Host is a digital services (like web development, digital marketing etc.) provider company across the globe.' },
      { year: 'May 2024', name: 'CLOUD9', fullName: 'Cloud9', description: 'Cloud9 (C9), is an American professional esports company based in Santa Monica, California.' },
      { year: 'May 2025', name: 'NOVA', fullName: 'Nova Esports', description: 'Nova Esports is a leading professional esports organization based in Hong Kong that competes in multiple mobile and PC game titles' },
    ],
  },
  {
    id: 'khan',
    name: 'Imran Khan',
    nickname: 'Khan',
    role: 'Professional Tekken Player',
    image: khanImg,
    achievements: {
      wins: [
        { year: '2023', name: 'Gamers 8 Riyadh', rank: '1st' },
        { year: 'N/A', name: 'Penang Esports', rank: '1st' },
      ],
      runnerUps: [
        { year: '2024', name: 'EVO USA', rank: '2nd' },
        { year: 'N/A', name: 'Kurokuro Cup', rank: '2nd' },
      ],
      notable: [
        { year: '2019', name: 'FV Major Cup 2019', rank: '4th' },
        { year: 'N/A', name: 'PPG Dojo', rank: '3rd' },
      ],
    },
    stats: {
      yearsActive: '10+',
      majorTitles: '2+',
    },
    bio: {
      gamingTag: 'Imran Khan',
      startedPlaying: '2014',
      rank: 'Top 10 in Pakistan',
      location: 'Pakistan',
      born: 'N/A',
      influence: 'N/A',
    },
    socials: {
      youtube: { link: 'https://www.youtube.com/@RealKhanImran' },
      twitter: { link: 'https://x.com/Khanimran675' },
      instagram: { link: 'https://www.instagram.com/fate_khanimran/' },
      twitch: { link: 'https://www.twitch.tv/fate_khan' },
    },
    characters: [{ name: 'Feng', img: fengImg }],
    heroTitle: {
      top: 'Pakistani Esports Icon',
      namePart1: 'Imran',
      namePart2: 'Khan',
    },
    badges: ['GAMERS 8 RIYADH WINNER', 'EVO USA FINALIST'],
    highlight: {
      title: 'Global Contender',
      description: <>As a dedicated and passionate Tekken player, I bring over a decade of professional experience and a proven track record of success. I am committed to continually improving my skills and achieving excellence in the esports scene. With my USA visa in hand, I am well-positioned to compete in key international events and take my game to the next level.</>,
    },
    sponsorships: [],
  },
  {
    id: 'esharib',
    name: 'Esharib',
    nickname: 'Esharib',
    role: 'Professional Tekken Player',
    image: esharibImg,
    achievements: {
      wins: [
        { year: '2025', name: 'NASCON 2025', rank: '1st' },
        { year: '2025', name: 'Baaz Gauntlet 2 Qualifier', rank: '1st' },
        { year: '2025', name: 'E Net Ronix UGX 2025', rank: '1st' },
        { year: '2023', name: 'TS Showdown S2', rank: '1st' },
      ],
      runnerUps: [
        { year: '2023', name: 'KS S2', rank: '2nd' },
        { year: '2022', name: 'NASCON 2022', rank: '2nd' },
      ],
      notable: [
        { year: '2025', name: 'Level Up Dojo', rank: '3rd' },
        { year: '2025', name: 'Heatwave Showdown', rank: '4th' },
        { year: '2024', name: 'Havoc 3', rank: '5th' },
        { year: '2023', name: 'Elite Tekken Championship', rank: '3rd' },
        { year: '2022', name: 'Best of the Best Dojo', rank: '3rd' },
      ],
    },
    stats: {
      yearsActive: '4+',
      majorTitles: '4',
    },
    bio: {
      gamingTag: 'Esharib',
      startedPlaying: 'N/A',
      rank: 'Top Tier',
      location: 'Lahore',
      born: 'N/A',
      influence: 'Alisa',
    },
    socials: {
      twitter: { link: 'https://x.com/tk_esharib' },
      youtube: { link: 'https://www.youtube.com/@tkesharib' },
      instagram: { link: 'https://www.instagram.com/tk_esharib/' },
      twitch: { link: 'https://www.twitch.tv/Esharib_TK' },
    },
    characters: [{ name: 'Alisa', img: alisaImg }],
    heroTitle: {
      top: 'Free Agent',
      namePart1: 'Esharib',
      namePart2: '',
    },
    badges: ['HOLDER OF 5 YEAR US VISA', 'NASCON CHAMPION'],
    highlight: {
      title: 'International Prospect',
      description: <>A formidable Alisa main and emerging talent from Karachi. As a free agent holding a <strong className="text-white">5-Year US Visa</strong>, I am ready to compete on the global stage. My consistent top placements in major national tournaments prove my capability to challenge the best.</>,
    },
    sponsorships: [],
  },
  {
    id: 'jon',
    name: 'The Jon',
    nickname: 'The Jon',
    role: 'Professional Tekken Player',
    image: jonImg,
    achievements: {
      wins: [
        { year: '2025', name: 'Paradise Game Battle', rank: '1st' },
        { year: '2024', name: 'Thaiger Uppercut 2024', rank: '1st' },
        { year: '2024', name: 'Ignite Tekken Cup', rank: '1st' },
        { year: '2018', name: 'OUG Tournament 2018', rank: '1st' },
      ],
      runnerUps: [
        { year: '2025', name: 'Takedown 2025', rank: '3rd' },
        { year: '2019', name: 'Takra Cup', rank: '2nd' },
      ],
      notable: [
        { year: '2025', name: 'Thaiger Uppercut 2025', rank: 'Top 8' },
        { year: '2024', name: 'Esports World Cup 2024', rank: '5th' },
        { year: '2019', name: 'TWT Finals LCQ', rank: '4th' },
        { year: '2024', name: 'Tekken World Tour Finals', rank: 'Qualified' },
        { year: '2023', name: 'Gamers8', rank: 'Top 6' },
      ],
    },
    stats: {
      yearsActive: '7+',
      majorTitles: '3',
    },
    bio: {
      gamingTag: 'The Jon',
      startedPlaying: '2016',
      rank: 'Pro',
      location: 'Pakistan',
      born: 'N/A',
      influence: 'King',
    },
    socials: {
      twitter: { link: 'https://x.com/THEJON07' },
      youtube: { link: 'https://www.youtube.com/@thejonno1' },
      instagram: { link: 'https://www.instagram.com/thejon07/' },
      twitch: { link: 'https://twitch.tv' },
    },
    characters: [{ name: 'King', img: kingImg }],
    heroTitle: {
      top: 'Al Qadsiah',
      namePart1: 'The',
      namePart2: 'Jon',
    },
    badges: ['OUG CHAMPION', 'KING SPECIALIST'],
    highlight: {
      title: 'The King Master',
      description: <>Adeel "THE JON" Sheikh is a world-renowned Tekken professional known for his mastery of <strong>King</strong>. Representing Al Qadsiah, he famously defeated the legendary Knee at OUG 2018, putting him on the global map. His unpredictable playstyle and grappling prowess make him a crowd favorite and a feared competitor.</>,
    },
    sponsorships: [
      { year: '2024', name: 'AL QADSIAH', fullName: 'Al Qadsiah', description: 'Representing Al Qadsiah, a prominent Saudi sports club entered into esports.' },
      { year: '2021-2023', name: 'ASHES', fullName: 'Ashes Gaming', description: "Former member of Arslan Ash's team, Ashes Gaming." },
    ],
  },
  {
    id: 'farzeen',
    name: 'Muhammad Farzeen',
    nickname: 'Farzeen',
    role: 'Professional Tekken Player',
    image: farzeenImg,
    achievements: {
      wins: [
        { year: '2025', name: 'Cape Town Showdown 2025', rank: '1st' },
        { year: '2025', name: 'South East Asia Major 2025', rank: '1st' },
        { year: '2024', name: 'Battle Arena Melbourne 14', rank: '1st' },
      ],
      runnerUps: [{ year: '2025', name: 'Takedown 2025', rank: '2nd' }],
      notable: [
        { year: '2025', name: 'Tekken World Tour Finals 2025', rank: '4th' },
        { year: '2024', name: 'Evolution Championship Series 2024', rank: '13th-16th' },
        { year: '2023', name: 'Evolution Championship Series 2023', rank: '13th-16th' },
      ],
    },
    stats: {
      yearsActive: '5+',
      majorTitles: '3',
    },
    bio: {
      gamingTag: 'Farzeen',
      startedPlaying: '2020',
      rank: 'Top 5 in Pakistan',
      location: 'Pakistan',
      born: '06-09-2002',
      influence: 'Shaheen',
    },
    socials: {
      youtube: { link: 'https://www.youtube.com/@FalcFarzeen' },
      twitter: { link: 'https://x.com/Farzeen_tk' },
      instagram: { link: 'https://www.instagram.com/farzeen_tk/' },
    },
    characters: [{ name: 'Shaheen', img: shaheenImg }],
    heroTitle: {
      top: 'Team Falcons',
      namePart1: 'Farzeen',
      namePart2: '',
    },
    badges: ['TWT FINALS 2025 4TH PLACE', 'SHAHEEN SPECIALIST'],
    highlight: {
      title: 'The Shaheen Specialist',
      description: <>Muhammad "Farzeen" is a rising star in the global Tekken scene, representing <strong>Team Falcons</strong>. Known for his exceptional <strong>Shaheen</strong>, he made history by placing 4th at the Tekken World Tour Finals 2025. His clinical playstyle and rapid rise have made him one of the most respected players from Pakistan.</>,
    },
    sponsorships: [
      { year: '2024', name: 'TEAM FALCONS', fullName: 'Team Falcons', description: 'Signed with Team Falcons, one of the premier esports organizations in the world, representing them in major international tournaments.' },
    ],
  },
  {
    id: 'usama',
    name: 'Usama Abbasi',
    nickname: 'Usama',
    role: 'Professional Tekken Player',
    image: usamaImg,
    achievements: {
      wins: [
        { year: '2025', name: 'Takedown 2025', rank: '1st' },
        { year: 'N/A', name: 'Guard Breaker', rank: '1st' },
      ],
      runnerUps: [{ year: '2025', name: 'Final Round 2025', rank: '2nd' }],
      notable: [
        { year: '2025', name: 'Tekken World Tour Finals 2025', rank: '5th-6th' },
        { year: '2025', name: 'Only The Best TWT Challenger', rank: '3rd' },
        { year: 'N/A', name: 'Frame Trap', rank: '3rd' },
      ],
    },
    stats: {
      yearsActive: '5+',
      majorTitles: '2+',
    },
    bio: {
      gamingTag: 'Usama',
      startedPlaying: 'N/A',
      rank: 'Top Tier',
      location: 'Pakistan',
      born: 'N/A',
      influence: 'Jin / Shaheen',
    },
    socials: {
      youtube: { link: 'https://www.youtube.com/@usamatk708' },
      twitter: { link: 'https://x.com/usamatekken708' },
      instagram: { link: 'https://www.instagram.com/usamatekken708/' },
    },
    characters: [{ name: 'Kazuya', img: kazuyaImg }],
    heroTitle: {
      top: 'Team Falcons',
      namePart1: 'Usama',
      namePart2: 'Abbasi',
    },
    badges: ['TWT FINALS 2025 TOP 6', 'TAKEDOWN CHAMPION'],
    highlight: {
      title: 'Emerging Top Tier Talent',
      description: <>Usama Abbasi is a massive force in the global Tekken 8 scene. Recently signed to <strong>Team Falcons</strong>, his 5th-6th place finish at the prestigious Tekken World Tour Finals 2025 and an authoritative win at Takedown 2025 cement his status as one of Pakistan's elite players.</>,
    },
    sponsorships: [
      { year: '2025', name: 'TEAM FALCONS', fullName: 'Team Falcons', description: 'Representing Team Falcons, a premier global esports organization.' },
    ],
  },
];

export const getPlayerById = (playerId) => TEAM.find((player) => player.id === playerId);
