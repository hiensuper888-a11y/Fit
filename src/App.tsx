/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { LanguageProvider } from './i18n/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Shop } from './components/Shop';
import { Workouts } from './components/Workouts';
import { Footer } from './components/Footer';
import { CreatineArticle } from './components/CreatineArticle';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<'home' | 'article'>('home');

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900">
        <Navbar currentRoute={currentRoute} setCurrentRoute={setCurrentRoute} />
        <main>
          {currentRoute === 'home' ? (
            <>
              <Hero />
              <Shop />
              <Workouts />
            </>
          ) : (
            <CreatineArticle />
          )}
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
