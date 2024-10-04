import React from 'react'
import parisSansArbre from '../../assets/97246295-arbres-sans-feuilles-et-allée-dans-un-parc-de-paris-pendant-l-hiver.jpg'
import parisAvecArbre from '../../assets/image_processing20240522-1389-1s8m3wr.jpg'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import panneaux from '../../assets/ne-pas-couper-arbres-signe-ne-pas-detruire-foret-symbole-dessin-par-illustration-arreter-couper-arbres-signe_872756-177 - copie.png'
import ChatBot from '../ChatBot';  

const Accueil = () => {
  return (
    <div className="p-5">
      <div className="">
        <div className="p-5">
          <p className="text-black text-xl text-center">
            Bienvenue sur notre site web de gestion de parcs et de forêts<br />
            Nous sommes dédiés à la protection et à la gestion des arbres dans la ville de Paris.
          </p>
        </div>
      </div>
      <section className="flex flex-wrap justify-center items-center rounded-lg mx-auto mt-8">
        <div className="flex items-center">
          <p className="p-5">
            Paris est une ville verdoyante, avec des parcs et des forêts répartis dans toutes les quartiers <br />
            Elle est aussi une ville historique, avec des monuments et des lieux touristiques.
          </p>
          <img src={panneaux} alt="panneaux" width={100} height={100} />
        </div>
        <p>
          C'est pourquoi nous avons créé ce site web pour valoriser la décarbonisation.
        </p>
      </section>
      <div className="flex flex-col items-center mx-auto">
        <ReactCompareSlider
          itemOne={<ReactCompareSliderImage src={parisSansArbre} alt="Image sans arbre" />}
          itemTwo={<ReactCompareSliderImage src={parisAvecArbre} alt="Image avec arbre" />}
          style={{ width: '60%', height: 'auto' }}
        />
        <p className="font-bold mt-4">La visualisation de la ville de Paris</p>
      </div>
      {/* Ajout du bouton pour ouvrir la modale */}
      <div className="flex justify-center mt-10">
        <ChatBot />
      </div>
    </div>
  )
}

export default Accueil;
