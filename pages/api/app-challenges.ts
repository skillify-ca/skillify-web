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
        id: 3,
        name: "Streaming App",
        description: "Build your own version of Spotify. Learn how playlists, recommendations, and social features get wired together under the hood.",
        category: "entertainment",
        image: "/app-challenges/streaming.png",
        creator: "curtis",
        lastUpdated: "2025-12-10",
        features: [
            "Music discovery engine",
            "Playlist creation tools",
            "Social sharing features",
            "Friend connection system"
        ],
        reviews: []
    },
    {
        id: 2,
        name: "Multiplayer Card Game",
        description: "Build an online card game that you can play with your friends. Whether it's a classic like Poker or a new game that you invent, this project will teach you about real-time communication, game state management, and multiplayer interactions.",
        category: "entertainment",
        image: "/app-challenges/cards.png",
        creator: "vithushan",
        lastUpdated: "2026-05-20",
        features: [
            "4-player multiplayer support",
            "Real-time gameplay",
            "Score tracking system",
            "Mobile-friendly interface"
        ],
        reviews: []
    },

    {
        id: 4,
        name: "Personal Goal Tracker",
        description: "Build a personalized goal tracker for yourself and your friends. Previous students have built custom trackers for fitness, learning and habits.",
        category: "lifestyle",
        image: "/app-challenges/book.png",
        creator: "jason",
        lastUpdated: "2025-12-05",
        features: [
            "Game stat tracking",
            "Performance analysis",
            "Player comparison tools",
            "Mobile-friendly interface"
        ],
        reviews: []
    },
        {
        id: 5,
        name: "Trip Journal",
        description: "Build an interactive map documenting your travels with photos, notes, and location tags.",
        category: "travel",
        image: "/app-challenges/map.png",
        creator: "vithushan",
        lastUpdated: "2025-10-30",
        features: [
            "Interactive map with location markers",
            "Photo and note attachments for each location",
            "Travel timeline view",
            "Shareable travel journal links"
        ],
        reviews: []
    },
        {
        id: 1,
        name: "Financial Calculator",
        description: "Build a tool to model various financial scenarios. Whether it's retirement planning, investment growth, or loan comparisons, this app will help you make informed financial decisions.",
        category: "finance",
        image: "/app-challenges/calculator.png",
        creator: "vithushan",
        lastUpdated: "2026-02-15",
        features: [
            "Age-based retirement planning",
            "Savings goal calculation",
            "Inflation adjustment",
            "Tax implications analysis"
        ],
        reviews: []
    },
    
];