import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openSidebar = () => { setIsSidebarOpen(true); };
    const closeSidebar = () => { setIsSidebarOpen(false); };
    const openModal = () => { setIsModalOpen(true); };
    const closeModal = () => { setIsModalOpen(false); };

    return <AppContext.Provider value={{isSidebarOpen, isModalOpen, openSidebar, closeSidebar, openModal, closeModal }}>{children}</AppContext.Provider>
};

// Custom Hook - for not having many imports, but simply this..
export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };