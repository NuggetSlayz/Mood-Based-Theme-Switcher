const moodThemes = {
            admiration: {
                primary: '#4169E1',
                secondary: '#1E90FF',
                background: '#F0F8FF',
                text: '#000080',
                fontFamily: "'Playfair Display', serif"
            },
            adoration: {
                primary: '#FFC0CB',
                secondary: '#FFB6C1',
                background: '#FFF0F5',
                text: '#8B4513',
                fontFamily: "'Dancing Script', cursive"
            },
            aestheticAppreciation: {
                primary: '#B497BD',
                secondary: '#9370DB',
                background: '#F8F4FF',
                text: '#4B0082',
                fontFamily: "'Cormorant Garamond', serif"
            },
            amusement: {
                primary: '#FFD700',
                secondary: '#FFA500',
                background: '#FFFACD',
                text: '#8B4513',
                fontFamily: "'Comic Sans MS', cursive"
            },
            anger: {
                primary: '#B22222',
                secondary: '#8B0000',
                background: '#FFE4E1',
                text: '#000000',
                fontFamily: "'Roboto Mono', monospace"
            },
            anxiety: {
                primary: '#5F9EA0',
                secondary: '#4682B4',
                background: '#F5F5F5',
                text: '#2F4F4F',
                fontFamily: "'Roboto Mono', monospace"
            },
            awe: {
                primary: '#8A2BE2',
                secondary: '#9400D3',
                background: '#F8F4FF',
                text: '#4B0082',
                fontFamily: "'Cinzel', serif"
            },
            awkwardness: {
                primary: '#FFE5B4',
                secondary: '#FFDAB9',
                background: '#FFF8DC',
                text: '#8B4513',
                fontFamily: "'Comic Sans MS', cursive"
            },
            boredom: {
                primary: '#A9A9A9',
                secondary: '#808080',
                background: '#F5F5F5',
                text: '#696969',
                fontFamily: "'Courier New', monospace"
            },
            calmness: {
                primary: '#B0E0E6',
                secondary: '#87CEEB',
                background: '#F0F8FF',
                text: '#2F4F4F',
                fontFamily: "'Helvetica', sans-serif"
            },
            confusion: {
                primary: '#C8A2C8',
                secondary: '#DDA0DD',
                background: '#F8F4FF',
                text: '#4B0082',
                fontFamily: "'Ubuntu Mono', monospace"
            },
            craving: {
                primary: '#E60026',
                secondary: '#DC143C',
                background: '#FFF5EE',
                text: '#8B0000',
                fontFamily: "'Lato', sans-serif"
            },
            disgust: {
                primary: '#808000',
                secondary: '#6B8E23',
                background: '#F0FFF0',
                text: '#006400',
                fontFamily: "'Times New Roman', serif"
            },
            empatheticPain: {
                primary: '#C08081',
                secondary: '#BC8F8F',
                background: '#FFF0F5',
                text: '#4A0404',
                fontFamily: "'Merriweather', serif"
            },
            entrancement: {
                primary: '#7FFFD4',
                secondary: '#48D1CC',
                background: '#F0FFFF',
                text: '#008080',
                fontFamily: "'Raleway', sans-serif"
            },
            excitement: {
                primary: '#FF4500',
                secondary: '#FF6347',
                background: '#FFE4E1',
                text: '#8B0000',
                fontFamily: "'Impact', sans-serif"
            },
            fear: {
                primary: '#2F4F4F',
                secondary: '#4A4A4A',
                background: '#F5F5F5',
                text: '#000000',
                fontFamily: "'Fira Mono', monospace"
            },
            horror: {
                primary: '#8B0000',
                secondary: '#000000',
                background: '#F8F8F8',
                text: '#000000',
                fontFamily: "'Nosifer', cursive"
            },
            interest: {
                primary: '#40E0D0',
                secondary: '#48D1CC',
                background: '#F0FFFF',
                text: '#008B8B',
                fontFamily: "'Roboto', sans-serif"
            },
            joy: {
                primary: '#FFD700',
                secondary: '#FFA500',
                background: '#FFFACD',
                text: '#8B4513',
                fontFamily: "'Quicksand', sans-serif"
            },
            nostalgia: {
                primary: '#704214',
                secondary: '#8B4513',
                background: '#FFF8DC',
                text: '#8B4513',
                fontFamily: "'Old Standard TT', serif"
            },
            relief: {
                primary: '#90EE90',
                secondary: '#98FB98',
                background: '#F0FFF0',
                text: '#006400',
                fontFamily: "'Montserrat', sans-serif"
            },
            romance: {
                primary: '#DC143C',
                secondary: '#B22222',
                background: '#FFF0F5',
                text: '#8B0000',
                fontFamily: "'Great Vibes', cursive"
            },
            sadness: {
                primary: '#191970',
                secondary: '#000080',
                background: '#F0F8FF',
                text: '#191970',
                fontFamily: "'Lora', serif"
            },
            satisfaction: {
                primary: '#50C878',
                secondary: '#3CB371',
                background: '#F0FFF0',
                text: '#006400',
                fontFamily: "'Montserrat', sans-serif"
            },
            sexualDesire: {
                primary: '#800020',
                secondary: '#8B0000',
                background: '#FFF0F5',
                text: '#4A0404',
                fontFamily: "'Rouge Script', cursive"
            },
            surprise: {
                primary: '#FF69B4',
                secondary: '#FF1493',
                background: '#FFF0F5',
                text: '#8B008B',
                fontFamily: "'Crimson Text', serif"
            }
        };

        function applyMoodTheme(mood) {
            const theme = moodThemes[mood];
            if (!theme) return;

            document.documentElement.style.setProperty('--primary-color', theme.primary);
            document.documentElement.style.setProperty('--secondary-color', theme.secondary);
            document.documentElement.style.setProperty('--background-color', theme.background);
            document.documentElement.style.setProperty('--text-color', theme.text);
            document.documentElement.style.setProperty('--font-family', theme.fontFamily);

            // Save selected mood to localStorage
            localStorage.setItem('selectedMood', mood);
        }

        // Create mood buttons
        const moodGrid = document.getElementById('moodGrid');
        Object.keys(moodThemes).forEach(mood => {
            const button = document.createElement('button');
            button.className = 'mood-button';
            // Convert camelCase to Title Case with spaces
            const displayText = mood
                .replace(/([A-Z])/g, ' $1')
                .replace(/^./, str => str.toUpperCase());
            button.textContent = displayText;
            button.onclick = () => applyMoodTheme(mood);
            moodGrid.appendChild(button);
        });

        // Load saved mood from localStorage
        window.addEventListener('load', () => {
            const savedMood = localStorage.getItem('selectedMood');
            if (savedMood) {
                applyMoodTheme(savedMood);
            }
        });