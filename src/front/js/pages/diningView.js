import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/diningView.css";
import { Link, useNavigate } from "react-router-dom";
import { CardsDining } from "../component/cards/cardsDining";

// aqui usaremos cardsDining.js

export const DiningView = () => {
    const { store } = useContext(Context); // Accede al store global

    const tables = [
        { title: "Mesa 01", content: "Cliente mesa1001", order:{ }, buttonLabel: "Cerrar" },
        { title: "Mesa 02", content: "Cliente mesa2001 abierto\nPedidos: 3\nSubtotal: $45", buttonLabel: "Cerrar" },
        { title: "Mesa 03", content: "Cliente mesa3001 cerrado", buttonLabel: "Cerrar" },
        { title: "Mesa 04", content: "Cliente mesa4001 abierto\nPedidos: 2\nSubtotal: $30", buttonLabel: "Cerrar" },
        { title: "Mesa 05", content: "Cliente mesa5001 cerrado", buttonLabel: "Cerrar" },
        { title: "Mesa 06", content: "Cliente mesa6001 cerrado", buttonLabel: "Cerrar" }
    ];

    return (
        <div>
            <div className="container containerDining">
                
                {tables.map((table, index) => (
                    <CardsDining
                        key={index}
                        title={table.title}
                        content={table.content}
                        buttonLabel={table.buttonLabel}
                        onButtonClick={() => console.log(`${table.title} cerrado`)}
                    />
                ))}
            </div>
        </div>
    );
};