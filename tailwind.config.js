/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",  // Use class-based dark mode
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],  // Specify the content files to be scanned for classes
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],  // Add the 'Inter' font as a primary sans-serif font
      },
      colors: {
        border: "#E5E7EB",
        input: "#E5E7EB",
        ring: "#1F2937",
        background: "#FFFFFF",
        foreground: "#1F2937",
        sage: {
          50: "#f4f7f4",
          100: "#e3efe3",
          200: "#c6e0c6",
          300: "#98c798",
          400: "#66a766",
          500: "#438943",
          600: "#326c32",
          700: "#2a572a",
          800: "#244524",
          900: "#1e371e",
        },
        primary: "#1F2937",
        "primary-foreground": "#F9FAFB",
        secondary: "#F3F4F6",
        "secondary-foreground": "#1F2937",
        destructive: "#EF4444",
        "destructive-foreground": "#F9FAFB",
        muted: "#F3F4F6",
        "muted-foreground": "#6B7280",
        accent: "#F3F4F6",
        "accent-foreground": "#1F2937",
        popover: "#FFFFFF",
        "popover-foreground": "#1F2937",
        card: "#FFFFFF",
        "card-foreground": "#1F2937",
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        sm: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
        "fade-up": "fade-up 0.5s ease-out forwards",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
};

module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx,vue}', // Define the paths to all your template files
  ],
  theme: {
    extend: {
      colors: {
        // You can define custom colors here if necessary
        background: '#f5f5f5',  // Example background color
        foreground: '#333333',  // Example foreground color
      },
    },
  },
  plugins: [],
}
