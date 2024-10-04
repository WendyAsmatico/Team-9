import React, { useState, useRef, useEffect } from 'react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { text: input, user: true };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:3001/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input }),
      });
      const data = await response.json();
      const botMessage = { text: data.reply, user: false };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Bouton pour ouvrir la modal */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>

      {/* Modal du Chatbot */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl h-[80vh] flex flex-col">
            {/* En-tête de la modal */}
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-semibold">BioDiverCity</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Corps du chat */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.user ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs md:max-w-md rounded-lg p-3 ${message.user ? 'bg-green-500 text-white' : 'bg-gray-200'}`}>
                    {message.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-300 rounded-lg p-3 animate-pulse">
                    BioDiverCity est en train de répondre...
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Formulaire d'entrée */}
            <form onSubmit={handleSubmit} className="p-4 bg-gray-100 border-t border-gray-200">
              <div className="flex space-x-4">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Tapez votre message..."
                  className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
