import React, { useState } from 'react';
import './TopUniversitiesCarousel.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

// ✅ Correct way to import local images
import northWesternImg from '../assets/North_Western.png';
import kazanImg from '../assets/Kazan_University.jpg';
import farImg from '../assets/far1-585x295.jpg';
import kurskImg from '../assets/kursk.png'; 
import petroImg from '../assets/petro.png';
import CrimeanImg from '../assets/crimea.png';
import munichImg from '../assets/munich.png';
import chariteImg from '../assets/charite.png';

// You can use Unsplash placeholders or local India images
const indiaPlaceholder = "https://images.unsplash.com/photo-1581091870625-46e76a771726?auto=format&fit=crop&w=800&q=60";

const universityDataByCountry = {
  India: [
    { name: "All India Institute of Medical Sciences, New Delhi", image: indiaPlaceholder },
    { name: "Christian Medical College, Vellore", image: indiaPlaceholder },
    { name: "Institute of Medical Sciences, Banaras Hindu University, Varanasi", image: indiaPlaceholder },
    { name: "Amrita Institute of Medical Sciences & Research, Kochi", image: indiaPlaceholder },
    { name: "Jawaharlal Institute of Post Graduate Medical Education & Research, Puducherry", image: indiaPlaceholder },
    { name: "Kasturba Medical College, Manipal", image: indiaPlaceholder },
    { name: "King George’s Medical University, Lucknow", image: indiaPlaceholder },
    { name: "Madras Medical College & Government General Hospital, Chennai", image: indiaPlaceholder },
    { name: "Sri Ramachandra Institute of Higher Education And Research, Chennai", image: indiaPlaceholder },
    { name: "St. John’s Medical College, Bengaluru", image: indiaPlaceholder },
    { name: "Aligarh Muslim University, Aligarh", image: indiaPlaceholder },
    { name: "Christian Medical College, Ludhiana", image: indiaPlaceholder },
    { name: "JSS Medical College, Mysore", image: indiaPlaceholder },
    { name: "M. S. Ramaiah Medical College, Bengaluru", image: indiaPlaceholder },
    { name: "Government Medical College & Hospital", image: indiaPlaceholder },
  ],

  Russia: [
    { name: 'North Western State Medical University, Russia', image: northWesternImg },
    { name: 'Kazan State Medical University, Russia', image: kazanImg },
    { name: 'Far Eastern Federal University (FEFU), Russia', image: farImg },
    { name: 'Kursk State Medical University (Institute of Medicine), Russia', image: kurskImg },
    { name: 'Petrozavodsk State University (Institute of Medicine), Russia', image: petroImg },
    { name: 'Crimean Federal University, Russia', image: CrimeanImg },
  ],

  Germany: [
    { name: 'Ludwig-Maximilians-Universität München (LMU Munich)', image: munichImg },
    { name: 'Charité – Universitätsmedizin Berlin', image: chariteImg },
  ],

  Georgia: [
    { name: 'Tbilisi State Medical University, Georgia', image: 'https://images.unsplash.com/photo-1558222215-0f9bed54e3ad?auto=format&fit=crop&w=800&q=60' },
  ],

  Belarus: [
    { name: 'Belarusian State Medical University, Belarus', image: 'https://images.unsplash.com/photo-1581091870625-46e76a771726?auto=format&fit=crop&w=800&q=60' },
  ],

  Philippines: [
    { name: 'AMA School of Medicine, Philippines', image: 'https://images.unsplash.com/photo-1558222215-0f9bed54e3ad?auto=format&fit=crop&w=800&q=60' },
  ],

  USA: [
    { name: 'Harvard Medical School, USA', image: 'https://images.unsplash.com/photo-1579546928685-ef6900cf36b2?auto=format&fit=crop&w=800&q=60' },
    { name: 'University of Washington School of Medicine, USA', image: 'https://images.unsplash.com/photo-1600891963930-960e92c353c8?auto=format&fit=crop&w=800&q=60' },
  ],
};

const allCountries = Object.keys(universityDataByCountry);

function TopUniversitiesCarousel() {
  const [selectedCountry, setSelectedCountry] = useState('All');

  const displayedUniversities =
    selectedCountry === 'All'
      ? Object.values(universityDataByCountry).flat()
      : universityDataByCountry[selectedCountry] || [];

  return (
    <section className="university-carousel-section">
      <h2 className="carousel-title">Top Medical Universities Abroad</h2>
      <p className="carousel-description">
        Explore world-class MBBS and medical programs in top-ranked universities across India, Russia,
        Germany, Georgia, Belarus, Philippines, and the USA.
      </p>

      {/* Country Filter Buttons */}
      <div className="top-countries-list">
        <div
          className={`country-chip ${selectedCountry === 'All' ? 'active' : ''}`}
          onClick={() => setSelectedCountry('All')}
        >
          All
        </div>
        {allCountries.map((country) => (
          <div
            key={country}
            className={`country-chip ${selectedCountry === country ? 'active' : ''}`}
            onClick={() => setSelectedCountry(country)}
          >
            {country}
          </div>
        ))}
      </div>

      {/* Carousel */}
      {displayedUniversities.length === 0 ? (
        <p>No universities available for {selectedCountry}.</p>
      ) : (
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          speed={1000}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          grabCursor={true}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {displayedUniversities.map((uni, index) => (
            <SwiperSlide key={index}>
              <div className="university-card">
                <img src={uni.image} alt={uni.name} />
                <h3>{uni.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
}

export default TopUniversitiesCarousel;
