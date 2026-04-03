import React from 'react';
import { Studio } from 'sanity';
import config from '../../sanity/sanity.config';

const AdminPage = () => {
    return (
        // Растягиваем админку на весь экран
        <div style={{ height: '100vh', width: '100vw', position: 'absolute', top: 0, left: 0, zIndex: 99999 }}>
            <Studio config={config} />
        </div>
    );
};

export default AdminPage;
