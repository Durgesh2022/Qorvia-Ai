import React from 'react';

const ESIMSection = () => {
  return (
    <div className="w-full bg-white p-6" style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'center',
        width: '80%',
        maxWidth: '1200px',
        gap: '80px'
      }}>
        {/* About eSIMs Section */}
        <div style={{ 
          flex: 1, 
          display: 'flex', 
          flexDirection: 'row', 
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{ backgroundColor: 'black', borderRadius: '50%', padding: '12px', marginRight: '16px' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12h18M12 3v18" />
            </svg>
          </div>
          <div>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1F2937', marginBottom: '8px' }}>About eSIMs</h3>
            <p style={{ color: '#4B5563', lineHeight: '1.5' }}>
              Understand the benefits<br />
              and capabilities of eSIM
            </p>
          </div>
        </div>

        {/* Crafting Section */}
        <div style={{ 
          flex: 1, 
          display: 'flex', 
          flexDirection: 'row', 
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{ backgroundColor: 'black', borderRadius: '50%', padding: '12px', marginRight: '16px' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 4v16m-8-8h16" />
            </svg>
          </div>
          <div>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1F2937', marginBottom: '8px' }}>Crafting</h3>
            <p style={{ color: '#4B5563', lineHeight: '1.5' }}>
              Discover how our team is<br />
              redefining the eSIM
            </p>
          </div>
        </div>

        {/* Innovative eSIM Section */}
        <div style={{ 
          flex: 1, 
          display: 'flex', 
          flexDirection: 'row', 
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{ backgroundColor: 'black', borderRadius: '50%', padding: '12px', marginRight: '16px' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
          <div>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1F2937', marginBottom: '8px' }}>Innovative eSIM</h3>
            <p style={{ color: '#4B5563', lineHeight: '1.5' }}>
              Learn how our eSIM<br />
              solutions can streamline
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ESIMSection;