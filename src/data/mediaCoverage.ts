export type MediaType = 'article' | 'video' | 'reference';

export interface FeaturedMedia {
  publisher: string;
  logo: string;
  date: string;
  title: string;
  excerpt: string;
  url: string;
  type: MediaType;
}

export interface IndependentEvidence {
  id: number;
  publisher: string;
  url: string;
  type: MediaType;
}

export const mediaData = {
  hero: {
    eyebrow: 'GALLERY & MEDIA',
    heading: 'Stories in photographs. Evidence in the public record.',
    supporting: 'Explore moments from the journey and the media coverage that has documented Adhik Kadam and Borderless World Foundation\'s work.'
  },
  galleryCTA: {
    eyebrow: 'GALLERY',
    heading: 'Explore the visual archive.',
    buttonText: 'VIEW FULL GALLERY →',
    url: 'https://www.borderlessworldfoundation.org/gallery'
  },
  featuredMedia: {
    eyebrow: 'IN THE NEWS',
    heading: 'Media coverage and press mentions',
    supporting: 'A selection of independent coverage and public references documenting the journey, humanitarian work, healthcare initiatives and social impact.',
    articles: [
      {
        publisher: 'Global Kashmir',
        logo: 'https://www.borderlessworldfoundation.org/assets/images/x.jpg',
        date: 'February 4, 2025',
        title: 'Opinion | The Sacred Duty of NGOs—Guarding Against Ego',
        excerpt: 'Non-Governmental Organizations (NGOs) are built on the foundation of selfless service, compassion, and the pursuit of social justice. They exist to uplift communities.',
        url: 'https://globalkashmir.net/opinion-the-sacred-duty-of-ngos-guarding-against-ego/',
        type: 'article'
      },
      {
        publisher: 'Global Kashmir',
        logo: 'https://www.borderlessworldfoundation.org/assets/images/x.jpg',
        date: 'January 24, 2025',
        title: 'Opinion | Adhik Kadam: The Unsung Hero Behind Kashmiri Orphan Girls\' Empowerment Wins India\'s Best Social Change Award 2024',
        excerpt: 'Adhik Kadam’s journey from Pune, Maharashtra, to the conflict-ridden Kashmir Valley in 1997 is nothing short of extraordinary. At a time when militancy was at its peak...',
        url: 'https://globalkashmir.net/opinion-adhik-kadam-the-unsung-hero-behind-kashmiri-orphan-girls-empowerment-wins-indias-best-social-change-award-2024/',
        type: 'article'
      },
      {
        publisher: 'Global Kashmir',
        logo: 'https://www.borderlessworldfoundation.org/assets/images/x.jpg',
        date: 'February 27, 2025',
        title: 'Opinion | The Silent Power of Thought: A Sufi Perspective on Inner Transformation',
        excerpt: 'Adhik Kadam is the founder of the Borderless World Foundation, working for the rehabilitation and empowerment of orphaned girls and marginalized communities.',
        url: 'https://globalkashmir.net/opinion-the-silent-power-of-thought-a-sufi-perspective-on-inner-transformation/',
        type: 'article'
      },
      {
        publisher: 'Orato World',
        logo: 'https://www.borderlessworldfoundation.org/assets/images/x.jpg',
        date: 'August 20, 2023',
        title: 'Terrorists held me hostage and death littered the streets, but I keep fighting for the women and children who suffer',
        excerpt: 'While traveling from Kupwara to Srinagar, a sudden explosion rocked the highway. The sound deafened my ears as I tried to make sense of what was happening.',
        url: 'https://orato.world/2023/08/20/terrorists-held-me-hostage-and-death-littered-the-streets-but-i-keep-fighting-for-the-women-and-children-who-suffer/',
        type: 'article'
      },
      {
        publisher: 'Awaz The Voice',
        logo: 'https://www.borderlessworldfoundation.org/assets/images/azad.svg',
        date: 'August 20, 2023',
        title: "Why did a Kashmiri terrorist trust Adhik Kadam with his daughter's upbringing?",
        excerpt: 'In 2006, a terrorist and his two accomplices barged into the house where orphaned girls were lodged by the NGO Borderless World Foundation in Kupwara, north Kashmir. The employees were shivering in fear as they could recognize the leader of the intruders who was a top-ranked terrorist.',
        url: 'https://www.awazthevoice.in/youth-news/why-did-a-kashmiri-terrorist-trust-adhik-kadam-with-his-daughter-s-upbringing-23392.html',
        type: 'article'
      },
      {
        publisher: 'YourStory',
        logo: 'https://www.borderlessworldfoundation.org/assets/images/yourstory.svg',
        date: 'October 2017',
        title: 'Meet the 2 Kashmiri women who are combating menstrual taboos',
        excerpt: 'Growing up in a society that stigmatises menstruation, two social entrepreneurs in a border village of Jammu and Kashmir are battling the taboos attached to what is a routine biological process. They are not only creating awareness but also manufacturing and selling sanitary napkins to help poorer women who cannot afford branded products.',
        url: 'https://yourstory.com/2017/10/mir-musharraf-mubeena-khan-kashmir-menstruation',
        type: 'article'
      },
      {
        publisher: 'News18',
        logo: 'https://www.borderlessworldfoundation.org/assets/images/new18.png',
        date: 'April 12, 2024',
        title: 'Women are messengers of peace: Philanthropist Adhik Kadam wins Social Change Indian of the Year',
        excerpt: 'Our founder Adhik Kadam recognized for outstanding contribution to social change and peacebuilding in conflict zones.',
        url: 'https://www.news18.com/india/women-are-messengers-of-peace-philanthropist-adhik-kadam-wins-social-change-indian-of-the-year-9192778.html',
        type: 'article'
      },
      {
        publisher: 'Loksatta',
        logo: 'https://www.borderlessworldfoundation.org/assets/images/loksatta.png',
        date: '2018',
        title: "Sarva Karyeshu Sarvada: Borderless World Foundation's comprehensive work",
        excerpt: 'Featured coverage of our holistic approach to community development in Jammu & Kashmir.',
        url: 'https://www.loksatta.com/vishesh/sarva-karyeshu-sarvada-2018-borderless-world-foundation-1757691/',
        type: 'article'
      },
      {
        publisher: 'Jammu Links',
        logo: 'https://www.borderlessworldfoundation.org/assets/images/x.jpg',
        date: 'May 15, 2024',
        title: 'Medical camp organized by J&K Army & Borderless World Foundation in Akhnoor',
        excerpt: 'Collaborative healthcare initiative brings medical services to remote border communities.',
        url: 'https://x.com/JAMMULINKS/status/1790796314059452776',
        type: 'article'
      }
    ] as FeaturedMedia[]
  },
  featuredVideos: {
    eyebrow: 'FEATURED VIDEOS',
    heading: 'Watch the journey',
    supporting: 'Documentaries, interviews and public addresses highlighting the work of Borderless World Foundation.',
    videos: [
      {
        id: 'tZSHkcDA3os',
        title: 'Relevance Of Gandhi today a conversation with Adhik Kadam',
        url: 'https://m.youtube.com/watch?v=tZSHkcDA3os'
      },
      {
        id: 'vQi849Jmp8k',
        title: 'Basera e Tabassum Destination Happiness adhik kadam',
        url: 'https://m.youtube.com/watch?v=vQi849Jmp8k'
      },
      {
        id: 'hWnzmgJGrE0',
        title: 'adhik kadam Talking at Rotary, USA',
        url: 'https://youtu.be/hWnzmgJGrE0'
      }
    ]
  },
  evidence: {
    eyebrow: 'INDEPENDENT EVIDENCE',
    heading: 'More coverage and public references',
    items: [
      { id: 1, publisher: 'The Hindu', url: 'https://www.thehindu.com/news/national/rajnath-singh-flags-off-armys-fleet-of-five-trauma-care-ambulances/article36011723.ece', type: 'article' },
      { id: 2, publisher: 'Deccan Herald', url: 'https://www.deccanherald.com/india/rajnath-singh-flags-off-5-ambulances-for-soldiers-deployed-in-jk-1021850.html', type: 'article' },
      { id: 3, publisher: 'Wikipedia — Adhik Kadam', url: 'https://en.wikipedia.org/wiki/Adhik_Kadam', type: 'reference' },
      { id: 4, publisher: 'Wikipedia — Borderless World Foundation', url: 'https://en.wikipedia.org/wiki/Borderless_World_Foundation', type: 'reference' },
      { id: 5, publisher: 'YouTube', url: 'https://www.youtube.com/watch?v=UqHhARb73Zk', type: 'video' },
      { id: 6, publisher: 'YouTube', url: 'https://www.youtube.com/watch?v=4FIjcGtkYCM', type: 'video' },
      { id: 7, publisher: 'YouTube', url: 'https://www.youtube.com/watch?v=RWiJiNgUyGQ', type: 'video' },
      { id: 8, publisher: 'The Better India', url: 'https://thebetterindia.com/75376/borderless-world-foundation-adhik-kadam-kashmir/', type: 'article' },
      { id: 9, publisher: 'Dailyhunt / The Logical Indian', url: 'https://m.dailyhunt.in/news/india/english/the+logical+indian-epaper-tlogin/one+trip+at+19+changed+his+life+how+adhik+kadam+created+safe+homes+for+200+orphaned+kashmiri+girls-the+logical+indian-newsid-n705940717', type: 'article' },
      { id: 10, publisher: 'Awaz The Voice', url: 'https://www.awazthevoice.in/youth-news/why-did-a-kashmiri-terrorist-trust-adhik-kadam-with-his-daughter-s-upbringing-23392.html', type: 'article' },
      { id: 11, publisher: 'Swachh India / NDTV', url: 'https://swachhindia.ndtv.com/dalpari-an-ambulance-boat-in-dal-lake-for-efficient-and-timely-medical-care-for-locals-84963/', type: 'article' },
      { id: 12, publisher: 'Global Kashmir', url: 'https://globalkashmir.net/opinion-adhik-kadam-the-unsung-hero-behind-kashmiri-orphan-girls-empowerment-wins-indias-best-social-change-award-2024/', type: 'article' },
      { id: 13, publisher: 'News18', url: 'https://www.news18.com/india/women-are-messengers-of-peace-philanthropist-adhik-kadam-wins-social-change-indian-of-the-year-9192778.html', type: 'article' },
      { id: 14, publisher: 'India Today', url: 'https://www.indiatoday.in/india/jammu-and-kashmir/story/ngos-launch-first-critical-care-ambulance-system-in-jammu-and-kashmir-264096-2015-09-21', type: 'article' },
      { id: 15, publisher: 'Hindustan Times', url: 'https://www.hindustantimes.com/india-news/mumbai-s-padma-shri-winning-eye-doctor-treats-pellet-gun-victims-in-kashmir/story-LehL0qlxlrUjyctZPijBQN.html', type: 'article' },
      { id: 16, publisher: 'Times of India', url: 'https://timesofindia.indiatimes.com/jk-govt-pushes-for-gi-tag-for-doda-gucchi-mushroom/articleshow/80256164.cms', type: 'article' },
      { id: 17, publisher: 'YourStory', url: 'https://yourstory.com/2017/10/mir-musharraf-mubeena-khan-kashmir-menstruation', type: 'article' },
      { id: 18, publisher: 'Brut', url: 'https://www.brut.media/in/articles/adhik-kadam-the-man-who-brought-a-hospital-to-dal-lake-force-for-good-hero', type: 'article' },
      { id: 19, publisher: 'YouTube', url: 'https://www.youtube.com/watch?v=RWiJiNgUyGQ&t=2s', type: 'video' },
      { id: 20, publisher: 'YouTube', url: 'https://youtu.be/94rjx_o5oow?si=gbRZHuk5Dkx9LR-I', type: 'video' },
      { id: 21, publisher: 'Vinod Narayan', url: 'https://vinodnarayan.com/2015/10/25/indriveview-with-adhik-kadam-from-borderless-world-foundation/', type: 'article' }
    ] as IndependentEvidence[]
  }
};
