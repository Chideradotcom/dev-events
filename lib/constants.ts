export type EventItem = {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
};

export const events: EventItem[] = [
  {
    image: "/images/event1.png",
    title: "React Summit",
    slug: "react-summit",
    location: "Amsterdam, Netherlands",
    date: "June (annual)",
    time: "9:00 AM - 6:00 PM",
  },
  {
    image: "/images/event2.png",
    title: "Web Summit",
    slug: "web-summit",
    location: "Lisbon, Portugal",
    date: "November (annual)",
    time: "9:00 AM - 6:00 PM",
  },
  {
    image: "/images/event3.png",
    title: "PyCon US",
    slug: "pycon-us",
    location: "United States",
    date: "May (annual)",
    time: "9:00 AM - 5:00 PM",
  },
  {
    image: "/images/event4.png",
    title: "KubeCon + CloudNativeCon",
    slug: "kubecon-cloudnativecon",
    location: "North America and Europe",
    date: "Spring and fall (annual)",
    time: "9:00 AM - 6:00 PM",
  },
  {
    image: "/images/event5.png",
    title: "Google I/O",
    slug: "google-io",
    location: "Mountain View, California",
    date: "May (annual)",
    time: "10:00 AM - 5:00 PM",
  },
  {
    image: "/images/event6.png",
    title: "ETHGlobal Hackathon",
    slug: "ethglobal-hackathon",
    location: "Global and online",
    date: "Multiple events throughout the year",
    time: "All-day",
  },
];
