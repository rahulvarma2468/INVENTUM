from PIL import Image
import os
import sys

# Directory containing images
IMAGE_DIR = r"c:\Users\sumanth\OneDrive\Desktop\INVENTUM 2K26\inventum-react\public\images"

# MAX dimensions
MAX_WIDTH = 1200
MAX_HEIGHT = 1200
QUALITY = 80

def optimize_images():
    if not os.path.exists(IMAGE_DIR):
        print(f"Directory not found: {IMAGE_DIR}")
        return

    print(f"Scanning {IMAGE_DIR} for optimization...")
    
    for filename in os.listdir(IMAGE_DIR):
        filepath = os.path.join(IMAGE_DIR, filename)
        
        # Skip directories
        if os.path.isdir(filepath):
            continue
            
        # Check size (skip small files)
        file_size_mb = os.path.getsize(filepath) / (1024 * 1024)
        if file_size_mb < 0.5: # Skip files smaller than 500KB
            continue

        ext = os.path.splitext(filename)[1].lower()
        if ext not in ['.jpg', '.jpeg', '.png']:
            continue

        try:
            print(f"Optimizing {filename} ({file_size_mb:.2f} MB)...")
            
            with Image.open(filepath) as img:
                # Resize if too big
                width, height = img.size
                if width > MAX_WIDTH or height > MAX_HEIGHT:
                    img.thumbnail((MAX_WIDTH, MAX_HEIGHT), Image.Resampling.LANCZOS)
                    print(f"  Resized from {width}x{height} to {img.size[0]}x{img.size[1]}")
                
                # Save optimized
                if ext in ['.jpg', '.jpeg']:
                    img.save(filepath, "JPEG", optimize=True, quality=QUALITY)
                elif ext == '.png':
                    # PNG optimization is trickier, maybe just resize.
                    # converting to P mode can reduce size but lose quality.
                    # We'll just save with optimize=True
                    img.save(filepath, "PNG", optimize=True)
                
                new_size_mb = os.path.getsize(filepath) / (1024 * 1024)
                print(f"  Done. New size: {new_size_mb:.2f} MB")
                
        except Exception as e:
            print(f"  Error optimizing {filename}: {e}")

if __name__ == "__main__":
    optimize_images()
