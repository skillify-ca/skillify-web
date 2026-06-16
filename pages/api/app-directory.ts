type UserApp = {
    id: number | string;
    name: string;
    description: string;
    category: string;
    image: string;
    url: string;
    rating: number;
    creator: string;
    lastUpdated: string;
    features: string[];
    reviews?: { user: string; comment: string; rating: number }[];
};

export const mockApps: UserApp[] = [
    {
        id: 1,
        name: "Retirement Calculator",
        description: "Calculate your retirement savings and plan for the future",
        category: "finance",
        image: "/app-directory/retirement-calculator.gif",
        url: "https://retirement-calculator-lilac.vercel.app/",
        rating: 4.4,
        creator: "vithushan",
        lastUpdated: "2026-02-15",
        features: [
            "Age-based retirement planning",
            "Savings goal calculation",
            "Inflation adjustment",
            "Tax implications analysis"
        ],
        reviews: [

        ]
    },
    // {
    //     id: 5,
    //     name: "Trip Journal",
    //     description: "An interactive map documenting your travels with photos, notes, and location tags",
    //     category: "travel",
    //     image: "/app-directory/journal.gif",
    //     url: "https://v0-interactive-travel-blog-nine.vercel.app/",
    //     rating: 4.5,
    //     creator: "vithushan",
    //     lastUpdated: "2025-10-30",
    //     features: [
    //         "Interactive map with location markers",
    //         "Photo and note attachments for each location",
    //         "Travel timeline view",
    //         "Shareable travel journal links"
    //     ],
    //     reviews: [
    //     ]
    // },
    {
        id: 2,
        name: "Bakhoro Card Game",
        description: "A 4-player card game where players compete to play runs of cards and score points",
        category: "entertainment",
        image: "/app-directory/cards.gif",
        url: "https://bakhoro-cardgame.vercel.app/",
        rating: 4.1,
        creator: "vithushan",
        lastUpdated: "2026-05-20",
        features: [
            "4-player multiplayer support",
            "Real-time gameplay",
            "Score tracking system",
            "Mobile-friendly interface"
        ],
        reviews: [

        ]
    },
    {
        id: 3,
        name: "Grooveshare",
        description: "Discover and share your favorite music with friends. Create playlists, follow other users, and explore new tunes together.",
        category: "entertainment",
        image: "/app-directory/grooveshare.gif",
        url: "https://grooveshare.vercel.app/",
        rating: 3.9,
        creator: "curtis",
        lastUpdated: "2025-12-10",
        features: [
            "Music discovery engine",
            "Playlist creation tools",
            "Social sharing features",
            "Friend connection system"
        ],
        reviews: [
        ]
    },
    {
        id: 4,
        name: "Basketball Stat Tracker",
        description: "Track your basketball game stats and analyze your performance over time. Log points, rebounds, assists, and more to see how you improve.",
        category: "sports",
        image: "https://www.cardillsports.com/_next/image?url=%2Fassets%2Flogo.jpg&w=256&q=75",
        url: "https://cardillsports.com/",
        rating: 4.2,
        creator: "jason",
        lastUpdated: "2025-12-05",
        features: [
            "Game stat tracking",
            "Performance analysis",
            "Player comparison tools",
            "Mobile-friendly interface"
        ],
        reviews: [
        ]
    }
];