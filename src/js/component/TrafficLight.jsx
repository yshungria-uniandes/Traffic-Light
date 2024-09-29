import React, { useState } from "react";

const TrafficLight = () => {
  // Estado para almacenar el color seleccionado
  const [selected, setSelected] = useState("");

  // Función para manejar la selección del color
  const handleColor = (color) => {
    // Si el color ya está seleccionado, se deselecciona, de lo contrario se selecciona
    setSelected(selected === color ? "" : color);
  };

  // Array de colores disponibles para iterar y renderizar las luces
  const colors = ["red", "yellow", "green"];

  return (
    <>
      <div className="top"></div>
      <div className="container">
        {colors.map((color) => (
          <div
            key={color} // Cada elemento debe tener una clave única
            className={`${color} light ${selected === color ? "selected" : "opacity"}`} // Clase dinámica para aplicar estilos según la selección
            onClick={() => handleColor(color)} // Llamada a la función handleColor con el color actual
          ></div>
        ))}
      </div>
    </>
  );
};


export default TrafficLight;
