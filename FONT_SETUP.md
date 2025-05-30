# Calmius Sans High Font Setup

This project uses **Calmius Sans High** as the primary font family. Follow these steps to complete the font setup:

## 1. Obtain the Font Files

Calmius Sans High is a premium font. You need to obtain the font files legally through one of these methods:

### Option A: Purchase from the Official Source

- Visit the official font foundry or authorized distributors
- Purchase a web license for Calmius Sans High
- Download the font files in TTF, WOFF, and WOFF2 formats

### Option B: Free Download (if available)

- Some font websites offer free versions for personal use
- Check the license carefully before using for commercial purposes
- Download from reputable sources like Google Fonts, Font Squirrel, etc.

## 2. Required Font Files

You need the following font weights for the complete setup:

```
CalmiusSansHigh-Light.ttf (300)
CalmiusSansHigh-Light.woff
CalmiusSansHigh-Light.woff2

CalmiusSansHigh-Regular.ttf (400)
CalmiusSansHigh-Regular.woff
CalmiusSansHigh-Regular.woff2

CalmiusSansHigh-Medium.ttf (500)
CalmiusSansHigh-Medium.woff
CalmiusSansHigh-Medium.woff2

CalmiusSansHigh-SemiBold.ttf (600)
CalmiusSansHigh-SemiBold.woff
CalmiusSansHigh-SemiBold.woff2

CalmiusSansHigh-Bold.ttf (700)
CalmiusSansHigh-Bold.woff
CalmiusSansHigh-Bold.woff2

CalmiusSansHigh-ExtraBold.ttf (800)
CalmiusSansHigh-ExtraBold.woff
CalmiusSansHigh-ExtraBold.woff2
```

## 3. Installation

1. Place all font files in the `public/fonts/` directory
2. Ensure the file names match exactly as listed above
3. The font is already configured in the CSS and Tailwind config

## 4. Font Conversion (if needed)

If you only have TTF files, you can convert them to WOFF and WOFF2 formats:

### Online Converters:

- [CloudConvert](https://cloudconvert.com/ttf-to-woff2)
- [Convertio](https://convertio.co/ttf-woff2/)
- [Font Squirrel Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator)

### Command Line (using fonttools):

```bash
# Install fonttools
pip install fonttools

# Convert TTF to WOFF2
fonttools ttLib.woff2 compress CalmiusSansHigh-Regular.ttf

# Convert TTF to WOFF
ttf2woff CalmiusSansHigh-Regular.ttf CalmiusSansHigh-Regular.woff
```

## 5. Verification

After placing the font files, you can verify the setup:

1. Start the development server: `npm run dev`
2. Open the browser developer tools
3. Check the Network tab for font file requests
4. Verify in the Elements tab that the font-family is applied

## 6. Usage in Components

The font is now available through Tailwind classes:

```jsx
// Default sans-serif (now Calmius Sans High)
<h1 className="font-sans">Heading</h1>

// Specific font weights
<p className="font-light">Light text</p>
<p className="font-normal">Regular text</p>
<p className="font-medium">Medium text</p>
<p className="font-semibold">Semi-bold text</p>
<p className="font-bold">Bold text</p>
<p className="font-extrabold">Extra bold text</p>

// Display font (same as sans)
<h1 className="font-display">Display heading</h1>
```

## 7. Fallback

If the font files are not available, the system will fall back to:

1. Inter (Google Fonts)
2. System fonts (-apple-system, BlinkMacSystemFont, etc.)
3. Generic sans-serif

## License Considerations

- Always check the font license before using in production
- Some fonts require attribution
- Commercial projects may need commercial licenses
- Web font licenses may differ from desktop licenses

## Troubleshooting

### Font not loading:

1. Check file paths in browser Network tab
2. Verify CORS headers if serving from CDN
3. Check file formats are supported by target browsers
4. Verify file names match exactly

### Performance optimization:

1. Use `font-display: swap` (already configured)
2. Preload critical font files in HTML head
3. Consider font subsetting for better performance
4. Use WOFF2 format for modern browsers
