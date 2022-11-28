import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Images from '../pages/Images';

export const Router = () => (
    <Routes>
        <Route index element={<Home />} />
        <Route path='album/:id' element={<Images />} />
    </Routes>
)