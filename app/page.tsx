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

export default function HarrySlotherPage() {
  const [copied, setCopied] = useState(false)
  const contractAddress = "4YVRA9KCVHVBIXC6V6ATLCODTY32KAJLD3ZAUKBZWI2N"

  // Scroll animations
  const whyHarryAnimation = useScrollAnimation(0.2)
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
    const nextSection = document.querySelector('#why-harry-section')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className={`min-h-screen bg-black text-white overflow-x-hidden ${luckiestGuy.variable} ${fredoka.variable}`}>
      {/* Header with Contract Address - Fixed and Transparent */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm border-b border-white/10 py-4 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Left side - Social buttons */}
          <div className="flex gap-4">
            <Button className="bg-black/80 text-blue-400 hover:bg-black/90 font-semibold px-4 py-3 backdrop-blur-sm" style={{ fontFamily: 'var(--font-body)' }}>
              X
            </Button>
            <Button className="bg-blue-500/80 text-white hover:bg-blue-400/90 font-semibold px-4 py-3 backdrop-blur-sm" style={{ fontFamily: 'var(--font-body)' }}>
              TG
            </Button>
          </div>
          
          {/* Center - Contract Address */}
          <div className="bg-white/90 backdrop-blur-sm text-black px-6 py-3 rounded-lg flex items-center gap-4">
            <span className="font-medium text-sm md:text-base break-all" style={{ fontFamily: 'var(--font-body)' }}>
              CA: {contractAddress}
            </span>
            <Button
              onClick={copyToClipboard}
              className="bg-black text-white hover:bg-gray-800 px-4 py-2 text-sm font-semibold"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {copied ? "COPIED!" : "COPY"}
            </Button>
          </div>
          
          {/* Right side - Buy button */}
          <div className="flex gap-4">
            <Button className="bg-black/80 text-white hover:bg-black/90 font-semibold px-6 py-3 backdrop-blur-sm" style={{ fontFamily: 'var(--font-body)' }}>
              BUY HARRY
            </Button>
            <Button className="bg-black/80 text-white hover:bg-black/90 p-3 font-semibold backdrop-blur-sm" style={{ fontFamily: 'var(--font-body)' }}>
              <ExternalLink className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center pt-20" style={{
        backgroundImage: 'url(/blue-sunburst-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-8xl md:text-9xl mb-8 text-white drop-shadow-lg" style={{ fontFamily: 'var(--font-header)' }}>
            $HARRY
          </h1>
          
          {/* Sloth Character */}
          <div className="mb-8">
            <div className="w-64 h-64 mx-auto bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center relative">
              {/* Sloth body */}
              <div className="w-48 h-48 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full relative">
                {/* Face */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-32 h-24 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full">
                  {/* Eyes */}
                  <div className="absolute top-4 left-4 w-8 h-8 bg-white rounded-full">
                    <div className="absolute top-1 left-1 w-6 h-6 bg-black rounded-full">
                      <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full">
                    <div className="absolute top-1 left-1 w-6 h-6 bg-black rounded-full">
                      <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  {/* Nose */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-3 bg-gray-800 rounded-full"></div>
                  {/* Mouth */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-black rounded-full"></div>
                </div>
                {/* Scarf */}
                <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-40 h-8 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg">
                  <div className="w-full h-2 bg-white mt-1"></div>
                  <div className="w-full h-2 bg-blue-600 mt-1"></div>
                  <div className="w-full h-2 bg-white mt-1"></div>
                </div>
                {/* Shovel */}
                <div className="absolute bottom-4 right-4 w-2 h-16 bg-gray-800 rounded-full transform rotate-45"></div>
                <div className="absolute bottom-8 right-2 w-6 h-4 bg-blue-500 rounded transform rotate-45"></div>
              </div>
              {/* Name tag */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-black px-3 py-1 rounded text-sm font-medium" style={{ fontFamily: 'var(--font-body)' }}>
                Harry Slother
              </div>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl mb-4 text-white drop-shadow-lg" style={{ fontFamily: 'var(--font-header)' }}>
            BACKED BY 100% PURE HOGWARTS<br />HARRY ENERGY
          </h2>
        </div>

        {/* Scroll Down Animation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <button
            onClick={scrollToNextSection}
            className="flex flex-col items-center text-white hover:text-blue-300 transition-colors duration-300 cursor-pointer group"
          >
            <span className="text-lg font-medium mb-2 animate-pulse" style={{ fontFamily: 'var(--font-body)' }}>
              SCROLL DOWN
            </span>
            <div className="animate-bounce">
              <ChevronDown className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
            </div>
          </button>
        </div>
      </div>

      {/* Why Harry Section */}
      <div id="why-harry-section" className="bg-black py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div ref={whyHarryAnimation.ref} className={`fade-in ${whyHarryAnimation.isVisible ? 'visible' : ''}`}>
            <h2 className="text-6xl md:text-7xl mb-4 text-white" style={{ fontFamily: 'var(--font-header)' }}>
              WHY HARRY?
            </h2>
            <p className="text-2xl md:text-3xl font-medium mb-12 text-gray-300" style={{ fontFamily: 'var(--font-body)' }}>
              NOT FINANCIAL ADVICE, JUST VIBES
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className={`border-4 border-blue-500 bg-black p-6 rounded-lg slide-in-left stagger-1 ${whyHarryAnimation.isVisible ? 'visible' : ''}`}>
              <h3 className="text-2xl md:text-3xl text-white" style={{ fontFamily: 'var(--font-header)' }}>
                UTILITIES = NONE
              </h3>
            </div>
            <div className={`border-4 border-blue-500 bg-black p-6 rounded-lg scale-in stagger-2 ${whyHarryAnimation.isVisible ? 'visible' : ''}`}>
              <h3 className="text-2xl md:text-3xl text-white" style={{ fontFamily: 'var(--font-header)' }}>
                ROADMAP = GRYFFINDOR
              </h3>
            </div>
            <div className={`border-4 border-blue-500 bg-black p-6 rounded-lg slide-in-right stagger-3 ${whyHarryAnimation.isVisible ? 'visible' : ''}`}>
              <h3 className="text-2xl md:text-3xl text-white" style={{ fontFamily: 'var(--font-header)' }}>
                TEAM=PROBABLY NUTS
              </h3>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
            <div className={`border-4 border-blue-500 bg-black p-6 rounded-lg slide-in-left stagger-4 ${whyHarryAnimation.isVisible ? 'visible' : ''}`}>
              <h3 className="text-2xl md:text-3xl text-white" style={{ fontFamily: 'var(--font-header)' }}>
                ENERGY = NUCLEAR
              </h3>
            </div>
            <div className={`border-4 border-blue-500 bg-black p-6 rounded-lg slide-in-right stagger-5 ${whyHarryAnimation.isVisible ? 'visible' : ''}`}>
              <h3 className="text-2xl md:text-3xl text-white" style={{ fontFamily: 'var(--font-header)' }}>
                COMMUNITY = HOGWARTS
              </h3>
            </div>
          </div>

          <div className={`fade-in stagger-6 ${whyHarryAnimation.isVisible ? 'visible' : ''}`}>
            <Button className="bg-blue-500 hover:bg-blue-400 text-white font-semibold text-xl px-12 py-6 rounded-lg" style={{ fontFamily: 'var(--font-body)' }}>
              YOU NEED THIS IN YOUR WALLET
            </Button>
          </div>
        </div>
      </div>

      {/* Sacred Magic Scroll Section */}
      <div className="bg-gradient-to-br from-blue-400 to-blue-600 py-16 px-4" style={{
        backgroundImage: 'url(/blue-sunburst-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="max-w-6xl mx-auto">
          <div ref={tokenomicsAnimation.ref} className={`fade-in ${tokenomicsAnimation.isVisible ? 'visible' : ''}`}>
            <h2 className="text-5xl md:text-6xl text-center mb-12 text-white" style={{ fontFamily: 'var(--font-header)' }}>
              THE SACRED<br />MAGIC SCROLL
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className={`bg-black text-white p-6 rounded-lg border-4 border-blue-500 slide-in-left stagger-1 ${tokenomicsAnimation.isVisible ? 'visible' : ''}`}>
                <h3 className="text-3xl mb-2" style={{ fontFamily: 'var(--font-header)' }}>SUPPLY</h3>
                <p className="text-2xl font-medium" style={{ fontFamily: 'var(--font-body)' }}>1 BILLION</p>
              </div>
              
              <div className={`bg-black text-white p-6 rounded-lg border-4 border-blue-500 slide-in-left stagger-2 ${tokenomicsAnimation.isVisible ? 'visible' : ''}`}>
                <h3 className="text-3xl mb-2" style={{ fontFamily: 'var(--font-header)' }}>TAX</h3>
                <p className="text-2xl font-medium" style={{ fontFamily: 'var(--font-body)' }}>0% IN 0% OUT, 100% INSANITY</p>
              </div>
              
              <div className={`bg-black text-white p-6 rounded-lg border-4 border-blue-500 slide-in-left stagger-3 ${tokenomicsAnimation.isVisible ? 'visible' : ''}`}>
                <h3 className="text-3xl mb-2" style={{ fontFamily: 'var(--font-header)' }}>LIQUIDITY</h3>
                <p className="text-2xl font-medium" style={{ fontFamily: 'var(--font-body)' }}>TIGHTER THAN SLOTH'S GRIP</p>
              </div>
            </div>
            
            {/* Sloth with Tokenomics */}
            <div className={`text-center scale-in stagger-2 ${tokenomicsAnimation.isVisible ? 'visible' : ''}`}>
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center relative">
                <div className="w-48 h-48 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full relative">
                  {/* Similar sloth design but holding tokenomics paper */}
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-32 h-24 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full">
                    <div className="absolute top-4 left-4 w-8 h-8 bg-white rounded-full">
                      <div className="absolute top-1 left-1 w-6 h-6 bg-black rounded-full">
                        <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full">
                      <div className="absolute top-1 left-1 w-6 h-6 bg-black rounded-full">
                        <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-3 bg-gray-800 rounded-full"></div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-black rounded-full"></div>
                  </div>
                  <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-40 h-8 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg">
                    <div className="w-full h-2 bg-white mt-1"></div>
                    <div className="w-full h-2 bg-blue-600 mt-1"></div>
                    <div className="w-full h-2 bg-white mt-1"></div>
                  </div>
                  {/* Tokenomics paper */}
                  <div className="absolute bottom-4 right-4 w-12 h-16 bg-white rounded transform rotate-12">
                    <div className="p-1">
                      <div className="w-full h-2 bg-blue-500 rounded mb-1"></div>
                      <div className="w-full h-1 bg-black mb-1"></div>
                      <div className="w-full h-1 bg-black mb-1"></div>
                      <div className="w-full h-1 bg-black"></div>
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs font-medium" style={{ fontFamily: 'var(--font-body)' }}>
                      TOKENOMICS
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Harry Bible Section */}
      <div className="bg-black py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div ref={bibleAnimation.ref} className={`fade-in ${bibleAnimation.isVisible ? 'visible' : ''}`}>
            <h2 className="text-5xl md:text-6xl mb-12 text-white" style={{ fontFamily: 'var(--font-header)' }}>
              THE HARRY BIBLE
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className={`border-4 border-blue-500 bg-black p-6 rounded-lg slide-in-left stagger-1 ${bibleAnimation.isVisible ? 'visible' : ''}`}>
              <h3 className="text-xl md:text-2xl text-white" style={{ fontFamily: 'var(--font-header)' }}>
                DON'T SELL
              </h3>
            </div>
            <div className={`border-4 border-blue-500 bg-black p-6 rounded-lg scale-in stagger-2 ${bibleAnimation.isVisible ? 'visible' : ''}`}>
              <h3 className="text-xl md:text-2xl text-white" style={{ fontFamily: 'var(--font-header)' }}>
                DON'T ASK FOR UTILITY
              </h3>
            </div>
            <div className={`border-4 border-blue-500 bg-black p-6 rounded-lg slide-in-right stagger-3 ${bibleAnimation.isVisible ? 'visible' : ''}`}>
              <h3 className="text-xl md:text-2xl text-white" style={{ fontFamily: 'var(--font-header)' }}>
                DON'T QUESTION HARRY
              </h3>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-4xl mx-auto">
            <div className={`border-4 border-blue-500 bg-black p-6 rounded-lg slide-in-left stagger-4 ${bibleAnimation.isVisible ? 'visible' : ''}`}>
              <h3 className="text-xl md:text-2xl text-white" style={{ fontFamily: 'var(--font-header)' }}>
                WORSHIP THE GREEN
              </h3>
            </div>
            <div className={`border-4 border-blue-500 bg-black p-6 rounded-lg slide-in-right stagger-5 ${bibleAnimation.isVisible ? 'visible' : ''}`}>
              <h3 className="text-xl md:text-2xl text-white" style={{ fontFamily: 'var(--font-header)' }}>
                IF IN DOUBT, BUY MORE
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Story Cards Section */}
      <div className="bg-gradient-to-br from-blue-400 to-blue-600 py-16 px-4" style={{
        backgroundImage: 'url(/blue-sunburst-story-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="max-w-6xl mx-auto">
          <div ref={storyAnimation.ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className={`bg-white border-4 border-blue-500 p-6 slide-in-left stagger-1 ${storyAnimation.isVisible ? 'visible' : ''}`}>
              <h3 className="text-xl text-center mb-4 text-black" style={{ fontFamily: 'var(--font-header)' }}>
                LEGEND SAYS HE KILLED A BEAR WITH A MEGA CANDLESTICK..
              </h3>
              <div className="bg-blue-500 h-32 rounded-lg mb-4 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gray-600 rounded-full"></div>
                </div>
              </div>
            </Card>
            
            <Card className={`bg-white border-4 border-blue-500 p-6 scale-in stagger-2 ${storyAnimation.isVisible ? 'visible' : ''}`}>
              <h3 className="text-xl text-center mb-4 text-black" style={{ fontFamily: 'var(--font-header)' }}>
                OTHERS SAY HE WAITED THREE WEEKS WITHOUT BLINKING...
              </h3>
              <div className="bg-black h-32 rounded-lg mb-4 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gray-600 rounded-full"></div>
                </div>
              </div>
            </Card>
            
            <Card className={`bg-white border-4 border-blue-500 p-6 slide-in-right stagger-3 ${storyAnimation.isVisible ? 'visible' : ''}`}>
              <h3 className="text-xl text-center mb-4 text-black" style={{ fontFamily: 'var(--font-header)' }}>
                ALL WE KNOW IS... HE'S HERE NOW!
              </h3>
              <div className="bg-blue-400 h-32 rounded-lg mb-4 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gray-600 rounded-full"></div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* How to Buy Section */}
      <div className="bg-black py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div ref={howToBuyAnimation.ref} className={`fade-in ${howToBuyAnimation.isVisible ? 'visible' : ''}`}>
            <h2 className="text-5xl md:text-6xl text-center mb-12 text-white" style={{ fontFamily: 'var(--font-header)' }}>
              HOW TO BUY?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-6">
              <div className={`bg-white text-blue-600 p-6 rounded-lg border-4 border-blue-500 scale-in stagger-1 ${howToBuyAnimation.isVisible ? 'visible' : ''}`}>
                <h3 className="text-2xl mb-2" style={{ fontFamily: 'var(--font-header)' }}>STEP 1</h3>
                <p className="font-medium" style={{ fontFamily: 'var(--font-body)' }}>DOWNLOAD PHANTOM WALLET</p>
              </div>
              
              <div className={`bg-white text-blue-600 p-6 rounded-lg border-4 border-blue-500 scale-in stagger-2 ${howToBuyAnimation.isVisible ? 'visible' : ''}`}>
                <h3 className="text-2xl mb-2" style={{ fontFamily: 'var(--font-header)' }}>STEP 2</h3>
                <p className="font-medium" style={{ fontFamily: 'var(--font-body)' }}>LOAD UP SOL FROM AN EXCHANGE</p>
              </div>
              
              <div className={`bg-white text-blue-600 p-6 rounded-lg border-4 border-blue-500 scale-in stagger-3 ${howToBuyAnimation.isVisible ? 'visible' : ''}`}>
                <h3 className="text-2xl mb-2" style={{ fontFamily: 'var(--font-header)' }}>STEP 3</h3>
                <p className="font-medium" style={{ fontFamily: 'var(--font-body)' }}>COPY THE CA</p>
              </div>
              
              <div className={`bg-white text-blue-600 p-6 rounded-lg border-4 border-blue-500 scale-in stagger-4 ${howToBuyAnimation.isVisible ? 'visible' : ''}`}>
                <h3 className="text-2xl mb-2" style={{ fontFamily: 'var(--font-header)' }}>STEP 4</h3>
                <p className="font-medium" style={{ fontFamily: 'var(--font-body)' }}>HEAD OVER TO JUPITER AND SWAP</p>
              </div>
            </div>
            
            {/* Sloth with magic wand and charts */}
            <div className={`text-center relative slide-in-right stagger-2 ${howToBuyAnimation.isVisible ? 'visible' : ''}`}>
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center relative">
                <div className="w-48 h-48 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full relative">
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-32 h-24 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full">
                    <div className="absolute top-4 left-4 w-8 h-8 bg-white rounded-full">
                      <div className="absolute top-1 left-1 w-6 h-6 bg-black rounded-full">
                        <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full">
                      <div className="absolute top-1 left-1 w-6 h-6 bg-black rounded-full">
                        <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-3 bg-gray-800 rounded-full"></div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-black rounded-full"></div>
                  </div>
                  <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-40 h-8 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg">
                    <div className="w-full h-2 bg-white mt-1"></div>
                    <div className="w-full h-2 bg-blue-600 mt-1"></div>
                    <div className="w-full h-2 bg-white mt-1"></div>
                  </div>
                  {/* Magic wand */}
                  <div className="absolute bottom-4 right-4 w-1 h-12 bg-gray-800 rounded-full transform rotate-45"></div>
                  <div className="absolute bottom-8 right-2 w-3 h-3 bg-blue-400 rounded-full transform rotate-45"></div>
                </div>
              </div>
              
              {/* Blue candlestick charts */}
              <div className="absolute top-0 right-0 flex gap-1">
                <div className="w-2 h-8 bg-blue-500 rounded"></div>
                <div className="w-2 h-12 bg-blue-500 rounded"></div>
                <div className="w-2 h-6 bg-blue-500 rounded"></div>
                <div className="w-2 h-10 bg-blue-500 rounded"></div>
                <div className="w-2 h-4 bg-blue-500 rounded"></div>
              </div>
              
              {/* Sparkles */}
              <div className="absolute top-4 left-4 w-2 h-2 bg-blue-400 rounded-full"></div>
              <div className="absolute top-8 right-8 w-3 h-3 bg-blue-400 rounded-full"></div>
              <div className="absolute bottom-4 left-8 w-2 h-2 bg-blue-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 py-16 px-4" style={{
        backgroundImage: 'url(/blue-sunburst-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="max-w-6xl mx-auto text-center">
          <div ref={ctaAnimation.ref} className="mb-12">
            <div className={`fade-in ${ctaAnimation.isVisible ? 'visible' : ''}`}>
              <h2 className="text-4xl md:text-5xl mb-8 text-white" style={{ fontFamily: 'var(--font-header)' }}>
                THIS ISN'T A TOKEN<br />
                THIS ISN'T A MEME<br />
                THIS ISN'T A CULT<br />
                THIS IS HARRY!
              </h2>
            </div>
            
            <div className={`flex justify-center gap-4 mb-8 scale-in stagger-2 ${ctaAnimation.isVisible ? 'visible' : ''}`}>
              <Button className="bg-black text-blue-400 hover:bg-gray-800 font-semibold px-6 py-3 text-xl" style={{ fontFamily: 'var(--font-body)' }}>
                X
              </Button>
              <Button className="bg-blue-500 text-white hover:bg-blue-400 font-semibold px-6 py-3 text-xl" style={{ fontFamily: 'var(--font-body)' }}>
                TG
              </Button>
            </div>
          </div>
          
          <div className={`fade-in stagger-3 ${ctaAnimation.isVisible ? 'visible' : ''}`}>
            <Button className="bg-black text-blue-400 hover:bg-gray-800 font-semibold text-2xl px-12 py-6 rounded-lg" style={{ fontFamily: 'var(--font-body)' }}>
              GO BUY HARRY NOW!
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
