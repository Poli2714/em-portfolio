import { TProject } from '@/types/project';

export const projects: Array<TProject> = [
  {
    date: 'June 2024',
    features: [
      {
        name: 'Search Functionality',
        description:
          'Search for images using the Unsplash API with real-time results.',
      },
      {
        name: 'Pagination',
        description:
          'Efficient navigation through search results with pagination.',
      },
      {
        name: 'Detailed Photo Pages',
        description:
          'View detailed information about each photo, including the author, date added, and related tags.',
      },
      {
        name: 'Tag-Based Search',
        description:
          'Clickable tags on photo pages that lead to search results for related images.',
      },
      {
        name: 'Add to Collection',
        description:
          'Add/remove photos to/from existing collections or create new ones through a user-friendly popup, which includes search functionality for existing collections and displays the latest collections.',
      },
      {
        name: 'User Collections Page',
        description: 'View user collections in a dedicated collections page.',
      },
      {
        name: 'Collection Management',
        description: 'Edit collection names and delete collections.',
      },
      {
        name: 'Authentication',
        description: 'Secure sign-in and sign-up functionality using Kinde.',
      },
      {
        name: 'Light/Dark Mode',
        description:
          'Toggle between light and dark modes for a customized user experience.',
      },
      {
        name: 'Responsive Design',
        description:
          'Ensures optimal performance and usability across various devices and screen sizes.',
      },
      {
        name: 'Database Integration',
        description:
          'Uses Supabase for data storage and Drizzle ORM for database communication.',
      },
    ],
    github_repo: 'https://github.com/Poli2714/image-box',
    goals: [
      'ImageBox was developed as a portfolio project to demonstrate my frontend development skills and my ability to create dynamic, interactive web applications.',
      'The primary goal was to build a comprehensive image search and management platform that showcases various advanced features, such as real-time photo searches using the Unsplash API, user authentication and collection management.',
      'By incorporating functionalities like light/dark mode and responsive design, I aimed to create an engaging and accessible user experience.',
      'This project illustrates my proficiency in modern web technologies, including HTML, CSS, JavaScript, TypeScript, React, Next.js and underscores my commitment to building high-quality, user-centric web applications.',
    ],
    id: 'image-box',
    images: [
      {
        alt_description: 'ImageBox main page screenshoot',
        light_mode: '/imageBox/imageBox-dark-1.png',
        dark_mode: '/imageBox/imageBox-light-1.png',
      },
    ],
    name: 'ImageBox',
    route: 'image-box',
    short_description:
      'A dynamic image search website using the Unsplash API, featuring advanced search capabilities, pagination, user collections and light/dark mode, showcasing my frontend development skills.',

    stack: [
      'nextjs',
      'typescript',
      'tailwind css',
      'drizzle',
      'shadcn',
      'react testing library',
      'vitest',
      'zod',
    ],
    website: 'https://image-box-six.vercel.app',
  },
  {
    date: 'May 2024',
    features: [
      {
        name: 'Search Functionality',
        description:
          'Search for images using the Unsplash API with real-time results.',
      },
    ],
    id: 'audiophile',
    images: [
      {
        alt_description: 'Audiophile main page screenshoot',
        light_mode: '/imageBox/audiophile-1.png',
      },
    ],
    name: 'Audiophile',
    short_description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    github_repo: 'https://github.com/Poli2714/audiophile',
    goals: [
      'ImageBox was developed as a portfolio project to demonstrate my frontend development skills and my ability to create dynamic, interactive web applications. The primary goal was to build a comprehensive image search and management platform that showcases various advanced features, such as real-time photo searches using the Unsplash API, user authentication, and collection management.',
      'By incorporating functionalities like light/dark mode and responsive design, I aimed to create an engaging and accessible user experience. This project illustrates my proficiency in modern web technologies, including HTML, CSS, JavaScript, TypeScript, React, Next.js, Supabase, and Drizzle ORM, and underscores my commitment to building high-quality, user-centric web applications.',
    ],
    stack: [
      'nextjs',
      'typescript',
      'tailwind css',
      'authjs',
      'drizzle',
      'shadcn',
      'react hook form',
      'zod',
      'zustand',
    ],
    route: 'audiophile',
    website: 'https://audiophile-nine.vercel.app',
  },
];
