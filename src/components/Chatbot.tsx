import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

const botResponses: Record<string, string> = {
  services: "We offer: Civil Work, Waterproofing, Labour Works, Lock & Key Projects, and Project Management. Visit our Services page for details!",
  contact: "📞 Call us: 9322255104 / 9423086104\n📧 Email: avadhutconstruction104@gmail.com\n📸 Instagram: @avadhut_construction_",
  location: "📍 We're located at: Adinath Nagar, Pune–Nashik Highway, Bhosari, Pune – 39. Open all days!",
  quote: "For a quotation, please email us at avadhutconstruction104@gmail.com with your project details. We'll get back to you shortly!",
  work: "Check out our 'Our Work' page to see our completed projects! You can also visit our Instagram @avadhut_construction_ for more photos.",
  default: "Thanks for reaching out! I can help with:\n• Our services\n• Contact information\n• Location & hours\n• Getting a quote\n• Our work samples\n\nWhat would you like to know?",
};

const getResponse = (message: string): string => {
  const lower = message.toLowerCase();
  if (lower.includes("service") || lower.includes("civil") || lower.includes("waterproof") || lower.includes("work type")) {
    return botResponses.services;
  }
  if (lower.includes("contact") || lower.includes("phone") || lower.includes("call") || lower.includes("email") || lower.includes("instagram")) {
    return botResponses.contact;
  }
  if (lower.includes("location") || lower.includes("address") || lower.includes("where") || lower.includes("visit") || lower.includes("open")) {
    return botResponses.location;
  }
  if (lower.includes("quote") || lower.includes("price") || lower.includes("cost") || lower.includes("estimate")) {
    return botResponses.quote;
  }
  if (lower.includes("project") || lower.includes("gallery") || lower.includes("photo") || lower.includes("work")) {
    return botResponses.work;
  }
  return botResponses.default;
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! 👋 Welcome to Avadhut Construction. How can I help you today?",
      isBot: true,
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      isBot: false,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Bot response after a short delay
    setTimeout(() => {
      const botMessage: Message = {
        id: Date.now() + 1,
        text: getResponse(inputValue),
        isBot: true,
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 600);
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="chatbot-button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={isOpen ? {} : { boxShadow: ["0 0 0 0 hsl(40, 70%, 50%, 0.4)", "0 0 20px 10px hsl(40, 70%, 50%, 0)", "0 0 0 0 hsl(40, 70%, 50%, 0.4)"] }}
        transition={{ duration: 2, repeat: isOpen ? 0 : Infinity }}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-primary-foreground" />
        ) : (
          <MessageCircle className="w-6 h-6 text-primary-foreground" />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="chatbot-window bg-card"
          >
            {/* Header */}
            <div className="bg-primary px-4 py-3">
              <h3 className="text-primary-foreground font-semibold">Avadhut Construction</h3>
              <p className="text-primary-foreground/70 text-sm">Ask us anything!</p>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-3">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm whitespace-pre-line ${
                      message.isBot
                        ? "bg-muted text-foreground rounded-tl-none"
                        : "bg-primary text-primary-foreground rounded-tr-none"
                    }`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="border-t p-3 flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 rounded-full bg-muted text-foreground text-sm 
                         focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                onClick={handleSend}
                className="p-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
