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
    - The developer is: Karim El Assali
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
    cuisine: "Authentic Halal Fast Food",
    specialties: "Spicy burgers, pizzas, and traditional Pakistani cuisine",
    location: "Castel San Giovanni, Italy",
    phone: "+39 3510505298",
    instagram: "@nawabi_khanaa",
    owner: "Abdulrehman Gujjar",
    developer: "Karim El Assali",
    opening: "Opening Soon - September 2025",
    halal: "Halal Certified",
    features: "Premium Quality, Spicy Excellence, Authentic Taste"
  };

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
- Developer: ${restaurantInfo.developer}
- Opening: ${restaurantInfo.opening}
- Halal: ${restaurantInfo.halal}
- Features: ${restaurantInfo.features}

User Question: ${userMessage}

Please provide a helpful, informative response about Nawabi Khana restaurant. Be friendly, professional, and accurate with all the information provided.`;

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
      return "Our menu features authentic Pakistani cuisine with spicy burgers, pizzas, and traditional dishes. All our food is Halal certified and made with premium ingredients! 🌶️🍔🍕";
    } else if (lowerMessage.includes('location') || lowerMessage.includes('address') || lowerMessage.includes('where')) {
      return "We're located in Castel San Giovanni, Italy! You can find us at Corso Giacomo Matteotti, 44. We're excited to serve the local community with authentic Halal cuisine! 📍🇮🇹";
    } else if (lowerMessage.includes('hours') || lowerMessage.includes('open') || lowerMessage.includes('time')) {
      return "We're opening soon in September 2025! We'll be serving from 11:00 AM to 11:00 PM, Monday through Saturday. Stay tuned for our grand opening! 🎉⏰";
    } else if (lowerMessage.includes('halal') || lowerMessage.includes('certified')) {
      return "Yes! We are proudly Halal certified. All our ingredients and preparation methods follow strict Halal guidelines. You can trust that our food meets the highest standards of Halal certification! ✨🕌";
    } else if (lowerMessage.includes('phone') || lowerMessage.includes('call') || lowerMessage.includes('contact')) {
      return "You can reach us at +39 3510505298. Feel free to call us for any questions about our menu, location, or opening! 📞";
    } else if (lowerMessage.includes('instagram') || lowerMessage.includes('social')) {
      return "Follow us on Instagram @nawabi_khanaa for updates, behind-the-scenes content, and special announcements! 📱✨";
    } else {
      return "Thank you for your question! I'm here to help with any information about Nawabi Khana restaurant. Feel free to ask about our menu, location, hours, or anything else! 😊";
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
        className="fixed bottom-6 right-6 z-[9999] md:bottom-6 md:right-6 bottom-4 right-4"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <motion.button
          onClick={toggleChat}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="w-16 h-16 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full shadow-2xl border-4 border-white/20 flex items-center justify-center text-white hover:from-amber-700 hover:to-orange-700 transition-all duration-300"
          aria-label="Open AI Assistant"
          aria-expanded={isOpen}
        >
          <img 
            src="/premuim_logo.png" 
            alt="Nawabi Khana AI" 
            className="w-10 h-10 rounded-full object-cover"
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
            className="fixed bg-white rounded-2xl shadow-2xl border border-gray-200 z-[9998] overflow-hidden md:w-96 md:h-[500px] w-[calc(100vw-32px)] h-[400px] bottom-24 right-6 md:bottom-24 md:right-6"
            role="dialog"
            aria-labelledby="chat-title"
            aria-describedby="chat-description"
            style={{
              position: 'fixed',
              bottom: '96px',
              right: '24px',
              width: '384px',
              height: '500px',
              zIndex: 9998,
              maxHeight: 'calc(100vh - 120px)',
              '@media (max-width: 768px)': {
                bottom: '80px',
                right: '16px',
                width: 'calc(100vw - 32px)',
                height: '400px',
              }
            }}
          >
            {/* Restaurant Logo Background */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <img 
                src="/premuim_logo.png" 
                alt="Background Logo" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Chat Header */}
            <div className="bg-gradient-to-r from-amber-600 to-orange-600 p-4 text-white">
              <div className="flex items-center justify-between mb-3">
                <h3 id="chat-title" className="text-lg font-bold flex items-center">
                  <img src="/premuim_logo.png" alt="Logo" className="w-6 h-6 mr-2 rounded-full" />
                  Nawabi Khana AI Assistant
                </h3>
                <button
                  onClick={toggleChat}
                  className="text-white hover:text-gray-200 transition-colors"
                  aria-label="Close chat"
                >
                  ✕
                </button>
              </div>
              
              <p id="chat-description" className="text-sm text-amber-100">
                Ask me anything about Nawabi Khana restaurant!
              </p>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50 relative z-10">
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
                        ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white"
                        : "bg-white text-gray-800 border border-gray-200"
                    } shadow-sm`}
                  >
                    <p className="text-sm leading-relaxed">{message.content}</p>
                    <p className={`text-xs mt-2 ${
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
                  className="flex justify-start"
                >
                  <div className="bg-white text-gray-800 border border-gray-200 p-3 rounded-2xl shadow-sm">
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
                      <span className="text-sm text-gray-500">AI is typing...</span>
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-200 relative z-10">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me about our restaurant..."
                  disabled={isLoading}
                  aria-label="Type your message"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent disabled:opacity-50 transition-all duration-200"
                />
                <motion.button
                  onClick={handleSendMessage}
                  disabled={isLoading || !inputValue.trim()}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-xl hover:from-amber-600 hover:to-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center"
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
                    className="px-3 py-1 text-xs bg-amber-100 text-amber-700 rounded-full hover:bg-amber-200 transition-colors duration-200"
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
