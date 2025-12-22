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
        type: "subsubheading",
        text: "Team Branding & Impersonation",
      },
      {
        type: "paragraph",
        text: "You are strictly prohibited from using the 'ShibeFanClub' (SFC) name, logo, or tag to register for any external tournaments, leagues, or scrims without explicit written permission from an SFC owner. This includes:",
      },
      {
        type: "list",
        items: [
          "Registering a team named 'SFC [YourName]' or similar variations.",
          "Using the SFC clan tag or logo in a way that implies you are a contracted professional player for the organization.",
          "Impersonating official roster members to gain entry into events or obtain scrim codes.",
        ],
      },
      {
        type: "paragraph",
        text: "Violation of this policy will result in an immediate permanent ban from all SFC services and may lead to us contacting the external tournament organizer to have your team disqualified.",
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
      {
        type: "subheading",
        text: "8. AMENDMENTS TO TERMS",
      },
      {
        type: "paragraph",
        text: "We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.",
      },
      {
        type: "subheading",
        text: "9. FORCE MAJEURE",
      },
      {
        type: "paragraph",
        text: "SFC shall not be liable for any delay or failure to perform resulting from causes outside its reasonable control, including, but not limited to, acts of God, war, terrorism, riots, embargos, acts of civil or military authorities, fire, floods, accidents, strikes, or shortages of transportation facilities, fuel, energy, labor, or materials, or the failure of third-party game servers (e.g., Steam, Riot Direct, Tencent Cloud).",
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
        text: "3. PRIZE PAYMENT & TAXES",
      },
      {
        type: "paragraph",
        text: "Prizes are non-transferable. Cash prizes are typically processed within 30-45 days of the tournament conclusion, provided the winner has submitted all necessary information.",
      },
      {
        type: "list",
        items: [
          "Tax Forms: Winners may be required to complete tax documentation (e.g., W-8BEN or local equivalents) before payouts are released.",
          "Transaction Fees: Transaction fees (e.g., PayPal fees, Bank Wire charges) and currency conversion rates are the sole responsibility of the winner and may be deducted from the final prize amount.",
          "Forfeiture: Failure to claim a prize or provide valid payment details within 90 days of the notification will result in forfeiture of the prize.",
        ],
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
        text: 'ShibeFanClub ("SFC", "we", "us") offers various tiers of membership to eligible fans. By acquiring a Membership, you agree to these Terms and Conditions ("Terms"), which govern your benefits, rights, and subscription obligations.',
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
        text: "3. MEMBERSHIP TIERS",
      },
      {
        type: "paragraph",
        text: "We currently offer three primary tiers of membership: Starter, Pro, and Elite. Benefits associated with each tier are detailed on our Shop page and are subject to change. SFC reserves the right to vary, withdraw, or amend membership benefits at any time.",
      },
      {
        type: "subheading",
        text: "4. BILLING, RENEWALS, AND PLAN CHANGES",
      },
      {
        type: "paragraph",
        text: "All membership payments are processed securely via Stripe. By subscribing, you authorize us to charge your payment method on a recurring basis.",
      },
      {
        type: "list",
        items: [
          "Automatic Renewal: Your membership automatically renews at the end of each billing cycle unless canceled.",
          "Upgrades: If you upgrade to a higher tier, the change takes effect immediately. You will be charged a prorated amount for the remainder of the current cycle.",
          "Downgrades: If you switch to a lower tier, the change will take effect at the end of your current billing cycle. You will retain your current tier benefits until that date.",
          "Cancellation: You may cancel your membership at any time via the 'Manage Subscription' portal in your account settings. Cancellation takes effect at the end of your current billing cycle.",
          "No Refunds: Membership fees are non-refundable. We do not provide credits or refunds for partially used membership periods.",
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
        text: "SFC shall not be liable for any failure of third-party services (such as Stripe or YouTube) or for any indirect losses arising from your use of the Membership. The service is provided 'as is'.",
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
      {
        type: "subheading",
        text: "6. INDEMNIFICATION",
      },
      {
        type: "paragraph",
        text: "You agree to defend, indemnify, and hold harmless ShibeFanClub and its contractors from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees) arising from:",
      },
      {
        type: "list",
        items: [
          "Your use of and access to the Boosting Service.",
          "Your violation of any term of these Terms.",
          "Your violation of any third-party right, including without limitation any copyright, property, or privacy right.",
          "Any claim that your use of the service caused damage to a third party (including game developers).",
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
          "Identity Data: Name, username, Google Profile Information (if logging in via Google), gamer tags (e.g., Riot ID, PUBG Mobile ID), and Discord ID.",
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
        text: "8. THIRD-PARTY LINKS AND SERVICES",
      },
      {
        type: "paragraph",
        text: "Our Service contains links to other sites that are not operated by us (e.g., Discord, Stripe, YouTube, Twitch). If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.",
      },
      {
        type: "paragraph",
        text: "We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.",
      },
      {
        type: "subheading",
        text: "9. YOUR LEGAL RIGHTS",
      },
      {
        type: "paragraph",
        text: "Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, or erasure of your personal data. If you wish to exercise any of these rights, please contact us.",
      },
      {
        type: "subheading",
        text: "10. CONTACT US",
      },
      {
        type: "paragraph",
        text: "If you have any questions about this privacy policy or our privacy practices, please contact us via our official Discord server or email: tankifighter@gmail.com.",
      },
    ],
  },
  {
    id: "cookie-policy",
    title: "Cookie Policy",
    content: [
      {
        type: "subheading",
        text: "1. WHAT ARE COOKIES?",
      },
      {
        type: "paragraph",
        text: "Cookies are small text files that are placed on your computer or mobile device when you visit a website. ShibeFanClub ('SFC') uses cookies to make our website work efficiently and to provide information to us.",
      },
      {
        type: "subheading",
        text: "2. TYPES OF COOKIES WE USE",
      },
      {
        type: "list",
        items: [
          "Essential Cookies: These are necessary for the website to function (e.g., keeping you logged in, processing Stripe payments, and securing forms). You cannot opt-out of these.",
          "Analytics Cookies: We use services like Google Analytics to track visitor numbers and behavior anonymously. This helps us improve our tournament pages.",
          "Functionality Cookies: These remember your preferences, such as your region or language settings.",
        ],
      },
      {
        type: "subheading",
        text: "3. MANAGING COOKIES",
      },
      {
        type: "paragraph",
        text: "Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit www.aboutcookies.org.",
      },
      {
        type: "paragraph",
        text: "Please note that disabling Essential Cookies may break critical features of the SFC platform, such as purchasing memberships or registering for events.",
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
  {
    id: "fan-content",
    title: "Fan Content Guidelines",
    content: [
      {
        type: "subheading",
        text: "1. INTRODUCTION",
      },
      {
        type: "paragraph",
        text: "We love seeing our community get creative. These guidelines allow you to use ShibeFanClub ('SFC') intellectual property (IP) to create Fan Content, such as fan art, videos, streams, and social media posts, without worrying about copyright strikes, provided you follow these rules.",
      },
      {
        type: "subheading",
        text: "2. WHAT IS PERMITTED?",
      },
      {
        type: "paragraph",
        text: "You are allowed to create and share content using our logos, gameplay footage, and branding for **non-commercial, personal use**.",
      },
      {
        type: "list",
        items: [
          "Streaming: You may stream our tournaments (unless a specific event has exclusive broadcast rights), provided you add a standard delay to prevent 'stream sniping'.",
          "Fan Art: You may create digital or physical art featuring our team or logos for personal display.",
          "Social Media: You may use our GIFs, clips, and memes on your personal channels.",
        ],
      },
      {
        type: "subheading",
        text: "3. RESTRICTIONS (THE 'NO' LIST)",
      },
      {
        type: "paragraph",
        text: "While we want you to have fun, you must not:",
      },
      {
        type: "list",
        items: [
          "Commercialize: You cannot sell merchandise (e.g., T-shirts, mugs) featuring SFC logos or assets.",
          "Paywall: You cannot put SFC content behind a paywall (e.g., Patreon-exclusive access to our tournament VODs).",
          "Mislead: You cannot imply that your content is 'Official' or endorsed by SFC.",
          "Offend: You cannot use our IP in content that is racist, sexist, homophobic, or promotes illegal drugs/gambling.",
        ],
      },
      {
        type: "subheading",
        text: "4. BRAND ASSETS",
      },
      {
        type: "paragraph",
        text: "If you use the SFC Logo, please do not alter the proportions, colors, or distort the image. You should not modify our logo to include your own team name or sponsor overlays.",
      },
    ],
  },
  {
    id: "data-deletion",
    title: "Data Deletion Policy",
    content: [
      {
        type: "subheading",
        text: "1. OVERVIEW AND RIGHTS",
      },
      {
        type: "paragraph",
        text: "ShibeFanClub ('SFC') recognizes your right to the erasure of personal data ('Right to be Forgotten') in accordance with applicable data protection laws. This policy outlines the official procedures for requesting the permanent deletion of your account and all associated personally identifiable information.",
      },
      {
        type: "subheading",
        text: "2. DELETION VIA ACCOUNT SETTINGS",
      },
      {
        type: "paragraph",
        text: "For the most efficient processing, registered users are advised to initiate the deletion protocol directly through the user dashboard. This method automatically verifies account ownership.",
      },
      {
        type: "list",
        items: [
          "Log in to your valid account on the SFC platform.",
          "Navigate to the 'Settings' tab located in the user dashboard.",
          "Locate the 'Deactivate Account' section at the bottom of the page.",
          "Select 'Request Deletion'. You will be redirected to our secure support environment (Discord) to finalize the request with an administrator.",
        ],
      },
      {
        type: "subheading",
        text: "3. MANUAL DELETION REQUESTS",
      },
      {
        type: "paragraph",
        text: "Users who cannot access their account dashboard or prefer manual processing may submit a formal request via email. To ensure the security of the account, strictly verifiable identification details must be provided.",
      },
      {
        type: "list",
        items: [
          "Requests must be sent to tankifighter@gmail.com.",
          "The email subject line must state: 'Formal Data Deletion Request'.",
          "The body of the correspondence must include the registered Username and associated Email Address.",
        ],
      },
      {
        type: "subheading",
        text: "4. PROCESSING AND RETENTION",
      },
      {
        type: "paragraph",
        text: "Upon receipt of a verified request, SFC will permanently erase all personal data within 30 days. Please be advised that certain non-personal transaction records may be retained solely for legal, tax, or accounting purposes as required by law.",
      },
      {
        type: "paragraph",
        text: "Deletion of your data is irreversible. Once completed, you will lose access to all memberships, ranks, and purchase history associated with the account.",
      },
    ],
  },
];
