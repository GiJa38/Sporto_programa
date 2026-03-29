const defaultWorkouts = {
    'SALE_A': [
        { name: 'Kardio (Apšilimas)', gear: 'Elipsinis / Takelis', sets: 1, reps: '5-7 min', isWeight: false, desc: 'Prakaito išmušimui.', video: 'https://www.youtube.com/results?search_query=5+minute+treadmill+warm+up+beginner' },
        { name: 'Pečių Rotatoriai', gear: 'Laisvi (be svorio)', sets: 1, reps: '10 k. pirmyn/atgal', isWeight: false, desc: 'Rankų mostai pečių sąnariams.', video: 'https://www.youtube.com/results?search_query=arm+circles+warm+up' },
        { name: 'Vertikali Trauka', gear: 'Treniruoklis', sets: 3, reps: '10-12', isWeight: true, desc: 'Traukite link krūtinės.', video: 'https://www.youtube.com/results?search_query=lat+pulldown+beginner+form' },
        { name: 'Krūtinės Spaudimas', gear: 'Treniruoklis', sets: 3, reps: '10-12', isWeight: true, desc: 'Stiprus išstūmimas.', video: 'https://www.youtube.com/results?search_query=machine+chest+press+beginner+form' },
        { name: 'Pečių Spaudimas', gear: 'Hanteliai', sets: 3, reps: '10', isWeight: true, desc: 'Sėdint su atrama.', video: 'https://www.youtube.com/results?search_query=seated+dumbbell+shoulder+press+form' },
        { name: 'Atsilenkimai Linijos Trauka', gear: 'Lynas (Cable)', sets: 3, reps: '15', isWeight: true, desc: 'Stipriai sutraukti presą žemyn.', video: 'https://www.youtube.com/results?search_query=kneeling+cable+crunch+form' },
        { name: 'Nugaros Tempimas', gear: 'Skersinis / Atrama', sets: 1, reps: '30 sek.', isWeight: false, desc: 'Laisvai pakyboti ar atsiremti ir tempti.', video: 'https://www.youtube.com/results?search_query=dead+hang+back+stretch' }
    ],
    'SALE_B': [
        { name: 'Liptynės / Įkalnė', gear: 'Treniruoklis', sets: 1, reps: '5-7 min', isWeight: false, desc: 'Sušildyti kojas.', video: 'https://www.youtube.com/results?search_query=stairmaster+treadmill+warm+up' },
        { name: 'Dinaminiai Įtūpstai', gear: 'Kūno svoris', sets: 1, reps: 'Po 5 kojai', isWeight: false, desc: 'Lengvi gilūs žingsniai vietoj.', video: 'https://www.youtube.com/results?search_query=bodyweight+dynamic+lunges' },
        { name: 'Kojų Presas', gear: 'Treniruoklis', sets: 3, reps: '12', isWeight: true, desc: 'Stūmimas akcentuojant sėdmenis.', video: 'https://www.youtube.com/results?search_query=leg+press+beginner+form' },
        { name: 'Horizontali Trauka', gear: 'Treniruoklis', sets: 3, reps: '12', isWeight: true, desc: 'Nugaros susitraukimui.', video: 'https://www.youtube.com/results?search_query=seated+cable+row+beginner+form' },
        { name: 'Kojų Lenkimas / Tiesimas', gear: 'Treniruoklis', sets: 3, reps: '12', isWeight: true, desc: 'Šlaunų užbaigimui.', video: 'https://www.youtube.com/results?search_query=leg+extension+leg+curl+machine' },
        { name: 'Kojų Kėlimas "Captain\'s Chair"', gear: 'Kėdės rėmas', sets: 3, reps: '12-15', isWeight: false, desc: 'Pakėlus kelius prie krūtinės.', video: 'https://www.youtube.com/results?search_query=captains+chair+leg+raises' },
        { name: 'Šlaunų Tempimas stovint', gear: 'Atrama', sets: 1, reps: 'Po 30 s.', isWeight: false, desc: 'Traukti kulną prie sėdmens.', video: 'https://www.youtube.com/results?search_query=standing+quad+stretch' }
    ],
    'NAMAI_A': [
        { name: 'Kaklo ir Pečių atlaisvinimas', gear: 'Kilimėlis', sets: 1, reps: '1 min', isWeight: false, desc: 'Lėti ir platūs judesiai.', video: 'https://www.youtube.com/results?search_query=neck+and+shoulder+rolls+warm+up' },
        { name: 'Katė-Karvė', gear: 'Kilimėlis', sets: 1, reps: '10 k.', isWeight: false, desc: 'Nugaros išlenkimas ir nuleidimas.', video: 'https://www.youtube.com/results?search_query=cat+cow+stretch' },
        { name: 'Sėdmenų kėlimas', gear: '25cm Kamuoliukas', sets: 3, reps: '15', isWeight: false, desc: 'Spaudžiant kamuoliuką tarp kelių.', video: 'https://www.youtube.com/results?search_query=glute+bridge+with+pilates+ball' },
        { name: 'Kamuoliuko perdavimas', gear: '25cm Kamuoliukas', sets: 3, reps: '12', isWeight: false, desc: 'Perduoti pritraukiant kelius iš rankų.', video: 'https://www.youtube.com/results?search_query=v-pass+pilates+ball+core+exercise' },
        { name: 'Lenta (Plank)', gear: 'Kilimėlis', sets: 3, reps: '30-45 s', isWeight: false, desc: 'Tiesi linija ant alkūnių.', video: 'https://www.youtube.com/results?search_query=plank+exercise+form+tutorial' },
        { name: 'Trumpi Atsilenkimai', gear: '25cm Kamuoliukas', sets: 3, reps: '15', isWeight: false, desc: 'Kamuoliukas už nugaros apatinės dalies.', video: 'https://www.youtube.com/results?search_query=crunches+on+small+pilates+ball' },
        { name: 'Vaiko Poza', gear: 'Kilimėlis', sets: 1, reps: '1 min', isWeight: false, desc: 'Visiškas atpalaidavimas.', video: 'https://www.youtube.com/results?search_query=childs+pose+stretch' }
    ],
    'NAMAI_B': [
        { name: 'Rankų sukimas ratu', gear: 'Sėdint/Stovint', sets: 1, reps: '10 k.', isWeight: false, desc: 'Pirmyn ir atgal atveriant krūtinę.', video: 'https://www.youtube.com/results?search_query=arm+circles+warm+up+form' },
        { name: 'Liemens Posūkiai', gear: 'Sėdint', sets: 1, reps: 'Po 5 s.', isWeight: false, desc: 'Pasisukti į abi puses (Twists).', video: 'https://www.youtube.com/results?search_query=seated+torso+twists+warm+up' },
        { name: 'Ketvirtainis Yrimas', gear: '1kg Svareliai', sets: 3, reps: '12 (Pusei)', isWeight: false, desc: 'Keturpėsčia traukti svorį prie šono.', video: 'https://www.youtube.com/results?search_query=quadruped+dumbbell+row' },
        { name: 'Skėtimas į šonus', gear: '1kg Svareliai', sets: 3, reps: '15', isWeight: false, desc: 'Pečių raumenims sėdint.', video: 'https://www.youtube.com/results?search_query=seated+dumbbell+lateral+raise' },
        { name: 'Bicepso Lenkimas', gear: '1kg Svareliai', sets: 3, reps: '15', isWeight: false, desc: 'Klasikinis rankų stiprinimas.', video: 'https://www.youtube.com/results?search_query=dumbbell+bicep+curl+form' },
        { name: 'Paukštis-Šuo', gear: 'Kilimėlis', sets: 3, reps: '10 (Pusei)', isWeight: false, desc: 'Nugaros-preso stabilizavimas.', video: 'https://www.youtube.com/results?search_query=bird-dog+exercise+form' },
        { name: 'Krūtinės Tempimas', gear: 'Tarpdurys/Siena', sets: 1, reps: '1 min', isWeight: false, desc: 'Stipriai atverti pečius ir krūtinę atgal.', video: 'https://www.youtube.com/results?search_query=doorway+chest+stretch' }
    ]
};

let workouts = {};
let currentWorkoutType = '';
let currentEditType = '';
let workoutHistory = [];
let timerInterval;

function loadData() {
    const custom = JSON.parse(localStorage.getItem('custom_workouts'));
    if (custom) {
        workouts = custom;
    } else {
        workouts = JSON.parse(JSON.stringify(defaultWorkouts));
        localStorage.setItem('custom_workouts', JSON.stringify(workouts));
    }
    
    workoutHistory = JSON.parse(localStorage.getItem('workout_history') || '[]');
}

// EDITING LOGIC
function openEditWorkouts(type) {
    currentEditType = type;
    showView('edit-workout-view');
    
    let displayTitle = '';
    if(type === 'SALE_A') displayTitle = 'Salė A';
    if(type === 'SALE_B') displayTitle = 'Salė B';
    if(type === 'NAMAI_A') displayTitle = 'Namai A';
    if(type === 'NAMAI_B') displayTitle = 'Namai B';
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
        const isMain = h.type.startsWith('SALE') || h.type.startsWith('NAMAI') || h.type === 'STUDIJA';
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
    const hasWork = todaysHabits.some(h => h.type === 'Darbo pertraukėlė');
    const hasEvening = todaysHabits.some(h => h.type === 'Vakarinė korekcija');

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
    updateHabitBtn('btn-darb', hasWork);
    updateHabitBtn('btn-vak', hasEvening);
    
    const summary = document.getElementById('habit-summary');
    if(summary) {
        let count = [hasMorning, hasWork, hasEvening].filter(Boolean).length;
        summary.textContent = `Atlikta: ${count}/3`;
        summary.style.color = count === 3 ? 'var(--success)' : 'var(--text-main)';
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
    if(type === 'SALE_A') { displayTitle = 'Salė A'; titleEl.className = 'text-primary'; }
    if(type === 'SALE_B') { displayTitle = 'Salė B'; titleEl.className = 'text-primary'; }
    if(type === 'NAMAI_A') { displayTitle = 'Namai A'; titleEl.className = 'text-success'; }
    if(type === 'NAMAI_B') { displayTitle = 'Namai B'; titleEl.className = 'text-success'; }
    
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

    const nav = document.querySelector('.bottom-nav');
    if (viewId !== 'workout-view' && viewId !== 'edit-workout-view') {
        document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
        if (viewId === 'home-view') document.getElementById('nav-home').classList.add('active');
        if (viewId === 'posture-view') document.getElementById('nav-posture').classList.add('active');
        if (viewId === 'history-view') document.getElementById('nav-history').classList.add('active');
        nav.style.display = 'flex';
        nav.classList.remove('hidden');
        
        checkDailyHabits();
        updateWeeklyProgress();
    } else {
        nav.style.display = 'none';
        nav.classList.add('hidden');
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

    const reversed = [...workoutHistory].reverse();
    let currentGroupDate = '';
    
    reversed.forEach(item => {
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
        
        if(item.type.startsWith('SALE')) { cardColor = 'var(--primary)'; typeName = item.type === 'SALE_A' ? 'Salės A (Viršus)' : 'Salės B (Pilnas)'; iconName = 'dumbbell'; }
        if(item.type.startsWith('NAMAI')) { cardColor = 'var(--success)'; typeName = item.type === 'NAMAI_A' ? 'Namai A (Kamuoliukas)' : 'Namai B (Svoriai)'; iconName = 'home'; }
        if(item.type === 'STUDIJA') { cardColor = 'var(--secondary)'; typeName = 'Pilates / Mobility'; iconName = 'heart'; }
        
        if(item.isHabit) {
            let label = "Dienos Rutina";
            if(item.type === 'Rytinė mankšta') label = "Rytinė Rutina";
            if(item.type === 'Darbo pertraukėlė') label = "Darbo Rutina";
            if(item.type === 'Vakarinė korekcija') label = "Vakarinė Rutina";
            
            const minorCard = document.createElement('div');
            minorCard.style.cssText = `background: rgba(255,255,255,0.02); padding: 10px 14px; border-radius: 12px; margin-bottom: 8px; display: flex; justify-content: space-between; align-items: center; border: 1px solid rgba(255,255,255,0.05);`;
            minorCard.innerHTML = `<span style="font-size: 14px; color: var(--text-dim);"><i data-lucide="check" style="width:14px; color:var(--success);"></i> ${label}</span> <span style="font-size: 12px; color: rgba(255,255,255,0.3);">${timeStr}</span>`;
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
                <span style="font-size: 12px; color: var(--text-dim);">${timeStr}</span>
            </div>
            ${item.exercises && item.exercises.length > 0 ? `<div style="font-size: 13px; color: var(--text-dim);">Aktyvūs pratimai: ${setsCount}/${item.exercises.length}</div>` : ''}
        `;
        container.appendChild(card);
    });
    
    if(window.lucide) lucide.createIcons();
}

function markSetDone(checkbox, isWarmupOrCooldown = false) {
    const row = checkbox.closest('.set-row');
    if (checkbox.checked) {
        row.classList.add('completed');
        if (!isWarmupOrCooldown) {
            startTimer();
        }
    } else {
        row.classList.remove('completed');
    }
}

function startTimer() {
    const overlay = document.getElementById('timer-overlay');
    const valSpan = document.getElementById('timer-val');
    
    overlay.classList.add('visible');
    
    clearInterval(timerInterval);
    let count = 60;
    valSpan.textContent = count;
    
    timerInterval = setInterval(() => {
        count--;
        valSpan.textContent = count;
        if (count <= 0) {
            clearInterval(timerInterval);
            overlay.classList.remove('visible');
            if(navigator.vibrate) navigator.vibrate(200);
        }
    }, 1000);
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
