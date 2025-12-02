// src/context/LanguageContext.jsx

import React, { createContext, useContext, useState, useMemo } from 'react';
import { texts } from '../data/translations';

// 1. Definición del Contexto (No exportamos esto directamente, solo su uso)
const LanguageContext = createContext();

// 2. Definición y exportación del Hook de Uso (Usa "function" para claridad)
// Esto cumple con la regla de exportar hooks y componentes.
export function useLanguage() {
    return useContext(LanguageContext);
}

// 3. Definición y exportación del Provider (Componente)
export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('es');

    const contextValue = useMemo(() => {
        // La función getText se define aquí.
        const getText = (key) => {
            // Utilizamos 'texts' que está en el ámbito superior.
            return texts[key]?.[language] || texts[key]?.['es'] || `[${key} not found]`;
        };

        return {
            language,
            setLanguage,
            getText,
        };
    }, [language]); // Dependencia: solo language.

    return (
        <LanguageContext.Provider value={contextValue}>
            {children}
        </LanguageContext.Provider>
    );
};