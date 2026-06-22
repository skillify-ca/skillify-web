type UserApp = {
    id: number | string;
    name: string;
    description: string;
    category: string;
    image: string;
    url?: string;
    rating?: number;
    creator: string;
    lastUpdated: string;
    features: string[];
    reviews?: { user: string; comment: string; rating: number }[];
};

export const mockApps: UserApp[] = [
    {
        id: 1,
        name: "Financial Calculator",
        description: "Build your own financial planning tool to calculate loan payments, investment growth, or retirement savings based on your custom inputs.",
        category: "finance",
        image: "/app-directory/retirement-calculator.gif",
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
        name: "Multiplayer Card Game",
        description: "Build a real-time multiplayer card game where you can join rooms, play against friends, and track your scores.",
        category: "entertainment",
        image: "/app-directory/cards.gif",
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
        name: "Streaming App",
        description: "Create a music streaming app that allows users to discover new songs, create playlists, and share their favorite tracks with friends. Implement features like personalized recommendations and social sharing.",
        category: "entertainment",
        image: "/app-directory/grooveshare.gif",
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
        name: "Personal Tracker",
        description: "Track your personal goals and analyze your progress over time. Log achievements, set milestones, and visualize your growth. This app can be used for fitness goals, learning new skills, or any personal development journey.",
        category: "lifestyle",
        image: "/app-directory/book.png",
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