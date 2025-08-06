import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Send, X, Bot, User } from "lucide-react";

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Ciao! Sono GFC AI, il tuo assistente personale. Come posso aiutarti oggi?",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const [memory, setMemory] = useState([]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      // Don't auto-focus on mobile to prevent keyboard from opening
      if (window.innerWidth > 768) {
        inputRef.current?.focus();
      }
    }
  }, [isOpen]);

  useEffect(() => {
    if (messages.length > 1) {
      setMemory(prev => [...prev, messages[messages.length - 1]]);
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = {
      id: Date.now(),
      text: inputValue.trim(),
      sender: "user",
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
        const instructions = 
        `
        
You are 'GFC Assistant', the official AI representative for GFC (Grill Fried Chicken). Your primary role is to assist customers by providing accurate information and maintaining a friendly, welcoming, and helpful personality.

Core Identity & Persona:

Name: GFC Assistant

Represents: GFC (Grill Fried Chicken)

Location: Castel San Giovanni, Piacenza, Italy.

Tone: Friendly, professional, and welcoming.

Key People: The restaurant owner is Abdul Rahman Gujjer. The AI assistant was developed by Karim El Assali.

Core Capabilities & Guidelines:

You must answer all questions based on the specific information provided in this knowledge base.

You are empowered to answer questions about the menu, hours, location, and how to order.

If you do not know the answer to a specific question (e.g., details about an ingredient), politely state that you don't have that information and recommend the user contact the restaurant directly via WhatsApp.

Always present contact information and links in a clean, easy-to-read list.

Knowledge Base: Restaurant Information

Restaurant Name: GFC (Grill Fried Chicken)

Cuisine Focus: We specialize in delicious grilled and fried chicken.

Halal Certification: All our food is certified Halal.

Opening Hours: [11.30 - 23.00]

Contact & Social Media Links:

WhatsApp for Orders: To place an order directly, please contact us on WhatsApp at 351 050 5298.

Instagram: Follow our updates and see our food at @grillfriedchicken.

TikTok: Find our latest videos at @grillfriedchicken.

Email: For inquiries, you can reach us at grillfriedchicken@gmail.com.

Location: You can find us on Google Maps by searching for "GFC Grill Fried Chicken, Castel San Giovanni, PC, Italy".
MY QUESTION IS : ${inputValue.trim()}
        `
      const response = await fetch(`https://text.pollinations.ai/${instructions}`);
      
      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const aiResponse = await response.text();
      
      const aiMessage = {
        id: Date.now() + 1,
        text: aiResponse || "Mi dispiace, non sono riuscito a elaborare la tua richiesta. Riprova.",
        sender: "ai",
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, aiMessage]);

    } catch (error) {
      console.error('Error calling AI endpoint:', error);
      const errorMessage = {
        id: Date.now() + 1,
        text: "Mi dispiace, sto avendo problemi di connessione in questo momento. Riprova più tardi.",
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <motion.button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-white overflow-hidden"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="logo"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-10 h-10 rounded-full overflow-hidden"
            >
              <img 
                src="/premuim_logo.avif" 
                alt="GFC Logo" 
                className="w-full h-full object-cover"
                onError={(e) => { 
                  e.target.onerror = null; 
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="w-full h-full bg-orange-500 flex items-center justify-center" style={{display: 'none'}}>
                <MessageCircle size={20} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop with blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm"
              onClick={toggleChat}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed bottom-24 right-6 z-40 w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col"
            >
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-t-2xl">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot size={16} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">GFC AI Assistente</h3>
                  <p className="text-sm opacity-90">Sempre qui per aiutarti</p>
                </div>
              </div>
            </div>

            <div 
            style={{
                backgroundImage: "url('/premuim_logo.avif')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
            }}
            className="flex-1 overflow-y-auto  p-4 space-y-4">
              {/* Quick Prompts */}
              {messages.length === 1 && (
                <div className="space-y-3">
                  <p className="text-base text-gray-600 font-medium">Suggerimenti rapidi:</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Chi siamo?",
                      "Dove ci troviamo?",
                      "Quali sono i vostri orari?"
                    ].map((prompt, index) => (
                      <motion.button
                        key={index}
                        onClick={() => {
                          setInputValue(prompt);
                          setTimeout(() => sendMessage(), 100);
                        }}
                        className="px-4 py-2 bg-gray-100 hover:bg-orange-100 text-gray-700 hover:text-orange-700 rounded-full text-base font-medium transition-colors duration-200 border border-gray-200 hover:border-orange-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {prompt}
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}
              
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-4 rounded-2xl ${
                      message.sender === "user"
                        ? "bg-gradient-to-r from-orange-500 to-red-600 text-white"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    <div className="flex items-start space-x-2">
                      {message.sender === "ai" && (
                        <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <Bot size={12} className="text-white" />
                        </div>
                      )}
                      <div className="flex-1">
                        <div className="text-base leading-relaxed whitespace-pre-wrap break-words space-y-1">
                          {message.text.split('\n').map((line, index) => {
                            const trimmedLine = line.trim();
                            const isListItem = trimmedLine.match(/^[-•*]\s/);
                            const isNumberedItem = trimmedLine.match(/^\d+\.\s/);
                            
                            return (
                              <React.Fragment key={index}>
                                {isListItem || isNumberedItem ? (
                                  <div className="flex items-start space-x-2 mb-1">
                                    <span className="text-orange-500 mt-1">
                                      {isListItem ? '•' : `${trimmedLine.match(/^\d+/)[0]}.`}
                                    </span>
                                    <span className="flex-1">{trimmedLine.replace(/^[-•*]\s|^\d+\.\s/, '')}</span>
                                  </div>
                                ) : (
                                  <span className={trimmedLine ? 'block' : 'block h-2'}>{line}</span>
                                )}
                              </React.Fragment>
                            );
                          })}
                        </div>
                        <p className="text-sm opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                      {message.sender === "user" && (
                        <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <User size={12} className="text-white" />
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-gray-100 text-gray-800 p-3 rounded-2xl">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                        <Bot size={12} className="text-white" />
                      </div>
                      <div className="flex space-x-1">
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                          className="w-2 h-2 bg-gray-400 rounded-full"
                        />
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                          className="w-2 h-2 bg-gray-400 rounded-full"
                        />
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                          className="w-2 h-2 bg-gray-400 rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Scrivi il tuo messaggio..."
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-base"
                  disabled={isLoading}
                />
                <motion.button
                  onClick={sendMessage}
                  disabled={!inputValue.trim() || isLoading}
                  className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send size={16} />
                </motion.button>
              </div>
            </div>
          </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant; 