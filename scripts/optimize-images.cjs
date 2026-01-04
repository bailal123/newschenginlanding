const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const mediaDir = path.join(__dirname, '../public/media');

async function optimizeImages() {
  console.log('🖼️ Optimizing images...\n');

  // Optimize logo.png - resize to 112x112 (2x for retina) and convert to WebP
  const logoPath = path.join(mediaDir, 'logo.png');
  if (fs.existsSync(logoPath)) {
    // Create optimized PNG version
    await sharp(logoPath)
      .resize(112, 112, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png({ quality: 85, compressionLevel: 9 })
      .toFile(path.join(mediaDir, 'logo-optimized.png'));
    
    // Create WebP version
    await sharp(logoPath)
      .resize(112, 112, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .webp({ quality: 85 })
      .toFile(path.join(mediaDir, 'logo.webp'));
    
    console.log('✅ Logo optimized: logo-optimized.png & logo.webp created');
    
    // Get file sizes
    const originalSize = fs.statSync(logoPath).size;
    const optimizedSize = fs.statSync(path.join(mediaDir, 'logo-optimized.png')).size;
    const webpSize = fs.statSync(path.join(mediaDir, 'logo.webp')).size;
    
    console.log(`   Original: ${(originalSize / 1024).toFixed(1)} KB`);
    console.log(`   Optimized PNG: ${(optimizedSize / 1024).toFixed(1)} KB`);
    console.log(`   WebP: ${(webpSize / 1024).toFixed(1)} KB`);
    console.log(`   Savings: ${((1 - webpSize / originalSize) * 100).toFixed(1)}%\n`);
    
    // Replace original with optimized
    fs.copyFileSync(path.join(mediaDir, 'logo-optimized.png'), logoPath);
    fs.unlinkSync(path.join(mediaDir, 'logo-optimized.png'));
    console.log('✅ Replaced original logo.png with optimized version\n');
  }

  // Optimize tamara image
  const tamaraPath = path.join(mediaDir, 'tamara-1-min.png');
  if (fs.existsSync(tamaraPath)) {
    // Create optimized version (70x40 for 2x)
    await sharp(tamaraPath)
      .resize(70, 40, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
      .png({ quality: 85, compressionLevel: 9 })
      .toFile(path.join(mediaDir, 'tamara-optimized.png'));
    
    const originalSize = fs.statSync(tamaraPath).size;
    const optimizedSize = fs.statSync(path.join(mediaDir, 'tamara-optimized.png')).size;
    
    console.log('✅ Tamara image optimized');
    console.log(`   Original: ${(originalSize / 1024).toFixed(1)} KB`);
    console.log(`   Optimized: ${(optimizedSize / 1024).toFixed(1)} KB`);
    console.log(`   Savings: ${((1 - optimizedSize / originalSize) * 100).toFixed(1)}%\n`);
    
    // Replace original
    fs.copyFileSync(path.join(mediaDir, 'tamara-optimized.png'), tamaraPath);
    fs.unlinkSync(path.join(mediaDir, 'tamara-optimized.png'));
    console.log('✅ Replaced original tamara image with optimized version\n');
  }

  console.log('🎉 Image optimization complete!');
}

optimizeImages().catch(console.error);
