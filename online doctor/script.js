// --- INITIALIZE LOCAL STORAGE DATA ---
function initializeData() {
    const existingDoctors = JSON.parse(localStorage.getItem('quickhealer_doctors'));
    if (!localStorage.getItem('quickhealer_initialized') || !existingDoctors || existingDoctors.length < 15) {
        const doctors = [
            { id: 1, name: "Dr. Sarah Jenkins", spec: "Cardiology", exp: "12 Years", rating: 4.9, img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80", about: "Expert in treating complex heart diseases.", qualification: "MBBS, MD (Cardiology)", hospital: "QuickHealer Heart Institute", fee: "₹1200", availability: "Available Today", timings: "09:00 AM - 04:00 PM" },
            { id: 2, name: "Dr. Michael Chen", spec: "Neurology", exp: "8 Years", rating: 4.7, img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=300&q=80", about: "Specializes in neurodegenerative disorders.", qualification: "MBBS, DM (Neurology)", hospital: "City Neuro Care", fee: "₹1500", availability: "Available Tomorrow", timings: "10:00 AM - 05:00 PM" },
            { id: 3, name: "Dr. Emily Smith", spec: "Pediatrics", exp: "10 Years", rating: 4.8, img: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1", about: "Compassionate care for children.", qualification: "MBBS, MD (Pediatrics)", hospital: "Rainbow Kids Clinic", fee: "₹800", availability: "Available Today", timings: "08:00 AM - 01:00 PM" },
            { id: 4, name: "Dr. James Wilson", spec: "Orthopedic", exp: "15 Years", rating: 4.6, img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=300&q=80", about: "Expert in sports injuries.", qualification: "MBBS, MS (Orthopedics)", hospital: "Bone & Joint Center", fee: "₹1000", availability: "Unavailable", timings: "04:00 PM - 08:00 PM" },
            { id: 5, name: "Dr. Aisha Rahman", spec: "Dermatology", exp: "6 Years", rating: 4.5, img: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=300&q=80", about: "Focuses on medical and cosmetic dermatology.", qualification: "MBBS, MD (Dermatology)", hospital: "Skin Glow Clinic", fee: "₹900", availability: "Available Today", timings: "10:30 AM - 06:30 PM" },
            { id: 6, name: "Dr. Robert Fox", spec: "General Physician", exp: "20 Years", rating: 4.9, img: "https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1", about: "Wholistic approach to general health.", qualification: "MBBS, MD (General Medicine)", hospital: "QuickHealer General Hospital", fee: "₹500", availability: "Available Today", timings: "09:00 AM - 09:00 PM" },
            { id: 7, name: "Dr. Linda Brown", spec: "Dentist", exp: "11 Years", rating: 4.8, img: "https://images.unsplash.com/photo-1606902965551-dce093cda6e7?auto=format&fit=crop&w=300&q=80", about: "Comprehensive dental care.", qualification: "BDS, MDS", hospital: "Pearl Dental Clinic", fee: "₹700", availability: "Available Tomorrow", timings: "11:00 AM - 07:00 PM" },
            { id: 8, name: "Dr. William Taylor", spec: "Cardiology", exp: "9 Years", rating: 4.4, img: "https://images.pexels.com/photos/8376277/pexels-photo-8376277.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1", about: "Heart failure management.", qualification: "MBBS, MD (Cardiology)", hospital: "Metro Heart Care", fee: "₹1200", availability: "Available Today", timings: "02:00 PM - 08:00 PM" },
            { id: 9, name: "Dr. Sophia Martinez", spec: "Gynecology", exp: "14 Years", rating: 4.9, img: "https://i.pravatar.cc/300?img=5", about: "Specialized in women's health and maternity care.", qualification: "MBBS, MS (OBG)", hospital: "Mother Care Hospital", fee: "₹1100", availability: "Available Today", timings: "09:00 AM - 02:00 PM" },
            { id: 10, name: "Dr. David Kim", spec: "Psychiatrist", exp: "18 Years", rating: 4.8, img: "https://i.pravatar.cc/300?img=11", about: "Expert in mental health and cognitive behavioral therapy.", qualification: "MBBS, MD (Psychiatry)", hospital: "Mind Wellness Center", fee: "₹1500", availability: "Available Tomorrow", timings: "01:00 PM - 07:00 PM" },
            { id: 11, name: "Dr. Olivia Johnson", spec: "ENT", exp: "7 Years", rating: 4.6, img: "https://i.pravatar.cc/300?img=9", about: "Treatment of ear, nose, and throat disorders.", qualification: "MBBS, MS (ENT)", hospital: "Hear & Speak Clinic", fee: "₹800", availability: "Available Today", timings: "10:00 AM - 04:00 PM" },
            { id: 12, name: "Dr. Alexander Patel", spec: "Neurology", exp: "22 Years", rating: 5.0, img: "https://i.pravatar.cc/300?img=12", about: "Renowned expert in stroke management and epilepsy.", qualification: "MBBS, DM (Neurology)", hospital: "Apex Brain Center", fee: "₹2000", availability: "Unavailable", timings: "09:00 AM - 01:00 PM" },
            { id: 13, name: "Dr. Chloe White", spec: "Dermatology", exp: "5 Years", rating: 4.3, img: "https://i.pravatar.cc/300?img=20", about: "Expert in acne treatment and laser therapy.", qualification: "MBBS, DDVL", hospital: "Clear Skin Clinic", fee: "₹700", availability: "Available Today", timings: "11:00 AM - 08:00 PM" },
            { id: 14, name: "Dr. Benjamin Clark", spec: "Orthopedic", exp: "13 Years", rating: 4.7, img: "https://i.pravatar.cc/300?img=33", about: "Joint replacement and arthroscopy specialist.", qualification: "MBBS, MS (Orthopedics)", hospital: "Joint & Spine Center", fee: "₹1200", availability: "Available Tomorrow", timings: "08:00 AM - 02:00 PM" },
            { id: 15, name: "Dr. Mia Lopez", spec: "Pediatrics", exp: "9 Years", rating: 4.8, img: "https://i.pravatar.cc/300?img=41", about: "Neonatal care and child development.", qualification: "MBBS, MD (Pediatrics)", hospital: "Little Angels Hospital", fee: "₹900", availability: "Available Today", timings: "12:00 PM - 06:00 PM" }
        ];

        const appointments = [
            { id: 101, doctorId: 1, patientEmail: "patient@quickhealer.com", patientName: "Patient User", date: "2026-05-15", time: "10:30 AM", status: "pending", isEmergency: false },
            { id: 102, doctorId: 3, patientEmail: "patient@quickhealer.com", patientName: "Patient User", date: "2026-05-10", time: "02:00 PM", status: "completed", isEmergency: false },
            { id: 103, doctorId: 1, patientEmail: "other@test.com", patientName: "Alice Walker", date: "2026-05-26", time: "11:00 AM", status: "approved", isEmergency: false },
            { id: 104, doctorId: 4, patientEmail: "other@test.com", patientName: "John Doe", date: "2026-05-18", time: "09:00 AM", status: "pending", isEmergency: false },
            { id: 105, doctorId: 2, patientEmail: "patient@quickhealer.com", patientName: "Patient User", date: "2026-05-20", time: "03:30 PM", status: "approved", isEmergency: false },
            { id: 106, doctorId: 6, patientEmail: "patient@quickhealer.com", patientName: "Patient User", date: "2026-05-21", time: "11:30 AM", status: "cancelled", isEmergency: false },
            { id: 107, doctorId: 1, patientEmail: "other@test.com", patientName: "Bob Smith", date: "2026-05-14", time: "01:00 PM", status: "pending", isEmergency: true }, // Emergency 1
            { id: 108, doctorId: 6, patientEmail: "patient@quickhealer.com", patientName: "Patient User", date: "2026-05-14", time: "02:00 PM", status: "approved", isEmergency: true }, // Emergency 2
            { id: 109, doctorId: 2, patientEmail: "other@test.com", patientName: "Jane Roe", date: "2026-05-16", time: "10:00 AM", status: "pending", isEmergency: true }, // Emergency 3
            { id: 110, doctorId: 3, patientEmail: "other@test.com", patientName: "Mike Tyson", date: "2026-05-22", time: "04:00 PM", status: "approved", isEmergency: false }
        ];

        const users = [
            { email: "patient@quickhealer.com", password: "patient123", name: "Patient User", role: "patient" },
            { email: "admin@quickhealer.com", password: "admin123", name: "Admin System", role: "admin" },
            { email: "doctor@quickhealer.com", password: "doctor123", name: "Dr. Sarah Jenkins", role: "doctor", doctorId: 1 }
        ];

        const notifications = [
            { id: 1, email: "patient@quickhealer.com", message: "Welcome to QuickHealer!", read: false, date: new Date().toISOString() }
        ];

        localStorage.setItem('quickhealer_doctors', JSON.stringify(doctors));
        localStorage.setItem('quickhealer_appointments', JSON.stringify(appointments));
        localStorage.setItem('quickhealer_users', JSON.stringify(users));
        localStorage.setItem('quickhealer_notifications', JSON.stringify(notifications));
        localStorage.setItem('quickhealer_initialized', 'true');
        localStorage.setItem('quickhealer_images_patched', 'true');
    } else if (!localStorage.getItem('quickhealer_images_patched')) {
        // Patch existing data for the 3 new images
        const emilyImg = "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1";
        const robertImg = "https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1";
        const williamImg = "https://images.pexels.com/photos/8376277/pexels-photo-8376277.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1";
        
        let docs = existingDoctors;
        let changed = false;
        docs.forEach(d => {
            if (d.id === 3 && d.img !== emilyImg) { d.img = emilyImg; changed = true; }
            if (d.id === 6 && d.img !== robertImg) { d.img = robertImg; changed = true; }
            if (d.id === 8 && d.img !== williamImg) { d.img = williamImg; changed = true; }
        });
        if (changed) localStorage.setItem('quickhealer_doctors', JSON.stringify(docs));
        localStorage.setItem('quickhealer_images_patched', 'true');
    }
}

// Global state getters
const getDoctors = () => JSON.parse(localStorage.getItem('quickhealer_doctors')) || [];
const getAppointments = () => JSON.parse(localStorage.getItem('quickhealer_appointments')) || [];
const getUsers = () => JSON.parse(localStorage.getItem('quickhealer_users')) || [];
const getNotifications = () => JSON.parse(localStorage.getItem('quickhealer_notifications')) || [];
const getCurrentUser = () => JSON.parse(localStorage.getItem('quickhealer_user'));

function saveAppointments(apts) { localStorage.setItem('quickhealer_appointments', JSON.stringify(apts)); }
function saveNotifications(notifs) { localStorage.setItem('quickhealer_notifications', JSON.stringify(notifs)); }

function addNotification(email, message) {
    const notifs = getNotifications();
    notifs.unshift({ id: Date.now(), email, message, read: false, date: new Date().toISOString() });
    saveNotifications(notifs);
    renderNotificationsUI();
}

function markNotificationsAsRead(email) {
    const notifs = getNotifications();
    notifs.forEach(n => { if(n.email === email) n.read = true; });
    saveNotifications(notifs);
    renderNotificationsUI();
}

const CATEGORIES = [
    { name: "Cardiology", icon: "fa-heart-pulse" },
    { name: "Dentist", icon: "fa-tooth" },
    { name: "General Physician", icon: "fa-stethoscope" },
    { name: "Neurology", icon: "fa-brain" },
    { name: "Orthopedic", icon: "fa-bone" },
    { name: "Pediatrics", icon: "fa-baby" },
    { name: "Dermatology", icon: "fa-hand-dots" },
    { name: "Gynecology", icon: "fa-person-pregnant" },
    { name: "Psychiatrist", icon: "fa-head-side-brain" },
    { name: "ENT", icon: "fa-ear-listen" }
];

// --- AUTHENTICATION & NAVBAR LOGIC ---
function updateNavbar() {
    const user = getCurrentUser();
    const guestBtns = document.getElementById('nav-btn-guest');
    const userBtns = document.getElementById('nav-btn-user');
    const mobGuest = document.querySelector('.mobile-guest');
    const mobUserNavs = document.querySelectorAll('.mobile-user');

    if (user) {
        if(guestBtns) guestBtns.classList.add('hidden');
        if(userBtns) userBtns.classList.remove('hidden');
        
        const nameEl = document.getElementById('nav-user-name');
        if(nameEl) nameEl.innerText = user.name;
        
        const avatarEl = document.getElementById('nav-avatar');
        if(avatarEl) {
            if(user.role === 'admin') avatarEl.src = 'https://i.pravatar.cc/150?img=14';
            else if (user.role === 'doctor') avatarEl.src = 'https://i.pravatar.cc/150?img=12';
            else avatarEl.src = 'https://i.pravatar.cc/150?img=11';
        }

        let dashLink = 'patient-dashboard.html';
        if (user.role === 'doctor') dashLink = 'doctor-dashboard.html';
        if (user.role === 'admin') dashLink = 'admin-dashboard.html';

        const dashEl = document.getElementById('nav-dash-link');
        if(dashEl) dashEl.href = dashLink;
        
        const mobDash = document.getElementById('mobile-dash-link');
        if(mobDash) {
            mobDash.href = dashLink;
            mobDash.classList.remove('hidden');
        }

        if(mobGuest) mobGuest.classList.add('hidden');
        if(document.getElementById('mobile-logout')) document.getElementById('mobile-logout').classList.remove('hidden');
        
        renderNotificationsUI();
    } else {
        if(guestBtns) guestBtns.classList.remove('hidden');
        if(userBtns) userBtns.classList.add('hidden');
        if(mobGuest) mobGuest.classList.remove('hidden');
        if(document.getElementById('mobile-dash-link')) document.getElementById('mobile-dash-link').classList.add('hidden');
        if(document.getElementById('mobile-logout')) document.getElementById('mobile-logout').classList.add('hidden');
    }
}

// --- AUTHENTICATION PAGE LOGIC (Login & Signup) ---
const loginForm = document.getElementById('form-login');
const signupForm = document.getElementById('form-signup');

if (document.getElementById('view-auth')) {
    const btnShowLogin = document.getElementById('btn-show-login');
    const btnShowSignup = document.getElementById('btn-show-signup');
    const loginContainer = document.getElementById('login-container');
    const signupContainer = document.getElementById('signup-container');
    
    // Form Toggle
    btnShowLogin.addEventListener('click', () => {
        btnShowLogin.classList.add('active', 'btn-primary');
        btnShowLogin.classList.remove('btn-outline');
        btnShowSignup.classList.remove('active', 'btn-primary');
        btnShowSignup.classList.add('btn-outline');
        loginContainer.classList.remove('hidden');
        signupContainer.classList.add('hidden');
    });

    btnShowSignup.addEventListener('click', () => {
        btnShowSignup.classList.add('active', 'btn-primary');
        btnShowSignup.classList.remove('btn-outline');
        btnShowLogin.classList.remove('active', 'btn-primary');
        btnShowLogin.classList.add('btn-outline');
        signupContainer.classList.remove('hidden');
        loginContainer.classList.add('hidden');
    });

    // Password Toggle
    document.querySelectorAll('.toggle-password').forEach(icon => {
        icon.addEventListener('click', function() {
            const input = this.previousElementSibling;
            if (input.type === 'password') {
                input.type = 'text';
                this.classList.remove('fa-eye');
                this.classList.add('fa-eye-slash');
            } else {
                input.type = 'password';
                this.classList.remove('fa-eye-slash');
                this.classList.add('fa-eye');
            }
        });
    });

    // Login Role Selection UI
    document.querySelectorAll('input[name="login-role"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            document.querySelectorAll('#login-role-selector .role-option').forEach(el => el.classList.remove('active'));
            e.target.closest('.role-option').classList.add('active');
            
            const role = e.target.value;
            const hint = document.getElementById('demo-cred-hint');
            const emailInput = document.getElementById('login-email');
            const pwdInput = document.getElementById('login-pwd');
            const textEl = document.getElementById('login-role-text');
            
            if (role === 'patient') {
                if(textEl) textEl.innerText = "Logging in as Patient";
                if(hint) hint.innerHTML = "Patient: patient@quickhealer.com | pw: patient123";
                if(emailInput && emailInput.placeholder.includes("quickhealer")) emailInput.placeholder = "patient@quickhealer.com";
                if(pwdInput && pwdInput.placeholder.includes("123")) pwdInput.placeholder = "patient123";
            } else if (role === 'doctor') {
                if(textEl) textEl.innerText = "Logging in as Doctor";
                if(hint) hint.innerHTML = "Doctor: doctor@quickhealer.com | pw: doctor123";
                if(emailInput && emailInput.placeholder.includes("quickhealer")) emailInput.placeholder = "doctor@quickhealer.com";
                if(pwdInput && pwdInput.placeholder.includes("123")) pwdInput.placeholder = "doctor123";
            } else {
                if(textEl) textEl.innerText = "Logging in as Admin";
                if(hint) hint.innerHTML = "Admin: admin@quickhealer.com | pw: admin123";
                if(emailInput && emailInput.placeholder.includes("quickhealer")) emailInput.placeholder = "admin@quickhealer.com";
                if(pwdInput && pwdInput.placeholder.includes("123")) pwdInput.placeholder = "admin123";
            }
        });
    });

    // Signup Role Selection UI
    document.querySelectorAll('input[name="signup-role"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            document.querySelectorAll('#signup-role-selector .role-option').forEach(el => el.classList.remove('active'));
            e.target.closest('.role-option').classList.add('active');
            const role = e.target.value;
            const textEl = document.getElementById('signup-role-text');
            if(textEl) textEl.innerText = `Registering as ${role.charAt(0).toUpperCase() + role.slice(1)}`;
        });
    });
}

// Login Handler
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const pwd = document.getElementById('login-pwd').value;
        const roleRadio = document.querySelector('input[name="login-role"]:checked');
        
        if (!roleRadio) {
            return showToast("Please select a role", "error");
        }
        
        const role = roleRadio.value;
        const users = getUsers();
        const validUser = users.find(u => u.email === email && u.password === pwd && u.role === role);
        
        if (validUser) {
            localStorage.setItem('quickhealer_user', JSON.stringify(validUser));
            showToast("Logged in successfully!");
            setTimeout(() => {
                if (role === 'admin') window.location.href = 'admin-dashboard.html';
                else if (role === 'doctor') window.location.href = 'doctor-dashboard.html';
                else window.location.href = 'patient-dashboard.html';
            }, 1000);
        } else {
            // Check if user exists but wrong role
            const roleMismatch = users.find(u => u.email === email && u.password === pwd && u.role !== role);
            if (roleMismatch) {
                showToast("Role does not match account", "error");
            } else {
                showToast("Invalid email or password", "error");
            }
        }
    });
}

// Signup Handler
if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('signup-name').value.trim();
        const email = document.getElementById('signup-email').value.trim();
        const pwd = document.getElementById('signup-pwd').value;
        const pwdConfirm = document.getElementById('signup-pwd-confirm').value;
        const roleRadio = document.querySelector('input[name="signup-role"]:checked');
        
        if (!name || !email || !pwd || !pwdConfirm) {
            return showToast("Please fill all fields", "error");
        }
        
        if (!roleRadio) {
            return showToast("Please select a role", "error");
        }
        
        if (!email.endsWith('@gmail.com')) {
            return showToast("Please use a @gmail.com email address", "error");
        }
        
        if (pwd !== pwdConfirm) {
            return showToast("Passwords do not match", "error");
        }
        
        const users = getUsers();
        if (users.find(u => u.email === email)) {
            return showToast("Email is already registered", "error");
        }
        
        const role = roleRadio.value;
        const newUser = {
            email: email,
            password: pwd, // Not hashing for frontend demo simplicity
            name: name,
            role: role
        };
        
        // If doctor, assign a random ID for dashboard simulation
        if (role === 'doctor') {
            newUser.doctorId = Math.floor(Math.random() * 15) + 1;
        }
        
        users.push(newUser);
        localStorage.setItem('quickhealer_users', JSON.stringify(users));
        
        showToast("Account created successfully", "success");
        
        // Reset form & switch to login
        signupForm.reset();
        document.getElementById('btn-show-login').click();
        
        // Pre-fill login details
        document.getElementById('login-email').value = email;
        const matchingLoginRole = document.querySelector(`input[name="login-role"][value="${role}"]`);
        if(matchingLoginRole) {
            matchingLoginRole.checked = true;
            matchingLoginRole.dispatchEvent(new Event('change'));
        }
    });
}

// Logout Handler
const logoutHandlers = document.querySelectorAll('#btn-logout, #mobile-logout');
logoutHandlers.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.removeItem('quickhealer_user');
        window.location.href = 'index.html';
    });
});

// --- UI HELPERS ---
function createDoctorCard(doc) {
    return `
        <div class="doc-card fade-in-up">
            <div class="doc-img-wrap">
                <img src="${doc.img}" alt="${doc.name}" loading="lazy">
                <div class="doc-rating"><i class="fa-solid fa-star"></i> ${doc.rating}</div>
            </div>
            <div class="doc-info">
                <h3>${doc.name}</h3>
                <span class="doc-spec">${doc.spec}</span>
                <div class="doc-meta">
                    <span><i class="fa-solid fa-briefcase"></i> ${doc.exp}</span>
                </div>
                <div class="doc-actions">
                    <button class="btn btn-outline full-width" onclick="viewDoctorProfile(${doc.id})">View Profile</button>
                </div>
            </div>
        </div>
    `;
}

function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if(!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.style.borderLeftColor = type === 'success' ? 'var(--secondary)' : (type === 'error' ? 'var(--danger)' : 'var(--warning)');
    
    const icon = type === 'success' ? 'fa-check-circle text-secondary' : 'fa-circle-exclamation text-danger';
    
    toast.innerHTML = `
        <i class="fa-solid ${icon}"></i>
        <div>
            <div style="font-weight:600">${type === 'success' ? 'Success' : 'Notice'}</div>
            <div class="text-sm text-muted">${message}</div>
        </div>
    `;
    
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.animation = 'slideInRight 0.3s ease reverse forwards';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// --- HOME PAGE LOGIC ---
if (document.getElementById('home-categories')) {
    // Render Categories
    const catContainer = document.getElementById('home-categories');
    catContainer.innerHTML = CATEGORIES.map((c, i) => `
        <div class="category-card fade-in-up" style="animation-delay: ${i*0.1}s" onclick="filterAndGoToDoctors('${c.name}')">
            <i class="fa-solid ${c.icon}"></i>
            <h4>${c.name}</h4>
        </div>
    `).join('');

    // Render Featured
    const featContainer = document.getElementById('home-featured-doctors');
    featContainer.innerHTML = getDoctors().slice(0, 4).map(doc => createDoctorCard(doc)).join('');
}

// --- DOCTOR LISTING LOGIC ---
const grid = document.getElementById('doctors-list-grid');
if (grid) {
    function renderDoctorsList(search = '', spec = 'All') {
        grid.innerHTML = Array(4).fill('<div class="doc-card skeleton" style="height: 380px;"></div>').join('');
        setTimeout(() => {
            let filtered = getDoctors().filter(d => {
                const matchSearch = d.name.toLowerCase().includes(search.toLowerCase()) || d.spec.toLowerCase().includes(search.toLowerCase());
                const matchSpec = spec === 'All' ? true : d.spec === spec;
                return matchSearch && matchSpec;
            });
            if (filtered.length === 0) {
                grid.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding: 2rem;"><h3>No doctors found.</h3></div>`;
                return;
            }
            grid.innerHTML = filtered.map(doc => createDoctorCard(doc)).join('');
        }, 300);
    }
    
    // Initial Render
    renderDoctorsList();

    document.getElementById('list-search')?.addEventListener('input', (e) => {
        const spec = document.getElementById('list-filter-spec').value;
        renderDoctorsList(e.target.value, spec);
    });

    document.getElementById('list-filter-spec')?.addEventListener('change', (e) => {
        const search = document.getElementById('list-search').value;
        renderDoctorsList(search, e.target.value);
    });

    // Make functions global so inline onclicks can call them
    window.filterAndGoToDoctors = function(spec) {
        document.getElementById('view-home')?.classList.add('hidden');
        document.getElementById('view-profile')?.classList.add('hidden');
        document.getElementById('view-doctors')?.classList.remove('hidden');
        window.scrollTo(0,0);
        
        const filterEl = document.getElementById('list-filter-spec');
        if(filterEl) filterEl.value = spec;
        renderDoctorsList('', spec);
    };

    document.getElementById('btn-home-search')?.addEventListener('click', () => {
        const val = document.getElementById('home-search').value;
        document.getElementById('view-home')?.classList.add('hidden');
        document.getElementById('view-profile')?.classList.add('hidden');
        document.getElementById('view-doctors')?.classList.remove('hidden');
        window.scrollTo(0,0);
        
        const searchInput = document.getElementById('list-search');
        if (searchInput) searchInput.value = val;
        
        // Reset category filter when doing a raw text search
        const filterEl = document.getElementById('list-filter-spec');
        if (filterEl) filterEl.value = 'All';

        renderDoctorsList(val, 'All');
    });

    // Handle Navbar "Doctors" link
    document.querySelectorAll('[data-route="doctors"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('view-home')?.classList.add('hidden');
            document.getElementById('view-profile')?.classList.add('hidden');
            document.getElementById('view-doctors')?.classList.remove('hidden');
            window.scrollTo(0,0);
            
            // Reset filters
            if(document.getElementById('list-search')) document.getElementById('list-search').value = '';
            if(document.getElementById('list-filter-spec')) document.getElementById('list-filter-spec').value = 'All';
            renderDoctorsList('', 'All');
        });
    });
}

// Switch between listing and profile (SPA approach kept for the doctors view only)
function viewDoctorProfile(id) {
    const doc = getDoctors().find(d => d.id === id);
    if (!doc) return;
    
    document.getElementById('view-home')?.classList.add('hidden');
    document.getElementById('view-doctors')?.classList.add('hidden');
    document.getElementById('view-profile')?.classList.remove('hidden');
    window.scrollTo(0,0);

    const profileContent = document.getElementById('profile-content');
    if(profileContent) {
        profileContent.innerHTML = `
            <div class="profile-header fade-in-up">
                <img src="${doc.img}" alt="${doc.name}" class="profile-img">
                <div class="profile-details">
                    <h2>${doc.name}</h2>
                    <span class="profile-spec">${doc.spec}</span>
                    <div class="stats-row">
                        <div class="stat-box">
                            <div class="val">${doc.exp}</div>
                            <div class="label">Experience</div>
                        </div>
                        <div class="stat-box">
                            <div class="val"><i class="fa-solid fa-star text-warning"></i> ${doc.rating}</div>
                            <div class="label">Rating</div>
                        </div>
                    </div>
                    <div style="margin: 1rem 0;">
                        <span class="status-badge ${doc.availability.includes('Unavailable') ? 'status-cancelled' : 'status-approved'}">
                            <i class="fa-solid ${doc.availability.includes('Unavailable') ? 'fa-circle-xmark' : 'fa-circle-check'}"></i> ${doc.availability}
                        </span>
                    </div>
                    <p class="text-muted" style="margin-bottom: 1.5rem;">${doc.about}</p>
                    <button class="btn btn-primary" onclick="openBookingModal(${doc.id})">Book Appointment</button>
                </div>
            </div>
            <div class="glass" style="padding: 2rem; border-radius: var(--radius-xl); margin-top: 2rem;">
                <h3>Professional Details</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin-top: 1.5rem;">
                    <div>
                        <div class="text-sm text-muted">Qualification</div>
                        <div style="font-weight: 500; font-size: 1.1rem;"><i class="fa-solid fa-graduation-cap text-primary"></i> ${doc.qualification || 'MBBS, MD'}</div>
                    </div>
                    <div>
                        <div class="text-sm text-muted">Hospital/Clinic</div>
                        <div style="font-weight: 500; font-size: 1.1rem;"><i class="fa-regular fa-hospital text-primary"></i> ${doc.hospital || 'QuickHealer Clinic'}</div>
                    </div>
                    <div>
                        <div class="text-sm text-muted">Available Timings</div>
                        <div style="font-weight: 500; font-size: 1.1rem;"><i class="fa-regular fa-clock text-primary"></i> ${doc.timings || '09:00 AM - 05:00 PM'}</div>
                    </div>
                    <div>
                        <div class="text-sm text-muted">Consultation Fee</div>
                        <div style="font-weight: 500; font-size: 1.1rem;"><i class="fa-solid fa-indian-rupee-sign text-primary"></i> ${doc.fee ? doc.fee.replace('₹', '') : '1200'}</div>
                    </div>
                </div>
            </div>
        `;
    }
}

document.querySelector('.back-btn')?.addEventListener('click', () => {
    document.getElementById('view-profile')?.classList.add('hidden');
    document.getElementById('view-doctors')?.classList.remove('hidden');
});


// --- DASHBOARD RENDERING LOGIC ---
function renderPatientDashboard() {
    const user = getCurrentUser();
    if (!user || user.role !== 'patient') return;
    
    document.getElementById('patient-dash-name').innerText = user.name;
    
    const myApts = getAppointments().filter(a => a.patientEmail === user.email);
    
    const upcoming = myApts.filter(a => a.status === 'pending' || a.status === 'approved').filter(a => !a.isEmergency);
    const past = myApts.filter(a => a.status === 'completed' || a.status === 'cancelled').filter(a => !a.isEmergency);
    const emergency = myApts.filter(a => a.isEmergency);

    const renderList = (list) => list.length === 0 ? '<p class="text-muted">No appointments found.</p>' : list.map(a => {
        const doc = getDoctors().find(d => d.id === a.doctorId);
        const docName = doc ? `Dr. ${doc.name.replace('Dr. ', '')}` : 'Unknown Doctor';
        const docImg = doc ? doc.img : 'https://i.pravatar.cc/150';
        return `
            <div class="appointment-card fade-in-up">
                <div class="apt-info">
                    <img src="${docImg}" alt="Doc">
                    <div class="apt-details">
                        <h4>${docName}</h4>
                        <div class="apt-meta">
                            <span><i class="fa-regular fa-calendar"></i> ${a.date}</span>
                            <span><i class="fa-regular fa-clock"></i> ${a.time}</span>
                        </div>
                    </div>
                </div>
                <div class="apt-actions">
                    <span class="status-badge status-${a.status}">${a.status.toUpperCase()}</span>
                    ${(a.status === 'pending' || a.status === 'approved') ? `<button class="icon-btn text-danger" title="Cancel Appointment" onclick="cancelAppointment(${a.id})"><i class="fa-solid fa-xmark"></i></button>` : ''}
                </div>
            </div>
        `;
    }).join('');

    document.getElementById('patient-upcoming-list').innerHTML = renderList(upcoming);
    document.getElementById('patient-past-list').innerHTML = renderList(past);
    if(document.getElementById('patient-emergency-list')) document.getElementById('patient-emergency-list').innerHTML = renderList(emergency);
}

function renderDoctorDashboard() {
    const user = getCurrentUser();
    if (!user || user.role !== 'doctor') return;
    
    document.getElementById('doctor-dash-name').innerText = user.name;
    const docData = getDoctors().find(d => d.id === user.doctorId);
    if(docData) document.getElementById('doctor-dash-spec').innerText = docData.spec;
    
    const myApts = getAppointments().filter(a => a.doctorId === user.doctorId);
    
    const approved = myApts.filter(a => a.status === 'approved' && !a.isEmergency);
    const emergency = myApts.filter(a => a.status === 'approved' && a.isEmergency);

    const renderList = (list) => list.length === 0 ? '<p class="text-muted">No appointments found.</p>' : list.map(a => `
        <div class="appointment-card fade-in-up">
            <div class="apt-info">
                <div class="avatar" style="width:50px; height:50px; background:var(--primary-light); display:flex; align-items:center; justify-content:center; border-radius:50%; font-weight:bold; color:var(--primary-dark)">
                    ${a.patientName.charAt(0)}
                </div>
                <div class="apt-details">
                    <h4>${a.patientName} ${a.isEmergency ? '<i class="fa-solid fa-triangle-exclamation text-danger" title="Emergency"></i>' : ''}</h4>
                    <div class="apt-meta">
                        <span><i class="fa-regular fa-calendar"></i> ${a.date}</span>
                        <span><i class="fa-regular fa-clock"></i> ${a.time}</span>
                    </div>
                </div>
            </div>
            <div class="apt-actions">
                <span class="status-badge status-${a.status}">${a.status.toUpperCase()}</span>
                <button class="icon-btn text-primary" title="Mark Completed" onclick="completeAppointment(${a.id})"><i class="fa-solid fa-check"></i></button>
            </div>
        </div>
    `).join('');

    document.getElementById('doctor-appointments-list').innerHTML = renderList(approved);
    if(document.getElementById('doctor-emergency-list')) document.getElementById('doctor-emergency-list').innerHTML = renderList(emergency);
}

function renderAdminDashboard() {
    const user = getCurrentUser();
    if (!user || user.role !== 'admin') return;
    
    document.getElementById('admin-dash-name').innerText = user.name;
    
    const allApts = getAppointments();
    
    const total = allApts.length;
    const pending = allApts.filter(a => a.status === 'pending').length;
    const approved = allApts.filter(a => a.status === 'approved').length;
    const emergencies = allApts.filter(a => a.isEmergency).length;
    
    // Metrics
    document.getElementById('admin-metrics').innerHTML = `
        <div class="metric-card"><div class="metric-icon" style="background:var(--primary-light); color:var(--primary)"><i class="fa-regular fa-calendar"></i></div><div><h3>${total}</h3><p>Total Appointments</p></div></div>
        <div class="metric-card"><div class="metric-icon" style="background:#fef3c7; color:#b45309"><i class="fa-solid fa-clock-rotate-left"></i></div><div><h3>${pending}</h3><p>Pending Approvals</p></div></div>
        <div class="metric-card"><div class="metric-icon" style="background:var(--secondary-light); color:var(--secondary-dark)"><i class="fa-solid fa-check"></i></div><div><h3>${approved}</h3><p>Approved</p></div></div>
        <div class="metric-card"><div class="metric-icon" style="background:var(--danger-light); color:var(--danger)"><i class="fa-solid fa-truck-medical"></i></div><div><h3>${emergencies}</h3><p>Emergencies</p></div></div>
    `;

    const pendingList = allApts.filter(a => a.status === 'pending' && !a.isEmergency);
    const emergencyList = allApts.filter(a => a.isEmergency);
    const recent = [...allApts].reverse().slice(0, 5);

    const renderAdminList = (list, isActionable) => list.length === 0 ? '<p class="text-muted">None found.</p>' : list.map(a => {
        const doc = getDoctors().find(d => d.id === a.doctorId);
        const docName = doc ? `Dr. ${doc.name.replace('Dr. ', '')}` : 'Unknown';
        return `
            <div class="appointment-card fade-in-up ${a.isEmergency ? 'border-danger' : ''}" style="${a.isEmergency ? 'border: 1px solid var(--danger);' : ''}">
                <div class="apt-info">
                    <div class="apt-details">
                        <h4>${a.patientName} <span class="text-muted text-sm">with</span> ${docName}</h4>
                        <div class="apt-meta">
                            <span><i class="fa-regular fa-calendar"></i> ${a.date}</span>
                            <span><i class="fa-regular fa-clock"></i> ${a.time}</span>
                            ${a.isEmergency ? '<span class="text-danger font-bold"><i class="fa-solid fa-bolt"></i> Emergency</span>' : ''}
                        </div>
                    </div>
                </div>
                <div class="apt-actions">
                    <span class="status-badge status-${a.isEmergency && a.status==='pending' ? 'emergency' : a.status}">${a.status.toUpperCase()}</span>
                    ${isActionable && a.status === 'pending' ? `
                        <button class="icon-btn text-secondary" title="Approve" onclick="adminApprove(${a.id})"><i class="fa-solid fa-check"></i></button>
                        <button class="icon-btn text-danger" title="Reject" onclick="adminReject(${a.id})"><i class="fa-solid fa-xmark"></i></button>
                    ` : ''}
                </div>
            </div>
        `;
    }).join('');

    if(document.getElementById('admin-recent-activity')) document.getElementById('admin-recent-activity').innerHTML = renderAdminList(recent, false);
    if(document.getElementById('admin-pending-list')) document.getElementById('admin-pending-list').innerHTML = renderAdminList(pendingList, true);
    if(document.getElementById('admin-emergency-list')) document.getElementById('admin-emergency-list').innerHTML = renderAdminList(emergencyList, true);
}

// --- APPOINTMENT ACTIONS ---
function adminApprove(id) {
    const apts = getAppointments();
    const apt = apts.find(a => a.id === id);
    if (apt) {
        apt.status = 'approved';
        saveAppointments(apts);
        
        // Notify Patient
        addNotification(apt.patientEmail, `Your appointment on ${apt.date} has been approved.`);
        // Notify Doctor
        const doc = getUsers().find(u => u.role === 'doctor' && u.doctorId === apt.doctorId);
        if(doc) addNotification(doc.email, `New appointment assigned: ${apt.patientName} on ${apt.date}.`);

        showToast("Appointment Approved");
        renderAdminDashboard();
    }
}

function adminReject(id) {
    const apts = getAppointments();
    const apt = apts.find(a => a.id === id);
    if (apt) {
        apt.status = 'cancelled';
        saveAppointments(apts);
        
        addNotification(apt.patientEmail, `Your appointment request for ${apt.date} was rejected.`);
        
        showToast("Appointment Rejected", "error");
        renderAdminDashboard();
    }
}

function completeAppointment(id) {
    const apts = getAppointments();
    const apt = apts.find(a => a.id === id);
    if (apt) {
        apt.status = 'completed';
        saveAppointments(apts);
        showToast("Appointment marked as completed");
        renderDoctorDashboard();
    }
}

function cancelAppointment(id) {
    if(confirm('Are you sure you want to cancel this appointment?')) {
        const apts = getAppointments();
        const apt = apts.find(a => a.id === id);
        if (apt) {
            apt.status = 'cancelled';
            saveAppointments(apts);
            showToast("Appointment Cancelled");
            const user = getCurrentUser();
            if (user && user.role === 'patient') renderPatientDashboard();
            if (user && user.role === 'admin') renderAdminDashboard();
        }
    }
}

// --- BOOKING LOGIC ---
let selectedSlot = null;
function openBookingModal(doctorId) {
    const user = getCurrentUser();
    if (!user) {
        showToast("Please login to book an appointment", "warning");
        setTimeout(()=> window.location.href='login.html', 1000);
        return;
    }
    if (user.role !== 'patient') {
        showToast("Only patients can book appointments", "error");
        return;
    }

    const doc = getDoctors().find(d => d.id === doctorId);
    const modal = document.getElementById('booking-modal');
    const modalBody = document.getElementById('booking-modal-body');
    
    selectedSlot = null; // reset
    const slots = ['09:00 AM', '10:30 AM', '11:00 AM', '02:00 PM', '03:30 PM', '04:00 PM'];
    
    modalBody.innerHTML = `
        <div style="display:flex; gap:1rem; align-items:center; margin-bottom: 1.5rem; background: var(--surface); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border);">
            <img src="${doc.img}" style="width:50px; height:50px; border-radius:50%; object-fit:cover;">
            <div>
                <h4 style="margin:0">${doc.name}</h4>
                <small class="text-primary">${doc.spec}</small>
            </div>
        </div>
        <div class="form-group">
            <label>Select Date</label>
            <input type="date" id="booking-date" class="form-input" min="${new Date().toISOString().split('T')[0]}" required>
        </div>
        <div class="form-group">
            <label>Select Time Slot</label>
            <div class="slots-grid" id="booking-slots">
                ${slots.map((s, i) => `<button class="slot-btn" onclick="selectSlot(this, '${s}')" ${i===1?'disabled':''}>${s}</button>`).join('')}
            </div>
        </div>
        <button class="btn btn-primary full-width" style="margin-top:2rem;" onclick="confirmBooking(${doc.id})">Request Booking</button>
    `;
    
    modal.classList.remove('hidden');
}

function selectSlot(btn, time) {
    if (btn.disabled) return;
    document.querySelectorAll('.slot-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    selectedSlot = time;
}

function confirmBooking(doctorId) {
    const date = document.getElementById('booking-date').value;
    if (!date) return showToast("Please select a date", "error");
    if (!selectedSlot) return showToast("Please select a time slot", "error");
    
    const user = getCurrentUser();
    const apts = getAppointments();
    
    const newApt = {
        id: Date.now(),
        doctorId: doctorId,
        patientEmail: user.email,
        patientName: user.name,
        date: date,
        time: selectedSlot,
        status: "pending",
        isEmergency: false
    };
    apts.unshift(newApt);
    saveAppointments(apts);
    
    // Notify Admin
    addNotification("admin@quickhealer.com", `New appointment request from ${user.name}`);
    
    document.getElementById('booking-modal').classList.add('hidden');
    showToast("Booking Request Sent to Admin!");
}

// --- EMERGENCY LOGIC ---
let emergencySimulationTimer = null;

function openEmergencyModal() {
    const user = getCurrentUser();
    if (!user) {
        showToast("Please login to access emergency services", "error");
        setTimeout(()=> window.location.href='login.html', 1000);
        return;
    }
    if (user.role !== 'patient') {
        showToast("Only patients can book emergency slots", "error");
        return;
    }
    
    const modalBody = document.getElementById('emergency-modal-body');
    if (modalBody) {
        modalBody.innerHTML = `
            <p style="margin-bottom: 1.5rem; font-size: 1.1rem;">If you are experiencing a life-threatening emergency, please call an ambulance immediately.</p>
            <div style="display: flex; gap: 1rem; flex-direction: column;">
                <a href="tel:102" class="btn btn-danger" style="font-size: 1.25rem; padding: 1rem;"><i class="fa-solid fa-phone"></i> Call Ambulance (102)</a>
                <div style="margin: 1rem 0; color: var(--text-muted);">OR</div>
                <button class="btn btn-primary" onclick="startEmergencyGPS()"><i class="fa-solid fa-bolt"></i> Book Immediate Emergency Slot</button>
            </div>
        `;
    }

    const modal = document.getElementById('emergency-modal');
    if(modal) modal.classList.remove('hidden');
}

function closeEmergencyModal() {
    const modal = document.getElementById('emergency-modal');
    if(modal) modal.classList.add('hidden');
}

function startEmergencyGPS() {
    const modalBody = document.getElementById('emergency-modal-body');
    if (!modalBody) return;

    modalBody.innerHTML = `
        <div class="loader-spinner"></div>
        <h4>Fetching your location...</h4>
        <p class="text-muted mt-2">Please allow GPS access in your browser.</p>
    `;

    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                
                modalBody.innerHTML = `
                    <i class="fa-solid fa-location-dot text-secondary" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                    <h4 class="text-secondary">Location detected successfully</h4>
                    <p class="text-muted mt-2">Lat: ${lat.toFixed(4)}, Lng: ${lng.toFixed(4)}</p>
                `;
                
                setTimeout(() => {
                    handleEmergencyBooking({ lat, lng, type: "GPS" });
                }, 1500);
            },
            (error) => {
                modalBody.innerHTML = `
                    <i class="fa-solid fa-triangle-exclamation text-danger" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                    <h4 class="text-danger">Location access denied</h4>
                    <p class="text-muted mt-2">Please enter your city or area manually.</p>
                    <div class="form-group" style="margin-top: 1.5rem; text-align: left;">
                        <input type="text" id="manual-location-input" class="form-input" placeholder="e.g. Connaught Place, New Delhi">
                    </div>
                    <button class="btn btn-primary full-width" onclick="submitManualLocation()">Confirm Location</button>
                `;
            },
            { timeout: 10000 }
        );
    } else {
        modalBody.innerHTML = `
            <i class="fa-solid fa-triangle-exclamation text-danger" style="font-size: 3rem; margin-bottom: 1rem;"></i>
            <h4 class="text-danger">GPS Not Supported</h4>
            <p class="text-muted mt-2">Please enter your city or area manually.</p>
            <div class="form-group" style="margin-top: 1.5rem; text-align: left;">
                <input type="text" id="manual-location-input" class="form-input" placeholder="e.g. Connaught Place, New Delhi">
            </div>
            <button class="btn btn-primary full-width" onclick="submitManualLocation()">Confirm Location</button>
        `;
    }
}

function submitManualLocation() {
    const input = document.getElementById('manual-location-input');
    if (!input || !input.value.trim()) {
        showToast("Please enter a valid location", "error");
        return;
    }
    handleEmergencyBooking({ address: input.value.trim(), type: "Manual" });
}

function handleEmergencyBooking(locationData) {
    const user = getCurrentUser();
    if (!user) return;
    
    const hospitalName = "City Care Hospital";
    const eta = "5 minutes";
    
    const emergencyRequest = {
        id: Date.now(),
        userLocation: locationData,
        status: "Request Sent",
        hospital: hospitalName,
        eta: eta,
        timestamp: Date.now()
    };
    
    localStorage.setItem('quickhealer_emergency_active', JSON.stringify(emergencyRequest));
    
    const modalBody = document.getElementById('emergency-modal-body');
    if (modalBody) {
        modalBody.innerHTML = `
            <div class="ambulance-moving"><i class="fa-solid fa-truck-medical"></i></div>
            <h3 class="text-danger mt-4">Ambulance is on the way!</h3>
            <p class="mt-2 text-muted">Emergency request sent to nearest hospital.</p>
            <div class="glass" style="margin-top: 1.5rem; padding: 1rem; text-align: left; border-radius: var(--radius-md);">
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                    <span class="text-muted">Assigned Hospital:</span>
                    <span style="font-weight: 600;">${hospitalName}</span>
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <span class="text-muted">Estimated Arrival:</span>
                    <span style="font-weight: 600; color: var(--danger);">${eta}</span>
                </div>
            </div>
            <button class="btn btn-outline full-width mt-4" onclick="closeEmergencyModal()">View Live Status in Notifications</button>
        `;
    }

    addNotification(user.email, `🚑 EMERGENCY: Ambulance Assigned from ${hospitalName}. ETA: ${eta}`);
    
    const doctorId = 6;
    const apts = getAppointments();
    const newApt = {
        id: Date.now(),
        doctorId: doctorId,
        patientEmail: user.email,
        patientName: user.name,
        date: new Date().toISOString().split('T')[0],
        time: "IMMEDIATE",
        status: "approved",
        isEmergency: true
    };
    apts.unshift(newApt);
    saveAppointments(apts);
    
    addNotification("admin@quickhealer.com", `EMERGENCY BOOKING request from ${user.name}`);
    addNotification("doctor@quickhealer.com", `EMERGENCY: Patient assigned to your queue.`);

    if (document.getElementById('patient-upcoming-list')) {
        renderPatientDashboard();
    }
    
    startLiveStatusSimulation();
}

function startLiveStatusSimulation() {
    const user = getCurrentUser();
    if (!user) return;
    
    if (emergencySimulationTimer) clearTimeout(emergencySimulationTimer);
    
    renderNotificationsUI();
    
    emergencySimulationTimer = setTimeout(() => {
        let req = JSON.parse(localStorage.getItem('quickhealer_emergency_active'));
        if (req && req.status === "Request Sent") {
            req.status = "Ambulance Dispatched";
            req.eta = "3 minutes";
            localStorage.setItem('quickhealer_emergency_active', JSON.stringify(req));
            addNotification(user.email, `🚑 UPDATE: Ambulance has been Dispatched. ETA: 3 minutes.`);
            renderNotificationsUI();
        }
        
        emergencySimulationTimer = setTimeout(() => {
            let req2 = JSON.parse(localStorage.getItem('quickhealer_emergency_active'));
            if (req2 && req2.status === "Ambulance Dispatched") {
                req2.status = "Ambulance Near You";
                req2.eta = "1 minute";
                localStorage.setItem('quickhealer_emergency_active', JSON.stringify(req2));
                addNotification(user.email, `🚑 UPDATE: Ambulance is near your location!`);
                renderNotificationsUI();
            }
        }, 5000);
    }, 4000);
}

// Close Modals logic
document.querySelectorAll('.close-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.target.closest('.modal-overlay').classList.add('hidden');
    });
});
document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
        if(e.target === overlay) overlay.classList.add('hidden');
    });
});

// --- DASHBOARD TABS LOGIC ---
document.querySelectorAll('.sidebar-links button').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const parent = btn.closest('.sidebar-links');
        parent.querySelectorAll('button').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const dashboard = btn.closest('.dashboard-layout');
        dashboard.querySelectorAll('.dash-tab').forEach(t => t.classList.add('hidden'));
        
        const targetId = btn.getAttribute('data-tab');
        document.getElementById(targetId).classList.remove('hidden');
    });
});

// --- THEME TOGGLE ---
document.getElementById('theme-toggle')?.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
    const isDark = document.body.classList.contains('dark-mode');
    document.getElementById('theme-toggle').innerHTML = isDark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
});

// --- MOBILE MENU TOGGLE ---
document.querySelector('.mobile-menu-btn')?.addEventListener('click', () => {
    document.querySelector('.mobile-nav')?.classList.toggle('hidden');
});

// --- NOTIFICATIONS RENDERER ---
function renderNotificationsUI() {
    const user = getCurrentUser();
    if(!user) return;
    
    const notifs = getNotifications().filter(n => n.email === user.email);
    let unreadCount = notifs.filter(n => !n.read).length;
    
    const req = JSON.parse(localStorage.getItem('quickhealer_emergency_active'));
    if (req) {
        unreadCount += 1;
    }
    
    const badge = document.getElementById('nav-notif-badge');
    if (badge) {
        if (unreadCount > 0) {
            badge.innerText = unreadCount;
            badge.classList.remove('hidden');
        } else {
            badge.classList.add('hidden');
        }
    }
    
    const list = document.getElementById('notifications-list');
    if (list) {
        let activeEmergencyHtml = '';
        if (req) {
            activeEmergencyHtml = `
                <div style="background: var(--danger-light); padding: 1rem; border-bottom: 1px solid rgba(220, 38, 38, 0.2);">
                    <div style="display:flex; justify-content: space-between; align-items:center; margin-bottom: 0.5rem;">
                        <span class="text-danger font-bold"><i class="fa-solid fa-truck-medical"></i> Active Emergency</span>
                        <span class="status-badge status-emergency">${req.status}</span>
                    </div>
                    <div class="text-sm">Assigned: <strong>${req.hospital}</strong></div>
                    <div class="text-sm">ETA: <strong class="text-danger">${req.eta}</strong></div>
                    <button class="btn btn-outline mt-2" style="padding: 0.25rem 0.5rem; font-size: 0.75rem; width: 100%; border-color: var(--danger); color: var(--danger);" onclick="localStorage.removeItem('quickhealer_emergency_active'); renderNotificationsUI();">Cancel / Dismiss</button>
                </div>
            `;
        }
        
        const notifHtml = notifs.length === 0 ? '<div style="padding: 1rem; color: var(--text-muted); text-align: center;">No past notifications</div>' : notifs.map(n => `
            <div class="notification-item ${n.read ? '' : 'unread'}" style="padding: 1rem; border-bottom: 1px solid var(--border); ${n.read ? '' : 'background: var(--surface);'}">
                <div style="display:flex; gap: 0.75rem;">
                    <i class="fa-solid ${n.message.includes('EMERGENCY') || n.message.includes('UPDATE:') ? 'fa-triangle-exclamation text-danger' : 'fa-info-circle text-primary'}" style="margin-top: 0.25rem;"></i>
                    <div>
                        <div style="font-size: 0.9rem;">${n.message}</div>
                        <div class="text-xs text-muted mt-1" style="font-size: 0.75rem;">${new Date(n.date).toLocaleString()}</div>
                    </div>
                </div>
            </div>
        `).join('');
        
        list.innerHTML = activeEmergencyHtml + notifHtml;
    }
}

// --- BOOTSTRAP ---
document.addEventListener('DOMContentLoaded', () => {
    initializeData();
    updateNavbar();
    
    // Render specific dashboards based on current URL
    const path = window.location.pathname;
    if (path.includes('patient-dashboard')) renderPatientDashboard();
    if (path.includes('doctor-dashboard')) renderDoctorDashboard();
    if (path.includes('admin-dashboard')) renderAdminDashboard();
});
