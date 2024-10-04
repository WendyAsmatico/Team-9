import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const TreeMap = () => {
  const [trees, setTrees] = useState([]);
  const mapRef = React.useRef(null);

  useEffect(() => {
    const fetchTrees = async () => {
      try {
        //const response = await fetch('https://cors-anywhere.herokuapp.com/https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/les-arbres/records?limit=50');

        const response = await fetch('https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/les-arbres/records?limit=20');
        const data = await response.json();

        if (data.results && data.results.length > 0) {
          setTrees(data.results); // Modifié pour correspondre au format de données correct
          console.log('Les premières données récupérées:', data.results.slice(0, 5));
         


        } else {
          console.error("Aucune donnée trouvée ou format de données incorrect.");
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des arbres:", error);
      }
    };

    fetchTrees();
  }, []);


  useEffect(() => {
    if (!mapRef.current) return; 

    const map = L.map(mapRef.current).setView([48.8566, 2.3522], 13);

    // let tree = L.marker([48.85581660803292, 2.364861432727826]).addTo(map);
    
    // Example of the data structure
      const treeData = [
        { lat: 48.85581660803292, lng: 2.364861432727826 },
        { lat: 48.87858659184658, lng: 2.407595994735102 },
        // Add more tree coordinates here
      ];

      // Loop through each tree and add a marker for each one
      treeData.forEach(tree => {
        L.marker([tree.lat, tree.lng]).addTo(map);
      });


    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap',
    }).addTo(map);

    const markerLayer = L.layerGroup().addTo(map);

    trees.forEach((tree) => {
      const { geometry, fields } = tree; // Changement pour correspondre à la structure de l'API
      if (geometry && geometry.coordinates) {
        const [lng, lat] = geometry.coordinates;
        const marker = L.marker([lat, lng]).addTo(map);
        if (lat && lng) {
          const marker = L.marker([lat, lng]).addTo(markerLayer);

          // Créer le contenu du popup
          const popupContent = `
            <b>Espèce :</b> ${fields.libellefrancais || 'Inconnu'}<br>
            <b>Type d'emplacement :</b> ${fields.typeemplacement || 'Non renseigné'}<br>
            <b>Arrondissement :</b> ${fields.arrondissement || 'Non renseigné'}<br>
            <b>Adresse :</b> ${fields.adresse || 'Non renseignée'}<br>
            <b>Hauteur :</b> ${fields.hauteurenm ? fields.hauteurenm + ' m' : 'Non renseignée'}<br>
            <b>Circonférence :</b> ${fields.circonferenceencm ? fields.circonferenceencm + ' cm' : 'Non renseignée'}
          `;
        
          const popup = L.popup().setContent(popupContent);
          marker.bindPopup(popupContent);
        } else {
          console.error("Coordonnées invalides :", geometry.coordinates);
        }
      }
    });

    return () => {
      map.remove();
    };
  }, [trees]);

  return <div ref={mapRef} id="map" style={{ height: '400px', width: '100%' }}></div>;
};

export default TreeMap;