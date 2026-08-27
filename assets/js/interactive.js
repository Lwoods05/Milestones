const MOOD_STYLES = {
    calm: { background: '#dceeff', color: '#0d1b2a', label: 'Calm blue' },
    bold: { background: '#ffe1d6', color: '#8a1f17', label: 'Bold red-orange' },
    playful: { background: '#fff3c4', color: '#5a2f00', label: 'Playful gold' },
    creative: { background: '#e6d9ff', color: '#3a1e6d', label: 'Creative purple' },
    focused: { background: '#d9f2e3', color: '#1e6b3a', label: 'Focused green' },
};

const IDEA_PROMPTS = [
    'Sketch a superhero inspired by your favorite animal.',
    'Write one page of a comic where the hero loses their power for a day.',
    'Design a coloring page based on your favorite season.',
    'Invent a sidekick character and describe their special skill.',
    'Create a short story about a hidden door in an ordinary house.',
];

function initializeIdeaSpark() {
    const sparkButton = document.querySelector('.spark-idea-btn');
    const sparkOutput = document.querySelector('.spark-idea-output');

    if (!sparkButton || !sparkOutput) {
        return;
    }

    let lastIndex = -1;

    sparkButton.addEventListener('click', () => {
        let nextIndex = Math.floor(Math.random() * IDEA_PROMPTS.length);

        while (nextIndex === lastIndex && IDEA_PROMPTS.length > 1) {
            nextIndex = Math.floor(Math.random() * IDEA_PROMPTS.length);
        }

        lastIndex = nextIndex;
        sparkOutput.textContent = IDEA_PROMPTS[nextIndex];
    });
}

function initializeMoodPreview() {
    const moodInput = document.getElementById('mood-input');
    const moodPreview = document.querySelector('.mood-preview');

    if (!moodInput || !moodPreview) {
        return;
    }

    moodInput.addEventListener('input', () => {
        const moodKey = moodInput.value.trim().toLowerCase();
        const mood = MOOD_STYLES[moodKey];

        if (mood) {
            moodPreview.style.backgroundColor = mood.background;
            moodPreview.style.color = mood.color;
            moodPreview.textContent = `${mood.label} vibes! Keep creating.`;
        } else if (moodKey === '') {
            moodPreview.style.backgroundColor = '';
            moodPreview.style.color = '';
            moodPreview.textContent = 'Your mood preview will update here as you type.';
        } else {
            moodPreview.style.backgroundColor = '';
            moodPreview.style.color = '';
            moodPreview.textContent = 'Try "calm", "bold", "playful", "creative", or "focused".';
        }
    });
}

function createGoalListItem(goalText) {
    const listItem = document.createElement('li');
    listItem.className = 'goal-list-item';

    const goalLabel = document.createElement('span');
    goalLabel.textContent = goalText;

    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.className = 'goal-remove-btn';
    removeButton.setAttribute('aria-label', `Remove goal: ${goalText}`);
    removeButton.textContent = 'Remove';

    removeButton.addEventListener('click', () => {
        listItem.remove();
    });

    listItem.appendChild(goalLabel);
    listItem.appendChild(removeButton);

    return listItem;
}

function initializeGoalList() {
    const goalInput = document.getElementById('goal-input');
    const addGoalButton = document.querySelector('.goal-add-btn');
    const goalList = document.querySelector('.goal-list');

    if (!goalInput || !addGoalButton || !goalList) {
        return;
    }

    const addGoal = () => {
        const goalText = goalInput.value.trim();

        if (goalText === '') {
            return;
        }

        goalList.appendChild(createGoalListItem(goalText));
        goalInput.value = '';
        goalInput.focus();
    };

    addGoalButton.addEventListener('click', addGoal);

    goalInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            addGoal();
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initializeIdeaSpark();
    initializeMoodPreview();
    initializeGoalList();
});
