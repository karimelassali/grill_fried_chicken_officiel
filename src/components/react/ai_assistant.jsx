import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, Sparkles, ChefHat, MapPin, Clock, Phone, Star } from "lucide-react";

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  // Developer-side custom instructions - modify these as needed
  const developerInstructions = `
    IMPORTANT DEVELOPER INSTRUCTIONS:
    - Always use the correct Instagram account: @nawabi_khanaa
    - Always use the correct phone number: +39 3510505298
    - The restaurant owner is: Abdulrehman Gujjar
    - Restaurant is located in: Castel San Giovanni, Italy
    - Opening date: September 2025
    - Always mention that the restaurant is Halal certified
    - Emphasize the spicy and authentic Pakistani cuisine
    - Be friendly, professional, and informative
    - Keep responses concise but helpful
    - Always provide accurate information about the restaurant
  `;

  const restaurantInfo = {
    name: "Nawabi Khana",
    cuisine: "Authentic Halal Indian Cuisine",
    specialties: "Traditional Indian dishes, tandoori specialties, authentic curries, and fresh pakoras",
    location: "Castel San Giovanni, Italy",
    phone: "+39 3510505298",
    instagram: "@nawabi_khanaa",
    owner: "Abdulrehman Gujjar",
    opening: "Opening Soon - September 2025",
    halal: "Halal Certified",
    features: "Premium Quality, Spicy Excellence, Authentic Indian Taste"
  };

  // Menu information from menu_items.json
  const menuInfo = {
    categories: ["ANTIPASTO", "GRIGLIATA", "PIATTI_CARNE", "PIATTI_VEGETARIANI"],
    antipasto: ["Onion Rings", "Samosa", "Samosa Chat", "Paneer Pakora", "Mix Veg Pakora", "Chicken Pakora", "Gamberi Pakora", "Fish Pakora", "Antipasto Misto", "Samosa di Carne"],
    grigliata: ["Chicken Tikka", "Tandoori Chicken", "Chicken Malai Tikka", "Chicken Seekh Kebab", "Lamb Seekh Kebab", "Lamb Tikka", "Prawn Tikka", "Mix Grill", "Paneer Tikka", "Mix Veg Platter", "Veg Tikka", "Beef Tikka"],
    piatti_carne: ["Mutton Chops", "Badami Korma", "Chicken Tikka Masala", "Butter Chicken", "Kofta Curry", "Lamb Curry", "Qeema Matar"],
    piatti_vegetariani: ["Palak Paneer", "Chana Masala", "Aloo Matar", "Dal Makhani", "Aloo Tikki", "Aloo Gobhi", "Daal Tarka"],
    price_range: "€4.00 - €22.00",
    highlights: ["Tandoori specialties", "Authentic curries", "Vegetarian options", "Fresh ingredients", "Traditional recipes"]
  };

  // Array of words to highlight in orange color
  const highlightedWords = [
    "hours", "opening", "time", "schedule", "when", "available",
    "location", "address", "where", "place", "city", "street", "italy", "castel san giovanni",
    "owner", "abdulrehman", "gujjar", "founder",
    "developer", "karim", "el assali", "programmer",
    "phone", "call", "contact", "number", "+39", "3510505298",
    "instagram", "social", "media", "@nawabi_khanaa",
    "tiktok", "@nawabikhana",
    "whatsapp", "wa.me",
    "email", "mail", "nawabikhana@gmail.com",
    "halal", "certified", "certification", "muslim", "islamic",
    "menu", "food", "indian", "cuisine", "tandoori", "curry",
    "spicy", "hot", "flavor", "taste", "authentic",
    "september", "2025", "opening soon", "grand opening",
    // Menu items
    "antipasto", "grigliata", "piatti carne", "piatti vegetariani",
    "samosa", "pakora", "tikka", "kebab", "korma", "masala", "butter chicken",
    "paneer", "dal", "aloo", "chana", "palak", "gobhi"
  ];

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Function to highlight words in the response
  const highlightWords = (text) => {
    if (!text) return text;
    
    let highlightedText = text;
    
    // Sort highlighted words by length (longest first) to avoid partial matches
    const sortedWords = [...highlightedWords].sort((a, b) => b.length - a.length);
    
    sortedWords.forEach(word => {
      const regex = new RegExp(`\\b${word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
      highlightedText = highlightedText.replace(regex, (match) => `<span class="text-orange-500 font-semibold">${match}</span>`);
    });
    
    return highlightedText;
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Initialize with welcome message
  useEffect(() => {
    setMessages([
      {
        id: 1,
        type: "bot",
        content: "👋 **Welcome to Nawabi Khana!** 🌶️\n\n🍽️ Authentic Indian Cuisine in Castel San Giovanni, Italy\n✅ 100% Halal Certified | 📅 Opening September 2025\n\n💬 Ask me about: Menu • Location • Hours • Contact\n👨‍🍳 Owner: Abdulrehman Gujjar | 📞 +39 3510505298\n\n🔥 Ready to help!",
        timestamp: new Date(),
      },
    ]);
  }, []);

  const generateAIResponse = async (userMessage) => {
    setIsLoading(true);
    
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);
      
      const prompt = `You are an AI assistant for Nawabi Khana restaurant. ${developerInstructions}

Restaurant Information:
- Name: ${restaurantInfo.name}
- Cuisine: ${restaurantInfo.cuisine}
- Specialties: ${restaurantInfo.specialties}
- Location: ${restaurantInfo.location}
- Phone: ${restaurantInfo.phone}
- Instagram: ${restaurantInfo.instagram}
- Owner: ${restaurantInfo.owner}
- Opening: ${restaurantInfo.opening}
- Halal: ${restaurantInfo.halal}
- Features: ${restaurantInfo.features}

Menu Information:
- Categories: ${menuInfo.categories.join(', ')}
- Antipasto: ${menuInfo.antipasto.join(', ')}
- Grigliata (Tandoori): ${menuInfo.grigliata.join(', ')}
- Piatti Carne (Meat Dishes): ${menuInfo.piatti_carne.join(', ')}
- Piatti Vegetariani (Vegetarian): ${menuInfo.piatti_vegetariani.join(', ')}
- Price Range: ${menuInfo.price_range}
- Highlights: ${menuInfo.highlights.join(', ')}

User Question: ${userMessage}

IMPORTANT: Keep responses SHORT and CONCISE (max 50-80 words). Be direct and to the point. Use emojis sparingly. Focus on answering the specific question asked. Don't repeat information unless necessary. Use the actual menu items when discussing food.`;

      const response = await fetch(`https://text.pollinations.ai/${encodeURIComponent(prompt)}`, {
        method: 'GET',
        headers: {
          'Accept': 'text/plain',
        },
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const aiResponse = await response.text();
      
      // Validate response length
      if (aiResponse.length < 10 || aiResponse.length > 2000) {
        throw new Error('Response too short or too long');
      }

      return aiResponse;
    } catch (error) {
      if (error.name === 'AbortError') {
        return "I'm taking a bit longer than usual to respond. Please try asking your question again!";
      }
      console.error('AI Response Error:', error);
      return getFallbackResponse(userMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const getFallbackResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('menu') || lowerMessage.includes('food') || lowerMessage.includes('dish')) {
      return "🍽️ **Menu:** Antipasto (Samosa, Pakora), Grigliata (Chicken Tikka, Tandoori), Piatti Carne (Butter Chicken, Korma), Piatti Vegetariani (Paneer, Dal). Price: €4-22. All Halal! 📞 +39 3510505298";
    } else if (lowerMessage.includes('location') || lowerMessage.includes('address') || lowerMessage.includes('where')) {
      return "📍 **Location:** Corso Giacomo Matteotti, 44, Castel San Giovanni, Italy. Opening September 2025! 🗺️";
    } else if (lowerMessage.includes('hours') || lowerMessage.includes('open') || lowerMessage.includes('time')) {
      return "⏰ **Hours:** Opening September 2025! Monday-Saturday: 11:00 AM - 11:00 PM. Sunday: Closed. 📅";
    } else if (lowerMessage.includes('halal') || lowerMessage.includes('certified')) {
      return "🕌 **100% Halal Certified** - Strict guidelines, certified ingredients, no cross-contamination. Trusted by Muslim community! ✅";
    } else if (lowerMessage.includes('phone') || lowerMessage.includes('call') || lowerMessage.includes('contact')) {
      return "📞 **Contact:** Phone: +39 3510505298 | Email: nawabikhana@gmail.com | Instagram: @nawabi_khanaa";
    } else if (lowerMessage.includes('instagram') || lowerMessage.includes('social')) {
      return "📱 **Social:** Instagram @nawabi_khanaa | TikTok @nawabikhana | WhatsApp +39 3510505298";
    } else if (lowerMessage.includes('owner') || lowerMessage.includes('who owns') || lowerMessage.includes('founder')) {
      return "👨‍🍳 **Owner:** Abdulrehman Gujjar - Dedicated to serving authentic Indian cuisine in Castel San Giovanni! 🌶️";
    } else if (lowerMessage.includes('developer') || lowerMessage.includes('who made') || lowerMessage.includes('built')) {
      return "💻 **Developer:** Karim El Assali - Created this website and AI assistant for Nawabi Khana! 🚀";
    } else {
      return "👋 **Nawabi Khana** - Authentic Indian cuisine in Castel San Giovanni, Italy. Opening September 2025! Ask about menu, location, hours, or contact info! 🌶️";
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue.trim();
    setInputValue("");

    // Add user message
    const userMsg = {
      id: Date.now(),
      type: "user",
      content: userMessage,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMsg]);

    // Show typing indicator
    setIsTyping(true);

    try {
      const aiResponse = await generateAIResponse(userMessage);
      
      // Add AI response
      const botMsg = {
        id: Date.now() + 1,
        type: "bot",
        content: aiResponse,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error('Error generating response:', error);
      const errorMsg = {
        id: Date.now() + 1,
        type: "bot",
        content: "I apologize, but I'm having trouble responding right now. Please try again in a moment! 😔",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    console.log('Toggle chat clicked, current state:', isOpen);
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Floating AI Button */}
      <motion.div
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999]"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <motion.button
          onClick={toggleChat}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full shadow-2xl border-4 border-white/20 flex items-center justify-center text-white hover:from-amber-700 hover:to-orange-700 transition-all duration-300"
          aria-label="Open AI Assistant"
          aria-expanded={isOpen}
        >
          <img 
            src="/premuim_logo.png" 
            alt="Nawabi Khana AI" 
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
          />
        </motion.button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, type: "spring" }}
            className="fixed bg-white rounded-2xl shadow-2xl border border-gray-200 z-[9998] overflow-hidden 
                     w-[calc(100vw-32px)] h-[calc(100vh-120px)] max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl
                     bottom-20 sm:bottom-24 right-4 sm:right-6 md:right-6
                     max-h-[600px] sm:max-h-[500px] flex flex-col"
            role="dialog"
            aria-labelledby="chat-title"
            aria-describedby="chat-description"
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-amber-600 to-orange-600 p-3 sm:p-4 text-white flex-shrink-0">
              <div className="flex items-center justify-between mb-2 sm:mb-3">
                <h3 id="chat-title" className="text-base sm:text-lg font-bold flex items-center">
                  <img src="/premuim_logo.png" alt="Logo" className="w-5 h-5 sm:w-6 sm:h-6 mr-2 rounded-full" />
                  <span className="hidden sm:inline">Nawabi Khana AI Assistant</span>
                  <span className="sm:hidden">AI Assistant</span>
                </h3>
                <button
                  onClick={toggleChat}
                  className="text-white hover:text-gray-200 transition-colors p-1"
                  aria-label="Close chat"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
              
              <p id="chat-description" className="text-xs sm:text-sm text-amber-100">
                Ask me anything about Nawabi Khana restaurant!
              </p>
            </div>

            {/* Messages Area with Logo Background */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-4 bg-gray-50 relative min-h-0">
              {/* Restaurant Logo Background - Only in messages area */}
              <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
                <img 
                  src="/premuim_logo.png" 
                  alt="Background Logo" 
                  className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain"
                />
              </div>
              
              {/* Menara (Mughal Domes) Background Elements */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Central Dome */}
                <motion.div
                  animate={{
                    opacity: [0.03, 0.06, 0.03],
                    scale: [1, 1.01, 1],
                  }}
                  transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32"
                >
                  <div className="w-full h-full bg-gradient-to-b from-amber-400/20 to-orange-600/20 rounded-full border border-amber-500/30"></div>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-amber-500/40 rounded-full"></div>
                </motion.div>
                
                {/* Left Dome */}
                <motion.div
                  animate={{
                    opacity: [0.02, 0.05, 0.02],
                    scale: [1, 1.005, 1],
                  }}
                  transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute top-1/3 left-1/4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
                >
                  <div className="w-full h-full bg-gradient-to-b from-red-500/20 to-red-700/20 rounded-full border border-red-500/30"></div>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500/40 rounded-full"></div>
                </motion.div>
                
                {/* Right Dome */}
                <motion.div
                  animate={{
                    opacity: [0.02, 0.05, 0.02],
                    scale: [1, 1.005, 1],
                  }}
                  transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 4 }}
                  className="absolute top-1/3 right-1/4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
                >
                  <div className="w-full h-full bg-gradient-to-b from-red-500/20 to-red-700/20 rounded-full border border-red-500/30"></div>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500/40 rounded-full"></div>
                </motion.div>
              </div>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.type === "user" ? "justify-end" : "justify-start"} mb-3 relative z-10`}
                >
                  <div
                    className={`max-w-[85%] p-2 sm:p-3 rounded-2xl ${
                      message.type === "user"
                        ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white"
                        : "bg-white text-gray-800 border border-gray-200"
                    } shadow-sm`}
                  >
                    <div 
                      className="text-xs sm:text-sm leading-relaxed whitespace-pre-line"
                      dangerouslySetInnerHTML={{ 
                        __html: message.type === "bot" 
                          ? highlightWords(message.content.split('**').map((part, index) => 
                              index % 2 === 1 ? `<strong>${part}</strong>` : part
                            ).join(''))
                          : message.content.split('**').map((part, index) => 
                              index % 2 === 1 ? `<strong>${part}</strong>` : part
                            ).join('')
                      }}
                    />
                    <p className={`text-xs mt-1 sm:mt-2 ${
                      message.type === "user" ? "text-amber-100" : "text-gray-500"
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </motion.div>
              ))}
              
              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start mb-3 relative z-10"
                >
                  <div className="bg-white text-gray-800 border border-gray-200 p-2 sm:p-3 rounded-2xl shadow-sm">
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1">
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                          className="w-2 h-2 bg-amber-500 rounded-full"
                        />
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                          className="w-2 h-2 bg-amber-500 rounded-full"
                        />
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                          className="w-2 h-2 bg-amber-500 rounded-full"
                        />
                      </div>
                      <span className="text-xs sm:text-sm text-gray-500">AI is <span className="text-orange-500 font-semibold">typing</span>...</span>
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 sm:p-4 bg-white border-t border-gray-200 relative z-10 flex-shrink-0">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me about our restaurant..."
                  disabled={isLoading}
                  aria-label="Type your message"
                  className="flex-1 px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent disabled:opacity-50 transition-all duration-200"
                />
                <motion.button
                  onClick={handleSendMessage}
                  disabled={isLoading || !inputValue.trim()}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-3 sm:px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-xl hover:from-amber-600 hover:to-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center"
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
              
              {/* Quick Actions */}
              <div className="mt-2 sm:mt-3 flex flex-wrap gap-1 sm:gap-2">
                {["Menu", "Location", "Hours", "Halal"].map((action) => (
                  <motion.button
                    key={action}
                    onClick={() => setInputValue(action)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-2 sm:px-3 py-1 text-xs bg-amber-100 text-amber-700 rounded-full hover:bg-amber-200 transition-colors duration-200"
                  >
                    {action}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
