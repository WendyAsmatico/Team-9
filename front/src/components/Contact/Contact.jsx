import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique pour gérer la soumission du formulaire
    console.log('Formulaire soumis:', formData);
  };

  return (
    <main>
      <div className="container mx-auto">
        <section className="flex flex-wrap justify-center items-center rounded-lg p-6 max-w-7xl mx-auto">
          <div className="text-4xl font-bold p-14">
            <h1>Contactez-nous</h1>
          </div>

          <form className="flex flex-col p-5" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nom"
              className="p-2 mt-5"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="p-2 mt-5"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="p-2 mt-5"
            />
            <button type="submit" className="bg-custom-green-dark text-white p-2 mt-5">Envoyer</button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default Contact;