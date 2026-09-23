/* ========================================================
   NEVERDIE — Music Label Website
   JavaScript: Navigation, Player, Filters, Animations
   ======================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ==================== DATA ====================

    const initialCatalogData = [
        {
            id: 'NVRD001',
            title: 'Midnight Eclipse',
            artist: 'PHANTØM × KRVN',
            genre: ['Dubstep', 'Bass'],
            status: 'released',
            gradient: 'linear-gradient(135deg, #1a1a1a 0%, #333 50%, #111 100%)',
            downloadUrl: 'https://soundcloud.com'
        },
        {
            id: 'NVRD002',
            title: 'Shadow Protocol',
            artist: 'ECLIPSE',
            genre: ['Future Bass'],
            status: 'remix',
            gradient: 'linear-gradient(135deg, #222 0%, #0a0a0a 50%, #2a2a2a 100%)',
            downloadUrl: 'https://drive.google.com'
        },
        {
            id: 'NVRD003',
            title: 'Digital Phantom',
            artist: 'VOID.SYS',
            genre: ['Drum & Bass'],
            status: 'remix',
            gradient: 'linear-gradient(135deg, #0f0f0f 0%, #252525 50%, #0a0a0a 100%)',
            downloadUrl: 'https://drive.google.com'
        },
        {
            id: 'NVRD004',
            title: 'Eternal Signal',
            artist: 'PHANTØM',
            genre: ['Dubstep'],
            status: 'released',
            gradient: 'linear-gradient(135deg, #181818 0%, #2e2e2e 50%, #0e0e0e 100%)'
        },
        {
            id: 'NVRD005',
            title: 'Void Walker',
            artist: 'KRVN',
            genre: ['House', 'Techno'],
            status: 'remix',
            gradient: 'linear-gradient(135deg, #202020 0%, #0d0d0d 50%, #303030 100%)',
            downloadUrl: 'https://drive.google.com'
        },
        {
            id: 'NVRD006',
            title: 'Neon Decay',
            artist: 'ECLIPSE × VOID.SYS',
            genre: ['Future Bass', 'Trap'],
            status: 'released',
            gradient: 'linear-gradient(135deg, #151515 0%, #2a2a2a 50%, #111 100%)'
        },
        {
            id: 'NVRD007',
            title: 'Pulse Override',
            artist: 'PHANTØM',
            genre: ['Bass', 'Hybrid'],
            status: 'remix',
            gradient: 'linear-gradient(135deg, #1c1c1c 0%, #0a0a0a 50%, #222 100%)',
            downloadUrl: 'https://drive.google.com'
        },
        {
            id: 'NVRD008',
            title: 'Zero Gravity',
            artist: 'KRVN × ECLIPSE',
            genre: ['Techno'],
            status: 'released',
            gradient: 'linear-gradient(135deg, #0e0e0e 0%, #282828 50%, #141414 100%)'
        }
    ];

    const profilesData = [
        {
            name: 'PHANTØM',
            role: 'Producer',
            bio: 'Spesialis dubstep & bass music. Suara gelap dengan energy massive. Sudah merilis 15+ track di berbagai label.',
            initials: 'PH',
            gradient: 'linear-gradient(135deg, #1a1a1a, #333)',
            spotify: '#',
            soundcloud: '#',
            youtube: '#'
        },
        {
            name: 'KRVN',
            role: 'DJ / Producer',
            bio: 'House & techno enthusiast. Mixing skills level dewa. Resident DJ di beberapa club lokal.',
            initials: 'KR',
            gradient: 'linear-gradient(135deg, #222, #0e0e0e)',
            spotify: '#',
            soundcloud: '#',
            youtube: '#'
        },
        {
            name: 'ECLIPSE',
            role: 'Producer',
            bio: 'Future bass & melodic wizard. Setiap track punya emosi yang dalam dan arrangement yang detail.',
            initials: 'EC',
            gradient: 'linear-gradient(135deg, #151515, #2a2a2a)',
            spotify: '#',
            soundcloud: '#',
            youtube: '#'
        },
        {
            name: 'VOID.SYS',
            role: 'DJ',
            bio: 'Drum & bass specialist. Set-nya selalu bikin lantai getar. Mixing dengan presisi mesin.',
            initials: 'VS',
            gradient: 'linear-gradient(135deg, #0f0f0f, #252525)',
            spotify: '#',
            soundcloud: '#',
            youtube: '#'
        }
    ];

    const releasesData = [
        { title: 'Midnight Eclipse', artist: 'PHANTØM × KRVN', date: '15 Sep 2024', gradient: 'linear-gradient(135deg, #1a1a1a, #333)' },
        { title: 'Eternal Signal', artist: 'PHANTØM', date: '28 Aug 2024', gradient: 'linear-gradient(135deg, #181818, #2e2e2e)' },
        { title: 'Neon Decay', artist: 'ECLIPSE × VOID.SYS', date: '10 Aug 2024', gradient: 'linear-gradient(135deg, #151515, #2a2a2a)' },
        { title: 'Zero Gravity', artist: 'KRVN × ECLIPSE', date: '22 Jul 2024', gradient: 'linear-gradient(135deg, #0e0e0e, #282828)' },
        { title: 'Dark Matter', artist: 'PHANTØM', date: '05 Jul 2024', gradient: 'linear-gradient(135deg, #1c1c1c, #222)' },
        { title: 'Binary Sunset', artist: 'ECLIPSE', date: '18 Jun 2024', gradient: 'linear-gradient(135deg, #202020, #0d0d0d)' }
    ];

    const eventsData = [
        {
            title: 'NEVERDIE Sessions Vol. 4',
            description: 'Live DJ set marathon bersama seluruh roster NEVERDIE. 6 jam non-stop musik dari genre favorit kamu.',
            month: 'OCT',
            day: '12',
            year: '2024',
            time: 'Sabtu, 20:00 WIB — Discord Stage',
            status: 'upcoming'
        },
        {
            title: 'Remix Battle #6',
            description: 'Kompetisi remix bulanan! Remix stem dari track "Midnight Eclipse" dan menangkan spotlight di channel utama.',
            month: 'OCT',
            day: '05',
            year: '2024',
            time: 'Deadline: Sabtu, 23:59 WIB',
            status: 'upcoming'
        },
        {
            title: 'NEVERDIE Sessions Vol. 3',
            description: 'Session ke-3 sukses besar! 80+ penonton live dan feedback luar biasa dari komunitas.',
            month: 'SEP',
            day: '14',
            year: '2024',
            time: 'Sabtu, 20:00 WIB — Selesai',
            status: 'past'
        },
        {
            title: 'Producer Workshop: Mixing 101',
            description: 'Workshop gratis tentang teknik mixing dasar untuk pemula. Dipandu oleh PHANTØM.',
            month: 'SEP',
            day: '01',
            year: '2024',
            time: 'Minggu, 15:00 WIB — Selesai',
            status: 'past'
        },
        {
            title: 'Remix Battle #5',
            description: 'Kompetisi remix ke-5 dengan partisipasi terbanyak sepanjang sejarah NEVERDIE!',
            month: 'AUG',
            day: '20',
            year: '2024',
            time: 'Deadline telah berlalu',
            status: 'past'
        }
    ];

    // ==================== RENDER FUNCTIONS ====================

    // Load catalog from localStorage or default
    let catalogData = JSON.parse(localStorage.getItem('neverdie_catalog')) || initialCatalogData;
    let currentFilter = 'all';
    let currentSearchQuery = '';

    function saveCatalogToLocalStorage() {
        localStorage.setItem('neverdie_catalog', JSON.stringify(catalogData));
    }

    function renderCatalog() {
        const grid = document.getElementById('catalogGrid');
        if (!grid) return;

        const filtered = catalogData.filter(track => {
            const matchesFilter = currentFilter === 'all' || track.status === currentFilter;
            const query = currentSearchQuery.toLowerCase().trim();
            const matchesSearch = !query || 
                track.title.toLowerCase().includes(query) ||
                track.artist.toLowerCase().includes(query) ||
                track.genre.some(g => g.toLowerCase().includes(query));

            return matchesFilter && matchesSearch;
        });

        if (filtered.length === 0) {
            grid.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 48px; color: var(--text-muted);">
                    <p style="font-size: 1.1rem; margin-bottom: 8px;">Lagu tidak ditemukan</p>
                    <p style="font-size: 0.85rem;">Coba kata kunci pencarian lain atau ganti filter.</p>
                </div>
            `;
            return;
        }

        grid.innerHTML = filtered.map((track, i) => `
            <div class="catalog-card" style="animation-delay: ${i * 0.05}s" data-status="${track.status}">
                <div class="catalog-card__cover">
                    <div class="catalog-card__cover-bg" style="background: ${track.gradient}">
                        ${track.id}
                    </div>
                    <span class="catalog-card__status catalog-card__status--${track.status}">
                        ${track.status === 'remix' ? 'Available for Remix' : 'Released'}
                    </span>
                    ${track.audioSrc ? `
                        <button class="catalog-card__play-btn" data-audio="${track.audioSrc}" data-title="${track.title}" data-artist="${track.artist}" aria-label="Play ${track.title}">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                        </button>
                    ` : ''}
                </div>
                <div class="catalog-card__info">
                    <h3 class="catalog-card__title">${track.title}</h3>
                    <p class="catalog-card__artist">${track.artist}</p>
                    <div class="catalog-card__tags">
                        ${track.genre.map(g => `<span class="catalog-card__tag">${g}</span>`).join('')}
                    </div>
                    ${track.downloadUrl ? `
                        <a href="${track.downloadUrl}" target="_blank" rel="noopener noreferrer" class="catalog-card__download-link">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
                            ${track.status === 'remix' ? 'Download Stems / Track' : 'Listen / Download'}
                        </a>
                    ` : ''}
                </div>
            </div>
        `).join('');

        // Add play audio event listeners for catalog play buttons
        document.querySelectorAll('.catalog-card__play-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const audioSrc = btn.dataset.audio;
                const title = btn.dataset.title;
                const artist = btn.dataset.artist;

                // Load to track spotlight player UI
                const playerTitle = document.querySelector('.player__track-title');
                const playerArtist = document.querySelector('.player__artist');
                if (playerTitle) playerTitle.textContent = title;
                if (playerArtist) playerArtist.textContent = artist;

                // Control global audio playback
                let globalAudio = document.getElementById('globalAudioElement');
                if (!globalAudio) {
                    globalAudio = new Audio();
                    globalAudio.id = 'globalAudioElement';
                    document.body.appendChild(globalAudio);
                }

                if (audioSrc) {
                    globalAudio.src = audioSrc;
                    globalAudio.play().then(() => {
                        const playBtn = document.getElementById('playBtn');
                        if (playBtn) {
                            const playIcon = playBtn.querySelector('.play-icon');
                            const pauseIcon = playBtn.querySelector('.pause-icon');
                            if (playIcon) playIcon.style.display = 'none';
                            if (pauseIcon) pauseIcon.style.display = 'block';
                        }
                        const vinyl = document.getElementById('playerVinyl');
                        if (vinyl) vinyl.classList.add('spinning');
                    }).catch(err => console.log('Audio playback error:', err));
                }

                // Scroll smoothly to player
                const player = document.getElementById('spotlight');
                if (player) player.scrollIntoView({ behavior: 'smooth' });
            });
        });
    }

    function renderProfiles() {
        const grid = document.getElementById('profilesGrid');
        if (!grid) return;

        grid.innerHTML = profilesData.map((p, i) => `
            <div class="profile-card" style="animation-delay: ${i * 0.1}s">
                <div class="profile-card__avatar" style="background: ${p.gradient}">
                    ${p.initials}
                </div>
                <h3 class="profile-card__name">${p.name}</h3>
                <span class="profile-card__role">${p.role}</span>
                <p class="profile-card__bio">${p.bio}</p>
                <div class="profile-card__socials">
                    <a href="${p.spotify}" class="profile-card__social-link" title="Spotify" aria-label="Spotify ${p.name}">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
                    </a>
                    <a href="${p.soundcloud}" class="profile-card__social-link" title="SoundCloud" aria-label="SoundCloud ${p.name}">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c-.009-.06-.05-.1-.1-.1m-.899.828c-.06 0-.091.037-.104.094L0 14.479l.172 1.282c.013.06.045.094.104.094.057 0 .09-.037.104-.093l.2-1.283-.2-1.33c-.014-.057-.047-.094-.104-.094m1.82-1.108c-.064 0-.112.05-.118.117l-.213 2.415.213 2.347c.006.066.054.118.118.118s.112-.052.12-.118l.242-2.347-.241-2.415c-.009-.068-.057-.117-.12-.117m.824-.24c-.074 0-.13.06-.134.13l-.2 2.655.2 2.382c.005.074.06.131.134.131.073 0 .13-.057.136-.131l.224-2.382-.224-2.655c-.006-.074-.063-.13-.136-.13m.826-.155c-.082 0-.145.065-.15.143l-.18 2.81.18 2.413c.005.08.068.145.15.145s.145-.065.152-.145l.205-2.413-.205-2.81c-.007-.08-.07-.143-.152-.143m.834-.131c-.09 0-.158.074-.163.157l-.17 2.94.17 2.425c.005.088.073.157.163.157.088 0 .157-.069.164-.157l.19-2.425-.19-2.94c-.007-.088-.075-.157-.164-.157m.84-.1c-.098 0-.173.08-.178.17l-.158 3.041.158 2.436c.005.093.08.17.178.17s.173-.077.18-.17l.178-2.436-.178-3.04c-.007-.095-.082-.171-.18-.171m.85-.058c-.108 0-.19.086-.194.183l-.148 3.099.148 2.441c.004.101.086.183.194.183.106 0 .19-.082.195-.183l.168-2.441-.168-3.1c-.005-.1-.089-.182-.195-.182m.848-.03c-.114 0-.204.093-.209.196l-.14 3.13.14 2.448c.005.106.095.196.209.196.112 0 .203-.09.21-.196l.157-2.448-.158-3.13c-.006-.106-.097-.196-.209-.196m.85-.011c-.12 0-.217.1-.222.21l-.13 3.14.13 2.453c.005.115.103.21.222.21.117 0 .216-.095.223-.21l.148-2.453-.149-3.14c-.006-.115-.105-.21-.222-.21m.853.02c-.131 0-.234.107-.238.225l-.12 3.12.12 2.46c.004.12.107.224.238.224.128 0 .232-.104.238-.224l.137-2.46-.137-3.12c-.006-.12-.11-.225-.238-.225m.863.07c-.138 0-.248.115-.252.238l-.112 3.05.112 2.463c.004.127.114.238.252.238.136 0 .247-.111.253-.238l.125-2.463-.125-3.05c-.006-.127-.117-.238-.253-.238m3.22-1.499c-.334 0-.653.058-.953.164C21.177 7.766 18.763 5.545 15.879 5.545c-.754 0-1.492.152-2.136.42-.27.113-.342.225-.345.447v8.733c.004.232.183.42.412.441h8.524a3.114 3.114 0 0 0 3.113-3.112 3.116 3.116 0 0 0-3.113-3.116"/></svg>
                    </a>
                    <a href="${p.youtube}" class="profile-card__social-link" title="YouTube" aria-label="YouTube ${p.name}">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                    </a>
                </div>
            </div>
        `).join('');
    }

    function renderReleases() {
        const grid = document.getElementById('releasesGrid');
        if (!grid) return;

        grid.innerHTML = releasesData.map((r, i) => `
            <div class="release-card" style="animation-delay: ${i * 0.08}s">
                <div class="release-card__cover" style="background: ${r.gradient}">
                    ND
                </div>
                <div class="release-card__info">
                    <h4 class="release-card__title">${r.title}</h4>
                    <p class="release-card__artist">${r.artist}</p>
                    <span class="release-card__date">${r.date}</span>
                </div>
            </div>
        `).join('');
    }

    function renderEvents() {
        const grid = document.getElementById('eventsGrid');
        if (!grid) return;

        grid.innerHTML = eventsData.map((e, i) => `
            <div class="event-card" style="animation-delay: ${i * 0.1}s">
                <div class="event-card__header">
                    <div class="event-card__date-badge">
                        <span class="event-card__month">${e.month}</span>
                        <span class="event-card__day">${e.day}</span>
                    </div>
                    <span class="event-card__status event-card__status--${e.status}">
                        ${e.status === 'upcoming' ? '● Upcoming' : e.status === 'live' ? '◉ LIVE' : '○ Past'}
                    </span>
                </div>
                <div class="event-card__body">
                    <h3 class="event-card__title">${e.title}</h3>
                    <p class="event-card__description">${e.description}</p>
                    <span class="event-card__time">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                        ${e.time}
                    </span>
                </div>
            </div>
        `).join('');
    }

    // ==================== NAVBAR ====================

    const navbar = document.getElementById('navbar');
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.querySelectorAll('.navbar__link');
    const mobileLinks = document.querySelectorAll('.mobile-menu__link');

    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Update active nav link based on scroll position
        updateActiveNavLink();
    });

    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollY = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // Hamburger toggle
    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', () => {
            hamburgerBtn.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        });
    }

    // Close mobile menu on link click
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburgerBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // ==================== SEARCH & CATALOG CONTROLS ====================

    const searchInput = document.getElementById('catalogSearchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearchQuery = e.target.value;
            renderCatalog();
        });
    }

    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            renderCatalog();
        });
    });

    // ==================== ADMIN MODAL (ADD TRACK) ====================

    window.openTrackModal = function() {
        const addTrackModal = document.getElementById('addTrackModal');
        if (addTrackModal) {
            addTrackModal.classList.add('active');
            addTrackModal.style.display = 'flex';
        }
    };

    window.closeTrackModal = function() {
        const addTrackModal = document.getElementById('addTrackModal');
        const addTrackForm = document.getElementById('addTrackForm');
        if (addTrackModal) {
            addTrackModal.classList.remove('active');
            addTrackModal.style.display = 'none';
        }
        if (addTrackForm) addTrackForm.reset();
    };

    if (addTrackForm) {
        addTrackForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const title = document.getElementById('trackTitle').value.trim();
            const artist = document.getElementById('trackArtist').value.trim();
            const genreInput = document.getElementById('trackGenre').value.trim();
            const status = document.getElementById('trackStatus').value;
            const audioFileInput = document.getElementById('trackAudioFile');
            const audioUrlInput = document.getElementById('trackAudioUrl');

            const genres = genreInput.split(',').map(g => g.trim()).filter(g => g.length > 0);
            const downloadUrl = audioUrlInput ? audioUrlInput.value.trim() : '';

            const saveTrack = (audioSrc = '') => {
                const nextIndex = catalogData.length + 1;
                const trackId = `NVRD${nextIndex.toString().padStart(3, '0')}`;
                const gradients = [
                    'linear-gradient(135deg, #1a1a1a, #333)',
                    'linear-gradient(135deg, #222, #0a0a0a, #2a2a2a)',
                    'linear-gradient(135deg, #151515, #2a2a2a)',
                    'linear-gradient(135deg, #1c1c1c, #0a0a0a)'
                ];
                const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];

                const newTrack = {
                    id: trackId,
                    title: title,
                    artist: artist,
                    genre: genres.length > 0 ? genres : ['Music'],
                    status: status,
                    gradient: randomGradient,
                    audioSrc: audioSrc,
                    downloadUrl: downloadUrl || audioSrc
                };

                try {
                    catalogData.unshift(newTrack);
                    saveCatalogToLocalStorage();
                    renderCatalog();
                    window.closeTrackModal();
                    alert(`Lagu "${title}" berhasil ditambahkan ke Catalog!`);
                } catch (e) {
                    console.error('LocalStorage quota error:', e);
                    // Jika file audio terlalu besar untuk localStorage
                    newTrack.audioSrc = ''; // Kosongkan data base64 jika terlalu besar
                    saveCatalogToLocalStorage();
                    renderCatalog();
                    window.closeTrackModal();
                    alert(`Lagu "${title}" berhasil ditambahkan! (Catatan: File audio sangat besar, disarankan menggunakan Link Audio/Drive)`);
                }
            };

            // Process uploaded file if available
            if (audioFileInput && audioFileInput.files && audioFileInput.files[0]) {
                const file = audioFileInput.files[0];
                const reader = new FileReader();
                reader.onload = function (event) {
                    saveTrack(event.target.result);
                };
                reader.readAsDataURL(file);
            } else {
                saveTrack(downloadUrl);
            }
        });
    }

    // ==================== ACCORDION ====================

    const accordionHeaders = document.querySelectorAll('.accordion__header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const isActive = item.classList.contains('active');

            // Close all items in same accordion
            const accordion = item.closest('.accordion');
            accordion.querySelectorAll('.accordion__item').forEach(i => {
                i.classList.remove('active');
            });

            // Toggle clicked item
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // ==================== AUDIO PLAYER ====================

    const playBtn = document.getElementById('playBtn');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const progressBar = document.getElementById('progressBar');
    const progressFill = document.getElementById('progressFill');
    const progressThumb = document.getElementById('progressThumb');
    const currentTimeEl = document.getElementById('currentTime');
    const totalTimeEl = document.getElementById('totalTime');
    const vinyl = document.getElementById('playerVinyl');
    const waveformCanvas = document.getElementById('waveformCanvas');

    let isPlaying = false;
    let currentProgress = 0;
    let playerInterval = null;
    const totalDuration = 204; // 3:24 in seconds

    // Waveform visualization
    const waveformBars = [];
    const barCount = 80;

    function initWaveform() {
        for (let i = 0; i < barCount; i++) {
            // Generate a more realistic waveform shape
            const position = i / barCount;
            const base = 0.3;
            const variation = Math.sin(position * Math.PI) * 0.5;
            const noise = Math.random() * 0.4;
            const height = Math.min(1, base + variation + noise);
            waveformBars.push(height);
        }
    }

    function drawWaveform() {
        if (!waveformCanvas) return;
        const ctx = waveformCanvas.getContext('2d');
        const dpr = window.devicePixelRatio || 1;
        const rect = waveformCanvas.getBoundingClientRect();

        waveformCanvas.width = rect.width * dpr;
        waveformCanvas.height = rect.height * dpr;
        ctx.scale(dpr, dpr);

        const width = rect.width;
        const height = rect.height;
        const barWidth = (width / barCount) * 0.6;
        const gap = (width / barCount) * 0.4;
        const progressPercent = currentProgress / totalDuration;

        ctx.clearRect(0, 0, width, height);

        waveformBars.forEach((barHeight, i) => {
            const x = i * (barWidth + gap);
            const h = barHeight * height * 0.85;
            const y = (height - h) / 2;

            const isBeforeProgress = (i / barCount) <= progressPercent;

            if (isPlaying && isBeforeProgress) {
                // Subtle animation for playing bars
                const animOffset = Math.sin(Date.now() / 200 + i * 0.3) * 3;
                ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
                ctx.beginPath();
                ctx.roundRect(x, y + animOffset, barWidth, h, 1);
                ctx.fill();
            } else if (isBeforeProgress) {
                ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
                ctx.beginPath();
                ctx.roundRect(x, y, barWidth, h, 1);
                ctx.fill();
            } else {
                ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';
                ctx.beginPath();
                ctx.roundRect(x, y, barWidth, h, 1);
                ctx.fill();
            }
        });

        if (isPlaying) {
            requestAnimationFrame(drawWaveform);
        }
    }

    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }

    function updateProgress() {
        if (currentProgress >= totalDuration) {
            stopPlayback();
            currentProgress = 0;
        }

        const percent = (currentProgress / totalDuration) * 100;
        if (progressFill) progressFill.style.width = `${percent}%`;
        if (progressThumb) progressThumb.style.left = `${percent}%`;
        if (currentTimeEl) currentTimeEl.textContent = formatTime(currentProgress);
    }

    function startPlayback() {
        isPlaying = true;
        const playIcon = playBtn.querySelector('.play-icon');
        const pauseIcon = playBtn.querySelector('.pause-icon');
        if (playIcon) playIcon.style.display = 'none';
        if (pauseIcon) pauseIcon.style.display = 'block';
        if (vinyl) vinyl.classList.add('spinning');

        playerInterval = setInterval(() => {
            currentProgress += 0.1;
            updateProgress();
        }, 100);

        drawWaveform();
    }

    function stopPlayback() {
        isPlaying = false;
        const playIcon = playBtn.querySelector('.play-icon');
        const pauseIcon = playBtn.querySelector('.pause-icon');
        if (playIcon) playIcon.style.display = 'block';
        if (pauseIcon) pauseIcon.style.display = 'none';
        if (vinyl) vinyl.classList.remove('spinning');

        clearInterval(playerInterval);
        drawWaveform(); // Draw static state
    }

    if (playBtn) {
        playBtn.addEventListener('click', () => {
            if (isPlaying) {
                stopPlayback();
            } else {
                startPlayback();
            }
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentProgress = 0;
            updateProgress();
            drawWaveform();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentProgress = 0;
            updateProgress();
            if (isPlaying) {
                drawWaveform();
            }
        });
    }

    // Progress bar click
    if (progressBar) {
        progressBar.addEventListener('click', (e) => {
            const rect = progressBar.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const percent = clickX / rect.width;
            currentProgress = percent * totalDuration;
            updateProgress();
            drawWaveform();
        });
    }

    // ==================== SCROLL REVEAL ====================

    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // ==================== STAT COUNTER ====================

    const statNumbers = document.querySelectorAll('.stat-card__number');

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const countTo = parseInt(target.dataset.count);
                const duration = 2000;
                const startTime = Date.now();

                function updateCounter() {
                    const elapsed = Date.now() - startTime;
                    const progress = Math.min(elapsed / duration, 1);

                    // Ease out cubic
                    const eased = 1 - Math.pow(1 - progress, 3);
                    const current = Math.round(eased * countTo);

                    target.textContent = current;

                    if (progress < 1) {
                        requestAnimationFrame(updateCounter);
                    }
                }

                updateCounter();
                counterObserver.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(el => counterObserver.observe(el));

    // ==================== SMOOTH SCROLL ====================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ==================== INIT ====================

    initWaveform();
    drawWaveform();
    renderCatalog();
    renderProfiles();
    renderReleases();
    renderEvents();
    updateActiveNavLink();

});
