import React, { useEffect, useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { popularDestinations, trendingPackages } from '../data/travelData';
import '../components/DestinationsGrid.css';
import './PageBanner.css';
import './SearchResultsPage.css';
import { FaClock, FaStar, FaMapMarkerAlt } from 'react-icons/fa';

const SearchResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [results, setResults] = useState([]);
  
  // Parse query parameters
  const queryParams = new URLSearchParams(location.search);
  const toCity = queryParams.get('to') || '';
  const packageType = queryParams.get('type') || '';
  const duration = queryParams.get('dur') || '';
  const searchQuery = queryParams.get('q') || ''; // General search string if any

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Flatten all nested sub-items from popularDestinations
    let allItems = [...trendingPackages];
    
    popularDestinations.forEach(state => {
      if (state.categories) {
        Object.values(state.categories).forEach(categoryArray => {
          if (Array.isArray(categoryArray)) {
            // Attach state context to these items
            const enhancedItems = categoryArray.map(item => ({
              ...item,
              stateName: state.name,
              stateId: state.id
            }));
            allItems = [...allItems, ...enhancedItems];
          }
        });
      }
    });

    // Remove duplicates by ID (just in case)
    const uniqueItems = Array.from(new Map(allItems.map(item => [item.id, item])).values());

    // Filter Logic
    const filtered = uniqueItems.filter(item => {
      let matches = true;
      
      // 1. Destination Filter (State or specific place)
      if (toCity) {
        const destMatch = 
          item.stateId?.toLowerCase() === toCity.toLowerCase() ||
          item.stateName?.toLowerCase().includes(toCity.toLowerCase()) ||
          item.name?.toLowerCase().includes(toCity.toLowerCase());
        
        if (!destMatch) matches = false;
      }

      // 2. Search Query (From Navbar search if we implement it)
      if (searchQuery) {
        const qMatch = 
          item.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.desc?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description?.toLowerCase().includes(searchQuery.toLowerCase());
          
        if (!qMatch) matches = false;
      }

      // 3. Type Filter (Adventure, Honeymoon, Religious, etc.)
      if (packageType && matches) {
        // Map UI select types to data categories
        const typeMapping = {
          'honeymoon': ['honeymoon', 'romantic'],
          'religious': ['spiritual', 'temple', 'darshan'],
          'adventure': ['adventure', 'trek', 'safari'],
          'luxury': ['luxury', 'heritage'],
          'family': ['package', 'family', 'tour']
        };
        
        const keywords = typeMapping[packageType.toLowerCase()] || [packageType.toLowerCase()];
        const itemText = (item.name + " " + (item.desc || item.description)).toLowerCase();
        
        const typeMatch = keywords.some(kw => itemText.includes(kw));
        if (!typeMatch) matches = false;
      }

      // 4. Duration Filter (2-3, 4-5, 6-7, 8+)
      if (duration && matches && item.duration) {
        const daysMatch = item.duration.match(/(\d+)[Nn]?\/(\d+)[Dd]?/);
        let days = 0;
        if (daysMatch) {
          days = parseInt(daysMatch[2]); // Get Days
        } else if (item.duration.toLowerCase().includes('day')) {
          days = 1; // E.g. "1 Day Trip"
        }

        if (duration === '2-3' && (days < 2 || days > 3)) matches = false;
        if (duration === '4-5' && (days < 4 || days > 5)) matches = false;
        if (duration === '6-7' && (days < 6 || days > 7)) matches = false;
        if (duration === '8+' && days < 8) matches = false;
      }

      return matches;
    });

    setResults(filtered);
  }, [location.search, toCity, packageType, duration, searchQuery]);

  return (
    <div className="standalone-page search-results-page">
      <div className="page-banner" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1455218873509-8097305ee378?w=1920&q=80)', height: '250px' }}>
        <div className="text-center container">
          <h1 className="page-banner-title">Search Results</h1>
          <p className="text-white mt-2" style={{fontSize: '18px'}}>
            Found {results.length} package{results.length !== 1 ? 's' : ''} matching your criteria
          </p>
        </div>
      </div>

      <div className="container py-60">
        
        {/* Active Filters Display */}
        <div className="active-filters shadow-sm">
          <span><strong>Filtering by:</strong></span>
          {toCity && <span className="filter-badge">Destination: {toCity}</span>}
          {packageType && <span className="filter-badge">Type: {packageType}</span>}
          {duration && <span className="filter-badge">Duration: {duration} days</span>}
          {searchQuery && <span className="filter-badge">Search: "{searchQuery}"</span>}
          {(!toCity && !packageType && !duration && !searchQuery) && <span>All Packages</span>}
        </div>

        {results.length === 0 ? (
          <div className="no-results shadow-sm text-center">
            <h2>No exact matches found</h2>
            <p className="text-secondary mt-2 mb-6">Try adjusting your filters or search for popular destinations like Rajasthan or Himachal.</p>
            <Link to="/tours" className="btn-primary btn-lg">Browse All Tours</Link>
          </div>
        ) : (
          <div className="sub-category-grid" style={{marginTop: '40px'}}>
            {results.map(item => (
              <div key={item.id} className="sub-card card-hover-lift shadow-sm">
                <div className="sub-card__img-wrap">
                  <img src={item.image} alt={item.name} loading="lazy" />
                  <div className="sub-card__badge badge-primary"><FaClock /> {item.duration}</div>
                </div>
                <div className="sub-card__body">
                  <h3 className="sub-card__title">{item.name}</h3>
                  {item.stateName && <div className="text-sm text-muted mb-2"><FaMapMarkerAlt /> {item.stateName}</div>}
                  <p className="sub-card__desc">{item.desc || item.description}</p>
                  <div className="sub-card__footer">
                    <div className="sub-card__price">
                      <span>From</span>
                      <strong>₹{(item.price || item.originalPrice)?.toLocaleString()}</strong>
                    </div>
                    <button 
                      className="btn-primary btn-sm"
                      onClick={() => {
                        navigate('/book', { state: { name: item.name, image: item.image, price: item.price || item.originalPrice, duration: item.duration, type: 'tour' } });
                      }}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResultsPage;
