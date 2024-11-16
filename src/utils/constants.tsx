import {
  NavigationLink,
  SocialLink,
  CarFinancingFeature,
  DealershipManagementData,
  QuestionData,
  WhyFeature,
} from "@/types/types";

export const NAVIGATION_LINKS: NavigationLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQs" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "https://www.facebook.com/OneLotPH/",
    icon: (
      <svg
        className="w-7 h-7"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          clipRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
        />
      </svg>
    ),
  },
  {
    href: "https://www.instagram.com/onelot.ph/",
    icon: (
      <svg
        className="w-7 h-7"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          clipRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.17 1.17 0 111.17-1.17 1.17 1.17 0 01-1.17 1.17z"
        />
      </svg>
    ),
  },
];

export const CAR_FINANCING_FEATURES: CarFinancingFeature[] = [
  {
    id: 1,
    message:
      "Interest as low as 1.5% per month with daily calculation of interest",
  },
  {
    id: 2,
    message: "Financing up to 70% of the vehicle purchase",
  },
  {
    id: 3,
    message:
      "Financing period up to 90 days with a flexible repayment schedule at any point",
  },
];

export const DEALERSHIP_MANAGEMENT_DATA: DealershipManagementData[] = [
  {
    id: 1,
    header: "Inventory Management",
    message:
      "Track all details about your cars and sales in one place - from car details to buyers. All you need to know in one place.",
  },
  {
    id: 2,
    header: "Marketing Tools",
    message:
      "Promote your cars across all platforms. Write a marketing text and upload on Facebook Marketplace, Groups, Pages, and Instagram with a single click of a button",
  },
  {
    id: 3,
    header: "Marketing Insights (Coming Soon)",
    message:
      "Get insights on prices and volumes for all cars in the market. We provide you with all the data by combining information from various sources with a single click.",
  },
];

export const QUESTION_DATA: QuestionData[] = [
  {
    id: "item-1",
    question: "How do I apply for the loan?",
    answer: (
      <>
        OneLot onboarding is easy and straightforward onboarding process. We
        only require few documents and after few days you can get your first
        loan.
        <br />
        <br />
        Check here for exact requirements{" "}
        <span className="text-primaryPurple">See full requirements</span>.
      </>
    ),
  },
  {
    id: "item-2",
    question: "What are the interest rates offered?",
    answer: (
      <>
        OneLot onboarding is easy and straightforward onboarding process. We
        only require few documents and after few days you can get your first
        loan.
        <br />
        <br />
        Check here for exact requirements{" "}
        <span className="text-primaryPurple">See full requirements</span>.
      </>
    ),
  },
  {
    id: "item-3",
    question: "What kinds of vehicles can I upload?",
    answer: (
      <>
        OneLot onboarding is easy and straightforward onboarding process. We
        only require few documents and after few days you can get your first
        loan.
        <br />
        <br />
        Check here for exact requirements{" "}
        <span className="text-primaryPurple">See full requirements</span>.
      </>
    ),
  },
];

export const WHY_FEATURES: WhyFeature[] = [
  {
    title: "Trust",
    description:
      "Regulated by Securities and Exchange Commission (SEC) Philippines",
    image: "https://www.onelot.ph/trust.svg",
  },
  {
    title: "High Amount",
    description:
      "Get the highest loan amounts compared to other banks and lenders",
    image: "https://www.onelot.ph/high_amount.svg",
  },
  {
    title: "Fast",
    description: "Get the money within a few hours on the same day",
    image: "https://www.onelot.ph/fast.svg",
  },
  {
    title: "Flexible",
    description: "Loans are tailored to your needs",
    image: "https://www.onelot.ph/flexible.svg",
  },
  {
    title: "Easy",
    description:
      "Run through an easy process and get your first loans within days",
    image: "https://www.onelot.ph/easy.svg",
  },
];
