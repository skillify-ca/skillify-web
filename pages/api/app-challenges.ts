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
        image: "/app-challenges/grooveshare.gif",
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
        description: "Real-time, multiplayer, works with your friends. Build a card game that you can play with your friends online. Whether it's a classic like Poker or a new game you invent, this project will teach you about real-time communication, game state management, and multiplayer interactions.",
        category: "entertainment",
        image: "/app-challenges/cards.gif",
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
        name: "Personal Tracker",
        description: "The best portfolio project is one you'd actually use. Build a tracker for your own goals — fitness, learning, habits — and ship something that means something to you.",
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
        description: "An interactive map documenting your travels with photos, notes, and location tags",
        category: "travel",
        image: "/app-challenges/journal.gif",
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
        description: "Build the tool that answers any financial questions you have about different scenarios. Whether it's retirement planning, investment growth, or loan comparisons, this app will help you make informed financial decisions.",
        category: "finance",
        image: "/app-challenges/retirement-calculator.gif",
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