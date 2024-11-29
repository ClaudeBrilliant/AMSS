// Learning Page Navigation
document.addEventListener('DOMContentLoaded', () => {
  const learningSection = document.getElementById('learning');
  const learningPage = document.getElementById('learning-page');
  const pesticideLearnBtn = document.getElementById('pesticide-learn');
  const fertilizerLearnBtn = document.getElementById('fertilizer-learn');
  const backToLearningCenterBtn = document.getElementById('back-to-learning-center');
  
  const pesticideContent = document.getElementById('pesticide-content');
  const fertilizerContent = document.getElementById('fertilizer-content');

  // Show learning page for Pesticide module
  pesticideLearnBtn.addEventListener('click', (e) => {
      e.preventDefault();
      learningSection.style.display = 'none';
      learningPage.style.display = 'block';
      
      // Show pesticide content, hide others
      pesticideContent.style.display = 'block';
      fertilizerContent.style.display = 'none';
  });

  // Show learning page for Fertilizer module
  fertilizerLearnBtn.addEventListener('click', (e) => {
      e.preventDefault();
      learningSection.style.display = 'none';
      learningPage.style.display = 'block';
      
      // Show fertilizer content, hide others
      fertilizerContent.style.display = 'block';
      pesticideContent.style.display = 'none';
  });

  // Return to learning center
  backToLearningCenterBtn.addEventListener('click', () => {
      learningPage.style.display = 'none';
      learningSection.style.display = 'block';
      
      // Reset content visibility
      pesticideContent.style.display = 'none';
      fertilizerContent.style.display = 'none';
  });

  // Rest of the previous script remains the same...
  const cropRecommendationForm = document.getElementById('cropRecommendationForm');
  const diseaseDiagnosisForm = document.getElementById('diseaseDiagnosisForm');
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  
  // Form Switching Logic
  const loginContainer = document.getElementById('loginContainer');
  const registerContainer = document.getElementById('registerContainer');
  const showRegisterLink = document.getElementById('showRegister');
  const showLoginLink = document.getElementById('showLogin');

  showRegisterLink.addEventListener('click', (e) => {
      e.preventDefault();
      loginContainer.style.display = 'none';
      registerContainer.style.display = 'block';
  });

  showLoginLink.addEventListener('click', (e) => {
      e.preventDefault();
      registerContainer.style.display = 'none';
      loginContainer.style.display = 'block';
  });

  // Existing crop recommendation, disease diagnosis, and marketplace logic...
});// Crop Recommendation Logic
const cropRecommendations = {
  tropical: {
      acidic: ['Rice', 'Cassava', 'Coconut'],
      neutral: ['Banana', 'Papaya', 'Pineapple'],
      alkaline: ['Sugarcane', 'Mango']
  },
  subtropical: {
      acidic: ['Citrus', 'Tea', 'Coffee'],
      neutral: ['Cotton', 'Tobacco', 'Tomato'],
      alkaline: ['Wheat', 'Sorghum']
  },
  temperate: {
      acidic: ['Potato', 'Blueberry', 'Strawberry'],
      neutral: ['Corn', 'Soybean', 'Sunflower'],
      alkaline: ['Barley', 'Alfalfa']
  }
};

// Disease Diagnosis Mapping
const diseaseDiagnosisData = {
  'yellowing': ['Nutrient Deficiency', 'Chlorosis', 'Root Rot'],
  'spots': ['Fungal Infection', 'Bacterial Blight', 'Leaf Spot Disease'],
  'wilting': ['Water Stress', 'Root Damage', 'Wilt Disease']
};

document.addEventListener('DOMContentLoaded', () => {
  const cropRecommendationForm = document.getElementById('cropRecommendationForm');
  const diseaseDiagnosisForm = document.getElementById('diseaseDiagnosisForm');
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  
  // Form Switching Logic
  const loginContainer = document.getElementById('loginContainer');
  const registerContainer = document.getElementById('registerContainer');
  const showRegisterLink = document.getElementById('showRegister');
  const showLoginLink = document.getElementById('showLogin');

  showRegisterLink.addEventListener('click', (e) => {
      e.preventDefault();
      loginContainer.style.display = 'none';
      registerContainer.style.display = 'block';
  });

  showLoginLink.addEventListener('click', (e) => {
      e.preventDefault();
      registerContainer.style.display = 'none';
      loginContainer.style.display = 'block';
  });

  // Crop Recommendation Handler
  cropRecommendationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const climate = e.target.elements['climate'].value;
      const soilPh = e.target.elements['soil-ph'].value;
      const cropResults = document.getElementById('cropResults');

      const recommendations = cropRecommendations[climate][soilPh];
      cropResults.innerHTML = `
          <h3>Recommended Crops:</h3>
          <ul>
              ${recommendations.map(crop => `<li>${crop}</li>`).join('')}
          </ul>
      `;
  });

  // Disease Diagnosis Handler
  diseaseDiagnosisForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const symptoms = Array.from(e.target.querySelectorAll('input[type="checkbox"]:checked'))
                             .map(checkbox => checkbox.value);
      const diseaseResult = document.getElementById('diseaseResult');

      const possibleDiseases = symptoms.flatMap(symptom => 
          diseaseDiagnosisData[symptom] || []
      );

      diseaseResult.innerHTML = `
          <h3>Potential Diseases:</h3>
          <ul>
              ${[...new Set(possibleDiseases)].map(disease => `<li>${disease}</li>`).join('')}
          </ul>
      `;
  });

  // Login Handler
  loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Login functionality to be implemented with backend');
  });

  // Register Handler
  registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Registration functionality to be implemented with backend');
  });
});

// Simulated Marketplace
const marketListings = [
  { crop: 'Wheat', quantity: '500 kg', price: '$0.50/kg' },
  { crop: 'Corn', quantity: '300 kg', price: '$0.45/kg' }
];

function displayMarketListings() {
  const marketListingsContainer = document.querySelector('.market-listings');
  marketListingsContainer.innerHTML = marketListings.map(listing => `
      <div class="market-item">
          <h4>${listing.crop}</h4>
          <p>Quantity: ${listing.quantity}</p>
          <p>Price: ${listing.price}</p>
      </div>
  `).join('');
}

displayMarketListings();