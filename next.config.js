// next.config.js
const nextConfig = {
    experimental: {
      turbo: {
        resolveExtensions: ['.tsx', '.ts', '.jsx', '.js', '.mjs', '.json'],
        rules: {
          '*.{jpg,png,svg,webp}': {
            loaders: ['next-image'],
            as: 'static'
          }
        }
      },
      optimizePackageImports: ['@radix-ui/react-dialog', 'lucide-react']
    },
    // Use this instead of serverComponentsExternalPackages:
    serverExternalPackages: ['sharp', 'onnxruntime-node'],
    typescript: {
      ignoreBuildErrors: false,
    }
  }
  module.exports = {
    experimental: {
      turbo: {
        gpu: true, // Enable GPU acceleration
        memoryLimit: 4096 // MB
      }
    }
  }
  
  module.exports = nextConfig