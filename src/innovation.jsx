import React from 'react';

const ESIMInnovationPage = () => {
  const cards = [
    {
      icon: "🏢",
      title: "Elevate Your Business",
      description: "Discover how our eSIM solutions can streamline your operations",
      buttonText: "Explore Now"
    },
    {
      icon: "📱",
      title: "Trusted eSIM Partner",
      description: "Collaborate with us to unlock the full potential of eSIM technology and",
      buttonText: "Learn More"
    },
    {
      icon: "🔒",
      title: "Secure Connectivity",
      description: "Experience the peace of mind that comes with our industry-leading eSIM",
      buttonText: "Discover Now"
    },
    {
      icon: "💡",
      title: "Innovative eSIM",
      description: "Our cutting-edge eSIM technology is redefining the future of",
      buttonText: "Explore Now"
    },
 
    {
        
        icon: "🛠️",
        title: "Reliable Solutions",
        description: "Our eSIM products are designed for exceptional performance, reliability",
        buttonText: "Explore Today"
      },
      {
    
        icon: "🔄",
        title: "Seamless Integration",
        description: "Seamlessly integrate our eSIM solutions into your existing systems and",
        buttonText: "Learn More"
      },
      {
    
        icon: "📊",
        title: "Optimize Performance",
        description: "Leverage our expert guidance and tailored eSIM strategies to drive efficiency, productivity",
        buttonText: "Discover Solutions"
      },
      {
        icon: "🌐",
        title: "Global Connectivity",
        description: "Connect anywhere with our worldwide eSIM coverage and reliable network",
        buttonText: "Learn More"
      },
    
  ];

  return (
    <div style={{ backgroundColor: '#121212', color: 'white', padding: '50px', Height: '120vh' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <p style={{ color: '#247198', marginBottom: '8px' }}>Redefining the Future</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '16px' }}>eSIM Innovation</h1>
          <p style={{ color: '#555', maxWidth: '800px', margin: '0 auto' }}>
            At the forefront of eSIM technology, we're constantly exploring new frontiers and pushing the boundaries of what's possible
          </p>
        </div>

        {/* Cards Section - 5 column layout */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'row', 
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '40px'
        }}>
          {cards.map((card, index) => (
            <div key={index} style={{ 
              backgroundColor: '#212529', 
              borderRadius: '8px', 
              padding: '20px',
              width: 'calc(20% - 16px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}>
              <div style={{ 
                fontSize: '2rem', 
                marginBottom: '16px',
                color: '#4DABF7'
              }}>
                {card.icon}
              </div>
              <h3 style={{ 
                fontSize: '1.2rem', 
                fontWeight: 'bold', 
                marginBottom: '12px'
              }}>
                {card.title}
              </h3>
              <p style={{ 
                color: '#555', 
                marginBottom: '20px',
                flexGrow: 1 
              }}>
                {card.description}
              </p>
              <button style={{ 
                backgroundColor: 'transparent', 
                border: 'none', 
                color: '#247198', 
                cursor: 'pointer'
              }}>
                {card.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ESIMInnovationPage;