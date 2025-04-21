'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Sun, 
  Battery, 
  Home, 
  CircuitBoard,
  ArrowRight,
  BarChart3,
  Clock,
  CloudSun,
  Zap,
  Activity,
  Lightbulb,
  Moon,
  SunMoon,
  Palette,
  PlugZap,
  PanelTop,
  BatteryCharging,
  Power,
  Timer,
  ChevronUp,
  CheckCircle2,
} from 'lucide-react';

// Theme definitions for the application
const themes = {
  darkNavy: {
    id: 'darkNavy',
    name: 'Dark Navy',
    icon: <Moon className="w-4 h-4" />,
    bgGradient: 'from-[#1A1B25] via-[#26282F] to-[#2C2F3A]',
    cardBg: 'from-[#1A1B25]/90 to-[#26282F]/80',
    textColor: 'text-[#DDCECD]',
    mutedText: 'text-[#DDCECD]/70',
    accent: 'text-[#28AFB0]',
    highlight: 'text-[#E3B23C]',
    progressBg: 'from-[#28AFB0] to-[#19647E]',
  },
  forest: {
    id: 'forest',
    name: 'Forest',
    icon: <Palette className="w-4 h-4" />,
    bgGradient: 'from-[#1A1B25] via-[#26413C] to-[#26413C]',
    cardBg: 'from-[#1A1B25] to-[#26413C]/95',
    textColor: 'text-white',
    mutedText: 'text-[#DDCECD]/90',
    accent: 'text-[#99C1B9]',
    highlight: 'text-[#E3B23C]',
    progressBg: 'from-[#E3B23C] to-[#99C1B9]',
  },
  vibrant: {
    id: 'vibrant',
    name: 'Vibrant',
    icon: <SunMoon className="w-4 h-4" />,
    bgGradient: 'from-[#16213E] via-[#0F3460] to-[#533483]',
    cardBg: 'from-[#16213E] to-[#533483]/80',
    textColor: 'text-white',
    mutedText: 'text-[#E94560]/90',
    accent: 'text-[#E94560]',
    highlight: 'text-[#E94560]',
    progressBg: 'from-[#E94560] to-[#533483]',
  }
};

const Tooltip = ({ children, value, unit, title }: { children: React.ReactNode, value: number, unit: string, title: string }) => (
  <div className="group relative">
    {children}
    <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-20 left-1/2 -translate-x-1/2 bg-white p-3 rounded-lg shadow-lg w-48 z-10">
      <h4 className="font-bold text-gray-800 mb-1">{title}</h4>
      <div className="flex items-baseline justify-center">
        <span className="text-2xl font-bold text-blue-600">{value.toFixed(2)}</span>
        <span className="ml-1 text-gray-600">{unit}</span>
      </div>
    </div>
  </div>
);

export default function SolarPage() {
  const [systemStatus, setSystemStatus] = useState({
    solarGeneration: 0,
    batteryLevel: 0,
    homeConsumption: 0,
    gridFeedIn: 0,
  });
  
  // Theme state
  const [activeTheme, setActiveTheme] = useState(themes.darkNavy);

  useEffect(() => {
    const updateData = () => {
      setSystemStatus({
        solarGeneration: Math.random() * 10 + 2,
        batteryLevel: Math.min(100, Math.random() * 100),
        homeConsumption: Math.random() * 5 + 1,
        gridFeedIn: Math.random() * 3,
      });
    };

    const interval = setInterval(updateData, 5000);
    updateData();
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`min-h-screen bg-gradient-to-br ${activeTheme.bgGradient} ${activeTheme.textColor} p-4 md:p-6 relative overflow-hidden`}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-[#28AFB0]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[10%] right-[5%] w-72 h-72 bg-[#99C1B9]/20 rounded-full blur-3xl"></div>
        <div className="absolute top-[40%] right-[10%] w-48 h-48 bg-[#E3B23C]/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="flex flex-col max-w-7xl mx-auto relative">
        {/* Enhanced header with theme switcher */}
        <div className="flex justify-between items-center mb-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <h1 className="text-3xl md:text-4xl font-bold relative z-10 pl-2">
              <span className="inline-block relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#28AFB0] via-[#99C1B9] to-[#E3B23C]">
                  Solar System
                </span>
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-[#28AFB0] via-[#99C1B9] to-[#E3B23C] rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </span>
              <span className="ml-2 font-bold">Monitor</span>
            </h1>
            <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-[#28AFB0] to-[#99C1B9] blur-xl opacity-50 z-0"></div>
          </motion.div>
          
          <div className="flex gap-2">
            {Object.values(themes).map((theme) => (
              <button
                key={theme.id}
                onClick={() => setActiveTheme(theme)}
                className={`p-2 rounded-full transition-all ${
                  activeTheme.id === theme.id 
                    ? 'bg-[#DDCECD]/20 shadow-lg' 
                    : 'hover:bg-[#DDCECD]/10'
                }`}
                title={theme.name}
              >
                {theme.icon}
              </button>
            ))}
          </div>
        </div>
        
        {/* Compact bento grid */}
        <div className="grid grid-cols-12 gap-3 h-[calc(100vh-7rem)]">
          {/* Main Solar Panel Card - Adjusted chart height */}
          <motion.div 
            className={`col-span-6 row-span-3 bg-gradient-to-br ${activeTheme.cardBg} rounded-2xl p-4 backdrop-blur-lg border border-[#DDCECD]/10 hover:border-[#E3B23C]/30 transition-all shadow-lg overflow-hidden flex flex-col`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.005 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="rounded-full bg-[#E3B23C]/20 p-1.5">
                <Sun className="w-5 h-5 text-[#E3B23C]" />
              </div>
              <h2 className="text-lg font-semibold">Solar Generation</h2>
            </div>
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E3B23C] to-[#E3B23C]/70 mb-2">
              {systemStatus.solarGeneration.toFixed(1)} <span className="text-xl text-[#DDCECD]/50">kW</span>
            </div>
            
            <div className="flex justify-between items-center py-1.5 px-3 bg-gray-800/50 rounded-xl mb-2 text-sm">
              <span className={activeTheme.mutedText}>Daily Peak</span>
              <span className="text-yellow-300 font-bold">{(systemStatus.solarGeneration * 1.5).toFixed(1)} kW</span>
            </div>
            
            {/* Chart container with flex-grow to fill available space */}
            <div className="flex-grow flex flex-col mt-1">
              <div className="flex-grow flex items-end">
                <div className="w-full h-full flex items-end justify-between gap-0.5">
                  {[...Array(24)].map((_, i) => {
                    const height = Math.max(10, Math.random() * 100);
                    return (
                      <motion.div 
                        key={i}
                        className="bg-gradient-to-t from-yellow-500/70 to-yellow-300/70 rounded-t-sm"
                        style={{ height: `${height}%`, width: '6px' }}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ delay: i * 0.03, duration: 0.4 }}
                      />
                    )
                  })}
                </div>
              </div>
              <div className="text-[10px] text-gray-500 mt-1 flex justify-between">
                <span>00:00</span>
                <span>12:00</span>
                <span>23:59</span>
              </div>
            </div>
          </motion.div>

          {/* Battery Status */}
          <motion.div 
            className={`col-span-3 row-span-2 bg-gradient-to-br ${activeTheme.cardBg} rounded-2xl p-4 backdrop-blur-lg border border-[#DDCECD]/10 hover:border-[#99C1B9]/30 transition-all shadow-lg`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="rounded-full bg-[#99C1B9]/20 p-1.5">
                <Battery className="w-5 h-5 text-[#99C1B9]" />
              </div>
              <span className="text-2xl font-bold text-[#99C1B9]">{systemStatus.batteryLevel.toFixed(0)}%</span>
            </div>
            
            <div className="w-full h-3 bg-[#423E37]/30 rounded-full overflow-hidden">
              <motion.div 
                className={`h-full bg-gradient-to-r ${activeTheme.progressBg}`}
                initial={{ width: '0%' }}
                animate={{ width: `${systemStatus.batteryLevel}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
            <div className="mt-3 text-gray-400 text-xs flex justify-between">
              <span>0%</span>
              <span>Battery Level</span>
              <span>100%</span>
            </div>
          </motion.div>

          {/* Home Consumption */}
          <motion.div 
            className={`col-span-3 row-span-2 bg-gradient-to-br ${activeTheme.cardBg} rounded-2xl p-4 backdrop-blur-lg border border-[#DDCECD]/10 hover:border-[#28AFB0]/30 transition-all shadow-lg`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="rounded-full bg-[#28AFB0]/20 p-1.5">
                <Home className="w-5 h-5 text-[#28AFB0]" />
              </div>
              <span className="text-2xl font-bold text-[#28AFB0]">{systemStatus.homeConsumption.toFixed(1)}</span>
            </div>
            
            <div className="flex justify-center my-2">
              <Lightbulb className="w-6 h-6 text-blue-400/30 animate-pulse" />
            </div>
            
            <div className="text-center">
              <span className="text-xl font-bold text-blue-300">kW</span>
              <div className="mt-1 text-gray-400 text-xs">Current Usage</div>
            </div>
          </motion.div>

          {/* Grid Feed */}
          <motion.div 
            className={`col-span-3 bg-gradient-to-br ${activeTheme.cardBg} rounded-2xl p-4 backdrop-blur-lg border border-[#DDCECD]/10 hover:border-[#3B7080]/30 transition-all shadow-lg`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center justify-between mb-1">
              <div className="rounded-full bg-purple-500/20 p-1.5">
                <CircuitBoard className="w-5 h-5 text-purple-400" />
              </div>
              <span className="text-2xl font-bold text-purple-400">{systemStatus.gridFeedIn.toFixed(1)}</span>
            </div>
            
            <div className="flex justify-center my-1">
              <Zap className="w-5 h-5 text-purple-300 animate-bounce opacity-75" />
            </div>
            
            <div className="text-center mt-1">
              <span className="text-lg font-bold text-purple-300">kW</span>
              <div className="mt-0.5 text-gray-400 text-xs">Grid Feed-In</div>
            </div>
          </motion.div>

          {/* Weather */}
          <motion.div 
            className={`col-span-3 bg-gradient-to-br ${activeTheme.cardBg} rounded-2xl p-4 backdrop-blur-lg border border-[#DDCECD]/10 hover:border-[#E3B23C]/30 transition-all shadow-lg`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <div className="flex items-center justify-between mb-1">
              <div className="rounded-full bg-orange-500/20 p-1.5">
                <CloudSun className="w-5 h-5 text-orange-400" />
              </div>
              <div className="flex items-center gap-0.5">
                <span className="text-2xl font-bold text-orange-400">28°</span>
                <span className="text-gray-400">C</span>
              </div>
            </div>
            
            <div className="flex justify-center my-1">
              <CloudSun className="w-6 h-6 text-orange-300" />
            </div>
            
            <div className="mt-1 text-gray-300 text-center text-sm font-medium">Sunny</div>
            <div className="mt-0.5 text-gray-400 text-[10px] text-center">Perfect for solar</div>
          </motion.div>

          {/* System Status - Improved spacing */}
          <motion.div 
            className={`col-span-6 row-span-1 bg-gradient-to-br ${activeTheme.cardBg} rounded-2xl p-4 backdrop-blur-lg border border-[#DDCECD]/10 hover:border-[#28AFB0]/30 transition-all shadow-lg`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-cyan-500/20 p-1.5">
                  <Activity className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="font-medium">System Status</h3>
              </div>
              <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 text-xs font-medium">
                <CheckCircle2 className="w-3 h-3" />
                <span>Online</span>
              </div>
            </div>
            
            <div className="flex justify-between">
              {/* Left side - component status with better spacing */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <div className="flex-shrink-0">
                    <PanelTop className="w-3.5 h-3.5 text-yellow-400" />
                  </div>
                  <span className={activeTheme.mutedText}>Panels</span>
                  <div className="ml-2 flex items-center">
                    <ChevronUp className="w-3 h-3 text-green-400 mr-0.5" />
                    <span className="text-green-400 font-medium">Active</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-shrink-0">
                    <Power className="w-3.5 h-3.5 text-purple-400" />
                  </div>
                  <span className={activeTheme.mutedText}>Inverter</span>
                  <div className="ml-2 flex items-center">
                    <span className="text-green-400 font-medium mr-1">Online</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-shrink-0">
                    <BatteryCharging className="w-3.5 h-3.5 text-green-400" />
                  </div>
                  <span className={activeTheme.mutedText}>Battery</span>
                  <div className="ml-2 flex items-center">
                    <Zap className="w-3 h-3 mr-0.5 text-yellow-400" />
                    <span className="text-green-400 font-medium">Charging</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-shrink-0">
                    <PlugZap className="w-3.5 h-3.5 text-blue-400" />
                  </div>
                  <span className={activeTheme.mutedText}>Grid</span>
                  <div className="ml-2 flex items-center">
                    <span className="text-green-400 font-medium">Connected</span>
                  </div>
                </div>
              </div>
              
              {/* Right side - system uptime with better visual separation */}
              <div className="flex flex-col justify-center items-center border-l border-gray-700/30 pl-6">
                <div className="text-sm font-semibold mb-1.5 flex items-center">
                  <Timer className="w-4 h-4 mr-1.5 text-cyan-400" />
                  System Uptime
                </div>
                <div className="flex items-center">
                  <div className="flex flex-col items-center px-2.5">
                    <span className="text-base text-green-400 font-bold">24</span>
                    <span className="text-[10px] text-gray-400">days</span>
                  </div>
                  <div className="text-gray-500 font-bold">:</div>
                  <div className="flex flex-col items-center px-2.5">
                    <span className="text-base text-green-400 font-bold">12</span>
                    <span className="text-[10px] text-gray-400">hrs</span>
                  </div>
                  <div className="text-gray-500 font-bold">:</div>
                  <div className="flex flex-col items-center px-2.5">
                    <span className="text-base text-green-400 font-bold">45</span>
                    <span className="text-[10px] text-gray-400">min</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Time */}
          <motion.div 
            className={`col-span-3 col-start-10 row-start-3 bg-gradient-to-br ${activeTheme.cardBg} rounded-2xl p-4 backdrop-blur-lg border border-[#DDCECD]/10 hover:border-[#19647E]/30 transition-all shadow-lg`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="rounded-full bg-[#19647E]/20 p-1.5">
                <Clock className="w-5 h-5 text-[#19647E]" />
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-[#19647E] mb-0.5">
                {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
              <div className={`${activeTheme.mutedText} text-xs`}>
                {new Date().toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
