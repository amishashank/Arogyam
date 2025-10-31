# Foxo Clone - Medicine Store with Scroll Animations

A complete, pixel-perfect animated website clone featuring smooth scroll-based animations, parallax effects, curved connection lines, and a fully functional medicine store with persistent cart powered by localStorage.

## Features

- **Stunning Scroll-Based Animations**: Powered by Framer Motion with smooth fade-ins, parallax effects, and stagger animations
- **Curved Connection Lines**: Beautiful animated SVG curves connecting different sections
- **Medicine Store**: Full e-commerce functionality with 6 medicine products
- **Persistent Shopping Cart**: Cart data persists using localStorage - survives page refresh and browser close
- **Stock Management**: Real-time stock validation preventing over-ordering
- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile
- **Modern Tech Stack**: Built with React 18, Vite, Tailwind CSS, and Framer Motion

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router DOM** - Client-side routing
- **React Icons** - Icon library
- **localStorage API** - Persistent storage

## Project Structure

```
foxo-clone/
├── public/                 # Static assets
├── src/
│   ├── components/
│   │   ├── animations/    # Reusable animation components
│   │   │   └── CurvedLine.jsx
│   │   ├── cart/          # Shopping cart components
│   │   │   ├── CartItem.jsx
│   │   │   ├── CartSummary.jsx
│   │   │   └── QuantityControl.jsx
│   │   ├── common/        # Common components (Navbar, Footer)
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── medicine/      # Medicine store components
│   │   │   ├── CartIcon.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   └── ProductGrid.jsx
│   │   └── sections/      # Page sections
│   │       ├── HeroSection.jsx
│   │       ├── AboutSection.jsx
│   │       ├── FeaturesSection.jsx
│   │       ├── MedicineStoreSection.jsx
│   │       └── FAQSection.jsx
│   ├── context/           # React Context for state management
│   │   └── CartContext.jsx
│   ├── hooks/             # Custom React hooks
│   │   └── useLocalStorage.jsx
│   ├── pages/             # Page components
│   │   ├── HomePage.jsx
│   │   └── CartPage.jsx
│   ├── utils/             # Utility functions and data
│   │   ├── cartHelpers.js
│   │   └── medicineData.js
│   ├── App.jsx            # Main app component with routing
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles with Tailwind
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd foxo-clone
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Build for production (outputs to `dist/`)
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## Medicine Store Features

### Products
- 6 different medicines with names, descriptions, prices, and stock levels
- Product images from Flaticon CDN
- Real-time stock indicators (green for >10, orange for ≤10, red for out of stock)

### Shopping Cart
- Add items to cart with automatic quantity validation
- Increment/decrement quantities with stock limits
- Remove items from cart with confirmation
- Real-time total calculation
- Empty cart state with call-to-action
- Cart badge showing total item count

### localStorage Persistence
- All cart data automatically saved to browser's localStorage
- Cart persists across:
  - Page refreshes
  - Browser close/reopen
  - Tab close/reopen
  - Navigation between pages

### Stock Validation
- Prevents adding items beyond available stock
- Shows warning when attempting to exceed stock
- Disables "Add to Cart" button when stock is 0
- Displays current quantity in cart vs available stock

## Animations

### Scroll-Based Animations
- Hero section with parallax background
- Sections fade in when entering viewport
- Stagger animations for cards and lists
- Smooth curved lines connecting sections

### Interactive Animations
- Hover effects on buttons and cards
- Cart badge animates when count changes
- Product cards lift on hover
- FAQ accordion smooth expand/collapse

### Performance
- All animations use GPU-accelerated properties (transform, opacity)
- Respects `prefers-reduced-motion` for accessibility
- Optimized with Framer Motion's performance features

## Routes

- `/` - Homepage with all sections (Hero, About, Features, Medicine Store, FAQ)
- `/cart` - Shopping cart page with items, quantities, and summary

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

- Product Page and Cart Page are connected via localStorage
- Items added to cart persist even after reload
- All prices are in Indian Rupees (₹)
- Checkout functionality is a placeholder (not fully implemented)

## License

This is a demonstration project showcasing modern web development techniques.

## Acknowledgments

- Inspired by Foxo.club
- Icons from React Icons and Flaticon
- Built with modern React best practices