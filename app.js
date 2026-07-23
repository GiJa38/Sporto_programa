const defaultWorkouts = {
    'NAMAI_1': [
        { name: 'Pritūpimai su svarmeniu prie krūtinės (Goblet Squats)', gear: 'Svarmuo (5 kg)', sets: 3, reps: '10-12 k.', isWeight: true, desc: 'Nusileidžiant kontroliuokite kelius.', video: 'https://www.youtube.com/results?search_query=goblet+squat+form' },
        { name: 'Sėdmenų tiltas su guma ir svoriais', gear: 'Guma ir svoriai', sets: 3, reps: '25 k.', isWeight: true, desc: 'Pakilus į viršų, 3 kartus praskėskite kelius į šonus.', video: 'https://www.youtube.com/results?search_query=glute+bridge+with+band+and+weights' },
        { name: 'Šoninis kojos kėlimas gulint', gear: 'Kūno svoris', sets: 1, reps: 'Po 20 k. kojai', isWeight: false, desc: 'Dešinei ir kairei kojai.', video: 'https://www.youtube.com/results?search_query=lying+side+leg+raise' },
        { name: 'Įtūpstai atgal su svarmenimis (Reverse Lunges)', gear: 'Svarmenys', sets: 3, reps: 'Po 10 k. kojai', isWeight: true, desc: 'Kontroliuokite pusiausvyrą.', video: 'https://www.youtube.com/results?search_query=reverse+lunges+with+dumbbells' },
        { name: 'Asiliuko spyris (Donkey Kick)', gear: 'Kūno svoris / Guma', sets: 1, reps: 'Po 15-20 k. kojai', isWeight: false, desc: 'Viršuje stipriai suspauskite sėdmenį.', video: 'https://www.youtube.com/results?search_query=donkey+kick+exercise' },
        { name: 'Kojų nuleidimas pilvo apačiai', gear: 'Kilimėlis', sets: 3, reps: '12-15 k.', isWeight: false, desc: 'Griežtai prispauskite juosmenį prie grindų.', video: 'https://www.youtube.com/results?search_query=leg+lowering+exercise' }
    ],
    'NAMAI_2': [
        { name: 'Svarelių spaudimas virš galvos (Shoulder Press)', gear: 'Svarmenys', sets: 3, reps: '15-20 k.', isWeight: true, desc: 'Stiprūs krūtinės ir nugaros raumenys tiesiogiai atsakingi už taisyklingą laikyseną.', video: 'https://www.youtube.com/results?search_query=dumbbell+shoulder+press' },
        { name: 'Atsispaudimai (nuo grindų arba kelių)', gear: 'Kūno svoris', sets: 3, reps: '8-12 k.', isWeight: false, desc: 'Kūnas tiesus, alkūnės 45 laipsnių kampu.', video: 'https://www.youtube.com/results?search_query=push+ups+form+beginner' },
        { name: 'Dviejų rankų trauka su svarmenimis pasilenkus (Dumbbell Row)', gear: 'Svarmenys', sets: 3, reps: '10-12 k.', isWeight: true, desc: 'Nugarą laikykite tiesiai, svarmenis traukite link šonkaulių.', video: 'https://www.youtube.com/results?search_query=bent+over+dumbbell+row' },
        { name: 'Bicepso lenkimas („Plaktukas“)', gear: 'Svarmenys', sets: 3, reps: '20 k.', isWeight: true, desc: 'Alkūnės prispaustos prie šonų.', video: 'https://www.youtube.com/results?search_query=dumbbell+hammer+curl' },
        { name: 'Tricepso tiesimas už galvos', gear: 'Svarmuo', sets: 3, reps: '15-20 k.', isWeight: true, desc: 'Stiprina galinę rankų dalį.', video: 'https://www.youtube.com/results?search_query=overhead+dumbbell+tricep+extension' },
        { name: 'Atsilenkimai su svoriu rankose', gear: 'Svarmuo', sets: 3, reps: '15-20 k.', isWeight: true, desc: 'Pilvo presui.', video: 'https://www.youtube.com/results?search_query=weighted+crunches' }
    ],
    'NAMAI_3': [
        { name: 'Pritūpimai su rankų išstūmimu (Thrusters)', gear: 'Svarmenys', sets: 3, reps: '10 k.', isWeight: true, desc: 'Pritūpkite ir stumiantis aukštyn tieskite svarmenis virš galvos.', video: 'https://www.youtube.com/results?search_query=dumbbell+thrusters+form' },
        { name: 'Rankų tiesimas atgal palinkus (Triceps kickback)', gear: 'Svarmenys', sets: 3, reps: '10-15 k.', isWeight: true, desc: 'Rankų tiesimas atgal pasilenkus.', video: 'https://www.youtube.com/results?search_query=dumbbell+triceps+kickback' },
        { name: 'Lenta (Plank) su rankų lenkimu', gear: 'Kilimėlis', sets: 1, reps: '30-40 sek.', isWeight: false, desc: 'Puikiai aktyvuoja viso kūno ir šerdies raumenis.', video: 'https://www.youtube.com/results?search_query=plank+up+downs' },
        { name: 'Atsilenkimai (Sit-ups) + svarmens spaudimas aukštyn', gear: 'Svarmuo', sets: 3, reps: '12-15 k.', isWeight: true, desc: 'Atsisėdimas su išstūmimu virš galvos.', video: 'https://www.youtube.com/results?search_query=sit+up+dumbbell+press' },
        { name: 'Rusiškas sukimasis su svoriu (Russian Twist)', gear: 'Svarmuo', sets: 3, reps: '30 pasisukimų', isWeight: true, desc: 'Po 15 į kiekvieną pusę. Nugara tiesi.', video: 'https://www.youtube.com/results?search_query=weighted+russian+twist' },
        { name: '„Kalnų kopinėtojas“ (Mountain Climbers)', gear: 'Kilimėlis', sets: 3, reps: '30 sek.', isWeight: false, desc: 'Suteikia papildomo kardio efekto.', video: 'https://www.youtube.com/results?search_query=mountain+climbers+form' },
        { name: 'Krūtinės atvėrimas ant volo', gear: 'Trumpas volas (Roller)', sets: 1, reps: '2-3 min', isWeight: false, desc: 'Atsigulkite skersai volo po mentėmis, prilaikykite galvą ir atsiloškite.', video: 'https://www.youtube.com/results?search_query=foam+roller+thoracic+extension' }
    ]
};

let workouts = {};
let currentWorkoutType = '';
let currentEditType = '';
let workoutHistory = [];
let timerInterval;

function loadData() {
    let custom = null;
    try {
        custom = JSON.parse(localStorage.getItem('custom_workouts'));
    } catch(e) {}
    
    if (!custom || custom.SALE_A || !custom.NAMAI_1) {
        workouts = JSON.parse(JSON.stringify(defaultWorkouts));
        localStorage.setItem('custom_workouts', JSON.stringify(workouts));
    } else {
        workouts = custom;
    }
    
    workoutHistory = JSON.parse(localStorage.getItem('workout_history') || '[]');
}

// EDITING LOGIC
function openEditWorkouts(type) {
    currentEditType = type;
    showView('edit-workout-view');
    
    let displayTitle = '';
    if(type === 'NAMAI_1') displayTitle = '1 Diena';
    if(type === 'NAMAI_2') displayTitle = '2 Diena';
    if(type === 'NAMAI_3') displayTitle = '3 Diena';
    document.getElementById('edit-workout-title').textContent = displayTitle + ' (Koregavimas)';
    
    const container = document.getElementById('edit-exercise-container');
    container.innerHTML = '';
    
    if (workouts[type]) {
        workouts[type].forEach(ex => {
            container.appendChild(createEditBlock(ex));
        });
    }
    
    if (window.lucide) lucide.createIcons();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function createEditBlock(ex) {
    const card = document.createElement('div');
    card.className = 'exercise-card edit-card';
    card.style.borderLeft = "4px solid var(--accent)";
    
    card.innerHTML = `
        <button class="btn btn-icon edit-action-btn" style="color:var(--danger); top:12px; right:12px;" onclick="this.closest('.exercise-card').remove()">
            <i data-lucide="trash-2" class="lucide-sm"></i>
        </button>
        
        <div class="form-group" style="padding-right: 32px;">
            <label class="form-label">Pratimo Pavadinimas</label>
            <input type="text" class="form-input edit-name" value="${ex.name || ''}" placeholder="Pvz., Pritūpimai">
        </div>
        
        <div class="form-row">
            <div class="form-group">
                <label class="form-label">Inventorius</label>
                <input type="text" class="form-input edit-gear" value="${ex.gear || ''}" placeholder="Pvz., Hanteliai">
            </div>
            <div class="form-group" style="flex:0.6;">
                <label class="form-label">Serijos</label>
                <input type="number" class="form-input edit-sets" value="${ex.sets || 3}" min="1" max="10">
            </div>
        </div>
        
        <div class="form-row">
            <div class="form-group">
                <label class="form-label">Pakartojimai (Laukas)</label>
                <input type="text" class="form-input edit-reps" value="${ex.reps || ''}" placeholder="Pvz., 10-12 k.">
            </div>
            <div class="form-group flex justify-center items-center gap-2" style="flex-direction:row; margin-top:22px;">
                <label class="form-label" style="margin:0;">Fiksuoti Svorį(KG)?</label>
                <input type="checkbox" class="edit-isweight" style="width:20px; height:20px;" ${ex.isWeight ? 'checked' : ''}>
            </div>
        </div>

        <div class="form-group">
            <label class="form-label">Video Nuoroda (Youtube)</label>
            <input type="url" class="form-input edit-video" value="${ex.video || ''}" placeholder="https://youtube.com/...">
        </div>
        
        <div class="form-group">
            <label class="form-label">Paaiškinimas</label>
            <textarea class="form-input form-textarea edit-desc" placeholder="Trumpi jūsų žodžiai atsiminimui...">${ex.desc || ''}</textarea>
        </div>
    `;
    return card;
}

function addBlankExerciseForm() {
    const container = document.getElementById('edit-exercise-container');
    const newEx = { name: '', gear: '', sets: 3, reps: '', isWeight: false, desc: '', video: '' };
    container.appendChild(createEditBlock(newEx));
    if (window.lucide) lucide.createIcons();
    
    container.lastElementChild.scrollIntoView({ behavior: 'smooth', block: 'end' });
}

function saveWorkouts() {
    const container = document.getElementById('edit-exercise-container');
    const cards = container.querySelectorAll('.edit-card');
    
    const newArray = [];
    
    cards.forEach(card => {
        newArray.push({
            name: card.querySelector('.edit-name').value.trim() || 'Naujas',
            gear: card.querySelector('.edit-gear').value.trim(),
            sets: parseInt(card.querySelector('.edit-sets').value) || 1,
            reps: card.querySelector('.edit-reps').value.trim(),
            isWeight: card.querySelector('.edit-isweight').checked,
            video: card.querySelector('.edit-video').value.trim(),
            desc: card.querySelector('.edit-desc').value.trim()
        });
    });
    
    workouts[currentEditType] = newArray;
    localStorage.setItem('custom_workouts', JSON.stringify(workouts));
    
    // Vibrate to confirm
    if(navigator.vibrate) navigator.vibrate([50, 50, 50]);
    goHome();
}



document.addEventListener('DOMContentLoaded', () => {
    loadData();
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const dateStr = new Date().toLocaleDateString('lt-LT', options);
    document.getElementById('current-date').textContent = dateStr.charAt(0).toUpperCase() + dateStr.slice(1);

    updateWeeklyProgress();
    checkDailyHabits();
    
    if (window.lucide) lucide.createIcons();
    showView('home-view');
});

function updateWeeklyProgress() {
    const today = new Date();
    const msInDay = 24 * 60 * 60 * 1000;
    
    const recentWorkouts = workoutHistory.filter(h => {
        const d = new Date(h.date);
        const isRecent = (today - d) / msInDay <= 7;
        const isMain = h.type.startsWith('NAMAI');
        return isRecent && isMain;
    });

    const activeDays = new Set(recentWorkouts.map(h => new Date(h.date).toDateString())).size;
    
    const elements = document.querySelectorAll('.weekly-progress-stats');
    elements.forEach(el => {
        el.textContent = `${activeDays} treniruotės per 7 dienas`;
        if(activeDays >= 3) {
            el.style.color = 'var(--success)';
            el.innerHTML = `${activeDays} treniruotės per 7 d. 🔥 puikiai!`;
        }
    });

    const dows = document.querySelectorAll('.dow-indicator');
    if(dows.length) {
        const days = ['Sk','Pr','An','Tr','Kt','Pn','Št'];
        let currentDayOfWeek = today.getDay(); 
        
        let dayChecks = [0,0,0,0,0,0,0]; 
        recentWorkouts.forEach(r => {
            dayChecks[new Date(r.date).getDay()] = 1;
        });

        dows.forEach((dow, i) => {
            let dayIndex = (i + 1) % 7; 
            dow.textContent = days[dayIndex];
            if (dayChecks[dayIndex]) {
                dow.classList.add('active');
            } else {
                dow.classList.remove('active');
            }
            if (dayIndex === currentDayOfWeek) {
                dow.style.border = '2px solid var(--primary)';
            } else {
                dow.style.border = 'none';
            }
        });
    }
}

function checkDailyHabits() {
    const todayStr = new Date().toDateString();
    
    const todaysHabits = workoutHistory.filter(h => {
        const isToday = new Date(h.date).toDateString() === todayStr;
        return isToday && h.isHabit;
    });

    const hasMorning = todaysHabits.some(h => h.type === 'Rytinė mankšta');
    const hasEvening = todaysHabits.some(h => h.type === 'Vakarinė mankšta');

    function updateHabitBtn(id, isDone) {
        const btn = document.getElementById(id);
        if(!btn) return;
        if(isDone) {
            btn.classList.add('done');
            btn.innerHTML = '<i data-lucide="check-circle"></i> Viską atlikau';
            btn.style.background = 'var(--success-light)';
            btn.style.color = 'var(--success)';
            btn.style.borderColor = 'var(--success)';
        } else {
            btn.classList.remove('done');
            btn.innerHTML = '<i data-lucide="check"></i> Pažymėti kaip atliktą (Užbaigta)';
            btn.style.background = 'transparent';
            btn.style.color = '';
            btn.style.borderColor = '';
        }
    }

    updateHabitBtn('btn-ryt', hasMorning);
    updateHabitBtn('btn-vak', hasEvening);
    
    const summary = document.getElementById('habit-summary');
    if(summary) {
        let count = [hasMorning, hasEvening].filter(Boolean).length;
        summary.textContent = `Atlikta: ${count}/2`;
        summary.style.color = count === 2 ? 'var(--success)' : 'var(--text-main)';
    }

    if(window.lucide) lucide.createIcons();
}

function logHabit(name) {
    const todayStr = new Date().toDateString();
    const alreadyLogged = workoutHistory.some(h => new Date(h.date).toDateString() === todayStr && h.type === name);
    
    if (alreadyLogged) {
        workoutHistory = workoutHistory.filter(h => !(new Date(h.date).toDateString() === todayStr && h.type === name));
    } else {
        workoutHistory.push({
            date: new Date().toISOString(),
            type: name,
            isHabit: true,
            exercises: []
        });
        if(navigator.vibrate) navigator.vibrate(50);
    }
    
    localStorage.setItem('workout_history', JSON.stringify(workoutHistory));
    checkDailyHabits();
}

function logStudioClass() {
    workoutHistory.push({
        date: new Date().toISOString(),
        type: 'STUDIJA',
        isHabit: false,
        exercises: []
    });
    localStorage.setItem('workout_history', JSON.stringify(workoutHistory));
    
    const btn = document.getElementById('studio-btn-text');
    const orig = btn.innerHTML;
    btn.innerHTML = '<i data-lucide="check"></i> Pažymėta istorijoje!';
    if(window.lucide) lucide.createIcons();
    if(navigator.vibrate) navigator.vibrate(100);
    updateWeeklyProgress();
    
    setTimeout(() => {
        btn.innerHTML = orig;
        if(window.lucide) lucide.createIcons();
    }, 2000);
}

function startWorkout(type) {
    if(!workouts[type] || workouts[type].length === 0) {
        alert("Šis sąrašas tuščias! Pradžioje pridėkite pratimų.");
        return;
    }
    
    currentWorkoutType = type;
    showView('workout-view');
    
    const titleEl = document.getElementById('workout-title');
    
    let displayTitle = '';
    if(type === 'NAMAI_1') { displayTitle = '1 Diena: Apatinė dalis'; titleEl.className = 'text-success'; }
    if(type === 'NAMAI_2') { displayTitle = '2 Diena: Viršutinė dalis'; titleEl.className = 'text-success'; }
    if(type === 'NAMAI_3') { displayTitle = '3 Diena: Visas kūnas'; titleEl.className = 'text-success'; }
    
    titleEl.textContent = displayTitle;
    
    const container = document.getElementById('exercise-container');
    container.innerHTML = '';
    
    const prevSession = workoutHistory.slice().reverse().find(h => h.type === type);
    
    workouts[type].forEach((ex, idx) => {
        const card = document.createElement('div');
        card.className = 'exercise-card';
        
        if (ex.name.toLowerCase().includes("apšilimas") || ex.sets === 1 && idx <= 1) {
            card.style.borderLeft = "3px solid var(--warning)";
        } else if (ex.name.toLowerCase().includes("tempimas") || ex.name.toLowerCase().includes("atsipalaidavimas") || ex.sets === 1 && idx > 3) {
            card.style.borderLeft = "3px solid var(--secondary)";
        } else {
            card.style.borderLeft = "3px solid var(--primary)";
        }
        
        let prevWeights = ['', '', ''];
        if (prevSession && prevSession.exercises[idx]) {
            prevWeights = prevSession.exercises[idx].weights || ['', '', ''];
        }

        let setsHtml = `<div class="exercise-sets" id="track-${idx}">`;
        for(let i = 0; i < ex.sets; i++) {
            let prevVal = prevWeights[i] || '';
            let placeholder = prevVal ? `${prevVal} kg` : 'kg';
            
            let setName = ex.sets === 1 ? 'Atlikimas' : `${i+1} Serija`;
            
            setsHtml += `
                <div class="set-row">
                    <span class="set-info" style="font-size: 13px;">${setName}</span>
                    <div class="set-input-group">
                        ${ex.isWeight ? `<input type="number" class="set-input" placeholder="${placeholder}" value="${prevVal}">` : ''}
                        <label class="custom-checkbox-wrap">
                            <input type="checkbox" class="custom-checkbox" onchange="markSetDone(this, ${ex.sets === 1})">
                        </label>
                    </div>
                </div>
            `;
        }
        setsHtml += '</div>';

        card.innerHTML = `
            <div class="exercise-header" style="align-items: flex-start;">
                <div class="exercise-info" style="flex:1;">
                    <h3 style="font-size: 18px; line-height: 1.2; margin-bottom: 6px;">${ex.name}</h3>
                    <p style="font-size: 13px;">${ex.gear} • <strong>${ex.reps}</strong></p>
                    ${ex.desc ? `<p style="font-size: 12px; font-weight: 400; color: var(--text-dim); margin-top: 4px; padding-right: 10px;">${ex.desc}</p>` : ''}
                </div>
                ${ex.video ? `<a href="${ex.video}" target="_blank" class="btn btn-icon" style="flex-shrink:0;">
                    <i data-lucide="play" class="lucide-sm"></i>
                </a>` : ''}
            </div>
            ${setsHtml}
        `;
        container.appendChild(card);
    });

    if (window.lucide) lucide.createIcons();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goHome() {
    showView('home-view');
}

function showView(viewId) {
    const views = document.querySelectorAll('.view-section');
    views.forEach(v => {
        v.classList.remove('fadeInUp');
        v.classList.add('hidden');
    });

    const activeView = document.getElementById(viewId);
    activeView.classList.remove('hidden');
    
    void activeView.offsetWidth;
    activeView.style.animation = 'none';
    setTimeout(() => activeView.style.animation = '', 10);

    const nav = document.querySelector('.top-nav');
    if (viewId !== 'workout-view' && viewId !== 'edit-workout-view') {
        document.querySelectorAll('.nav-tab').forEach(item => item.classList.remove('active'));
        if (viewId === 'home-view') document.getElementById('nav-home').classList.add('active');
        if (viewId === 'posture-view') document.getElementById('nav-posture').classList.add('active');
        if (viewId === 'history-view') document.getElementById('nav-history').classList.add('active');
        if (nav) {
            nav.style.display = 'flex';
            nav.classList.remove('hidden');
        }
        
        checkDailyHabits();
        updateWeeklyProgress();
    } else {
        if (nav) {
            nav.style.display = 'none';
            nav.classList.add('hidden');
        }
    }
    
    if (viewId === 'history-view') {
        renderHistory();
    }

    if (window.lucide) lucide.createIcons();
    window.scrollTo(0, 0);
}

function finishWorkout() {
    const exerciseInputs = document.querySelectorAll('.exercise-card');
    const sessionData = {
        date: new Date().toISOString(),
        type: currentWorkoutType,
        isHabit: false,
        exercises: []
    };

    exerciseInputs.forEach((card, idx) => {
        const numberInputs = card.querySelectorAll('input[type="number"]');
        const checkboxInputs = card.querySelectorAll('input[type="checkbox"]');
        
        let storedData = [];
        if (numberInputs.length > 0) {
            storedData = Array.from(numberInputs).map(i => i.value || i.placeholder.replace('kg', '').trim());
            storedData = storedData.map(v => v === 'kg' ? '' : v);
        } else {
            storedData = Array.from(checkboxInputs).map(i => i.checked ? '✓' : '');
        }

        sessionData.exercises.push({
            name: workouts[currentWorkoutType][idx].name,
            weights: storedData
        });
    });

    workoutHistory.push(sessionData);
    localStorage.setItem('workout_history', JSON.stringify(workoutHistory));
    
    goHome();
}

function renderHistory() {
    updateWeeklyProgress();
    
    const container = document.getElementById('history-container');
    container.innerHTML = '';
    
    if (workoutHistory.length === 0) {
        container.innerHTML = '<div class="glass-card" style="text-align: center; padding: 40px 20px;"><i data-lucide="inbox" class="text-dim mb-2 lucide-lg"></i><p class="text-dim">Istorija tuščia.</p></div>';
        if (window.lucide) lucide.createIcons();
        return;
    }

    const reversed = workoutHistory.map((item, index) => ({ item, index })).reverse();
    let currentGroupDate = '';
    
    reversed.forEach(({ item, index }) => {
        const dateObj = new Date(item.date);
        const logDateStr = dateObj.toLocaleDateString('lt-LT', { month: 'long', day: 'numeric' });
        const timeStr = dateObj.toLocaleTimeString('lt-LT', { hour: '2-digit', minute: '2-digit' });
        
        if(logDateStr !== currentGroupDate) {
            currentGroupDate = logDateStr;
            const header = document.createElement('h3');
            header.style.cssText = "font-size: 14px; margin: 15px 0 10px 0; color: var(--text-dim); text-transform: uppercase; letter-spacing: 1px;";
            header.textContent = currentGroupDate;
            container.appendChild(header);
        }

        let cardColor = 'var(--text-main)';
        let typeName = item.type;
        let iconName = 'activity';
        
        if(item.type.startsWith('NAMAI')) {
            cardColor = 'var(--success)';
            if(item.type === 'NAMAI_1') typeName = '1 Diena: Apatinė dalis';
            if(item.type === 'NAMAI_2') typeName = '2 Diena: Viršutinė dalis';
            if(item.type === 'NAMAI_3') typeName = '3 Diena: Visas kūnas';
            iconName = 'home';
        }
        
        if(item.isHabit) {
            let label = "Dienos Rutina";
            if(item.type === 'Rytinė mankšta') label = "Rytinė Rutina";
            if(item.type === 'Vakarinė mankšta') label = "Vakarinė Rutina";
            
            const minorCard = document.createElement('div');
            minorCard.style.cssText = `background: rgba(255,255,255,0.02); padding: 10px 14px; border-radius: 12px; margin-bottom: 8px; display: flex; justify-content: space-between; align-items: center; border: 1px solid rgba(255,255,255,0.05);`;
            minorCard.innerHTML = `
                <span style="font-size: 14px; color: var(--text-dim);"><i data-lucide="check" style="width:14px; color:var(--success);"></i> ${label}</span> 
                <div style="display:flex; align-items:center; gap:12px;">
                    <span style="font-size: 12px; color: rgba(255,255,255,0.3);">${timeStr}</span>
                    <button onclick="deleteHistoryItem(${index})" style="background:transparent; border:none; color:var(--danger); padding:0; cursor:pointer; display:flex; align-items:center;">
                        <i data-lucide="trash-2" class="lucide-sm"></i>
                    </button>
                </div>
            `;
            container.appendChild(minorCard);
            return;
        }

        const card = document.createElement('div');
        card.className = 'history-item';
        card.style.borderLeftColor = cardColor;
        
        let setsCount = 0;
        if(item.exercises) {
            item.exercises.forEach(e => {
                if(e.weights && e.weights.join('').length > 0) setsCount++;
            });
        }
        
        card.innerHTML = `
            <div class="flex justify-between items-center mb-1">
                <strong style="font-size: 16px; color: ${cardColor}; display:flex; align-items:center; gap:6px;">
                    <i data-lucide="${iconName}" class="lucide-sm"></i>
                    ${typeName}
                </strong>
                <div style="display:flex; align-items:center; gap:12px;">
                    <span style="font-size: 12px; color: var(--text-dim);">${timeStr}</span>
                    <button onclick="deleteHistoryItem(${index})" style="background:transparent; border:none; color:var(--danger); padding:0; cursor:pointer; display:flex; align-items:center;">
                        <i data-lucide="trash-2" class="lucide-sm"></i>
                    </button>
                </div>
            </div>
            ${item.exercises && item.exercises.length > 0 ? `<div style="font-size: 13px; color: var(--text-dim);">Aktyvūs pratimai: ${setsCount}/${item.exercises.length}</div>` : ''}
        `;
        container.appendChild(card);
    });
    
    if(window.lucide) lucide.createIcons();
}

function markSetDone(checkbox, isWarmupOrCooldown = false) {
    const row = checkbox.closest('.set-row');
    const card = checkbox.closest('.exercise-card');
    if (checkbox.checked) {
        row.classList.add('completed');
        if (!isWarmupOrCooldown) {
            startInlineTimer(card);
        }
    } else {
        row.classList.remove('completed');
    }
}

let currentTimerInterval;
function startInlineTimer(card) {
    clearInterval(currentTimerInterval);
    const existingTimer = document.querySelector('.inline-timer');
    if (existingTimer) {
        existingTimer.remove();
    }

    const timerDiv = document.createElement('div');
    timerDiv.className = 'inline-timer';
    timerDiv.innerHTML = `
        <span class="inline-timer-text">
            <i data-lucide="timer" class="lucide-sm"></i> Poilsis: <span class="timer-countdown-val">60</span>s
        </span>
        <span class="inline-timer-skip" onclick="skipInlineTimer(this)">Praleisti</span>
    `;
    
    card.appendChild(timerDiv);
    if (window.lucide) lucide.createIcons();

    let count = 60;
    const countdownVal = timerDiv.querySelector('.timer-countdown-val');

    currentTimerInterval = setInterval(() => {
        count--;
        if (countdownVal) {
            countdownVal.textContent = count;
        }
        if (count <= 0) {
            clearInterval(currentTimerInterval);
            timerDiv.remove();
            if (navigator.vibrate) navigator.vibrate(200);
        }
    }, 1000);
}

function skipInlineTimer(btn) {
    clearInterval(currentTimerInterval);
    const timerDiv = btn.closest('.inline-timer');
    if (timerDiv) {
        timerDiv.remove();
    }
}

function deleteHistoryItem(index) {
    if (confirm('Ar tikrai norite ištrinti šį įrašą?')) {
        workoutHistory.splice(index, 1);
        localStorage.setItem('workout_history', JSON.stringify(workoutHistory));
        renderHistory();
        checkDailyHabits();
    }
}

function exportData() {
    if(workoutHistory.length === 0) return;
    const historyData = localStorage.getItem('workout_history') || '[]';
    const workoutsData = localStorage.getItem('custom_workouts') || JSON.stringify(workouts);
    
    const combined = { history: JSON.parse(historyData), saved_workouts: JSON.parse(workoutsData) };
    
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(combined));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "sporto_programa_backup.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

function importData(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const importedData = JSON.parse(e.target.result);
            if (Array.isArray(importedData)) {
                // Old array format (just history)
                workoutHistory = importedData;
                localStorage.setItem('workout_history', JSON.stringify(workoutHistory));
            } else if (importedData.history && importedData.saved_workouts) {
                // New combined format
                workoutHistory = importedData.history;
                workouts = importedData.saved_workouts;
                localStorage.setItem('workout_history', JSON.stringify(workoutHistory));
                localStorage.setItem('custom_workouts', JSON.stringify(workouts));
            }
            renderHistory();
            updateWeeklyProgress();
        } catch (err) {
            console.error('Nepavyko perskaityti failo.', err);
        }
        event.target.value = '';
    };
    reader.readAsText(file);
}
