import { TProject } from '@/types/project';

export const projects: Array<TProject> = [
  {
    date: 'June 2024',
    challenges: [
      {
        name: 'Displaying photos in a waterfall/masonry grid while maintaining their order and original aspect ratios',
        solution_summary: [
          'I faced the challenge of displaying photos in a responsive grid while preserving their original aspect ratios and order. By creating a custom media query hook and dynamically adjusting the number of columns based on screen size, I achieved a visually appealing masonry layout.',
        ],
        isBlogged: true,
        blog_post_link:
          '/blog/responsive-waterfall-masonry-photo-grid-in-react',
      },
      {
        name: 'Implementing pagination on the search page',
        solution_summary: [
          'To implement pagination on the search page, I created a component that dynamically generates pagination controls based on the current page and total pages. The pagination system ensures the following:',
        ],
        solution_details: [
          {
            id: 'detail1',
            item: 'The pagination item for the current page is disabled to prevent unnecessary clicks.',
          },
          {
            id: 'detail2',
            item: 'The link to the previous page is disabled if the current page is the first page.',
          },
          {
            id: 'detail3',
            item: 'The link to the next page is disabled if the current page is the last page.',
          },
          {
            id: 'detail4',
            item: 'There are always three pagination items displayed, except when the total number of pages is less than three.',
          },
          {
            id: 'detail5',
            item: 'An ellipsis icon is displayed before the next page link to indicate more pages. This ellipsis is hidden if the current page is the page before the last page or if there are only three total pages.',
          },
        ],
        isBlogged: false,
        blog_post_link: '',
      },
      {
        name: 'Implementing instant UI updates for collection name edits',
        solution_summary: [
          "To ensure that changes to a collection's name appear instantly on the UI, I used a custom useOptimisticCollectionNameContext hook, created with React's useContext and useOptimistic hooks. When the user submits a new collection name, the UI updates immediately by setting the optimistic state. The change is then asynchronously saved to the database. If the update fails, an error message is displayed. This approach provides a smooth and responsive user experience by eliminating wait times for database updates.",
        ],
        isBlogged: false,
        blog_post_link: '',
      },
    ],
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
        alt_description: 'ImageBox main page for desktop',
        light_mode: '/imageBox/imageBox-lm-1.png',
        dark_mode: '/imageBox/imageBox-dm-1.png',
      },
      {
        alt_description: 'ImageBox search page for desktop',
        light_mode: '/imageBox/imageBox-lm-2.png',
        dark_mode: '/imageBox/imageBox-dm-2.png',
      },
      {
        alt_description: 'ImageBox photo page for desktop',
        light_mode: '/imageBox/imageBox-lm-3.png',
        dark_mode: '/imageBox/imageBox-dm-3.png',
      },
      {
        alt_description: 'ImageBox photo page for mobile',
        light_mode: '/imageBox/imageBox-lm-4.png',
        dark_mode: '/imageBox/imageBox-dm-4.png',
      },
      {
        alt_description: 'ImageBox add to collection popup',
        light_mode: '/imageBox/imageBox-lm-5.png',
        dark_mode: '/imageBox/imageBox-dm-5.png',
      },
      {
        alt_description: 'ImageBox search page pagination',
        light_mode: '/imageBox/imageBox-lm-6.png',
        dark_mode: '/imageBox/imageBox-dm-6.png',
      },
      {
        alt_description: 'ImageBox edit collection popup',
        light_mode: '/imageBox/imageBox-lm-7.png',
        dark_mode: '/imageBox/imageBox-dm-7.png',
      },
      {
        alt_description: 'ImageBox user collections page',
        light_mode: '/imageBox/imageBox-lm-8.png',
        dark_mode: '/imageBox/imageBox-dm-8.png',
      },
      {
        alt_description: 'ImageBox Beach collection page',
        light_mode: '/imageBox/imageBox-lm-9.png',
        dark_mode: '/imageBox/imageBox-dm-9.png',
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
    challenges: [],
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
