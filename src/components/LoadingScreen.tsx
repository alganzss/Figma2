import { motion } from 'motion/react';
import osisLogo from 'figma:asset/435879a11c370ff8a225ed5b72b5d5bfa354f83b.png';

interface LoadingScreenProps {
  isLoading: boolean;
}

export function LoadingScreen({ isLoading }: LoadingScreenProps) {
  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
    >
      {/* Background gradient animation */}
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, #8b5cf6 0%, transparent 50%)',
            'radial-gradient(circle at 40% 40%, #06b6d4 0%, transparent 50%)',
            'radial-gradient(circle at 60% 60%, #10b981 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute inset-0 opacity-5"
      />

      <div className="relative flex flex-col items-center space-y-8">
        {/* Main logo container */}
        <div className="relative">
          {/* Outer ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-0 w-32 h-32 border-4 border-transparent border-t-blue-500 border-r-purple-500 rounded-full"
          />
          
          {/* Middle ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-2 w-28 h-28 border-3 border-transparent border-b-cyan-500 border-l-emerald-500 rounded-full"
          />

          {/* Inner ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-4 w-24 h-24 border-2 border-transparent border-t-indigo-500 rounded-full"
          />

          {/* Logo with pulse animation */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotateY: [0, 180, 360],
            }}
            transition={{
              scale: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              },
              rotateY: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="relative z-10 w-32 h-32 flex items-center justify-center bg-white rounded-full shadow-2xl loading-glow loading-float"
          >
            <motion.img
              src={osisLogo}
              alt="OSIS Logo"
              className="w-20 h-20 object-contain"
              animate={{
                filter: [
                  'brightness(1) saturate(1)',
                  'brightness(1.2) saturate(1.3)',
                  'brightness(1) saturate(1)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -20, 0],
                x: [0, Math.sin(i) * 10, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
              className="absolute w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              style={{
                top: `${20 + Math.sin(i * 60) * 40}%`,
                left: `${20 + Math.cos(i * 60) * 40}%`,
              }}
            />
          ))}
        </div>

        {/* Loading text */}
        <div className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h2 className="text-2xl font-semibold text-primary">OSIS</h2>
            <p className="text-muted-foreground">MAN 1 Model Bengkulu</p>
          </motion.div>

          {/* Animated loading dots */}
          <motion.div
            className="flex justify-center space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <span className="text-lg text-muted-foreground">Memuat</span>
            {[...Array(3)].map((_, i) => (
              <motion.span
                key={i}
                animate={{
                  opacity: [0.3, 1, 0.3],
                  y: [0, -4, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
                className="text-lg text-primary"
              >
                .
              </motion.span>
            ))}
          </motion.div>

          {/* Progress bar */}
          <motion.div
            className="w-64 h-1 bg-gray-200 rounded-full overflow-hidden"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 shimmer-effect"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50" />
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>
    </motion.div>
  );
}