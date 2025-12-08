import { ContentBlock } from "@/lib/types";

export const policies: {
  id: string;
  title: string;
  content: ContentBlock[];
}[] = [
  {
    id: "website-terms",
    title: "Website Terms & Conditions",
    content: [
      {
        type: "subheading",
        text: "1. DEFINITIONS & INTERPRETATION",
      },
      {
        type: "paragraph",
        text: 'Welcome to ShibeFanClub ("SFC", "we", "us", or "our"). By accessing or using our website, services, and participating in our community events, you agree to be bound by these Terms and Conditions ("Terms"). If you disagree with any part of these terms, you may not access the Service.',
      },
      {
        type: "subheading",
        text: "2. INTELLECTUAL PROPERTY RIGHTS",
      },
      {
        type: "paragraph",
        text: "Unless otherwise stated, ShibeFanClub and/or its licensors own the intellectual property rights for all material on this website, including but not limited to team logos, tournament branding, media content, and graphics. All intellectual property rights are reserved.",
      },
      {
        type: "subsubheading",
        text: "You must not:",
      },
      {
        type: "list",
        items: [
          "Republish material from ShibeFanClub without attribution.",
          "Sell, rent, or sub-license material from ShibeFanClub.",
          "Reproduce, duplicate, or copy material from ShibeFanClub for commercial purposes.",
        ],
      },
      {
        type: "subheading",
        text: "3. USER CONDUCT",
      },
      {
        type: "paragraph",
        text: "By using our website and community platforms (including Discord), you agree to conduct yourself in a respectful and lawful manner. You agree not to engage in any data mining, data harvesting, or similar activity. You agree not to harass, abuse, or harm another person or group, or use unauthorized third-party software (cheats) in our events.",
      },
      {
        type: "subheading",
        text: "4. TOURNAMENTS AND EVENTS",
      },
      {
        type: "paragraph",
        text: "Participation in SFC tournaments is subject to the specific rulebooks provided for each event. By registering, you acknowledge that all decisions made by tournament administrators are final.",
      },
      {
        type: "paragraph",
        text: "Prize pools are distributed at the discretion of the organization and may be subject to verification checks. Cheating, exploiting bugs, or using unauthorized third-party software will result in an immediate ban and forfeiture of any winnings.",
      },
      {
        type: "subheading",
        text: "5. PURCHASES AND SERVICES",
      },
      {
        type: "paragraph",
        text: 'If you wish to purchase any product or service made available through the Service ("Purchase"), such as Boosting Services or Memberships, you may be asked to supply certain information relevant to your Purchase.',
      },
      {
        type: "subsubheading",
        text: "Boosting Services Disclaimer",
      },
      {
        type: "paragraph",
        text: "You acknowledge that account sharing carries inherent risks. While we take every precaution to ensure account safety, SFC is not liable for any account sanctions, suspensions, or bans imposed by game developers (e.g., Tencent, Krafton, Riot) arising from the use of our services.",
      },
      {
        type: "subheading",
        text: "6. LIMITATION OF LIABILITY",
      },
      {
        type: "paragraph",
        text: "In no event shall ShibeFanClub, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this website. SFC shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this website or services.",
      },
      {
        type: "subheading",
        text: "7. CONTACT US",
      },
      {
        type: "paragraph",
        text: "If you have any questions about these Terms, please contact us via our official Discord server or email us at tankifighter@gmail.com.",
      },
    ],
  },
  {
    id: "competition-terms",
    title: "General Competition Terms",
    content: [
      {
        type: "subheading",
        text: "1. OVERVIEW AND ACCEPTANCE",
      },
      {
        type: "paragraph",
        text: 'Each Competition, Tournament, or Giveaway is offered by ShibeFanClub ("SFC", "we", or "us"). By entering a Competition, you will be deemed to have accepted: (a) these General Competition Terms; and (b) any specific rulebooks or instructions provided for that particular event.',
      },
      {
        type: "paragraph",
        text: "Participation is subject at all times to the SFC standard of conduct. Any decision of SFC administrators in respect of a Competition (including gameplay disputes, disqualifications, and prize allocation) is final and binding.",
      },
      {
        type: "subheading",
        text: "2. ENTRY CONDITIONS AND RESTRICTIONS",
      },
      {
        type: "paragraph",
        text: "Competitions are not open to any direct administrator or organizer involved in the specific operation of the event. Entries made via automated devices, macros, scripts, or botting software will be disqualified immediately.",
      },
      {
        type: "list",
        items: [
          "You must meet the rank, level, or region requirements specified in the tournament details.",
          "You must possess a valid account for the game title being played that is in good standing with the game publisher.",
          "No entries received after the specified Close Date will be eligible.",
        ],
      },
      {
        type: "subheading",
        text: "3. PRIZE CONDITIONS",
      },
      {
        type: "paragraph",
        text: "Prizes are non-transferable and non-exchangeable. If a prize is unavailable due to unforeseen circumstances, SFC reserves the right to substitute it for a prize of equal or greater value.",
      },
      {
        type: "paragraph",
        text: "Cash prizes are typically processed within 30 days of the tournament conclusion. Winners are responsible for providing accurate payment details (e.g., PayPal, Bank Transfer info). SFC is not liable for failed transfers due to incorrect information provided by the winner.",
      },
      {
        type: "subheading",
        text: "4. DISQUALIFICATION RIGHTS",
      },
      {
        type: "paragraph",
        text: "SFC reserves the right, in its absolute discretion, to verify eligibility and disqualify any participant who:",
      },
      {
        type: "list",
        items: [
          "Is found tampering with the operation of the Competition.",
          "Uses fraudulent means to enter or competes on an account that does not belong to them (Smurfing).",
          "Behaves in an unsportsmanlike manner (toxicity, racism, harassment).",
          "Breaches the specific rulebook of the tournament (e.g., teaming, hacking, bug exploitation).",
        ],
      },
      {
        type: "subheading",
        text: "5. PUBLICITY AND MEDIA",
      },
      {
        type: "paragraph",
        text: "By entering a competition, you grant SFC the right to use your username, in-game name, gameplay footage, and voice communications (if streamed) for promotional purposes on our social media and video platforms without further compensation.",
      },
      {
        type: "subheading",
        text: "6. LIABILITY AND NO ENDORSEMENT",
      },
      {
        type: "paragraph",
        text: "To the fullest extent permitted by law, SFC shall have no responsibility for any losses, damages, or claims incurred by any person in connection with the Competition, including technical failures or server instability. Competitions run on third-party titles or platforms are not endorsed by those parties.",
      },
    ],
  },
  {
    id: "membership-terms",
    title: "Membership Terms and Conditions",
    content: [
      {
        type: "subheading",
        text: "1. APPLICATION AND OVERVIEW",
      },
      {
        type: "paragraph",
        text: 'ShibeFanClub ("SFC", "we", "us") offers various tiers of membership to eligible fans (e.g., Supporter, Elite). By acquiring a Membership, you agree to these Terms and Conditions ("Terms"), which govern your benefits, rights, and subscription obligations.',
      },
      {
        type: "subheading",
        text: "2. ELIGIBILITY CRITERIA",
      },
      {
        type: "list",
        items: [
          "You must hold a valid account on our platform.",
          "You must be 18 years of age or older, or have explicit parental/guardian consent.",
          "You must provide a valid, current, and accepted method of payment.",
          "You must not be currently banned from any SFC community platform.",
        ],
      },
      {
        type: "subheading",
        text: "3. BENEFITS AND TIERS",
      },
      {
        type: "paragraph",
        text: "We offer various tiers of membership. Benefits associated with each tier are subject to change. SFC reserves the right to vary, withdraw, or amend membership benefits at any time (Right to Vary). Benefits are for personal use only and may not be transferred.",
      },
      {
        type: "subheading",
        text: "4. PAYMENTS, RENEWALS, AND CANCELLATION",
      },
      {
        type: "paragraph",
        text: "Memberships are billed on a recurring basis (monthly or annually). Payment will be charged to your chosen payment method at confirmation of purchase.",
      },
      {
        type: "list",
        items: [
          "Automatic Renewal: Your membership will automatically renew unless canceled at least 24 hours before the end of the current period.",
          "Cancellation: You may cancel your membership at any time via your user profile. You will continue to have access to benefits until the end of your current billing cycle.",
          "No Refunds: Membership fees are generally non-refundable, except where required by law. We do not provide credits for partial membership periods.",
        ],
      },
      {
        type: "subheading",
        text: "5. INTELLECTUAL PROPERTY",
      },
      {
        type: "paragraph",
        text: "SFC grants you a limited, revocable license to use digital badges and exclusive content on your profile. You do not own the intellectual property rights to these items, and you may not use them for commercial gain.",
      },
      {
        type: "subheading",
        text: "6. TERMINATION",
      },
      {
        type: "paragraph",
        text: "SFC reserves the right to suspend or terminate your membership immediately and without notice if you are found to be in breach of our Terms and Conditions, including our Social & Community Policy (e.g., toxic behavior). In such cases, no refund will be provided.",
      },
      {
        type: "subheading",
        text: "7. LIMITATION OF LIABILITY",
      },
      {
        type: "paragraph",
        text: "SFC shall not be liable for any failure of third-party services (such as payment processors or Discord) or for any indirect losses arising from your use of the Membership. The service is provided 'as is'.",
      },
      {
        type: "subheading",
        text: "8. CONTACT",
      },
      {
        type: "paragraph",
        text: "For billing inquiries or support, please contact us at tankifighter@gmail.com.",
      },
    ],
  },
  {
    id: "boosting-terms",
    title: "Boosting Services Terms and Conditions",
    content: [
      {
        type: "subheading",
        text: "1. SERVICE AGREEMENT",
      },
      {
        type: "paragraph",
        text: "By purchasing a Boosting Service from ShibeFanClub ('SFC'), you enter into a binding agreement where a verified professional player ('Booster') will assist you in achieving a specific in-game rank or goal. SFC acts as the intermediary platform ensuring the quality and security of the transaction.",
      },
      {
        type: "subheading",
        text: "2. RISK ACKNOWLEDGEMENT & LIABILITY",
      },
      {
        type: "paragraph",
        text: "You acknowledge that 'Boosting' or 'Account Sharing' may violate the Terms of Service of specific game developers (e.g., Tencent, Krafton, Riot Games).",
      },
      {
        type: "list",
        items: [
          "Liability Waiver: While SFC uses VPNs and strict safety protocols, we are not liable for any account sanctions, suspensions, or bans imposed by game publishers resulting from the service.",
          "Assumption of Risk: By purchasing, you accept these risks and agree not to hold SFC responsible for administrative actions taken against your account.",
        ],
      },
      {
        type: "subheading",
        text: "3. ACCOUNT SAFETY PROTOCOLS",
      },
      {
        type: "paragraph",
        text: "We enforce strict conduct rules for our Boosters to protect your digital assets:",
      },
      {
        type: "list",
        items: [
          "Boosters are prohibited from using cheats, scripts, or hacks.",
          "Boosters must not spend in-game currency or alter account details without permission.",
        ],
      },
      {
        type: "subheading",
        text: "4. CUSTOMER OBLIGATIONS",
      },
      {
        type: "paragraph",
        text: "To ensure the service is completed safely and efficiently:",
      },
      {
        type: "list",
        items: [
          "Non-Interference: You must not log into your account while the Booster is active. Doing so creates security risks (IP jumping) and may void your warranty.",
          "Communication: You must provide valid login details and assist with 2FA codes promptly.",
          "Conduct: For Duo/Self-play services, toxic behavior towards the Booster will result in order cancellation.",
        ],
      },
      {
        type: "subheading",
        text: "5. REFUNDS AND CANCELLATIONS",
      },
      {
        type: "paragraph",
        text: "Refunds are calculated based on the progress of the order:",
      },
      {
        type: "list",
        items: [
          "Not Started: 100% Refund available.",
          "In Progress: Pro-rated refund based on the remaining progress required (e.g., remaining ranks).",
          "Completed: No refunds are provided once the service is delivered.",
          "Chargebacks: Unauthorized chargebacks will result in a permanent ban from SFC and reporting to industry blacklists.",
        ],
      },
    ],
  },
  {
    id: "privacy",
    title: "Privacy Policy",
    content: [
      {
        type: "subheading",
        text: "1. INTRODUCTION",
      },
      {
        type: "paragraph",
        text: "ShibeFanClub ('SFC', 'we', 'us', or 'our') collects data in the course of operating our esports organization and community. We want to keep that data safe and secure. We want to give the people to whom that data relates visibility and control over the use of their data.",
      },
      {
        type: "paragraph",
        text: "This Privacy Policy explains how we collect, use, and protect your information when you visit our website, join our Discord server, participate in our tournaments, or purchase our services.",
      },
      {
        type: "subheading",
        text: "2. COLLECTING YOUR INFORMATION",
      },
      {
        type: "paragraph",
        text: "As you interact with us, we may collect and process a wide range of personal information about you. This includes:",
      },
      {
        type: "list",
        items: [
          "Identity Data: Name, username, gamer tags (e.g., Riot ID, PUBG Mobile ID), and Discord ID.",
          "Contact Data: Email address and social media handles.",
          "Financial Data: Payment card details (processed via third parties like PayPal/Stripe) and transaction history.",
          "Technical Data: IP address, browser type, time zone setting, and device data when you access our website.",
          "Usage Data: Information about how you use our website, discord channels, and services.",
          "Tournament Data: Rank, level, region, and gameplay statistics required to verify eligibility for our events.",
        ],
      },
      {
        type: "subheading",
        text: "3. HOW WE USE INFORMATION",
      },
      {
        type: "paragraph",
        text: "We will only use your personal information when the law allows us to. Most commonly, we will use your personal data in the following circumstances:",
      },
      {
        type: "list",
        items: [
          "To perform a contract: e.g., delivering a Boosting Service or administering a Tournament you have entered.",
          "Legitimate Interests: To manage our relationship with you, improve our services, and prevent fraud or cheating.",
          "Legal Compliance: To comply with a legal or regulatory obligation.",
        ],
      },
      {
        type: "paragraph",
        text: "Specifically, we use your data to:",
      },
      {
        type: "list",
        items: [
          "Process and deliver your orders (Memberships, Boosts).",
          "Manage tournament brackets, prize payouts, and verify winners.",
          "Moderate our community (Discord) to prevent toxicity and harassment.",
          "Send you important updates regarding service changes or rulebook updates.",
        ],
      },
      {
        type: "subheading",
        text: "4. DATA SHARING",
      },
      {
        type: "paragraph",
        text: "We do not sell your personal data. However, we may share your details with external parties to help us run our organization. These parties include:",
      },
      {
        type: "list",
        items: [
          "Service Providers: Platforms that help us run the org, such as Discord (community) and payment processors (PayPal/Stripe).",
          "Game Developers: We may be required to share winner details with game publishers (e.g., Tencent, Riot) for prize verification or anti-cheat investigations.",
          "Law Enforcement: If required by law to prevent crime or fraud.",
        ],
      },
      {
        type: "subheading",
        text: "5. CHILDREN'S PRIVACY",
      },
      {
        type: "paragraph",
        text: "Our services and competitions are not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such data, we will take steps to delete it immediately.",
      },
      {
        type: "subheading",
        text: "6. DATA SECURITY AND RETENTION",
      },
      {
        type: "paragraph",
        text: "We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way. We limit access to your personal data to those administrators and contractors who have a business need to know.",
      },
      {
        type: "paragraph",
        text: "We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.",
      },
      {
        type: "subheading",
        text: "7. COOKIES",
      },
      {
        type: "paragraph",
        text: "Our website uses cookies to distinguish you from other users. This helps us to provide you with a good experience when you browse our website and allows us to improve our site. We use standard analytics cookies (e.g., Google Analytics) to track visitor usage anonymously.",
      },
      {
        type: "subheading",
        text: "8. YOUR LEGAL RIGHTS",
      },
      {
        type: "paragraph",
        text: "Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, or erasure of your personal data. If you wish to exercise any of these rights, please contact us.",
      },
      {
        type: "subheading",
        text: "9. CONTACT US",
      },
      {
        type: "paragraph",
        text: "If you have any questions about this privacy policy or our privacy practices, please contact us via our official Discord server or email: tankifighter@gmail.com.",
      },
    ],
  },
  {
    id: "social",
    title: "Social & Community Policy",
    content: [
      {
        type: "subheading",
        text: "1. PURPOSE AND SCOPE",
      },
      {
        type: "paragraph",
        text: "ShibeFanClub's community is at the center of everything we do. This policy exists to ensure that a visitor to any SFC platform finds an engaging, competitive, and welcoming atmosphere.",
      },
      {
        type: "paragraph",
        text: "This policy applies to anyone who engages on SFC platforms, including:",
      },
      {
        type: "list",
        items: [
          "The Official ShibeFanClub Discord Server.",
          "SFC Tournament Lobbies (in-game chat and voice).",
          "YouTube and TikTok chat during SFC broadcasts.",
          "Social Media interactions (YouTube, Instagram, TikTok, Discord, WeChat).",
        ],
      },
      {
        type: "subheading",
        text: "2. THE GOLDEN RULES",
      },
      {
        type: "paragraph",
        text: "By joining our community, you agree to abide by the following principles:",
      },
      {
        type: "list",
        items: [
          "Be Respectful: Do not use hate speech, ethnic slurs, or post obscene, threatening, or discriminatory material. Toxicity is not tolerated.",
          "Be Responsible: You are responsible for whatever gets posted via your account. Do not share your login details.",
          "No Harmful Content: Do not post content that promotes violence, terrorism, self-harm, or sexually explicit material (NSFW).",
          "Be Authentic: Do not impersonate SFC staff, professional players, or other community members. Do not spread misinformation.",
          "No Doxxing: Never share private information belonging to others (real names, addresses, IP addresses) without their consent.",
          "Be Competitive, Not Toxic: We encourage banter, but crossing the line into harassment or personal attacks will result in a ban.",
        ],
      },
      {
        type: "subheading",
        text: "3. SUPPORTING DIVERSITY",
      },
      {
        type: "paragraph",
        text: "SFC's community is diverse. We are privileged to be supported by people of all backgrounds. We do not tolerate harassment or intimidation on the basis of a person's gender, sexual orientation, race, religion, disability, or age.",
      },
      {
        type: "paragraph",
        text: "Gaming is for everyone. Do your part to help us ensure that all members of the SFC community feel safe and welcomed.",
      },
      {
        type: "subheading",
        text: "4. MODERATION AND ENFORCEMENT",
      },
      {
        type: "paragraph",
        text: "SFC reserves the right to moderate our platforms using human moderators and automated bots.",
      },
      {
        type: "paragraph",
        text: "If SFC has reason to believe that you have breached this policy, we reserve the right in our absolute discretion to take the following actions without notice:",
      },
      {
        type: "list",
        items: [
          "Remove or delete any content that breaches this policy.",
          "Temporarily mute or suspend your access to the SFC Discord or Website.",
          "Permanently ban you from all future SFC tournaments and events.",
          "Report severe breaches (e.g., threats of violence) to relevant authorities or game publishers.",
        ],
      },
      {
        type: "subheading",
        text: "5. CONTACT US",
      },
      {
        type: "paragraph",
        text: "If you witness a breach of these rules or have a dispute regarding a moderation decision, please contact us at tankifighter@gmail.com.",
      },
    ],
  },
];
