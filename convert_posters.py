import fitz  # PyMuPDF
import os

# Define mappings: 'PDF Filename': 'Output JPG Filename'
# Source directory: c:\Users\sumanth\OneDrive\Desktop\INVENTUM 2K26
# Target directory: c:\Users\sumanth\OneDrive\Desktop\INVENTUM 2K26\inventum-react\public\images

SOURCE_DIR = r"c:\Users\sumanth\OneDrive\Desktop\INVENTUM 2K26"
TARGET_DIR = r"c:\Users\sumanth\OneDrive\Desktop\INVENTUM 2K26\inventum-react\public\images"

mappings = {
    "bootcamp.pdf": "career-craft.jpg",
    "rapid.pdf": "rapid-fire.jpg",
    "paper pres.pdf": "paper-poster.jpg",
    "ADMADSHOW.pdf": "admad.jpg",
    "Half.pdf": "half-art.jpg",
    "mr ms.pdf": "mr-ms-inventum.jpg",
    "boot.pdf": "career-craft-backup.jpg", # Duplicate check
    "poster pres.pdf": "paper-poster-backup.jpg" # Duplicate check
}

if not os.path.exists(TARGET_DIR):
    os.makedirs(TARGET_DIR)

print(f"Starting conversion from {SOURCE_DIR} to {TARGET_DIR}...")

for pdf_name, jpg_name in mappings.items():
    pdf_path = os.path.join(SOURCE_DIR, pdf_name)
    output_path = os.path.join(TARGET_DIR, jpg_name)
    
    if os.path.exists(pdf_path):
        try:
            print(f"Converting {pdf_name}...")
            doc = fitz.open(pdf_path)
            page = doc.load_page(0)  # load the first page
            pix = page.get_pixmap(dpi=300) # High quality
            pix.save(output_path)
            print(f"Saved {jpg_name}")
            doc.close()
        except Exception as e:
            print(f"Failed to convert {pdf_name}: {e}")
    else:
        print(f"File not found: {pdf_name}")

print("Conversion complete.")
