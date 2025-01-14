import { Offer } from "../../../../components/resources/jobTracker/JobTrackerComponent";
// Lucky H Interview Data 
export const LuckyInterviewData: Offer[]=[
    {
      "Company": "Robinhood",
      "companyUrl": "https://www.robinhood.com/",
      "Location": "Toronto",
      "Role": "Mobile Developer",
      "timeline": "March 2024",
      "timeSpentHours": 10,
      "Result": "Failed First Technical Round",
      "Base": 115000,
      "askedTask": "Livecoding - List of instruments with filtering",
      "industry": "Finance"
    },
    {
      "Company": "Ramp",
      "companyUrl": "https://www.ramp.com/",
      "Location": "Remote",
      "Role": "Mobile Developer",
      "timeline": "March 2024",
      "timeSpentHours": 20,
      "Result": "Failed Final Technical Round",
      "Base": 100000,
      "askedTask": "Takehome and Livecoding - Tic Tac Toe App",
      "industry": "Finance"
    },
    {
      "Company": "KonradGroup",
      "companyUrl": "https://www.konrad.com/",
      "Location": "Toronto",
      "Role": "Android Developer",
      "timeline": "June/July 2024",
      "timeSpentHours": 15,
      "Result": "Failed Final Technical Round",
      "Base": 85000,
      "askedTask": "In-Person Interview and Takehome Challenge",
      "industry": "Tech"
    },
    {
      "Company": "NetGuru",
      "companyUrl": "https://www.netguru.com/",
      "Location": "Remote",
      "Role": "Mobile Developer",
      "timeline": "June/July 2024",
      "timeSpentHours": 18,
      "Result": "Passed Final Round, No Offer (Recruitment Paused)",
      "Base": 80000,
      "askedTask": "Completed Takehome and Livecoding",
      "industry": "Tech Consulting"
    },
    {
      "Company": "Finofo",
      "companyUrl": "https://www.finofo.com/",
      "Location": "Remote",
      "Role": "Mobile Developer",
      "timeline": "June/July 2024",
      "timeSpentHours": 10,
      "Result": "Failed Takehome",
      "Base": 85000,
      "askedTask": "Takehome - Fruity Selector App",
      "industry": "Finance"
    },
    {
      "Company": "NDAX",
      "companyUrl": "https://www.ndax.io/",
      "Location": "Remote",
      "Role": "Mobile Developer",
      "timeline": "June/July 2024",
      "timeSpentHours": 8,
      "Result": "Failed First Technical Round",
      "Base": 0,
      "askedTask": "Technical Interview with HR Misalignment",
      "industry": "Crypto"
    },
    {
      "Company": "Toast",
      "companyUrl": "https://pos.toasttab.com/",
      "Location": "Remote",
      "Role": "Mobile Developer",
      "timeline": "September 2024",
      "timeSpentHours": 15,
      "Result": "Failed Final Technical Round",
      "Base": 85000,
      "askedTask": "Livecoding and In-Person Interviews",
      "industry": "Tech"
    },
    {
      "Company": "Shopify",
      "companyUrl": "https://www.shopify.com/",
      "Location": "Toronto",
      "Role": "Android Developer",
      "timeline": "September 2024",
      "timeSpentHours": 20,
      "Result": "Failed First Technical Round",
      "Base": 100000,
      "askedTask": "Prescreen, Livecoding, and Assignment",
      "industry": "E-Commerce"
    },
    {
      "Company": "Instacart",
      "companyUrl": "https://www.instacart.com/",
      "Location": "Toronto",
      "Role": "Android Developer",
      "timeline": "September 2024",
      "timeSpentHours": 15,
      "Result": "Failed First Technical Round",
      "Base": 100000,
      "askedTask": "Prescreen, Livecoding, and Algorithm Challenges",
      "industry": "Tech"
    },
    {
      "Company": "Be Think Labs",
      "companyUrl": "https://www.bethinklabs.com/",
      "Location": "Remote",
      "Role": "Java Developer",
      "timeline": "September 2024",
      "timeSpentHours": 10,
      "Result": "Failed First Technical Round",
      "Base": 85000,
      "askedTask": "TDD and Java Data Structure Practice",
      "industry": "Tech"
    },
    {
      "Company": "Robinhood R2",
      "companyUrl": "https://www.robinhood.com/",
      "Location": "Toronto",
      "Role": "Android Developer",
      "timeline": "December 2024",
      "timeSpentHours": 0,
      "Result": "Failed Final Technical Round",
      "Base": 115000,
      "askedTask": "Financial Instrument, 4 Stage Final Round",
      "industry": "Finance"
    },
   
  ]
  export function getInterviewData(userId: string | null): Offer[] | null {
    const allowedUserId = "R7nzMKiRewgJuLm54eQ1KdHV3g82"; // Replace with your expected userId
    return userId === allowedUserId ? LuckyInterviewData : null;
  }