// import React, { useEffect, useState } from 'react';
// import ChatBot from '../ChatBot';

// const LandingPage = () => {
//   const [activeSection, setActiveSection] = useState('about');

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = ['about', 'features', 'data', 'contact'];
//       const scrollPos = window.scrollY + 150;
//       const currentSection = sections.find((section) => {
//         const element = document.getElementById(section);
//         return (
//           element.offsetTop <= scrollPos &&
//           element.offsetTop + element.offsetHeight > scrollPos
//         );
//       });
//       if (currentSection) {
//         setActiveSection(currentSection);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500">
//       <header className="bg-white bg-opacity-90 shadow-md fixed w-full z-10">
//         <div className="container mx-auto px-6 py-4">
//           <nav className="flex items-center justify-between relative">
//             <h1 className="text-3xl font-bold text-green-600">BioDiversiCité</h1>
//             <ul className="flex space-x-4 relative">
//               <li className="relative">
//                 <a
//                   href="#about"
//                   className={`text-gray-600 hover:text-green-600 transition-colors duration-300 ${activeSection === 'about' ? 'text-green-600' : ''
//                     }`}
//                 >
//                   À propos
//                 </a>
//                 {activeSection === 'about' && (
//                   <div className="absolute bottom-0 left-0 h-1 w-full bg-green-600 transition-all duration-300"></div>
//                 )}
//               </li>
//               <li className="relative">
//                 <a
//                   href="#features"
//                   className={`text-gray-600 hover:text-green-600 transition-colors duration-300 ${activeSection === 'features' ? 'text-green-600' : ''
//                     }`}
//                 >
//                   Fonctionnalités
//                 </a>
//                 {activeSection === 'features' && (
//                   <div className="absolute bottom-0 left-0 h-1 w-full bg-green-600 transition-all duration-300"></div>
//                 )}
//               </li>
//               <li className="relative">
//                 <a
//                   href="#data"
//                   className={`text-gray-600 hover:text-green-600 transition-colors duration-300 ${activeSection === 'data' ? 'text-green-600' : ''
//                     }`}
//                 >
//                   Données
//                 </a>
//                 {activeSection === 'data' && (
//                   <div className="absolute bottom-0 left-0 h-1 w-full bg-green-600 transition-all duration-300"></div>
//                 )}
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </header>

//       <main className="pt-20">
//         <section id="hero" className="py-20">
//           <div className="container mx-auto px-6">
//             <div className="bg-white bg-opacity-90 rounded-lg shadow-xl p-8 max-w-4xl mx-auto">
//               <h2 className="text-4xl font-bold text-gray-800 mb-6">
//                 Générateur de Rapports sur la Biodiversité et le Climat en Ville
//               </h2>
//               <p className="text-xl text-gray-600 mb-8">
//                 Facilitez l'intégration de la biodiversité dans vos projets urbains grâce à notre générateur de rapports automatisé.
//               </p>
//               <div className="text-center">
//                 <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
//                   Commencer un rapport
//                 </button>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section id="about" className="py-20 bg-white">
//           <div className="container mx-auto px-6">
//             <h2 className="text-3xl font-bold text-gray-800 mb-8">À propos de BioDiversiCité</h2>
//             <p className="text-xl text-gray-600 mb-6">
//               BioDiversiCité s'inspire des projets innovants comme Ecoteka pour offrir une solution complète de gestion et d'analyse de la biodiversité urbaine. Notre plateforme permet aux urbanistes, aux écologistes et aux décideurs de créer des rapports détaillés sur l'état de la biodiversité dans leur ville.
//             </p>
//             <p className="text-xl text-gray-600">
//               En combinant des données locales avec des analyses avancées, nous aidons à prendre des décisions éclairées pour des villes plus vertes et plus durables.
//             </p>
//           </div>
//         </section>

//         <section id="features" className="py-20 bg-gray-100">
//           <div className="container mx-auto px-6">
//             <h2 className="text-3xl font-bold text-gray-800 mb-8">Fonctionnalités clés</h2>
//             <div className="grid md:grid-cols-3 gap-8">
//               <div className="bg-white p-6 rounded-lg shadow-md">
//                 <h3 className="text-xl font-semibold text-green-600 mb-4">Analyse de données</h3>
//                 <p className="text-gray-600">Intégration et analyse des données de biodiversité locales pour une vision précise de votre écosystème urbain.</p>
//               </div>
//               <div className="bg-white p-6 rounded-lg shadow-md">
//                 <h3 className="text-xl font-semibold text-green-600 mb-4">Évaluation climatique</h3>
//                 <p className="text-gray-600">Évaluation des impacts climatiques spécifiques à votre ville pour une meilleure adaptation aux changements.</p>
//               </div>
//               <div className="bg-white p-6 rounded-lg shadow-md">
//                 <h3 className="text-xl font-semibold text-green-600 mb-4">Recommandations</h3>
//                 <p className="text-gray-600">Génération de recommandations concrètes pour l'intégration de la biodiversité dans vos projets d'aménagement.</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section id="data" className="py-20 bg-white">
//           <div className="container mx-auto px-6">
//             <h2 className="text-3xl font-bold text-gray-800 mb-8">Nos sources de données</h2>
//             <div className="grid md:grid-cols-2 gap-8">
//               <div>
//                 <h3 className="text-2xl font-semibold text-green-600 mb-4">Ecoteka</h3>
//                 <p className="text-gray-600 mb-4">
//                   Nous nous inspirons de la plateforme Ecoteka pour la gestion et la visualisation des données sur les arbres urbains. Cette approche nous permet d'offrir des analyses détaillées sur la canopée urbaine et son impact sur la biodiversité.
//                 </p>
//                 <a
//                   href="https://www.natural-solutions.eu/ecoteka"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-500 hover:underline"
//                 >
//                   En savoir plus sur Ecoteka
//                 </a>
//               </div>
//               <div>
//                 <h3 className="text-2xl font-semibold text-green-600 mb-4">Arbres - Paris Data</h3>
//                 <p className="text-gray-600 mb-4">
//                   Nous utilisons les données ouvertes de la ville de Paris sur les arbres comme modèle pour notre analyse. Ces données comprennent des informations détaillées sur les espèces, leur localisation et leur état de santé.
//                 </p>
//                 <a
//                   href="https://opendata.paris.fr/explore/dataset/les-arbres/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-500 hover:underline"
//                 >
//                   Explorer les données des arbres de Paris
//                 </a>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>

//       <footer className="bg-gray-800 text-white py-8">
//         <div className="container mx-auto px-6 text-center">
//           <p>&copy; 2024 BioDiversiCité. Tous droits réservés.</p>
//         </div>
//       </footer>

//       <ChatBot />
//     </div>
//   );
// };

// export default LandingPage;
