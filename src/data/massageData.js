// messagesData.js (temporary local DB)
export const messagesData = [
  {
    id: 1,
    date: "Feb 11",
    title: "Zalora- Seller Communication Prioritization.",
    content: "Hi, you've likely seen email from Zalora Seller Helpdesk to you with the Phrase [HIGH] or ...",
  },
  {
    id: 2,
    date: "Feb 11",
    title: "[IMPORTANT] Update to API endpoint limit.",
    content: "Dear Seller, Following up from our previous announcement, please note a slight change ...",
  },
  {
    id: 3,
    date: "Feb 07",
    title: "Covid-19 Impact on Your Operations.",
    content: "Dear Seller, please immediately inform your Account. Manage or SHD if your operations are impacted by ...",
  },
  {
    id: 4,
    date: "Jan 26",
    title: "[IMPORTANT] API endpoint limit. please forward.",
    content: "Dear Seller, As part of our continuous efforts to improve system response time and reliability ...",
  },
  // 10 more dummy messages
  ...Array.from({ length: 10 }, (_, i) => ({
    id: i + 5,
    date: `Jan ${10 + i}`,
    title: `Sample Notification ${i + 1}`,
    content: `This is a test message for notification ${i + 1}. Please take appropriate action...`,
  }))
];
