import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, Sparkles, ChefHat, MapPin, Clock, Phone, Star } from "lucide-react";

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
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
        content: "👋 Welcome to Nawabi Khana! I'm your AI assistant. Ask me anything about our restaurant, menu, location, or opening hours! 🌶️",
        timestamp: new Date(),
      },
    ]);
  }, []);

  const restaurantInfo = {
    name: "Nawabi Khana",
    cuisine: "Fast Food & Halal",
    specialties: ["Spicy Burgers", "Chicken Dishes", "Halal Certified"],
    location: "Corso Giacomo Matteotti, 44, Castel San Giovanni",
    phone: "+39 3510505298",
    hours: "11:00 AM - 11:00 PM (Mon-Sat)",
    features: ["Halal Certified", "Spicy Specialties", "Fast Service", "Fresh Ingredients"],
  };

  const generateAIResponse = async (userMessage) => {
    try {
      // Use Pollinations AI endpoint with timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
      
      const prompt = `Restaurant information: ${restaurantInfo.name} - ${restaurantInfo.cuisine}. Specialties: ${restaurantInfo.specialties.join(', ')}. Location: ${restaurantInfo.location}. Hours: ${restaurantInfo.hours}. Features: ${restaurantInfo.features.join(', ')}. User question: ${userMessage}. Provide a helpful, friendly response about our restaurant.`;
      
      const response = await fetch(`https://text.pollinations.ai/${encodeURIComponent(prompt)}`, {
        signal: controller.signal,
        headers: {
          'Accept': 'text/plain',
        }
      });
      
      clearTimeout(timeoutId);
      
      if (response.ok) {
        const aiText = await response.text();
        const cleanedText = aiText.trim();
        
        // Validate AI response
        if (cleanedText && cleanedText.length > 10 && cleanedText.length < 500) {
          return cleanedText;
        } else {
          return getFallbackResponse(userMessage);
        }
      } else {
        return getFallbackResponse(userMessage);
      }
    } catch (error) {
      console.error("AI generation error:", error);
      if (error.name === 'AbortError') {
        return "I'm taking a bit longer than usual to respond. Let me give you a quick answer: " + getFallbackResponse(userMessage);
      }
      return getFallbackResponse(userMessage);
    }
  };

  const getFallbackResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes("menu") || lowerMessage.includes("food") || lowerMessage.includes("dish")) {
      return "🍔 Our menu features delicious spicy burgers, crispy chicken dishes, and fresh sides. All our food is halal certified and made with premium ingredients! What would you like to know about?";
    } else if (lowerMessage.includes("location") || lowerMessage.includes("address") || lowerMessage.includes("where")) {
      return `📍 We're located at ${restaurantInfo.location}. You can find us easily on Google Maps or use our WhatsApp for directions!`;
    } else if (lowerMessage.includes("hours") || lowerMessage.includes("open") || lowerMessage.includes("time")) {
      return `🕐 We're open ${restaurantInfo.hours}. Come visit us for lunch or dinner!`;
    } else if (lowerMessage.includes("phone") || lowerMessage.includes("call") || lowerMessage.includes("contact")) {
      return `📞 You can reach us at ${restaurantInfo.phone} or use WhatsApp for faster service!`;
    } else if (lowerMessage.includes("halal") || lowerMessage.includes("certified")) {
      return "✅ Yes! We are proudly halal certified. All our ingredients and preparation methods follow halal guidelines.";
    } else if (lowerMessage.includes("spicy") || lowerMessage.includes("hot")) {
      return "🌶️ Our specialty! We're famous for our spicy burgers and hot chicken dishes. Feel the rich taste! 🔥";
    } else if (lowerMessage.includes("price") || lowerMessage.includes("cost") || lowerMessage.includes("expensive")) {
      return "💰 We offer great value for money! Our prices are competitive and you get quality halal food. Check our menu for current prices!";
    } else {
      return "🤔 I'm here to help! You can ask me about our menu, location, opening hours, halal certification, or anything else about Nawabi Khana. What would you like to know?";
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = {
      id: Date.now(),
      type: "user",
      content: inputValue.trim(),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(async () => {
      const aiResponse = await generateAIResponse(userMessage.content);
      
      const botMessage = {
        id: Date.now() + 1,
        type: "bot",
        content: aiResponse,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Floating AI Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <motion.button
          onClick={toggleChat}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              toggleChat();
            }
          }}
          aria-label={isOpen ? "Close AI chat" : "Open AI chat"}
          aria-expanded={isOpen}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="relative w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full shadow-2xl border-2 border-white/20 flex items-center justify-center group focus:outline-none focus:ring-4 focus:ring-orange-300/50"
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? (
              <X className="w-8 h-8 text-white" />
            ) : (
              <Bot className="w-8 h-8 text-white" />
            )}
          </motion.div>
          
          {/* Pulsing ring effect */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 border-2 border-orange-300 rounded-full"
          />
          
          {/* Logo badge */}
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full border-2 border-orange-500 flex items-center justify-center shadow-lg">
            <img 
              src="/premuim_logo.png" 
              alt="Nawabi Khana" 
              className="w-6 h-6 rounded-full object-cover"
            />
          </div>
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
            className="fixed bottom-24 right-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 z-40 overflow-hidden"
            role="dialog"
            aria-labelledby="chat-title"
            aria-describedby="chat-description"
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <img 
                    src="/premuim_logo.png" 
                    alt="Nawabi Khana" 
                    className="w-8 h-8 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 id="chat-title" className="font-bold text-lg">Nawabi Khana AI</h3>
                  <p id="chat-description" className="text-orange-100 text-sm">Your Restaurant Assistant</p>
                </div>
              </div>
              <motion.button
                onClick={toggleChat}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="text-white hover:text-orange-200 transition-colors"
              >
                <X className="w-6 h-6" />
              </motion.button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-4 space-y-4 overflow-y-auto max-h-[380px] bg-gray-50">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.type === "user"
                        ? "bg-gradient-to-r from-orange-500 to-red-600 text-white"
                        : "bg-white text-gray-800 border border-gray-200"
                    } shadow-sm`}
                  >
                    <p className="text-sm leading-relaxed">{message.content}</p>
                    <p className={`text-xs mt-2 ${
                      message.type === "user" ? "text-orange-100" : "text-gray-500"
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
                  className="flex justify-start"
                >
                  <div className="bg-white text-gray-800 border border-gray-200 p-3 rounded-2xl shadow-sm">
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1">
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                          className="w-2 h-2 bg-orange-500 rounded-full"
                        />
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                          className="w-2 h-2 bg-orange-500 rounded-full"
                        />
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                          className="w-2 h-2 bg-orange-500 rounded-full"
                        />
                      </div>
                      <span className="text-sm text-gray-500">AI is typing...</span>
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-200">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me about our restaurant..."
                  disabled={isLoading}
                  aria-label="Type your message"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent disabled:opacity-50 transition-all duration-200"
                />
                <motion.button
                  onClick={handleSendMessage}
                  disabled={isLoading || !inputValue.trim()}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl hover:from-orange-600 hover:to-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center"
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
              
              {/* Quick Actions */}
              <div className="mt-3 flex flex-wrap gap-2">
                {["Menu", "Location", "Hours", "Halal"].map((action) => (
                  <motion.button
                    key={action}
                    onClick={() => setInputValue(action)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-3 py-1 text-xs bg-orange-100 text-orange-700 rounded-full hover:bg-orange-200 transition-colors duration-200"
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

export default AIAssistant;
