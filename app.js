const defaultWorkouts = {
    'NAMAI_1': [
        // Apšilimas
        { name: 'Apšilimas: Dinaminis klubų ir kojų suaktyvinimas', gear: 'Kūno svoris', sets: 1, reps: '3 min.', isWeight: false, desc: 'Atlikite lengvus dubens sukimus ratu, kojų mojus ir pritūpimus be svorio pasiruošimui.', video: 'https://www.youtube.com/results?search_query=lower+body+dynamic+warm+up' },
        // 1. Svareliai (Dumbbells) / Be įrangos stovint
        { name: 'Pritūpimai su svarmeniu prie krūtinės (Goblet Squats)', gear: 'Svarmuo (5 kg / 1 kg)', sets: 3, reps: '10-12 k.', isWeight: true, desc: 'Nusileidžiant kontroliuokite kelius.', video: 'https://www.youtube.com/results?search_query=goblet+squat+form' },
        { name: 'Įtūpstai atgal su svareliais (Reverse Lunges)', gear: 'Svareliai (2x1 kg)', sets: 3, reps: 'Po 10 k. kojai', isWeight: true, desc: 'Kontroliuokite pusiausvyrą, žingsnis atgal pakankamai platus.', video: 'https://www.youtube.com/results?search_query=reverse+lunges+with+dumbbells' },
        { name: 'Šoniniai įtūpstai su svareliais (Side Lunges)', gear: 'Svareliai (2x1 kg)', sets: 3, reps: 'Po 12 k. kojai', isWeight: true, desc: 'Ženkite į šoną, stumkite klubus atgal, nugara tiesi.', video: 'https://www.youtube.com/results?search_query=dumbbell+side+lunge' },
        { name: 'Rumuniškas mirties traukimas su svareliais (RDL)', gear: 'Svareliai (2x1 kg)', sets: 3, reps: '10-12 k.', isWeight: true, desc: 'Stumkite dubenį atgal, leiskite svareliais žemyn išilgai kojų, kol pajusite tempimą šlaunų gale.', video: 'https://www.youtube.com/results?search_query=dumbbell+romanian+deadlift' },
        // 2. Kojų svoriai (2 kg ankle weights)
        { name: 'Šoninis kojos kėlimas gulint', gear: 'Kojų svoriai (2 kg)', sets: 3, reps: 'Po 20 k. kojai', isWeight: false, desc: 'Užsisegkite svorius ant čiurnų. Kėlimas kontroliuojamas.', video: 'https://www.youtube.com/results?search_query=lying+side+leg+raise' },
        { name: 'Asiliuko spyris keturiomis (Donkey Kick)', gear: 'Kojų svoriai (2 kg)', sets: 3, reps: 'Po 15-20 k. kojai', isWeight: false, desc: 'Judėkite keturiomis. Viršuje stipriai suspauskite sėdmenį.', video: 'https://www.youtube.com/results?search_query=donkey+kick+exercise' },
        // 3. Pilateso kamuoliukas
        { name: 'Sėdmenų tiltas suspaudžiant pilateso kamuoliuką', gear: 'Pilateso kamuoliukas', sets: 3, reps: '20 k.', isWeight: false, desc: 'Kamuoliuką suspauskite tarp kelių, kelkite dubenį ir išlaikykite spaudimą.', video: 'https://www.youtube.com/results?search_query=glute+bridge+squeezing+ball' },
        // 4. Kilimėlis (Be įrangos)
        { name: 'Kojų nuleidimas pilvo apačiai', gear: 'Kilimėlis', sets: 3, reps: '12-15 k.', isWeight: false, desc: 'Griežtai prispauskite juosmenį prie grindų.', video: 'https://www.youtube.com/results?search_query=leg+lowering+exercise' },
        // Tempimas
        { name: 'Tempimas: Sėdmenų ir šlaunų stulbimas', gear: 'Kilimėlis', sets: 1, reps: '3 min.', isWeight: false, desc: 'Atlikite ramų sėdmenų ir šlaunų galinės dalies tempimą ant kilimėlio.', video: 'https://www.youtube.com/results?search_query=lower+body+static+stretching' }
    ],
    'NAMAI_2': [
        // Apšilimas
        { name: 'Apšilimas: Rankų, pečių ir krūtinės suaktyvinimas', gear: 'Kūno svoris', sets: 1, reps: '3 min.', isWeight: false, desc: 'Rankų mojai pirmyn/atgal, platūs pečių sukimai ratais, krūtinės atvėrimas.', video: 'https://www.youtube.com/results?search_query=upper+body+dynamic+warm+up' },
        // 1. Svareliai (Dumbbells)
        { name: 'Svarelių spaudimas virš galvos (Shoulder Press)', gear: 'Svareliai (2x1 kg)', sets: 3, reps: '15-20 k.', isWeight: true, desc: 'Tiesia nugaru stumkite svarmenis aukštyn.', video: 'https://www.youtube.com/results?search_query=dumbbell+shoulder+press' },
        { name: 'Dviejų rankų trauka su svareliais pasilenkus', gear: 'Svareliai (2x1 kg)', sets: 3, reps: '10-12 k.', isWeight: true, desc: 'Nugarą laikykite tiesiai, svarmenis traukite link šonkaulių.', video: 'https://www.youtube.com/results?search_query=bent+over+dumbbell+row' },
        { name: 'Bicepso lenkimas („Plaktukas“)', gear: 'Svareliai (2x1 kg)', sets: 3, reps: '20 k.', isWeight: true, desc: 'Alkūnės prispaustos prie šonų.', video: 'https://www.youtube.com/results?search_query=dumbbell+hammer+curl' },
        { name: 'Tricepso tiesimas už galvos', gear: 'Svarmuo (1 kg)', sets: 3, reps: '15-20 k.', isWeight: true, desc: 'Laikykite svarmenį abiem rankomis, alkūnės arti galvos.', video: 'https://www.youtube.com/results?search_query=overhead+dumbbell+tricep+extension' },
        { name: 'Svarelių mojai į šonus pasilenkus (Rear Delt)', gear: 'Svareliai (2x1 kg)', sets: 3, reps: '12-15 k.', isWeight: true, desc: 'Pasilenkite į priekį, kelkite rankas į šonus, stiprinant pečių galą laikysenai.', video: 'https://www.youtube.com/results?search_query=bent+over+rear+delt+raise' },
        // 2. Pilateso kamuoliukas
        { name: 'Pilateso kamuoliuko suspaudimas rankomis', gear: 'Pilateso kamuoliukas', sets: 3, reps: '15 k. (laikyti 5s)', isWeight: false, desc: 'Laikykite kamuolį tarp delnų prieš krūtinę ir stipriai spauskite.', video: 'https://www.youtube.com/results?search_query=isometric+chest+squeeze+with+ball' },
        // 3. Kūno svoris
        { name: 'Atsispaudimai (nuo grindų arba kelių)', gear: 'Kūno svoris', sets: 3, reps: '8-12 k.', isWeight: false, desc: 'Kūnas tiesus, alkūnės 45 laipsnių kampu.', video: 'https://www.youtube.com/results?search_query=push+ups+form+beginner' },
        { name: '„Supermenas“ (gulint ant pilvo)', gear: 'Kūno svoris', sets: 3, reps: '12-15 k.', isWeight: false, desc: 'Vienu metu pakelkite tiesias rankas, krūtinę ir kojas. Užlaikykite viršuje 2 sek.', video: 'https://www.youtube.com/results?search_query=superman+exercise' },
        // 4. Svarelis / Kilimėlis
        { name: 'Atsilenkimai su svoriu rankose', gear: 'Svarmuo (1 kg)', sets: 3, reps: '15-20 k.', isWeight: true, desc: 'Pilvo presui, svarmuo prie krūtinės.', video: 'https://www.youtube.com/results?search_query=weighted+crunches' },
        // Tempimas
        { name: 'Tempimas: Krūtinės ir pečių atpalaidavimas', gear: 'Kilimėlis', sets: 1, reps: '3 min.', isWeight: false, desc: 'Statins krūtinės ir nugaros tempimas gulint ant nugaros arba sėdint.', video: 'https://www.youtube.com/results?search_query=upper+body+stretching' }
    ],
    'NAMAI_3': [
        // Apšilimas
        { name: 'Apšilimas: Viso kūno dinaminis aktyvinimas', gear: 'Kūno svoris', sets: 1, reps: '3 min.', isWeight: false, desc: 'Dinaminis „Šuo-Kobra“ perėjimas, gili vaiko poza, liemens pasukimai.', video: 'https://www.youtube.com/results?search_query=full+body+dynamic+warm+up' },
        // 1. Svareliai (Dumbbells)
        { name: 'Pritūpimai su rankų išstūmimu (Thrusters)', gear: 'Svareliai (2x1 kg)', sets: 3, reps: '10 k.', isWeight: true, desc: 'Pritūpkite ir stumiantis aukštyn tieskite svarmenis virš galvos.', video: 'https://www.youtube.com/results?search_query=dumbbell+thrusters+form' },
        { name: 'Rankų tiesimas atgal palinkus (Triceps kickback)', gear: 'Svareliai (2x1 kg)', sets: 3, reps: '10-15 k.', isWeight: true, desc: 'Rankų tiesimas atgal pasilenkus.', video: 'https://www.youtube.com/results?search_query=dumbbell+triceps+kickback' },
        { name: 'Atsilenkimai (Sit-ups) + svarmens spaudimas aukštyn', gear: 'Svarmuo (1 kg)', sets: 3, reps: '12-15 k.', isWeight: true, desc: 'Atsisėdimas su svarelio išstūmimu virš galvos.', video: 'https://www.youtube.com/results?search_query=sit+up+dumbbell+press' },
        { name: 'Rusiškas sukimasis su svoriu (Russian Twist)', gear: 'Svarmuo (1 kg)', sets: 3, reps: '30 pasisukimų', isWeight: true, desc: 'Po 15 į kiekvieną pusę. Nugara tiesi.', video: 'https://www.youtube.com/results?search_query=weighted+russian+twist' },
        // 2. Kūno svoris / Kilimėlis
        { name: 'Lenta (Plank) su rankų lenkimu', gear: 'Kilimėlis', sets: 3, reps: '30-40 sek.', isWeight: false, desc: 'Puikiai aktyvuoja viso kūno ir šerdies raumenis.', video: 'https://www.youtube.com/results?search_query=plank+up+downs' },
        { name: '„Kalnų kopinėtojas“ (Mountain Climbers)', gear: 'Kilimėlis', sets: 3, reps: '30 sek.', isWeight: false, desc: 'Suteikia papildomo kardio efekto.', video: 'https://www.youtube.com/results?search_query=mountain+climbers+form' },
        // 3. Pilateso kamuoliukas
        { name: 'Kamuoliuko perdavimas iš rankų į kojas (Dead Bug)', gear: 'Pilateso kamuoliukas', sets: 3, reps: '12 k.', isWeight: false, desc: 'Gulėdami ant nugaros, perduokite kamuolį iš rankų į kojas nuleisdami priešingas galūnes.', video: 'https://www.youtube.com/results?search_query=dead+bug+with+ball' },
        // 4. Volas (Foam Roller)
        { name: 'Sėdmenų tiltelis pėdas padėjus ant volo', gear: 'Trumpas volas', sets: 3, reps: '12-15 k.', isWeight: false, desc: 'Pėdos ant volo, dubuo keliamas aukštyn. Volas reikalauja didelės stabilizacijos.', video: 'https://www.youtube.com/results?search_query=glute+bridge+on+foam+roller' },
        { name: 'Krūtinės atvėrimas ant volo', gear: 'Trumpas volas', sets: 1, reps: '2-3 min', isWeight: false, desc: 'Atsigulkite skersai volo po mentėmis, prilaikykite galvą ir atsiloškite.', video: 'https://www.youtube.com/results?search_query=foam+roller+thoracic+extension' },
        // Tempimas
        { name: 'Tempimas: Vaiko poza ir pilnas atsipalaidavimas', gear: 'Kilimėlis', sets: 1, reps: '3-4 min.', isWeight: false, desc: 'Vaiko poza, stuburo tempimas, gilus kvėpavimas nugaros įtampos atpalaidavimui.', video: 'https://www.youtube.com/results?search_query=full+body+cool+down+stretches' }
    ],
    'RYTINE': [
        { name: '1. Kaklo ir pečių sukimai', gear: 'Kūno svoris', sets: 1, reps: '1', isWeight: false, desc: 'Po 6–8 kartus lėtai į abi puses, po to platūs pečių sukimai.', video: 'https://www.youtube.com/results?search_query=neck+and+shoulder+rolls+warm+up' },
        { name: '2. Rankų mojai ir krūtinės atvėrimas', gear: 'Kūno svoris', sets: 1, reps: '1', isWeight: false, desc: '30 sek. plačiai skėskite rankas į šonus ir kryžiuokite priešais save.', video: 'https://www.youtube.com/results?search_query=arm+crossover+chest+opener' },
        { name: '3. Sienos angelai („Wall Angels“)', gear: 'Kūno svoris', sets: 1, reps: '1', isWeight: false, desc: '10–12 kartų. Atsistokite nugara prie sienos, slinkite „L“ rankomis aukštyn ir žemyn.', video: 'https://www.youtube.com/results?search_query=wall+angels+exercise+posture' },
        { name: '4. Liemens sukimai ir šonų tempimas', gear: 'Kūno svoris', sets: 1, reps: '1', isWeight: false, desc: 'Po 8 kartus į kiekvieną pusę.', video: 'https://www.youtube.com/results?search_query=standing+torso+twist+stretch' },
        { name: '5. Pritūpimai su rankų iškėlimu', gear: 'Kūno svoris', sets: 1, reps: '1', isWeight: false, desc: '10–12 kartų. Pritūpus apačioje iškelkite rankas virš galvos.', video: 'https://www.youtube.com/results?search_query=squat+with+arm+raise' },
        { name: '6. Įtūpstas su liemens pasukimu', gear: 'Kūno svoris', sets: 1, reps: '1', isWeight: false, desc: 'Po 6 kartus kiekvienai pusei.', video: 'https://www.youtube.com/results?search_query=lunge+with+spinal+twist' },
        { name: '7. Dinaminis „Šuo-Kobra“', gear: 'Kūno svoris', sets: 1, reps: '1', isWeight: false, desc: '8–10 perėjimų iš „Žemyn žiūrinčio šuns“ į kobros/išsitiesimo pozą.', video: 'https://www.youtube.com/results?search_query=downward+dog+to+cobra+flow' },
        { name: '8. Švytuokliniai kojų mojai', gear: 'Kūno svoris', sets: 1, reps: '1', isWeight: false, desc: 'Po 10 kartų kojai į priekį/atgal ir į šonus.', video: 'https://www.youtube.com/results?search_query=leg+swings+dynamic+warm+up' },
        { name: '9. Pėdų ir čiurnų sukimai', gear: 'Kūno svoris', sets: 1, reps: '1', isWeight: false, desc: 'Po 10 ratų kiekvienai kojai.', video: 'https://www.youtube.com/results?search_query=ankle+rolls+mobility' },
        { name: '10. Pasistiebimai ant pėdų', gear: 'Kūno svoris', sets: 1, reps: '1', isWeight: false, desc: '15–20 kartų. Aktyvina blauzdų raumenis ir pėdos skliautą.', video: 'https://www.youtube.com/results?search_query=calf+raises+ankle+stability' }
    ],
    'VAKARINE': [
        { name: '1. Pečių prasukimai su diržu', gear: 'Diržas', sets: 1, reps: '1', isWeight: false, desc: '10–12 pakartojimų. Laikykite ištemptą diržą ir lėtai tiesiomis rankomis perkelkite jį už nugaros ir atgal.', video: 'https://www.youtube.com/results?search_query=shoulder+dislocation+with+strap' },
        { name: '2. Dvigubas pagurklis („Chin Tucks“)', gear: 'Kūno svoris', sets: 1, reps: '1', isWeight: false, desc: '12–15 kartų. Sėdint tiesiai, stumkite galvą horizontaliai atgal, užlaikykite 2–3 sek.', video: 'https://www.youtube.com/results?search_query=chin+tuck+posture+exercise' },
        { name: '3. Katės ir šuns poza (Katė-Kupranugaris)', gear: 'Kilimėlis', sets: 1, reps: '1', isWeight: false, desc: '45 sek. Įkvepiant rieskite nugarą žemyn, iškvepiant – apvalinkite į viršų.', video: 'https://www.youtube.com/results?search_query=cat+cow+stretch' },
        { name: '4. Paukštis-šuo', gear: 'Kilimėlis', sets: 1, reps: '1', isWeight: false, desc: 'Keturiomis tieskite priešingą ranką ir koją, stabilizuokite stuburą. Po 12–15 kartų kiekvienai pusei.', video: 'https://www.youtube.com/results?search_query=bird+dog+exercise' },
        { name: '5. Gili vaiko poza su pasukimu', gear: 'Kilimėlis', sets: 1, reps: '1', isWeight: false, desc: 'Po 30 sek. kiekvienai pusei, tempiant nugarą.', video: 'https://www.youtube.com/results?search_query=childs+pose+with+rotation' },
        { name: '6. Nugaros sukimas gulint (Suktuko poza)', gear: 'Kilimėlis', sets: 1, reps: '1', isWeight: false, desc: 'Po 30 sek. vienam šonui.', video: 'https://www.youtube.com/results?search_query=supine+spinal+twist+stretch' },
        { name: '7. Drugelio poza ant nugaros', gear: 'Kilimėlis', sets: 1, reps: '1', isWeight: false, desc: '45 sek. atveriant klubus ir giliai kvėpuojant.', video: 'https://www.youtube.com/results?search_query=reclining+butterfly+pose' },
        { name: '8. Kelių pritraukimas prie krūtinės', gear: 'Kilimėlis', sets: 1, reps: '1', isWeight: false, desc: '1 min. gulint ant nugaros, švelniai pasisupuojant į šonus.', video: 'https://www.youtube.com/results?search_query=knees+to+chest+rocking' }
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
    
    // Force reset custom workouts if they don't have the new warm-up, stretches or habits
    if (!custom || !custom.NAMAI_1 || custom.NAMAI_1.length < 10 || !custom.NAMAI_2 || custom.NAMAI_2.length < 11 || !custom.RYTINE || !custom.VAKARINE) {
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
    if(type === 'RYTINE') displayTitle = 'Rytinė mankšta';
    if(type === 'VAKARINE') displayTitle = 'Vakarinė mankšta';
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
    
    const isHabit = currentEditType === 'RYTINE' || currentEditType === 'VAKARINE';
    
    card.innerHTML = `
        <div class="edit-actions-group">
            <button class="btn" onclick="moveExerciseUp(this)" title="Pakelti aukštyn">
                <i data-lucide="chevron-up" class="lucide-sm"></i>
            </button>
            <button class="btn" onclick="moveExerciseDown(this)" title="Nuleisti žemyn">
                <i data-lucide="chevron-down" class="lucide-sm"></i>
            </button>
            <button class="btn" style="color: var(--danger);" onclick="this.closest('.exercise-card').remove()" title="Ištrinti">
                <i data-lucide="trash-2" class="lucide-sm"></i>
            </button>
        </div>
        
        <div class="form-group" style="padding-right: 100px;">
            <label class="form-label">${isHabit ? 'Mankštos pratimo pavadinimas' : 'Pratimo Pavadinimas'}</label>
            <input type="text" class="form-input edit-name" value="${ex.name || ''}" placeholder="Pvz., Pritūpimai">
        </div>
        
        <div class="form-row" style="${isHabit ? 'display: none;' : ''}">
            <div class="form-group">
                <label class="form-label">Inventorius</label>
                <input type="text" class="form-input edit-gear" value="${ex.gear || ''}" placeholder="Pvz., Hanteliai">
            </div>
            <div class="form-group" style="flex:0.6;">
                <label class="form-label">Serijos</label>
                <input type="number" class="form-input edit-sets" value="${ex.sets || 3}" min="1" max="10">
            </div>
        </div>
        
        <div class="form-row" style="${isHabit ? 'display: none;' : ''}">
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
            <label class="form-label">${isHabit ? 'Aprašymas / Nurodymai' : 'Paaiškinimas'}</label>
            <textarea class="form-input form-textarea edit-desc" placeholder="Trumpi jūsų žodžiai atsiminimui...">${ex.desc || ''}</textarea>
        </div>
    `;
    return card;
}

function moveExerciseUp(button) {
    const card = button.closest('.exercise-card');
    const previous = card.previousElementSibling;
    if (previous && previous.classList.contains('edit-card')) {
        card.parentNode.insertBefore(card, previous);
    }
}

function moveExerciseDown(button) {
    const card = button.closest('.exercise-card');
    const next = card.nextElementSibling;
    if (next && next.classList.contains('edit-card')) {
        card.parentNode.insertBefore(next, card);
    }
}

function addBlankExerciseForm() {
    const container = document.getElementById('edit-exercise-container');
    const isHabit = currentEditType === 'RYTINE' || currentEditType === 'VAKARINE';
    const newEx = { 
        name: '', 
        gear: isHabit ? 'Kūno svoris' : '', 
        sets: 1, 
        reps: '1', 
        isWeight: false, 
        desc: '', 
        video: '' 
    };
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
    
    if (currentEditType === 'RYTINE' || currentEditType === 'VAKARINE') {
        renderHabitSteps();
    } else {
        renderTodayStrengthCard();
    }
    
    // Vibrate to confirm
    if(navigator.vibrate) navigator.vibrate([50, 50, 50]);
    goHome();
}

function renderHabitSteps() {
    const renderSteps = (type, listId) => {
        const container = document.getElementById(listId);
        if (!container) return;
        container.innerHTML = '';
        
        const list = workouts[type] || [];
        list.forEach((ex) => {
            const item = document.createElement('div');
            item.className = 'step-item';
            item.innerHTML = `
                <div>
                    <div class="step-text">${ex.name}</div>
                    ${ex.desc ? `<div class="step-desc">${ex.desc}</div>` : ''}
                </div>
                ${ex.video ? `<a href="${ex.video}" target="_blank" class="play-btn"><i data-lucide="play" class="lucide-sm"></i></a>` : ''}
            `;
            container.appendChild(item);
        });
    };
    
    renderSteps('RYTINE', 'list-rytine');
    renderSteps('VAKARINE', 'list-vakarine');
    
    if (window.lucide) lucide.createIcons();
}

let selectedDate = new Date();

function updateDateBadge() {
    const today = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const dateStr = selectedDate.toLocaleDateString('lt-LT', options);
    const badge = document.getElementById('current-date');
    if (badge) {
        if (selectedDate.toDateString() === today.toDateString()) {
            badge.textContent = `Šiandien (${dateStr.charAt(0).toUpperCase() + dateStr.slice(1)})`;
        } else {
            badge.textContent = dateStr.charAt(0).toUpperCase() + dateStr.slice(1);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadData();
    updateDateBadge();
    renderHabitSteps();

    renderWeeklySchedule();
    renderMonthlyChallenge();
    renderTodayStrengthCard();
    checkDailyHabits();
    
    if (window.lucide) lucide.createIcons();
    showView('home-view');
});

const defaultDayWorkouts = {
    1: { name: 'Apatinė', type: 'NAMAI_1' },
    2: { name: 'Mankštos', type: null },
    3: { name: 'Viršutinė', type: 'NAMAI_2' },
    4: { name: 'Mankštos', type: null },
    5: { name: 'Visas K.', type: 'NAMAI_3' },
    6: { name: 'Mankštos', type: null },
    0: { name: 'Mankštos', type: null }
};

let dayWorkouts = JSON.parse(localStorage.getItem('weekly_schedule')) || defaultDayWorkouts;

function openScheduleSettings() {
    showView('schedule-settings-view');
    const container = document.getElementById('schedule-settings-container');
    if (!container) return;
    container.innerHTML = '';

    const dayNames = {
        1: 'Pirmadienis',
        2: 'Antradienis',
        3: 'Trečiadienis',
        4: 'Ketvirtadienis',
        5: 'Penktadienis',
        6: 'Šeštadienis',
        0: 'Sekmadienis'
    };

    const order = [1, 2, 3, 4, 5, 6, 0];

    order.forEach(dayIdx => {
        const currentVal = dayWorkouts[dayIdx].type || 'null';
        const group = document.createElement('div');
        group.className = 'form-group';
        group.style.marginBottom = '14px';
        group.innerHTML = `
            <label class="form-label" style="font-weight:700; margin-bottom: 6px;">${dayNames[dayIdx]}</label>
            <select class="form-input day-schedule-select" data-day="${dayIdx}" style="background: rgba(0,0,0,0.3); color:#fff; border: 1px solid var(--card-border); border-radius: 8px;">
                <option value="null" ${currentVal === 'null' ? 'selected' : ''}>Poilsis / Mankštos</option>
                <option value="NAMAI_1" ${currentVal === 'NAMAI_1' ? 'selected' : ''}>1 Diena: Apatinė dalis</option>
                <option value="NAMAI_2" ${currentVal === 'NAMAI_2' ? 'selected' : ''}>2 Diena: Viršutinė dalis</option>
                <option value="NAMAI_3" ${currentVal === 'NAMAI_3' ? 'selected' : ''}>3 Diena: Visas kūnas</option>
            </select>
        `;
        container.appendChild(group);
    });
}

function saveScheduleSettings() {
    const container = document.getElementById('schedule-settings-container');
    const selects = container.querySelectorAll('.day-schedule-select');
    
    const workoutNames = {
        'NAMAI_1': 'Apatinė',
        'NAMAI_2': 'Viršutinė',
        'NAMAI_3': 'Visas K.',
        'null': 'Mankštos'
    };

    selects.forEach(select => {
        const dayIdx = parseInt(select.getAttribute('data-day'));
        const typeVal = select.value === 'null' ? null : select.value;
        dayWorkouts[dayIdx] = {
            name: workoutNames[select.value],
            type: typeVal
        };
    });

    localStorage.setItem('weekly_schedule', JSON.stringify(dayWorkouts));
    
    renderWeeklySchedule();
    renderMonthlyChallenge();
    renderTodayStrengthCard();
    checkDailyHabits();

    if (navigator.vibrate) navigator.vibrate([50, 50, 50]);
    goHome();
}

function isDayFullyCompleted(date) {
    const dateStr = date.toDateString();
    const dayIdx = date.getDay();
    const dayConfig = dayWorkouts[dayIdx];
    if (!dayConfig) return false;
    
    const dayEntries = workoutHistory.filter(h => new Date(h.date).toDateString() === dateStr);
    
    const hasMorning = dayEntries.some(h => h.type === 'Rytinė mankšta');
    const hasEvening = dayEntries.some(h => h.type === 'Vakarinė mankšta');
    
    const isStrengthDay = dayConfig.type !== null;
    const hasStrength = isStrengthDay && dayEntries.some(h => h.type === dayConfig.type);
    
    return isStrengthDay ? (hasMorning && hasEvening && hasStrength) : (hasMorning && hasEvening);
}

function renderWeeklySchedule() {
    const grid = document.getElementById('weekly-schedule-grid');
    if (!grid) return;
    grid.innerHTML = '';

    const today = new Date();
    const currentDay = today.getDay();
    const distanceToMonday = currentDay === 0 ? -6 : 1 - currentDay;
    const monday = new Date(today);
    monday.setDate(today.getDate() + distanceToMonday);

    const daysLTShort = ['Pr', 'An', 'Tr', 'Kt', 'Pn', 'Št', 'Sk'];
    const dayIndices = [1, 2, 3, 4, 5, 6, 0];

    let completedCount = 0;

    dayIndices.forEach((dayIdx, index) => {
        const dateOfThisDay = new Date(monday);
        dateOfThisDay.setDate(monday.getDate() + index);
        const dateStr = dateOfThisDay.toDateString();

        const isToday = dateOfThisDay.toDateString() === today.toDateString();
        const isSelected = dateOfThisDay.toDateString() === selectedDate.toDateString();
        const dayWorkoutsList = workoutHistory.filter(h => new Date(h.date).toDateString() === dateStr);
        
        const hasMorning = dayWorkoutsList.some(h => h.type === 'Rytinė mankšta');
        const hasEvening = dayWorkoutsList.some(h => h.type === 'Vakarinė mankšta');
        
        const dayConfig = dayWorkouts[dayIdx];
        const isStrengthDay = dayConfig.type !== null;
        const hasStrength = isStrengthDay && dayWorkoutsList.some(h => h.type === dayConfig.type);

        const isCompleted = isDayFullyCompleted(dateOfThisDay);
        if (isCompleted) completedCount++;

        const dayCard = document.createElement('div');
        dayCard.className = `schedule-day ${isToday ? 'today' : ''} ${isSelected ? 'selected' : ''} ${isCompleted ? 'active' : ''}`;
        
        let statusHtml = `
            <div class="schedule-day-indicators">
                <span class="ind-dot morning ${hasMorning ? 'done' : ''}" title="Rytinė mankšta"></span>
                <span class="ind-dot evening ${hasEvening ? 'done' : ''}" title="Vakarinė mankšta"></span>
                ${isStrengthDay ? `<span class="ind-dot strength ${hasStrength ? 'done' : ''}" title="Jėgos treniruotė"></span>` : ''}
            </div>
        `;

        dayCard.innerHTML = `
            <span class="schedule-day-name">${daysLTShort[index]}</span>
            ${statusHtml}
            <span class="schedule-day-workout-tag">${dayConfig.name}</span>
        `;

        dayCard.onclick = (e) => {
            e.stopPropagation();
            selectedDate = dateOfThisDay;
            updateDateBadge();
            renderWeeklySchedule();
            renderTodayStrengthCard();
            checkDailyHabits();
        };

        grid.appendChild(dayCard);
    });

    const statsEl = document.querySelector('.weekly-progress-stats');
    if (statsEl) {
        statsEl.textContent = `${completedCount} pilnai atliktos dienos šią savaitę`;
    }

    if (window.lucide) lucide.createIcons();
}

function renderMonthlyChallenge() {
    const grid = document.getElementById('challenge-grid-container');
    if (!grid) return;
    grid.innerHTML = '';

    const today = new Date();
    let streak = 0;
    let tempStreak = 0;

    let checkDate = new Date(today);
    while (true) {
        if (isDayFullyCompleted(checkDate)) {
            tempStreak++;
            checkDate.setDate(checkDate.getDate() - 1);
        } else {
            if (checkDate.toDateString() === today.toDateString()) {
                checkDate.setDate(checkDate.getDate() - 1);
                if (isDayFullyCompleted(checkDate)) {
                    tempStreak = 1;
                    checkDate.setDate(checkDate.getDate() - 1);
                    continue;
                }
            }
            break;
        }
    }
    streak = tempStreak;

    const streakEl = document.getElementById('streak-counter');
    if (streakEl) {
        streakEl.textContent = `Serija: ${streak} d. 🔥`;
    }

    const last30Days = [];
    for (let i = 29; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(today.getDate() - i);
        last30Days.push(date);
    }

    // Pad first week to align under correct weekday columns (Pr, An, Tr, Kt, Pn, Št, Sk)
    const firstDay = last30Days[0];
    const firstDayOfWeek = firstDay.getDay(); // 0 = Sunday, 1 = Monday...
    const paddingCells = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;

    for (let p = 0; p < paddingCells; p++) {
        const emptyCell = document.createElement('div');
        emptyCell.className = 'challenge-day empty';
        emptyCell.style.border = 'none';
        emptyCell.style.background = 'transparent';
        grid.appendChild(emptyCell);
    }

    last30Days.forEach(dateObj => {
        const dateStr = dateObj.toDateString();
        const isToday = dateStr === today.toDateString();
        const hasWorkout = isDayFullyCompleted(dateObj);

        const dayCell = document.createElement('div');
        dayCell.className = `challenge-day ${isToday ? 'today' : ''} ${hasWorkout ? 'completed' : ''}`;
        dayCell.textContent = dateObj.getDate();
        dayCell.title = dateObj.toLocaleDateString('lt-LT');

        grid.appendChild(dayCell);
    });
}

function checkDailyHabits() {
    const targetDateStr = selectedDate.toDateString();
    
    const todaysHabits = workoutHistory.filter(h => {
        const isSameDay = new Date(h.date).toDateString() === targetDateStr;
        return isSameDay && h.isHabit;
    });

    const hasMorning = todaysHabits.some(h => h.type === 'Rytinė mankšta');
    const hasEvening = todaysHabits.some(h => h.type === 'Vakarinė mankšta');

    function updateHabitBtn(id, isDone) {
        const btn = document.getElementById(id);
        if(!btn) return;
        if(isDone) {
            btn.classList.add('done');
            btn.innerHTML = '<i data-lucide="check-circle" class="lucide-sm"></i>';
        } else {
            btn.classList.remove('done');
            btn.innerHTML = '<i data-lucide="circle" class="lucide-sm"></i>';
        }
    }

    updateHabitBtn('btn-ryt', hasMorning);
    updateHabitBtn('btn-vak', hasEvening);
    
    if (window.lucide) lucide.createIcons();
}

function logHabit(name) {
    const targetDateStr = selectedDate.toDateString();
    const alreadyLogged = workoutHistory.some(h => new Date(h.date).toDateString() === targetDateStr && h.type === name);
    
    if (alreadyLogged) {
        workoutHistory = workoutHistory.filter(h => !(new Date(h.date).toDateString() === targetDateStr && h.type === name));
    } else {
        const logDate = new Date(selectedDate);
        const now = new Date();
        logDate.setHours(now.getHours(), now.getMinutes(), now.getSeconds());
        
        workoutHistory.push({
            date: logDate.toISOString(),
            type: name,
            isHabit: true,
            exercises: []
        });
        if(navigator.vibrate) navigator.vibrate(50);
    }
    
    localStorage.setItem('workout_history', JSON.stringify(workoutHistory));
    checkDailyHabits();
    renderWeeklySchedule();
    renderMonthlyChallenge();
    renderTodayStrengthCard();
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
    renderWeeklySchedule();
    renderMonthlyChallenge();
    
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
        if (viewId === 'history-view') document.getElementById('nav-history').classList.add('active');
        if (nav) {
            nav.style.display = 'flex';
            nav.classList.remove('hidden');
        }
        
        checkDailyHabits();
        renderWeeklySchedule();
        renderMonthlyChallenge();
        renderTodayStrengthCard();
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
    
    renderWeeklySchedule();
    renderMonthlyChallenge();
    renderTodayStrengthCard();
    goHome();
}

function getCaloriesStats() {
    const today = new Date();
    
    // Start of current week (Monday)
    const currentDay = today.getDay();
    const distanceToMonday = currentDay === 0 ? -6 : 1 - currentDay;
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() + distanceToMonday);
    startOfWeek.setHours(0,0,0,0);
    
    // Start of current month
    const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    startOfMonth.setHours(0,0,0,0);
    
    let caloriesWeek = 0;
    let caloriesMonth = 0;
    
    workoutHistory.forEach(h => {
        const logDate = new Date(h.date);
        let kcal = 0;
        if (h.type === 'Rytinė mankšta') kcal = 50;
        else if (h.type === 'Vakarinė mankšta') kcal = 30;
        else if (h.type.startsWith('NAMAI')) kcal = 250;
        
        if (logDate >= startOfWeek) {
            caloriesWeek += kcal;
        }
        if (logDate >= startOfMonth) {
            caloriesMonth += kcal;
        }
    });
    
    return { week: caloriesWeek, month: caloriesMonth };
}

function renderHistory() {
    renderMonthlyChallenge();
    
    // Render Calories
    const kcalStats = getCaloriesStats();
    const statsWeekEl = document.getElementById('stats-calories-week');
    const statsMonthEl = document.getElementById('stats-calories-month');
    if (statsWeekEl) statsWeekEl.textContent = `${kcalStats.week} kcal`;
    if (statsMonthEl) statsMonthEl.textContent = `${kcalStats.month} kcal`;

    // Render Body Progress History
    renderBodyProgressHistory();
}

function logBodyProgress() {
    const weightInput = document.getElementById('input-weight');
    const waistInput = document.getElementById('input-waist');
    const hipsInput = document.getElementById('input-hips');
    const armsInput = document.getElementById('input-arms');
    
    const weight = parseFloat(weightInput.value);
    const waist = parseFloat(waistInput.value);
    const hips = parseFloat(hipsInput.value);
    const arms = parseFloat(armsInput.value);
    
    if (isNaN(weight) && isNaN(waist) && isNaN(hips) && isNaN(arms)) {
        alert('Įveskite bent vieną matavimą!');
        return;
    }
    
    const newEntry = {
        date: new Date().toISOString(),
        weight: isNaN(weight) ? null : weight,
        waist: isNaN(waist) ? null : waist,
        hips: isNaN(hips) ? null : hips,
        arms: isNaN(arms) ? null : arms
    };
    
    let bodyProgress = JSON.parse(localStorage.getItem('body_progress') || '[]');
    bodyProgress.push(newEntry);
    localStorage.setItem('body_progress', JSON.stringify(bodyProgress));
    
    // Clear inputs
    weightInput.value = '';
    waistInput.value = '';
    hipsInput.value = '';
    armsInput.value = '';
    
    if (navigator.vibrate) navigator.vibrate(50);
    renderHistory();
}

function renderBodyProgressHistory() {
    const container = document.getElementById('measurements-history-container');
    if (!container) return;
    container.innerHTML = '';
    
    let bodyProgress = JSON.parse(localStorage.getItem('body_progress') || '[]');
    if (bodyProgress.length === 0) {
        container.innerHTML = '<p class="text-dim" style="text-align:center; font-size:12px; margin: 10px 0;">Nėra jokių matavimų įrašų.</p>';
        return;
    }
    
    const sorted = [...bodyProgress].sort((a, b) => new Date(a.date) - new Date(b.date));
    const renderedList = [];
    
    sorted.forEach((entry, idx) => {
        const prev = idx > 0 ? sorted[idx - 1] : null;
        
        const getDiff = (currVal, prevVal, unit) => {
            if (currVal === null || prevVal === null) return '';
            const diff = currVal - prevVal;
            if (diff === 0) return '';
            const sign = diff > 0 ? '+' : '';
            const color = diff < 0 ? 'var(--success)' : 'var(--danger)';
            return `<span style="font-size:10px; color:${color}; font-weight:700; margin-left:4px;">(${sign}${diff.toFixed(1)} ${unit})</span>`;
        };
        
        const wDiff = getDiff(entry.weight, prev ? prev.weight : null, 'kg');
        const waDiff = getDiff(entry.waist, prev ? prev.waist : null, 'cm');
        const hDiff = getDiff(entry.hips, prev ? prev.hips : null, 'cm');
        const aDiff = getDiff(entry.arms, prev ? prev.arms : null, 'cm');
        
        const dateObj = new Date(entry.date);
        const dateStr = dateObj.toLocaleDateString('lt-LT', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
        
        const deleteBtn = `<button onclick="deleteBodyProgressItem(${idx})" style="background:transparent; border:none; color:var(--danger); padding:0; cursor:pointer; display:flex; align-items:center;"><i data-lucide="trash-2" class="lucide-sm" style="width:14px; height:14px;"></i></button>`;
        
        let rowHtml = `
            <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--card-border); padding: 10px 12px; border-radius: 8px; display: flex; flex-direction: column; gap: 4px; margin-bottom: 8px;">
                <div class="flex justify-between items-center" style="border-bottom: 1px solid rgba(255,255,255,0.03); padding-bottom:4px; margin-bottom:4px;">
                    <span style="font-size: 11px; font-weight:700; color: var(--accent);">${dateStr}</span>
                    ${deleteBtn}
                </div>
                <div class="flex gap-2" style="font-size:12px; justify-content: space-between; flex-wrap: wrap;">
                    ${entry.weight !== null && entry.weight !== undefined ? `<span style="white-space:nowrap;">Svoris: <strong>${entry.weight} kg</strong>${wDiff}</span>` : ''}
                    ${entry.waist !== null && entry.waist !== undefined ? `<span style="white-space:nowrap;">Liemuo: <strong>${entry.waist} cm</strong>${waDiff}</span>` : ''}
                    ${entry.hips !== null && entry.hips !== undefined ? `<span style="white-space:nowrap;">Klubai: <strong>${entry.hips} cm</strong>${hDiff}</span>` : ''}
                    ${entry.arms !== null && entry.arms !== undefined ? `<span style="white-space:nowrap;">Rankos: <strong>${entry.arms} cm</strong>${aDiff}</span>` : ''}
                </div>
            </div>
        `;
        renderedList.unshift(rowHtml);
    });
    
    container.innerHTML = renderedList.join('');
    if (window.lucide) lucide.createIcons();
}

function deleteBodyProgressItem(sortedIdx) {
    let bodyProgress = JSON.parse(localStorage.getItem('body_progress') || '[]');
    const sorted = [...bodyProgress].sort((a, b) => new Date(a.date) - new Date(b.date));
    const targetItem = sorted[sortedIdx];
    
    bodyProgress = bodyProgress.filter(h => h.date !== targetItem.date);
    localStorage.setItem('body_progress', JSON.stringify(bodyProgress));
    
    if (navigator.vibrate) navigator.vibrate(50);
    renderHistory();
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
        renderWeeklySchedule();
        renderMonthlyChallenge();
        renderTodayStrengthCard();
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
            renderWeeklySchedule();
            renderMonthlyChallenge();
            renderTodayStrengthCard();
        } catch (err) {
            console.error('Nepavyko perskaityti failo.', err);
        }
        event.target.value = '';
    };
    reader.readAsText(file);
}

// Collapsible Dashboard Logic
function toggleCollapse(id) {
    const content = document.getElementById('content-' + id);
    const card = document.getElementById('card-' + id);
    const icon = document.getElementById('icon-' + id);
    
    if (content) {
        content.classList.toggle('hidden');
        const isHidden = content.classList.contains('hidden');
        if (card && card.classList.contains('collapsible-card')) {
            card.classList.toggle('open', !isHidden);
        }
        if (icon) {
            icon.style.transform = isHidden ? 'rotate(0deg)' : 'rotate(180deg)';
        }
    }
}

// Inline Workout Expand & Populate
function toggleWorkoutInline(type, suffix) {
    const content = document.getElementById('content-' + suffix);
    const card = document.getElementById('card-' + suffix);
    const icon = document.getElementById('icon-' + suffix);
    const container = document.getElementById('exercises-' + suffix);
    
    if (!content) return;
    
    content.classList.toggle('hidden');
    const isHidden = content.classList.contains('hidden');
    if (card) card.classList.toggle('open', !isHidden);
    if (icon) icon.style.transform = isHidden ? 'rotate(0deg)' : 'rotate(180deg)';
    
    if (isHidden) return;
    
    container.innerHTML = '';
    
    if(!workouts[type] || workouts[type].length === 0) {
        container.innerHTML = '<p class="text-dim">Nėra pratimų šioje treniruotėje.</p>';
        return;
    }
    
    const prevSession = workoutHistory.slice().reverse().find(h => h.type === type);
    
    workouts[type].forEach((ex, idx) => {
        const itemCard = document.createElement('div');
        itemCard.className = 'exercise-card';
        itemCard.style.padding = '12px';
        itemCard.style.marginBottom = '12px';
        itemCard.style.background = 'rgba(0,0,0,0.2)';
        itemCard.style.borderRadius = '10px';
        itemCard.style.border = '1px solid rgba(255,255,255,0.05)';
        
        if (ex.name.toLowerCase().includes("apšilimas") || ex.sets === 1 && idx <= 1) {
            itemCard.style.borderLeft = "3px solid var(--warning)";
        } else if (ex.name.toLowerCase().includes("tempimas") || ex.name.toLowerCase().includes("atsipalaidavimas") || ex.sets === 1 && idx > 3) {
            itemCard.style.borderLeft = "3px solid var(--secondary)";
        } else {
            itemCard.style.borderLeft = "3px solid var(--primary)";
        }
        
        let prevWeights = ['', '', ''];
        if (prevSession && prevSession.exercises[idx]) {
            prevWeights = prevSession.exercises[idx].weights || ['', '', ''];
        }

        let setsHtml = `<div class="exercise-sets" id="track-inline-${suffix}-${idx}">`;
        for(let i = 0; i < ex.sets; i++) {
            let prevVal = prevWeights[i] || '';
            let placeholder = prevVal ? `${prevVal} kg` : 'kg';
            let setName = ex.sets === 1 ? 'Atlikimas' : `${i+1} Serija`;
            
            setsHtml += `
                <div class="set-row" style="display:flex; justify-content:space-between; align-items:center; margin-top:8px;">
                    <span class="set-info" style="font-size: 13px; color:var(--text-dim);">${setName}</span>
                    <div class="set-input-group" style="display:flex; gap:8px; align-items:center;">
                        ${ex.isWeight ? `<input type="number" class="set-input" placeholder="${placeholder}" value="${prevVal}" style="width:60px; padding:4px 8px; border-radius:6px; background:rgba(0,0,0,0.3); border:1px solid rgba(255,255,255,0.1); color:#fff; text-align:center;">` : ''}
                        <label class="custom-checkbox-wrap">
                            <input type="checkbox" class="custom-checkbox" onchange="markSetDone(this, ${ex.sets === 1})">
                        </label>
                    </div>
                </div>
            `;
        }
        setsHtml += '</div>';

        itemCard.innerHTML = `
            <div class="exercise-header" style="display:flex; justify-content:space-between; align-items:flex-start;">
                <div class="exercise-info" style="flex:1;">
                    <h4 style="font-size: 15px; margin:0 0 4px 0; font-weight:700; color:var(--text-main);">${ex.name}</h4>
                    <p style="font-size: 12px; color:var(--text-dim); margin:0;">${ex.gear} • <strong>${ex.reps}</strong></p>
                    ${ex.desc ? `<p style="font-size: 11px; color: var(--text-dim); margin-top: 4px; padding-right: 10px; line-height:1.3;">${ex.desc}</p>` : ''}
                </div>
                ${ex.video ? `<a href="${ex.video}" target="_blank" class="btn btn-icon" style="padding:4px; flex-shrink:0;">
                    <i data-lucide="play" class="lucide-sm"></i>
                </a>` : ''}
            </div>
            ${setsHtml}
        `;
        container.appendChild(itemCard);
    });
    
    if (window.lucide) lucide.createIcons();
}

function saveStrengthWorkoutInline(type, suffix) {
    const container = document.getElementById('exercises-' + suffix);
    if (!container) return;
    
    const workoutData = workouts[type];
    if (!workoutData) return;
    
    const sessionData = {
        date: new Date().toISOString(),
        type: type,
        isHabit: false,
        exercises: []
    };

    workoutData.forEach((ex, idx) => {
        const trackDiv = document.getElementById(`track-inline-${suffix}-${idx}`);
        const storedData = [];
        
        if (trackDiv) {
            const inputs = trackDiv.querySelectorAll('.set-input');
            inputs.forEach(input => {
                storedData.push(input.value || '');
            });
        }

        sessionData.exercises.push({
            name: ex.name,
            weights: storedData
        });
    });

    workoutHistory.push(sessionData);
    localStorage.setItem('workout_history', JSON.stringify(workoutHistory));
    
    // Collapse card
    const content = document.getElementById('content-' + suffix);
    if (content) content.classList.add('hidden');
    const card = document.getElementById('card-' + suffix);
    if (card) card.classList.remove('open');
    const icon = document.getElementById('icon-' + suffix);
    if (icon) icon.style.transform = 'rotate(0deg)';
    
    renderWeeklySchedule();
    renderMonthlyChallenge();
    renderTodayStrengthCard();
    checkDailyHabits();
    
    if (navigator.vibrate) navigator.vibrate(150);
    alert('Treniruotė sėkmingai išsaugota!');
}

function quickSaveStrength(type, suffix) {
    const targetDateStr = selectedDate.toDateString();
    const alreadyLogged = workoutHistory.some(h => new Date(h.date).toDateString() === targetDateStr && h.type === type);
    
    if (alreadyLogged) {
        workoutHistory = workoutHistory.filter(h => !(new Date(h.date).toDateString() === targetDateStr && h.type === type));
    } else {
        const logDate = new Date(selectedDate);
        const now = new Date();
        logDate.setHours(now.getHours(), now.getMinutes(), now.getSeconds());

        const sessionData = {
            date: logDate.toISOString(),
            type: type,
            isHabit: false,
            exercises: []
        };
        workouts[type].forEach(ex => {
            sessionData.exercises.push({
                name: ex.name,
                weights: Array(ex.sets).fill('')
            });
        });
        workoutHistory.push(sessionData);
        if(navigator.vibrate) navigator.vibrate(50);
    }
    
    localStorage.setItem('workout_history', JSON.stringify(workoutHistory));
    renderWeeklySchedule();
    renderMonthlyChallenge();
    renderTodayStrengthCard();
    checkDailyHabits();
}

// Dynamic Strength Day Selection
function renderTodayStrengthCard() {
    const container = document.getElementById('today-strength-container');
    if (!container) return;
    
    const dayOfWeek = selectedDate.getDay();
    const dayConfig = dayWorkouts[dayOfWeek];
    
    let type = dayConfig ? dayConfig.type : null;
    let title = '';
    let desc = '';
    let icon = 'coffee';
    let colorClass = 'text-accent';
    let borderStyle = 'border-left: 4px solid var(--accent);';
    
    if (type === 'NAMAI_1') {
        title = '1 DIENA: Apatinė dalis & Sėdmenys';
        desc = 'Pritūpimai, sėdmenų tiltas, šoninis kėlimas, įtūpstai atgal ir donkey kicks.';
        icon = 'arrow-down';
        colorClass = 'text-success';
        borderStyle = 'border-left: 4px solid var(--success);';
    } else if (type === 'NAMAI_2') {
        title = '2 DIENA: Viršutinė dalis & Krūtinė';
        desc = 'Svarelių spaudimas, atsispaudimai, trauka, bicepso ir tricepso tiesimas.';
        icon = 'target';
        colorClass = 'text-success';
        borderStyle = 'border-left: 4px solid var(--success);';
    } else if (type === 'NAMAI_3') {
        title = '3 DIENA: Visas kūnas & Šerdis';
        desc = 'Thrusters, lenta su lenkimu, atsilenkimai su spaudimu, rusiškas sukimasis.';
        icon = 'activity';
        colorClass = 'text-success';
        borderStyle = 'border-left: 4px solid var(--success);';
    }
    
    if (type) {
        const targetDateStr = selectedDate.toDateString();
        const isCompleted = workoutHistory.some(h => new Date(h.date).toDateString() === targetDateStr && h.type === type);
        
        container.innerHTML = `
            <div class="glass-card collapsible-card" id="card-strength" style="${borderStyle} padding: 16px; margin-bottom: 12px;">
                <div class="card-header flex justify-between items-center" onclick="toggleWorkoutInline('${type}', 'strength')" style="cursor: pointer;">
                    <div class="flex items-center gap-3">
                        <i data-lucide="${icon}" class="${colorClass} lucide-lg"></i>
                        <div>
                            <h3 class="m-0" style="font-size: 15px; font-weight: 700; color:var(--text-main);">${title}</h3>
                            <p class="text-dim m-0" style="font-size: 11px;">${desc}</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-3" onclick="event.stopPropagation();">
                        <button id="btn-strength-done" class="btn btn-icon done-check-btn ${isCompleted ? 'done' : ''}" onclick="quickSaveStrength('${type}', 'strength')" style="padding: 6px; border-radius: 8px;">
                            <i data-lucide="${isCompleted ? 'check-circle' : 'circle'}" class="lucide-sm"></i>
                        </button>
                        <i data-lucide="chevron-down" id="icon-strength" class="text-dim" style="width: 18px;"></i>
                    </div>
                </div>
                <div class="collapsible-content hidden" id="content-strength" style="margin-top: 14px;">
                    <div class="exercise-list mb-3" id="exercises-strength"></div>
                    <button class="btn btn-primary mt-2" style="width:100%;" onclick="saveStrengthWorkoutInline('${type}', 'strength')">
                        <i data-lucide="check"></i> Išsaugoti
                    </button>
                </div>
            </div>
        `;
    } else {
        container.innerHTML = `
            <div class="glass-card" style="${borderStyle} padding: 16px; margin-bottom: 12px; opacity: 0.85;">
                <div class="flex items-center gap-3">
                    <i data-lucide="coffee" class="text-accent lucide-lg"></i>
                    <div>
                        <h3 class="m-0" style="font-size: 15px; font-weight: 700; color:var(--text-main);">Jėgos Poilsio Diena 🧘</h3>
                        <p class="text-dim m-0" style="font-size: 11px;">Šiandien jėgos treniruotės nėra. Atsistatykite!</p>
                    </div>
                </div>
            </div>
        `;
    }
    
    if (window.lucide) lucide.createIcons();
}
