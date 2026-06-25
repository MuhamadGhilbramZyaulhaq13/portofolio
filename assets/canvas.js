window.onload = function() {
            try {
                // Konfigurasi TagCanvas
                TagCanvas.Start('myCanvas', 'tags', {
                    textColour: null,      
                    outlineMethod: 'none', 
                    reverse: true,         
                    depth: 0.8,            
                    maxSpeed: 0.05,        
                    initial: [0.1, -0.1],  
                    imageScale: 1.5,       
                    imageMode: 'both',     
                    wheelZoom: false       
                });
            } catch(e) {
                console.error('Canvas error:', e);
            }
        };