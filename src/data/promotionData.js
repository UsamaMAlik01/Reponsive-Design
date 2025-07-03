// src/data/promotionData.js

export const promotionData = [
  {
    id: 1,
    heading: "[Lifestyle] 3.3 PAYDAY 2022",
    subheading: "15% off min spend SGD 100",
    code: "HOME10",
    image: "src/assets/promotion.jpg",
    details: [
      {
        icon: "CalendarClock",
        text: "28 Feb - 07 Mar 22",
      },
      {
        icon: "BadgePercent",
        text: "Voucher discount: 10%",
      },
      {
        icon: "ClipboardCheck",
        text: "Registration until: 22 Feb 22",
      },
      {
        icon: "Tag",
        text: "Seller funded portion: 100% out of the discount",
      },
    ],
    summary: {
      Sellers: 0,
      Products: 0,
    },
    dealStatus: [
      { label: "Approved deals", value: 1, color: "green-400" },
      { label: "Approved deals", value: "-", color: "orange-400" },
      { label: "Approved deals", value: "-", color: "red-600" },
    ],
  },
  {
    id: 2,
    heading: "[CRM Campaign] Sports 30% + 10% CB",
    subheading: "(TGIF30)",
    code: "TGIF30",
    image: "src/assets/promotion.jpg", // You can change this image path
    details: [
      {
        icon: "CalendarClock",
        text: "18 Feb 22",
      },
      {
        icon: "BadgePercent",
        text: "Voucher discount: 30%",
      },
      {
        icon: "ClipboardCheck",
        text: "Registration until: 22 Feb 22",
      },
      {
        icon: "Tag",
        text: "Seller funded portion: 85% out of the discount",
      },
    ],
    summary: {
      Sellers: 10,
      Products: 48,
    },
    dealStatus: [
      { label: "Approved deals", value: 4, color: "green-400" },
      { label: "Approved deals", value: 1, color: "orange-400" },
      { label: "Approved deals", value: 3, color: "red-600" },
    ],
  },
];
