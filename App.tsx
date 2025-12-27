import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CoFounder } from './components/CoFounder';
import { PalsDemo } from './components/PalsDemo';
import { FeatureList } from './components/FeatureList';
import { PalsSelector } from './components/PalsSelector';
import { RetroComputer } from './components/RetroComputer';
import { ApiPlatform } from './components/ApiPlatform';
import { Footer } from './components/Footer';
import { Login } from './components/Login';
import { SignUp } from './components/SignUp';
import { UserDashboard } from './components/UserDashboard';
import { AdminDashboard } from './components/AdminDashboard';
import { AiMeeting } from './components/AiMeeting';

export type PageView = 'home' | 'login' | 'signup' | 'user-dashboard' | 'admin-dashboard' | 'ai-meeting';

function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');

  const navigate = (page: PageView) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const isPublicPage = ['home', 'login', 'signup'].includes(currentPage);

  return (
    <div className="min-h-screen bg-cream text-deep-black font-sans selection:bg-tavus-pink selection:text-white flex flex-col">
      
      {/* Render Header only on public pages */}
      {isPublicPage && <Header onNavigate={navigate} />}
      
      <main className="flex-1 w-full flex flex-col">
        {currentPage === 'home' && (
          <>
            <Hero />
            <CoFounder />
            <PalsDemo />
            <FeatureList />
            <PalsSelector />
            <RetroComputer />
            <ApiPlatform />
          </>
        )}

        {currentPage === 'login' && <Login onNavigate={navigate} />}
        {currentPage === 'signup' && <SignUp onNavigate={navigate} />}
        {currentPage === 'user-dashboard' && <UserDashboard onNavigate={navigate} />}
        {currentPage === 'admin-dashboard' && <AdminDashboard onNavigate={navigate} />}
        {currentPage === 'ai-meeting' && <AiMeeting onNavigate={navigate} />}
      </main>

      {/* Render Footer only on public pages */}
      {isPublicPage && <Footer onNavigate={navigate} />}
    </div>
  );
}

export default App;