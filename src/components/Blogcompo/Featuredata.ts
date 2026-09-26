export interface BlogPost {
  id: string;
  category: string;
  title: string;
  description: string;
  author: string;
  readTime: string;
  date: string;
  imageUrl: string;
  redirectUrl: string;
  isMainFeatured?: boolean;
}

export const CATEGORIES: string[] = [
  "All",
  "Technology",
  "Payments",
  "Merchant Solutions",
  "Insurance",
  "Lending",
  "Investments",
  "Trust & Safety",
  "Life @ PhonePe",
  "Payment Gateway",
  "Pulse Bytes",
  "Milestones",
  "Design",
];

export const FEATURED_POSTS: BlogPost[] = [
  {
    id: "1",
    category: "Trust & Safety",
    title: "Understanding Risks in Making Payments to New Beneficiaries",
    description:
      "We experience transactions to new beneficiaries very often – understanding the gaps to take care of while making new transactions will help you stay aware of potential scams and keep you safe in your digital payment journey.",
    author: "PhonePe Editor",
    readTime: "3 min read",
    date: "02 September, 2026",
    imageUrl:
      "https://www.phonepe.com/blog/wp-content/uploads/2026/09/Beneficiary_Blog_Header.jpg",
    redirectUrl: "#",
    isMainFeatured: true,
  },
  {
    id: "2",
    category: "Payments",
    title:
      "How to Start Micro-Saving on PhonePe: Fixed Deposits and a ₹100 Daily RD",
    description:
      "PhonePe has introduced new micro-saving features, enabling users to easily book Fixed Deposits (FDs) and start Daily Recurring Deposits (RDs) directly within the app.",
    author: "Akanksha Mishra",
    readTime: "2 min read",
    date: "14 August, 2026",
    imageUrl:
      "https://www.phonepe.com/blog/wp-content/uploads/2026/08/Micro-saving_Header.jpg",
    redirectUrl: "#",
  },
  {
    id: "3",
    category: "Trust & Safety",
    title:
      "Digital-for-Physical Cash Scam: Why you shouldn’t accept UPI Transfers in return for Physical Cash",
    description:
      "We have seen an increase in the use of QR to accept payment in return for cash. This practice, using QR to convert digital currency into cash is called QR for ATM services.",
    author: "Muktha Tavane",
    readTime: "4 min read",
    date: "05 August, 2026",
    imageUrl:
      "https://www.phonepe.com/blog/wp-content/uploads/2026/08/QR-ATM-Blog-Header.jpg",
    redirectUrl: "#",
  },
  {
    id: "4",
    category: "Lending",
    title: "Top 7 Myths About Personal Loan",
    description:
      "From medical expenses and education to home upgrades and other big costs, many of us are exploring different options to manage money better.",
    author: "PhonePe Editor",
    readTime: "2 min read",
    date: "03 July, 2026",
    imageUrl:
      "https://www.phonepe.com/blog/wp-content/uploads/2026/07/Myths-Personal-Loan_Header.jpg",
    redirectUrl: "#",
  },
  {
    id: "5",
    category: "Trust & Safety",
    title:
      "New Fraud Trend: Fraudsters Impersonate the Military to Deceive Innocents",
    description:
      "Recently, our Trust & Safety team has detected a sharp rise in fraudsters pretending to be personnel from the Indian Armed Forces to dupe innocent citizens.",
    author: "Muktha Tavane",
    readTime: "3 min read",
    date: "01 July, 2026",
    imageUrl:
      "https://www.phonepe.com/blog/wp-content/uploads/2026/07/Army-Fraud-Blog-Header.jpg",
    redirectUrl: "#",
  },
  {
    id: "6",
    category: "Merchant Solutions",
    title: "How Digital Payments Are Scaling Delhi’s Busiest Businesses",
    description:
      "In Delhi, quick-service hospital restaurant Bhojanam struggled with slow transactions and complex payment dashboards.",
    author: "Akanksha Mishra",
    readTime: "3 min read",
    date: "16 June, 2026",
    imageUrl:
      "https://www.phonepe.com/blog/wp-content/uploads/2026/06/Delhi_Merchants_Header.jpg",
    redirectUrl: "#",
  },
  {
    id: "7",
    category: "Investments",
    title: "How long should you invest via SIP to make meaningful returns?",
    description:
      "Taking the first step into investing can feel overwhelming. A SIP helps you build long-term wealth by investing a small, fixed amount into mutual funds every month.",
    author: "PhonePe Editor",
    readTime: "3 min read",
    date: "11 June, 2026",
    imageUrl:
      "https://www.phonepe.com/blog/wp-content/uploads/2026/06/SIP_Returns_Header.jpg",
    redirectUrl: "#",
  },
  {
    id: "8",
    category: "Trust & Safety",
    title: "Census 2027 Fraud Alert: How to Protect your Identity",
    description:
      "Fraudsters are using the 2027 census as a medium to deceive innocents. They have been impersonating government enumerators, stealing citizens’ personal information.",
    author: "Muktha Tavane",
    readTime: "2 min read",
    date: "03 June, 2026",
    imageUrl:
      "https://www.phonepe.com/blog/wp-content/uploads/2026/06/Census_Fraud_Header.jpg",
    redirectUrl: "#",
  },
  {
    id: "9",
    category: "Merchant Solutions",
    title:
      "How West Bengal Merchants Are Embracing Digital Payments and Growing Their Business",
    description:
      "West Bengal merchants, like Ashirbad of Karukrit Art and Craft Emporium in Santiniketan, are adopting digital tools like PhonePe to manage high footfall.",
    author: "Akanksha Mishra",
    readTime: "3 min read",
    date: "02 June, 2026",
    imageUrl:
      "https://www.phonepe.com/blog/wp-content/uploads/2026/06/WB_Merchants_Header.jpg",
    redirectUrl: "#",
  },
  {
    id: "10",
    category: "Merchant Solutions",
    title:
      "How Digital Payments are Driving Business Growth for Karnataka’s Merchants",
    description:
      "From the bustling lanes of Nagarbhavi to the silk-lined streets of Mysuru, merchants are increasingly relying on digital payment platforms to drive growth.",
    author: "Akanksha Mishra",
    readTime: "3 min read",
    date: "20 May, 2026",
    imageUrl:
      "https://www.phonepe.com/blog/wp-content/uploads/2026/05/Karnataka_Merchants_Header.jpg",
    redirectUrl: "#",
  },
  {
    id: "11",
    category: "Trust & Safety",
    title:
      "How Fraudsters are Making their Way into your Group Chats and How you can Stay Safe from them",
    description:
      "Fraudsters infiltrate messaging and payment apps to loot people of their money. Learn how this scam works and how to protect yourself.",
    author: "Muktha Tavane",
    readTime: "3 min read",
    date: "06 May, 2026",
    imageUrl:
      "https://www.phonepe.com/blog/wp-content/uploads/2026/05/Group_Chats_Scam_Header.jpg",
    redirectUrl: "#",
  },
  {
    id: "12",
    category: "Trust & Safety",
    title:
      "Synthetic Identity Fraud: How Fraudsters Fabricate Fake Identities",
    description:
      "Synthetic Identity Fraud is a sophisticated fraud modus operandi where criminals stitch together a mix of real and fake information to create a fictitious person.",
    author: "Muktha Tavane",
    readTime: "3 min read",
    date: "01 April, 2026",
    imageUrl:
      "https://www.phonepe.com/blog/wp-content/uploads/2026/04/Synthetic_Identity_Header.jpg",
    redirectUrl: "#",
  },
  {
    id: "13",
    category: "Payments",
    title:
      "From Paying Bills to Shopping: How PhonePe’s Co-branded Card Fits into Daily Indian Spending",
    description:
      "The PhonePe HDFC Ultimo Card places local transactions, bill payments and routine purchases at the center of its rewards structure.",
    author: "Sampurna Mitra",
    readTime: "2 min read",
    date: "18 March, 2026",
    imageUrl:
      "https://www.phonepe.com/blog/wp-content/uploads/2026/03/Co-branded_Card_Header.jpg",
    redirectUrl: "#",
  },
  {
    id: "14",
    category: "Trust & Safety",
    title:
      "RBI Digital Awareness Week: Here’s what you need to know about Social Engineering Scams",
    description:
      "Through this blog about Social Engineering scams, we aim to help you understand and equip you with information to stay safe from frauds.",
    author: "PhonePe Team",
    readTime: "3 min read",
    date: "12 March, 2026",
    imageUrl:
      "https://www.phonepe.com/blog/wp-content/uploads/2026/03/RBI_Awareness_Week_Header.jpg",
    redirectUrl: "#",
  },
  {
    id: "15",
    category: "Insurance",
    title:
      "Before You Fly Out: A Simple Guide to Getting International Travel Insurance",
    description:
      "Planning an international holiday? Take a moment for travel insurance to help handle many practical situations that may arise during your trip.",
    author: "PhonePe Editor",
    readTime: "2 min read",
    date: "15 January, 2026",
    imageUrl:
      "https://www.phonepe.com/blog/wp-content/uploads/2026/01/Travel_Insurance_Header.jpg",
    redirectUrl: "#",
  },
  {
    id: "16",
    category: "Milestones",
    title: "PhonePe 2025: The Year at a Glance",
    description:
      "2025 marked a significant milestone for PhonePe – our tenth year and 600 million users strong. Here’s a look at everything we accomplished.",
    author: "PhonePe Team",
    readTime: "2 min read",
    date: "31 December, 2025",
    imageUrl:
      "https://www.phonepe.com/blog/wp-content/uploads/2025/12/Year_at_a_Glance_2025.jpg",
    redirectUrl: "#",
  },
];