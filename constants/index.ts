import { Message } from "@/lib/types";

export const fakeMessages: Message[] = [
  {
    id: 1,
    role: "assistant",
    content: "Hello, how can I help you today?",
    timestamp: "2023-10-01T10:00:00Z",
  },
  {
    id: 2,
    role: "user",
    content: "I need some information about your services.",
    timestamp: "2023-10-01T10:01:00Z",
  },
  {
    id: 3,
    role: "assistant",
    content: "Sure, we offer a variety of services including...",
    timestamp: "2023-10-01T10:02:00Z",
  },
  {
    id: 4,
    role: "user",
    content: "Can you tell me more about your pricing?",
    timestamp: "2023-10-01T10:03:00Z",
  },
  {
    id: 5,
    role: "assistant",
    content: "Our pricing is competitive and depends on...",
    timestamp: "2023-10-01T10:04:00Z",
  },
  {
    id: 6,
    role: "user",
    content: "Do you offer any discounts?",
    timestamp: "2023-10-01T10:05:00Z",
  },
  {
    id: 7,
    role: "assistant",
    content: "Yes, we have discounts for...",
    timestamp: "2023-10-01T10:06:00Z",
  },
  {
    id: 8,
    role: "user",
    content: "How can I get started?",
    timestamp: "2023-10-01T10:07:00Z",
  },
  {
    id: 9,
    role: "assistant",
    content:
      "The question “What is the meaning of life?” has puzzled philosophers, theologians, scientists, artists, and ordinary people for millennia. It doesn’t have a single, universally accepted answer—what feels meaningful to one person can feel empty to another. Still, there are a handful of major ways people think about it:\n" +
      "\n" +
      "| Perspective | Core Idea | Typical Questions it Raises |\n" +
      "|-------------|-----------|---------------------------|\n" +
      "| **Religious & Spiritual** | Life is part of a divine plan, an apprenticeship, or a test. Meaning comes from aligning with divine will or achieving some afterlife goal. | “What does my faith teach about purpose?” “How do my actions affect my soul?” |\n" +
      "| **Philosophical (Existential)** | Life has no inherent meaning; we create our own by making choices, forming authentic relationships, and confronting our freedom. | “How do I use my freedom responsibly?” “What values guide my life?” |\n" +
      "| **Humanist & Secular Ethics** | Meaning grows from contributing to humanity, fostering well‑being, and caring for others. | “What impact can I make?” “How do I help others thrive?” |\n" +
      "| **Scientific / Biological** | Life is a natural process; the “meaning” is what we determine it to be as conscious beings. | “What are the evolutionary benefits of these behaviors?” “Why are we curious?” |\n" +
      "| **Psychological (Hedonic / Eudaimonic)** | Well‑being comes from pleasure, achievement, or the pursuit of an authentic good life. | “What brings me joy.” “What challenges do I want to master?” |\n" +
      "| **Narrative / Storytelling** | Our lives are stories; we give them meaning by creating narratives, traditions, and shared symbols. | “How do I weave past and future into a coherent story?” |\n" +
      "\n" +
      "### Common Threads Across Perspectives\n" +
      "\n" +
      '1. **Connection** – Many find meaning in relationships: family, friends, community, or even the broader "web of life."\n' +
      "2. **Purpose Through Contribution** – Helping others, creating, learning, or developing skills.\n" +
      "3. **Growth & Learning** – Striving toward personal development or a more enlightened understanding.\n" +
      "4. **Authenticity & Integrity** – Aligning actions with deeply held values.\n" +
      "5. **Experience & Awe** – Appreciating beauty, wonder, curiosity, or the mysteries of existence.\n" +
      "\n" +
      "### A Few Practical Steps to Explore Personal Meaning\n" +
      "\n" +
      "1. **Reflect on Your Values** – Write down what matters most to you. What do you want to stand for?\n" +
      "2. **Identify Patterns in Joy & Fulfillment** – When do you feel most alive? Look for common threads.\n" +
      "3. **Set Intentional Goals** – Notable achievements, habits, or relationships that reflect your values.\n" +
      "4. **Create a Story** – Even an oral narrative: “I’m a detective of my own story, and my mission is…”\n" +
      "5. **Engage with Others** – Discussions, reading, art, or voluntary service can open new vistas.\n" +
      "6. **Accept Uncertainty** – The question can’t be sealed; the journey itself often adds richness.\n" +
      "\n" +
      "### Short Philosophical Quips\n" +
      "\n" +
      "- *Existentialists* (e.g., Sartre) say we’re “condemned to be free.” We must own our choices; meaning follows responsibility.\n" +
      "- *Stoics* propose that we’re part of a rational cosmos, and tranquility comes from focusing on what we can control.\n" +
      "- *Buddhists* highlight the impermanence and interdependence of all things; meaning is found in compassion and mindfulness.\n" +
      "\n" +
      "### Bottom Line\n" +
      "\n" +
      "There’s no elevator‑style one‑size‑fits‑all answer. The meaning of life ends up being a personal narrative you weave out of:\n" +
      "- What sparks you,\n" +
      "- What contributes to the world,\n" +
      "- What aligns with your deepest values, and\n" +
      "- How you’re willing to accept uncertainty and adapt over time.\n" +
      "\n" +
      "Your own “meaning of life” will probably evolve as you learn, love, and experience. The very act of searching, questioning, and living the search is often where the richest insights arrive.",
    timestamp: "",
  },

  {
    id: 10,
    role: "user",
    content: "Thank you for the information!",
    timestamp: "2023-10-01T10:09:00Z",
  },

  {
    id: 11,
    role: "assistant",
    content: 'Here’s a classic example:  \n' +
    '\n' +
    '**Second‑order differential equation**\n' +
    '\n' +
    '\\[\n' +
    "y''+2y'+y=0\n" +
    '\\]\n' +
    '\n' +
    '(The equation is linear, homogeneous, with constant coefficients.)\n' +
    '\n' +
    '---\n' +
    '\n' +
    '### 1. Solve the characteristic equation\n' +
    '\n' +
    'For a constant‑coefficient ODE, we try \\(y=e^{rx}\\).  \n' +
    'Substituting gives\n' +
    '\n' +
    '\\[\n' +
    'r^{2}+2r+1=0 \\;\\Longrightarrow\\; (r+1)^{2}=0 .\n' +
    '\\]\n' +
    '\n' +
    'So we have a repeated real root \\(r=-1\\).\n' +
    '\n' +
    '---\n' +
    '\n' +
    '### 2. Form the general solution\n' +
    '\n' +
    'When a root \\(r\\) is repeated \\(m\\) times (here \\(m=2\\)), the general solution is\n' +
    '\n' +
    '\\[\n' +
    'y(x) = (C_{1}+C_{2}x)\\,e^{rx}.\n' +
    '\\]\n' +
    '\n' +
    'With \\(r=-1\\):\n' +
    '\n' +
    '\\[\n' +
    '\\boxed{\\,y(x)=(C_{1}+C_{2}x)\\,e^{-x}\\,}\n' +
    '\\]\n' +
    '\n' +
    'where \\(C_{1}\\) and \\(C_{2}\\) are arbitrary constants determined by any initial or boundary conditions you might have.\n' +
    '\n' +
    '---\n' +
    '\n' +
    '#### Check\n' +
    '\n' +
    'Compute derivatives:\n' +
    '\n' +
    "* \\(y'=(C_{2}-C_{1}-C_{2}x)e^{-x}\\)\n" +
    "* \\(y''=(C_{1}+C_{2}x-2C_{2})e^{-x}\\)\n" +
    '\n' +
    'Plug into the ODE:\n' +
    '\n' +
    '\\[\n' +
    "y''+2y'+y = (C_{1}+C_{2}x-2C_{2})e^{-x}\n" +
    '          +2(C_{2}-C_{1}-C_{2}x)e^{-x}\n' +
    '          +(C_{1}+C_{2}x)e^{-x}=0,\n' +
    '\\]\n' +
    '\n' +
    'so the solution satisfies the equation.\n' +
    '\n' +
    '---\n' +
    '\n' +
    '**: Adding an initial condition**\n' +
    '\n' +
    "If you also specify \\(y(0)=3\\) and \\(y'(0)=1\\), we can determine \\(C_{1}\\) and \\(C_{2}\\):\n" +
    '\n' +
    '* \\(y(0)=C_{1}\\cdot1=3 \\;\\Rightarrow\\; C_{1}=3\\)\n' +
    "* \\(y'(0)=(C_{2}-C_{1})=1 \\;\\Rightarrow\\; C_{2}=1+C_{1}=4\\)\n" +
    '\n' +
    'Thus the particular solution would be\n' +
    '\n' +
    '\\[\n' +
    'y(x)=(3+4x)e^{-x}.\n' +
    '\\]\n' +
    '\n' +
    '---\n' +
    '\n' +
    'Feel free to ask if you’d like a different type of second‑order ODE (e.g., non‑homogeneous, variable coefficients, etc.) or a full step‑by‑step derivation for a more complex example!',
    timestamp: "2023-10-01T10:09:00Z",
  },
];
