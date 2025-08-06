"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Copy, ExternalLink, ChevronDown } from 'lucide-react'
import { Luckiest_Guy, Fredoka } from 'next/font/google'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const luckiestGuy = Luckiest_Guy({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-header',
})

const fredoka = Fredoka({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-body',
})

export default function WigOnBasePage() {
  const [copied, setCopied] = useState(false)
  const contractAddress = "COOMING SOON"

  // Scroll animations
  const whyWigAnimation = useScrollAnimation(0.2)
  const tokenomicsAnimation = useScrollAnimation(0.2)
  const bibleAnimation = useScrollAnimation(0.2)
  const storyAnimation = useScrollAnimation(0.2)
  const howToBuyAnimation = useScrollAnimation(0.2)
  const ctaAnimation = useScrollAnimation(0.2)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const scrollToNextSection = () => {
    const nextSection = document.querySelector('#why-wig-section')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className={`min-h-screen bg-black text-white overflow-x-hidden pb-20 ${luckiestGuy.variable} ${fredoka.variable}`}>
      {/* Header with Contract Address - Fixed and Transparent - Mobile Responsive */}
      <div 
        className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm border-b border-white/10 py-2 md:py-4 px-2 md:px-4"
        style={{
          backgroundImage: 'url(/header-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0">
          {/* Mobile: Stack vertically, Desktop: Side by side */}
          
          {/* Top row on mobile: Social buttons and Buy buttons */}
          <div className="flex items-center justify-between w-full md:w-auto">
            {/* Left side - Social buttons */}
            <div className="flex gap-2 md:gap-4">
              <Button className="bg-black/80 text-blue-400 hover:bg-black/90 font-semibold px-2 py-2 md:px-4 md:py-3 backdrop-blur-sm text-sm md:text-base" style={{ fontFamily: 'var(--font-body)' }}>
                X
              </Button>
              <Button className="bg-blue-500/80 text-white hover:bg-blue-400/90 font-semibold px-2 py-2 md:px-4 md:py-3 backdrop-blur-sm text-sm md:text-base" style={{ fontFamily: 'var(--font-body)' }}>
                TG
              </Button>
            </div>
            
            {/* Right side - Buy button (visible on mobile) */}
            <div className="flex gap-2 md:hidden">
              <Button className="bg-black/80 text-white hover:bg-black/90 font-semibold px-3 py-2 backdrop-blur-sm text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                BUY WIG
              </Button>
              <Button className="bg-black/80 text-white hover:bg-black/90 p-2 font-semibold backdrop-blur-sm" style={{ fontFamily: 'var(--font-body)' }}>
                <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          {/* Center - Contract Address */}
          <div className="bg-white/90 backdrop-blur-sm text-black px-3 py-2 md:px-6 md:py-3 rounded-lg flex items-center gap-2 md:gap-4 w-full md:w-auto">
            <span className="font-medium text-xs md:text-base" style={{ fontFamily: 'var(--font-body)' }}>
              CA: {contractAddress}
            </span>
            <Button
              onClick={copyToClipboard}
              className="bg-black text-white hover:bg-gray-800 px-2 py-1 md:px-4 md:py-2 text-xs md:text-sm font-semibold flex-shrink-0"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {copied ? "COPIED!" : "COPY"}
            </Button>
          </div>
          
          {/* Right side - Buy button (hidden on mobile, visible on desktop) */}
          <div className="hidden md:flex gap-4">
            <Button className="bg-black/80 text-white hover:bg-black/90 font-semibold px-6 py-3 backdrop-blur-sm" style={{ fontFamily: 'var(--font-body)' }}>
              BUY WIG
            </Button>
            <Button className="bg-black/80 text-white hover:bg-black/90 p-3 font-semibold backdrop-blur-sm" style={{ fontFamily: 'var(--font-body)' }}>
              <ExternalLink className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Section - Mobile Responsive */}
      <div className="relative min-h-screen flex items-end justify-center pt-32 md:pt-28 pb-32 md:pb-24 px-4" style={{
        backgroundImage: 'url(/header-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        
        <div className="relative z-10 text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-4 md:mb-6 text-white drop-shadow-lg" style={{ fontFamily: 'var(--font-header)' }}>
            $WIG
          </h1>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 text-white drop-shadow-lg px-4" style={{ fontFamily: 'var(--font-header)' }}>
            BACKED BY 100% PURE BASE<br />WIG ENERGY
          </h2>
        </div>

        {/* Scroll Down Animation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <button
            onClick={scrollToNextSection}
            className="flex flex-col items-center text-white hover:text-blue-300 transition-colors duration-300 cursor-pointer group"
          >
            <span className="text-sm md:text-lg font-medium mb-2 animate-pulse" style={{ fontFamily: 'var(--font-body)' }}>
              SCROLL DOWN
            </span>
            <div className="animate-bounce">
              <ChevronDown className="w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform duration-300" />
            </div>
          </button>
        </div>
      </div>

      {/* Why Wig Section - Mobile Responsive */}
      <div id="why-wig-section" className="bg-black py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div ref={whyWigAnimation.ref} className={`fade-in ${whyWigAnimation.isVisible ? 'visible' : ''}`}>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 text-white" style={{ fontFamily: 'var(--font-header)' }}>
              WHY WIG?
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mb-8 md:mb-12 text-gray-300 px-4" style={{ fontFamily: 'var(--font-body)' }}>
              NOT FINANCIAL ADVICE, JUST VIBES
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
            <div className={`border-4 border-blue-500 bg-black p-4 md:p-6 rounded-lg slide-in-left stagger-1 ${whyWigAnimation.isVisible ? 'visible' : ''}`}>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white" style={{ fontFamily: 'var(--font-header)' }}>
                UTILITIES = NONE
              </h3>
            </div>
            <div className={`border-4 border-blue-500 bg-black p-4 md:p-6 rounded-lg scale-in stagger-2 ${whyWigAnimation.isVisible ? 'visible' : ''}`}>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white" style={{ fontFamily: 'var(--font-header)' }}>
                ROADMAP = BASE CHAIN
              </h3>
            </div>
            <div className={`border-4 border-blue-500 bg-black p-4 md:p-6 rounded-lg slide-in-right stagger-3 ${whyWigAnimation.isVisible ? 'visible' : ''}`}>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white" style={{ fontFamily: 'var(--font-header)' }}>
                TEAM=PROBABLY NUTS
              </h3>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12 max-w-4xl mx-auto">
            <div className={`border-4 border-blue-500 bg-black p-4 md:p-6 rounded-lg slide-in-left stagger-4 ${whyWigAnimation.isVisible ? 'visible' : ''}`}>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white" style={{ fontFamily: 'var(--font-header)' }}>
                ENERGY = NUCLEAR
              </h3>
            </div>
            <div className={`border-4 border-blue-500 bg-black p-4 md:p-6 rounded-lg slide-in-right stagger-5 ${whyWigAnimation.isVisible ? 'visible' : ''}`}>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white" style={{ fontFamily: 'var(--font-header)' }}>
                COMMUNITY = BASE BUILDERS
              </h3>
            </div>
          </div>

          <div className={`fade-in stagger-6 ${whyWigAnimation.isVisible ? 'visible' : ''}`}>
            <Button className="bg-blue-500 hover:bg-blue-400 text-white font-semibold text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 rounded-lg" style={{ fontFamily: 'var(--font-body)' }}>
              YOU NEED THIS IN YOUR WALLET
            </Button>
          </div>
        </div>
      </div>

      {/* Sacred Magic Scroll Section - Mobile Responsive */}
      <div className="bg-gradient-to-br from-blue-400 to-blue-600 py-12 md:py-16 px-4" style={{
        backgroundImage: 'url(/blue-sunburst-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="max-w-6xl mx-auto">
          <div ref={tokenomicsAnimation.ref} className={`fade-in ${tokenomicsAnimation.isVisible ? 'visible' : ''}`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mb-8 md:mb-12 text-white" style={{ fontFamily: 'var(--font-header)' }}>
              THE SACRED<br />WIG SCROLL
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6">
              <div className={`bg-black text-white p-4 md:p-6 rounded-lg border-4 border-blue-500 slide-in-left stagger-1 ${tokenomicsAnimation.isVisible ? 'visible' : ''}`}>
                <h3 className="text-2xl md:text-3xl mb-2" style={{ fontFamily: 'var(--font-header)' }}>SUPPLY</h3>
                <p className="text-xl md:text-2xl font-medium" style={{ fontFamily: 'var(--font-body)' }}>1 BILLION</p>
              </div>
              
              <div className={`bg-black text-white p-4 md:p-6 rounded-lg border-4 border-blue-500 slide-in-left stagger-2 ${tokenomicsAnimation.isVisible ? 'visible' : ''}`}>
                <h3 className="text-2xl md:text-3xl mb-2" style={{ fontFamily: 'var(--font-header)' }}>TAX</h3>
                <p className="text-lg md:text-2xl font-medium" style={{ fontFamily: 'var(--font-body)' }}>0% IN 0% OUT, 100% INSANITY</p>
              </div>
              
              <div className={`bg-black text-white p-4 md:p-6 rounded-lg border-4 border-blue-500 slide-in-left stagger-3 ${tokenomicsAnimation.isVisible ? 'visible' : ''}`}>
                <h3 className="text-2xl md:text-3xl mb-2" style={{ fontFamily: 'var(--font-header)' }}>LIQUIDITY</h3>
                <p className="text-lg md:text-2xl font-medium" style={{ fontFamily: 'var(--font-body)' }}>TIGHTER THAN WIG'S GRIP</p>
              </div>
            </div>
            
            {/* BASE Character - Mobile Responsive */}
            <div className={`text-center scale-in stagger-2 ${tokenomicsAnimation.isVisible ? 'visible' : ''} mt-8 lg:mt-0`}>
              <img 
                src="/base-character.png" 
                alt="BASE Character with Coffee" 
                className="w-64 h-auto sm:w-72 md:w-80 lg:w-96 mx-auto hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Wig Bible Section - Mobile Responsive */}
      <div className="bg-black py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div ref={bibleAnimation.ref} className={`fade-in ${bibleAnimation.isVisible ? 'visible' : ''}`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 md:mb-12 text-white" style={{ fontFamily: 'var(--font-header)' }}>
              THE WIG BIBLE
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
            <div className={`border-4 border-blue-500 bg-black p-4 md:p-6 rounded-lg slide-in-left stagger-1 ${bibleAnimation.isVisible ? 'visible' : ''}`}>
              <h3 className="text-lg sm:text-xl md:text-2xl text-white" style={{ fontFamily: 'var(--font-header)' }}>
                DON'T SELL
              </h3>
            </div>
            <div className={`border-4 border-blue-500 bg-black p-4 md:p-6 rounded-lg scale-in stagger-2 ${bibleAnimation.isVisible ? 'visible' : ''}`}>
              <h3 className="text-lg sm:text-xl md:text-2xl text-white" style={{ fontFamily: 'var(--font-header)' }}>
                DON'T ASK FOR UTILITY
              </h3>
            </div>
            <div className={`border-4 border-blue-500 bg-black p-4 md:p-6 rounded-lg slide-in-right stagger-3 ${bibleAnimation.isVisible ? 'visible' : ''}`}>
              <h3 className="text-lg sm:text-xl md:text-2xl text-white" style={{ fontFamily: 'var(--font-header)' }}>
                DON'T QUESTION WIG
              </h3>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12 md:mb-16 max-w-4xl mx-auto">
            <div className={`border-4 border-blue-500 bg-black p-4 md:p-6 rounded-lg slide-in-left stagger-4 ${bibleAnimation.isVisible ? 'visible' : ''}`}>
              <h3 className="text-lg sm:text-xl md:text-2xl text-white" style={{ fontFamily: 'var(--font-header)' }}>
                WORSHIP THE GREEN
              </h3>
            </div>
            <div className={`border-4 border-blue-500 bg-black p-4 md:p-6 rounded-lg slide-in-right stagger-5 ${bibleAnimation.isVisible ? 'visible' : ''}`}>
              <h3 className="text-lg sm:text-xl md:text-2xl text-white" style={{ fontFamily: 'var(--font-header)' }}>
                IF IN DOUBT, BUY MORE
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* WIG Legend Gallery Section - Mobile Responsive */}
      <div className="bg-gradient-to-br from-blue-400 to-blue-600 py-12 md:py-16 px-4" style={{
        backgroundImage: 'url(/blue-sunburst-story-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="max-w-6xl mx-auto">
          <div ref={storyAnimation.ref} className={`text-center mb-8 md:mb-12 fade-in ${storyAnimation.isVisible ? 'visible' : ''}`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-8 text-white" style={{ fontFamily: 'var(--font-header)' }}>
              THE WIG LEGEND
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white font-medium px-4" style={{ fontFamily: 'var(--font-body)' }}>
              LEGENDS SAY HE BUILT ON BASE WITH A MEGA WIG...<br />
              OTHERS SAY HE CODED THREE WEEKS WITHOUT SLEEPING...<br />
              ALL WE KNOW IS... WIG IS HERE NOW!
            </p>
          </div>
          
          {/* Meme Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {/* Row 1 */}
            <div className={`slide-in-left stagger-1 ${storyAnimation.isVisible ? 'visible' : ''}`}>
              <img 
                src="/story-1.jpg" 
                alt="WIG Success Story" 
                className="w-full h-48 md:h-56 object-cover rounded-lg border-4 border-blue-500 hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className={`slide-in-up stagger-2 ${storyAnimation.isVisible ? 'visible' : ''}`}>
              <img 
                src="/story-2.jpg" 
                alt="WIG Meme Culture" 
                className="w-full h-48 md:h-56 object-cover rounded-lg border-4 border-blue-500 hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className={`slide-in-right stagger-3 ${storyAnimation.isVisible ? 'visible' : ''}`}>
              <img 
                src="/story-3.jpg" 
                alt="WIG Trading Power" 
                className="w-full h-48 md:h-56 object-cover rounded-lg border-4 border-blue-500 hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className={`slide-in-left stagger-4 ${storyAnimation.isVisible ? 'visible' : ''}`}>
              <img 
                src="/story-4.jpg" 
                alt="WIG Market Moves" 
                className="w-full h-48 md:h-56 object-cover rounded-lg border-4 border-blue-500 hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Row 2 */}
            <div className={`slide-in-right stagger-5 ${storyAnimation.isVisible ? 'visible' : ''}`}>
              <img 
                src="/story-5.jpg" 
                alt="WIG Identity" 
                className="w-full h-48 md:h-56 object-cover rounded-lg border-4 border-blue-500 hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className={`slide-in-up stagger-6 ${storyAnimation.isVisible ? 'visible' : ''}`}>
              <img 
                src="/story-6.jpg" 
                alt="WIG To The Moon" 
                className="w-full h-48 md:h-56 object-cover rounded-lg border-4 border-blue-500 hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className={`slide-in-left stagger-1 ${storyAnimation.isVisible ? 'visible' : ''}`}>
              <img 
                src="/story-7.jpg" 
                alt="WIG Base Lifestyle" 
                className="w-full h-48 md:h-56 object-cover rounded-lg border-4 border-blue-500 hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className={`slide-in-right stagger-2 ${storyAnimation.isVisible ? 'visible' : ''}`}>
              <img 
                src="/story-8.jpg" 
                alt="WIG Whale Power" 
                className="w-full h-48 md:h-56 object-cover rounded-lg border-4 border-blue-500 hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Row 3 - Last two images spanning wider */}
            <div className={`sm:col-span-2 slide-in-up stagger-3 ${storyAnimation.isVisible ? 'visible' : ''}`}>
              <img 
                src="/story-9.jpg" 
                alt="WIG Airdrop Party" 
                className="w-full h-48 md:h-56 object-cover rounded-lg border-4 border-blue-500 hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className={`sm:col-span-2 scale-in stagger-4 ${storyAnimation.isVisible ? 'visible' : ''}`}>
              <img 
                src="/story-10.jpg" 
                alt="WIG Community Gathering" 
                className="w-full h-48 md:h-56 object-cover rounded-lg border-4 border-blue-500 hover:scale-105 transition-transform duration-300"
              />
            </div>
            {/* Row 4 - New additions */}
            <div className={`slide-in-left stagger-1 ${storyAnimation.isVisible ? 'visible' : ''}`}>
              <img 
                src="/story-11.jpg" 
                alt="WIG Self Reflection" 
                className="w-full h-48 md:h-56 object-cover rounded-lg border-4 border-blue-500 hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className={`slide-in-up stagger-2 ${storyAnimation.isVisible ? 'visible' : ''}`}>
              <img 
                src="/story-12.jpg" 
                alt="WIG Space Mission" 
                className="w-full h-48 md:h-56 object-cover rounded-lg border-4 border-blue-500 hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className={`slide-in-right stagger-3 ${storyAnimation.isVisible ? 'visible' : ''}`}>
              <img 
                src="/story-13.jpg" 
                alt="WIG Wealth Distribution" 
                className="w-full h-48 md:h-56 object-cover rounded-lg border-4 border-blue-500 hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Row 5 */}
            
            <div className={`slide-in-up stagger-6 ${storyAnimation.isVisible ? 'visible' : ''}`}>
              <img 
                src="/story-16.jpg" 
                alt="WIG Comfy Life" 
                className="w-full h-48 md:h-56 object-cover rounded-lg border-4 border-blue-500 hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className={`slide-in-left stagger-1 ${storyAnimation.isVisible ? 'visible' : ''}`}>
              <img 
                src="/story-17.jpg" 
                alt="WIG Yacht Celebration" 
                className="w-full h-48 md:h-56 object-cover rounded-lg border-4 border-blue-500 hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className={`slide-in-right stagger-2 ${storyAnimation.isVisible ? 'visible' : ''}`}>
              <img 
                src="/story-18.jpg" 
                alt="WIG Money Train" 
                className="w-full h-48 md:h-56 object-cover rounded-lg border-4 border-blue-500 hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className={`slide-in-left stagger-3 ${storyAnimation.isVisible ? 'visible' : ''}`}>
              <img 
                src="/story-19.jpg" 
                alt="WIG Crypto Trader" 
                className="w-full h-48 md:h-56 object-cover rounded-lg border-4 border-blue-500 hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          
          {/* Closing Text */}
          <div className={`text-center mt-8 md:mt-12 fade-in stagger-5 ${storyAnimation.isVisible ? 'visible' : ''}`}>
            <p className="text-xl sm:text-2xl md:text-3xl text-white font-bold" style={{ fontFamily: 'var(--font-header)' }}>
              THE LEGEND CONTINUES ON BASE...
            </p>
          </div>
        </div>
      </div>

      {/* How to Buy Section - Mobile Responsive */}
      <div className="bg-black py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div ref={howToBuyAnimation.ref} className={`fade-in ${howToBuyAnimation.isVisible ? 'visible' : ''}`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mb-8 md:mb-12 text-white" style={{ fontFamily: 'var(--font-header)' }}>
              HOW TO BUY?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left side - Relaxing BASE Character */}
            <div className={`text-center scale-in stagger-1 ${howToBuyAnimation.isVisible ? 'visible' : ''} order-2 lg:order-1`}>
              <img 
                src="/base-relaxing-character.png" 
                alt="Relaxing BASE Character" 
                className="w-64 h-auto sm:w-72 md:w-80 lg:w-96 mx-auto hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Right side - Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 order-1 lg:order-2">
              <div className={`bg-white text-blue-600 p-4 md:p-6 rounded-lg border-4 border-blue-500 scale-in stagger-2 ${howToBuyAnimation.isVisible ? 'visible' : ''}`}>
                <h3 className="text-xl md:text-2xl mb-2" style={{ fontFamily: 'var(--font-header)' }}>STEP 1</h3>
                <p className="font-medium text-sm md:text-base" style={{ fontFamily: 'var(--font-body)' }}>DOWNLOAD COINBASE WALLET</p>
              </div>
              
              <div className={`bg-white text-blue-600 p-4 md:p-6 rounded-lg border-4 border-blue-500 scale-in stagger-3 ${howToBuyAnimation.isVisible ? 'visible' : ''}`}>
                <h3 className="text-xl md:text-2xl mb-2" style={{ fontFamily: 'var(--font-header)' }}>STEP 2</h3>
                <p className="font-medium text-sm md:text-base" style={{ fontFamily: 'var(--font-body)' }}>LOAD UP ETH FROM AN EXCHANGE</p>
              </div>
              
              <div className={`bg-white text-blue-600 p-4 md:p-6 rounded-lg border-4 border-blue-500 scale-in stagger-4 ${howToBuyAnimation.isVisible ? 'visible' : ''}`}>
                <h3 className="text-xl md:text-2xl mb-2" style={{ fontFamily: 'var(--font-header)' }}>STEP 3</h3>
                <p className="font-medium text-sm md:text-base" style={{ fontFamily: 'var(--font-body)' }}>COPY THE CA</p>
              </div>
              
              <div className={`bg-white text-blue-600 p-4 md:p-6 rounded-lg border-4 border-blue-500 scale-in stagger-5 ${howToBuyAnimation.isVisible ? 'visible' : ''}`}>
                <h3 className="text-xl md:text-2xl mb-2" style={{ fontFamily: 'var(--font-header)' }}>STEP 4</h3>
                <p className="font-medium text-sm md:text-base" style={{ fontFamily: 'var(--font-body)' }}>HEAD OVER TO UNISWAP AND SWAP</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Section - Mobile Responsive */}
      <div className="bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 py-12 md:py-16 px-4" style={{
        backgroundImage: 'url(/blue-sunburst-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="max-w-6xl mx-auto text-center">
          <div ref={ctaAnimation.ref} className="mb-8 md:mb-12">
            <div className={`fade-in ${ctaAnimation.isVisible ? 'visible' : ''}`}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 md:mb-8 text-white" style={{ fontFamily: 'var(--font-header)' }}>
                THIS ISN'T A TOKEN<br />
                THIS ISN'T A MEME<br />
                THIS ISN'T A CULT<br />
                THIS IS WIG!
              </h2>
            </div>
            
            <div className={`flex justify-center gap-3 md:gap-4 mb-6 md:mb-8 scale-in stagger-2 ${ctaAnimation.isVisible ? 'visible' : ''}`}>
              <Button className="bg-black text-blue-400 hover:bg-gray-800 font-semibold px-4 md:px-6 py-2 md:py-3 text-lg md:text-xl" style={{ fontFamily: 'var(--font-body)' }}>
                X
              </Button>
              <Button className="bg-blue-500 text-white hover:bg-blue-400 font-semibold px-4 md:px-6 py-2 md:py-3 text-lg md:text-xl" style={{ fontFamily: 'var(--font-body)' }}>
                TG
              </Button>
            </div>
          </div>
          
          <div className={`fade-in stagger-3 ${ctaAnimation.isVisible ? 'visible' : ''}`}>
            <Button className="bg-black text-blue-400 hover:bg-gray-800 font-semibold text-lg md:text-2xl px-8 md:px-12 py-4 md:py-6 rounded-lg" style={{ fontFamily: 'var(--font-body)' }}>
              GO BUY WIG NOW!
            </Button>
          </div>
        </div>
      </div>

      {/* Running Text at Bottom - Fixed and Transparent - Mobile Responsive */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-blue-500/20 backdrop-blur-sm border-t border-white/10 py-2 md:py-4 overflow-hidden whitespace-nowrap">
        <div className="animate-marquee inline-block">
          <span className="text-white text-lg md:text-2xl font-bold mx-4 md:mx-8" style={{ fontFamily: 'var(--font-header)' }}>
            $WIG • $WIG • $WIG • $WIG • $WIG • $WIG • $WIG • $WIG • $WIG • $WIG • $WIG • $WIG • $WIG • $WIG • $WIG • $WIG • $WIG • $WIG • $WIG • $WIG • $WIG • $WIG • $WIG • $WIG • $WIG • $WIG • $WIG • $WIG • $WIG • $WIG • $WIG • $WIG • $WIG • $WIG • $WIG • $WIG • $WIG • $WIG • $WIG • $WIG •
          </span>
        </div>
      </div>
    </div>
  )
}
