import { TProject } from '@/types/project';

export const projects: Array<TProject> = [
  {
    id: 'image-box',
    name: 'ImageBox',
    short_description:
      'A dynamic image search website using the Unsplash API, featuring advanced search capabilities, pagination, user collections and light/dark mode, showcasing my frontend development skills.',
    date: 'June 2024',
    website: 'https://image-box-six.vercel.app',
    github_repo: 'https://github.com/Poli2714/image-box',
    route: '/projects/image-box',
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
    goals: [
      'ImageBox was developed as a portfolio project to demonstrate my frontend development skills and my ability to create dynamic, interactive web applications.',
      'The primary goal was to build a comprehensive image search and management platform that showcases various advanced features, such as real-time photo searches using the Unsplash API, user authentication and collection management.',
      'By incorporating functionalities like light/dark mode and responsive design, I aimed to create an engaging and accessible user experience.',
      'This project illustrates my proficiency in modern web technologies, including HTML, CSS, JavaScript, TypeScript, React, Next.js and underscores my commitment to building high-quality, user-centric web applications.',
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
  },
  {
    id: 'audiophile',
    name: 'Audiophile',
    short_description:
      'A comprehensive e-commerce website  featuring user authentication, advanced cart management for both registered and anonymous users, optimized cart updates, detailed checkout with form validation, and seamless server communication, showcasing my expertise in frontend and backend integration.',
    date: 'May 2024',
    website: 'https://audiophile-nine.vercel.app',
    github_repo: 'https://github.com/Poli2714/audiophile',
    route: '/projects/audiophile',
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
    images: [
      {
        alt_description: 'Audiophile main page for desktop',
        light_mode: '/audiophile/audiophile-1.png',
      },
      {
        alt_description: 'Audiophile main page featured products',
        light_mode: '/audiophile/audiophile-2.png',
      },
      {
        alt_description: 'Audiophile product page for desktop',
        light_mode: '/audiophile/audiophile-3.png',
      },
      {
        alt_description: 'Audiophile main page for mobile',
        light_mode: '/audiophile/audiophile-4.png',
      },
      {
        alt_description: 'Audiophile cart view',
        light_mode: '/audiophile/audiophile-5.png',
      },
      {
        alt_description: 'Audiophile product page for mobile',
        light_mode: '/audiophile/audiophile-6.png',
      },
      {
        alt_description: 'Audiophile order complete notification',
        light_mode: '/audiophile/audiophile-7.png',
      },
      {
        alt_description: 'Audiophile category page',
        light_mode: '/audiophile/audiophile-8.png',
      },
      {
        alt_description: 'Audiophile checkout page',
        light_mode: '/audiophile/audiophile-9.png',
      },
    ],
    goals: [
      'Audiophile was developed to showcase my skills in creating a sophisticated e-commerce platform for audio equipment. The primary goal was to provide a seamless and user-friendly shopping experience for both registered and anonymous users. This includes secure authentication, advanced cart management with real-time synchronization, and a detailed checkout process with comprehensive form validation.',
      'Additionally, the project aims to ensure data consistency and smooth user interactions through optimized updates and efficient server communication. The website is fully responsive, catering to various screen sizes to enhance accessibility and user experience.',
      'Overall, Audiophile highlights my expertise in both frontend and backend development, demonstrating my ability to build polished, high-quality web applications using modern web technologies.',
    ],
    features: [
      {
        name: 'User Authentication',
        description: 'Secure sign-up/sign-in using Auth.js.',
      },
      {
        name: 'Cart Management',
        description:
          'Advanced cart management for registered and anonymous users with real-time synchronization and optimistic updates.',
      },
      {
        name: 'Database Integration',
        description:
          'Utilizes PostgreSQL with Drizzle ORM for data management.',
      },
      {
        name: 'Anonymous User Handling',
        description:
          'Creates and tracks anonymous users, their carts and orders, storing anonymous user IDs in cookies for session persistence and merging data upon sign-in.',
      },
      {
        name: 'Checkout Process',
        description:
          'Detailed checkout form with personal, billing, and payment information, validated using Zod on both client and server sides.',
      },
      {
        name: 'Optimized User Experience',
        description:
          "Immediate (optimistic) cart updates using React's useOptimistic and useContext hooks, and a responsive design catering to various screen sizes.",
      },
      {
        name: 'Server Communication',
        description: 'Efficient server communication using server actions.',
      },
    ],
    challenges: [
      {
        name: 'Anonymous User Tracking',
        solution_summary: [
          'Implementing a robust system to track anonymous user data and synchronize their cart details across sessions was a significant challenge. This required careful handling of user IDs stored in cookies and ensuring seamless merging of anonymous and registered user data upon sign-in.',
        ],
        isBlogged: false,
        blog_post_link: '',
      },
      {
        name: 'Optimistic Updates',
        solution_summary: [
          'Achieving smooth user interactions with optimistic updates involved the use of useOptimistic and useContext hooks. Ensuring that the cart updates immediately without waiting for server responses while maintaining data consistency was a complex task.',
        ],
        isBlogged: false,
        blog_post_link: '',
      },
      {
        name: 'Form Validation',
        solution_summary: [
          'Validating detailed checkout forms with Zod on both client and server sides presented challenges in ensuring that all user input was accurately captured and validated. This was crucial to prevent errors and ensure a smooth checkout process.',
        ],
        isBlogged: false,
        blog_post_link: '',
      },
      {
        name: 'Responsive Design',
        solution_summary: [
          'Making the website fully responsive to different screen sizes required careful planning and implementation. Ensuring that the user experience remained consistent and accessible across various devices was a key focus.',
        ],
        isBlogged: false,
        blog_post_link: '',
      },
      {
        name: 'Database Management',
        solution_summary: [
          'Integrating PostgreSQL with Drizzle ORM and managing separate database tables for registered and anonymous users required meticulous data handling. Ensuring data integrity and consistency while tracking various user actions and orders was a significant challenge.',
        ],
        isBlogged: false,
        blog_post_link: '',
      },
      {
        name: 'User Authentication',
        solution_summary: [
          'Implementing secure authentication using Auth.js and managing user sessions effectively for both registered and anonymous users required a deep understanding of authentication workflows and session management.',
        ],
        isBlogged: false,
        blog_post_link: '',
      },
    ],
  },
];
